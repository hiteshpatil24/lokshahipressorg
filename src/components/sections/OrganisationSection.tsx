import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { SectionShell, WFCard } from '../ui/WireframePrimitives';
import { ORG_IMG_1, ORG_IMG_2 } from '../../data/orgImages';
import { Users, Building2, Calendar, MapPin } from 'lucide-react';

interface TierItem {
  id: string;
  titleMr: string;
  titleEn: string;
  descMr: string;
}

const organizationalTiers: TierItem[] = [
  {
    id: 'national',
    titleMr: 'राष्ट्रीय स्तर',
    titleEn: 'National Level',
    descMr: 'सर्वोच्च राष्ट्रीय परिषद • Apex National Body',
  },
  {
    id: 'state',
    titleMr: 'राज्य स्तर',
    titleEn: 'State Level',
    descMr: 'राज्य कार्यकारणी • State Executive Committee',
  },
  {
    id: 'divisional',
    titleMr: 'विभागीय स्तर',
    titleEn: 'Divisional Level',
    descMr: 'महसूल विभाग स्तर • Revenue Divisional Level',
  },
  {
    id: 'district',
    titleMr: 'जिल्हा स्तर',
    titleEn: 'District Level',
    descMr: 'जिल्हा कार्यकारणी • District Executive Committee',
  },
  {
    id: 'taluka',
    titleMr: 'तालुका स्तर',
    titleEn: 'Taluka Level',
    descMr: 'तालुका समिती • Taluka Working Committee',
  },
  {
    id: 'city_rural',
    titleMr: 'शहर / ग्रामीण स्तर',
    titleEn: 'City / Rural Level',
    descMr: 'स्थानिक गाव, शहर व वाडी वस्ती पातळी • Grassroots & Local Level',
  },
  {
    id: 'committees',
    titleMr: 'राष्ट्र, राज्य, व स्थानिक पातळीवरील समित्या',
    titleEn: 'National, State, and Local Level Committees',
    descMr: '७८ विविध विषय व विकास समित्या • 78 Specialized Subject Committees',
  },
];

const dashboardRows = [
  {
    levelMr: 'राष्ट्रीय',
    levelEn: 'National',
    infoMr: 'राष्ट्रीय समिती व केंद्रीय सल्लागार मंडळ',
    infoEn: 'National Committee & Advisory Board',
  },
  {
    levelMr: 'राज्य',
    levelEn: 'State',
    infoMr: 'राज्य कार्यकारणी व राज्यस्तरीय समन्वय कक्ष',
    infoEn: 'State Executive Committees & Liaison Cell',
  },
  {
    levelMr: 'विभाग',
    levelEn: 'Division',
    infoMr: 'विभागीय समन्वय समित्या (कोकण, पुणे, नाशिक, संभाजीनगर, अमरावती, नागपूर)',
    infoEn: 'Divisional Committees (Konkan, Pune, Nashik, Sambhajinagar, Amravati, Nagpur)',
  },
];

