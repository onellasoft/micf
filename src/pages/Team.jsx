import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Scroll, Award, Users, User } from 'lucide-react';
import team1 from '../assets/images/team/1_Achary_Bidkar_baba.jpg';
import team3 from '../assets/images/team/3_Raherkar_Baba.jpeg';
import team4 from '../assets/images/team/4_Prakash_Muni.jpeg';
import team6 from '../assets/images/team/acharya_kothi_baba.jpeg';
import team7 from '../assets/images/team/Acharya_Chichondikar_Baba_.jpeg';
import team9 from '../assets/images/team/9_B.P.Kallurkar.jpeg';
import team10 from '../assets/images/team/SGLanke.jpeg';

// Note: team2, team5, team8 etc. are currently using icons or generic placeholders

const Team = () => {
  const { t } = useTranslation();
  
  // Specific image mapping for team members
  const getMemberImage = (idx) => {
    if (idx === 0) return team1; // Acharya Sri Vardhanstha Baba
    if (idx === 2) return team3; // Acharya Raherkar Baba
    if (idx === 3) return team4; // Mahant Prakash Muni
    if (idx === 5) return team6; // Acharya Kothi Baba
    if (idx === 6) return team7; // Acharya Chichondikar Baba
    if (idx === 9) return team9; // B. P. Kallurkar (Ex. Dy.SP)
    if (idx === 10) return team10; // S. G. Lanke
    
    return null; // Fallback for icons
  };

  const members = t('about_page.team.members', { returnObjects: true }) || [];

  const renderName = (name) => {
    const parts = name.split('(');
    if (parts.length > 1) {
      return (
        <>
          {parts[0].trim()}
          <span className="block text-sm md:text-base font-sans opacity-70 mt-1 font-medium italic">
            ({parts[1]}
          </span>
        </>
      );
    }
    return name;
  };

  return (
    <div className="bg-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-4 pt-32 pb-24 space-y-32">
        {/* Team Section */}
        <section className="space-y-20">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-serif text-brand-title mb-4">
                {t('about_page.team.title')}</h2>

              <div className="w-48 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mb-12"></div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16 max-w-4xl mx-auto">
            {members.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (idx % 4) * 0.1 }}
                className="group relative"
              >
                {/* Image Container with Border */}
                <div className="relative aspect-[4/5] mb-6 overflow-hidden rounded-2xl transition-all duration-500 shadow-xl ">
                  {/* Decorative Border */}
                  <div className="absolute inset-4 border-2 border-primary/20 rounded-xl  transition-all duration-500 z-10 pointer-events-none"></div>

                  {[1, 4, 7, 8].includes(idx) ? (
                    <div className="w-full h-full bg-brand-light-gray/20 flex items-center justify-center">
                      <User size={120} className="text-primary/20" />
                    </div>
                  ) : (
                    <img
                      src={getMemberImage(idx)}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  )}

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    <Award className="text-primary" size={32} />
                  </div>
                </div>

                {/* Info */}
                <div className="text-center px-4">
                  <h3 className="text-xl md:text-2xl font-serif text-brand-title mb-1 group-hover:text-primary transition-colors leading-tight">
                    {renderName(member.name)}
                  </h3>
                  <p className="text-primary text-xs font-bold uppercase tracking-widest leading-relaxed">
                    {member.designation}
                  </p>
                </div>

                {/* Decorative Dot */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-primary/20 rounded-full group-hover:scale-150 group-hover:bg-primary transition-all duration-300"></div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Team;
