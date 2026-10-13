export interface CommitteeItem {
  id: number;
  nameMr: string;
  nameEn: string;
  categoryMr: string;
  categoryEn: string;
}

// All 78 Committees exactly as enumerated in PDF Pages 7, 8, 9
export const all78Committees: CommitteeItem[] = [
  { id: 1, nameMr: "मंत्रालय कामकाज समिती", nameEn: "Ministry Affairs Committee", categoryMr: "प्रशासन", categoryEn: "Administration" },
  { id: 2, nameMr: "पोलीस विकास समिती", nameEn: "Police Welfare Committee", categoryMr: "कायदा व सुरक्षा", categoryEn: "Law & Security" },
  { id: 3, nameMr: "महिला अन्याय अत्याचार निर्मूलन समिती", nameEn: "Women Anti-Atrocities & Justice Committee", categoryMr: "महिला व बालक", categoryEn: "Women & Child" },
  { id: 4, nameMr: "न्यूज पेपर एजन्सी विकास समिती", nameEn: "Newspaper Agency Development Committee", categoryMr: "मीडिया", categoryEn: "Media" },
  { id: 5, nameMr: "ग्राहक संरक्षण विकास समिती", nameEn: "Consumer Protection Committee", categoryMr: "जनहित", categoryEn: "Public Interest" },
  { id: 6, nameMr: "आरोग्य कर्मचारी विकास समिती", nameEn: "Healthcare Workers Committee", categoryMr: "आरोग्य", categoryEn: "Health" },
  { id: 7, nameMr: "क्रीडा विकास समिती", nameEn: "Sports Development Committee", categoryMr: "क्रीडा", categoryEn: "Sports" },
  { id: 8, nameMr: "शिक्षक वर्ग विकास समिती", nameEn: "Teachers Welfare Committee", categoryMr: "शिक्षण", categoryEn: "Education" },
  { id: 9, nameMr: "प्राध्यापक वर्ग विकास समिती", nameEn: "Professors Welfare Committee", categoryMr: "शिक्षण", categoryEn: "Education" },
  { id: 10, nameMr: "महिला बचत गट उद्योग विकास समिती", nameEn: "Women Self-Help Groups (SHG) Committee", categoryMr: "महिला व बालक", categoryEn: "Women & Child" },
  { id: 11, nameMr: "एस.टी. कर्मचारी विकास समिती", nameEn: "MSRTC State Transport Workers Committee", categoryMr: "कामगार", categoryEn: "Labor" },
  { id: 12, nameMr: "व्यापारी विकास समिती", nameEn: "Traders & Merchants Committee", categoryMr: "व्यापार", categoryEn: "Commerce" },
  { id: 13, nameMr: "शेतकरी विकास समिती", nameEn: "Farmers Welfare Committee", categoryMr: "कृषी", categoryEn: "Agriculture" },
  { id: 14, nameMr: "बँक विकास समिती", nameEn: "Banking Sector Committee", categoryMr: "अर्थ", categoryEn: "Finance" },
  { id: 15, nameMr: "कार, ट्रक ड्रायव्हर विकास समिती", nameEn: "Car & Truck Drivers Committee", categoryMr: "वाहतूक", categoryEn: "Transport" },
  { id: 16, nameMr: "नॅशनल व राज्य रस्ते विकास समिती", nameEn: "National & State Highways Committee", categoryMr: "पायाभूत सुविधा", categoryEn: "Infrastructure" },
  { id: 17, nameMr: "गुत्तेदार विकास समिती", nameEn: "Contractors Welfare Committee", categoryMr: "पायाभूत सुविधा", categoryEn: "Infrastructure" },
  { id: 18, nameMr: "इंग्लिश स्कूल विकास समिती", nameEn: "English Medium Schools Committee", categoryMr: "शिक्षण", categoryEn: "Education" },
  { id: 19, nameMr: "रिक्षा चालक, मालक विकास समिती", nameEn: "Auto Rickshaw Drivers & Owners Committee", categoryMr: "वाहतूक", categoryEn: "Transport" },
  { id: 20, nameMr: "प्रवासी विकास समिती", nameEn: "Commuters & Passengers Welfare Committee", categoryMr: "वाहतूक", categoryEn: "Transport" },
  { id: 21, nameMr: "पर्यटन विकास समिती", nameEn: "Tourism Development Committee", categoryMr: "पर्यटन", categoryEn: "Tourism" },
  { id: 22, nameMr: "पाणी पुरवठा विकास समिती", nameEn: "Water Supply Welfare Committee", categoryMr: "पायाभूत सुविधा", categoryEn: "Infrastructure" },
  { id: 23, nameMr: "डॉक्टर विकास समिती", nameEn: "Doctors & Medical Practitioners Committee", categoryMr: "आरोग्य", categoryEn: "Health" },
  { id: 24, nameMr: "आयुर्वेदिक विकास समिती", nameEn: "Ayurveda Development Committee", categoryMr: "आरोग्य", categoryEn: "Health" },
  { id: 25, nameMr: "विद्यार्थी विकास समिती", nameEn: "Students Welfare Committee", categoryMr: "शिक्षण", categoryEn: "Education" },
  { id: 26, nameMr: "टी.व्ही., यूट्यूब चॅनेल विकास समिती", nameEn: "TV & YouTube News Channels Committee", categoryMr: "मीडिया", categoryEn: "Media" },
  { id: 27, nameMr: "ऊर्जा विकास समिती", nameEn: "Energy & Power Committee", categoryMr: "पायाभूत सुविधा", categoryEn: "Infrastructure" },
  { id: 28, nameMr: "प्रशासन विभाग विकास समिती", nameEn: "Administrative Affairs Committee", categoryMr: "प्रशासन", categoryEn: "Administration" },
  { id: 29, nameMr: "राजकारण विकास समिती", nameEn: "Political Analysis & Civic Affairs Committee", categoryMr: "जनहित", categoryEn: "Public Interest" },
  { id: 30, nameMr: "सामाजिक कार्य विकास समिती", nameEn: "Social Work & Philanthropy Committee", categoryMr: "सामाजिक", categoryEn: "Social" },
  { id: 31, nameMr: "शेती पूरक जोड धंदे विकास समिती", nameEn: "Agro-Allied Businesses Committee", categoryMr: "कृषी", categoryEn: "Agriculture" },
  { id: 32, nameMr: "शेती आधारित प्रक्रिया उद्योग विकास समिती", nameEn: "Agro-Processing Industries Committee", categoryMr: "कृषी", categoryEn: "Agriculture" },
  { id: 33, nameMr: "व्यसनमुक्ती विकास समिती", nameEn: "De-Addiction & Rehab Welfare Committee", categoryMr: "आरोग्य", categoryEn: "Health" },
  { id: 34, nameMr: "उद्योग विकास समिती", nameEn: "Industries & MSME Committee", categoryMr: "व्यापार", categoryEn: "Commerce" },
  { id: 35, nameMr: "जिल्हा कोर कमिटी", nameEn: "District Core Committee", categoryMr: "संघटना", categoryEn: "Organisation" },
  { id: 36, nameMr: "विभागीय कार्यकारणी विकास समिती", nameEn: "Divisional Executive Committee", categoryMr: "संघटना", categoryEn: "Organisation" },
  { id: 37, nameMr: "तंटा मुक्ती विकास समिती", nameEn: "Dispute-Free Village & Harmony Committee", categoryMr: "कायदा व सुरक्षा", categoryEn: "Law & Security" },
  { id: 38, nameMr: "समाजकल्याण विकास समिती", nameEn: "Social Welfare Committee", categoryMr: "सामाजिक", categoryEn: "Social" },
  { id: 39, nameMr: "सरपंच, ग्रामपंचायत विकास समिती", nameEn: "Sarpanch & Gram Panchayat Committee", categoryMr: "स्थानिक स्वराज्य", categoryEn: "Local Governance" },
  { id: 40, nameMr: "जिल्हा परिषद विकास समिती", nameEn: "Zilla Parishad Affairs Committee", categoryMr: "स्थानिक स्वराज्य", categoryEn: "Local Governance" },
  { id: 41, nameMr: "पंचायत राज विकास समिती", nameEn: "Panchayati Raj Empowerment Committee", categoryMr: "स्थानिक स्वराज्य", categoryEn: "Local Governance" },
  { id: 42, nameMr: "दारू बंदी विकास समिती", nameEn: "Liquor Prohibition & Awareness Committee", categoryMr: "सामाजिक", categoryEn: "Social" },
  { id: 43, nameMr: "वजन मापे विकास समिती", nameEn: "Weights & Measures Committee", categoryMr: "जनहित", categoryEn: "Public Interest" },
  { id: 44, nameMr: "वसतिगृह विकास समिती", nameEn: "Hostels Welfare Committee", categoryMr: "शिक्षण", categoryEn: "Education" },
  { id: 45, nameMr: "महिला व बाल कल्याण विकास समिती", nameEn: "Women & Child Welfare Committee", categoryMr: "महिला व बालक", categoryEn: "Women & Child" },
  { id: 46, nameMr: "बालवाडी, अंगणवाडी विकास समिती", nameEn: "Anganwadi & Balwadi Workers Committee", categoryMr: "महिला व बालक", categoryEn: "Women & Child" },
  { id: 47, nameMr: "नर्सेस व ब्रदर्स विकास समिती", nameEn: "Nursing Staff & Healthcare Workers Committee", categoryMr: "आरोग्य", categoryEn: "Health" },
  { id: 48, nameMr: "शिक्षण विकास समिती", nameEn: "Education Reforms Committee", categoryMr: "शिक्षण", categoryEn: "Education" },
  { id: 49, nameMr: "नागरी समस्या विकास समिती", nameEn: "Civic Issues & Urban Affairs Committee", categoryMr: "जनहित", categoryEn: "Public Interest" },
  { id: 50, nameMr: "अतिक्रमण धारक विकास समिती", nameEn: "Encroachment & Rehabilitation Committee", categoryMr: "जनहित", categoryEn: "Public Interest" },
  { id: 51, nameMr: "कामगार कल्याण विकास समिती", nameEn: "Labor Welfare Committee", categoryMr: "कामगार", categoryEn: "Labor" },
  { id: 52, nameMr: "एन.जी.ओ. विकास समिती", nameEn: "NGOs Coordination Committee", categoryMr: "सामाजिक", categoryEn: "Social" },
  { id: 53, nameMr: "अस्वच्छ कामगार विकास समिती", nameEn: "Sanitation Workers Welfare Committee", categoryMr: "कामगार", categoryEn: "Labor" },
  { id: 54, nameMr: "पाणी विकास समिती", nameEn: "Water Resources & Irrigation Committee", categoryMr: "पायाभूत सुविधा", categoryEn: "Infrastructure" },
  { id: 55, nameMr: "विभागीय विकास समिती", nameEn: "Divisional Regional Development Committee", categoryMr: "संघटना", categoryEn: "Organisation" },
  { id: 56, nameMr: "अर्थ नियोजन विकास समिती", nameEn: "Financial Planning & Economic Welfare Committee", categoryMr: "अर्थ", categoryEn: "Finance" },
  { id: 57, nameMr: "सी.एस.आर. फंड विकास समिती", nameEn: "CSR Funds Utilization Committee", categoryMr: "सामाजिक", categoryEn: "Social" },
  { id: 58, nameMr: "लोकशाही पत्रकार कार्यक्रम समिती, मुंबई", nameEn: "Lokshahi Events Committee, Mumbai", categoryMr: "संघटना", categoryEn: "Organisation" },
  { id: 59, nameMr: "महाराष्ट्र सरकारी कर्मचारी समिती", nameEn: "Maharashtra Government Employees Committee", categoryMr: "कामगार", categoryEn: "Labor" },
  { id: 60, nameMr: "मराठी, हिंदी कलाकार विकास समिती", nameEn: "Marathi & Hindi Artists Committee", categoryMr: "कला व संस्कृती", categoryEn: "Art & Culture" },
  { id: 61, nameMr: "रिक्षा, टॅक्सी चालक मालक विकास समिती", nameEn: "Taxi & Cab Operators Committee", categoryMr: "वाहतूक", categoryEn: "Transport" },
  { id: 62, nameMr: "तृतीय पंथी विकास समिती", nameEn: "Transgender Community Rights Committee", categoryMr: "सामाजिक", categoryEn: "Social" },
  { id: 63, nameMr: "पशु, पक्षी, प्राणी विकास समिती", nameEn: "Animal Welfare & Veterinary Committee", categoryMr: "पर्यावरण", categoryEn: "Environment" },
  { id: 64, nameMr: "एस.टी. महामंडळ कर्मचारी विकास समिती", nameEn: "State Road Transport Corporation Committee", categoryMr: "कामगार", categoryEn: "Labor" },
  { id: 65, nameMr: "हॉटेल अँड बार विकास समिती", nameEn: "Hospitality & Restaurant Committee", categoryMr: "व्यापार", categoryEn: "Commerce" },
  { id: 66, nameMr: "शालेय शिक्षण विकास समिती", nameEn: "Primary School Education Committee", categoryMr: "शिक्षण", categoryEn: "Education" },
  { id: 67, nameMr: "माध्यमिक शिक्षण विकास समिती", nameEn: "Secondary Education Committee", categoryMr: "शिक्षण", categoryEn: "Education" },
  { id: 68, nameMr: "उच्च शिक्षण विकास समिती", nameEn: "Higher Education Committee", categoryMr: "शिक्षण", categoryEn: "Education" },
  { id: 69, nameMr: "कनिष्ठ महाविद्यालय विकास समिती", nameEn: "Junior College Affairs Committee", categoryMr: "शिक्षण", categoryEn: "Education" },
  { id: 70, nameMr: "तांत्रिक व व्यावसायिक शिक्षण विकास समिती", nameEn: "Technical & Vocational Education Committee", categoryMr: "शिक्षण", categoryEn: "Education" },
  { id: 71, nameMr: "सहकार क्षेत्र विकास समिती", nameEn: "Cooperative Sector Committee", categoryMr: "अर्थ", categoryEn: "Finance" },
  { id: 72, nameMr: "अन्न व औषध प्रशासन विकास समिती", nameEn: "Food & Drug Administration Committee", categoryMr: "आरोग्य", categoryEn: "Health" },
  { id: 73, nameMr: "पर्यावरण संरक्षण विकास समिती", nameEn: "Environmental Conservation Committee", categoryMr: "पर्यावरण", categoryEn: "Environment" },
  { id: 74, nameMr: "माहिती तंत्रज्ञान (IT) विकास समिती", nameEn: "Information Technology (IT) Committee", categoryMr: "तंत्रज्ञान", categoryEn: "Technology" },
  { id: 75, nameMr: "युवा व क्रीडा प्रबोधन विकास समिती", nameEn: "Youth & Sports Empowerment Committee", categoryMr: "क्रीडा", categoryEn: "Sports" },
  { id: 76, nameMr: "दिव्यांग कल्याण विकास समिती", nameEn: "Divyang & Special Needs Welfare Committee", categoryMr: "सामाजिक", categoryEn: "Social" },
  { id: 77, nameMr: "गृहनिर्माण व सोसायटी विकास समिती", nameEn: "Housing Societies Welfare Committee", categoryMr: "जनहित", categoryEn: "Public Interest" },
  { id: 78, nameMr: "कायदा व सुव्यवस्था विकास समिती", nameEn: "Law & Order Assistance Committee", categoryMr: "कायदा व सुरक्षा", categoryEn: "Law & Security" }
];

