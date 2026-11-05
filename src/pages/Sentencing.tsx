import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, ShieldCheck, Scale, CheckCircle2, AlertCircle, X, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';

// --- Data Definitions ---

const coreMaterials = [
  {
    id: 1,
    title: "심리상담 확인서",
    subtitle: "상담사실 확인서",
    summary: "재범방지 노력의 시작을 객관적으로 증명하는 자료",
    desc: "정기적인 심리상담 참여 사실을 공식적으로 확인하는 자료로, 단순한 방문이 아닌 변화를 위한 첫 단계를 입증합니다. 음주운전 상담을 통해 진행된 정기적인 심리상담 참여 사실을 객관적으로 확인하는 자료입니다.",
    components: [
      "내담자 기본 정보(최소 범위)",
      "상담 기간 및 총 상담 횟수",
      "상담 형태 (대면 / 비대면)",
      "실제 출석 및 참여 여부",
      "발급일 및 기관 정보"
    ],
    meaning: "변화 의지가 ‘말이 아닌 행동’으로 시작되었음을 보여주는 자료",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "재범방지 교육·프로그램 이수증",
    subtitle: "절주교육 / 인지행동 / 재발방지 프로그램 등",
    summary: "지속적인 개선 노력과 참여 과정을 보여주는 자료",
    desc: "단발성이 아닌, 체계적인 교육과 훈련을 통해 재범 방지를 위한 행동 변화가 이루어지고 있음을 입증합니다. 음주운전 교육 이수증은 필수적인 양형자료 중 하나입니다.",
    components: [
      "프로그램 명칭 및 목적",
      "교육 커리큘럼 요약",
      "총 교육 시간 및 회기 수",
      "이수 기준 및 평가 방식",
      "출석률 및 참여도",
      "이수 완료일"
    ],
    meaning: "“지속적인 개선 과정에 있다”는 점을 명확히 보여주는 자료",
    image: "https://images.unsplash.com/photo-1523240715630-9918c1c46e7d?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "심리상담 소견서",
    subtitle: "",
    summary: "법원에 전달되는 핵심 평가 및 변화 가능성 분석",
    desc: "전문 상담사가 직접 작성하는 자료로, 현재 상태와 변화 가능성을 종합적으로 평가하여 전달합니다. 음주운전 심리상담의 결과를 법률적 언어로 풀어냅니다.",
    components: [
      "상담 및 평가 근거 (면담, 관찰, 기록)",
      "현재 심리 상태 요약",
      "반성 수준 및 인식 변화",
      "위험요인 및 보호요인 분석",
      "재발 가능성 및 감소 가능성",
      "향후 치료 및 교육 권고"
    ],
    meaning: "단순 사실이 아닌 “변화 가능성”을 설명하는 핵심 자료",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4,
    title: "심리평가 보고서",
    subtitle: "심리검사 기반",
    summary: "검사 기반으로 문제 구조를 분석한 객관적 자료",
    desc: "알코올 사용, 충동성, 감정 상태 등을 객관적인 검사 도구를 통해 체계적으로 분석합니다.",
    components: [
      "사용된 심리검사 종류",
      "검사 실시일 및 방식",
      "결과 요약 및 해석 근거",
      "임상적 판단 및 결론"
    ],
    meaning: "감정이 아닌 데이터 기반 평가로 신뢰도 확보",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 5,
    title: "알코올 사용 선별검사",
    subtitle: "",
    summary: "고위험 음주 여부와 변화 과정을 확인하는 자료",
    desc: "현재 음주 상태를 평가하고, 변화 과정에서의 개선 여부를 추적하는 자료입니다.",
    components: [
      "검사 도구 및 실시일",
      "음주 빈도 및 섭취량 평가",
      "위험도 산출 결과",
      "개선 추이 분석"
    ],
    meaning: "음주 문제의 현실적 수준을 명확히 보여주는 기초 자료",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 6,
    title: "재범 위험성 평가",
    subtitle: "",
    summary: "재범 가능성과 통제 가능성을 분석하는 핵심 자료",
    desc: "개인의 행동 패턴과 환경 요인을 종합 분석하여 재범 가능성과 관리 전략을 제시합니다.",
    components: [
      "위험요인 (과거력, 상황 요인 등)",
      "보호요인 (가족, 직장, 치료 참여 등)",
      "재범 위험 수준 (단계별 평가)",
      "관리 및 개입 방향"
    ],
    meaning: "“위험을 통제하고 있다”는 점을 설득력 있게 전달",
    image: "https://images.unsplash.com/photo-1454165833767-027ffea9e41b?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 7,
    title: "재발방지 계획서",
    subtitle: "",
    summary: "재범 방지를 위한 구체적 행동 계획을 담은 자료",
    desc: "재범 방지를 위한 실제 행동 계획을 명확히 정리한 자료입니다. 재범방지 프로그램 전문 센터의 노하우가 담긴 실천 계획입니다.",
    components: [
      "음주 및 행동 트리거 분석",
      "상황별 대처 전략",
      "운전 대체 수단 (대리운전, 대중교통 등)",
      "가족 및 주변 관리 체계",
      "위기 상황 대응 계획"
    ],
    meaning: "단순 반성이 아닌 “실제 실행 가능한 변화 계획”",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800"
  }
];

