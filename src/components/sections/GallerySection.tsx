import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { SectionShell } from '../ui/WireframePrimitives';
import { Image, X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

interface GalleryItem {
  id: number;
  src: string;
  category: 'convention' | 'meeting' | 'felicitation';
  titleMr: string;
  titleEn: string;
  descMr: string;
  descEn: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    src: '/gallery-1.jpg',
    category: 'convention',
    titleMr: 'राज्यस्तरीय पत्रकार महाअधिवेशन व मेळावा',
    titleEn: 'State Level Journalist Convention & Gathering',
    descMr: 'पत्रकारांचे हक्क, संरक्षण व सन्मानासाठी आयोजित भव्य महामेळावा.',
    descEn: 'Grand convention for journalist security, rights, and honor.',
  },
  {
    id: 2,
    src: '/gallery-2.jpg',
    category: 'meeting',
    titleMr: 'महासंघ केंद्रीय व राज्य कार्यकारिणी बैठक',
    titleEn: 'Central & State Executive Council Meeting',
    descMr: 'संघटनात्मक धोरण व भावी रूपरेषेबाबत सविस्तर विचारमंथन.',
    descEn: 'In-depth deliberations on federation policies and future blueprint.',
  },
  {
    id: 3,
    src: '/gallery-3.jpg',
    category: 'felicitation',
    titleMr: 'ज्येष्ठ पत्रकार सन्मान व पुरस्कार सोहळा',
    titleEn: 'Veteran Journalist Honor & Award Ceremony',
    descMr: 'निष्पक्ष व निर्भीड पत्रकारितेसाठी मान्यवरांचा विशेष सत्कार.',
    descEn: 'Special felicitation of journalists for fearless reporting.',
  },
  {
    id: 4,
    src: '/gallery-4.jpg',
    category: 'convention',
    titleMr: 'पत्रकार हक्क परिषद व मार्गदर्शन सत्र',
    titleEn: 'Journalist Rights Conference & Guidance Session',
    descMr: 'कायदेशीर संरक्षण व पत्रकार कल्याण योजनांवर मार्गदर्शन.',
    descEn: 'Guidance on legal rights and welfare schemes for media fraternity.',
  },
  {
    id: 5,
    src: '/gallery-5.jpg',
    category: 'meeting',
    titleMr: 'शासकीय शिष्टमंडळ भेट व निवेदन सादर',
    titleEn: 'Administrative Delegation & Memorandum Submission',
    descMr: 'पत्रकारांच्या विविध मागण्यांचे निवेदन प्रशासनास सुपूर्द करताना.',
    descEn: 'Submitting official memorandum on media safety to administration.',
  },
  {
    id: 6,
    src: '/gallery-6.jpg',
    category: 'felicitation',
    titleMr: 'वार्षिक स्नेहसंमेलन व शिवप्रतिमा प्रदान',
    titleEn: 'Annual Convention & Chhatrapati Shivaji Maharaj Trophy Felicitation',
    descMr: 'सामाजिक बांधिलकी व उत्कृष्ट योगदानाबद्दल गौरव सोहळा.',
    descEn: 'Ceremony honoring grassroots media heroes and social contributors.',
  },
  {
    id: 7,
    src: '/gallery-7.jpg',
    category: 'meeting',
    titleMr: 'जिल्हास्तरीय प्रतिनिधी मेळावा',
    titleEn: 'District Representatives Conference',
    descMr: 'स्थानिक पत्रकारांच्या समस्यांवर विचारमंथन व उपाययोजना.',
    descEn: 'Brainstorming solutions for rural and district reporters.',
  },
  {
    id: 8,
    src: '/gallery-8.jpg',
    category: 'convention',
    titleMr: 'लोकशाही पत्रकार संघ एकता निर्धार परिषद',
    titleEn: 'Lokshahi Press Federation Solidarity Conference',
    descMr: 'महाराष्ट्रातील पत्रकारांची अभूतपूर्व एकजूट व निर्धार.',
    descEn: 'Historic assembly uniting media professionals across Maharashtra.',
  },
  {
    id: 9,
    src: '/gallery-9.jpg',
    category: 'felicitation',
    titleMr: 'वृत्तपत्र वर्धापन दिन व पत्रकार सत्कार',
    titleEn: 'Newspaper Anniversary & Journalists Felicitation',
    descMr: 'वृत्तपत्र प्रकाशन व माध्यम क्षेत्रातील मान्यवरांचा गौरव.',
    descEn: 'Commemorating media publications and recognizing journalism champions.',
  },
  {
    id: 10,
    src: '/gallery-10.jpg',
    category: 'meeting',
    titleMr: 'कायदेशीर सल्लागार व विधी सेल चर्चासत्र',
    titleEn: 'Legal Cell Consultation & Advisory Meeting',
    descMr: 'पत्रकारांवरील खोट्या गुन्ह्यांविरोधात मोफत विधी सहाय्य कक्ष.',
    descEn: 'Establishing free legal cell defense against spurious FIRs.',
  },
  {
    id: 11,
    src: '/gallery-11.jpg',
    category: 'convention',
    titleMr: 'राष्ट्रीय अधिवेशन प्रतिनिधी संवाद',
    titleEn: 'National Convention Representatives Dialogue',
    descMr: '२८ राज्यांतील संघटनात्मक विस्ताराचा आढावा व दिशा.',
    descEn: 'Strategic review of nationwide expansion across states.',
  },
  {
    id: 12,
    src: '/gallery-12.jpg',
    category: 'felicitation',
    titleMr: 'महिला पत्रकार सक्षमीकरण व सन्मान',
    titleEn: 'Women Journalists Empowerment & Honors',
    descMr: 'माध्यम क्षेत्रातील कर्तृत्ववान महिला पत्रकारांचा विशेष सन्मान.',
    descEn: 'Honoring visionary women editors and investigative reporters.',
  },
  {
    id: 13,
    src: '/gallery-13.jpg',
    category: 'convention',
    titleMr: 'विभागीय पत्रकार कार्यशाळा व प्रशिक्षण',
    titleEn: 'Divisional Media Workshop & Skills Training',
    descMr: 'डिजिटल पत्रकारिता व सायबर सुरक्षेवर विशेष कार्यशाळा.',
    descEn: 'Upskilling session on investigative digital journalism & cyber ethics.',
  },
  {
    id: 14,
    src: '/gallery-14.jpg',
    category: 'meeting',
    titleMr: 'तालुका समन्वय समिती बैठक',
    titleEn: 'Taluka Coordination Committee Meeting',
    descMr: 'ग्रामीण भागातील पत्रकारांच्या संरक्षणासाठी कृती योजना.',
    descEn: 'Action plan for grassroot media security and welfare access.',
  },
  {
    id: 15,
    src: '/gallery-15.jpg',
    category: 'felicitation',
    titleMr: 'विशेष सामाजिक योगदान गौरव',
    titleEn: 'Special Social Contribution Honors',
    descMr: 'जनहित व लोकशाही मूल्यांच्या रक्षणासाठी कार्य करणाऱ्यांचा गौरव.',
    descEn: 'Honoring civic advocates serving constitutional media freedom.',
  },
  {
    id: 16,
    src: '/gallery-16.jpg',
    category: 'convention',
    titleMr: 'लोकशाही जागर मेळावा व विचारमंथन',
    titleEn: 'Democratic Awakening Convention',
    descMr: 'अभिव्यक्ती स्वातंत्र्य व पत्रकारांच्या अधिकारांवर परिसंवाद.',
    descEn: 'Symposium on constitutional free speech and journalist rights.',
  },
  {
    id: 17,
    src: '/gallery-17.jpg',
    category: 'meeting',
    titleMr: 'प्रेस क्लब व माध्यम संस्था समन्वय बैठक',
    titleEn: 'Press Club & Media Associations Coordination',
    descMr: 'विविध पत्रकार संघटनांशी सहकार्य व संयुक्त कृती कार्यक्रम.',
    descEn: 'Collaborative initiative linking regional press associations.',
  },
  {
    id: 18,
    src: '/gallery-18.jpg',
    category: 'convention',
    titleMr: 'महासंघ महामेळावा — फेटे बांधून एकजुटीचा निर्धार',
    titleEn: 'Federation Grand Gathering — Pheta Ceremony of Solidarity',
    descMr: 'परंपरेचा सन्मान आणि पत्रकारांच्या हक्कांसाठी एकजूट.',
    descEn: 'Cultural honor and pledge of journalistic unity.',
  },
  {
    id: 19,
    src: '/gallery-19.jpg',
    category: 'felicitation',
    titleMr: 'माध्यम गौरव व समारोप सोहळा',
    titleEn: 'Media Excellence & Concluding Ceremony',
    descMr: 'महासंघाच्या यशस्वी कार्यक्रमांचा समारोप व पुढील ध्येय.',
    descEn: 'Celebration of federation milestones and upcoming roadmaps.',
  },
];

