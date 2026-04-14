import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowRight, ChevronRight } from 'lucide-react';
import hero1 from '../assets/images/hero1.jpg';
import logoFull from '../assets/images/logo-full.png';

// Import Initiative Images
import initEducation from '../assets/images/initiative_education.png';
import initSocial from '../assets/images/initiative_social.png';
import initReligion from '../assets/images/initiative_religion.png';
import initCharity from '../assets/images/initiative_charity.png';
import initEnvironment from '../assets/images/initiative_environment.png';
import slokaRibbon from '../assets/images/sloka_ribbon.png';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const SectionHeader = ({ title, subtitle, centered = true }) => (
  <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
    <span className="tagline !mb-4 text-primary/80">INITIATIVES</span>
    <h2 className="text-4xl md:text-5xl font-serif text-brand-title mb-4 tracking-tight text-center">
      {title}
    </h2>
    <div className={`w-28 h-0.5 bg-primary/40 mt-6 ${centered ? 'mx-auto' : ''}`}></div>
  </div>
);

const Home = () => {
  const { t, i18n } = useTranslation();

  const initiatives = [
    { key: 'education', image: initEducation },
    { key: 'social', image: initSocial },
    { key: 'religion', image: initReligion },
    { key: 'charity', image: initCharity },
    { key: 'environment', image: initEnvironment }
  ];



  return (
    <div className="overflow-x-hidden">
      {/* 1. Hero Section */}
      <section className="bg-[#f2e7d3] relative  pt-32 pb-12 flex items-center justify-center overflow-hidden">
        {/* <div className="absolute inset-0 z-0">
          <img src={hero1} alt="Temple at Sunset" className="w-full h-full object-cover scale-105 animate-slow-zoom" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 via-brand-dark/60 to-transparent"></div>
        </div> */}

        <div className='flex w-auto mx-auto p-6 rounded-xl' style={{ border: "2px solid #edcb8c" }}>

          <div className="relative z-10 text-white px-6 md:px-12 w-full">
            <motion.div initial="hidden" animate="visible" variants={fadeIn} className="max-w-6xl text-center flex flex-col items-center gap-3">
              {/* <h2 className="text-3xl md:text-5xl font-devanagari text-primary mb-6 drop-shadow-xl tracking-wider">
              {t('home.hero.sloka')}
            </h2> */}
              <span className="!text-primary/80">
                {t('home.hero.tagline')}
              </span>
              <h1 className={`text-4xl text-brand-title leading-tight tracking-tight ${i18n.language !== 'en' ? 'font-devanagari' : 'font-serif'}`}>
                {t('home.hero.title')}
              </h1>
              {/* <div className="w-32 h-1 bg-primary/40 mx-auto mb-12"></div> */}

              {/* <p className="text-lg mb-3 text-white/80 font-light max-w-3xl tracking-wide leading-relaxed">
              {t('home.hero.subtitle')}
            </p> */}

              <h1 className={`text-2xl font-italic text-brand-title leading-tight font-black mt-5 tracking-tight ${i18n.language !== 'en' ? 'font-devanagari' : 'font-serif'}`}>
                सर्वभूतहिते रताः
              </h1>
              {/* <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="relative flex justify-center"
            > 
              <img
                src={slokaRibbon}
                alt="Sarvabhuta Hite Ratah Ribbon"
                className="max-w-[320px] h-auto drop-shadow-[0_20px_50px_rgba(213,164,76,0.3)] animate-float"
              />
            </motion.div> */}

              {/* <div className="flex flex-col sm:flex-row gap-6">
              <button className="btn-primary flex items-center justify-center group text-sm px-8 py-3.5 rounded-full">
                {t('home.hero.cta')} <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" size={18} />
              </button>
            </div> */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. About MICF */}
      <section className="bg-cream py-12">
        <div className="max-w-5xl mx-auto !py-0">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <h2 className="text-3xl md:text-4xl font-serif text-brand-title mb-4">{t('home.about.title')}</h2>

              <div className="w-32 h-1 bg-primary/40 mb-12"></div>
              <div className="space-y-6">
                <p className="text-brand-dark text-[16px] leading-relaxed font-light">
                  {t('home.about.subtitle1')}
                </p>
                {/* <div className="w-32 h-1 bg-primary/40 mx-auto mb-12"></div> */}
                <p className="text-brand-dark text-[16px] leading-relaxed font-light">
                  {t('home.about.subtitle2')}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-6 mt-10">
                <button className="bg-primary/10 hover:bg-primary/20 text-primary flex items-center justify-center group text-sm px-8 py-3.5 rounded-full font-bold transition-all">
                  {t('home.about.link')} <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" size={18} />
                </button>
              </div>
            </motion.div>
            <div className="relative flex justify-center">
              <img src={logoFull} alt="About MICF Logo" className="w-[300px] md:w-[400px] h-auto object-contain drop-shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Our Initiatives */}
      <section className="bg-[#f2e7d3] py-24">
        <div className="section-container !py-0">
          <SectionHeader title={t('home.initiatives.title')} />
          <p className="text-center text-brand-gray text-lg max-w-3xl mx-auto mb-16 font-light italic">
            {t('home.initiatives.subtitle')}
          </p>

          <div className="flex flex-wrap justify-center gap-8">
            {/* Display first 3 initiatives */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
              {initiatives.slice(0, 3).map((item, i) => (
                <InitiativeCard key={i} item={item} t={t} />
              ))}
            </div>

            {/* Display remaining 2 initiatives centered */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full lg:w-2/3 justify-center">
              {initiatives.slice(3).map((item, i) => (
                <InitiativeCard key={i} item={item} t={t} />
              ))}
            </div>
          </div>
        </div>
      </section>


      <style jsx="true">{`
        @keyframes slow-zoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        .animate-slow-zoom {
          animation: slow-zoom 20s infinite alternate ease-in-out;
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

const InitiativeCard = ({ item, t }) => (
  <motion.div
    whileHover={{ y: -10 }}
    className="bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-2xl transition-all duration-500 group flex flex-col h-full"
  >
    <div className="aspect-[16/10] overflow-hidden">
      <img
        src={item.image}
        alt={t(`home.initiatives.list.${item.key}.title`)}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
      />
    </div>
    <div className="p-8 flex flex-col flex-grow text-left">
      <span className="text-primary text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-3 block">
        {t('home.initiatives.category_label')}
      </span>
      <h3 className="text-2xl md:text-2xl font-serif text-brand-title mb-4 tracking-tight leading-tight">
        {t(`home.initiatives.list.${item.key}.title`)}
      </h3>
      <p className="text-brand-gray text-[15px] leading-relaxed mb-8 flex-grow">
        {t(`home.initiatives.list.${item.key}.desc`)}
      </p>
      <button className="text-primary font-bold text-xs md:text-sm uppercase tracking-widest flex items-center hover:translate-x-2 transition-transform">
        {t('home.initiatives.explore')} <ChevronRight size={16} className="ml-1" />
      </button>
    </div>
  </motion.div>
);

export default Home;
