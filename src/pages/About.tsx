import { motion } from "framer-motion";
import {
  Award,
  BookOpen,
  Heart,
  Target,
  Shield,
  Users,
  Clock,
} from "lucide-react";

export const About = () => {
  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="bg-slate-900 py-20 lg:py-32 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000"
            alt="Background"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-primary font-bold tracking-[0.3em] text-xs uppercase mb-6 block"
          >
            About Our Center
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl lg:text-8xl font-black mb-8 tracking-tighter italic"
          >
            센터 소개
          </motion.h1>
          <p className="text-slate-400 text-xl lg:text-2xl max-w-2xl mx-auto font-bold leading-relaxed">
            한국음주운전재범방지교육상담센터는 <br />
            비난보다는 변화를, 처벌보다는 회복을 지향합니다.
          </p>
        </div>
      </section>

      {/* Director's Message */}
      <section className="py-16 lg:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-[3/4] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-slate-50">
                  <img
                    src="https://res.cloudinary.com/dxjz9ksjg/image/upload/v1776971442/dec5ff46-df87-4bb0-8b0d-d90f1cd06d5d_cxd8uj.png"
                    alt="Director"
                    className="w-full h-full object-cover object-top"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 lg:-bottom-6 lg:-left-6 bg-white p-6 lg:p-8 rounded-3xl shadow-xl border border-slate-100">
                  <h4 className="text-lg lg:text-xl font-bold text-slate-900">
                    윤영준{" "}
                    <span className="text-xs lg:text-sm font-medium text-slate-500 ml-2">
                      대표원장 / 중독, 범죄 전문 심리상담가
                    </span>
                  </h4>
                </div>
              </motion.div>
            </div>
            <div className="lg:col-span-7 mt-8 lg:mt-0">
              <span className="text-primary font-bold tracking-widest text-xs uppercase mb-6 block">
                Director's Message
              </span>
              <h2 className="text-4xl lg:text-6xl font-black text-slate-900 mb-8 lg:mb-10 leading-tight tracking-tighter italic">
                "한 번의 실수가 <br />
                <span className="text-primary underline decoration-primary/20 underline-offset-8">
                  인생의 끝이 되지 않도록
                </span>
                "
              </h2>
              <div className="space-y-6 lg:space-y-8 text-lg lg:text-xl text-slate-700 font-bold leading-relaxed italic">
                <p>
                  안녕하십니까. 한국음주운전재범방지교육상담센터 대표원장
                  윤영준입니다. 음주운전은 분명 사회적으로 용납되기 어려운
                  잘못입니다. 하지만 우리는 그 잘못 뒤에 숨겨진 개인의 고통과
                  심리적 취약성에도 주목합니다.
                </p>
                <p>
                  저희 센터는 단순히 처벌을 피하기 위한 수단이 아니라, 진정으로
                  자신의 삶을 돌아보고 변화할 수 있는 기회를 제공하고자 합니다.
                  전문적인 임상 경험과{" "}
                  <span className="text-primary font-black underline decoration-primary/20 underline-offset-4 italic">
                    법률적 조력
                  </span>
                  을 바탕으로 당신의 변화를 끝까지 책임지겠습니다.
                </p>
              </div>
              <div className="mt-10 lg:mt-12">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Signature_of_John_Hancock.svg/1200px-Signature_of_John_Hancock.svg.png"
                  alt="Signature"
                  className="h-12 lg:h-16 opacity-30 grayscale"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 lg:mb-8">
                재범 방지를 향한{" "}
                <span className="text-primary">전문적인 동행</span>
              </h2>
              <div className="space-y-4 lg:space-y-6 text-slate-700 text-lg lg:text-xl font-bold leading-relaxed">
                <p>
                  본 센터는 음주운전 재범 방지를 위한 과학적이고 체계적인 심리
                  치료 서비스를 제공하기 위해 설립되었습니다. 우리는 단순히
                  교육을 이수하는 곳이 아닌, 한 개인의 내면을 깊이 들여다보고
                  근본적인 행동 변화를 이끌어내는 전문 기관입니다.
                </p>
                <p>
                  다년간 쌓아온 임상 경험과 최신 심리학 이론을 결합하여, 각
                  대상자의 특성에 맞는 개별화된 프로그램을 운영하고 있습니다.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 lg:gap-6 mt-8 lg:mt-12">
                <div className="p-4 lg:p-6 bg-bg-light rounded-2xl">
                  <div className="text-2xl lg:text-3xl font-bold text-primary mb-2">
                    17 years +
                  </div>
                  <div className="text-xs lg:text-sm text-slate-500">
                    전문 임상 경력
                  </div>
                </div>
                <div className="p-4 lg:p-6 bg-bg-light rounded-2xl">
                  <div className="text-2xl lg:text-3xl font-bold text-primary mb-2">
                    20,000+
                  </div>
                  <div className="text-xs lg:text-sm text-slate-500">
                    누적 상담 케이스
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl mt-8 lg:mt-0">
              <img
                src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=1000"
                alt="Office Interior"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 lg:py-48 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 lg:mb-28 border-b border-slate-200 pb-8 lg:pb-10">
            <div>
              <span className="text-primary font-bold tracking-[0.2em] text-sm uppercase mb-4 lg:mb-6 block">
                Our Philosophy
              </span>
              <h2 className="text-4xl lg:text-7xl font-black text-slate-900 tracking-tighter italic">
                상담 철학
              </h2>
            </div>
            <div className="mt-4 md:mt-0">
              <p className="text-slate-500 text-lg lg:text-2xl font-medium italic">
                우리가 지키는 세 가지 약속
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
            {[
              {
                icon: <Heart strokeWidth={1} size={40} />,
                num: "01",
                title: "비난 없는 공감",
                desc: "편견 없는 시선으로 한 인간의 고통과 변화 가능성을 존중합니다.",
                image:
                  "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800",
              },
              {
                icon: <Target strokeWidth={1} size={40} />,
                num: "02",
                title: "실질적 변화",
                desc: "단순 교육을 넘어 실질적인 행동 변화와 재범 방지를 지향합니다.",
                image:
                  "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=800",
              },
              {
                icon: <BookOpen strokeWidth={1} size={40} />,
                num: "03",
                title: "법률적 조력",
                desc: "전문적인 양형자료 의견서를 통해 법률적 권익 보호를 돕습니다.",
                image:
                  "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: idx * 0.15,
                  duration: 0.8,
                  ease: "easeOut",
                }}
                className="relative group overflow-hidden bg-white flex flex-col p-8 lg:p-14 min-h-[360px] lg:min-h-[520px] rounded-3xl transition-all duration-500 hover:-translate-y-2 active:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] active:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] cursor-pointer border border-slate-100"
              >
                {/* Background Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-60 contrast-110 brightness-100 group-hover:scale-105 group-hover:opacity-80 group-hover:brightness-105 group-active:scale-105 group-active:opacity-80 group-active:brightness-105 transition-all duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/70 to-white group-hover:from-transparent group-hover:via-white/50 group-hover:to-white/95 group-active:from-transparent group-active:via-white/50 group-active:to-white/95 transition-colors duration-500" />

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* Top: Icon & Number */}
                  <div className="flex items-center justify-between mb-auto pb-6 lg:pb-8 border-b border-slate-100 group-hover:border-slate-200 group-active:border-slate-200 transition-colors duration-500">
                    <span className="text-base lg:text-lg font-medium text-slate-300 tracking-widest">
                      {item.num}
                    </span>
                    <div className="text-primary opacity-80 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-500">
                      {item.icon}
                    </div>
                  </div>

                  {/* Bottom: Title & Desc */}
                  <div className="pt-8 lg:pt-12">
                    <h3 className="text-2xl lg:text-4xl font-black text-slate-900 mb-4 lg:mb-6 leading-tight tracking-tight break-keep">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-base lg:text-lg leading-[2.2] font-medium break-keep group-hover:text-slate-800 group-active:text-slate-800 transition-colors duration-500">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 lg:py-32 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 hidden lg:block w-1/3 h-full bg-primary/10 skew-x-12 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 lg:mb-6 block">
                Vision & Mission
              </span>
              <h2 className="text-3xl lg:text-6xl font-black mb-8 lg:mb-10 leading-tight tracking-tighter italic">
                우리의 <span className="text-primary">사명</span>은 <br />
                당신의 일상을 지키는 것입니다.
              </h2>
              <p className="text-slate-400 text-base lg:text-lg font-medium leading-relaxed mb-10 lg:mb-12">
                단순히 법적 처벌을 피하는 기술을 가르치는 것이 아니라, 내담자가
                자신의 삶을 사랑하고 소중히 여길 수 있도록 돕는 것이 저희 센터의
                궁극적인 목표입니다.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-8">
                <div className="p-6 lg:p-8 bg-white/5 rounded-3xl border border-white/10">
                  <h4 className="text-lg lg:text-xl font-bold mb-3 lg:mb-4 text-primary">
                    Vision
                  </h4>
                  <p className="text-xs lg:text-sm text-slate-400 leading-relaxed font-medium">
                    최고의 전문성을 갖춘 <br />
                    음주운전 재범방지 교육, 상담 기관
                  </p>
                </div>
                <div className="p-6 lg:p-8 bg-white/5 rounded-3xl border border-white/10">
                  <h4 className="text-lg lg:text-xl font-bold mb-3 lg:mb-4 text-primary">
                    Mission
                  </h4>
                  <p className="text-xs lg:text-sm text-slate-400 leading-relaxed font-medium">
                    과학적 심리 진단과 <br />
                    체계적 교육을 통한 사회적 가치 실현
                  </p>
                </div>
              </div>
            </div>
            <div className="relative mt-8 lg:mt-0">
              <div className="aspect-square rounded-[2rem] lg:rounded-[3rem] overflow-hidden border-4 lg:border-8 border-white/5 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1000"
                  alt="Team Meeting"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-cyan-700 via-slate-700 to-slate-900 rounded-[2rem] lg:rounded-[3rem] p-8 lg:p-24 text-white shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
              <div>
                <h2 className="text-3xl lg:text-6xl font-black mb-8 lg:mb-12 tracking-tight italic text-white drop-shadow-lg">
                  Professional Expertise
                </h2>
                <ul className="space-y-6 lg:space-y-10">
                  {[
                    "각 분야 전문 인력이 함께하는 통합 전문 상담 시스템",
                    "음주운전 재범 방지 특화 프로토콜 적용",
                    <span className="text-white font-black">
                      법원 및 검찰 제출용 전문{" "}
                      <span className="text-primary font-black underline decoration-primary/20 underline-offset-4 italic">
                        양형자료
                      </span>{" "}
                      발행
                    </span>,
                    "알코올 의존성 정밀 진단 및 대처법 제시",
                  ].map((text, idx) => (
                    <li key={idx} className="flex items-start gap-4 lg:gap-6">
                      <Award
                        className="text-primary shrink-0 mt-1 lg:w-8 lg:h-8"
                        size={24}
                      />
                      <span className="text-lg lg:text-2xl text-slate-200 font-semibold leading-relaxed break-keep">
                        {text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-4 lg:gap-8 mt-8 lg:mt-0">
                {[
                  {
                    id: "01",
                    title: "중독심리전문가",
                    image:
                      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=600",
                  },
                  {
                    id: "02",
                    title: "기능의학 의사",
                    image:
                      "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1780904319/ChatGPT_Image_2026%EB%85%84_6%EC%9B%94_8%EC%9D%BC_%EC%98%A4%ED%9B%84_04_38_01_stfbbx.png",
                  },
                  {
                    id: "03",
                    title: "범죄심리 전문상담사",
                    image:
                      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=600",
                  },
                  {
                    id: "04",
                    title: "음주운전 사건 전문변호사",
                    image:
                      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=600",
                  },
                ].map((cert, idx) => (
                  <div
                    key={idx}
                    className="relative aspect-square rounded-[1.5rem] lg:rounded-[2rem] overflow-hidden group border border-white/10 shadow-xl hover:shadow-2xl transition-shadow duration-500"
                  >
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="absolute inset-0 w-full h-full object-cover contrast-125 brightness-110 group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent group-hover:from-slate-900/50 group-hover:via-slate-900/10 transition-all duration-500" />
                    <div className="relative h-full flex flex-col items-center justify-center p-4 lg:p-8 text-center z-10">
                      <span className="text-primary font-black text-3xl lg:text-5xl mb-2 lg:mb-3 italic drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                        {cert.id}
                      </span>
                      <p className="text-base lg:text-2xl font-extrabold tracking-tight text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] leading-snug break-keep">
                        {cert.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Team Section */}
      <section className="py-16 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-20">
            <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block">
              Our Experts
            </span>
            <h2 className="text-3xl lg:text-5xl font-black text-slate-900 mb-4 lg:mb-6 tracking-tight">
              전문 의료진 및 상담진
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto font-medium text-sm lg:text-base">
              각 분야별 최고의 전문가들이 당신의 변화를 위해 함께합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                name: "윤영준",
                role: "대표원장 / 중독, 범죄 전문 심리상담가",
                spec: "음주운전 심리 및 재범방지 전문가",
                img: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1776971442/dec5ff46-df87-4bb0-8b0d-d90f1cd06d5d_cxd8uj.png",
              },
              {
                name: "소윤주",
                role: "부원장 / 기능의학 전문가",
                spec: "알코올 의존 및 행동 수정 전문가",
                img: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1774347139/KakaoTalk_20240521_123825759_gslvpg.jpg",
              },
              {
                name: "허선무",
                role: "변호사 / 음주운전 사건 전문 변호사",
                spec: "전문적인 법률 자문 및 대응 전략 지원",
                img: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1776971435/3e1b3bd6-c219-4e70-b259-e535e502df92_elrt12.png",
              },
            ].map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group"
              >
                <div className="aspect-[3/4] rounded-[2.5rem] overflow-hidden mb-8 shadow-xl group-hover:shadow-2xl transition-all duration-500">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="text-center">
                  <h4 className="text-2xl font-black text-slate-900 mb-2">
                    {member.name}
                  </h4>
                  <p className="text-primary font-bold text-sm mb-4">
                    {member.role}
                  </p>
                  <p className="text-slate-500 text-sm font-medium">
                    {member.spec}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