// Leadership designations strictly as per PDF Pages 15 & 16:
// Photo + Name + Designation + State + Short Profile
// Leadership designations updated with full official team
export interface LeadershipMember {
  roleMr: string;
  roleEn: string;
  nameMr: string;
  nameEn: string;
  designationMr?: string;
  designationEn?: string;
  stateMr: string;
  stateEn: string;
  profileMr: string;
  profileEn: string;
  fullBioMr?: string;
  imageKey?: string;
}

export const leadershipMembers: LeadershipMember[] = [
  {
    roleMr: "संस्थापक / मुख्य सल्लागार",
    roleEn: "Founder / Chief Strategist",
    nameMr: "श्री. संदिप जाधव",
    nameEn: "Shri Sandip Jadhav",
    designationMr: "पत्रकार | प्रभावी वक्ते | निवडणूक रणनीतिकार | राजकीय विश्लेषक | संस्थापक Hashtag Media Network",
    designationEn: "Journalist | Orator | Election Strategist | Political Analyst | Founder Hashtag Media Network",
    stateMr: "महाराष्ट्र / भारत",
    stateEn: "Maharashtra / India",
    profileMr: "पत्रकारिता, राजकीय संवाद, निवडणूक व्यवस्थापन व सामाजिक प्रश्नांवरील अभ्यासपूर्ण कार्य. Hashtag Media Network चे संस्थापक व व्यवस्थापकीय संचालक.",
    profileEn: "Over 8 years in national media groups, political analysis, election strategy & founder of Hashtag Media Network.",
    fullBioMr: "पत्रकार संदिप जाधव हे महाराष्ट्रातील तसेच राष्ट्रीय स्तरावर कार्यरत असलेले पत्रकार, प्रभावी वक्ते आणि निवडणूक रणनीतिकार आहेत. गेल्या ८ वर्षांहून अधिक काळ त्यांनी राज्य आणि देशपातळीवरील नामांकित माध्यम समूहांमध्ये काम केले आहे. पत्रकारिता, राजकीय संवाद, निवडणूक व्यवस्थापन आणि सामाजिक प्रश्नांवरील अभ्यासपूर्ण कार्यातून जाधव यांनी स्वतःची एक वेगळी ओळख निर्माण केली आहे. आज ते Hashtag Media Network या मीडिया आणि कम्युनिकेशन कंपनीचे संस्थापक तथा व्यवस्थापकीय संचालक (Founder & Managing Director) आहेत. ग्राउंड रिपोर्टिंग, शोध पत्रकारिता, राजकीय विश्लेषण आणि जनहिताशी संबंधित विषयांवरील प्रभावी मांडणी ही संदिप यांची प्रमुख ताकद आहे. दिल्ली, पश्चिम बंगाल, महाराष्ट्र, बिहार, गोवा या राज्यांमधील निवडणूक मोहिमांमध्ये राजकीय रणनीती व कॅम्पेन मॅनेजमेंटचे काम त्यांनी केले आहे.",
    imageKey: "SANDIP_JADHAV_IMG"
  },
  {
    roleMr: "राष्ट्रीय कार्याध्यक्ष",
    roleEn: "National Working President",
    nameMr: "मा. प्रतापराव साळूंखे",
    nameEn: "Hon. PrataprAo Salunkhe",
    designationMr: "राष्ट्रीय कार्याध्यक्ष | उद्योजक | संपादक, सुपर महाराष्ट्र न्यूज",
    designationEn: "National Working President | Entrepreneur | Editor, Super Maharashtra News",
    stateMr: "महाराष्ट्र / भारत",
    stateEn: "Maharashtra / India",
    profileMr: "सुपर महाराष्ट्र न्यूजचे संपादक, ख्यातनाम उद्योजक व संघटनात्मक धोरणकर्ते.",
    profileEn: "Editor of Super Maharashtra News, prominent entrepreneur and nationwide organization builder.",
    fullBioMr: "मा. प्रतापराव साळूंखे हे लोकशाही पत्रकार महासंघ भारताचे राष्ट्रीय कार्याध्यक्ष असून, पत्रकारिता, उद्योग आणि सामाजिक क्षेत्रातील एक प्रतिष्ठित व्यक्तिमत्त्व आहेत. ते सुपर महाराष्ट्र न्यूजचे संपादक असून, स्वतःच्या वर्तमानपत्राच्या माध्यमातूनही पत्रकारितेचे कार्य करतात. महाराष्ट्रातील ख्यातनाम उद्योजक म्हणून त्यांची ओळख असून, विविध व्यावसायिक उपक्रमांच्या माध्यमातून त्यांनी उद्योग क्षेत्रात भरीव योगदान दिले आहे. पत्रकारांचे हक्क, सामाजिक न्याय आणि संघटनात्मक बांधणीसाठी ते सातत्याने कार्यरत आहेत.",
    imageKey: "SALUNKHE_IMG"
  },
  {
    roleMr: "राष्ट्रीय उपाध्यक्ष",
    roleEn: "National Vice President",
    nameMr: "डॉ. संतोषकुमार आर. जयस्वाल",
    nameEn: "Dr. Santoshkumar R. Jaiswal",
    designationMr: "निवृत्त न्यायाधीश | ज्येष्ठ विधिज्ञ | कायदेविषयक सल्लागार | लवाद व मध्यस्थी तज्ज्ञ",
    designationEn: "Retired Judge | Senior Jurist | Legal Counsel | Arbitration Expert",
    stateMr: "महाराष्ट्र / भारत",
    stateEn: "Maharashtra / India",
    profileMr: "न्यायदानाचा प्रदीर्घ अनुभव, कायद्याचे सखोल ज्ञान आणि पत्रकारांच्या कायदेशीर संरक्षणाची बांधिलकी.",
    profileEn: "Extensive judicial & legal expertise, retired judge, high court legal counsel & arbitration expert.",
    fullBioMr: "डॉ. संतोषकुमार आर. जयस्वाल हे न्यायिक, कायदेविषयक, प्रशासकीय आणि सामाजिक क्षेत्रातील प्रदीर्घ अनुभव असलेले आदरणीय व्यक्तिमत्त्व आहेत. निवृत्त न्यायाधीश म्हणून काम करताना त्यांनी अनेक वर्षे न्यायदान प्रक्रियेत अत्यंत निष्पक्ष, संवेदनशील आणि कायदेशीरदृष्ट्या महत्त्वपूर्ण भूमिका बजावली आहे. मुंबई उच्च न्यायालयासह विविध न्यायालये, लवाद आणि लवादाच्या माध्यमातून त्यांनी अनेक क्लिष्ट कायदेशीर वादांचे यशस्वी निराकरण केले आहे. लोकशाही पत्रकार महासंघ भारताचे राष्ट्रीय उपाध्यक्ष म्हणून ते पत्रकारांच्या हक्कांचे संरक्षण व कायदेशीर मार्गदर्शन करतात.",
    imageKey: "DR_JAISWAL_IMG"
  },
  {
    roleMr: "राष्ट्रीय कायदेशीर सल्लागार",
    roleEn: "National Legal Advisor",
    nameMr: "ॲड. रमकांत पाटील",
    nameEn: "Adv. Ramakant Patil",
    designationMr: "राष्ट्रीय कायदेशीर सल्लागार, लोकशाही पत्रकार महासंघ भारत | अनुभवी विधिज्ञ",
    designationEn: "National Legal Advisor | Senior High Court & Supreme Court Advocate",
    stateMr: "महाराष्ट्र / भारत (नवी मुंबई)",
    stateEn: "Maharashtra / India (Navi Mumbai)",
    profileMr: "गेल्या १२ वर्षांपासून मुंबई उच्च न्यायालय व सर्वोच्च न्यायालयात कार्यरत अनुभवी विधिज्ञ.",
    profileEn: "Over 12 years of high court and supreme court legal experience defending journalists and citizen rights.",
    fullBioMr: "ॲड. रमकांत पाटील हे गेल्या १२ वर्षांपासून वकिली क्षेत्रात कार्यरत असलेले अनुभवी विधिज्ञ आणि कायद्याचे सखोल अभ्यासक आहेत. मुंबई उच्च न्यायालयासह सर्वोच्च न्यायालय, जिल्हा न्यायालये तसेच विविध कनिष्ठ न्यायालयांमध्ये कायदेशीर प्रकरणांवर काम करण्याचा त्यांना अनुभव आहे. फौजदारी कायदा, महसुली प्रशासन आणि विविध कायदेशीर बाबींमध्ये ते पक्षकारांना मार्गदर्शन व न्यायप्रक्रियेत मदत करतात. सर्वसामान्य नागरिकांना न्याय मिळवून देण्याची बांधिलकी जपत त्यांनी पत्रकार आणि विविध सामाजिक संघटनांसोबतही कार्य केले आहे.",
    imageKey: "ADV_PATIL_IMG"
  },
  {
    roleMr: "राष्ट्रीय महामंत्री",
    roleEn: "National General Secretary",
    nameMr: "टी. माधव",
    nameEn: "T. Madhav",
    designationMr: "पत्रकारिता • मंत्रालयीन अनुभव • प्रशासकीय समन्वय • जनसंपर्क",
    designationEn: "Journalism • Ministerial Experience • Administrative Liaison • Public Relations",
    stateMr: "नवी दिल्ली / भारत",
    stateEn: "New Delhi / India",
    profileMr: "केंद्रीय मंत्रालयीन कामकाज, विदेशी गुंतवणूक समन्वय व रोजगार निर्मितीतील उल्लेखनीय कार्य.",
    profileEn: "Central ministerial liaison, FDI coordination & nationwide employment generation initiatives.",
    fullBioMr: "टी. माधव हे पत्रकारिता, केंद्रीय मंत्रालयीन कामकाज आणि प्रशासकीय समन्वयाचा अनुभव असलेले व्यक्तिमत्त्व आहेत. कायदा व पत्रकारितेचे शिक्षण घेतल्यानंतर त्यांनी देशातील नामांकित वर्तमानपत्रांमध्ये विविध महत्त्वपूर्ण विषयांवर लिखाण केले आहे. त्यांनी दिल्ली येथे केंद्र सरकारच्या विविध विभागात व समित्यांमध्ये समन्वयक म्हणून काम केले आहे, परकीय कंपन्यांची गुंतवणूक भारतात आणण्यासाठी आणि रोजगार निर्मितीच्या क्षेत्रात महत्त्वपूर्ण योगदान दिले आहे.",
    imageKey: "T_MADHAV_IMG"
  },
  {
    roleMr: "राष्ट्रीय संघटन मंत्री",
    roleEn: "National Organizing Secretary",
    nameMr: "ज्ञानेश्वर बुधवत",
    nameEn: "Dnyaneshwar Budhwat",
    designationMr: "मुख्य संपादक, दैनिक लोकनेता | निर्भीड पत्रकार | सामाजिक कार्यकर्ते",
    designationEn: "Chief Editor, Dainik Lokneta | Fearless Journalist | Social Leader",
    stateMr: "महाराष्ट्र (बुलढाणा / विदर्भ-मराठवाडा)",
    stateEn: "Maharashtra (Buldhana / Vidarbha-Marathwada)",
    profileMr: "दैनिक लोकनेता चे मुख्य संपादक, निर्भीड पत्रकारिता व शेतकरी-शोषित घटकांच्या प्रश्नांवर परखड लेखणी.",
    profileEn: "Chief Editor of Dainik Lokneta, leading investigative journalist fighting for farmer & public issues.",
    fullBioMr: "ज्ञानेश्वर बुधवत हे महाराष्ट्रातील दैनिक लोकनेता या वर्तमानपत्राचे मुख्य संपादक असून, निर्भीड पत्रकारिता, सामाजिक बांधिलकी आणि जनहिताच्या प्रश्नांवरील परखड लेखणीसाठी ओळखले जातात. आपल्या लेखणीच्या माध्यमातून त्यांनी शोषित, वंचित आणि पीडित घटकांच्या प्रश्नांना वाचा फोडण्यासोबतच मराठवाडा व विदर्भातील शेतकऱ्यांच्या समस्या, ग्रामीण भागातील विकासप्रश्न आणि प्रशासनातील गैरकारभारावर सातत्याने प्रकाश टाकला आहे. पत्रकार संरक्षण कायदा व पत्रकारांच्या सन्मानासाठी ते नेहमीच आघाडीवर राहिले आहेत.",
    imageKey: "BUDHWAT_IMG"
  },
  {
    roleMr: "राष्ट्रीय सरचिटणीस",
    roleEn: "National Secretary",
    nameMr: "हलीमा शेख",
    nameEn: "Halima Sheikh",
    designationMr: "ज्येष्ठ सामाजिक कार्यकर्त्या | अध्यक्षा, स्वयंप्रेरणा विकास संस्था",
    designationEn: "Senior Social Leader | President, Swayamprerna Vikas Sanstha",
    stateMr: "महाराष्ट्र / भारत",
    stateEn: "Maharashtra / India",
    profileMr: "गेल्या ३० वर्षांपासून महिला सक्षमीकरण, शिक्षण, आरोग्य व सामाजिक परिवर्तनासाठी अविरत कार्य.",
    profileEn: "Over 30 years in grassroots social activism, women empowerment, health and social justice.",
    fullBioMr: "हलीमा शेख गेल्या तीस वर्षांपासून सामाजिक कार्य, पत्रकारिता आणि जनसेवेच्या क्षेत्रात सातत्याने सक्रिय आहेत. समाजातील वंचित, दुर्बल आणि उपेक्षित घटकांच्या प्रश्नांना त्यांनी नेहमीच प्राधान्य दिले आहे. स्वयंप्रेरणा विकास संस्थेच्या अध्यक्षा म्हणून त्यांनी महिला सक्षमीकरण, सामाजिक न्याय, शिक्षण, आरोग्य, जनजागृती आणि सामाजिक परिवर्तनासाठी राज्यपातळीवर कार्य केले आहे. विविध सामाजिक आंदोलने, मदतकार्य आणि जनजागृती मोहिमांमध्ये त्यांचा सक्रिय सहभाग राहिला आहे.",
    imageKey: null
  },
  {
    roleMr: "महाराष्ट्र प्रदेश अध्यक्ष",
    roleEn: "Maharashtra State President",
    nameMr: "मा. श्री. किशोर दादा पवार",
    nameEn: "Hon. Kishore Dada Pawar",
    designationMr: "पत्रकार | संघटनात्मक नेतृत्व | संस्थापक-अध्यक्ष, Seva Social Welfare Global Foundation",
    designationEn: "Journalist | Organization Leader | Founder-President, Seva Social Welfare Global Foundation",
    stateMr: "महाराष्ट्र राज्य",
    stateEn: "Maharashtra State",
    profileMr: "६-७ वर्षांचे पत्रकारितेतील कार्य, राज्यव्यापी पत्रकार संघटन व सेवा सोशल वेल्फेअर ग्लोबल फाउंडेशनचे नेतृत्व.",
    profileEn: "State President leading journalist mobilization across Maharashtra & Founder of Seva Social Welfare Global Foundation.",
    fullBioMr: "मा. श्री. किशोर दादा पवार हे गेल्या ६–७ वर्षांपासून पत्रकारिता क्षेत्रात सक्रिय असून जनहिताचे प्रश्न, सामाजिक समस्या, प्रशासन आणि ग्रामीण भागातील प्रश्नांना प्रभावीपणे वाचा फोडण्याचे कार्य करत आहेत. लोकशाही पत्रकार महासंघ, भारत — महाराष्ट्र प्रदेश अध्यक्ष म्हणून पत्रकारांना संघटित करणे, त्यांच्या हक्कांसाठी व्यासपीठ निर्माण करणे आणि महाराष्ट्रभर संघटनेची सक्षम बांधणी करण्यात त्यांचा मोलाचा वाटा आहे. तसेच Seva Social Welfare Global Foundation च्या माध्यमातून त्यांनी आरोग्य, शिक्षण व महिला सक्षमीकरणाचे व्यापक कार्य उभे केले आहे.",
    imageKey: "KISHORE_PAWAR_IMG"
  },
  {
    roleMr: "महाराष्ट्र प्रदेश कार्याध्यक्ष",
    roleEn: "Maharashtra Working President",
    nameMr: "श्री. सनम पाटील",
    nameEn: "Shri Sanam Patil",
    designationMr: "संपादक, नवी मुंबई क्राईम न्यूज | माध्यम सल्लागार",
    designationEn: "Editor, Navi Mumbai Crime News | Media Consultant",
    stateMr: "महाराष्ट्र राज्य (नवी मुंबई)",
    stateEn: "Maharashtra State (Navi Mumbai)",
    profileMr: "नवी मुंबई क्राईम न्यूज व नवी मुंबई समाचार चे संपादक, निर्भीड क्राईम रिपोर्टिंग व माध्यम समन्वय.",
    profileEn: "Editor of Navi Mumbai Crime News with extensive background in print and digital media coverage.",
    fullBioMr: "श्री. सनम पाटील हे पत्रकारितेच्या क्षेत्रातील एक सक्रिय आणि सामाजिक बांधिलकी जपणारे व्यक्तिमत्त्व आहेत. नवी मुंबई क्राईम न्यूज, नवी मुंबई समाचार न्यूज तसेच विथ महाराष्ट्र यांसारख्या माध्यमसमूहांमध्ये त्यांनी काम केले असून, प्रिंट मीडिया आणि डिजिटल मीडियाच्या माध्यमातून जनतेचे प्रश्न प्रभावीपणे मांडण्याचे कार्य केले आहे. पत्रकारांचे अधिकार, कायदेशीर संरक्षण आणि संघटनात्मक बळकटीकरणासाठी ते सातत्याने पुढाकार घेत आहेत.",
    imageKey: "SANAM_PATIL_IMG"
  },
  {
    roleMr: "सामाजिक व राजकीय कार्यकर्ते",
    roleEn: "Social & Political Activist",
    nameMr: "डॉ. अनिल दिलीप पाटील",
    nameEn: "Dr. Anil Dilip Patil",
    designationMr: "उद्योजक (Saitech Group) • पत्रकार • सामाजिक व राजकीय कार्यकर्ते",
    designationEn: "Entrepreneur (Saitech Group) • Journalist • Social & Political Leader",
    stateMr: "महाराष्ट्र",
    stateEn: "Maharashtra",
    profileMr: "Saitech Group चे उद्योजक, पत्रकारिता व विविध सामाजिक-राजकीय जनहिताच्या उपक्रमांत सक्रिय सहभाग.",
    profileEn: "Saitech Group entrepreneur, active journalist and community advocate solving citizen grievances.",
    fullBioMr: "डॉ. अनिल दिलीप पाटील हे उद्योजक, पत्रकार आणि सामाजिक व राजकीय कार्यकर्ते म्हणून कार्यरत आहेत. Saitech Group च्या माध्यमातून उद्योग क्षेत्रात त्यांनी स्वतःची ओळख निर्माण केली असून पत्रकारितेच्या माध्यमातून जनहिताचे प्रश्न, सामाजिक विषय आणि नागरिकांच्या समस्या मांडण्याचे कार्य करत आहेत. सामाजिक प्रश्नांबाबत जनजागृती करणे आणि सर्वसामान्य जनतेच्या हितासाठी कार्यरत राहणे हा त्यांच्या कार्याचा प्रमुख भाग आहे.",
    imageKey: "DR_ANIL_PATIL_IMG"
  }
];

