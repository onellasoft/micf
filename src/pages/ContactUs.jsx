import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  Mail, Phone, MapPin, MessageCircle, 
  Send, Clock, CheckCircle2 
} from 'lucide-react';

const ContactUs = () => {
  const { t, i18n } = useTranslation();
  const [submitted, setSubmitted] = useState(false);

  const data = t('contact_page.us', { returnObjects: true });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const contactInfo = [
    { 
      icon: MapPin, 
      label: data.info.labels.address, 
      value: data.info.address,
      color: "bg-blue-50 text-blue-600"
    },
    { 
      icon: Phone, 
      label: data.info.labels.phone, 
      value: data.info.phone,
      color: "bg-green-50 text-green-600",
      link: `tel:${data.info.phone}`
    },
    { 
      icon: MessageCircle, 
      label: data.info.labels.whatsapp, 
      value: data.info.whatsapp,
      color: "bg-emerald-50 text-emerald-600",
      link: `https://wa.me/${data.info.whatsapp.replace(/\+/g, '').replace(/\s/g, '')}`
    },
    { 
      icon: Mail, 
      label: data.info.labels.email, 
      value: data.info.email,
      color: "bg-purple-50 text-purple-600",
      link: `mailto:${data.info.email}`
    }
  ];

  return (
    <div className="bg-[#fcf8f0] min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
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

        <div className="max-w-4xl mx-auto">
          {/* Contact Info Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {contactInfo.map((info, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-[2rem] shadow-soft border border-primary/5 flex items-start gap-6 group hover:shadow-premium transition-all duration-300"
              >
                <div className={`p-4 rounded-2xl ${info.color} group-hover:scale-110 transition-transform`}>
                  <info.icon size={28} />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-bold text-brand-gray/60 mb-2">{info.label}</h4>
                  {info.link ? (
                    <a href={info.link} className="text-lg text-brand-dark hover:text-primary transition-colors font-medium leading-tight block">
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-lg text-brand-dark font-medium leading-tight">
                      {info.value}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
