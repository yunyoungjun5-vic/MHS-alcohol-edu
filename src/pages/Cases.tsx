import { motion } from 'framer-motion';
import { TrendingUp, ShieldCheck, UserCheck, Scale } from 'lucide-react';

export const Cases = () => {
  const cases = [
    {
      type: "재범 방지",
      title: "3회 적발 후 실질적 변화를 이끌어낸 사례",
      desc: "상습적인 음주운전으로 실형 위기에 처했던 내담자가 6개월간의 집중 상담을 통해 알코올 의존성을 극복하고, 법원에 진정성 있는 변화를 입증하여 집행유예를 선고받은 사례입니다.",
      result: "알코올 의존도 70% 감소 / 재범 방지 교육 이수",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800"
    },
    {
      type: "양형 조력",
      title: "전문 심리 의견서로 선처를 이끌어낸 사례",
      desc: "단순 적발이었으나 직업적 특성상 면허 취소가 치명적이었던 내담자에게 전문적인 심리 진단과 재발 방지 계획을 담은 의견서를 지원하여 법적 관용을 이끌어낸 사례입니다.",
      result: "전문 심리 의견서 채택 / 벌금형 감경",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800"
    },
    {
      type: "가족 회복",
      title: "사건 이후 무너진 가족 관계를 회복한 사례",
      desc: "음주운전 사고로 인해 가족들의 신뢰를 잃고 고립되었던 내담자가 가족 동반 상담을 통해 갈등을 해소하고 지지 체계를 다시 구축하여 안정적인 단주 생활을 이어가고 있는 사례입니다.",
      result: "가족 신뢰 지수 대폭 상승 / 1년 이상 단주 유지",
      image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="pt-20">
      {/* Page Header */}
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
            Success Stories
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl lg:text-7xl font-black mb-8 tracking-tighter italic"
          >
            변화의 기록
          </motion.h1>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto font-medium leading-relaxed">
            수많은 내담자들이 저희와 함께 <br />
            음주운전의 굴레를 벗어나 새로운 삶을 시작했습니다.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-12">
            {cases.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`bg-white rounded-[2rem] overflow-hidden shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-300 group flex flex-col ${
                  idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'
                }`}
              >
                {/* 이미지 영역 (모바일: 상단, 데스크탑: 좌/우 교차) */}
                <div className="w-full lg:w-2/5 relative h-64 lg:h-auto overflow-hidden shrink-0">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent lg:bg-gradient-to-r ${
                    idx % 2 === 1 ? 'lg:from-slate-900/10 lg:to-transparent' : 'lg:from-transparent lg:to-slate-900/10'
                  }`} />
                  
                  <div className="absolute top-6 left-6">
                    <span className="px-5 py-2 bg-primary/90 backdrop-blur-md text-white text-xs font-bold rounded-full shadow-lg tracking-wider">
                      {item.type}
                    </span>
                  </div>
                </div>
                
                {/* 텍스트 영역 */}
                <div className="w-full lg:w-3/5 p-8 lg:p-12 flex flex-col justify-center">
                  <h3 className="text-2xl lg:text-3xl font-black text-slate-900 mb-6 leading-tight group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-slate-600 text-lg leading-relaxed font-medium mb-10">
                    {item.desc}
                  </p>
                  
                  <div className="mt-auto bg-slate-50 p-6 lg:p-8 rounded-2xl border border-slate-100 flex items-start gap-5">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-1">
                      <TrendingUp size={24} />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                        솔루션 및 결과
                      </div>
                      <p className="text-primary font-bold text-base lg:text-lg leading-relaxed">
                        {item.result}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tighter italic">우리의 변화 측정 방식</h2>
            <p className="text-slate-600 font-medium">주관적인 느낌이 아닌 객관적 도구를 통한 검증</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <ShieldCheck />, title: "표준화 검사", desc: "MMPI, TCI 등 공신력 있는 검사 도구 활용" },
              { icon: <UserCheck />, title: "전문가 관찰", desc: "상담 과정 중 임상심리사의 다각도 평가" },
              { icon: <Scale />, title: "법적 기준 준수", desc: "재범 위험성 평가 및 양형 기준 참고" },
              { icon: <TrendingUp />, title: "장기 추적", desc: "상담 종료 후 정기적 사후 모니터링" }
            ].map((item, idx) => (
              <div key={idx} className="text-center p-6">
                <div className="w-16 h-16 bg-bg-light rounded-2xl flex items-center justify-center text-primary mx-auto mb-6">
                  {item.icon}
                </div>
                <h4 className="font-bold mb-3 text-slate-900">{item.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-16 bg-slate-50 border-y border-slate-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-sm text-slate-400 leading-relaxed font-medium">
            * 위 사례들은 개인정보 보호를 위해 특정 정보를 재구성하였으며, 모든 상담 내용은 철저히 비밀이 보장됩니다. <br />
            * 변화의 정도는 개인의 의지와 상황에 따라 차이가 있을 수 있습니다.
          </p>
        </div>
      </section>
    </div>
  );
};
