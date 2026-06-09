import {
  ArrowUpRight,
  Bot,
  Box,
  BrainCircuit,
  Clapperboard,
  Compass,
  Gamepad2,
  Gem,
  Monitor,
  MousePointer2,
  PlayCircle,
  Rocket,
  Smartphone,
  Sparkles,
  Star,
  Users
} from "lucide-react";

export const navLinks = [
  { label: "Games", href: "#games" },
  { label: "SayHelloAI", href: "#ai" },
  { label: "Services", href: "#services" },
  { label: "Studio", href: "#about" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" }
];

export const scrollIndex = [
  { id: "hero", label: "01" },
  { id: "ai", label: "02" },
  { id: "services", label: "03" },
  { id: "about", label: "04" },
  { id: "games", label: "05" },
  { id: "contact", label: "06" }
];

export const games = [
  {
    title: "The Dark Arrival",
    subtitle: "Shadows of the Past",
    category: "PC Game",
    logo: "/logo/dark arrival logo.jpg",
    href: "https://store.steampowered.com/app/3295930/THE_DARK_ARRIVAL__SHADOWS_OF_THE_PAST/"
  },
  {
    title: "Find The Cat",
    subtitle: "Spot the silence",
    category: "Mobile Game",
    logo: "/logo/mobile games logo.png",
    href: "https://play.google.com/store/apps/dev?id=8740967393782923454&hl=en_US"
  },
  {
    title: "Kids Jigsaw Puzzles",
    subtitle: "Playful learning",
    category: "Mobile Game",
    logo: "/logo/mobile games logo.png",
    href: "https://play.google.com/store/apps/dev?id=8740967393782923454&hl=en_US"
  },
  {
    title: "Hidden Hotel",
    subtitle: "Mystery rooms",
    category: "Mobile Game",
    logo: "/logo/mobile games logo.png",
    href: "https://play.google.com/store/apps/dev?id=8740967393782923454&hl=en_US"
  },
  {
    title: "Tropical Escape",
    subtitle: "Puzzle getaway",
    category: "Mobile Game",
    logo: "/logo/mobile games logo.png",
    href: "https://play.google.com/store/apps/dev?id=8740967393782923454&hl=en_US"
  }
];

export const worldShowcases = [
  {
    category: "PC Game",
    title: "The Dark Arrival",
    subtitle: "Shadows of the Past",
    description: "Unravel the past. Survive the shadows.",
    image: "/logo/dark arrival logo.jpg",
    href: "https://store.steampowered.com/app/3295930/THE_DARK_ARRIVAL__SHADOWS_OF_THE_PAST/",
    cta: "Wishlist on Steam",
    tone: "pc"
  },
  {
    category: "Mobile Games",
    title: "Fun for Everyone",
    description: "Play, relax and discover unforgettable worlds.",
    image: "/logo/mobile games logo.png",
    href: "https://play.google.com/store/apps/dev?id=8740967393782923454&hl=en_US",
    cta: "Play Now",
    tone: "mobile"
  }
];

export const stats = [
  { value: "10K+", label: "Players Reached", icon: Users },
  { value: "4.7★", label: "Mobile Rating", icon: Star },
  { value: "Steam", label: "Publishing Studio", icon: Monitor },
  { value: "AI-Native", label: "Production Pipeline", icon: BrainCircuit }
];

export const buildCards = [
  {
    title: "Mobile Games",
    description: "Fast, addictive, scalable game loops for mobile-first audiences.",
    icon: Smartphone,
    image: "/images/mobile games.png",
    accent: "#18C8FF"
  },
  {
    title: "PC Games",
    description: "Premium gameplay worlds built for atmosphere, story, and replay value.",
    icon: Gamepad2,
    image: "/images/pc games.png",
    accent: "#FF7A1A"
  },
  {
    title: "Game Prototypes",
    description: "Playable concepts tested fast before full production begins.",
    icon: Box,
    image: "/images/game prototypes.png",
    accent: "#7CFF6B"
  },
  {
    title: "Interactive Experiences",
    description: "Web, event, and brand experiences with game-like interaction.",
    icon: MousePointer2,
    image: "/images/interactive experiences.png",
    accent: "#C061FF"
  },
  {
    title: "AI Visual Development",
    description: "Concept art, cinematic frames, characters, and world-building pipelines.",
    icon: Sparkles,
    image: "/images/ai development.png",
    accent: "#FFC21A"
  },
  {
    title: "Trailers & Campaigns",
    description: "High-impact launch films, ads, and social-first promo systems.",
    icon: Clapperboard,
    image: "/images/cinematic trailers.png",
    accent: "#FF4646"
  }
];

export const heroButtons = [
  { label: "Explore Our Worlds", icon: Compass, primary: true },
  { label: "Watch Reel", icon: PlayCircle, primary: false }
];

export const footerColumns = [
  {
    title: "Navigation",
    links: ["Games", "SayHelloAI", "Services", "Studio", "About", "Contact"]
  },
  { title: "Games", links: ["All Games", "Mobile Games", "PC Games"] },
  { title: "Creative", links: ["SayHelloAI", "AI Creative"] },
  {
    title: "Connect",
    links: ["YouTube", "Instagram", "X", "Facebook", "Discord", "TikTok"]
  }
];

export const accents = {
  arrow: ArrowUpRight,
  gem: Gem,
  rocket: Rocket,
  bot: Bot
};
