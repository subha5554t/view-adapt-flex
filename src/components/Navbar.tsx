/**
 * Navbar Component
 * Pixel-perfect implementation from Figma design
 * Desktop: 1440px with horizontal navigation
 * Mobile: 375px with hamburger menu
 */

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Our Services", href: "#services" },
    { name: "Pricing", href: "#pricing" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        {/* Desktop & Mobile Container - Height: 80px */}
        <div className="flex items-center justify-between h-20">
          
          {/* Logo - Exact Figma specs */}
          <div className="flex items-center">
            <div className="flex items-center gap-2">
              {/* Logo Circle - 40px diameter */}
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-primary-foreground font-bold text-xl leading-none">C</span>
              </div>
              {/* Logo Text */}
              <div className="flex flex-col">
                <span className="font-bold text-foreground text-[14px] leading-tight tracking-wide">COMPANY</span>
                <span className="text-[11px] text-muted-foreground leading-tight">Resume Services</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation - Font: 14px, Weight: 500 */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-foreground hover:text-primary transition-colors duration-200 text-[14px] font-medium"
              >
                {link.name}
              </a>
            ))}
            {/* CTA Button - Height: 40px, Padding: 16px 24px */}
            <Button variant="hero" className="h-10 px-6 text-[14px] font-semibold rounded-lg">
              Get A Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-foreground hover:text-primary p-2 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation - Animated dropdown */}
      <div
        className={cn(
          "md:hidden bg-background border-t border-border transition-all duration-300 overflow-hidden",
          mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-6 py-4 space-y-1 max-w-[1440px] mx-auto">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="flex items-center py-3 text-foreground hover:text-primary hover:bg-secondary/50 transition-all duration-200 font-medium text-[14px] rounded-lg px-3"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <Button variant="hero" className="w-full h-10 text-[14px] font-semibold rounded-lg">
              Get A Quote
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
