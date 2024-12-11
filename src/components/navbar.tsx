import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 0)", "rgba(88, 28, 135, 0.6)"]
  );

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);
    });
    return () => unsubscribe();
  }, [scrollY]);

  const navLinks = [
    { href: "#about", label: "Sobre" },
    { href: "#solutions", label: "Soluções" },
    { href: "#contact", label: "Contato" },
    { href: "https://rardev.io", label: "SITE RAR", external: true }
  ];

  const MobileMenuButton = () => (
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      className="lg:hidden p-2 text-white hover:text-blue-400 transition-colors"
      aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
    >
      {isMobileMenuOpen ? (
        <X className="h-6 w-6" />
      ) : (
        <Menu className="h-6 w-6" />
      )}
    </motion.button>
  );

  return (
    <>
      <motion.nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 px-4 py-4 transition-all duration-300",
          isScrolled ? "backdrop-blur-md" : ""
        )}
        style={{ backgroundColor }}
      >
        <div className="container mx-auto flex items-center justify-between">
          <img 
            src="https://ca080b0adba2947f84a6a5a0ebdff66c.cdn.bubble.io/f1733866119983x919894350724965800/logobranca-trans.png"
            alt="RAR Inside Business"
            className="h-16 w-auto"
          />
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="text-white font-medium hover:text-blue-400 transition-colors text-shadow-sm"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {link.label}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <MobileMenuButton />
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          height: isMobileMenuOpen ? "auto" : 0,
          opacity: isMobileMenuOpen ? 1 : 0
        }}
        className={cn(
          "fixed top-[80px] left-0 right-0 bg-purple-900/95 backdrop-blur-md z-40 overflow-hidden lg:hidden",
          isMobileMenuOpen ? "border-b border-purple-800" : ""
        )}
      >
        <div className="container mx-auto py-4">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="text-white font-medium hover:text-blue-400 transition-colors px-4 py-2 text-shadow-sm"
                whileHover={{ x: 4 }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
}