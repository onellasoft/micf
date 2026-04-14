import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import missionDiagram from '../assets/images/mission-diagram.png';

const Mission = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-4 pt-32 pb-24 space-y-32 md:space-y-48">
        {/* Mission Section */}
        <section className="space-y-16">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-left"
            >
              <h2 className="text-3xl md:text-5xl font-serif text-brand-title mb-4">{t('about_page.mission.title')}</h2>
              <div className="w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mb-8"></div>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start w-full lg:max-w-4xl mx-auto">
            {/* Left Column: Sticky Diagram */}
            <div className="lg:sticky lg:top-40">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="w-full max-w-lg mx-auto"
              >
                <img
                  src={missionDiagram}
                  alt="MICF Mission Diagram"
                  className="w-full h-auto drop-shadow-xl rounded-xl"
                />
              </motion.div>
            </div>

            {/* Right Column: Vertical Timeline */}
            <div className="relative space-y-12 pl-4 md:pl-0">
              <div className="absolute left-4 md:left-8 top-2 bottom-2 w-px bg-primary/20"></div>

              {['srijan', 'sanvardhan', 'savrakshan', 'prabodhan'].map((pillar, idx) => (
                <motion.div
                  key={pillar}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative pl-12 md:pl-20"
                >
                  <div className="absolute left-2 md:left-6 top-1.5 w-4 h-4 bg-primary rounded-full border-4 border-cream shadow-sm z-10"></div>

                  <div className="flex flex-col gap-1">
                    <span className="text-primary font-bold text-sm tracking-widest uppercase">
                      {t(`about_page.mission.pillars.${pillar}.title`)}
                    </span>
                    <h3 className="text-xl md:text-2xl font-serif text-brand-title mt-1">
                      {t(`about_page.mission.pillars.${pillar}.heading`)}
                    </h3>
                    <p className="text-brand-dark/80 font-light leading-relaxed mt-3 text-[16px]">
                      {t(`about_page.mission.pillars.${pillar}.desc`)}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Mission;