const additionalMaterials = [
  {
    id: 8,
    title: "절주 계획서",
    subtitle: "",
    summary: "음주 통제를 위한 실질적 실행 전략 계획",
    desc: "개인의 음주 패턴을 분석하고, 실질적으로 음주를 통제하겠다는 구체적 실행 계획입니다.",
    components: [
      "개인 음주 패턴 분석",
      "음주 제한 기준 설정",
      "금주 또는 절주 목표",
      "회피 전략 및 환경 관리",
      "대체 행동 계획"
    ],
    meaning: "충동이 아닌 ‘관리 가능한 상태’로 전환",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 9,
    title: "준법 서약서",
    subtitle: "",
    summary: "재발 방지에 대한 책임과 의지 선언",
    desc: "법 준수 의지를 명시하고, 재범 방지에 대한 명확한 의지를 선언하는 자료입니다.",
    components: [
      "법 준수 의지 명시",
      "재범 방지에 대한 책임 인식",
      "사회 구성원으로서의 역할 자각",
      "향후 행동 기준 선언"
    ],
    meaning: "책임 회피가 아닌 책임 수용의 태도",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 10,
    title: "반성문 코칭",
    subtitle: "",
    summary: "진정성 있는 반성을 구조적으로 완성하는 과정",
    desc: "단순한 사과문이 아닌, 사건의 인식 → 감정 → 책임 → 변화 방향까지 논리적으로 구성되도록 지도합니다. 음주운전 반성문 / 탄원서 작성의 핵심을 짚어드립니다.",
    components: [
      "사건 인식 정리",
      "피해 및 영향 인식",
      "책임 수용 표현",
      "변화 의지 및 행동 계획"
    ],
    meaning: "형식이 아닌 “내용 있는 반성”",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 11,
    title: "가족 탄원서 코칭",
    subtitle: "",
    summary: "가족의 지지와 변화 환경을 전달하는 자료",
    desc: "가족의 입장에서 작성되는 탄원서가 설득력을 가질 수 있도록 구조를 잡아드립니다.",
    components: [
      "현재 변화 과정 설명",
      "가족의 관찰 내용",
      "재발 방지를 위한 지원 환경",
      "향후 관리 계획"
    ],
    meaning: "개인이 아닌 “환경까지 변화하고 있음”을 입증",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=800"
  }
];

const faqs = [
  {
    q: "음주운전 양형자료는 어떤 것이 필요한가요?",
    a: "사건의 경위와 개인의 상황에 따라 다르지만, 기본적으로 심리상담 확인서, 재범방지 교육 이수증, 반성문 등이 필요합니다. 음주운전 재범방지 센터에서는 개인별 맞춤형 양형자료 목록을 컨설팅해 드립니다."
  },
  {
    q: "음주운전 심리상담은 실제로 도움이 되나요?",
    a: "네, 매우 큰 도움이 됩니다. 단순한 처벌 감경을 넘어, 음주운전의 근본적인 원인인 심리적 의존성과 인지적 왜곡을 파악하고 교정하여 실질적인 재범 방지 효과를 거둘 수 있습니다."
  },
  {
    q: "재범방지 교육 이수증은 어떻게 발급되나요?",
    a: "센터에서 규정된 교육 커리큘럼(절주교육, 인지행동치료 등)을 성실히 이수하고, 출석률 및 참여도 기준을 충족한 내담자에게 공식적으로 발급되며, 법원 제출용으로 사용 가능합니다."
  },
  {
    q: "반성문이나 탄원서는 어떻게 작성해야 하나요?",
    a: "감정에만 호소하는 글이 아닌, 사건에 대한 객관적 인식, 책임 수용, 그리고 구체적인 재발 방지 계획이 논리적으로 담겨야 합니다. 본 센터에서는 진정성 있는 글이 되도록 1:1 코칭을 제공합니다."
  }
];

