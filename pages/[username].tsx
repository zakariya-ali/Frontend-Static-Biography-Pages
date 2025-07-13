import { useState, useEffect } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { User, getUserByUsername, getAllUsernames } from '@/lib/users';
import BioPage from '@/components/BioPage';

interface UserPageProps {
  user: User;
}

export default function UserPage({ user }: UserPageProps) {
  const [animatedTitle, setAnimatedTitle] = useState(`@${user.username}`);

  // Typewriter animation for tab title
  useEffect(() => {
    const fullUsername = `@${user.username}`;
    let currentIndex = 1; // Start after @
    let isTyping = true;
    
    const typewriterInterval = setInterval(() => {
      if (isTyping) {
        if (currentIndex <= fullUsername.length) {
          setAnimatedTitle(fullUsername.slice(0, currentIndex));
          currentIndex++;
        } else {
          // Pause at full username for 2 seconds
          isTyping = false;
          setTimeout(() => {
            currentIndex = 1;
            isTyping = true;
          }, 2000);
        }
      }
    }, 200); // Slightly slower for tab title readability
    
    return () => clearInterval(typewriterInterval);
  }, [user.username]);

  const pageTitle = user.social?.title || `${user.name} - Bio`;
  const pageDescription = user.social?.description || user.bio;
  const pageImage = user.social?.image || user.avatar;

  return (
    <>
      <Head>
        <title>{animatedTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={pageImage} />
        <meta property="og:type" content="profile" />
        <meta property="og:url" content={`${process.env.NEXT_PUBLIC_BASE_URL || 'https://yourdomain.com'}/${user.username}`} />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={pageImage} />
        
        {/* Additional SEO */}
        <meta name="author" content={user.name} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${process.env.NEXT_PUBLIC_BASE_URL || 'https://vicodin.wtf'}/${user.username}`} />
      </Head>
      <BioPage user={user} />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const usernames = getAllUsernames();
  
  const paths = usernames.map((username) => ({
    params: { username },
  }));

  return {
    paths,
    fallback: false, // Return 404 for non-existent users
  };
};

export const getStaticProps: GetStaticProps<UserPageProps> = async ({ params }) => {
  const username = params?.username as string;
  const user = getUserByUsername(username);

  if (!user) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      user,
    },
  };
};