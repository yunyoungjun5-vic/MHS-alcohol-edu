import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, UserCheck, Lock, FileText, CheckCircle2, ChevronDown, ChevronUp, ArrowRight, MonitorPlay, Calendar, Clock, BookOpen } from 'lucide-react';

// --- Data Definitions ---

const programSteps = [
  {
    step: "1단계",
    title: "사건 인식",
    desc: "“왜 이런 일이 발생했는가를 정확히 이해”",
    image: "https://images.unsplash.com/photo-1516534775068-ba3e7458af70?auto=format&fit=crop&q=80&w=800"
  },
  {
    step: "2단계",
    title: "행동 패턴 분석",
    desc: "“음주와 충동의 반복 구조를 파악”",
    image: "https://images.unsplash.com/photo-1454165833767-027ffea9e41b?auto=format&fit=crop&q=80&w=800"
  },
  {
    step: "3단계",
    title: "인지 교정",
    desc: "“잘못된 판단 기준을 수정”",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
  },
  {
    step: "4단계",
    title: "행동 변화",
    desc: "“실제 생활 속 변화 적용”",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800"
  },
  {
    step: "5단계",
    title: "재발방지 계획",
    desc: "“구체적인 행동 계획 수립”",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800"
  },
  {
    step: "6단계",
    title: "유지 관리",
    desc: "“재발 위험 지속 관리”",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800"
  }
];

const generatedMaterials = [
  "심리상담 확인서",
  "재범방지 교육 이수증",
  "상담 소견서",
  "재범 위험성 평가",
  "재발방지 계획서",
  "절주 계획서"
];

const trustElements = [
  {
    icon: <UserCheck size={32} />,
    title: "20년 이상 경력의 전문 상담사",
    highlight: false
  },
  {
    icon: <FileText size={32} />,
    title: "법률적 지식과 경험을 바탕으로한 체계적이고 전문적인 양형자료 제공",
    highlight: true
  },
  {
    icon: <ShieldCheck size={32} />,
    title: "1:1 개인 맞춤 프로그램",
    highlight: false
  },
  {
    icon: <Lock size={32} />,
    title: "철저한 비밀보장",
    highlight: false
  }
];

const faqs = [
  {
    q: "음주운전 비대면 상담도 효과가 있나요?",
    a: "네, 대면 상담과 동일한 수준의 심층적인 분석과 교정이 이루어집니다. 화상 시스템을 통해 표정과 감정 상태를 세밀하게 파악하며, 오히려 편안한 환경에서 진행되어 내담자의 솔직한 자기 개방과 변화를 이끌어내는 데 매우 효과적입니다."
  },
  {
    q: "재범방지 교육은 얼마나 진행되나요?",
    a: "개인의 상황과 필요에 따라 총 4~8주 과정으로 맞춤 설계됩니다. 주 1~2회 정기적인 화상 세션을 통해 인지 교정과 행동 변화 훈련이 진행되며, 매 회기마다 실생활에 적용할 수 있는 과제가 부여되어 실질적인 변화를 만듭니다."
  },
  {
    q: "음주운전 양형자료는 실제로 도움이 되나요?",
    a: "단순한 반성문보다 전문가의 객관적인 소견과 이수증은 재범 위험성을 낮추기 위한 구체적인 노력의 증거로 인정받습니다. 법원에서도 피고인의 변화 의지를 판단할 때 이러한 체계적인 교육 및 상담 기록을 매우 중요한 음주운전 양형자료로 활용합니다."
  },
  {
    q: "상담 기록은 어떻게 남나요?",
    a: "모든 상담과 교육 과정은 철저한 비밀보장 원칙 하에 안전하게 기록됩니다. 이 기록들은 추후 법원 제출용 양형자료(상담 확인서, 소견서, 이수증 등)를 발급하는 객관적인 근거 자료로만 사용되며, 외부로 절대 유출되지 않습니다."
  }
];

// --- Components ---

