# Project Blueprint

## Overview

This is a Next.js application for a farm-to-table business called "Song of Soil". The application showcases the farm's purpose, what's in season, a map of the farm locations, and a journal. It also includes a newsletter signup form.

## Current State & Features

### Design & Styling

*   **Layout:** The application uses a modern, clean layout with ample whitespace.
*   **Typography:** A clear and legible font is used, with a good hierarchy of text sizes.
*   **Color Palette:** The color palette is earthy and natural, reflecting the farm's brand.
*   **Components:** Reusable components are used for consistency and maintainability.

### Features

*   **Home Page:** A comprehensive home page with the following sections:
    *   Hero section with a welcoming message.
    *   "Our Purpose" section highlighting the farm's values.
    *   "What's Growing This Month" section with a seasonal calendar.
    *   "Find Us" section with a map of the farm locations.
    *   "From the Journal" section with the latest journal entries.
    *   "Stay in Touch" section with a newsletter signup form.
*   **Journal:** A dedicated page for journal entries, with a list of all entries.
*   **Individual Journal Pages:** Each journal entry has its own page.
*   **Responsive Design:** The application is responsive and works well on both desktop and mobile devices.

## Firebase Integration

### Implemented

*   **Firebase Configuration:** I have created a configuration file to store the Firebase project credentials in `lib/firebase.ts`.
*   **Firebase Admin SDK:** I have initialized the Firebase Admin SDK for server-side operations.
*   **Firestore Integration:** I have integrated Firestore to read journal entries, replacing the static file-based system. The previous file-based logic is commented out in `lib/journals.ts` for reference.
*   **Database Seeding:** I have created a script at `scripts/seed.js` to populate the Firestore database with the existing journal entries from the markdown files.

## Google Maps Integration

I have replaced Mapbox with Google Maps for displaying the farm locations. This includes:

*   **Installed Google Maps Library:** I have installed the `@vis.gl/react-google-maps` package.
*   **Updated Map Component:** The `FarmMap.tsx` component has been updated to use the `AdvancedMarker` component, which is the recommended replacement for the deprecated `Marker`.
*   **API Key Configuration:** A `.env.local` file has been created for you to store your Google Maps API key.
