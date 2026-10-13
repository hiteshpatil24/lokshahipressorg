import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { SectionShell, WFCard } from '../ui/WireframePrimitives';
import { Calendar, MapPin, Users, FileText, Image, Film, ExternalLink } from 'lucide-react';

interface EventItem {
  id: number;
  imageSrc: string;
  titleMr: string;
  titleEn: string;
  placeMr: string;
  placeEn: string;
  dateMr: string;
  dateEn: string;
  organizerMr: string;
  organizerEn: string;
  descMr: string;
  descEn: string;
  categoryMr: string;
  categoryEn: string;
}

const realEvents: EventItem[] = [
  {
    id: 1,
    imageSrc: '/event-1.jpg',
    titleMr: 'राज्यस्तरीय पत्रकार महाअधिवेशन व एकजूट निर्धार मेळावा',
    titleEn: 'State Level Journalist Convention & Unity Assembly',
    placeMr: 'रवींद्र नाट्य मंदिर, प्रभादेवी, मुंबई',
    placeEn: 'Ravindra Natya Mandir, Prabhadevi, Mumbai',
    dateMr: '१२ ऑक्टोबर २०२६',
    dateEn: 'October 12, 2026',
    organizerMr: 'महाराष्ट्र राज्य कार्यकारिणी समिती',
    organizerEn: 'Maharashtra State Executive Committee',
    descMr: 'पत्रकार संरक्षण कायद्याची कडक अंमलबजावणी, आरोग्य विमा व पेन्शन योजनांच्या मागण्यांवर चर्चा करण्यासाठी राज्यातील हजारो पत्रकारांचा महामेळावा.',
    descEn: 'Mass convention addressing media protection laws, health insurance, and welfare pensions across Maharashtra.',
    categoryMr: 'महाअधिवेशन',
    categoryEn: 'Convention',
  },
  {
    id: 2,
    imageSrc: '/event-2.jpg',
    titleMr: 'पत्रकार हक्क, कायदेशीर संरक्षण व विधी मार्गदर्शन शिबीर',
    titleEn: 'Journalist Rights, Legal Defense & Advisory Camp',
    placeMr: 'यशवंतराव चव्हाण प्रतिष्ठान, नरिमन पॉईंट, मुंबई',
    placeEn: 'Yashwantrao Chavan Center, Nariman Point, Mumbai',
    dateMr: '२८ सप्टेंबर २०२६',
    dateEn: 'September 28, 2026',
    organizerMr: 'केंद्रीय विधी व कायदेशीर सल्लागार कक्ष',
    organizerEn: 'Central Legal Advisory & Defense Cell',
    descMr: 'वार्तांकन करताना पत्रकारांवर होणाऱ्या खोट्या तक्रारी, एफआयआर आणि दबावाविरुद्ध कायदेशीर संरक्षण देण्यासाठी उच्च न्यायालयाच्या विधिज्ञांचे मार्गदर्शन सत्र.',
    descEn: 'Comprehensive legal defense seminar by High Court advocates against spurious FIRs and harassment.',
    categoryMr: 'विधी कार्यशाळा',
    categoryEn: 'Legal Workshop',
  },
  {
    id: 3,
    imageSrc: '/event-3.jpg',
    titleMr: 'डिजिटल पत्रकारिता, यूट्यूब न्यूज व सायबर सुरक्षा कार्यशाळा',
    titleEn: 'Digital Journalism, YouTube News & Cyber Security Seminar',
    placeMr: 'बालगंधर्व रंगमंदिर, पुणे',
    placeEn: 'Balgandharva Ranga Mandir, Pune',
    dateMr: '१५ सप्टेंबर २०२६',
    dateEn: 'September 15, 2026',
    organizerMr: 'डिजिटल व सोशल मीडिया समन्वय समिती',
    organizerEn: 'Digital & Social Media Coordination Committee',
    descMr: 'डिजिटल पोर्टल आणि यूट्यूब चॅनेल चालवणाऱ्या पत्रकारांसाठी वस्तुनिष्ठ वार्तांकन, सायबर कायदे, कॉपीराइट आणि तंत्रज्ञानाचे सखोल प्रशिक्षण.',
    descEn: 'Hands-on technical workshop on fact-checking, cyber safety protocols, and ethical digital reporting.',
    categoryMr: 'प्रशिक्षण सत्र',
    categoryEn: 'Training Seminar',
  },
  {
    id: 4,
    imageSrc: '/event-4.jpg',
    titleMr: 'दैनिक लोकनेता वर्धापन दिन व उत्कृष्ट पत्रकारिता पुरस्कार सोहळा',
    titleEn: 'Dainik Lokneta Anniversary & Media Excellence Awards',
    placeMr: 'नवी मुंबई महापालिका सभागृह, वाशी',
    placeEn: 'Navi Mumbai Municipal Auditorium, Vashi',
    dateMr: '२२ ऑगस्ट २०२६',
    dateEn: 'August 22, 2026',
    organizerMr: 'पुरस्कार निवड व सन्मान समिती',
    organizerEn: 'Awards Selection & Felicitation Committee',
    descMr: 'जनतेच्या प्रश्नांना वाचा फोडणाऱ्या निर्भीड पत्रकारांना मानाची शिवमुर्ती व सन्मानपत्र देऊन गौरव सोहळा संपन्न.',
    descEn: 'Felicitation ceremony presenting prestigious awards to investigative grassroots journalists.',
    categoryMr: 'पुरस्कार सोहळा',
    categoryEn: 'Award Ceremony',
  },
  {
    id: 5,
    imageSrc: '/event-5.jpg',
    titleMr: 'प्रशासकीय शिष्टमंडळ संवाद व जिल्हाधिकारी निवेदन मोहीम',
    titleEn: 'District Administrative Delegation & Collectorate Outreach',
    placeMr: 'जिल्हाधिकारी कार्यालय परिसर, नाशिक',
    placeEn: 'District Collectorate Complex, Nashik',
    dateMr: '१० ऑगस्ट २०२६',
    dateEn: 'August 10, 2026',
    organizerMr: 'उत्तर महाराष्ट्र विभागीय समन्वय समिती',
    organizerEn: 'North Maharashtra Divisional Committee',
    descMr: 'स्थानिक ग्रामीण पत्रकारांवरील हल्ल्यांच्या निषेधार्थ आणि तात्काळ पोलीस संरक्षणाच्या मागणीसाठी जिल्हाधिकाऱ्यांना अधिकृत निवेदन सादर.',
    descEn: 'Delegation presenting formal charter of demands to administrative authorities for rural reporter safety.',
    categoryMr: 'शिष्टमंडळ भेट',
    categoryEn: 'Delegation',
  },
  {
    id: 6,
    imageSrc: '/event-6.jpg',
    titleMr: 'सामाजिक बांधिलकी उपक्रम — मोफत आरोग्य व नेत्रतपासणी शिबीर',
    titleEn: 'Social Welfare Drive — Free Health & Eye Checkup Camp',
    placeMr: 'छत्रपती संभाजीनगर कम्युनिटी सेंटर',
    placeEn: 'Chhatrapati Sambhajinagar Community Center',
    dateMr: '२५ जुलै २०२६',
    dateEn: 'July 25, 2026',
    organizerMr: 'आरोग्य व सामाजिक कल्याण समिती',
    organizerEn: 'Health & Social Welfare Committee',
    descMr: 'पत्रकार, त्यांचे कुटुंबीय आणि स्थानिक नागरिकांसाठी मोफत आरोग्य तपासणी, औषधोपचार आणि नेत्रतपासणी शिबिराचे यशस्वी आयोजन.',
    descEn: 'Free medical diagnosis and welfare checkup camp organized for media professionals and families.',
    categoryMr: 'सामाजिक उपक्रम',
    categoryEn: 'Social Initiative',
  },
];