const FAQItem: React.FC<{ q: string, a: string }> = ({ q, a }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-slate-200 rounded-2xl overflow-hidden bg-white mb-4">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors">
        <span className="font-bold text-slate-900 pr-4">{q}</span>
        {isOpen ? <ChevronUp className="text-primary shrink-0" /> : <ChevronDown className="text-slate-400 shrink-0" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{height:0, opacity:0}} animate={{height:'auto', opacity:1}} exit={{height:0, opacity:0}} className="overflow-hidden">
            <div className="p-6 pt-0 text-slate-600 leading-relaxed font-medium border-t border-slate-100 mt-4">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- Main Page Component ---

export const OnlineProgram = () => {
  useEffect(() => {
    document.title = "비대면 프로그램 | 한국음주운전재범방지교육상담센터";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "음주운전 비대면 상담 전문센터. 재범방지 교육, 심리상담, 양형자료 준비까지 체계적으로 지원합니다.");
    } else {
      const meta = document.createElement('meta');
      meta.setAttribute("name", "description");
      meta.setAttribute("content", "음주운전 비대면 상담 전문센터. 재범방지 교육, 심리상담, 양형자료 준비까지 체계적으로 지원합니다.");
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="pt-20">
      {/* 2. 상단 히어로 섹션 */}
      <section className="bg-slate-900 py-32 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=2000" alt="Background" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-primary font-bold tracking-[0.3em] text-xs uppercase mb-6 block"
          >
            Online Program
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-6xl font-black mb-6 tracking-tighter leading-tight"
          >
            비대면 음주운전 재범방지<br className="hidden md:block" />
            교육 및 심리상담 프로그램
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-2xl lg:text-3xl font-bold text-primary italic mb-8"
          >
            “지금의 선택이 결과를 바꿉니다”
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-lg max-w-2xl mx-auto font-medium leading-relaxed mb-12"
          >
            “재범방지 노력은 단순한 말이 아니라<br />
            전문적인 음주운전 상담 과정과 기록으로 증명되어야 합니다.”
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a 
              href="tel:0507-1351-5463" 
              className="px-10 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
            >
              전화 문의 (0507-1351-5463)
            </a>
          </motion.div>
        </div>
      </section>

      {/* 3. 문제 공감 섹션 (강력) */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-12 leading-relaxed">
            “많은 분들이 이렇게 생각합니다.
          </h2>
          <div className="flex flex-col gap-4 mb-12 text-lg lg:text-xl font-medium text-slate-600">
            <p className="bg-white py-4 px-6 rounded-2xl shadow-sm border border-slate-100 inline-block mx-auto">무엇을 준비해야 하는지 모르겠다</p>
            <p className="bg-white py-4 px-6 rounded-2xl shadow-sm border border-slate-100 inline-block mx-auto">상담이 실제로 도움이 될까 고민된다</p>
            <p className="bg-white py-4 px-6 rounded-2xl shadow-sm border border-slate-100 inline-block mx-auto">형식적으로 준비하면 되는 것 아닌가</p>
          </div>
          <div className="bg-slate-900 text-white p-10 lg:p-16 rounded-[3rem] shadow-xl">
            <h3 className="text-2xl lg:text-3xl font-black mb-6 text-primary">하지만 현실은 다릅니다.</h3>
            <p className="text-xl lg:text-2xl font-medium leading-relaxed">
              단순한 반성이나 형식적인 자료로는<br className="hidden sm:block"/>
              변화를 설명하기 어렵습니다.
            </p>
          </div>
        </div>
      </section>

      {/* 4. 핵심 메시지 섹션 */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-10 tracking-tighter">왜 이 프로그램이 필요한가</h2>
          <div className="text-xl lg:text-2xl font-bold text-slate-700 leading-relaxed max-w-3xl mx-auto">
            <p className="mb-6">
              “중요한 것은 ‘반성했다’가 아니라<br className="hidden sm:block"/>
              <span className="text-primary underline decoration-primary/30 underline-offset-8">재범 가능성을 얼마나 낮췄는가</span>입니다.”
            </p>
            <p className="text-lg lg:text-xl text-slate-500 font-medium">
              이를 가장 설득력 있게 보여주는 방법은<br className="hidden sm:block"/>
              체계적인 음주운전 재범방지 교육과 상담 과정의 기록입니다.
            </p>
          </div>
        </div>
      </section>

      {/* 5. 프로그램 구조 섹션 (핵심) */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-6 tracking-tighter">프로그램 구조</h2>
            <p className="text-lg text-slate-500 font-medium">체계적인 6단계 과정을 통해 근본적인 변화를 이끌어냅니다.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programSteps.map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg shadow-slate-200/50 border border-slate-100 group"
              >
                <div className="h-48 overflow-hidden relative">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/10 transition-colors" />
                  <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1.5 rounded-full">
                    {item.step}
                  </div>
                </div>
                <div className="p-8 text-center">
                  <h3 className="text-2xl font-black text-slate-900 mb-4">{item.title}</h3>
                  <p className="text-primary font-bold">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. 진행 방식 섹션 */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-10 tracking-tighter">진행 방식</h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4 bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                    <MonitorPlay size={24} />
                  </div>
                  <span className="text-lg font-bold text-slate-800">100% 음주운전 비대면 상담 진행 (화상 시스템)</span>
                </div>
                <div className="flex items-center gap-4 bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                    <Calendar size={24} />
                  </div>
                  <span className="text-lg font-bold text-slate-800">주 1~2회 진행</span>
                </div>
                <div className="flex items-center gap-4 bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                    <Clock size={24} />
                  </div>
                  <span className="text-lg font-bold text-slate-800">총 4~8주 과정</span>
                </div>
                <div className="flex items-center gap-4 bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                    <BookOpen size={24} />
                  </div>
                  <span className="text-lg font-bold text-slate-800">상담 + 교육 + 과제 병행</span>
                </div>
              </div>
              <div className="mt-10 bg-slate-900 p-6 rounded-2xl text-center">
                <p className="text-white font-bold text-lg">👉 모든 과정 기록 및 서류 증빙 가능</p>
              </div>
            </div>
            <div className="relative h-[600px] rounded-[3rem] overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1000" alt="진행 방식" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-12">
                <p className="text-white text-2xl font-bold leading-relaxed">
                  편안한 환경에서<br/>
                  가장 효과적인 변화를 시작하세요.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. 결과 (매우 중요) */}
      <section className="py-32 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-black mb-16 tracking-tighter">프로그램 진행 시 생성 가능한 음주운전 양형자료</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {generatedMaterials.map((material, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-md border border-white/10 p-8 rounded-3xl flex items-center justify-center gap-3 hover:bg-white/20 transition-colors">
                <CheckCircle2 className="text-primary shrink-0" size={24} />
                <span className="text-xl font-bold">{material}</span>
              </div>
            ))}
          </div>
          <p className="mt-12 text-slate-400 font-medium text-lg">
            * 개인의 진행 과정과 평가 결과에 따라 맞춤형으로 발급됩니다.
          </p>
        </div>
      </section>

      {/* 8. 차별성 섹션 & 9. 신뢰 요소 */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-10 tracking-tighter">왜 본 센터인가</h2>
            <div className="bg-white p-10 lg:p-16 rounded-[3rem] shadow-xl border border-slate-100 max-w-4xl mx-auto">
              <p className="text-xl lg:text-2xl font-bold text-slate-800 leading-relaxed mb-8">
                “재범방지 프로그램 전문 센터만의<br className="hidden sm:block"/> <span className="text-primary">분석 → 교정 → 계획</span>까지 이어지는 구조”
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center text-lg font-medium text-slate-600">
                <span className="bg-slate-50 px-6 py-3 rounded-full border border-slate-200">형식이 아닌 실제 변화 중심</span>
                <span className="bg-slate-50 px-6 py-3 rounded-full border border-slate-200">기록으로 남는 과정 설계</span>
                <span className="bg-slate-50 px-6 py-3 rounded-full border border-slate-200">전문 상담 기반 평가 진행</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20 items-center">
            {trustElements.map((item, idx) => (
              <div 
                key={idx} 
                className={`p-8 rounded-3xl text-center flex flex-col items-center gap-6 transition-all duration-300 ${
                  item.highlight 
                    ? 'bg-slate-900 text-white shadow-2xl scale-100 lg:scale-110 z-10 border border-slate-800 py-10 lg:py-12' 
                    : 'bg-white text-slate-900 shadow-sm border border-slate-100 hover:shadow-xl'
                }`}
              >
                <div className={`w-20 h-20 rounded-full flex items-center justify-center shrink-0 ${
                  item.highlight ? 'bg-primary/20 text-primary' : 'bg-primary/10 text-primary'
                }`}>
                  {item.icon}
                </div>
                <h3 className={`text-lg font-bold leading-snug ${item.highlight ? 'text-white' : 'text-slate-900'}`}>
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 14. FAQ (SEO 핵심) */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-4 tracking-tighter">자주 묻는 질문 (FAQ)</h2>
          </div>
          <div>
            {faqs.map((faq, idx) => (
              <FAQItem key={idx} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* 15. CTA (강력) */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-primary rounded-[3rem] p-12 lg:p-20 text-white text-center shadow-2xl shadow-primary/20">
            <h2 className="text-3xl lg:text-5xl font-black mb-6 tracking-tighter leading-tight">
              “지금 준비하지 않으면<br className="hidden sm:block"/> 결과는 바뀌지 않습니다”
            </h2>
            <p className="text-primary-foreground/90 text-xl lg:text-2xl mb-12 font-bold">
              “음주운전 상담, 혼자 준비하지 마십시오”
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:0507-1351-5463" 
                className="px-10 py-5 bg-white text-primary font-black rounded-full hover:bg-slate-50 transition-all shadow-lg"
              >
                전화 문의 (0507-1351-5463)
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