export function OrganisationSection() {
  const { t, lang } = useLanguage();

  return (
    <SectionShell id="organisation" title={t('sec_org')}>
      <div className="space-y-8 text-left">
        {/* Intro Banner */}
        <div className="rounded-2xl border-2 border-[#172A4A]/20 bg-gradient-to-r from-white via-neutral-50 to-[#172A4A]/5 p-6 sm:p-8 shadow-sm">
          <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#E30620] block mb-1">
            STRUCTURE & FIELD OPERATIONS • संघटनात्मक रचना
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-[#172A4A] mb-2 tracking-tight">
            {lang === 'mr'
              ? 'संघाची देशव्यापी संरचना व संघटनात्मक उपक्रम'
              : 'Organisational Structure & Nationwide Network'}
          </h3>
          <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed max-w-3xl font-medium">
            {lang === 'mr'
              ? 'लोकशाही पत्रकार महासंघ भारताने देशातील पत्रकारांच्या हक्कांचे संरक्षण, सक्षमीकरण आणि जबाबदार पत्रकारितेच्या प्रसारासाठी राष्ट्रीय पातळीपासून गावपातळीपर्यंत एक मजबूत, पारदर्शक आणि लोकशाहीवादी संरचना उभी केली आहे.'
              : 'Lokshahi Patrakar Mahasangh Bharat has instituted a robust, decentralized democratic structure ranging from apex national policymaking bodies to grassroots rural networks, ensuring nationwide press defense and empowerment.'}
          </p>
        </div>

        {/* Organisation Action & Meeting Gallery */}
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-[#E30620] block">
                MEETINGS & CONVENTIONS • थेट संघटनात्मक झलक
              </span>
              <h4 className="text-lg font-black text-[#172A4A]">
                {lang === 'mr' ? 'संघटनात्मक बैठका व पत्रकार मेळावे' : 'Leadership Meetings & Conventions'}
              </h4>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Image 1: Outdoor Gathering with Phetas */}
            <div className="group rounded-2xl border border-[#172A4A]/15 bg-white overflow-hidden shadow-sm hover:shadow-md hover:border-[#172A4A]/40 transition-all duration-300 flex flex-col justify-between">
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-neutral-100">
                <img
                  src={ORG_IMG_1}
                  alt={lang === 'mr' ? 'पत्रकार मेळावा व परिषद' : 'State Journalist Convention'}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center gap-1.5 rounded-md bg-[#172A4A]/90 backdrop-blur-sm text-white px-3 py-1 text-xs font-black shadow-sm">
                    <Users className="w-3.5 h-3.5 text-[#E30620]" />
                    {lang === 'mr' ? 'राज्यस्तरीय पत्रकार महामेळावा' : 'State Journalist Convention'}
                  </span>
                </div>
              </div>

              <div className="p-5 space-y-2">
                <h5 className="text-base font-black text-[#172A4A] group-hover:text-[#E30620] transition-colors">
                  {lang === 'mr'
                    ? 'पत्रकार हक्क, सन्मान व संघटन निर्धार मेळावा'
                    : 'Journalist Rights, Honor & Unity Convention'}
                </h5>
                <p className="text-xs text-neutral-600 leading-relaxed font-medium">
                  {lang === 'mr'
                    ? 'विविध जिल्हे, तालुके आणि ग्रामीण भागातील शेकडो पत्रकारांचा सन्मान, फेटे बांधून एकजुटीचा निर्धार आणि पत्रकार संरक्षण कायद्याच्या अंमलबजावणीसाठी आयोजित भव्य महामेळावा.'
                    : 'Mass gathering of journalists from districts and rural areas in Maharashtra, united under Lokshahi Patrakar Mahasangh Bharat for welfare, dignity, and security.'}
                </p>
                <div className="flex items-center gap-4 text-[11px] text-neutral-500 font-semibold pt-1 border-t border-neutral-100">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                    {lang === 'mr' ? 'महाराष्ट्र व भारत' : 'Maharashtra & India'}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-neutral-400" />
                    {lang === 'mr' ? 'संघटनात्मक परिषद' : 'Organisational Meet'}
                  </span>
                </div>
              </div>
            </div>

            {/* Image 2: Indoor Conference Board Meeting */}
            <div className="group rounded-2xl border border-[#172A4A]/15 bg-white overflow-hidden shadow-sm hover:shadow-md hover:border-[#172A4A]/40 transition-all duration-300 flex flex-col justify-between">
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-neutral-100">
                <img
                  src={ORG_IMG_2}
                  alt={lang === 'mr' ? 'राष्ट्रीय कार्यकारिणी बैठक' : 'National Executive Meeting'}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center gap-1.5 rounded-md bg-[#172A4A]/90 backdrop-blur-sm text-white px-3 py-1 text-xs font-black shadow-sm">
                    <Building2 className="w-3.5 h-3.5 text-[#E30620]" />
                    {lang === 'mr' ? 'राष्ट्रीय कार्यकारिणी विचारमंथन' : 'National Executive Council'}
                  </span>
                </div>
              </div>

              <div className="p-5 space-y-2">
                <h5 className="text-base font-black text-[#172A4A] group-hover:text-[#E30620] transition-colors">
                  {lang === 'mr'
                    ? 'केंद्रीय धोरण, कायदेशीर सल्ला व संघटनात्मक विस्तार बैठक'
                    : 'Apex Policy, Legal Advisory & Nationwide Expansion Meeting'}
                </h5>
                <p className="text-xs text-neutral-600 leading-relaxed font-medium">
                  {lang === 'mr'
                    ? 'राष्ट्रीय पदाधिकारी, कायदेशीर सल्लागार आणि प्रांतीय समन्वयकांची उच्चस्तरीय बैठक; पत्रकार कल्याण निधी आणि धोरणात्मक नियोजनावर सखोल चर्चा.'
                    : 'High-level round-table conference of national leadership, legal counsel, and regional presidents focusing on institutional expansion and policy initiatives.'}
                </p>
                <div className="flex items-center gap-4 text-[11px] text-neutral-500 font-semibold pt-1 border-t border-neutral-100">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                    {lang === 'mr' ? 'केंद्रीय कार्यालय' : 'Headquarters'}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-neutral-400" />
                    {lang === 'mr' ? 'धोरणात्मक सत्र' : 'Strategic Planning'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vertical Hierarchy Block Diagram */}
        <div className="py-2">
          <div className="text-center mb-6">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-neutral-500 bg-neutral-100 px-3 py-1 rounded-full border border-neutral-200">
              {lang === 'mr' ? 'संघटनात्मक स्तर रचना आकृती' : 'ORGANISATIONAL HIERARCHY BLOCK DIAGRAM'}
            </span>
          </div>

          <div className="flex flex-col items-center max-w-xl mx-auto space-y-0">
            {organizationalTiers.map((tier, idx) => (
              <React.Fragment key={tier.id}>
                {/* Block Card */}
                <div className="w-full rounded-xl border-2 border-neutral-300 bg-white p-4 sm:p-5 text-center shadow-xs hover:border-[#172A4A] transition-colors">
                  <h4 className="text-base sm:text-lg font-bold text-neutral-900">
                    {lang === 'mr' ? tier.titleMr : tier.titleEn}
                  </h4>
                  <p className="mt-1 text-xs text-neutral-600 font-medium">
                    {tier.descMr}
                  </p>
                </div>

                {/* Connecting Down Arrow */}
                {idx < organizationalTiers.length - 1 && (
                  <div className="flex items-center justify-center my-2 text-neutral-400 font-black">
                    <span className="text-xl leading-none select-none">↓</span>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* 3-Row Dashboard Table */}
        <WFCard>
          <div className="overflow-x-auto rounded-lg border border-neutral-200">
            <table className="w-full text-left text-xs sm:text-sm text-neutral-700 border-collapse">
              <thead>
                <tr className="border-b border-neutral-200 bg-neutral-100 text-neutral-900 font-bold uppercase text-[11px] tracking-wider">
                  <th className="py-2.5 px-4 w-1/4 sm:w-1/5">{lang === 'mr' ? 'स्तर' : 'Level'}</th>
                  <th className="py-2.5 px-4">{lang === 'mr' ? 'माहिती व कार्यकक्षा' : 'Committee Information & Jurisdiction'}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200 bg-white">
                {dashboardRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-neutral-50/80 transition-colors">
                    <td className="py-3 px-4 font-bold text-neutral-900">
                      {row[lang === 'mr' ? 'levelMr' : 'levelEn']}
                    </td>
                    <td className="py-3 px-4 font-medium text-neutral-800">
                      {row[lang === 'mr' ? 'infoMr' : 'infoEn']}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 rounded-lg bg-neutral-50 border border-neutral-200">
            <div className="text-xs font-semibold text-neutral-800">
              {lang === 'mr'
                ? 'यासोबतच महासंघाच्या व्यापक कार्यासाठी ७८ विविध विषय समित्या कार्यरत आहेत.'
                : 'Along with this, 78 specialized subject committees are actively functional across India.'}
            </div>
            <a
              href="#committees"
              className="text-xs font-bold text-[#172A4A] hover:underline"
            >
              {lang === 'mr' ? '७८ समित्या पहा →' : 'View 78 Committees →'}
            </a>
          </div>
        </WFCard>
      </div>
    </SectionShell>
  );
}
