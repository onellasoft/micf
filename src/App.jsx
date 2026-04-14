import { useState, useRef, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe, ChevronDown, ChevronRight, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import AboutMicf from './pages/AboutMicf';
import Mission from './pages/Mission';
import Vision from './pages/Vision';
import Documents from './pages/Documents';
import Team from './pages/Team';
import InitiativeDetail from './pages/InitiativeDetail';
import logo from './assets/images/logo.png';

// Scroll to top on navigation
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Back to top button
const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-[60] p-4 bg-primary text-white rounded-full shadow-2xl hover:bg-primary-dark transition-all hover:scale-110 active:scale-95 group overflow-hidden"
          aria-label="Back to top"
        >
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          <ChevronUp size={24} className="relative z-10" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

const navConfig = [
  { name: 'home', path: '/' },
  {
    name: 'about',
    items: [
      { name: 'micf', path: '/about/micf' },
      { name: 'mission', path: '/about/mission' },
      { name: 'vision', path: '/about/vision' },
      { name: 'team', path: '/about/team' },
      { name: 'document', path: '/about/documents' }
    ]
  },
  {
    name: 'initiatives',
    items: [
      { name: 'education', path: '/initiatives/education' },
      { name: 'social', path: '/initiatives/social' },
      { name: 'religion', path: '/initiatives/religion' },
      { name: 'charity', path: '/initiatives/charity' },
      { name: 'environment', path: '/initiatives/environment' }
    ]
  },
  { name: 'media', path: '/media' },
  {
    name: 'contact',
    items: [
      { name: 'contact_us', path: '/contact/us' },
      { name: 'location', path: '/contact/location' }
    ]
  }
];

// Navbar Component
const Navbar = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [activeMobileMenu, setActiveMobileMenu] = useState(null);
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);
      setIsVisible(true);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, location.pathname]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('micf_language', lng);
    setIsLangOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-cream/80 backdrop-blur-md shadow-md py-0 border-b border-primary/5' : 'bg-transparent py-2'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center py-2 h-16">
              <img src={logo} alt="MICF Logo" className="h-full w-auto object-contain" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden xl:flex items-center space-x-1">
            {navConfig.map((item) => (
              <div key={item.name} className="relative group px-2 py-8">
                {item.items ? (
                  <>
                    <button className="flex items-center text-brand-dark hover:text-primary transition-colors font-medium text-sm lg:text-[15px] whitespace-nowrap">
                      {t(`nav.${item.name}.label`)} <ChevronDown size={14} className="ml-1 opacity-50" />
                    </button>
                    {/* Level 1 Dropdown */}
                    <div className="absolute left-0 mt-0 w-64 bg-white rounded-xl shadow-2xl py-3 invisible group-hover:visible transition-all opacity-0 group-hover:opacity-100 border border-brand-light-gray translate-y-2 group-hover:translate-y-0">
                      {item.items.map((subItem) => (
                        <div key={subItem.name} className="relative group/sub">
                          {subItem.items ? (
                            <>
                              <button className="w-full flex items-center justify-between px-6 py-2.5 text-sm text-brand-dark hover:bg-beige hover:text-primary transition-colors">
                                {t(`nav.${item.name}.${subItem.name}`)} <ChevronRight size={14} className="opacity-50" />
                              </button>
                              {/* Level 2 Dropdown (Religion) */}
                              <div className="absolute left-full top-0 mt-[-12px] w-64 bg-white rounded-xl shadow-2xl py-3 invisible group-hover/sub:visible transition-all opacity-0 group-hover/sub:opacity-100 border border-brand-light-gray translate-x-2 group-hover/sub:translate-x-0">
                                {subItem.items.map((nestedItem) => (
                                  <Link key={nestedItem.name} to={nestedItem.path} className="block px-6 py-2.5 text-sm text-brand-dark hover:bg-beige hover:text-primary transition-colors">
                                    {t(`nav.${item.name}.${nestedItem.name}`)}
                                  </Link>
                                ))}
                              </div>
                            </>
                          ) : (
                            <Link to={subItem.path} className="block px-6 py-2.5 text-sm text-brand-dark hover:bg-beige hover:text-primary transition-colors">
                              {t(`nav.${item.name}.${subItem.name}`)}
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link to={item.path} className="text-brand-dark hover:text-primary transition-colors font-medium text-sm lg:text-[15px]">
                    {t(`nav.${item.name}`)}
                  </Link>
                )}
              </div>
            ))}

            {/* Language Switcher */}
            <div className="relative ml-4">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="p-2 text-brand-dark hover:text-primary rounded-full hover:bg-beige/50 transition-colors flex items-center gap-2"
              >
                <Globe size={20} />
                <span className="text-xs font-bold uppercase">{i18n.language}</span>
              </button>
              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-36 bg-white rounded-xl shadow-xl py-2 border border-brand-light-gray overflow-hidden">
                  {['en', 'hi', 'mr'].map((lang) => (
                    <button
                      key={lang}
                      onClick={() => changeLanguage(lang)}
                      className={`block w-full text-left px-5 py-2.5 text-sm transition-colors ${i18n.language === lang ? 'bg-primary/10 text-primary font-bold' : 'text-brand-dark hover:bg-beige'}`}
                    >
                      {lang === 'en' ? 'English' : lang === 'hi' ? 'हिन्दी' : 'मराठी'}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-md text-brand-dark hover:text-primary focus:outline-none bg-beige/30 ml-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="xl:hidden bg-white border-b border-brand-light-gray max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-6 space-y-1">
            {navConfig.map((item) => (
              <div key={item.name} className="border-b border-brand-light-gray/20 last:border-0">
                {item.items ? (
                  <>
                    <button
                      onClick={() => setActiveMobileMenu(activeMobileMenu === item.name ? null : item.name)}
                      className="w-full flex items-center justify-between py-4 text-brand-dark font-semibold text-[17px]"
                    >
                      {t(`nav.${item.name}.label`)} <ChevronDown size={18} className={`transition-transform ${activeMobileMenu === item.name ? 'rotate-180' : ''}`} />
                    </button>
                    {activeMobileMenu === item.name && (
                      <div className="bg-cream/30 rounded-2xl mb-4 px-4 py-2">
                        {item.items.map((subItem) => (
                          <div key={subItem.name}>
                            {subItem.items ? (
                              <div className="py-2">
                                <div className="text-primary text-xs font-bold uppercase tracking-widest py-2">Religion</div>
                                <div className="pl-4 space-y-1 border-l-2 border-primary/20">
                                  {subItem.items.map((nestedItem) => (
                                    <Link key={nestedItem.name} to={nestedItem.path} onClick={() => setIsOpen(false)} className="block py-3 text-brand-dark font-medium text-[15px]">
                                      {t(`nav.${item.name}.${nestedItem.name}`)}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ) : (
                              <a
                                href={subItem.path}
                                onClick={(e) => {
                                  if (subItem.path.startsWith('/about#')) {
                                    setIsOpen(false);
                                  }
                                }}
                                className="block py-4 text-brand-dark font-medium text-[16px] border-b border-brand-light-gray/10 last:border-0"
                              >
                                {t(`nav.${item.name}.${subItem.name}`)}
                              </a>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link to={item.path} onClick={() => setIsOpen(false)} className="block py-4 text-brand-dark font-semibold text-[17px]">
                    {t(`nav.${item.name}`)}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Language Switcher */}
          <div className="p-6 bg-beige/10 flex items-center justify-around border-t border-brand-light-gray/30">
            {['en', 'hi', 'mr'].map((lang) => (
              <button
                key={lang}
                onClick={() => changeLanguage(lang)}
                className={`flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all ${i18n.language === lang ? 'bg-primary text-white shadow-lg' : 'text-brand-dark hover:bg-white'}`}
              >
                <span className="text-xs opacity-70">{lang === 'en' ? 'EN' : lang === 'hi' ? 'HI' : 'MR'}</span>
                <span className="font-bold text-sm">{lang === 'en' ? 'English' : lang === 'hi' ? 'हिन्दी' : 'मराठी'}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <footer className="bg-brand-dark text-white py-12 px-4 text-center">
        <p className="font-devanagari text-lg mb-2">Mahanubhav International Charitable Foundation</p>
        <p className="text-brand-gray text-sm">&copy; 2026 MICF. All rights reserved.</p>
      </footer>
    </div>
  );
};

const LanguageSelectionModal = ({ onSelect }) => {
  const { t } = useTranslation();

  const languages = [
    { code: 'en', label: 'English', native: 'English' },
    { code: 'hi', label: 'Hindi', native: 'हिन्दी' },
    { code: 'mr', label: 'Marathi', native: 'मराठी' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-dark/95 backdrop-blur-xl p-4"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="bg-cream max-w-lg w-full rounded-[3rem] p-12 text-center shadow-3xl border border-white/20 relative overflow-hidden"
      >
        {/* Ornate Background Elements */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary/50 via-primary to-primary/50"></div>
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-primary/10 rounded-full blur-3xl"></div>

        <img src={logo} alt="MICF Logo" className="w-28 h-auto mx-auto mb-10 drop-shadow-xl" />

        <h2 className="text-3xl md:text-4xl font-serif text-brand-title mb-4 tracking-tight">
          Welcome to MICF
        </h2>
        <p className="text-brand-gray mb-12 font-light text-lg">
          Please select your preferred language
        </p>

        <div className="grid gap-4">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => onSelect(lang.code)}
              className="group relative flex items-center justify-between p-6 bg-white hover:bg-primary rounded-3xl transition-all duration-300 shadow-soft hover:shadow-2xl hover:-translate-y-1 overflow-hidden"
            >
              <div className="flex flex-col items-left text-left relative z-10 transition-colors group-hover:text-white">
                <span className="text-xs font-bold uppercase tracking-widest opacity-60 mb-1">{lang.label}</span>
                <span className="text-2xl font-bold">{lang.native}</span>
              </div>
              <ChevronRight className="relative z-10 text-primary group-hover:text-white transition-colors" size={24} />

              {/* Hover effect background */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-dark opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
          ))}
        </div>

        <p className="mt-12 text-xs text-brand-gray/60 font-medium tracking-widest uppercase italic">
          Mahanubhav International Charitable Foundation
        </p>
      </motion.div>
    </motion.div>
  );
};

function App() {
  const [showLangModal, setShowLangModal] = useState(false);
  const { i18n } = useTranslation();

  useEffect(() => {
    const savedLang = localStorage.getItem('micf_language');
    if (!savedLang) {
      setShowLangModal(true);
    } else {
      i18n.changeLanguage(savedLang);
    }
  }, [i18n]);

  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  const handleLanguageSelect = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('micf_language', lang);
    setShowLangModal(false);
  };

  return (
    <Router>
      <ScrollToTop />
      <AnimatePresence>
        {showLangModal && <LanguageSelectionModal onSelect={handleLanguageSelect} />}
      </AnimatePresence>

      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMicf />} />
          <Route path="/about/micf" element={<AboutMicf />} />
          <Route path="/about/mission" element={<Mission />} />
          <Route path="/about/vision" element={<Vision />} />
          <Route path="/about/documents" element={<Documents />} />
          <Route path="/about/team" element={<Team />} />
          <Route path="/initiatives/:slug" element={<InitiativeDetail />} />
          <Route path="*" element={<div className="section-container text-center py-40">
            <h2 className="text-4xl font-serif text-brand-title mb-4">Page Under Construction</h2>
            <p className="text-brand-gray">We are working hard to bring this content to you soon.</p>
            <Link to="/" className="btn-primary inline-block mt-8">Back to Home</Link>
          </div>} />
        </Routes>
      </Layout>
      <BackToTop />
    </Router>
  );
}

export default App;
