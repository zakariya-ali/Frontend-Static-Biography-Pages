export interface User {
  name: string;
  username: string;
  avatar: string;
  bio: string;
  videoBackground?: string;
  status?: {
    text: string;
    isLive?: boolean;
    activity?: string;
  };
  theme: {
    background: string;
    text: string;
    accent: string;
    secondary?: string;
  };
  links: {
    label: string;
    url: string;
    icon: string;
    description?: string;
  }[];
  social?: {
    title?: string;
    description?: string;
    image?: string;
  };
}

export const users: Record<string, User> = {
  arcane: {
    name: "Arcane",
    username: "arcane",
    avatar: "https://cdn.discordapp.com/avatars/534116806751813682/84566627b2876ab21b6ef2073c0e8899.png",
    bio: "yea",
    videoBackground: "/arcan.mp4",
    status: {
      text: "making money",
      isLive: true,
      activity: "building random things"
    },
    theme: {
      background: "#0f172a",
      text: "#ffffff",
      accent: "#22c55e",
      secondary: "#1e293b"
    },
    links: [
    ],
    social: {
      title: "@arcane",
      description: "bored guy",
      image: "https://cdn.discordapp.com/avatars/534116806751813682/84566627b2876ab21b6ef2073c0e8899.png"
    }
  },
  malindiboys: {
    name: "malindiboys",
    username: "malindiboys",
    avatar: "https://cdn.discordapp.com/avatars/864589561845252156/a_7a057cc386d5dc71a0b2b6e6045fa8bb.gif",
    bio: "Creative frontend developer and UI/UX enthusiast. I craft beautiful, user-centered digital experiences that make a difference.",
    videoBackground: "/malindiboy.mp4",
    status: {
      text: "logging IPs",
      isLive: false,
      activity: "Copy and pasting code..."
    },
    theme: {
      background: "#1e1b4b",
      text: "#f1f5f9",
      accent: "#8b5cf6",
      secondary: "#312e81"
    },
    links: [
      { 
        label: "GitHub", 
        url: "https://github.com/malindidev", 
        icon: "github",
        description: "Browse my code"
      },
      { 
        label: "Instagram", 
        url: "https://www.instagram.com/sxfyn_", 
        icon: "instagram",
        description: "Follow my creative journey"
      },
      { 
        label: "YouTube", 
        url: "https://www.youtube.com/channel/UClMhEU7nmgM1-1346cx_blQ", 
        icon: "youtube",
        description: "Watch my videos"
      }
    ],
    social: {
      title: "@malindiboys",
      description: "scriptkiddy",
      image: "https://cdn.discordapp.com/avatars/864589561845252156/a_7a057cc386d5dc71a0b2b6e6045fa8bb.gif"
    }
  },
  nami: {
    name: "nami",
    username: "nami",
    avatar: "https://cdn.discordapp.com/avatars/231153482890084352/5459c811521c45f44edc3eb8931a3c98.png",
    bio: "the eSports GOAT",
    videoBackground: "/nam.mp4",
    status: {
      text: "the GOAT",
      isLive: true,
      activity: "destroying noobs"
    },
    theme: {
      background: "#0c4a6e",
      text: "#f0f9ff",
      accent: "#0ea5e9",
      secondary: "#0369a1"
    },
    links: [
    ],
    social: {
      title: "@nami",
      description: "the best gamer of all time",
      image: "https://cdn.discordapp.com/avatars/231153482890084352/5459c811521c45f44edc3eb8931a3c98.png"
    }
  }
};

export const getUserByUsername = (username: string): User | null => {
  return users[username] || null;
};

export const getAllUsernames = (): string[] => {
  return Object.keys(users);
};