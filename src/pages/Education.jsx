import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, Users, Award, Home, 
  CheckCircle2, ChevronDown, MessageCircle,
  Heart, GraduationCap, School, Star
} from 'lucide-react';

const Education = () => {
  const { t, i18n } = useTranslation();
  const [openFaq, setOpenFaq] = useState(null);

  const data = t('initiative_pages.education', { returnObjects: true });

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.15 } }
  };

  return (
    <div className="bg-[#fdfbf7] selection:bg-primary/20">
      {/* 1. Hero Section */}
      <section className="relative pt-48 pb-32 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-beige/20 via-cream to-transparent"></div>
          {/* Subtle abstract pattern placeholder */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-beige/30 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="inline-flex p-5 rounded-[2rem] bg-white shadow-soft mb-10 ring-1 ring-primary/10">
              <BookOpen className="text-primary" size={40} />
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h1 className={`text-6xl md:text-8xl mb-6 text-brand-title leading-tight tracking-tight ${i18n.language !== 'en' ? 'font-devanagari' : 'font-serif'}`}>
              {data.hero.title}
            </h1>
            <p className="text-xl md:text-3xl text-brand-gray/80 max-w-2xl mx-auto font-light leading-relaxed">
              {data.hero.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Introduction Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-primary/40"></div>
              <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs">Our Journey</span>
            </div>
            <h2 className={`text-4xl md:text-5xl mb-8 text-brand-title leading-tight ${i18n.language !== 'en' ? 'font-devanagari' : 'font-serif'}`}>
              {data.intro.title}
            </h2>
            <p className="text-lg md:text-xl text-brand-gray font-light leading-relaxed mb-10">
              {data.intro.content}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-[3rem] overflow-hidden shadow-premium aspect-[4/5] z-10 group">
              <img 
                src="https://images.unsplash.com/photo-1524312644410-624136278816?auto=format&fit=crop&q=80&w=1200" 
                alt="Children learning" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 to-transparent"></div>
              <div className="absolute bottom-8 left-8">
                <p className="text-white/90 font-serif italic text-2xl">{data.intro.media_label}</p>
              </div>
            </div>
            {/* Decorative frame */}
            <div className="absolute -top-6 -right-6 w-full h-full border-2 border-primary/20 rounded-[3rem] -z-0 translate-x-4 translate-y-4"></div>
          </motion.div>
        </div>
      </section>

      {/* 3. Vision Section */}
      <section className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-[#f9f7f2] -skew-y-2 origin-left"></div>
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="bg-white p-12 md:p-24 rounded-[4rem] shadow-soft border border-primary/5"
          >
            <Star className="text-primary/20 mx-auto mb-10" size={48} />
            <h3 className={`text-3xl md:text-4xl mb-10 text-brand-title italic ${i18n.language !== 'en' ? 'font-devanagari' : 'font-serif'}`}>
              {data.vision.title}
            </h3>
            <p className="text-2xl md:text-4xl text-brand-gray font-extralight leading-relaxed max-w-3xl mx-auto italic">
              "{data.vision.content}"
            </p>
          </motion.div>
        </div>
      </section>

      {/* 4. Key Programs Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="tagline">Empowerment Paths</span>
            <h2 className={`text-4xl md:text-6xl text-brand-title ${i18n.language !== 'en' ? 'font-devanagari' : 'font-serif'}`}>
              {data.programs.title}
            </h2>
          </div>

          <motion.div 
            className="grid md:grid-cols-3 gap-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {data.programs.list.map((prog, idx) => {
              const Icons = [School, GraduationCap, Heart];
              const Icon = Icons[idx] || CheckCircle2;
              return (
                <motion.div 
                  key={idx}
                  variants={fadeIn}
                  className="group p-12 bg-white rounded-[3rem] border border-primary/5 hover:border-primary/20 transition-all duration-500 hover:shadow-premium hover:-translate-y-3"
                >
                  <div className="w-20 h-20 rounded-3xl bg-cream flex items-center justify-center mb-10 group-hover:bg-primary transition-colors duration-500 shadow-sm overflow-hidden relative">
                    <Icon className="text-primary group-hover:text-white transition-colors duration-500 relative z-10" size={36} />
                    <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                  </div>
                  <h4 className="text-2xl font-bold mb-6 text-brand-dark group-hover:text-primary transition-colors">{prog.title}</h4>
                  <p className="text-brand-gray font-light leading-relaxed">{prog.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* 5. Impact Section */}
      <section className="py-24 px-6 bg-brand-dark text-white rounded-[4rem] mx-6 my-10 overflow-hidden relative">
        {/* Subtle decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-[80px]"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-5xl text-white font-serif mb-4">{data.impact.title}</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {data.impact.stats.map((stat, idx) => {
              const icons = { Users, Award, CheckCircle2, Home };
              const IconComp = icons[stat.icon] || Users;
              return (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="text-center flex flex-col items-center group"
                >
                  <div className="p-4 rounded-2xl bg-white/10 mb-6 group-hover:bg-primary/20 transition-colors">
                    <IconComp className="text-primary" size={28} />
                  </div>
                  <div className="text-5xl md:text-6xl font-serif font-light mb-2 text-primary">{stat.value}</div>
                  <div className="text-white/60 uppercase tracking-[0.2em] text-xs font-bold">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Testimonials Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className={`text-4xl md:text-6xl text-brand-title mb-4 ${i18n.language !== 'en' ? 'font-devanagari' : 'font-serif'}`}>
              {data.testimonials.title}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {data.testimonials.list.map((tst, idx) => (
              <motion.div 
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="bg-[#fcf8f0] p-12 rounded-[3.5rem] shadow-soft border border-primary/5 relative group"
              >
                 <MessageCircle className="text-primary/20 absolute top-10 right-10 group-hover:text-primary/40 transition-colors" size={60} />
                 <div className="flex gap-1 mb-8">
                   {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-primary text-primary" />)}
                 </div>
                 <p className="text-xl text-brand-gray font-light mb-10 leading-relaxed italic relative z-10">"{tst.text}"</p>
                 <div className="flex items-center gap-4">
                   <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                     {tst.author[0]}
                   </div>
                   <div className="text-brand-dark font-bold">— {tst.author}</div>
                 </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ Section */}
      <section className="py-32 px-6 bg-[#f9f7f2]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-20">
            <h2 className={`text-4xl md:text-5xl text-brand-title mb-4 ${i18n.language !== 'en' ? 'font-devanagari' : 'font-serif'}`}>
              {data.faqs.title}
            </h2>
          </div>
          <div className="space-y-6">
            {data.faqs.list.map((faq, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-white rounded-[2rem] overflow-hidden border border-primary/5 shadow-soft transition-all duration-300"
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-8 text-left hover:bg-cream/30 transition-colors"
                >
                  <span className="text-xl font-bold text-brand-dark pr-6">{faq.q}</span>
                  <div className={`w-8 h-8 rounded-full bg-cream flex items-center justify-center text-primary transition-transform duration-300 ${openFaq === idx ? 'rotate-180 bg-primary text-white' : ''}`}>
                    <ChevronDown size={18} />
                  </div>
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-8 pt-0 text-brand-gray text-lg leading-relaxed font-light border-t border-cream/50">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CTA Section */}
      <section className="py-24 px-6 mb-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-primary p-12 md:p-28 rounded-[5rem] text-center text-white shadow-premium relative overflow-hidden"
          >
             {/* Decorative rays */}
             <div className="absolute inset-0 opacity-10 pointer-events-none">
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(255,255,255,0.4)_0%,transparent_60%)]"></div>
             </div>
             
             <div className="relative z-10">
               <h2 className={`text-4xl md:text-7xl mb-12 leading-tight ${i18n.language !== 'en' ? 'font-devanagari' : 'font-serif'}`}>
                 {data.cta.title}
               </h2>
               <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                 <motion.button 
                   whileHover={{ scale: 1.05 }}
                   whileTap={{ scale: 0.95 }}
                   className="bg-white text-primary hover:bg-brand-dark hover:text-white px-14 py-5 rounded-2xl text-xl font-bold shadow-2xl transition-all min-w-[240px]"
                 >
                   {data.cta.primary}
                 </motion.button>
                 <motion.button 
                   whileHover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                   className="border-2 border-white/40 text-white px-14 py-5 rounded-2xl text-xl font-bold transition-all min-w-[240px]"
                 >
                   {data.cta.secondary}
                 </motion.button>
               </div>
             </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Education;
