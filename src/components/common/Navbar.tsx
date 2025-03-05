import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../../hooks/useLanguage";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
  to,
  id,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string | React.ReactNode;
  children?: React.ReactNode;
  to?: string;
  id?: string;
}) => {
  return (
    <div onMouseEnter={() => setActive(id || item as string)} className="relative">
      {to ? (
        <Link to={to}>
          <motion.p
            transition={{ duration: 0.3 }}
            className="cursor-pointer text-white hover:opacity-[0.9]"
          >
            {item}
          </motion.p>
        </Link>
      ) : (
        <motion.p
          transition={{ duration: 0.3 }}
          className="cursor-pointer text-white hover:opacity-[0.9]"
        >
          {item}
        </motion.p>
      )}
      {active !== null && children && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === (id || item as string) && (
            <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                layoutId="active" // layoutId ensures smooth animation
                className="bg-white/95 dark:bg-black/95 rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
              >
                <motion.div
                  layout // layout ensures smooth animation
                  className="w-max h-full p-4"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)} // resets the state
      className="relative rounded-full border border-transparent bg-black/20 backdrop-blur-sm flex justify-center space-x-6 md:space-x-8 px-4 md:px-8 py-3 md:py-4"
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <Link to={href} className="flex space-x-2">
      <img
        src={src}
        width={140}
        height={70}
        alt={title}
        className="flex-shrink-0 rounded-md shadow-2xl object-cover w-[140px] h-[70px]"
      />
      <div>
        <h4 className="text-xl font-bold mb-1 text-black dark:text-white">
          {title}
        </h4>
        <p className="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300">
          {description}
        </p>
      </div>
    </Link>
  );
};

export const HoveredLink = ({ children, to, ...rest }: any) => {
  return (
    <Link
      to={to}
      className="text-neutral-700 dark:text-neutral-200 hover:text-black "
      {...rest}
    >
      {children}
    </Link>
  );
};

