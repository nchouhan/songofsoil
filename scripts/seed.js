import admin from 'firebase-admin';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// IMPORTANT: Replace the placeholder values below with your actual Firebase project credentials.
// You can get these from your Firebase project settings.
// It is recommended to use environment variables to store your credentials.
const serviceAccount = {
  "type": "service_account",
  "project_id": "your-project-id",
  "private_key_id": "your-private-key-id",
  "private_key": "your-private-key".replace(/\\n/g, '\n'),
  "client_email": "your-client-email",
  "client_id": "your-client-id",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "your-client-x509-cert-url"
};

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
const journalsDirectory = path.join(process.cwd(), 'journals');

async function seedDatabase() {
  const fileNames = fs.readdirSync(journalsDirectory);

  for (const fileName of fileNames) {
    const id = fileName.replace(/\.md$/, '');
    const fullPath = path.join(journalsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    const journalData = {
      title: matterResult.data.title,
      date: new Date(matterResult.data.date),
      content: matterResult.content,
    };

    await db.collection('journals').doc(id).set(journalData);
    console.log(`Seeded journal: ${id}`);
  }

  console.log('Database seeding complete!');
}

seedDatabase().catch(console.error);
