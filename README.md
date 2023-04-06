# Frontend Blog App

This is a simple frontend blog application built with Next.js, TypeScript, and TailwindCSS. It connects to a server-side API built with Node.js, Express, and SQLite, to display and manage blog posts.

## Features

- Display a list of all blog posts on the home page
- Each blog post in the list displays the title, body, and timestamp
- Create a new blog post
- View a single blog post
- Delete a blog post

## Installation

To get started with the frontend application, clone the repository and navigate to the project directory:

```bash
git clone https://github.com/philip-bos/frontend-blog-app.git
cd frontend-blog-app
```
Next, install the dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

Create a .env.local file at the root of the project, and add the following environment variable to it:
``` bash
NEXT_PUBLIC_API_URL=http://localhost:4000 #Replace port with port the API is running on.
```
This sets the API URL for the frontend app to connect to.

Usage
To run the development server, run the following command:
``` bash
npm run dev
# or
yarn dev
```
This will start the Next.js development server.

You can now view the frontend application in your browser.

Technologies
This frontend application uses the following technologies:

Next.js
TypeScript
TailwindCSS
Credits
This project was created as a coding challenge for the Match community onboarding process.