const MobileAccordionItem = ({
  title,
  delay,
  links,
  onNavigate,
  mainPageLink
}: {
  title: string;
  delay: number;
  links: { to: string; label: string }[];
  onNavigate: () => void;
  mainPageLink?: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.2, delay }}
    >
      <div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-full text-left text-2xl font-medium py-3 border-b border-amber-700/20 text-white hover:text-amber-400"
        >
          {title}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`transform transition-transform ${isOpen ? 'rotate-90' : ''}`}
          >
            <path d="M9 18l6-6-6-6"></path>
          </svg>
        </button>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.3 }}
            className="pl-4 border-l border-amber-700/20 ml-4 mt-2"
          >
            {mainPageLink && (
              <Link
                to={mainPageLink}
                className="block text-lg font-medium py-2 text-white/80 hover:text-amber-400"
                onClick={() => setTimeout(onNavigate, 300)}
              >
                {title} Overview
              </Link>
            )}
            {links.map((link, index) => (
              <Link
                key={index}
                to={link.to}
                className="block text-lg font-medium py-2 text-white/80 hover:text-amber-400"
                onClick={() => setTimeout(onNavigate, 300)}
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

const Navbar: React.FC = () => {
  const [active, setActive] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const location = useLocation();

  // Handle language toggle
  const toggleLanguage = (lang: "en" | "de") => {
    setLanguage(lang);
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Flag components
  const EnglishFlag = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" width="24" height="16">
      <clipPath id="s">
        <path d="M0,0 v30 h60 v-30 z"/>
      </clipPath>
      <clipPath id="t">
        <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/>
      </clipPath>
      <g clipPath="url(#s)">
        <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
        <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#C8102E" strokeWidth="4"/>
        <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10"/>
        <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6"/>
      </g>
    </svg>
  );

  const GermanFlag = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5 3" width="24" height="16">
      <rect width="5" height="1" y="0" fill="#000000"/>
      <rect width="5" height="1" y="1" fill="#FF0000"/>
      <rect width="5" height="1" y="2" fill="#FFCC00"/>
    </svg>
  );

  return (
    <div className="relative z-20 w-full flex justify-center">
      <div className="w-full max-w-screen-xl flex items-center justify-between px-4 md:px-8 py-5">
        <div className="flex-none">
          <Link to="/" className="z-50">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/d65dcfbabd9245a5ac68b0712fd94192/2ec843e5e07a6548c0f00a1d1989de8d0c0b0810dfdaf44285c3dc3c0b3b432e?placeholderIfAbsent=true"
              alt="Rion Wildlife Safaris logo"
              className="object-contain shrink-0 self-stretch my-auto aspect-square w-[92px]"
            />
          </Link>
        </div>

        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
          <Menu setActive={setActive}>
            <MenuItem setActive={setActive} active={active} item="Home" to="/" />
            
            <MenuItem setActive={setActive} active={active} item="Activities">
              <div className="flex flex-col space-y-4 text-sm min-w-[150px]">
                <HoveredLink to="/activities/wildlife-viewing">Wildlife Viewing</HoveredLink>
                <HoveredLink to="/activities/desert-exploration">Desert Exploration</HoveredLink>
                <HoveredLink to="/activities/cultural-experiences">Cultural Experiences</HoveredLink>
                <HoveredLink to="/activities/photography-tours">Photography Tours</HoveredLink>
                <HoveredLink to="/activities/okavango-delta">Okavango Delta</HoveredLink>
                <HoveredLink to="/activities/victoria-falls">Victoria Falls</HoveredLink>
              </div>
            </MenuItem>
            
            <MenuItem setActive={setActive} active={active} item="Tours">
              <div className="flex flex-col space-y-4 text-sm min-w-[280px] p-2">
                <HoveredLink to="/tours/big-five-safari" className="flex items-center gap-3">
                  <img 
                    src="/tour-images/bigfive.jpeg" 
                    alt="Big Five Safari" 
                    className="w-12 h-12 object-cover rounded-md"
                  />
                  <span>Big Five Safari</span>
                </HoveredLink>
                <HoveredLink to="/tours/namibia-highlights" className="flex items-center gap-3">
                  <img 
                    src="/tour-images/namibia-highlights.jpeg" 
                    alt="Namibia Highlights" 
                    className="w-12 h-12 object-cover rounded-md"
                  />
                  <span>Namibia Highlights</span>
                </HoveredLink>
                <HoveredLink to="/tours/walvisbay-excursion" className="flex items-center gap-3">
                  <img 
                    src="/tour-images/walvisbay.jpeg" 
                    alt="Walvisbay Excursions" 
                    className="w-12 h-12 object-cover rounded-md"
                  />
                  <span>Walvisbay Excursions</span>
                </HoveredLink>
                <HoveredLink to="/tours/namwild-safari" className="flex items-center gap-3">
                  <img 
                    src="/tour-images/namwild.jpeg" 
                    alt="Namwild Safari" 
                    className="w-12 h-12 object-cover rounded-md"
                  />
                  <span>Namwild Safari</span>
                </HoveredLink>
                <HoveredLink to="/tours/namibia-botswana-victoria-falls" className="flex items-center gap-3">
                  <img 
                    src="/tour-images/victoria-falls.jpeg" 
                    alt="Namibia, Botswana & Victoria Falls" 
                    className="w-12 h-12 object-cover rounded-md"
                  />
                  <span>Namibia, Botswana & Victoria Falls</span>
                </HoveredLink>
              </div>
            </MenuItem>
            
            <MenuItem setActive={setActive} active={active} item="Blog" to="/blog" />
            
            <MenuItem setActive={setActive} active={active} item="Gallery" to="/gallery" />
            
            <MenuItem setActive={setActive} active={active} item="About">
              <div className="flex flex-col space-y-4 text-sm min-w-[150px]">
                <HoveredLink to="/about">About Us</HoveredLink>
                <HoveredLink to="/about/our-guides">Our Guides</HoveredLink>
                <HoveredLink to="/about/philosophy">Our Philosophy</HoveredLink>
                <HoveredLink to="/testimonials">Testimonials</HoveredLink>
              </div>
            </MenuItem>
            
            <MenuItem setActive={setActive} active={active} item="Contact">
              <div className="flex flex-col space-y-4 text-sm min-w-[120px]">
                <HoveredLink to="/contact">Contact Us</HoveredLink>
                <HoveredLink to="/contact#booking">Booking Inquiries</HoveredLink>
                <HoveredLink to="/contact#support">Support</HoveredLink>
              </div>
            </MenuItem>
            
            <MenuItem 
              setActive={setActive} 
              active={active} 
              item={
                <div className="flex items-center">
                  {language === "en" ? <EnglishFlag /> : <GermanFlag />}
                  <span className="ml-1">{language === "en" ? "EN" : "DE"}</span>
                </div>
              }
              id="language-selector"
            >
              <div className="flex flex-col space-y-4 text-sm min-w-[120px]">
                <button 
                  onClick={() => toggleLanguage("en")} 
                  className="flex items-center space-x-2 px-2 py-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-left"
                >
                  <EnglishFlag />
                  <span className="ml-2">English</span>
                </button>
                <button 
                  onClick={() => toggleLanguage("de")} 
                  className="flex items-center space-x-2 px-2 py-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-left"
                >
                  <GermanFlag />
                  <span className="ml-2">German</span>
                </button>
              </div>
            </MenuItem>
          </Menu>
        </div>

        <div className="md:hidden flex-none">
          <button 
            className="text-white p-2 z-50"
            onClick={toggleMobileMenu}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" x2="20" y1="12" y2="12"></line>
                <line x1="4" x2="20" y1="6" y2="6"></line>
                <line x1="4" x2="20" y1="18" y2="18"></line>
              </svg>
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-0 z-40 bg-black/95 backdrop-blur-md"
          >
            <div className="flex flex-col p-6 h-full">
              <div className="flex items-center justify-end mb-8">
                <button onClick={toggleMobileMenu} aria-label="Close menu" className="text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>
              
              <nav className="flex flex-col space-y-4 mt-4" aria-label="Mobile navigation">
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: 0.1 }}
                >
                  <Link to="/" className="block text-2xl font-medium py-3 border-b border-amber-700/20 text-white hover:text-amber-400">
                    Home
                  </Link>
                </motion.div>
                
                <MobileAccordionItem 
                  title="Activities"
                  delay={0.2}
                  mainPageLink="/activities"
                  links={[
                    { to: "/activities/wildlife-viewing", label: "Wildlife Viewing" },
                    { to: "/activities/desert-exploration", label: "Desert Exploration" },
                    { to: "/activities/cultural-experiences", label: "Cultural Experiences" },
                    { to: "/activities/photography-tours", label: "Photography Tours" },
                    { to: "/activities/okavango-delta", label: "Okavango Delta" },
                    { to: "/activities/victoria-falls", label: "Victoria Falls" }
                  ]}
                  onNavigate={() => setIsMobileMenuOpen(false)}
                />
                
                <MobileAccordionItem 
                  title="Tours"
                  delay={0.3}
                  mainPageLink="/tours"
                  links={[
                    { to: "/tours/big-five-safari", label: "Big Five Safari" },
                    { to: "/tours/namibia-highlights", label: "Namibia Highlights" },
                    { to: "/tours/walvisbay-excursion", label: "Walvisbay Excursions" },
                    { to: "/tours/namwild-safari", label: "Namwild Safari" },
                    { to: "/tours/namibia-botswana-victoria-falls", label: "Namibia, Botswana & Victoria Falls" }
                  ]}
                  onNavigate={() => setIsMobileMenuOpen(false)}
                />
                
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: 0.4 }}
                >
                  <Link to="/blog" className="block text-2xl font-medium py-3 border-b border-amber-700/20 text-white hover:text-amber-400">
                    Blog
                  </Link>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: 0.5 }}
                >
                  <Link to="/gallery" className="block text-2xl font-medium py-3 border-b border-amber-700/20 text-white hover:text-amber-400">
                    Gallery
                  </Link>
                </motion.div>
                
                <MobileAccordionItem 
                  title="About"
                  delay={0.6}
                  mainPageLink="/about"
                  links={[
                    { to: "/about/our-guides", label: "Our Guides" },
                    { to: "/about/philosophy", label: "Our Philosophy" },
                    { to: "/testimonials", label: "Testimonials" }
                  ]}
                  onNavigate={() => setIsMobileMenuOpen(false)}
                />
                
                <MobileAccordionItem 
                  title="Contact"
                  delay={0.7}
                  mainPageLink="/contact"
                  links={[
                    { to: "/contact#booking", label: "Booking Inquiries" },
                    { to: "/contact#support", label: "Support" }
                  ]}
                  onNavigate={() => setIsMobileMenuOpen(false)}
                />
              </nav>
              
              <div className="mt-auto pt-8">
                <p className="text-amber-500 mb-4 font-medium">Select Language</p>
                <div className="flex space-x-4">
                  <button 
                    onClick={() => toggleLanguage("en")}
                    className={cn(
                      "flex items-center space-x-2 py-2 px-4 rounded-md",
                      language === "en" ? "bg-amber-700/70" : "bg-amber-800/20"
                    )}
                  >
                    <EnglishFlag />
                    <span className="text-white">English</span>
                  </button>
                  <button 
                    onClick={() => toggleLanguage("de")}
                    className={cn(
                      "flex items-center space-x-2 py-2 px-4 rounded-md",
                      language === "de" ? "bg-amber-700/70" : "bg-amber-800/20"
                    )}
                  >
                    <GermanFlag />
                    <span className="text-white ml-2">German</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar; 