import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import worldGold from '../assets/images/world_gold_dark.png';

const AboutMicf = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-cream min-h-screen">
      {/* Page Header */}
      {/* <section className="relative h-[25vh] md:h-[40vh] flex items-center justify-center overflow-hidden bg-brand-dark">
        <div
          className="absolute inset-0 z-0 opacity-40 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${worldGold})` }}
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-brand-dark/20 via-transparent to-brand-dark/40" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-20 text-center px-4"
        >
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-6 uppercase tracking-[0.2em] leading-tight drop-shadow-2xl">
            {t('about_page.tabs.micf')}
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto mb-8 shadow-lg"></div>
        </motion.div>
      </section> */}

      <div className="max-w-6xl mx-auto px-4 pb-12 pt-32">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h2 className="text-3xl md:text-5xl font-serif text-brand-title mb-3">
              {t('about_page.micf.title')}
            </h2>
            <div className="w-48 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mb-8 mx-auto md:mx-0"></div>

            <div className="space-y-4 text-brand-dark text-lg md:text-xl leading-relaxed font-light text-justify">
              <p className='text-[16px] leading-[1.8]'>{t('about_page.micf.content_p1')}</p>
              <p className='text-[16px] leading-[1.8]'>{t('about_page.micf.content_p2')}</p>
              <p className='text-[16px] leading-[1.8]'>{t('about_page.micf.content_p3')}</p>
              <p className='text-[16px] leading-[1.8]'>{t('about_page.micf.content_p4')}</p>
              <p className='text-[16px] leading-[1.8]'>{t('about_page.micf.content_p5')}</p>
              <p className='text-[16px] leading-[1.8]'>{t('about_page.micf.content_p6')}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutMicf;
