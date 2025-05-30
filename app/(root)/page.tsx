import React from "react";

import PlatformStat from "@/components/home/PlatformStat";
import Working from "@/components/home/Working";
import Features from "@/components/home/Features";
import Testimonials from "@/components/home/Testimonials";
import CTAsection from "@/components/home/CTAsection";
import Hero from "@/components/home/Hero";
import Navbar from "@/components/shared/Navbar";
const Page = () => {
  return (
    <div>
      <Navbar />
      {/* Hero Section  */}
      <Hero />
      {/* Platform Stats  */}
      <PlatformStat />
      {/* Working Section  */}
      <Working />
      {/* Features Section  */}
      <Features />
      {/* Testimonials Section  */}
      <Testimonials />
      {/* CTA Section  */}
      <CTAsection />
    </div>
  );
};

export default Page;
