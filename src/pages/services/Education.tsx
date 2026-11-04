import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { BookOpen, Scale, ShieldCheck, Navigation, CheckCircle2, ChevronRight } from 'lucide-react';

const educationData = [
  {
    title: "음주운전 재범방지 교육",
    subtitle: "체계화된 커리큘럼",
    icon: <BookOpen size={24} />,
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800",
    contents: [
      "1강: 음주운전의 심리적 원인", 
      "2강: 음주와 뇌과학", 
      "3강: 재범 심리 구조", 
      "4강: 재발 방지 전략", 
      "5강: 새로운 삶의 계획"
    ]
  },
  {
    title: "준법의식 교육",
    subtitle: "시민 윤리와 규범 내재화",
    icon: <Scale size={24} />,
    image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=800",
    contents: ["법의 의미", "책임의식", "시민의식", "피해자 관점 이해"]
  },
  {
    title: "자기통제 훈련",
    subtitle: "행동 교정과 조절 능력 강화",
    icon: <ShieldCheck size={24} />,
    image: "https://images.unsplash.com/photo-1552508744-1696d4464960?auto=format&fit=crop&q=80&w=800",
    contents: ["충동 통제", "유혹 관리", "거절 훈련", "위험 상황 대처"]
  }
];

export const Education = () => {
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
              Prevention Education
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl lg:text-7xl font-black mb-8 tracking-tighter italic leading-tight"
            >
              재범방지 교육
            </motion.h1>
            <p className="text-slate-300 text-xl lg:text-3xl font-bold leading-relaxed break-keep">
              단순한 지식 전달을 넘어, 자기통제 능력을 강화하고 <br className="hidden sm:block" />
              준법의식을 재정립하는 실질적인 행동 교정 훈련입니다.
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
              교육 프로그램 구성
            </motion.h2>
            <div className="flex flex-col sm:flex-row gap-4 sm:items-end justify-between">
              <p className="text-slate-500 text-lg font-medium max-w-2xl bg-slate-50 p-6 rounded-2xl border border-slate-100">
                실효성 있는 행동 교정 훈련을 통해 법의식과 자기통제력을 기릅니다.
              </p>
              <span className="text-primary font-bold tracking-widest text-sm uppercase px-4 py-2 bg-primary/10 rounded-full inline-block">
                Prevention Education
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
            {educationData.map((item, idx) => {
              let colSpan = "lg:col-span-2";
              
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
