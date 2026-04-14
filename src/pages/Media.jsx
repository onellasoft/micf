import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Image as ImageIcon, X, Maximize2, ChevronLeft, Calendar, ArrowRight } from 'lucide-react';

// Import local images for "Real" feel
import eduImg from '../assets/images/initiative_education.png';
import socialImg from '../assets/images/initiative_social.png';
import envImg from '../assets/images/initiative_environment.png';
import charityImg from '../assets/images/initiative_charity.png';
import religionImg from '../assets/images/initiative_religion.png';

const Media = () => {
    const { t, i18n } = useTranslation();
    const [selectedAlbumId, setSelectedAlbumId] = useState(null);
    const [selectedMedia, setSelectedMedia] = useState(null);

    const albums = [
        {
            id: 'republic_day',
            title: t('media_page.albums.republic_day.title'),
            desc: t('media_page.albums.republic_day.desc'),
            date: '26 Jan 2026',
            cover: 'https://images.unsplash.com/photo-1532375810709-75b1da00537c?auto=format&fit=crop&q=80&w=800', // Verified Indian Flag
        },
        {
            id: 'rss_meeting',
            title: t('media_page.albums.rss_meeting.title'),
            desc: t('media_page.albums.rss_meeting.desc'),
            date: '10 Feb 2026',
            cover: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=800', // Indian community meeting
        },
        {
            id: 'youth_camp',
            title: t('media_page.albums.youth_camp.title'),
            desc: t('media_page.albums.youth_camp.desc'),
            date: '15 Mar 2026',
            cover: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800', // Indian students learning
        },
        {
            id: 'environment',
            title: t('media_page.albums.environment.title'),
            desc: t('media_page.albums.environment.desc'),
            date: '22 Apr 2025',
            cover: envImg, // Use real local image for cover
        }
    ];

    const mediaItems = [
        // Republic Day
        { id: 101, albumId: 'republic_day', type: 'photo', src: 'https://images.unsplash.com/photo-1532375810709-75b1da00537c?auto=format&fit=crop&q=80&w=800', title: 'National Flag Ceremony' },
        { id: 102, albumId: 'republic_day', type: 'photo', src: 'https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?auto=format&fit=crop&q=80&w=800', title: 'Celebrating at the Foundation' },
        { id: 103, albumId: 'republic_day', type: 'photo', src: 'https://images.unsplash.com/photo-1590483734061-86105f778a63?auto=format&fit=crop&q=80&w=800', title: 'Cultural Program Highlights' },
        
        // RSS Meeting
        { id: 201, albumId: 'rss_meeting', type: 'photo', src: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=800', title: 'Dialogue on National Values' },
        { id: 202, albumId: 'rss_meeting', type: 'photo', src: socialImg, title: 'Community Outreach Discussion' },
        { id: 203, albumId: 'rss_meeting', type: 'photo', src: religionImg, title: 'Spiritual Heritage Dialogue' },
        
        // Youth Camp
        { id: 301, albumId: 'youth_camp', type: 'photo', src: eduImg, title: 'Character Building Session' },
        { id: 302, albumId: 'youth_camp', type: 'photo', src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800', title: 'Student Interaction' },
        { id: 303, albumId: 'youth_camp', type: 'video', thumbnail: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=800', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', title: 'Highlights of the Camp' },
        
        // Environment
        { id: 401, albumId: 'environment', type: 'photo', src: envImg, title: 'Tree Plantation at Ashram' },
        { id: 402, albumId: 'environment', type: 'photo', src: 'https://images.unsplash.com/photo-1542601906990-b4d3fb773b09?auto=format&fit=crop&q=80&w=800', title: 'Village Green Initiative' },
        { id: 403, albumId: 'environment', type: 'photo', src: charityImg, title: 'Distribution of Eco-kits' },
    ];

    const selectedAlbum = albums.find(a => a.id === selectedAlbumId);
    const filteredMedia = mediaItems.filter(item => item.albumId === selectedAlbumId);

    return (
        <div className="bg-cream min-h-screen pt-28 pb-20">
            {/* Hero Section */}
            <div className="section-container !py-10 text-center">
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="tagline"
                >
                    {t('media_page.title')}
                </motion.span>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="mb-6 text-3xl md:text-5xl font-bold tracking-tight leading-tight text-brand-title"
                >
                    {selectedAlbum ? selectedAlbum.title : t('media_page.title')}
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="max-w-2xl mx-auto text-brand-gray text-base md:text-lg font-light leading-relaxed"
                >
                    {selectedAlbum ? selectedAlbum.desc : t('media_page.subtitle')}
                </motion.p>
            </div>

            <div className="max-w-7xl mx-auto px-4">
                <AnimatePresence mode="wait">
                    {!selectedAlbumId ? (
                        /* Album Grid View */
                        <motion.div
                            key="album-grid"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        >
                            {albums.map((album) => (
                                <motion.div
                                    key={album.id}
                                    whileHover={{ y: -8 }}
                                    className="group cursor-pointer flex flex-col h-full bg-white rounded-[2.5rem] overflow-hidden shadow-soft hover:shadow-premium transition-all duration-500 border border-brand-light-gray/20"
                                    onClick={() => setSelectedAlbumId(album.id)}
                                >
                                    <div className="aspect-[16/10] overflow-hidden">
                                        <img
                                            src={album.cover}
                                            alt={album.title}
                                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                        />
                                    </div>
                                    <div className="p-8 flex flex-col">
                                        <h2 className="text-brand-title text-xl md:text-2xl mb-4 font-bold tracking-tight leading-tight">
                                            {album.title}
                                        </h2>
                                        
                                        <div className="flex items-center justify-between pt-4 border-t border-brand-light-gray/10 mt-auto">
                                            <div className="flex items-center gap-2">
                                                <Calendar size={14} className="text-primary" />
                                                <span className="text-brand-gray text-xs font-medium">{album.date}</span>
                                            </div>
                                            
                                            <div className="flex items-center gap-1 text-primary font-bold text-sm group-hover:gap-2 transition-all">
                                                {t('media_page.view_album')} <ArrowRight size={16} className="transition-transform" />
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    ) : (
                        /* Media Grid View (Inside Album) */
                        <motion.div
                            key="media-grid"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                        >
                            <div className="flex justify-between items-center mb-12">
                                <button
                                    onClick={() => setSelectedAlbumId(null)}
                                    className="flex items-center gap-3 text-primary font-bold hover:gap-4 transition-all group bg-white px-6 py-3 rounded-2xl shadow-soft"
                                >
                                    <ChevronLeft className="group-hover:-translate-x-1 transition-transform" />
                                    {t('media_page.back_to_albums')}
                                </button>
                                <div className="text-right">
                                    <span className="text-brand-gray text-[11px] uppercase tracking-wider font-bold">{selectedAlbum.date}</span>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {filteredMedia.map((item) => (
                                    <motion.div
                                        key={item.id}
                                        whileHover={{ y: -5 }}
                                        onClick={() => setSelectedMedia(item)}
                                        className="group relative cursor-pointer overflow-hidden rounded-[2.5rem] shadow-soft bg-white aspect-square border border-brand-light-gray/10"
                                    >
                                        <img
                                            src={item.type === 'photo' ? item.src : item.thumbnail}
                                            alt={item.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-brand-dark/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-6 text-center">
                                            <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-primary shadow-2xl mb-4">
                                                {item.type === 'video' ? <Play size={28} fill="currentColor" /> : <Maximize2 size={28} />}
                                            </div>
                                            <p className="text-white text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity delay-100 font-sans">{item.title}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Lightbox / Modal */}
            <AnimatePresence>
                {selectedMedia && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-dark/98 backdrop-blur-md p-4 md:p-10"
                        onClick={() => setSelectedMedia(null)}
                    >
                        <button
                            className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors bg-white/10 p-3 rounded-full backdrop-blur-lg"
                            onClick={() => setSelectedMedia(null)}
                        >
                            <X size={32} />
                        </button>

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className="max-w-6xl w-full max-h-full rounded-[3rem] overflow-hidden shadow-3xl bg-black border border-white/10"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {selectedMedia.type === 'photo' ? (
                                <img
                                    src={selectedMedia.src}
                                    alt={selectedMedia.title}
                                    className="w-full h-auto max-h-[80vh] object-contain mx-auto"
                                />
                            ) : (
                                <div className="aspect-video w-full bg-black">
                                    <iframe
                                        src={selectedMedia.videoUrl}
                                        title={selectedMedia.title}
                                        className="w-full h-full"
                                        allowFullScreen
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    />
                                </div>
                            )}
                            <div className="bg-white p-8 md:p-12">
                                <h3 className="text-2xl md:text-3xl text-brand-title font-bold leading-tight">{selectedMedia.title}</h3>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Media;
