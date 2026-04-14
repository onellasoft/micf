import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { MapPin, Navigation, ExternalLink } from 'lucide-react';

const Location = () => {
  const { t, i18n } = useTranslation();

  const data = t('contact_page.location', { returnObjects: true });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="bg-[#fcf8f0] min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-center mb-16"
        >
          <span className="tagline !mb-4">{data.hero.tagline}</span>
          <h1 className={`text-4xl md:text-5xl text-brand-title mb-6 ${i18n.language !== 'en' ? 'font-devanagari' : 'font-serif'}`}>
            {data.hero.title}
          </h1>
          <p className="text-brand-gray max-w-2xl mx-auto font-light leading-relaxed">
            {data.hero.subtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Map Section */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="lg:col-span-3 rounded-[3rem] overflow-hidden shadow-premium h-[550px] border-4 border-white relative group"
          >
            {/* Real Map Placeholder (using a stylized image or iframe) */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121059.0344739699!2d73.7898031!3d18.5248902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43100c34f45!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1713083000000!5m2!1sen!2sin"
              className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700" 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            
            <a 
              href="https://maps.google.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-md text-brand-dark px-6 py-3 rounded-2xl shadow-xl flex items-center gap-2 font-bold hover:bg-primary hover:text-white transition-all transform group-hover:-translate-y-2"
            >
              <span>{data.view_on_maps}</span>
              <ExternalLink size={16} />
            </a>
          </motion.div>

          {/* Address Details Section */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2"
          >
            <div className="bg-white p-12 rounded-[3rem] shadow-soft border border-primary/5">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8">
                <MapPin size={32} />
              </div>
              <h3 className={`text-3xl text-brand-title mb-6 ${i18n.language !== 'en' ? 'font-devanagari' : 'font-serif'}`}>
                {data.address_card.title}
              </h3>
              <p className="text-brand-gray text-xl leading-relaxed font-light mb-10">
                {data.address_card.details}
              </p>
              
              <div className="flex items-center gap-4 text-primary font-bold">
                <Navigation size={22} />
                <span className={`uppercase tracking-widest text-sm ${i18n.language !== 'en' ? 'font-devanagari' : ''}`}>
                  {data.address_card.directions}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Location;
