# Migration Script Documentation

This document provides instructions on how to use the `migrate.mjs` script to migrate product and category data from a REST API to a Sanity backend. This script also handles image uploads to Sanity.

---

## Prerequisites

1. **Environment Variables**:
   Ensure that the following environment variables are set in your `.env.local` file:
   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID=<your-sanity-project-id>
   NEXT_PUBLIC_SANITY_DATASET=<your-sanity-dataset> # e.g., "production"
   NEXT_PUBLIC_SANITY_AUTH_TOKEN=<your-sanity-auth-token>
   BASE_URL=<your-rest-api-base-url> # Default: "https://giaic-hackathon-template-08.vercel.app"
   ```

   Replace `<your-sanity-project-id>`, `<your-sanity-dataset>`, `<your-sanity-auth-token>`, and `<your-rest-api-base-url>` with the appropriate values.

2. **Dependencies**:
   Ensure the following dependencies are installed:
   ```bash
   npm install @sanity/client dotenv
   ```

3. **Sanity Setup**:
   - Your Sanity project should have two schemas:
     1. **Categories Schema**: Contains fields for title and image.
     2. **Products Schema**: Contains fields for title, price, category (as a reference), image, and other product-related fields.

---

## Running the Script

1. **Install Node.js**:
   Make sure Node.js is installed on your system. You can check by running:
   ```bash
   node -v
   ```

2. **Execute the Script**:
   Run the script using Node.js:
   ```bash
   node migrate.mjs
   ```

3. **Process Overview**:
   The script performs the following actions:
   - Fetches categories and products from the provided REST API.
   - Uploads images for categories and products to Sanity.
   - Creates or updates categories and products in the Sanity backend.

---

## Script Details

### Key Functions

1. **`uploadImageToSanity(imageUrl)`**:
   - Fetches an image from the provided URL and uploads it to Sanity.
   - Returns the asset ID of the uploaded image.

   Example usage:
   ```javascript
   const imageId = await uploadImageToSanity('https://example.com/image.png');
   ```

2. **Category Migration**:
   - Fetches categories from the REST API and uploads their images to Sanity.
   - Maps old category IDs to new IDs for reference during product migration.

3. **Product Migration**:
   - Fetches products from the REST API and uploads their images to Sanity.
   - Links each product to its corresponding category using the mapped IDs.

---

## Error Handling

The script includes error handling to ensure smooth execution:
- Logs errors during image uploads, API requests, or data creation in Sanity.
- Skips problematic entries and continues with the migration.
- Exits the process if critical errors occur (e.g., missing environment variables).

---

## Logs and Debugging

- The script outputs progress logs to the console:
  - Categories and products being migrated.
  - Success or failure of each migration step.
- Use these logs to identify and troubleshoot any issues.

---

## Example Output

### Console Logs:
```plaintext
Starting data migration...
Migrating category: Chairs
Migrated category: Chairs (ID: abc123)
Migrating product: Comfy Chair
Migrated product: Comfy Chair (ID: xyz789)
Data migration completed successfully!
```

---

## Notes

- Ensure that the REST API is accessible and returns valid data.
- Verify that your Sanity schemas align with the data being migrated.
- Test the script in a development environment before running it in production.

---



