import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutServices from "@/components/AboutServices";
import SelectedWork from "@/components/SelectedWork";
import ContactFooter from "@/components/ContactFooter";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutServices />
      <SelectedWork />
      <ContactFooter />
    </>
  );
}
