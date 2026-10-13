import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { INDIA_MAP_VIEWBOX, INDIA_STATES, ACTIVE_STATES_LIST } from '../../data/indiaMapData';
import { CheckCircle2, ChevronRight, X, Globe } from 'lucide-react';

interface IndiaNetworkMapProps {
  className?: string;
}

const STATE_NAMES_MR: Record<string, string> = {
  an: 'अंदमान आणि निकोबार',
  ap: 'आंध्र प्रदेश',
  ar: 'अरुणाचल प्रदेश',
  as: 'आसाम',
  br: 'बिहार',
  ch: 'चंदिगढ',
  ct: 'छत्तीसगड',
  dn: 'दादरा आणि नगर हवेली',
  dd: 'दमन आणि दीव',
  dl: 'दिल्ली',
  ga: 'गोवा',
  gj: 'गुजरात',
  hr: 'हरियाणा',
  hp: 'हिमाचल प्रदेश',
  jk: 'जम्मू आणि काश्मीर',
  jh: 'झारखंड',
  ka: 'कर्नाटक',
  kl: 'केरळ',
  la: 'लडाख',
  ld: 'लक्षद्वीप',
  mp: 'मध्य प्रदेश',
  mh: 'महाराष्ट्र',
  mn: 'मणिपूर',
  ml: 'मेघालय',
  mz: 'मिझोरम',
  nl: 'नागालँड',
  or: 'ओडिशा',
  py: 'पुडुचेरी',
  pb: 'पंजाब',
  rj: 'राजस्थान',
  sk: 'सिक्कीम',
  tn: 'तमिळनाडू',
  tg: 'तेलंगणा',
  tr: 'त्रिपुरा',
  up: 'उत्तर प्रदेश',
  ut: 'उत्तराखंड',
  wb: 'पश्चिम बंगाल',
};

