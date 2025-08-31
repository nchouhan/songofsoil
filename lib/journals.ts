import fs from 'fs';
import path from 'path';
import { remark } from 'remark';
import html from 'remark-html';
import admin from './firebase'; // Import the initialized Firebase Admin SDK
import { Timestamp } from 'firebase-admin/firestore';

const postsDirectory = path.join(process.cwd(), 'journals');

export interface JournalData {
  id: string;
  date: string;
  title: string;
  content: string;
  contentHtml?: string;
}

interface FirestoreJournalData {
    title: string;
    date: Timestamp;
    content: string;
}

export async function getSortedJournalsData(): Promise<JournalData[]> {
  const db = admin.firestore();
  const journalsSnapshot = await db.collection('journals').orderBy('date', 'desc').get();
  const journalsData = journalsSnapshot.docs.map(doc => {
    const data = doc.data() as FirestoreJournalData;
    return {
      id: doc.id,
      date: data.date.toDate().toISOString(),
      title: data.title,
      content: data.content,
    };
  });
  return journalsData;
}

export async function getJournalData(id: string): Promise<JournalData> {
  const db = admin.firestore();
  const journalDoc = await db.collection('journals').doc(id).get();
  if (!journalDoc.exists) {
    throw new Error('Journal not found');
  }
  const data = journalDoc.data() as FirestoreJournalData;
  const processedContent = await remark()
    .use(html)
    .process(data.content);
  const contentHtml = processedContent.toString();

  return {
    id: journalDoc.id,
    date: data.date.toDate().toISOString(),
    title: data.title,
    content: data.content,
    contentHtml,
  };
}

export function getAllJournalIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
}
