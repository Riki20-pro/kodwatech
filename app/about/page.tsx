"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutPageHero from "@/components/AboutPageHero";
import VisionMission from "@/components/VisionMission";
import Workflow from "@/components/Workflow";
import CoreValues from "@/components/CoreValues";
import { PageTransition } from "@/components/PageTransition";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <PageTransition>
        <AboutPageHero />
        <VisionMission />
        <Workflow />
        <CoreValues />
      </PageTransition>
      <Footer />
    </main>
  );
}
