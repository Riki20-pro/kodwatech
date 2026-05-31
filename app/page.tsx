"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import Blog from "@/components/Blog";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <PageTransition>
        <Hero />
        <Services isHome={true} />
        <Portfolio />
        <About />
        <Blog />
        <ContactForm />
      </PageTransition>
      <Footer />
    </main>
  );
}
