import React, { useRef, useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { realPressClippings, PressArticle } from '../../data/newsAndEditorial';
import { Newspaper, Clock, Tag, X, ExternalLink } from 'lucide-react';

export function MediaCoverage() {
  const { lang } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<PressArticle | null>(null);

  // Duplicated list for seamless infinite looping autoscroll
  const scrollArticles = [...realPressClippings, ...realPressClippings];

  // Continuous smooth autoscroll loop
  useEffect(() => {
    let animId: number;
    let lastTime = performance.now();
    let scrollPos = scrollRef.current ? scrollRef.current.scrollLeft : 0;

    const step = (now: number) => {
      const el = scrollRef.current;
      const dt = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;

      if (el && !isPaused) {
        scrollPos += 45 * dt; // 45px/second smooth movement
        const halfWidth = el.scrollWidth / 2;
        if (scrollPos >= halfWidth) {
          scrollPos -= halfWidth;
        }
        el.scrollLeft = scrollPos;
      } else if (el) {
        scrollPos = el.scrollLeft;
      }
      animId = requestAnimationFrame(step);
    };

    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [isPaused]);

  return (
    <section id="media-coverage" className="border-b border-[#172A4A]/10 bg-white py-14">
      <div className="mx-auto w-full max-w-6xl px-4 text-left">
        {/* Section Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#E30620] text-white text-xs font-black">
              ★
            </span>
            <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#E30620]">
              {lang === 'mr' ? 'वृत्तपत्र व मीडिया कव्हरेज' : 'PRESS & MEDIA COVERAGE'}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-[#172A4A]">
            {lang === 'mr' ? 'प्रमुख वृत्तपत्रांमधील बातम्या व प्रसिद्धी' : 'Leading News Outlets on Lokshahi Press Federation'}
          </h2>
          <p className="mt-1 text-xs text-[#172A4A]/70 font-medium">
            {lang === 'mr'
              ? 'देशभरातील प्रतिष्ठित वृत्तपत्रे, वृत्तसंस्था व वृत्तवाहिन्यांनी घेतलेली महासंघाच्या कार्याची दखल.'
              : 'National and regional press coverage chronicling our campaigns, conventions, and media rights advocacy.'}
          </p>
        </div>

        {/* Continuous Smooth Auto-Scroller of Cards */}
        <div
          ref={scrollRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          className="flex gap-4 sm:gap-5 overflow-x-auto pb-4 select-none touch-pan-x [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {scrollArticles.map((article, idx) => (
            <article
              key={`${article.id}-${idx}`}
              onClick={() => setSelectedArticle(article)}
              className="w-[280px] sm:w-[320px] min-h-[300px] shrink-0 bg-white p-5 rounded-2xl border-2 border-[#172A4A]/15 shadow-xs hover:shadow-lg hover:border-[#E30620] transition-all flex flex-col justify-between cursor-pointer group"
            >
              <div>
                {/* 1. Source & Date header */}
                <div className="flex items-center justify-between pb-3 border-b border-[#172A4A]/10 text-xs">
                  <div className="flex items-center gap-1.5">
                    <Newspaper className="w-3.5 h-3.5 text-[#E30620]" />
                    <span className="font-black text-[#172A4A] tracking-wide text-xs sm:text-sm">
                      {article.source}
                    </span>
                  </div>
                  <span className="text-[10px] font-bold text-[#E30620] uppercase bg-[#E30620]/10 px-2 py-0.5 rounded-full border border-[#E30620]/20">
                    {lang === 'mr' ? article.categoryMr : article.categoryEn}
                  </span>
                </div>

                {/* 2. Headline & Excerpt */}
                <div className="my-3 space-y-2">
                  <h4 className="text-sm font-bold text-[#172A4A] group-hover:text-[#E30620] transition-colors line-clamp-2 leading-snug">
                    {lang === 'mr' ? article.headlineMr : article.headlineEn}
                  </h4>
                  <p className="text-xs text-neutral-600 line-clamp-3 leading-relaxed font-medium">
                    {lang === 'mr' ? article.excerptMr : article.excerptEn}
                  </p>
                </div>
              </div>

              {/* 3. Footer with date & read button */}
              <div className="pt-3 border-t border-[#172A4A]/10 w-full flex items-center justify-between text-xs">
                <span className="text-[11px] text-neutral-500 font-semibold">
                  {lang === 'mr' ? article.dateMr : article.dateEn}
                </span>
                <span className="font-bold text-[#E30620] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  <span>{lang === 'mr' ? 'सविस्तर वाचा' : 'Read Full'}</span>
                  <span>→</span>
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Modal for Full News Article View */}
        {selectedArticle && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-xs"
            onClick={() => setSelectedArticle(null)}
          >
            <div
              className="relative max-w-lg w-full bg-white rounded-2xl overflow-hidden border border-[#172A4A]/20 shadow-2xl p-6 text-left"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-3 border-b border-neutral-200">
                <div className="flex items-center gap-2">
                  <Newspaper className="w-5 h-5 text-[#E30620]" />
                  <span className="text-sm font-black text-[#172A4A]">{selectedArticle.source}</span>
                  <span className="text-[11px] font-bold text-neutral-500">• {selectedArticle.sourceType}</span>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedArticle(null)}
                  className="rounded-full p-1 text-neutral-400 hover:text-neutral-800 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="mt-4 space-y-3">
                <div className="flex items-center gap-2 text-xs text-neutral-500">
                  <span>📅 {lang === 'mr' ? selectedArticle.dateMr : selectedArticle.dateEn}</span>
                  <span>•</span>
                  <span>⏱ {selectedArticle.readTime}</span>
                </div>

                <h3 className="text-base sm:text-lg font-black text-[#172A4A] leading-snug">
                  {lang === 'mr' ? selectedArticle.headlineMr : selectedArticle.headlineEn}
                </h3>

                <div className="p-3.5 bg-neutral-50 rounded-xl border border-neutral-200 text-xs sm:text-sm text-neutral-700 leading-relaxed font-medium">
                  {lang === 'mr' ? selectedArticle.excerptMr : selectedArticle.excerptEn}
                </div>

                <p className="text-xs text-neutral-600 leading-relaxed">
                  {lang === 'mr'
                    ? 'लोकशाही पत्रकार महासंघ भारत देशभरातील पत्रकारांच्या सन्मानासाठी, अभिव्यक्तिस्वातंत्र्याच्या रक्षणासाठी व कायदेशीर मदतीसाठी कटिबद्ध आहे.'
                    : 'Lokshahi Patrakar Mahasangh Bharat stands steadfast in defending press freedom, legal rights, and journalist security across the nation.'}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-neutral-200 flex justify-end">
                <button
                  type="button"
                  onClick={() => setSelectedArticle(null)}
                  className="px-4 py-1.5 rounded-lg bg-[#172A4A] text-white text-xs font-bold hover:bg-[#E30620] transition-colors cursor-pointer"
                >
                  {lang === 'mr' ? 'बंद करा' : 'Close'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
