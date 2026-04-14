import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FileText, ExternalLink, ShieldCheck } from 'lucide-react';
import certIncorporation from '../assets/documents/CERTIFICATE_OF_INCORPORATION.PDF';
import licenseLetter from '../assets/documents/Letter_of_issue_of_license_u_s_to_new_company.PDF';

const Documents = () => {
  const { t } = useTranslation();
  const documents = t('about_page.document.list', { returnObjects: true }) || [];
  const featuredDocuments = t('about_page.document.featured_list', { returnObjects: true }) || [];

  const getDocFile = (fileName) => {
    if (fileName === 'CERTIFICATE_OF_INCORPORATION.PDF') return certIncorporation;
    if (fileName === 'Letter_of_issue_of_license_u_s_to_new_company.PDF') return licenseLetter;
    return '#';
  };

  return (
    <div className="bg-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-4 pt-32 pb-8 space-y-0">
        {/* Documents Header */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-serif text-brand-title mb-3">
              {t('about_page.document.title')}
            </h2>
            <div className="w-48 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mb-8"></div>
            {/* <p className="text-brand-gray text-lg md:text-xl font-light italic mb-12">
              {t('about_page.document.subtitle')}
            </p> */}
          </motion.div>
        </div>

        {/* Documents Table Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-white rounded-[10px] overflow-hidden border border-primary/10"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="px-3 py-3 text-[14px] font-bold uppercase tracking-widest">Document Name</th>
                  <th className="px-3 py-3 text-[14px] font-bold uppercase tracking-widest text-center">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-primary/10">
                {/* Featured Documents */}
                {featuredDocuments.map((doc, idx) => (
                  <motion.tr
                    key={`featured-${idx}`}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-primary/5 hover:bg-primary/10 transition-colors group relative"
                  >
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors relative">
                          <FileText className="text-primary" size={24} />
                          <ShieldCheck size={14} className="absolute -top-1 -right-1 text-primary bg-white rounded-full" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-brand-dark font-bold text-[14px]">{doc.name}</span>
                          <span className="text-[10px] text-primary font-bold tracking-widest bg-primary/10 px-2 py-0.5 rounded-full w-fit mt-1">Foundational Document</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-3 py-3 text-center">
                      <a
                        href={getDocFile(doc.file)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary text-white text-[14px] font-bold hover:bg-primary-dark transition-all hover:shadow-lg active:scale-95 group/btn"
                      >
                        {t('about_page.document.preview_btn')} <ExternalLink size={16} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </a>
                    </td>
                  </motion.tr>
                ))}

                {/* General Documents */}
                {documents.map((doc, idx) => (
                  <motion.tr
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="hover:bg-beige/30 transition-colors group"
                  >
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <div className="p-3 bg-primary/20 rounded-xl group-hover:bg-primary/30 transition-colors relative">
                          <FileText className="text-primary" size={18} />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-brand-dark text-brand-dark font-bold text-[14px]">{doc}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-6 text-center">
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          window.open('https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', '_blank');
                        }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary text-white text-[14px] font-bold hover:bg-primary-dark transition-all hover:shadow-lg active:scale-95 group/btn"
                      >
                        {t('about_page.document.preview_btn')} <ExternalLink size={16} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </a>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Footer Info */}
        {/* <div className="max-w-4xl mx-auto text-center mt-16 text-brand-gray/60 font-medium text-sm tracking-widest uppercase">
          Mahanubhav International Charitable Foundation • Regulatory Compliance
        </div> */}
      </div>
    </div>
  );
};

export default Documents;