export function GallerySection() {
  const { t, lang } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activePhoto, setActivePhoto] = useState<GalleryItem | null>(null);

  const filterTabs = [
    { id: 'all', mr: 'सर्व छायाचित्रे', en: 'All Photos' },
    { id: 'convention', mr: 'महाअधिवेशने व मेळावे', en: 'Conventions' },
    { id: 'meeting', mr: 'संघटना व शिष्टमंडळ', en: 'Meetings & Delegation' },
    { id: 'felicitation', mr: 'सत्कार व गौरव सोहळे', en: 'Felicitations & Awards' },
  ];

  const filteredItems = selectedCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  const openLightbox = (item: GalleryItem) => {
    setActivePhoto(item);
  };

  const closeLightbox = () => {
    setActivePhoto(null);
  };

  const nextPhoto = () => {
    if (!activePhoto) return;
    const currentIndex = filteredItems.findIndex(i => i.id === activePhoto.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setActivePhoto(filteredItems[nextIndex]);
  };

  const prevPhoto = () => {
    if (!activePhoto) return;
    const currentIndex = filteredItems.findIndex(i => i.id === activePhoto.id);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setActivePhoto(filteredItems[prevIndex]);
  };

  return (
    <SectionShell id="gallery" title={t('sec_gallery')}>
      <div className="space-y-6 text-left">
        {/* Intro banner */}
        <div className="rounded-2xl border-2 border-[#172A4A]/20 bg-gradient-to-r from-white via-[#F7F3EC]/50 to-white p-5 sm:p-7 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.25em] text-[#E30620] block mb-1">
                PHOTO ARCHIVE • अधिकृत छायाचित्र संग्रह
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-[#172A4A]">
                {lang === 'mr' ? 'महासंघाच्या ऐतिहासिक कार्यक्रमांची छायाचित्रे' : 'Official Archive of Conventions & Campaigns'}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 mt-1 max-w-2xl font-medium">
                {lang === 'mr'
                  ? 'गेल्या ११ वर्षांतील राज्यस्तरीय अधिवेशने, पत्रकार हक्क मेळावे, शिष्टमंडळ बैठका व गौरव सोहळ्यांचे अधिकृत छायाचित्र दालन.'
                  : 'High-resolution photo archive documenting our nationwide conferences, delegations, award ceremonies, and journalist rallies.'}
              </p>
            </div>
            <div className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-xl border border-[#172A4A]/15 shadow-2xs shrink-0 self-start sm:self-auto">
              <Image className="w-4 h-4 text-[#E30620]" />
              <span className="text-xs font-black text-[#172A4A]">
                {galleryItems.length} {lang === 'mr' ? 'अधिकृत छायाचित्रे' : 'Archive Photos'}
              </span>
            </div>
          </div>
        </div>

        {/* Filter categories */}
        <div className="flex flex-wrap gap-2 pt-1">
          {filterTabs.map((tab) => {
            const isActive = selectedCategory === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSelectedCategory(tab.id)}
                className={`rounded-full border-2 px-4 py-1.5 text-xs font-bold transition-all cursor-pointer ${
                  isActive
                    ? 'border-[#172A4A] bg-[#172A4A] text-white shadow-xs'
                    : 'border-[#172A4A]/20 bg-white text-[#172A4A] hover:border-[#E30620] hover:text-[#E30620]'
                }`}
              >
                {lang === 'mr' ? tab.mr : tab.en}
              </button>
            );
          })}
        </div>

        {/* Real Photo Grid (all 19 photos) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => openLightbox(item)}
              className="group relative cursor-pointer overflow-hidden rounded-2xl border border-[#172A4A]/15 bg-white shadow-xs hover:shadow-lg hover:border-[#E30620] transition-all duration-300 flex flex-col justify-between"
            >
              {/* Photo Frame */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100">
                <img
                  src={item.src}
                  alt={lang === 'mr' ? item.titleMr : item.titleEn}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-[#172A4A] shadow-md">
                    <ZoomIn className="w-3.5 h-3.5 text-[#E30620]" />
                    {lang === 'mr' ? 'मोठा फोटो पहा' : 'View Full Photo'}
                  </span>
                </div>
                <div className="absolute top-2 left-2">
                  <span className="rounded-md bg-[#172A4A]/85 backdrop-blur-xs text-white px-2 py-0.5 text-[10px] font-bold">
                    #{item.id}
                  </span>
                </div>
              </div>

              {/* Caption */}
              <div className="p-3.5 bg-white border-t border-neutral-100">
                <h4 className="text-xs sm:text-sm font-bold text-[#172A4A] group-hover:text-[#E30620] transition-colors line-clamp-1">
                  {lang === 'mr' ? item.titleMr : item.titleEn}
                </h4>
                <p className="text-[11px] text-neutral-500 mt-1 line-clamp-2 leading-relaxed">
                  {lang === 'mr' ? item.descMr : item.descEn}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {activePhoto && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={closeLightbox}
          >
            <div
              className="relative max-w-4xl w-full bg-[#0B1E36] rounded-2xl overflow-hidden border border-white/20 shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top Header */}
              <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/10 bg-[#172A4A]">
                <div className="flex items-center gap-2">
                  <span className="rounded-md bg-[#E30620] text-white px-2 py-0.5 text-[11px] font-bold">
                    {activePhoto.id} / {filteredItems.length}
                  </span>
                  <h4 className="text-sm font-bold text-white truncate max-w-md sm:max-w-xl">
                    {lang === 'mr' ? activePhoto.titleMr : activePhoto.titleEn}
                  </h4>
                </div>
                <button
                  type="button"
                  onClick={closeLightbox}
                  className="rounded-full p-1.5 text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Large Image Viewport */}
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-black flex items-center justify-center overflow-hidden">
                <img
                  src={activePhoto.src}
                  alt={lang === 'mr' ? activePhoto.titleMr : activePhoto.titleEn}
                  className="max-w-full max-h-full object-contain"
                />

                {/* Prev / Next controls */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    prevPhoto();
                  }}
                  className="absolute left-3 rounded-full bg-black/60 p-2 text-white/80 hover:text-white hover:bg-black/90 transition-all cursor-pointer"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    nextPhoto();
                  }}
                  className="absolute right-3 rounded-full bg-black/60 p-2 text-white/80 hover:text-white hover:bg-black/90 transition-all cursor-pointer"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Bottom Details Footer */}
              <div className="p-4 bg-[#172A4A] text-left text-white/90 border-t border-white/10">
                <p className="text-xs sm:text-sm font-medium">
                  {lang === 'mr' ? activePhoto.descMr : activePhoto.descEn}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </SectionShell>
  );
}
