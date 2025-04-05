
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-md z-50 py-4 shadow-sm">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-brand-600 font-bold text-2xl">TempMail Vista</span>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#features" className="text-gray-600 hover:text-brand-600 transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="text-gray-600 hover:text-brand-600 transition-colors">
            How It Works
          </a>
          <a href="#faq" className="text-gray-600 hover:text-brand-600 transition-colors">
            FAQ
          </a>
          <Button variant="default" className="bg-brand-600 hover:bg-brand-700">
            Generate Email
          </Button>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden absolute top-full left-0 w-full bg-white py-4 px-6 shadow-md flex flex-col gap-4">
          <a 
            href="#features" 
            className="text-gray-600 hover:text-brand-600 transition-colors py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Features
          </a>
          <a 
            href="#how-it-works" 
            className="text-gray-600 hover:text-brand-600 transition-colors py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            How It Works
          </a>
          <a 
            href="#faq" 
            className="text-gray-600 hover:text-brand-600 transition-colors py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            FAQ
          </a>
          <Button 
            variant="default" 
            className="bg-brand-600 hover:bg-brand-700 w-full"
            onClick={() => setMobileMenuOpen(false)}
          >
            Generate Email
          </Button>
        </nav>
      )}
    </header>
  );
};

export default Header;
