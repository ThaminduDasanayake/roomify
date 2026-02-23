# Roomify 2.0

Roomify is an AI-first design environment that helps you visualize, render, and ship architectural projects faster than ever. Generate photorealistic, top-down 3D architectural renders directly from 2D floor plans.

![Roomify Overview](https://raw.githubusercontent.com/your-username/roomify/main/screenshot.png)

## Features

- 🚀 **AI-Powered 3D Rendering**: Turn simple 2D hand-drawn or digital floor plans into stunning 3D top-down views in seconds.
- ⚡️ **Puter Integration**: Authentication, key-value storage, and high-performance serverless AI (powered by Gemini) via [@heyputer/puter.js](https://puter.com/).
- 📦 **Project Management**: Save, view, and organize your generated renders in a personal or community gallery.
- 🔒 **TypeScript & React Router**: Built with a production-ready stack and React Router's latest architectural patterns.
- 🎉 **Responsive UI**: A modern, sleek user interface with drag-and-drop file uploads and responsive design.

## Getting Started

### Prerequisites

Ensure you have a modern verion of Node.js installed. In addition, you'll need the Puter worker configuration available within your environment.

### Installation

Install the dependencies:

```bash
npm install
```

### Environment Variables

Create a `.env` file in the root of your project:

```env
VITE_PUTER_WORKER_URL=your_puter_worker_url_here
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at [http://localhost:5173](http://localhost:5173).

## Building for Production

Create a production build:

```bash
npm run build
```

The output will be generated in the `build/` directory, containing both the `client/` static assets and `server/` server-side code.

## Tech Stack

- **React Router** for routing and framework architecture.
- **Puter.js** for Authentication, Key-Value Storage, and Serverless compute interactions.
- **Lucide React** for beautiful, consistent iconography.

---

Built with ❤️ using React Router and Puter.
