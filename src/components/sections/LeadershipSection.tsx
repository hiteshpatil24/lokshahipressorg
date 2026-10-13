import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { SectionShell } from '../ui/WireframePrimitives';
import { leadershipMembers, LeadershipMember } from '../../data/pdfContent';
import * as Images from '../../data/leadershipImages';
import { User, ChevronRight, X, Award, ShieldCheck, MapPin } from 'lucide-react';

export function LeadershipSection() {
  const { t, lang } = useLanguage();
  const [selectedLeader, setSelectedLeader] = useState<LeadershipMember | null>(null);

  const getImageSrc = (key?: string | null) => {
    if (!key) return null;
    return (Images as Record<string, string>)[key] || null;
  };

  return (
    <SectionShell id="leadership" title={t('sec_leadership')}>
      <div className="space-y-8 text-left">
        {/* Intro Banner */}
        <div className="rounded-2xl border-2 border-[#172A4A]/20 bg-gradient-to-r from-white via-neutral-50 to-[#172A4A]/5 p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#E30620] block mb-1">
                LEADERSHIP & GOVERNANCE • राष्ट्रीय नेतृत्व
              </span>
              <h3 className="text-xl sm:text-3xl font-black text-[#172A4A] tracking-tight">
                {lang === 'mr' ? 'टीम लोकशाही — राष्ट्रीय व राज्यस्तरीय नेतृत्व' : 'Team Lokshahi — National & State Leadership'}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 mt-2 max-w-2xl font-medium">
                {lang === 'mr'
                  ? 'सत्य, निष्पक्षता आणि लोकशाही मूल्यांच्या रक्षणासाठी कटिबद्ध असलेले नामांकित पत्रकार, विधिज्ञ, निवृत्त न्यायाधीश, प्रशासकीय तज्ज्ञ आणि सामाजिक मार्गदर्शक.'
                  : 'Distinguished journalists, legal advisors, retired judges, administrative coordinators, and social leaders committed to safeguarding media independence and democracy.'}
              </p>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-xl border border-[#172A4A]/15 shadow-xs shrink-0 self-start sm:self-auto">
              <ShieldCheck className="w-5 h-5 text-[#E30620]" />
              <span className="text-xs font-black text-[#172A4A]">
                {leadershipMembers.length} {lang === 'mr' ? 'प्रमुख पदाधिकारी' : 'Apex Leaders'}
              </span>
            </div>
          </div>
        </div>

        {/* Leadership Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {leadershipMembers.map((member, idx) => {
            const imgSrc = getImageSrc(member.imageKey);

            return (
              <div
                key={idx}
                className="group flex flex-col justify-between p-5 rounded-2xl border border-[#172A4A]/15 bg-white shadow-sm hover:shadow-md hover:border-[#172A4A]/40 transition-all duration-300"
              >
                <div>
                  {/* Photo frame */}
                  <div className="relative mb-4 aspect-[4/3] w-full overflow-hidden rounded-xl bg-neutral-100 border border-neutral-200">
                    {imgSrc ? (
                      <img
                        src={imgSrc}
                        alt={lang === 'mr' ? member.nameMr : member.nameEn}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-neutral-100 to-neutral-200 text-neutral-400 p-4 text-center">
                        <div className="w-16 h-16 rounded-full bg-white/80 border border-neutral-300 flex items-center justify-center mb-2 shadow-xs">
                          <User className="w-8 h-8 text-neutral-400" />
                        </div>
                        <span className="text-xs font-bold text-neutral-500">
                          {lang === 'mr' ? 'छायाचित्र लवकरच' : 'Photo Coming Soon'}
                        </span>
                      </div>
                    )}

                    {/* Role badge overlay */}
                    <div className="absolute top-2.5 left-2.5 max-w-[85%]">
                      <span className="inline-block rounded-md bg-[#172A4A]/90 backdrop-blur-sm text-white px-2.5 py-1 text-[11px] font-black tracking-wide shadow-sm truncate">
                        {lang === 'mr' ? member.roleMr : member.roleEn}
                      </span>
                    </div>
                  </div>

                  {/* Name and Designation */}
                  <div className="space-y-1.5">
                    <h4 className="text-lg font-black text-[#172A4A] group-hover:text-[#E30620] transition-colors">
                      {lang === 'mr' ? member.nameMr : member.nameEn}
                    </h4>

                    {member.designationMr && (
                      <p className="text-xs font-bold text-[#E30620] line-clamp-1">
                        {lang === 'mr' ? member.designationMr : (member.designationEn || member.designationMr)}
                      </p>
                    )}

                    <div className="flex items-center gap-1 text-xs text-neutral-500 font-semibold pt-0.5">
                      <MapPin className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                      <span>{lang === 'mr' ? member.stateMr : member.stateEn}</span>
                    </div>
                  </div>

                  {/* Profile Summary */}
                  <div className="border-t border-neutral-100 mt-3 pt-3">
                    <p className="text-xs text-neutral-600 font-medium leading-relaxed line-clamp-3">
                      {lang === 'mr' ? member.profileMr : member.profileEn}
                    </p>
                  </div>
                </div>

                {/* View Details Button */}
                <div className="pt-4 mt-2 border-t border-neutral-100 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setSelectedLeader(member)}
                    className="inline-flex items-center gap-1.5 text-xs font-black text-[#172A4A] hover:text-[#E30620] transition-colors cursor-pointer"
                  >
                    <span>{lang === 'mr' ? 'सविस्तर प्रोफाइल पहा' : 'View Full Profile'}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                  <Award className="w-4 h-4 text-neutral-300 group-hover:text-[#E30620]/60 transition-colors" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Note */}
        <div className="rounded-xl border border-dashed border-[#172A4A]/30 bg-neutral-50 p-4 text-center">
          <p className="text-xs font-bold text-neutral-700">
            {lang === 'mr'
              ? 'राष्ट्रीय कार्यकारिणी, राज्य समन्वय कक्ष आणि जिल्हा स्तरावरील सर्व सन्माननीय पदाधिकारी.'
              : 'National Executive Council, State Coordination Cells & District Working Committees.'}
          </p>
        </div>

        {/* Detailed Modal Dialog */}
        {selectedLeader && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
            <div
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white p-6 sm:p-8 shadow-2xl border border-neutral-200"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedLeader(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-neutral-100 text-neutral-500 hover:text-black hover:bg-neutral-200 transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex flex-col sm:flex-row gap-6 items-start">
                {/* Photo */}
                <div className="w-full sm:w-48 shrink-0">
                  <div className="aspect-[4/3] sm:aspect-square w-full rounded-2xl overflow-hidden bg-neutral-100 border border-neutral-200 shadow-sm">
                    {getImageSrc(selectedLeader.imageKey) ? (
                      <img
                        src={getImageSrc(selectedLeader.imageKey)!}
                        alt={lang === 'mr' ? selectedLeader.nameMr : selectedLeader.nameEn}
                        className="w-full h-full object-cover object-top"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center text-neutral-400 p-4 text-center">
                        <User className="w-12 h-12 mb-1" />
                        <span className="text-xs font-bold">{lang === 'mr' ? 'छायाचित्र लवकरच' : 'Coming Soon'}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Header Information */}
                <div className="space-y-2 flex-1">
                  <span className="inline-block rounded-md bg-[#E30620] text-white px-3 py-1 text-xs font-black tracking-wider">
                    {lang === 'mr' ? selectedLeader.roleMr : selectedLeader.roleEn}
                  </span>
                  <h3 className="text-2xl font-black text-[#172A4A]">
                    {lang === 'mr' ? selectedLeader.nameMr : selectedLeader.nameEn}
                  </h3>
                  {selectedLeader.designationMr && (
                    <p className="text-xs sm:text-sm font-bold text-[#E30620]">
                      {lang === 'mr' ? selectedLeader.designationMr : (selectedLeader.designationEn || selectedLeader.designationMr)}
                    </p>
                  )}
                  <div className="flex items-center gap-1.5 text-xs text-neutral-500 font-semibold">
                    <MapPin className="w-4 h-4 text-neutral-400" />
                    <span>{lang === 'mr' ? selectedLeader.stateMr : selectedLeader.stateEn}</span>
                  </div>
                </div>
              </div>

              {/* Full Bio Content */}
              <div className="mt-6 pt-6 border-t border-neutral-200 space-y-4 text-neutral-700">
                <h5 className="text-xs font-black uppercase tracking-wider text-neutral-400">
                  {lang === 'mr' ? 'सविस्तर कार्य व परिचय' : 'Detailed Biographical Profile'}
                </h5>
                <div className="text-sm leading-relaxed whitespace-pre-line font-medium text-neutral-800 bg-neutral-50 p-4 rounded-xl border border-neutral-200/80">
                  {selectedLeader.fullBioMr || (lang === 'mr' ? selectedLeader.profileMr : selectedLeader.profileEn)}
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  type="button"
                  onClick={() => setSelectedLeader(null)}
                  className="px-5 py-2.5 rounded-xl bg-[#172A4A] text-white text-xs font-bold hover:bg-[#172A4A]/90 transition-colors cursor-pointer"
                >
                  {lang === 'mr' ? 'बंद करा' : 'Close'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </SectionShell>
  );
}
