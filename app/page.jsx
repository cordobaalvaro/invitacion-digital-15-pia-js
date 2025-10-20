"use client";
import { useState } from "react";
import { IntroScreen } from "@/components/intro-screen";
import { HeroSection } from "@/components/hero-section";
import { MusicSection } from "@/components/music-section";
import { InvitationSection } from "@/components/invitation-section";
import { CountdownSection } from "@/components/countdown-section";
import { PhotoGallery } from "@/components/photo-gallery";
import { CeremonySection } from "@/components/ceremony-section";
import { PartySection } from "@/components/party-section";
import { DressCodeSection } from "@/components/dress-code-section";
import { GiftSection } from "@/components/gift-section";
import { RsvpSection } from "@/components/rsvp-section";
import { Footer } from "@/components/footer";
import { RsvpModal } from "@/components/rsvp-modal";
import { SectionDivider } from "@/components/section-divider";
import { WaveDivider } from "@/components/wave-divider";
export default function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showIntro, setShowIntro] = useState(true);
    return (<>
      {showIntro && <IntroScreen onComplete={() => setShowIntro(false)}/>}

      <main className="min-h-screen bg-background transition-colors duration-300">
        <HeroSection />
        <MusicSection />
        <WaveDivider color="light" flip/>
        <InvitationSection />
      
        <PhotoGallery />
        <SectionDivider variant="hearts-simple"/>
  <CeremonySection />
  
        <PartySection />
        <WaveDivider color="blue"/>
        <DressCodeSection />
        <WaveDivider color="light"/>
        <CountdownSection />
        <GiftSection />
        <SectionDivider variant="hearts"/>
        <RsvpSection onOpenModal={() => setIsModalOpen(true)}/>
        <WaveDivider color="blue"/>
        <Footer />
        <RsvpModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}/>
      </main>
    </>);
}