export function IndiaNetworkMap({ className = '' }: IndiaNetworkMapProps) {
  const { lang } = useLanguage();
  const [selectedStateId, setSelectedStateId] = useState<string | null>(null);
  const [hoveredStateId, setHoveredStateId] = useState<string | null>(null);
  const [showPillList, setShowPillList] = useState<boolean>(false);

  const activeId = hoveredStateId || selectedStateId;
  const currentHoveredState = INDIA_STATES.find((s) => s.id === activeId);
  const activeStateData = ACTIVE_STATES_LIST.find((s) => s.id === activeId);

  return (
    <div
      className={`relative flex flex-col overflow-hidden rounded-2xl border-2 border-[#172A4A]/25 bg-gradient-to-b from-[#F4F7FB] via-[#EDF2F7] to-[#E2E8F0] shadow-lg ${className}`}
    >
      {/* Frame Top Header */}
      <div className="flex items-center justify-between border-b border-[#172A4A]/15 bg-white/95 backdrop-blur-xs px-3.5 py-3 sm:px-5">
        <div className="flex items-center gap-2.5">
          <span className="flex h-3 w-3 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E30620] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#E30620]"></span>
          </span>
          <div>
            <div className="text-xs sm:text-sm font-black uppercase tracking-wider text-[#172A4A] flex items-center gap-1.5">
              <span>{lang === 'mr' ? 'भारतभर संघटनात्मक जाळे' : 'PAN-INDIA NETWORK'}</span>
              <span className="text-[10px] font-bold text-[#E6530C] bg-[#E6530C]/10 px-2 py-0.5 rounded-full border border-[#E6530C]/25 hidden sm:inline-block">
                {lang === 'mr' ? 'अखंड भारत' : 'All States & UTs'}
              </span>
            </div>
            <div className="text-[10px] sm:text-[11px] font-semibold text-[#172A4A]/70 hidden sm:block">
              {lang === 'mr'
                ? 'काश्मीर ते कन्याकुमारी, गुजरात ते अरुणाचल'
                : 'Kashmir to Kanyakumari, Gujarat to Arunachal'}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="rounded-full bg-[#E30620] text-white px-2.5 py-1 text-[11px] font-black shadow-xs">
            {lang === 'mr' ? '१७ राज्ये सक्रिय' : '17 States Active'}
          </span>
          <button
            type="button"
            onClick={() => setShowPillList(!showPillList)}
            className="rounded-lg border border-[#172A4A]/20 bg-white px-2.5 py-1 text-[11px] font-bold text-[#172A4A] hover:bg-[#F7F3EC] hover:text-[#E30620] transition-colors cursor-pointer"
          >
            {showPillList ? (lang === 'mr' ? '🗺️ नकाशा' : '🗺️ Map') : (lang === 'mr' ? '📋 यादी' : '📋 List')}
          </button>
        </div>
      </div>

      {/* Main Map Area */}
      <div className="relative flex-1 w-full flex items-center justify-center p-2 sm:p-4 select-none min-h-[380px] sm:min-h-[440px]">
        {/* Subtle Water Body / Oceanic Atmosphere */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, #2855A5 1px, transparent 0)',
            backgroundSize: '20px 20px',
          }}
        />

        {/* Floating Interactive State Card */}
        {currentHoveredState && !showPillList && (
          <div className="absolute top-3 left-3 z-30 max-w-[220px] sm:max-w-[260px] rounded-xl border-2 border-[#172A4A]/20 bg-white/95 p-3 shadow-xl backdrop-blur-md transition-all pointer-events-auto">
            <div className="flex items-start justify-between gap-1.5">
              <div className="flex items-center gap-2">
                {activeStateData ? (
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#E30620] text-[11px] font-black text-white shadow-xs">
                    {activeStateData.num}
                  </span>
                ) : (
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#2855A5] text-[11px] font-black text-white shadow-xs">
                    🇮🇳
                  </span>
                )}
                <div>
                  <h4 className="text-sm font-black text-[#172A4A] leading-tight">
                    {lang === 'mr'
                      ? STATE_NAMES_MR[currentHoveredState.id] || currentHoveredState.name
                      : currentHoveredState.name}
                  </h4>
                  <div className="text-[10px] text-neutral-500 font-semibold">
                    {lang === 'mr'
                      ? currentHoveredState.name
                      : STATE_NAMES_MR[currentHoveredState.id] || currentHoveredState.name}
                  </div>
                </div>
              </div>
              <button
                type="button"
                onClick={() => {
                  setSelectedStateId(null);
                  setHoveredStateId(null);
                }}
                className="text-neutral-400 hover:text-neutral-700 p-0.5 cursor-pointer"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </div>

            <div className="mt-2 pt-2 border-t border-neutral-100">
              {activeStateData ? (
                <div>
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#287A18]">
                    <CheckCircle2 className="h-3.5 w-3.5 shrink-0" />
                    <span>
                      {lang === 'mr'
                        ? 'सक्रिय राज्य कार्यकारिणी व सदस्य'
                        : 'Active State Committee & Unit'}
                    </span>
                  </div>
                  {activeStateData.num === 1 && (
                    <div className="mt-1 text-[10px] font-bold text-[#E30620] bg-[#E30620]/10 px-2 py-0.5 rounded">
                      🏛️ {lang === 'mr' ? 'राष्ट्रीय मुख्यालय : मुंबई' : 'National Headquarters : Mumbai'}
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#2855A5]">
                  <Globe className="h-3.5 w-3.5 shrink-0" />
                  <span>
                    {lang === 'mr'
                      ? 'राष्ट्रीय विस्तार व संपर्क कार्यक्षेत्र'
                      : 'National Outreach & Member Unit'}
                  </span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Interactive SVG Map */}
        <div className={`w-full h-full flex items-center justify-center ${showPillList ? 'hidden' : 'block'}`}>
          <svg
            viewBox={INDIA_MAP_VIEWBOX}
            className="w-full h-auto max-h-[420px] sm:max-h-[490px] object-contain drop-shadow-md"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <filter id="pin-shadow" x="-30%" y="-30%" width="160%" height="160%">
                <feDropShadow dx="0" dy="2" stdDeviation="1.5" floodColor="#000" floodOpacity="0.4" />
              </filter>
              <linearGradient id="active-state-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FED7AA" />
                <stop offset="100%" stopColor="#FDBA74" />
              </linearGradient>
              <linearGradient id="active-state-hover" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FECACA" />
                <stop offset="100%" stopColor="#F87171" />
              </linearGradient>
              <linearGradient id="pin-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#EF4444" />
                <stop offset="100%" stopColor="#B91C1C" />
              </linearGradient>
            </defs>

            {/* State Boundaries */}
            <g className="states-group">
              {INDIA_STATES.map((state) => {
                const isSelected = selectedStateId === state.id;
                const isHovered = hoveredStateId === state.id;
                const isActive = state.isActive;

                // Color styling:
                // Non-active states have a solid, high-contrast, prestigious tone with clear borders
                let fill = isSelected || isHovered ? '#CBD5E1' : '#DDE5ED';
                let stroke = '#64748B';
                let strokeWidth = '0.9';

                if (isActive) {
                  // Vibrant active presence
                  fill = isSelected || isHovered ? 'url(#active-state-hover)' : 'url(#active-state-grad)';
                  stroke = isSelected || isHovered ? '#B91C1C' : '#E30620';
                  strokeWidth = isSelected || isHovered ? '2' : '1.3';
                }

                return (
                  <path
                    key={state.id}
                    d={state.path}
                    fill={fill}
                    stroke={stroke}
                    strokeWidth={strokeWidth}
                    strokeLinejoin="round"
                    className="transition-colors duration-200 cursor-pointer hover:opacity-95"
                    onMouseEnter={() => setHoveredStateId(state.id)}
                    onMouseLeave={() => setHoveredStateId(null)}
                    onClick={() => setSelectedStateId(state.id)}
                  >
                    <title>
                      {`${state.pinNumber ? `${state.pinNumber}. ` : ''}${state.name} (${
                        STATE_NAMES_MR[state.id] || state.mrName || state.name
                      }) - ${isActive ? 'सक्रिय राज्य समिती' : 'राष्ट्रीय विस्तार क्षेत्र'}`}
                    </title>
                  </path>
                );
              })}
            </g>

            {/* 17 Red Location Pins */}
            <g className="pins-group">
              {ACTIVE_STATES_LIST.map((item) => {
                const isSelected = selectedStateId === item.id;
                const isHovered = hoveredStateId === item.id;
                const isHighlighted = isSelected || isHovered;
                const { x, y } = item.pin;
                const isHQ = item.num === 1;

                return (
                  <g
                    key={`pin-${item.id}`}
                    transform={`translate(${x}, ${y})`}
                    className="cursor-pointer"
                    onMouseEnter={() => setHoveredStateId(item.id)}
                    onMouseLeave={() => setHoveredStateId(null)}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedStateId(item.id);
                    }}
                  >
                    {/* Pulsing ring on highlight or HQ */}
                    <circle
                      r={isHighlighted ? 15 : isHQ ? 10 : 7}
                      fill={isHQ ? '#E30620' : '#EF4444'}
                      opacity={isHighlighted ? 0.45 : 0.25}
                      className="animate-pulse"
                    />

                    {/* Pin Anchor Circle */}
                    <circle
                      r={isHighlighted ? 4.5 : 3}
                      fill="#7F1D1D"
                      stroke="#FFFFFF"
                      strokeWidth="1.2"
                    />

                    {/* Teardrop Pin Marker */}
                    <g
                      transform={`translate(0, -${isHighlighted ? 23 : 19}) scale(${
                        isHighlighted ? 1.25 : 1
                      })`}
                      filter="url(#pin-shadow)"
                      style={{ transformOrigin: '0px 19px', transition: 'transform 0.15s ease' }}
                    >
                      <path
                        d="M 0 0 C -7.5 -10, -7.5 -17, 0 -23 C 7.5 -17, 7.5 -10, 0 0 Z"
                        fill="url(#pin-grad)"
                        stroke="#FFFFFF"
                        strokeWidth="1.2"
                      />
                      <circle cx="0" cy="-14.5" r="5.2" fill="#FFFFFF" />
                      <text
                        x="0"
                        y="-12.3"
                        textAnchor="middle"
                        fill="#B91C1C"
                        fontSize="6.8"
                        fontWeight="900"
                        fontFamily="sans-serif"
                      >
                        {item.num}
                      </text>
                    </g>
                  </g>
                );
              })}
            </g>
          </svg>
        </div>

        {/* State Pill List Overlay */}
        {showPillList && (
          <div className="w-full h-full max-h-[400px] overflow-y-auto p-2">
            <div className="mb-2 text-xs font-bold text-neutral-800 flex items-center justify-between">
              <span>{lang === 'mr' ? 'महासंघाचे १७ सक्रिय राज्य कार्यक्षेत्र' : 'Federation Reach Across 17 States'}:</span>
              <span className="text-[10px] text-neutral-500">
                {lang === 'mr' ? '(क्लिक करून नकाशावर पहा)' : '(Click to view on map)'}
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {ACTIVE_STATES_LIST.map((state) => {
                const isSelected = selectedStateId === state.id;
                return (
                  <button
                    key={state.id}
                    type="button"
                    onClick={() => {
                      setSelectedStateId(state.id);
                      setShowPillList(false);
                    }}
                    className={`flex items-center justify-between rounded-xl border px-3 py-2 text-left text-xs transition-all cursor-pointer ${
                      isSelected
                        ? 'border-[#E30620] bg-[#E30620]/10 font-bold text-[#E30620] shadow-xs'
                        : 'border-neutral-200 bg-white hover:border-[#E30620]/40 hover:bg-neutral-50 text-neutral-800'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#E30620] text-[10px] font-black text-white">
                        {state.num}
                      </span>
                      <span className="font-bold">{lang === 'mr' ? state.mr : state.name}</span>
                    </div>
                    <span className="text-[10px] text-neutral-500 font-semibold">
                      {lang === 'mr' ? state.name : state.mr}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Visual Legend Bar */}
      <div className="border-t border-[#172A4A]/10 bg-white/95 px-3.5 py-2.5 sm:px-4 flex flex-wrap items-center justify-between gap-2 text-xs">
        <div className="flex items-center gap-3 sm:gap-5 flex-wrap">
          <div className="flex items-center gap-1.5 font-bold text-[#172A4A]">
            <span className="h-3 w-3 rounded-sm bg-[#FDBA74] border-2 border-[#E30620] inline-block shadow-2xs" />
            <span className="text-[11px] sm:text-xs">
              {lang === 'mr' ? '१७ सक्रिय राज्य समित्या' : '17 Active State Committees'}
            </span>
          </div>
          <div className="flex items-center gap-1.5 font-bold text-[#172A4A]">
            <span className="h-3 w-3 rounded-sm bg-[#DDE5ED] border border-[#64748B] inline-block shadow-2xs" />
            <span className="text-[11px] sm:text-xs">
              {lang === 'mr' ? 'राष्ट्रीय विस्तार व संपर्क क्षेत्र (अखंड भारत)' : 'Pan-India Outreach & Coverage'}
            </span>
          </div>
        </div>
        <div className="text-[10px] sm:text-[11px] font-bold text-[#172A4A]/80 hidden md:block">
          🇮🇳 {lang === 'mr' ? 'काश्मीर ते कन्याकुमारी • गुजरात ते अरुणाचल' : 'Kashmir to Kanyakumari • Gujarat to Arunachal'}
        </div>
      </div>
    </div>
  );
}
