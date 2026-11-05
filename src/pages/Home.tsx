import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Users,
  ShieldCheck,
  HeartPulse,
  Phone,
  Clock,
  FileText,
  Scale,
} from "lucide-react";
import { Link } from "react-router-dom";
import { HomePopup } from "../components/HomePopup";

export const Home = () => {
  const [collabImgError, setCollabImgError] = useState(false);

  return (
    <div className="pt-[104px] lg:pt-[140px]">
      {/* Landing Page Notice Popup */}
      <HomePopup />

      {/* Hero Section - Premium Medical Style */}
      <section className="relative min-h-[70vh] lg:h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=2000"
            alt="Driving Background"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 py-20 lg:py-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-[1px] bg-primary"></div>
              <span className="text-primary font-bold tracking-[0.3em] text-xs uppercase">
                DUI Recidivism Prevention Center
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-8xl font-black text-slate-900 leading-[1.05] mb-8 tracking-tighter">
              비난보다는 변화,
              <br />
              <span className="text-primary">다시 시작하는 용기</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 mb-12 leading-relaxed font-medium">
              한 번의 실수가 평생의 짐이 되지 않도록,{" "}
              <br className="hidden md:block" />
              전문적인 심리 상담과 체계적인 교육으로 당신의 일상을 지킵니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <a
                href="tel:0507-1351-5463"
                className="px-6 py-4 sm:px-10 sm:py-5 bg-primary text-white rounded-full font-bold hover:bg-secondary transition-all shadow-2xl shadow-primary/30 transform hover:-translate-y-1 flex items-center justify-center gap-3"
              >
                <Phone size={20} /> 전화문의 0507-1351-5463
              </a>
            </div>
          </motion.div>
        </div>

        {/* Quick Menu Overlay - Medical Style */}
        <div className="absolute bottom-0 left-0 w-full z-30 hidden lg:block">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-3 bg-white shadow-[0_-10px_40px_rgba(0,0,0,0.05)] rounded-t-[2.5rem] overflow-hidden border-x border-t border-slate-100">
              {[
                {
                  icon: <ShieldCheck size={24} />,
                  title: "음주운전 재범방지 프로그램",
                  desc: "심리상담 및 교육",
                  path: "/program",
                },
                {
                  icon: <FileText size={24} />,
                  title: (
                    <span className="text-primary font-black scale-110 inline-block">
                      양형자료 안내
                    </span>
                  ),
                  desc: "전문 의견서 발행",
                  path: "/sentencing",
                },
                {
                  icon: <Scale size={24} />,
                  title: "로펌, 변호사 협업상담",
                  desc: "법률 · 심리 통합 지원",
                  path: "/services/legal-collaboration",
                },
              ].map((item, idx) => (
                <Link
                  key={idx}
                  to={item.path}
                  className="p-8 flex items-center gap-5 hover:bg-slate-50 transition-colors border-r last:border-r-0 border-slate-100 group cursor-pointer"
                >
                  <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 leading-none mb-2">
                      {item.title}
                    </h5>
                    <p className="text-xs text-slate-400 font-medium">
                      {item.desc}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Floating Info Card */}
        <div className="hidden lg:block absolute bottom-12 right-12 z-20">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="bg-white/90 backdrop-blur-md p-8 rounded-[2rem] shadow-2xl border border-white/20 w-80"
          >
            <h4 className="text-primary font-bold text-sm mb-4 flex items-center gap-2">
              <Clock size={16} /> 센터 운영 시간 안내
            </h4>
            <div className="space-y-3 text-sm font-medium text-slate-600">
              <div className="flex justify-between">
                <span>평 일</span>
                <span className="text-slate-900">09:00 - 20:00</span>
              </div>
              <div className="flex justify-between">
                <span>토요일</span>
                <span className="text-slate-900">09:00 - 20:00</span>
              </div>
              <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-400">
                * 일요일 휴무 (예약제 운영)
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Specialty Section - Medical Grid Style */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block">
              Our Specialties
            </span>
            <h2 className="text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight">
              전문 상담 분야
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto font-bold text-lg">
              음주운전 재범 방지를 위한 다각도 접근과 실질적인{" "}
              <span className="text-primary font-black text-2xl">
                '법률 지원 양형자료'
              </span>
              를 제공합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-100 border border-slate-100 rounded-[2.5rem] overflow-hidden shadow-2xl">
            {[
              {
                icon: <Users size={40} />,
                title: "재범방지 교육",
                desc: "체계적인 인지행동 치료 프로그램",
                image:
                  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
                path: "/services/education",
              },
              {
                icon: <FileText size={40} />,
                title: "전문 양형자료",
                desc: "법원 제출용 심리 의견서 발행",
                image:
                  "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800",
                path: "/sentencing",
              },
              {
                icon: <HeartPulse size={40} />,
                title: "심리 진단 검사",
                desc: "객관적인 상태 파악 및 데이터화",
                image:
                  "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800",
                path: "/services",
              },
              {
                icon: <ShieldCheck size={40} />,
                title: "음주 습관 교정",
                desc: "심리적 의존성 분석 및 행동 수정",
                image:
                  "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800",
                path: "/services/treatment",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ backgroundColor: "#f8fafc" }}
                className="bg-white p-12 flex flex-col items-center text-center transition-colors group relative overflow-hidden"
              >
                {/* Background Image with Blur */}
                <div className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity duration-500">
                  <img
                    src={item.image}
                    alt=""
                    className="w-full h-full object-cover scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="relative z-10 flex flex-col items-center w-full">
                  <div className="w-20 h-20 bg-white/90 backdrop-blur-sm shadow-sm rounded-2xl flex items-center justify-center text-slate-600 group-hover:text-primary group-hover:scale-110 transition-all duration-500 mb-6">
                    {item.icon}
                  </div>
                  <div className="bg-white/60 group-hover:bg-white/80 backdrop-blur-md w-full py-6 px-2 sm:px-4 rounded-2xl shadow-sm border border-white/50 transition-all duration-500 flex flex-col items-center">
                    <h3
                      className={`mb-3 break-keep ${item.title.includes("양형자료") ? "text-2xl font-extrabold text-black" : "text-xl font-bold text-slate-900"}`}
                    >
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed font-medium break-keep">
                      {item.desc}
                    </p>
                  </div>

                  {/* 자세히 보기 버튼 (텍스트 박스 바깥) */}
                  <div className="h-12 lg:h-0 lg:group-hover:h-12 transition-all duration-500 overflow-hidden flex items-end justify-center w-full">
                    <Link
                      to={item.path}
                      className="mt-4 text-sm font-bold text-primary opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-500 flex items-center gap-1 bg-white px-5 py-2.5 rounded-full shadow-md transform translate-y-0 lg:translate-y-4 lg:group-hover:translate-y-0"
                    >
                      자세히 보기 <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Approach Section */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 1. Problem/Necessity/Solution */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100">
              <div className="text-primary font-black text-sm mb-4 uppercase tracking-widest">
                Problem
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-6 tracking-tighter italic">
                왜 반복될까요?
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed font-bold">
                음주운전은 단순한 실수가 아닌, 습관화된 사고 패턴과 심리적
                의존성에서 비롯됩니다. 처벌에 대한 두려움만으로는 내면의 충동을
                완전히 제어하기 어렵습니다.
              </p>
            </div>
            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100">
              <div className="text-secondary font-black text-sm mb-4 uppercase tracking-widest">
                Necessity
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-6 tracking-tighter italic">
                상담의 필요성
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed font-bold">
                자신의 행동을 정당화하는 '인지적 왜곡'을 바로잡아야 합니다.
                전문가와의 상담은 사건의 근본 원인을 직면하고 재발의 고리를 끊는
                유일한 방법입니다.
              </p>
            </div>
            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100">
              <div className="text-slate-900 font-black text-sm mb-4 uppercase tracking-widest">
                Solution
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-6 tracking-tighter italic">
                해결의 방향
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed font-bold">
                단순 교육을 넘어 실질적인 '행동 제어 기술'을 습득합니다. 고위험
                상황을 식별하고 건강하게 대처하는 능력을 길러 지속 가능한 단주
                생활을 지원합니다.
              </p>
            </div>
          </div>

          {/* 2. Program Intro & 3. Trust Factors */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-5xl font-black text-slate-900 mb-10 tracking-tighter italic">
                검증된 <span className="text-primary">전문성</span>과 <br />
                실질적인 <span className="text-primary">변화</span>의 기록
              </h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">
                      17년 이상의 임상 데이터
                    </h4>
                    <p className="text-sm text-slate-500 font-medium">
                      수만 건의 사례를 통해 검증된 음주운전 재범 방지 특화
                      프로토콜을 보유하고 있습니다.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                    <Users size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">
                      심리학 박사 및 전문가 그룹
                    </h4>
                    <p className="text-sm text-slate-500 font-medium">
                      단순 상담원이 아닌, 해당 분야의 권위 있는 박사급 인력과
                      임상심리 전문가가 직접 개입합니다.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                    <HeartPulse size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">
                      실제 재범률 감소 입증
                    </h4>
                    <p className="text-sm text-slate-500 font-medium">
                      프로그램 이수 후 사후 모니터링 결과, 내담자들의 재범률이
                      유의미하게 감소했음을 수치로 증명합니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-slate-700 rounded-[3rem] p-10 lg:p-16 text-white">
              <h3 className="text-2xl font-bold mb-8 italic">Core Programs</h3>
              <div className="space-y-6">
                {[
                  {
                    title: "인지행동 치료 (CBT)",
                    desc: "음주 충동 조절 및 사고 오류 수정",
                  },
                  {
                    title: "동기강화 상담 (MET)",
                    desc: "단주 의지 고취 및 변화 동기 부여",
                  },
                  {
                    title: "가족 지지 체계 강화",
                    desc: "가족 관계 회복을 통한 환경적 통제",
                  },
                  {
                    title: "법률 기반 양형 컨설팅",
                    desc: "최신 판례 분석을 통한 전략적 자료 구성",
                  },
                ].map((p, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors cursor-pointer group"
                  >
                    <div>
                      <h5 className="font-bold mb-1 group-hover:text-primary transition-colors">
                        {p.title.includes("양형") ? (
                          <span className="text-white font-black text-lg underline decoration-white/30 underline-offset-4 italic">
                            '법률 기반 양형 컨설팅'
                          </span>
                        ) : (
                          p.title
                        )}
                      </h5>
                      <p className="text-xs text-slate-400">{p.desc}</p>
                    </div>
                    <ArrowRight
                      size={16}
                      className="text-primary opacity-0 group-hover:opacity-100 transition-all"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 국내 최초 로펌, 변호사 협업상담 시스템 Section */}
      <section className="py-24 lg:py-28 bg-[#0b3d2e] text-white break-keep">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-[#7ce2b3] font-bold tracking-[0.2em] text-xs uppercase mb-3 block">
              Legal &amp; Counseling Collaboration
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-5 tracking-tight leading-tight">
              국내 최초 로펌, 변호사 협업상담 시스템
            </h2>
            <p className="text-white/80 text-base sm:text-lg leading-relaxed font-medium">
              변호사는 법정을, 센터는 변화를 준비합니다. 다수의 연계 로펌·변호사와
              함께 경찰 조사부터 검찰·재판 단계까지 법률 조력과 재범방지 심리상담,
              양형자료 준비가 한 흐름 안에서 이루어집니다.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-5">
              {!collabImgError ? (
                <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#0f4a38]">
                  <img
                    src="/assets/lawyer-collaboration.png"
                    alt="상담 전문가와 협력 변호사의 협업 상담 시스템"
                    referrerPolicy="no-referrer"
                    onError={() => setCollabImgError(true)}
                    className="w-full h-auto block object-cover"
                  />
                </div>
              ) : (
                <div className="aspect-[4/3] rounded-3xl bg-[#0f4a38] border border-white/15 flex flex-col items-center justify-center p-8 text-center">
                  <Scale className="w-12 h-12 text-[#7ce2b3] mb-4" />
                  <p className="text-lg font-bold text-white">
                    상담 전문가 · 협력 변호사 협업 시스템
                  </p>
                </div>
              )}
            </div>

            <div className="lg:col-span-7 space-y-4">
              {[
                {
                  num: "01",
                  label: "양방향 연계 구조",
                  desc: "센터 상담 중 법률 조력이 필요하면 협력 로펌·변호사로, 변호사 상담 중 재범방지 교육·심리평가가 필요하면 센터로 연계됩니다.",
                },
                {
                  num: "02",
                  label: "사건 단계별 맞춤형 양형자료",
                  desc: "단속 직후 경찰 조사부터 검찰 처분 전, 기소·공판 단계까지 제출 시점에 맞춰 심리평가 소견서와 이수 확인서를 체계적으로 준비합니다.",
                },
                {
                  num: "03",
                  label: "투명한 운영과 서면 동의 원칙",
                  desc: "변호사 연계에 따른 수수료를 일절 주고받지 않으며, 모든 상담 기록과 자료 공유는 내담자 본인이 서면 동의한 범위 내에서만 진행됩니다.",
                },
              ].map((item) => (
                <div
                  key={item.num}
                  className="bg-[#0f4a38] border border-white/10 rounded-2xl p-6 flex items-start gap-4"
                >
                  <span className="text-base font-extrabold text-[#7ce2b3] tabular-nums shrink-0 mt-0.5">
                    {item.num}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1.5">
                      {item.label}
                    </h3>
                    <p className="text-sm sm:text-[15px] text-white/75 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}

              <div className="pt-4 flex flex-wrap items-center gap-3.5">
                <Link
                  to="/services/legal-collaboration"
                  className="px-7 py-4 bg-white text-[#0b3d2e] rounded-full font-extrabold text-sm sm:text-base hover:bg-slate-100 transition-colors inline-flex items-center gap-2 whitespace-nowrap shrink-0"
                >
                  협업상담 시스템 자세히 보기 <ArrowRight size={18} />
                </Link>
                <a
                  href="tel:0507-1351-5463"
                  className="px-7 py-4 bg-transparent border border-white/30 text-white rounded-full font-bold text-sm sm:text-base hover:bg-white/10 transition-colors inline-flex items-center gap-2 whitespace-nowrap shrink-0"
                >
                  <Phone size={17} /> 전화문의 0507-1351-5463
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cooperation, Partnership, & Lecture Institution Section (협력 · 협약 · 출강 기관) */}
      <section className="py-24 bg-white border-y border-slate-100/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">
              협력 · 협약 · 출강 기관
            </h2>
            <p className="text-slate-500 max-w-4xl mx-auto font-medium text-base sm:text-lg leading-relaxed break-keep">
              MHS 심리상담센터 산하 한국음주운전재범방지교육상담센터는 27년 이상의
              임상 경험과 200여 개 공공기관 · 법률기관 · 교육기관 · 기업과의
              협력 실적을 기반으로 신뢰할 수 있는 전문 상담과 재범방지 교육을
              제공하고 있습니다.
            </p>
          </div>

          {/* 12 Logos Layout: 4 Columns x 3 Rows on Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto items-center">
            {[
              {
                name: "대검찰청",
                logo: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775208774/%ED%99%94%EB%A9%B4_%EC%BA%A1%EC%B2%98_2026-04-03_165954_iuzr0z.png",
                url: "https://www.spo.go.kr",
              },
              {
                name: "법무법인 로하스",
                logo: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775047909/KakaoTalk_20210501_115331134_1_ppiuf2.jpg",
                url: "https://lohas-law.com/",
              },
              {
                name: "법무법인 소울",
                logo: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775047795/%EC%86%8C%EC%9A%B8_%EB%A1%9C%EA%B3%A0_s6wvju.png",
                url: "https://www.soullaw.co.kr/",
              },
              {
                name: "대구가정법원",
                logo: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775044656/logo_gibhqm.png",
                url: "https://dgfamily.scourt.go.kr/",
              },
              {
                name: "경북북부교도소",
                logo: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775029521/ChatGPT_Image_2026%EB%85%84_4%EC%9B%94_1%EC%9D%BC_%EC%98%A4%ED%9B%84_04_45_05_m125fo.png",
                url: "https://www.corrections.go.kr/corrections/index.do",
              },
              {
                name: "구미경찰서",
                logo: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775049813/ChatGPT_Image_2026%EB%85%84_4%EC%9B%94_1%EC%9D%BC_%EC%98%A4%ED%9B%84_10_21_22_y3zmxw.png",
                url: "https://www.gbpolice.go.kr/gm/",
              },
              {
                name: "김천경찰서",
                logo: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775035271/76761_46193_5823_jbroqw.jpg",
                url: "https://www.gbpolice.go.kr/gc/",
              },
              {
                name: "성주경찰서",
                logo: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775371843/ChatGPT_Image_2026%EB%85%84_4%EC%9B%94_1%EC%9D%BC_%EC%98%A4%ED%9B%84_10_30_46_yi5w0l_paiqye.png",
                url: "https://www.gbpolice.go.kr/sj/",
              },
              {
                name: "경상북도 소방본부",
                logo: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775050128/ChatGPT_Image_2026%EB%85%84_4%EC%9B%94_1%EC%9D%BC_%EC%98%A4%ED%9B%84_10_28_38_tbz3pv.png",
                url: "https://gb119.go.kr",
              },
              {
                name: "삼성전자",
                logo: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775208762/%EC%82%BC%EC%84%B1%EC%A0%84%EC%9E%90%EB%A1%9C%EA%B3%A0_taigm8.jpg",
                url: "https://www.samsung.com/",
              },
              {
                name: "순천향대학교 구미병원",
                logo: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775029928/%EC%88%9C%EC%B2%9C%ED%96%A5%EB%8C%80%ED%95%99%EA%B5%90_%EA%B5%AC%EB%AF%B8%EB%B3%91%EC%9B%90_%EA%B5%AD%EB%AC%B8_%EC%84%B8%EB%A1%9C_j8brvd.jpg",
                url: "https://www.schmc.ac.kr/gumi/",
              },
              {
                name: "경북자립지원전담기관",
                logo: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775108360/ChatGPT_Image_2026%EB%85%84_4%EC%9B%94_1%EC%9D%BC_%EC%98%A4%ED%9B%84_03_52_15_qncqwz.png",
                url: "https://kbjarip.or.kr",
              },
            ].map((item, idx) => (
              <motion.a
                key={idx}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -6, scale: 1.02 }}
                className="bg-white rounded-2xl p-2.5 sm:p-4 aspect-[1.8] flex items-center justify-center border border-slate-100 shadow-sm hover:shadow-md transition-all cursor-pointer overflow-hidden group"
              >
                <img
                  src={item.logo}
                  alt={item.name}
                  className="max-h-[92%] max-w-[94%] w-auto object-contain transition-transform duration-300 group-hover:scale-103"
                  referrerPolicy="no-referrer"
                />
              </motion.a>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/about/partnerships"
              className="inline-flex items-center gap-1.5 text-primary text-sm font-bold hover:gap-2.5 transition-all cursor-pointer"
            >
              협력기관 전체 보기 <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Representative Director Broadcasts & Activities (대표원장 방송 출연 · 대외활동) */}
      <section className="py-24 bg-slate-50/60 border-b border-slate-100/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">
              대표원장 방송 출연 · 대외활동
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto font-medium text-base sm:text-lg">
              방송, 강연, 인터뷰, 교육 현장에서의 실제 활동 일부를 소개합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                category: "방송 출연",
                title:
                  "KBS 동행 441회 후반부에 437회 ‘윤정이의 겨울 붕어빵’ 후기 방송분 1",
                desc: "KBS 동행 441회 후기 방송분 출연 1",
                image:
                  "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775307821/F677_5_z8bltz.png",
              },
              {
                category: "방송 출연",
                title:
                  "KBS 동행 441회 후반부에 437회 ‘윤정이의 겨울 붕어빵’ 후기 방송분 3",
                desc: "KBS 동행 441회 후기 방송분 출연 3",
                image:
                  "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775307789/KakaoTalk_20241207_200825917_01_kczsra.jpg",
              },
              {
                category: "라디오 및 인터뷰",
                title: "TBN 교통방송 라디오 심리상담 코너",
                desc: "현대인의 충동 조절과 심리 분석",
                image:
                  "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775294702/20190607_094719_fx6e6a.jpg",
              },
              {
                category: "방송 출연",
                title:
                  "KBS1 '사랑의 가족' 방영분 3030회 '집착하는 아내와 수상한 남편'3",
                desc: "KBS1 '사랑의 가족' 3030회 출연 3",
                image:
                  "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775293098/%EC%82%AC%EB%9E%91%EC%9D%98_%EA%B0%80%EC%A1%B1_%EC%B5%9C%EB%A9%B4_vzfbjx.png",
              },
              {
                category: "라디오 및 인터뷰",
                title: "라디오세상 울산만사 [ 2022년 05월 24일]",
                desc: "『연애할 때 애착 유형이 미치는 영향』 이라는 주제로 방송하였습니다.",
                image:
                  "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775292908/%EC%97%B0%EC%95%A0%ED%95%A0_%EB%95%8C_%EC%95%A0%EC%B0%A9_%EC%9C%A0%ED%98%95%EC%9D%B4_%EB%AF%B8%EC%B9%98%EB%8A%94_%EC%98%81%ED%96%A5_ss3jmj.jpg",
              },
              {
                category: "강연 및 특강",
                title: "문경소방대원 상담 및 강의",
                desc: "문경소방대원 상담 및 강의",
                image:
                  "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775294966/1_cmgsnr.jpg",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl overflow-hidden shadow-[0_4px_25px_-5px_rgba(0,0,0,0.04)] border border-slate-100 flex flex-col group hover:shadow-lg transition-all duration-300"
              >
                <div className="aspect-[16/10] w-full overflow-hidden relative bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-xs sm:text-sm font-bold text-primary mb-1.5 block tracking-wider">
                    {item.category}
                  </span>
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mb-2 leading-snug group-hover:text-primary transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-slate-400 mt-auto leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/about/media"
              className="inline-flex items-center gap-1.5 text-primary text-sm font-bold hover:gap-2.5 transition-all cursor-pointer"
            >
              방송 · 대외활동 전체 보기 <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Strategic Approach Continued: Legal Expertise & CTA */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Legal Expertise Highlight */}
          <div className="p-12 bg-primary rounded-[3rem] border-4 border-white/20 flex flex-col md:flex-row items-center gap-10 shadow-2xl shadow-primary/40 transform hover:scale-[1.02] transition-all">
            <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center text-primary shrink-0 shadow-lg">
              <Scale size={48} />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h4 className="text-3xl font-black text-white mb-4 tracking-tighter italic">
                타 센터와 차별화된{" "}
                <span className="text-white underline decoration-white/50 underline-offset-4">
                  '법률적 전문성'
                </span>
              </h4>
              <p className="text-xl text-white/90 font-bold leading-relaxed">
                단순한 심리 상담을 넘어, 대법원 양형 기준과 최신 판례를 철저히
                분석하여 <br className="hidden lg:block" />
                재판부가 실질적으로 인정하는{" "}
                <span className="text-white font-black text-2xl underline decoration-white/50 underline-offset-8 italic">
                  '법률 기반 양형자료'
                </span>{" "}
                를 완벽하게 구성해 드립니다.
              </p>
            </div>
            <Link
              to="/sentencing"
              className="px-10 py-6 bg-white text-primary rounded-2xl font-black text-lg hover:bg-slate-100 transition-colors shrink-0 shadow-xl"
            >
              양형자료 전문 상담
            </Link>
          </div>

          {/* 4. CTA */}
          <div className="mt-24 text-center">
            <a
              href="tel:0507-1351-5463"
              className="inline-flex items-center gap-4 px-12 py-6 bg-white text-slate-900 border border-slate-200 rounded-full font-black text-lg hover:bg-slate-50 transition-all shadow-xl hover:-translate-y-1 group"
            >
              비난 없는 첫 걸음, 지금 전화문의하세요
              <ArrowRight
                size={20}
                className="text-primary group-hover:translate-x-1 transition-transform"
              />
            </a>
            <p className="mt-6 text-sm text-slate-400 font-medium italic">
              모든 상담은 철저히 비밀이 보장되며, 익명 상담이 가능합니다.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Section - Large Image Style */}
      <section className="py-32 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=1000"
                  alt="Counseling"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-primary p-12 rounded-[2.5rem] text-white shadow-2xl hidden md:block">
                <div className="text-5xl font-black mb-2">20,000+</div>
                <div className="text-sm font-bold opacity-80 uppercase tracking-widest">
                  Successful Cases
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-bold tracking-widest text-xs uppercase mb-6 block">
                Our Philosophy
              </span>
              <h2 className="text-4xl lg:text-6xl font-black text-slate-900 mb-10 leading-tight tracking-tighter">
                비난보다는 공감으로 <br />
                <span className="text-primary">새로운 시작</span>을 돕습니다.
              </h2>
              <div className="space-y-8 text-lg text-slate-600 font-medium leading-relaxed">
                <p>
                  음주운전은 한 순간의 잘못된 선택일 수 있지만, 그 결과는 평생의
                  삶을 뒤흔들 수 있습니다. 우리는 당신을 비난하기보다, 왜 그런
                  선택을 했는지 함께 고민하고 다시는 같은 실수를 반복하지 않도록
                  돕습니다.
                </p>
                <p>
                  전문적인 심리학적 접근과 법률적 지식을 결합하여, 당신이 다시
                  사회의 건강한 구성원으로 당당히 설 수 있도록 최선의 길을
                  제시하겠습니다.
                </p>
              </div>
              <div className="mt-12 pt-12 border-t border-slate-200 grid grid-cols-2 gap-8">
                <div>
                  <h5 className="text-xl font-black text-slate-900 mb-2">
                    전문적인 양형 지원
                  </h5>
                  <p className="text-sm text-slate-500">
                    '법률적 지원을 위한 전문 의견서'
                  </p>
                </div>
                <div>
                  <h5 className="font-bold text-slate-900 mb-2">
                    철저한 비밀 유지
                  </h5>
                  <p className="text-sm text-slate-500">
                    익명 상담 및 보안 시스템
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section - Horizontal Flow */}
      <section className="py-32 bg-slate-700 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block">
              Our Process
            </span>
            <h2 className="text-4xl lg:text-5xl font-black mb-6 tracking-tight">
              회복과 변화의 4단계
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto font-medium">
              체계적인 단계를 통해 당신의 일상과 법률적 권익을 보호합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative mt-12">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-[40%] left-0 w-full h-px bg-white/10 -translate-y-1/2 z-0"></div>

            {[
              {
                step: "01",
                title: "심층 상담",
                desc: "음주 습관 및 심리적 원인 정밀 분석",
                image:
                  "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=600",
              },
              {
                step: "02",
                title: "집중 교육",
                desc: "재범 방지를 위한 인지행동 변화 프로그램",
                image:
                  "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1774346160/%ED%99%94%EB%A9%B4_%EC%BA%A1%EC%B2%98_2026-03-10_223409_on0tcr.png",
              },
              {
                step: "03",
                title: "양형자료 준비",
                desc: "법원 제출용 전문 의견서 및 양형자료 구성",
                image:
                  "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1774346157/judge-gavel-close-up-blue-lighting-2_zk0n8a.jpg",
              },
              {
                step: "04",
                title: "사후 관리",
                desc: "지속적인 모니터링 및 일상 복귀 지원",
                image:
                  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative z-10 group flex flex-col items-center text-center"
              >
                {/* 박스 안의 이미지 영역 */}
                <div className="w-full aspect-square bg-white/5 backdrop-blur-sm p-3 rounded-[2.5rem] border border-white/10 hover:bg-white/10 transition-all mb-8 relative shrink-0">
                  <div className="w-full h-full rounded-[2rem] overflow-hidden relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  {/* 스텝 뱃지 */}
                  <div className="absolute -top-4 -left-4 w-14 h-14 bg-primary rounded-2xl flex items-center justify-center text-xl font-black italic shadow-lg text-white z-20">
                    {item.step}
                  </div>
                </div>

                {/* 박스 바깥 아래쪽 텍스트 영역 */}
                <h4 className="text-2xl font-bold mb-4 text-white group-hover:text-primary transition-colors">
                  {item.title}
                </h4>
                <p className="text-base text-slate-400 leading-relaxed font-medium">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Column Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">
                전문가 칼럼
              </h2>
              <p className="text-slate-500 font-medium">
                대구 음주운전 재범 방지 및 심리 치유를 위한 전문가 기고를
                확인하세요.
              </p>
            </div>
            <Link
              to="/library/column"
              className="text-sm font-bold text-slate-400 hover:text-primary transition-colors flex items-center gap-2"
            >
              전체보기 <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                date: "2026.06.01",
                title: "음주운전 처벌 강화에 따른 양형자료 준비 가이드",
                category: "양형 & 법률",
                image:
                  "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800",
              },
              {
                date: "2026.05.24",
                title: "알코올 의존도 자가 진단 및 심리적 대처법",
                category: "심리상담 & 예방",
                image:
                  "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1793766347/assdf_vmdtbp.png",
              },
              {
                date: "2026.05.18",
                title:
                  "재범 방지 교육 이수가 사법 처리 결과에 미치는 실질적 영향",
                category: "양형 & 법률",
                image:
                  "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1793766519/sfgsdfg_a7zmgd.png",
              },
            ].map((news, idx) => (
              <Link
                key={idx}
                to="/library/column"
                className="group cursor-pointer block"
              >
                <div className="aspect-video bg-slate-100 rounded-2xl mb-6 overflow-hidden relative">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold text-primary uppercase tracking-wider">
                    {news.category}
                  </div>
                </div>
                <span className="text-xs font-bold text-slate-400 mb-3 block">
                  {news.date}
                </span>
                <h4 className="text-lg font-bold text-slate-900 group-hover:text-primary transition-colors leading-snug break-keep">
                  {news.title}
                </h4>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Consultation Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-[3rem] p-12 lg:p-20 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-1/2"></div>
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl lg:text-5xl font-black mb-8 leading-tight tracking-tighter">
                  혼자 고민하지 마세요. <br />
                  <span className="text-white underline decoration-white/50 underline-offset-4">
                    '지금 바로 상담'
                  </span>{" "}
                  하세요.
                </h2>
                <p className="text-lg text-white/80 mb-10 font-medium leading-relaxed">
                  음주운전 사건은 초기 대응과 진지한 반성의 자세가 중요합니다.{" "}
                  <br />
                  전문가와 함께 당신의 상황에 맞는 최선의 솔루션을 찾으세요.
                </p>
                <div className="flex flex-wrap gap-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-bold opacity-60 uppercase">
                        Call Us
                      </p>
                      <p className="text-xl font-black">0507-1351-5463</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                      <Clock size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-bold opacity-60 uppercase">
                        Working Hours
                      </p>
                      <p className="text-xl font-black">09:00 - 20:00</p>
                      <p className="text-[10px] font-bold opacity-60 mt-1">
                        * 일요일 휴무 (예약제)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl text-slate-900">
                <h3 className="text-xl font-black mb-3 text-slate-900 flex items-center gap-2">
                  <ShieldCheck className="text-primary" size={24} />
                  철저한 비밀보장 전화 상담
                </h3>
                <p className="text-sm text-slate-500 mb-8 leading-relaxed break-keep">
                  상담 내역과 개인정보는 전적으로 비밀이 유지되며 안심하고 상담
                  서비스를 받아보실 수 있습니다.
                </p>
                <div className="space-y-4">
                  <a
                    href="tel:0507-1351-5463"
                    className="w-full py-5 bg-primary text-white rounded-2xl font-black hover:bg-secondary transition-all shadow-xl shadow-primary/20 text-center flex items-center justify-center gap-3"
                  >
                    <Phone size={20} />
                    전화문의 (0507-1351-5463)
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
