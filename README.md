# Electrical Engineering Portfolio

A premium, modern, and fully responsive personal portfolio website built with Next.js, TypeScript, and Tailwind CSS. Designed specifically for engineering students to showcase their skills, projects, and achievements.

## How to Run Locally

First, install all the required dependencies:

```bash
npm install
```

Then, start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## How to Edit Content

This portfolio is designed to be easily updatable without touching any React code. All personal information and content is stored in a single central data file:

👉 **`data/portfolio.ts`**

### Editing Personal Information
Open `data/portfolio.ts` and modify the `personal`, `hero`, and `about` objects at the top of the file to update your name, role, and descriptions.

### Changing Profile Photo
1. Place your new photo in the `public/images/` directory (e.g., `profile.jpg`).
2. Open `data/portfolio.ts` and update the `profileImage` property in the `personal` object:
   ```typescript
   export const personal = {
     // ...
     profileImage: "/images/profile.jpg",
   };
   ```

### Replacing Resume
1. Place your new resume file in the `public/` directory and name it `resume.pdf`.
2. Ensure the `resume` variable at the bottom of `data/portfolio.ts` points to it:
   ```typescript
   export const resume = "/resume.pdf";
   ```

### Editing Skills
1. Open `data/portfolio.ts` and locate the `skills` array.
2. To add a new skill to an existing category, add an object to its `items` array:
   ```typescript
   { name: "New Skill", level: "Working Knowledge" }
   ```
3. To add a new category, add a new block to the `skills` array with a valid Lucide icon name.

### Managing Projects & Photos
1. Add your project images to `public/images/projects/`.
2. Locate the `projects` array in `data/portfolio.ts`.
3. To add a main photo, update the `image` field:
   ```typescript
   image: "/images/projects/my-project.jpg",
   ```
4. To add gallery photos for the project modal, update the `gallery` array:
   ```typescript
   gallery: [
     "/images/projects/my-project-1.jpg",
     "/images/projects/my-project-2.jpg"
   ],
   ```

### Managing Gallery Photos
1. Add your general photos to `public/images/gallery/`.
2. Locate the `gallery` array in `data/portfolio.ts`.
3. Add a new object for each photo:
   ```typescript
   {
     image: "/images/gallery/photo1.jpg",
     title: "My Photo",
     description: "Description of the photo",
     category: "Workshop" // Used for filtering
   }
   ```

### Managing Certificates
1. Place your certificate files (PDF or Images) in `public/certificates/`.
2. Locate the `certifications` array in `data/portfolio.ts`.
3. Add a new object to the array:
   ```typescript
   {
     name: "Solar Energy Fundamentals",
     organization: "Coursera",
     date: "August 2024",
     category: "Renewable Energy", // Creates a new filter automatically
     file: "/certificates/solar.pdf", // Path to PDF
     image: "/certificates/solar-preview.jpg", // Optional image preview
     credentialUrl: "https://coursera.org/verify/...", // Add verification link here
     description: "Learned the fundamentals of solar power systems...",
     skills: ["Solar Installation", "Energy Auditing"] // Add certificate skills here
   }
   ```

## Deployment

This website is fully compatible and ready to be deployed on [Vercel](https://vercel.com). Simply import your GitHub repository into Vercel and it will automatically detect the Next.js framework and configure the optimal build settings.
