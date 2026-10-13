import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { SectionShell, WFCard } from '../ui/WireframePrimitives';
import { SOCIAL_WORK_IMG } from '../../data/socialWorkImageData';
import { HeartHandshake, Award, Trees, Stethoscope, Users } from 'lucide-react';

const socialWorkAreas = [
  { mr: 'जनजागृती', en: 'Public Awareness' },
  { mr: 'शिक्षण', en: 'Education' },
  { mr: 'सामाजिक मदत', en: 'Social Relief' },
  { mr: 'नागरिकांचे प्रश्न', en: 'Citizens’ Issues' },
  { mr: 'पर्यावरण', en: 'Environment' },
  { mr: 'आरोग्यविषयक जनजागृती', en: 'Health Awareness' },
  { mr: 'सामाजिक एकोपा', en: 'Social Harmony' },
  { mr: 'लोकशाही जनजागृती', en: 'Democratic Awareness' },
];

const socialInitiatives = [
  {
    id: 1,
    img: '/social-1.jpg',
    titleMr: 'गरजू विद्यार्थ्यांना शैक्षणिक साहित्य व मदत वाटप',
    titleEn: 'Educational Aid & Books Distribution to Underprivileged Students',
    descMr: 'ग्रामीण भागातील होतकरू विद्यार्थ्यांना शालेय साहित्य व शिष्यवृत्ती सहाय्य.',
    descEn: 'Distribution of school essentials and learning resources to rural youth.',
  },
  {
    id: 2,
    img: '/social-2.jpg',
    titleMr: 'मोफत सर्वोपचार आरोग्य व रक्तदान शिबीर',
    titleEn: 'Free Community Health & Blood Donation Camp',
    descMr: 'नागरिक व पत्रकारांसाठी तज्ज्ञ डॉक्टरांच्या उपस्थितीत मोफत तपासणी.',
    descEn: 'Comprehensive medical diagnoses and blood donation drive.',
  },
  {
    id: 3,
    img: '/social-3.jpg',
    titleMr: 'वृक्षारोपण व पर्यावरण संवर्धन जनजागृती मोहीम',
    titleEn: 'Tree Plantation & Environmental Conservation Drive',
    descMr: 'पर्यावरण रक्षणाचा संदेश देत विविध ठिकाणी भव्य वृक्षारोपण उपक्रम.',
    descEn: 'Statewide green cover enhancement and eco-awareness campaign.',
  },
  {
    id: 4,
    img: '/social-4.jpg',
    titleMr: 'लोकशाही मूल्ये व नागरिक हक्क जनजागृती मेळावा',
    titleEn: 'Democratic Ethics & Civic Rights Awareness Rally',
    descMr: 'संविधानिक हक्क, माहिती अधिकार व सामाजिक न्यायावर जनजागृती व्याख्याने.',
    descEn: 'Workshops empowering citizens on RTI, legal aid, and public rights.',
  },
];

