import { motion } from 'framer-motion';
import { Layers, Zap, RefreshCw, CheckCircle, Shield, BookOpen, Activity, FileText, Search, CheckCircle2, HeartPulse, Users, Scale, Clock } from 'lucide-react';

export const Program = () => {
  const steps = [
    {
      step: "STEP 01",
      title: "심층 심리 진단 및 분석",
      desc: "표준화된 심리검사(MMPI-2, TCI 등)와 전문 상담을 통해 음주운전의 근본적인 원인과 재발 위험 요인을 정밀하게 분석합니다.",
      items: ["알코올 의존도 평가", "성격 및 기질 분석", "범죄 유발 요인 파악"]
    },
    {
      step: "STEP 02",
      title: "개별 맞춤형 프로그램 설계",
      desc: "진단 결과를 바탕으로 내담자의 상황에 최적화된 상담 및 교육 계획을 수립하며, 최적의 전문 양형자료 준비 로드맵을 제공합니다.",
      items: ["맞춤형 상담 회기 구성", "양형자료 준비 로드맵 수립", "가족 지지 체계 점검"]
    },
    {
      step: "STEP 03",
      title: "집중 인지행동 치료 및 교육",
      desc: "전문 상담사와 함께 음주 충동을 조절하고 대안적인 행동 양식을 습득하는 집중 치료 과정을 진행합니다.",
      items: ["인지 왜곡 교정 훈련", "고위험 상황 대처 연습", "준법 의식 강화 교육"]
    },
    {
      step: "STEP 04",
      title: "최종 평가 및 사후 관리",
      desc: "프로그램 이수 후 변화 정도를 평가하고, 지속적인 변화 유지를 위한 사후 관리 체계를 구축합니다.",
      items: ["최종 변화 보고서 발행", "정기 모니터링 상담", "지역사회 자원 연결"]
    }
  ];

  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="bg-slate-900 py-32 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=2000" alt="Background" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-primary font-bold tracking-[0.3em] text-xs uppercase mb-6 block"
          >
            Prevention Program
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl lg:text-8xl font-black mb-8 tracking-tighter italic"
          >
            재범방지 프로그램
          </motion.h1>
          <p className="text-slate-400 text-2xl max-w-2xl mx-auto font-bold leading-relaxed">
            단순한 교육을 넘어 실질적인 행동 변화를 이끌어내는 <br />
            체계적인 4단계 <span className="text-primary">재범 방지 솔루션</span>을 제공합니다.
          </p>
        </div>
      </section>

      {/* Program Structure */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">실제 변화 구조</h2>
            <p className="text-slate-600">우리의 프로그램은 다음의 3가지 핵심 축을 중심으로 작동합니다.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-6">
                <Zap size={40} />
              </div>
              <h3 className="text-xl font-bold mb-4">인지적 변화</h3>
              <p className="text-slate-500 text-sm leading-relaxed">음주운전을 정당화하던 잘못된 생각의 틀을 깨고, 객관적이고 윤리적인 사고 체계를 구축합니다.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center text-secondary mx-auto mb-6">
                <RefreshCw size={40} />
              </div>
              <h3 className="text-xl font-bold mb-4">정서적 회복</h3>
              <p className="text-slate-500 text-sm leading-relaxed">자신의 행동에 대한 진정한 성찰과 가족에 대한 책임을 통해 내면의 성숙을 도모합니다.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 mx-auto mb-6">
                <Layers size={40} />
              </div>
              <h3 className="text-xl font-bold mb-4">행동적 통제</h3>
              <p className="text-slate-500 text-sm leading-relaxed">음주 충동이 일어나는 순간을 포착하고, 이를 건강하게 해소하거나 회피하는 구체적 기술을 익힙니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-24 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col lg:flex-row gap-12 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="lg:w-1/2">
                  <div className="text-primary font-bold text-sm mb-4 uppercase tracking-widest">{step.step}</div>
                  <h3 className="text-4xl font-bold mb-6">{step.title}</h3>
                  <p className="text-slate-700 text-xl mb-8 leading-relaxed font-bold">{step.desc}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {step.items.map((item, iIdx) => (
                      <li key={iIdx} className="flex items-center gap-3 text-sm text-slate-700 bg-white p-4 rounded-xl border border-slate-200 font-bold">
                        <CheckCircle size={18} className="text-primary shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="lg:w-1/2 aspect-video rounded-3xl overflow-hidden shadow-xl">
                  <img 
                    src={`https://picsum.photos/seed/drunk-prevention-${idx}/800/450`} 
                    alt={step.title} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Content Summary */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-[3rem] p-12 lg:p-20 text-white text-center">
            <h2 className="text-3xl font-bold mb-12">주요 교육 내용 요약</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl font-bold text-primary mb-4">01</div>
                <h4 className="font-bold mb-2">법률 교육</h4>
                <p className="text-xs text-slate-400">음주운전 관련 법규 및 <br />처벌 규정의 이해</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-4">02</div>
                <h4 className="font-bold mb-2">인지 재구성</h4>
                <p className="text-xs text-slate-400">음주에 대한 왜곡된 신념 및 <br />합리화 기제 교정</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-4">03</div>
                <h4 className="font-bold mb-2">위기 관리</h4>
                <p className="text-xs text-slate-400">고위험 상황 식별 및 <br />대처 행동 리허설</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-4">04</div>
                <h4 className="font-bold mb-2">자기 조절</h4>
                <p className="text-xs text-slate-400">충동 조절 훈련 및 <br />건강한 스트레스 해소</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