// Future Roadmap 8 Phases strictly matching PDF Pages 11 & 12
export const futureRoadmapPhases = [
  {
    phase: "PHASE 01",
    titleMr: "संघटन विस्तार",
    titleEn: "Organisational Expansion",
    descMr: "भारताच्या विविध राज्यांमध्ये महासंघाचे संघटनात्मक जाळे मजबूत करणे.",
    descEn: "Strengthening the organisational network across various states of India."
  },
  {
    phase: "PHASE 02",
    titleMr: "Journalist Help Desk",
    titleEn: "Journalist Help Desk",
    descMr: "पत्रकारांच्या प्रश्नांसाठी राष्ट्रीय पातळीवर संपर्क व मार्गदर्शन व्यवस्था विकसित करणे.",
    descEn: "Developing a national-level contact and guidance mechanism for journalists' issues."
  },
  {
    phase: "PHASE 03",
    titleMr: "प्रशिक्षण व कौशल्य विकास",
    titleEn: "Training & Skill Development",
    descMr: "डिजिटल पत्रकारिता, सोशल मीडिया, तथ्य पडताळणी, सायबर सुरक्षा, कायदेशीर जागरूकता आणि आधुनिक पत्रकारितेसाठी प्रशिक्षण उपक्रम व पत्रकार कार्यशाळेचे आयोजन.सोबतच Meet the Press कार्यक्रम, पत्रकार सुरक्षा व हक्क संरक्षण अभियान, माध्यम संशोधन व अभ्यास प्रकल्प,मानवाधिकार जनजागृती उपक्रम,पर्यावरण संरक्षण मोहिमा,पत्रकारिता नैतिकता विषयक मार्गदर्शन,स्मरणिका, नियतकालिके आणि डिजिटल प्रकाशन,सामाजिक सेवा आणि जनहिताचे विशेष अभियान",
    descEn: "Training programs and journalist workshops on digital journalism, social media, fact checking, cyber security, legal awareness, Meet the Press events, and public interest initiatives."
  },
  {
    phase: "PHASE 04",
    titleMr: "पत्रकार हक्क अभियान",
    titleEn: "Journalist Rights Campaign",
    descMr: "पत्रकारांच्या न्याय्य हक्क आणि प्रश्नांसाठी राष्ट्रीय स्तरावर जनजागृती व संघटनात्मक अभियान.",
    descEn: "National awareness campaigns and advocacy drives for journalists' legitimate rights and issues."
  },
  {
    phase: "PHASE 05",
    titleMr: "सामाजिक जनहित अभियान",
    titleEn: "Public Welfare Initiative",
    descMr: "देशभरातील जनहिताचे प्रश्न संबंधित शासन-प्रशासनापर्यंत पोहोचवण्यासाठी सामाजिक उपक्रम.",
    descEn: "Social initiatives to bring public interest issues across the country to relevant government administrations."
  },
  {
    phase: "PHASE 06",
    titleMr: "Digital Journalist Network",
    titleEn: "Digital Journalist Network",
    descMr: "देशभरातील सदस्य पत्रकारांना जोडणारे डिजिटल नेटवर्क तयार करणे.",
    descEn: "Creating a digital network connecting member journalists across India."
  },
  {
    phase: "PHASE 07",
    titleMr: "National Media & Journalist Convention",
    titleEn: "National Media & Journalist Convention",
    descMr: "देशभरातील पत्रकारांना एका व्यासपीठावर आणण्यासाठी राष्ट्रीय स्तरावरील परिषद/अधिवेशन व देशव्यापी चर्चासत्रांचे आयोजन.",
    descEn: "Organizing national-level conventions and nationwide symposiums to bring journalists together on one platform."
  },
  {
    phase: "PHASE 08",
    titleMr: "Research & Documentation",
    titleEn: "Research & Documentation",
    descMr: "पत्रकारांचे प्रश्न, पत्रकारितेतील बदल आणि सामाजिक प्रश्नांवर अभ्यास व दस्तऐवजीकरण.",
    descEn: "Study and documentation of journalists' issues, media evolution, and social questions."
  }
];