export function SocialSection() {
  const { t, lang } = useLanguage();

  return (
    <SectionShell id="social" title={t('sec_social')}>
      <div className="space-y-6 text-left">
        {/* 1st Top Image: Grand Felicitation & Social Ceremony */}
        <div className="overflow-hidden rounded-2xl border-2 border-[#172A4A]/20 bg-white shadow-md transition-shadow hover:shadow-lg">
          <img
            src={SOCIAL_WORK_IMG}
            alt={
              lang === 'mr'
                ? 'लोकशाही पत्रकार महासंघ - भव्य शिवमुर्ती प्रदान व सामाजिक सत्कार सोहळा'
                : 'Lokshahi Patrakar Mahasangh - Grand Felicitation & Social Ceremony'
            }
            className="w-full h-auto block object-cover max-h-[460px] select-none"
          />
        </div>

        {/* Main Text Content strictly from PDF Page 10 */}
        <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
          <div className="space-y-4 lg:col-span-8">
            <h3 className="text-xl sm:text-2xl font-black text-neutral-900">
              {lang === 'mr' ? 'पत्रकारितेसोबत सामाजिक बांधिलकी' : 'Social Responsibility Alongside Journalism'}
            </h3>

            <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
              {lang === 'mr'
                ? 'लोकशाही पत्रकार महासंघ भारताचे कार्य केवळ पत्रकारांच्या प्रश्नांपुरते मर्यादित नाही. गेल्या अनेक वर्षांपासून महासंघाच्या माध्यमातून विविध समाजोपयोगी, जनजागृतीपर आणि सामाजिक बांधिलकीचे कार्यक्रम आयोजित करण्यात आले आहेत.'
                : 'The work of Lokshahi Patrakar Mahasangh Bharat is not limited only to journalists’ issues. For several years, diverse public welfare, awareness, and social responsibility programs have been organized.'}
            </p>

            <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
              {lang === 'mr'
                ? 'समाजातील गरजू व्यक्ती, सामान्य नागरिक, महिला सक्षमीकरण, विद्यार्थी आणि विविध सामाजिक घटकांपर्यंत पोहोचून समाजहिताच्या उपक्रमांना प्रोत्साहन देणे हा महासंघाच्या कार्याचा महत्त्वाचा भाग आहे.'
                : 'Reaching out to needy individuals, common citizens, women empowerment, students, and diverse social sections to promote public interest initiatives is an important part of the federation’s work.'}
            </p>

            <div className="rounded-lg border-2 border-neutral-300 bg-neutral-50 p-4">
              <p className="text-xs sm:text-sm font-semibold text-neutral-800 italic">
                {lang === 'mr'
                  ? 'महासंघाचा ठाम विश्वास आहे की "हक्क आणि कर्तव्ये ही एकाच नाण्याच्या दोन बाजू आहेत."'
                  : 'The federation firmly believes that "Rights and duties are two sides of the same coin."'}
              </p>
              <p className="mt-2 text-xs sm:text-sm text-neutral-700 leading-relaxed">
                {lang === 'mr'
                  ? 'पत्रकारांच्या हितासोबतच समाजातील शोषित, वंचित आणि सामान्य नागरिकांचा आवाज प्रभावीपणे लोकांपर्यंत पोहोचवणे ही आमची सामाजिक जबाबदारी आहे. शासनाच्या विविध योजना, धोरणे आणि सार्वजनिक प्रश्नांवर वस्तुनिष्ठ माहिती समाजापर्यंत पोहोचवून लोकशाही अधिक सक्षम करण्यासाठी महासंघ सातत्याने प्रयत्नशील आहे.'
                  : 'Along with journalists’ welfare, bringing the voice of exploited, underprivileged, and common citizens effectively to the public is our social responsibility. By delivering objective information on governmental schemes, policies, and public issues to society, the federation consistently strives to make democracy more robust.'}
              </p>
            </div>
          </div>

          <div className="lg:col-span-4">
            <WFCard label={lang === 'mr' ? 'सामाजिक कार्याची प्रमुख क्षेत्रे' : 'Key Areas of Social Work'}>
              <div className="flex flex-wrap gap-2">
                {socialWorkAreas.map((area, idx) => (
                  <span
                    key={idx}
                    className="rounded-md border-2 border-neutral-300 bg-white px-3 py-1.5 text-xs font-bold text-neutral-700 shadow-2xs"
                  >
                    {area[lang]}
                  </span>
                ))}
              </div>
            </WFCard>
          </div>
        </div>

        {/* 4 Real Social Work Initiative Photos with Captions */}
        <div className="pt-2">
          <div className="mb-4 rounded-xl border border-[#172A4A]/15 bg-gradient-to-r from-neutral-50 via-white to-neutral-50 p-4 text-left flex items-center justify-between">
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-[#E30620] block mb-0.5">
                COMMUNITY OUTREACH • प्रत्यक्ष समाजोपयोगी उपक्रम
              </span>
              <span className="text-sm font-bold text-neutral-900">
                {lang === 'mr'
                  ? 'महासंघाच्या माध्यमातून राबविण्यात आलेले सामाजिक उपक्रम'
                  : 'Social Welfare & Public Awareness Programs in Action'}
              </span>
            </div>
            <HeartHandshake className="w-5 h-5 text-[#E30620] shrink-0" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {socialInitiatives.map((item) => (
              <div
                key={item.id}
                className="group overflow-hidden rounded-2xl border border-[#172A4A]/15 bg-white shadow-xs hover:shadow-md hover:border-[#E30620] transition-all flex flex-col justify-between"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100">
                  <img
                    src={item.img}
                    alt={lang === 'mr' ? item.titleMr : item.titleEn}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-2 left-2">
                    <span className="rounded-md bg-[#172A4A]/85 backdrop-blur-xs text-white px-2 py-0.5 text-[10px] font-bold">
                      #{item.id}
                    </span>
                  </div>
                </div>

                <div className="p-3.5 bg-white border-t border-neutral-100">
                  <h4 className="text-xs sm:text-sm font-bold text-[#172A4A] group-hover:text-[#E30620] transition-colors line-clamp-2">
                    {lang === 'mr' ? item.titleMr : item.titleEn}
                  </h4>
                  <p className="text-[11px] text-neutral-500 mt-1 line-clamp-2 leading-relaxed">
                    {lang === 'mr' ? item.descMr : item.descEn}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
