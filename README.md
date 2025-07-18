# vicodin.wtf - Static Bio Pages

## Overview

vicodin.wtf is a Next.js-based static site generator for creating modern,
visually appealing bio pages. It features dynamic user profiles with video
backgrounds, animated elements, and social links, all statically generated for
optimal performance.

The project uses a medical-themed design (inspired by House M.D.) to create
"diagnostic-grade" bio pages. It's perfect for creators, developers, and
professionals who want a unique online presence.

## Features

- **Static Generation**: Pre-built pages for each user using Next.js static
  props.
- **Customizable Themes**: Per-user color schemes and video backgrounds.
- **Animated UI**: Typewriter effects, particle animations, twinkling stars, and
  more.
- **Social Integration**: Easy addition of social links with icons.
- **View Counter**: Tracks page visits using localStorage.
- **SEO Optimized**: Meta tags for Open Graph and Twitter Cards.
- **Development Tools**: Includes Stagewise Toolbar for development mode.
- **Responsive Design**: Works on mobile and desktop.

## Tech Stack

- Next.js 14.2.0
- React 18.2.0
- TypeScript
- Tailwind CSS
- Lucide React Icons
- Radix UI Components
- Various animation libraries (e.g., Framer Motion implicitly through CSS)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/static-bio-pages.git
   cd static-bio-pages
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Run the development server:
   ```
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

### Adding a New User

1. Edit `lib/users.ts`.
2. Add a new entry to the `users` object following the `User` interface.
3. Example:
   ```typescript
   yourusername: {
     name: "Your Name",
     username: "yourusername",
     avatar: "https://example.com/avatar.png",
     bio: "Your bio here",
     videoBackground: "/yourvideo.mp4", // Optional
     status: {
       text: "Your status",
       isLive: true,
       activity: "What you're doing"
     },
     theme: {
       background: "#000000",
       text: "#ffffff",
       accent: "#ff0000"
     },
     links: [
       {
         label: "GitHub",
         url: "https://github.com/yourusername",
         icon: "github",
         description: "My projects"
       }
       // Add more links
     ],
     social: {
       title: "@yourusername",
       description: "Your description",
       image: "https://example.com/image.png"
     }
   }
   ```

4. The new page will be available at `/yourusername`.

### Building for Production

```
npm run build
npm run start
```

Or export to static files:

```
npm run build
next export
```

## Deployment

Deploy to Vercel, Netlify, or any static hosting provider. Since it's
static-friendly, it works great on GitHub Pages too.

## Contributing

1. Fork the repository.
2. Create a feature branch.
3. Commit your changes.
4. Push to the branch.
5. Open a Pull Request.

## License

MIT License. See [LICENSE](LICENSE) for details.

## Credits

Created by Zakariya Ali. Inspired by modern link-in-bio tools with a
unique twist.