// Event Cards specifications matching PDF Page 13:
// प्रत्येक Event Card मध्ये: कार्यक्रमाचे नाव, 📍 ठिकाण, 📅 दिनांक, 👥 आयोजक / समिती, 📝 कार्यक्रमाची माहिती, 📷 फोटो, 🎥 व्हिडिओ
export const sampleEvents = [
  {
    id: 1,
    titleMr: "कार्यक्रमाचे नाव",
    titleEn: "Event Name",
    placeMr: "ठिकाण",
    placeEn: "Location",
    dateMr: "दिनांक",
    dateEn: "Date",
    organizerMr: "आयोजक / समिती",
    organizerEn: "Organizer / Committee",
    descMr: "कार्यक्रमाची माहिती",
    descEn: "Program Details"
  },
  {
    id: 2,
    titleMr: "कार्यक्रमाचे नाव",
    titleEn: "Event Name",
    placeMr: "ठिकाण",
    placeEn: "Location",
    dateMr: "दिनांक",
    dateEn: "Date",
    organizerMr: "आयोजक / समिती",
    organizerEn: "Organizer / Committee",
    descMr: "कार्यक्रमाची माहिती",
    descEn: "Program Details"
  },
  {
    id: 3,
    titleMr: "कार्यक्रमाचे नाव",
    titleEn: "Event Name",
    placeMr: "ठिकाण",
    placeEn: "Location",
    dateMr: "दिनांक",
    dateEn: "Date",
    organizerMr: "आयोजक / समिती",
    organizerEn: "Organizer / Committee",
    descMr: "कार्यक्रमाची माहिती",
    descEn: "Program Details"
  }
];
