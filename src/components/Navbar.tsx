import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const location = useLocation();
  const isHome = location.pathname === '/';

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Handle hide on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (isOpen) {
        setIsVisible(true);
        setPrevScrollY(currentScrollY);
        return;
      }

      if (currentScrollY > prevScrollY && currentScrollY > 60) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setPrevScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollY, isOpen]);

  const navLinks = [
    { label: 'Home', href: isHome ? '#' : '/' },
    { label: 'Services', href: isHome ? '#services' : '/#services' },
    { label: 'Results', href: isHome ? '#results' : '/#results' },
    { label: 'Contact', href: isHome ? '#cta' : '/#cta' },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-40 font-body transition-transform duration-300 bg-transparent ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="flex items-center justify-between px-6 md:px-12 lg:px-20 py-5">
          {/* Logo - kept exactly as original */}
          <div className="flex items-center gap-2 z-50">
            <Link to="/" onClick={() => setIsOpen(false)}>
              <img 
                src="https://i.ibb.co/PzvNxqqp/IMG-20260515-073359.png" 
                alt="Scalexa Logo" 
                className="h-8 md:h-10 w-auto object-contain" 
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <a
              href="https://wa.me/918200306143"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium hover:opacity-90 transition-opacity shadow-sm"
            >
              Book a Call
            </a>
          </div>

          {/* Mobile Liquid Glass Hamburger Button */}
          <div className="md:hidden z-50">
            <motion.button
              whileTap={{ scale: 0.92 }}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
              className="relative flex items-center justify-center p-2.5 rounded-full text-foreground transition-all duration-300 shadow-md overflow-hidden"
              style={{
                background: 'rgba(255, 255, 255, 0.65)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: '1px solid rgba(255, 255, 255, 0.85)',
                boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.08), inset 0 1px 0 0 rgba(255, 255, 255, 0.9)',
              }}
            >
              <AnimatePresence mode="wait" initial={false}>
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-5 w-5 text-foreground" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-5 w-5 text-foreground" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </header>

      {/* Mobile Floating Liquid Glass Menu (Non-fullscreen) */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Subtle Click-Outside Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 bg-black/15 backdrop-blur-[2px] md:hidden"
            />

            {/* Liquid Glass Floating Menu Card */}
            <motion.div
              initial={{ opacity: 0, y: -15, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.96 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-20 left-4 right-4 z-50 max-w-sm ml-auto md:hidden rounded-3xl p-5 overflow-hidden font-body"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.82) 0%, rgba(255, 255, 255, 0.65) 100%)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
                border: '1px solid rgba(255, 255, 255, 0.9)',
                boxShadow: '0 20px 50px -10px rgba(0, 0, 0, 0.12), inset 0 1px 1px 0 rgba(255, 255, 255, 1)',
              }}
            >
              {/* Top Glass Header Row */}
              <div className="flex items-center justify-between pb-3 mb-2 border-b border-black/5">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/80 px-1">
                  Navigation
                </span>
                
                {/* Dedicated Glass Cross/Close Button */}
                <button
                  onClick={() => setIsOpen(false)}
                  aria-label="Close menu"
                  className="flex items-center justify-center p-1.5 rounded-full bg-black/5 hover:bg-black/10 text-foreground transition-colors cursor-pointer"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Menu Links */}
              <div className="space-y-1 py-1">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between px-4 py-3 rounded-2xl text-base font-medium text-foreground hover:bg-white/80 active:bg-white/90 border border-transparent hover:border-white/60 transition-all shadow-xs group"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </a>
                ))}
              </div>

              {/* Bottom Liquid Glass CTA */}
              <div className="pt-3 mt-2 border-t border-black/5">
                <a
                  href="https://wa.me/918200306143"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-2xl bg-primary text-primary-foreground py-3 text-sm font-medium shadow-md hover:opacity-90 active:scale-[0.98] transition-all text-center"
                >
                  <span>Book a Call</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