// --- Components ---

const MaterialCard: React.FC<{ item: any, onClick: (item: any) => void }> = ({ item, onClick }) => (
  <motion.div 
    whileHover={{ scale: 1.02 }}
    className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 cursor-pointer group flex flex-col h-full"
    onClick={() => onClick(item)}
  >
    <div className="relative h-48 overflow-hidden">
      <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      <div className="absolute bottom-4 left-4 right-4">
        <h3 className="text-xl font-bold text-white leading-tight">{item.title}</h3>
        {item.subtitle && <p className="text-xs text-white/80 mt-1">{item.subtitle}</p>}
      </div>
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <p className="text-sm font-bold text-primary mb-4 line-clamp-2">"{item.summary}"</p>
      <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between text-slate-500 group-hover:text-primary transition-colors">
        <span className="text-sm font-bold">자세히 보기</span>
        <ArrowRight size={16} />
      </div>
    </div>
  </motion.div>
);

const Modal: React.FC<{ isOpen: boolean, onClose: () => void, data: any }> = ({ isOpen, onClose, data }) => {
  if (!isOpen || !data) return null;
  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        <motion.div 
          initial={{opacity:0}} 
          animate={{opacity:1}} 
          exit={{opacity:0}} 
          className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
          onClick={onClose} 
        />
        <motion.div 
          initial={{opacity:0, scale:0.95, y:20}} 
          animate={{opacity:1, scale:1, y:0}} 
          exit={{opacity:0, scale:0.95, y:20}} 
          className="relative bg-white rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col"
        >
          <div className="sticky top-0 bg-white/90 backdrop-blur-md border-b border-slate-100 p-6 flex justify-between items-center z-10">
            <div>
              <h3 className="text-2xl font-black text-slate-900">{data.title}</h3>
              {data.subtitle && <p className="text-sm text-slate-500 font-bold mt-1">{data.subtitle}</p>}
            </div>
            <button onClick={onClose} className="p-2 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors">
              <X size={20} className="text-slate-600" />
            </button>
          </div>
          <div className="p-6 sm:p-8 space-y-8">
            <div className="bg-primary/5 border border-primary/10 p-6 rounded-2xl">
              <p className="text-lg font-bold text-primary leading-relaxed">"{data.summary}"</p>
            </div>
            
            <div>
              <h4 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2"><FileText size={18} className="text-primary"/> 상세 설명</h4>
              <p className="text-slate-600 leading-relaxed font-medium">{data.desc}</p>
            </div>

            <div>
              <h4 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2"><CheckCircle2 size={18} className="text-primary"/> 구성 요소</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {data.components.map((comp: string, i: number) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-600 font-medium bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                    {comp}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-900 p-6 rounded-2xl text-white">
              <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">이 자료가 중요한 이유</h4>
              <p className="text-lg font-bold italic">👉 {data.meaning}</p>
            </div>
          </div>
          <div className="sticky bottom-0 bg-white border-t border-slate-100 p-6 flex flex-col sm:flex-row gap-3">
            <a href="tel:0507-1351-5463" className="w-full py-4 bg-primary text-white text-center font-bold rounded-full hover:bg-primary/90 transition-colors shadow-lg">
              전화 문의 (0507-1351-5463)
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

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

export const Sentencing = () => {
  const [selectedMaterial, setSelectedMaterial] = useState<any>(null);

  return (
    <div className="pt-20">
      {/* Page Header (SEO Optimized) */}
      <section className="bg-slate-900 py-32 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=2000" alt="Background" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-primary font-bold tracking-[0.3em] text-xs uppercase mb-6 block"
          >
            Sentencing Materials
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-6xl font-black mb-8 tracking-tighter italic leading-tight"
          >
            음주운전 양형자료 준비, <br className="hidden md:block" />
            <span className="text-primary underline decoration-primary/20 underline-offset-8">제대로 해야 결과가 달라집니다</span>
          </motion.h1>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto font-medium leading-relaxed">
            음주운전 양형자료를 준비하는 많은 분들이 무엇을 어떻게 준비해야 하는지 몰라 어려움을 겪습니다.<br className="hidden md:block"/>
            양형자료는 단순한 서류가 아니라 재범방지 노력과 변화 가능성을 객관적으로 보여주는 핵심 자료입니다.<br className="hidden md:block"/>
            본 센터에서는 심리상담, 재범방지 교육, 행동 교정 프로그램을 통해 법원에 제출 가능한 체계적인 양형자료를 준비할 수 있도록 지원합니다.
          </p>
        </div>
      </section>

      {/* Importance Section (SEO Optimized) */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-12 bg-slate-900 rounded-[3rem] text-white shadow-2xl border-4 border-primary/20"
            >
              <h2 className="text-4xl lg:text-5xl font-black mb-8 leading-tight tracking-tighter italic">
                왜 음주운전 <br />
                <span className="text-primary underline decoration-primary/30 underline-offset-8">양형자료</span>가 중요한가
              </h2>
              <div className="space-y-8 text-xl font-bold leading-relaxed text-slate-300">
                <p>
                  음주운전 사건에서 중요한 것은 단순한 반성이 아니라 <span className="text-white">'재범 가능성을 얼마나 낮추었는지'</span>입니다. 
                  이를 입증하는 가장 중요한 방법이 바로 심리상담과 재범방지 교육을 기반으로 한 양형자료입니다.
                </p>
                <p>
                  심리상담센터의 <span className="text-primary font-black italic">전문 의견서</span>는 내담자의 심리적 상태, 재범 위험성 평가 결과, 
                  그리고 구체적인 재발 방지 노력을 전문가의 시각에서 증명하는 
                  가장 강력한 <span className="text-primary font-black italic">양형자료</span>가 됩니다.
                </p>
              </div>
            </motion.div>
            <div className="bg-slate-50 p-10 lg:p-16 rounded-[3rem] border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                <AlertCircle className="text-primary" /> 핵심 양형 요소
              </h3>
              <ul className="space-y-6">
                {[
                  { title: "진지한 반성", desc: "자신의 잘못을 깊이 뉘우치고 있음을 입증" },
                  { title: "재범 위험성 부재", desc: "심리적/환경적 요인 개선을 통한 재발 방지 증명" },
                  { title: "치료 및 교육 이수", desc: "전문 기관을 통한 지속적인 노력의 기록" },
                  { title: "사회적 유대 관계", desc: "가족 및 주변인의 지지와 선도 의지" }
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-1">
                      <CheckCircle2 size={14} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{item.title}</h4>
                      <p className="text-sm text-slate-500 font-medium">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Materials List */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 tracking-tighter italic">지원 가능한 <span className="text-primary underline decoration-primary/20 underline-offset-8">핵심 양형자료</span></h2>
            <p className="text-slate-500 text-lg font-bold">
              아래 양형자료는 실제 음주운전 사건에서 <br className="sm:hidden"/>
              재범 방지 노력과 변화 과정을 설명하는 데 사용되는 핵심 자료입니다.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreMaterials.map((item) => (
              <MaterialCard key={item.id} item={item} onClick={setSelectedMaterial} />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Materials List */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-4 tracking-tighter italic">추가 양형자료 <span className="text-slate-500 text-xl font-bold block sm:inline mt-2 sm:mt-0">(설득력 강화 요소)</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalMaterials.map((item) => (
              <MaterialCard key={item.id} item={item} onClick={setSelectedMaterial} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-4 tracking-tighter italic">자주 묻는 질문 (FAQ)</h2>
          </div>
          <div>
            {faqs.map((faq, idx) => (
              <FAQItem key={idx} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-primary rounded-[3rem] p-12 lg:p-20 text-white text-center shadow-2xl shadow-primary/20">
            <h2 className="text-3xl lg:text-5xl font-black mb-8 tracking-tighter italic leading-tight">
              "양형자료는 서류가 아니라, 변화의 증거입니다."<br/>
              <span className="text-white/80 text-2xl lg:text-4xl mt-4 block">"지금의 선택이 결과를 바꿉니다."</span>
            </h2>
            <p className="text-primary-foreground/90 text-lg mb-12 font-bold leading-relaxed">
              음주운전 양형자료, 혼자 준비하지 마십시오.<br/>
              전문 상담을 통해 정확하게 준비하는 것이 중요합니다.
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

      {/* Modal Popup */}
      <Modal isOpen={!!selectedMaterial} onClose={() => setSelectedMaterial(null)} data={selectedMaterial} />
    </div>
  );
};
