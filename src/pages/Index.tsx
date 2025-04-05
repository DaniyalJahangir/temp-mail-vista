
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import EmailGenerator from "@/components/EmailGenerator";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <EmailGenerator />
        <Features />
        <HowItWorks />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
