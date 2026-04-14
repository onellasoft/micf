import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, Heart, Sun, Leaf, Gift, 
  ArrowRight, CheckCircle2, Users, 
  Globe, MessageCircle, HelpCircle, 
  ChevronDown, Star
} from 'lucide-react';
import { useState } from 'react';

const InitiativeDetail = () => {
  const { slug } = useParams();
  const { t, i18n } = useTranslation();
  const [openFaq, setOpenFaq] = useState(null);

  // Map slugs to icons
  const iconMap = {
    education: <BookOpen className="text-primary" size={48} />,
    social: <Heart className="text-primary" size={48} />,
    religion: <Sun className="text-primary" size={48} />,
    charity: <Gift className="text-primary" size={48} />,
    environment: <Leaf className="text-primary" size={48} />
  };

  const data = t(`initiative_pages.${slug}`, { returnObjects: true });

  if (!data || typeof data === 'string') {
    return (
      <div className="section-container text-center py-40">
        <h2 className="text-4xl font-serif text-brand-title mb-4">Page Under Construction</h2>
        <p className="text-brand-gray">We are working hard to bring this content to you soon.</p>
        <Link to="/" className="btn-primary inline-block mt-8">Back to Home</Link>
      </div>
    );
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.2 } }
  };

  return (
    <div className="overflow-hidden bg-cream/30">
      {/* 1. Hero Section */}
      <section className="relative pt-44 pb-24 px-6 overflow-hidden bg-cream border-b border-primary/10">
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white/50 to-transparent pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <div className="inline-block p-4 rounded-3xl bg-primary/10 backdrop-blur-md mb-8 ring-1 ring-primary/20">
              {iconMap[slug]}
            </div>
            <h1 className={`text-5xl md:text-7xl mb-6 text-brand-title leading-tight ${i18n.language !== 'en' ? 'font-devanagari' : 'font-serif'}`}>
              {data.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-brand-gray max-w-3xl mx-auto font-light leading-relaxed">
              {data.hero.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Introduction */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Introduction</span>
            <h2 className={`text-4xl mb-8 text-brand-title leading-tight ${i18n.language !== 'en' ? 'font-devanagari' : 'font-serif'}`}>
              {data.intro.title}
            </h2>
            <div className="space-y-6 text-brand-gray text-lg leading-relaxed font-light">
              <p>{data.intro.content}</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] border-[12px] border-beige/30"
          >
            <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
            <div className="w-full h-full bg-beige/20 flex items-center justify-center">
               <span className="text-primary/40 font-serif italic text-2xl">Mission in Action</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Vision for the Initiative */}
      <section className="py-20 px-6 bg-beige/20">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="bg-white p-12 md:p-20 rounded-[3rem] shadow-xl border border-primary/10 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-2 h-full bg-primary/40"></div>
            <h3 className={`text-3xl mb-8 text-brand-title ${i18n.language !== 'en' ? 'font-devanagari' : 'font-serif'}`}>
              {data.vision.title}
            </h3>
            <p className="text-2xl md:text-3xl text-brand-gray font-light italic leading-relaxed">
              "{data.vision.content}"
            </p>
          </motion.div>
        </div>
      </section>

      {/* 4. Key Programs */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl text-brand-title ${i18n.language !== 'en' ? 'font-devanagari' : 'font-serif'}`}>
              {data.programs.title}
            </h2>
          </div>
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {data.programs.list.map((prog, idx) => (
              <motion.div 
                key={idx}
                variants={fadeIn}
                className="group p-10 bg-cream/30 hover:bg-white rounded-3xl border border-primary/5 hover:border-primary/20 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full group-hover:bg-primary transition-colors duration-500"></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <CheckCircle2 className="text-primary" size={28} />
                  </div>
                  <h4 className="text-xl font-bold mb-4 text-brand-dark group-hover:text-primary transition-colors">{prog.title}</h4>
                  <p className="text-brand-gray leading-relaxed font-light">{prog.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 9. Testimonials */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl text-brand-title mb-4 ${i18n.language !== 'en' ? 'font-devanagari' : 'font-serif'}`}>
              {data.testimonials.title}
            </h2>
          </div>
          <div className="space-y-12">
            {data.testimonials.list.map((tst, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative pl-12 border-l-4 border-primary/20 hover:border-primary transition-colors"
              >
                 <MessageCircle className="absolute -left-3 top-0 text-white bg-primary rounded-full p-1" size={24} />
                 <p className="text-2xl text-brand-gray font-light mb-4 italic">"{tst.text}"</p>
                 <div className="text-brand-dark font-bold">— {tst.author}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FAQs */}
      <section className="py-24 px-6 bg-cream/30">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl text-brand-title mb-4 ${i18n.language !== 'en' ? 'font-devanagari' : 'font-serif'}`}>
              {data.faqs.title}
            </h2>
          </div>
          <div className="space-y-4">
            {data.faqs.list.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-2xl overflow-hidden border border-primary/5 shadow-sm">
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-beige/10 transition-colors"
                >
                  <span className="text-lg font-bold text-brand-dark pr-6">{faq.q}</span>
                  <ChevronDown className={`text-primary transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} size={20} />
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 text-brand-gray leading-relaxed border-t border-beige/10 font-light">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-primary p-12 md:p-24 rounded-[4rem] text-center text-white shadow-3xl relative overflow-hidden"
          >
             {/* Decorative element */}
             <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
             <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-black/10 rounded-full blur-3xl"></div>
             
             <div className="relative z-10">
               <h2 className={`text-4xl md:text-6xl mb-8 leading-tight ${i18n.language !== 'en' ? 'font-devanagari' : 'font-serif'}`}>
                 {data.cta.title}
               </h2>
               <div className="flex flex-col sm:flex-row gap-6 justify-center">
                 <button className="btn-primary bg-white text-primary hover:bg-brand-dark hover:text-white px-12 py-4 rounded-2xl text-lg">
                   {data.cta.button}
                 </button>
                 <button className="btn-primary-outline border-white text-white hover:bg-white hover:text-primary px-12 py-4 rounded-2xl text-lg">
                   CONTACT US
                 </button>
               </div>
             </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default InitiativeDetail;
