"use client";
import { useState } from "react";
import { IntroScreen } from "@/components/intro-screen";
import { HeroSection } from "@/components/hero-section";
import { MusicSection } from "@/components/music-section";
import { InvitationSection } from "@/components/invitation-section";
import { PhotoGallery } from "@/components/photo-gallery";
import { CeremonySection } from "@/components/ceremony-section";
import { CelebrationSection } from "@/components/celebration-section";
import { GiftSection } from "@/components/gift-section";
import { Footer } from "@/components/footer";
import { SectionDivider } from "@/components/section-divider";
import { WaveDivider } from "@/components/wave-divider";
export default function FamilyPage() {
    const [showIntro, setShowIntro] = useState(true);
    return (<>
      {showIntro && <IntroScreen onComplete={() => setShowIntro(false)}/>}

      <main className="min-h-screen bg-background transition-colors duration-300">
        <HeroSection />
        <MusicSection />
        <WaveDivider color="light"/>
        <InvitationSection />
        <SectionDivider variant="hearts-simple"/>
        <PhotoGallery />
        <SectionDivider variant="floral"/>
  <CeremonySection />
  <CelebrationSection />
        <SectionDivider variant="floral-elegant"/>
        <GiftSection />
        <SectionDivider variant="hearts"/>
        <Footer />
      </main>
    </>);
}
