import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Brain, ActivitySquare, AlertTriangle, Fingerprint, Heart, Navigation, CheckCircle2, ChevronRight } from 'lucide-react';

const counselingData = [
  {
    title: "음주운전은 왜 반복되는가",
    subtitle: "음주운전의 심리학적 원인",
    icon: <Brain size={24} />,
    image: "https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?auto=format&fit=crop&q=80&w=800",
    contents: ["음주운전의 심리학", "충동조절 문제", "스트레스 해소형 음주", "분노형 음주", "우울형 음주", "습관형 음주", "자기파괴형 음주", "사례 중심 설명"]
  },
  {
    title: "음주운전자 심리분석",
    subtitle: "체계적인 심리 진단",
    icon: <ActivitySquare size={24} />,
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800",
    contents: ["음주 습관 검사", "충동성 검사", "스트레스 검사", "우울 검사", "불안 검사", "결과 예시 제공"]
  },
  {
    title: "재범 위험도 진단",
    subtitle: "객관적 위험성 평가",
    icon: <AlertTriangle size={24} />,
    image: "https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?auto=format&fit=crop&q=80&w=800",
    contents: ["나는 재범 가능성이 높은가?", "자가체크", "위험군 유형 분석"]
  },
  {
    title: "음주운전 재범심리",
    subtitle: "초기 개입과 심층 분석",
    icon: <Fingerprint size={24} />,
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800",
    contents: ["초범 유형", "재범 유형", "상습 음주운전 유형", "고위험군 특징 파악"]
  },
  {
    title: "가족상담",
    subtitle: "관계 회복과 지지 망 구축",
    icon: <Heart size={24} />,
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=800",
    contents: ["배우자 갈등 조율", "가족 불신 회복", "자녀 문제 상담", "가족 회복 프로그램"]
  }
];

export const Counseling = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return (
    <div className="pt-20 bg-slate-50/50">
      {/* Page Header */}
      <section className="bg-slate-900 py-32 lg:py-40 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=2000" alt="Background" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-primary font-bold tracking-[0.3em] text-xs uppercase mb-6 inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full border border-primary/20"
            >
              <Navigation size={14} />
              Counseling Service
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl lg:text-7xl font-black mb-8 tracking-tighter italic leading-tight"
            >
              음주운전 심리상담
            </motion.h1>
            <p className="text-slate-300 text-xl lg:text-3xl font-bold leading-relaxed break-keep">
              음주운전에 이르게 된 근본적인 심리 상태를 분석하고, <br className="hidden sm:block" />
              재범의 고리를 끊어내기 위한 체계적인 심리 치유 과정을 제공합니다.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation Shortcuts */}
      <div className="border-b border-slate-200 bg-white sticky top-[88px] z-40 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2">
            {[
              { path: "/services/counseling", name: "음주운전 심리상담" },
              { path: "/services/education", name: "재범방지 교육" },
              { path: "/services/treatment", name: "음주문제 치료 프로그램" },
              { path: "/services/legal-collaboration", name: "로펌 , 변호사 협업 상담 시스템" }
            ].map(item => (
              <Link 
                key={item.path}
                to={item.path}
                className={`py-5 px-6 font-bold transition-colors ${
                  pathname === item.path 
                    ? 'text-primary border-b-2 border-primary' 
                    : 'text-slate-500 hover:text-primary border-b-2 border-transparent hover:border-primary hover:bg-slate-50/50'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <section className="py-24 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight"
            >
              상담 프로그램 구성
            </motion.h2>
            <div className="flex flex-col sm:flex-row gap-4 sm:items-end justify-between">
              <p className="text-slate-500 text-lg font-medium max-w-2xl bg-slate-50 p-6 rounded-2xl border border-slate-100">
                개인별 맞춤형 심리 검사와 심층 상담을 통해 음주운전의 근본 원인을 파악하고 치유 방안을 모색합니다.
              </p>
              <span className="text-primary font-bold tracking-widest text-sm uppercase px-4 py-2 bg-primary/10 rounded-full inline-block">
                Psychological Counseling
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
            {counselingData.map((item, idx) => {
              let colSpan = "lg:col-span-2";
              if (counselingData.length === 5) {
                if (idx < 2) colSpan = "lg:col-span-3";
                else colSpan = "lg:col-span-2";
              }

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`bg-white rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-xl transition-all group border border-slate-100 flex flex-col ${colSpan}`}
                >
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
                    
                    <div className="absolute top-5 left-5">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-white shadow-sm border border-white/30">
                        {item.icon}
                      </div>
                    </div>
                    
                    <div className="absolute bottom-5 left-5 right-5">
                      <span className="text-white/80 font-bold block mb-1 text-xs">{item.subtitle}</span>
                      <h3 className="text-xl lg:text-2xl font-black text-white leading-tight">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                  
                  <div className="p-6 md:p-8 flex-1 bg-white">
                    <ul className="space-y-3.5">
                      {item.contents.map((content: string, i: number) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 size={18} className="text-primary mt-0.5 shrink-0" />
                          <span className="text-slate-700 font-medium leading-normal text-[15px]">{content}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 mt-auto flex items-center justify-between text-sm group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <span className="font-bold text-slate-500 group-hover:text-white/90">프로그램 진행 시 적용</span>
                    <ChevronRight size={18} className="text-slate-400 group-hover:text-white" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      
      <div className="h-20 bg-slate-50/50" />
    </div>
  );
};
