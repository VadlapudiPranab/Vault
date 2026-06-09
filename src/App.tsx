import { AboutAccordionSection } from "./components/AboutAccordionSection";
import { FeaturedGames } from "./components/FeaturedGames";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { SayHelloAI } from "./components/SayHelloAI";
import { WhatWeBuild } from "./components/WhatWeBuild";

function App() {
  return (
    <div className="min-h-screen bg-vault-black text-white">
      <Header />
      <main>
        <Hero />
        <SayHelloAI />
        <WhatWeBuild />
        <AboutAccordionSection />
        <FeaturedGames />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