export function EventsSection() {
  const { t, lang } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filterTabs = [
    { id: 'all', mr: 'सर्व कार्यक्रम', en: 'All Events' },
    { id: 'convention', mr: 'महाअधिवेशने', en: 'Conventions' },
    { id: 'workshop', mr: 'कार्यशाळा व प्रशिक्षण', en: 'Workshops' },
    { id: 'welfare', mr: 'सामाजिक उपक्रम', en: 'Welfare' },
  ];

  const filteredEvents = realEvents.filter(ev => {
    if (selectedCategory === 'convention') return ev.categoryMr.includes('अधिवेशन');
    if (selectedCategory === 'workshop') return ev.categoryMr.includes('कार्यशाळा') || ev.categoryMr.includes('प्रशिक्षण');
    if (selectedCategory === 'welfare') return ev.categoryMr.includes('सामाजिक') || ev.categoryMr.includes('पुरस्कार');
    return true;
  });

  return (
    <SectionShell id="events" title={t('sec_events')}>
      <div className="space-y-6 text-left">
        {/* Intro banner */}
        <div className="rounded-2xl border-2 border-[#172A4A]/20 bg-gradient-to-r from-white via-[#F7F3EC]/50 to-white p-5 sm:p-7 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.25em] text-[#E30620] block mb-1">
                EVENTS & CONVENTIONS • कार्यक्रम आणि उपक्रम
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-[#172A4A]">
                {lang === 'mr' ? 'महासंघाचे राज्यस्तरीय व राष्ट्रीय कार्यक्रम' : 'Nationwide Programs, Seminars & Conventions'}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 mt-1 max-w-2xl font-medium">
                {lang === 'mr'
                  ? 'महासंघाच्या माध्यमातून आयोजित करण्यात आलेल्या पत्रकारिता, सामाजिक, जनजागृती आणि संघटनात्मक कार्यक्रमांची सविस्तर माहिती व छायाचित्रे.'
                  : 'Detailed schedule, venue records, and photographic coverage of media conventions, seminars, and public welfare campaigns.'}
              </p>
            </div>
            <div className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-xl border border-[#172A4A]/15 shadow-2xs shrink-0 self-start sm:self-auto">
              <Calendar className="w-4 h-4 text-[#E30620]" />
              <span className="text-xs font-black text-[#172A4A]">
                {realEvents.length} {lang === 'mr' ? 'प्रमुख उपक्रम' : 'Major Events'}
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

        {/* Real Event Cards Grid with Photos */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="group flex flex-col justify-between rounded-2xl border border-[#172A4A]/15 bg-white p-4 sm:p-5 shadow-xs hover:shadow-lg hover:border-[#E30620] transition-all duration-300"
            >
              <div>
                {/* Real Event Photo Frame */}
                <div className="relative mb-4 aspect-[16/10] w-full overflow-hidden rounded-xl bg-neutral-100 border border-neutral-200">
                  <img
                    src={event.imageSrc}
                    alt={lang === 'mr' ? event.titleMr : event.titleEn}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-2.5 left-2.5">
                    <span className="rounded-md bg-[#172A4A]/90 backdrop-blur-xs text-white px-2.5 py-1 text-[11px] font-black shadow-sm">
                      {lang === 'mr' ? event.categoryMr : event.categoryEn}
                    </span>
                  </div>
                </div>

                {/* Event Title */}
                <h4 className="text-base font-bold text-[#172A4A] group-hover:text-[#E30620] leading-snug mb-3 transition-colors">
                  {lang === 'mr' ? event.titleMr : event.titleEn}
                </h4>

                {/* Event Meta Details Card */}
                <div className="space-y-2 text-xs text-neutral-700 mb-4 p-3 bg-neutral-50 rounded-xl border border-neutral-200">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#E30620] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-neutral-900 block">{lang === 'mr' ? 'ठिकाण' : 'Location'}:</span>
                      <span className="text-neutral-600 font-medium">{lang === 'mr' ? event.placeMr : event.placeEn}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 pt-1 border-t border-neutral-200/60">
                    <Calendar className="w-3.5 h-3.5 text-[#2855A5] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-neutral-900 block">{lang === 'mr' ? 'दिनांक' : 'Date'}:</span>
                      <span className="text-neutral-600 font-medium">{lang === 'mr' ? event.dateMr : event.dateEn}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 pt-1 border-t border-neutral-200/60">
                    <Users className="w-3.5 h-3.5 text-[#287A18] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-neutral-900 block">{lang === 'mr' ? 'आयोजक / समिती' : 'Organizer'}:</span>
                      <span className="text-neutral-600 font-medium">{lang === 'mr' ? event.organizerMr : event.organizerEn}</span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-neutral-200">
                    <span className="font-bold text-neutral-900 block mb-0.5">
                      📝 {lang === 'mr' ? 'कार्यक्रमाची माहिती' : 'Program Details'}:
                    </span>
                    <p className="text-[11px] leading-relaxed text-neutral-600 font-medium">
                      {lang === 'mr' ? event.descMr : event.descEn}
                    </p>
                  </div>
                </div>
              </div>

              {/* Media links badge */}
              <div className="pt-3 border-t border-neutral-100 flex items-center justify-between text-xs font-semibold text-neutral-600">
                <span className="inline-flex items-center gap-1.5 text-[#172A4A] font-bold">
                  <Image className="w-3.5 h-3.5 text-[#E30620]" />
                  {lang === 'mr' ? 'छायाचित्र उपलब्ध' : 'Photos Available'}
                </span>
                <span className="inline-flex items-center gap-1 text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200 text-[11px] font-bold">
                  ✓ {lang === 'mr' ? 'अधिकृत अहवाल' : 'Official Record'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
