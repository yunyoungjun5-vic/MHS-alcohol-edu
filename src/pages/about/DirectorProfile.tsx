import React from "react";
import { motion } from "framer-motion";
import { Award, Briefcase, GraduationCap, Users } from "lucide-react";

export const DirectorProfile = () => {
  return (
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen break-keep">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl lg:max-w-none"
        >
          <h1 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            원장 프로필
          </h1>
          <p className="text-xl text-slate-600 font-medium leading-relaxed break-keep lg:whitespace-nowrap">
            한국음주운전재범방지교육상담센터는 단순한 처벌이 아닌 행동 변화와 재범 방지를 목표로 합니다.
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          {/* Left Column (Profile Info) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="w-full lg:w-1/3 shrink-0"
          >
            <div className="bg-white rounded-[2rem] overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-100 hover:shadow-2xl transition-shadow duration-300">
              <div className="aspect-[3/4] relative">
                <img
                  src="https://res.cloudinary.com/dxjz9ksjg/image/upload/v1776971442/dec5ff46-df87-4bb0-8b0d-d90f1cd06d5d_cxd8uj.png"
                  alt="윤영준 원장"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h2 className="text-3xl font-black text-slate-900 mb-2">
                  윤영준{" "}
                  <span className="text-lg text-primary font-bold">원장</span>
                </h2>
                <div className="h-px w-12 bg-primary my-4"></div>
                <ul className="space-y-2 text-slate-600 font-medium">
                  <li>음주운전 재범방지 심리상담 전문가</li>
                  <li>상담학 박사 · 범죄심리상담 전문가</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 bg-white p-8 rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-100 hidden lg:block">
              <p className="text-slate-600 leading-relaxed font-medium">
                윤영준 원장은 27 년 이상 심리상담과 행동교정 분야에서 활동하며 음주운전, 중독, 충동조절, 법원 의뢰 사례 등을 상담해 왔으며, 재범 위험성 감소와 건강한 생활습관 형성을 위한 전문 프로그램을 운영하고 있습니다.
              </p>
            </div>
          </motion.div>

          {/* Right Column (Details) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="w-full lg:w-2/3 space-y-12"
          >
            {/* Mobile Biography */}
            <div className="lg:hidden bg-white p-6 sm:p-8 rounded-[2rem] shadow-sm border border-slate-100">
              <p className="text-slate-600 leading-relaxed font-medium">
                윤영준 원장은 27 년 이상 심리상담과 행동교정 분야에서 활동하며 음주운전, 중독, 충동조절, 법원 의뢰 사례 등을 상담해 왔으며, 재범 위험성 감소와 건강한 생활습관 형성을 위한 전문 프로그램을 운영하고 있습니다.
              </p>
            </div>

            <Section
              title="학력"
              icon={<GraduationCap className="text-primary" size={24} />}
            >
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-slate-700 font-medium">
                <ListItem>동국대학교 대학원 심리상담학 석사</ListItem>
                <ListItem>로드랜드대학교 상담학 박사</ListItem>
                <ListItem>서불대학교 뇌인지과학 박사 수료</ListItem>
                <ListItem>원광대학교 동양학대학원 기공학 전문과정</ListItem>
              </ul>
            </Section>

            <Section
              title="전문 분야"
              icon={<Award className="text-primary" size={24} />}
              bg="bg-emerald-50/80 border-2 border-emerald-200/80 shadow-md"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-emerald-100 hover:shadow-md transition-shadow duration-300">
                  <h4 className="font-extrabold text-slate-900 text-xl lg:text-2xl mb-5 flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0"></span>
                    음주운전 재범방지 심리상담
                  </h4>
                  <ul className="space-y-3.5">
                    <ListItem className="text-base md:text-lg text-slate-700 font-medium">음주운전 초범 및 재범 사례 상담</ListItem>
                    <ListItem className="text-base md:text-lg text-slate-700 font-medium">음주습관 분석 및 절주 프로그램</ListItem>
                    <ListItem className="text-base md:text-lg text-slate-700 font-medium">충동조절 및 자기통제력 향상</ListItem>
                    <ListItem className="text-base md:text-lg text-slate-700 font-medium">음주 유발 요인 분석</ListItem>
                    <ListItem className="text-base md:text-lg text-slate-700 font-medium">스트레스 관리 훈련</ListItem>
                    <ListItem className="text-base md:text-lg text-slate-700 font-medium">재범방지 행동계획 수립</ListItem>
                    <ListItem className="text-base md:text-lg text-slate-700 font-medium">법원·검찰 제출용 상담 자료 준비</ListItem>
                  </ul>
                </div>
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-emerald-100 hover:shadow-md transition-shadow duration-300">
                  <h4 className="font-extrabold text-slate-900 text-xl lg:text-2xl mb-5 flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0"></span>
                    중독 및 행동교정
                  </h4>
                  <ul className="space-y-3.5">
                    <ListItem className="text-base md:text-lg text-slate-700 font-medium">알코올 사용 문제</ListItem>
                    <ListItem className="text-base md:text-lg text-slate-700 font-medium">인터넷 및 행동중독</ListItem>
                    <ListItem className="text-base md:text-lg text-slate-700 font-medium">충동조절 문제</ListItem>
                    <ListItem className="text-base md:text-lg text-slate-700 font-medium">분노조절</ListItem>
                    <ListItem className="text-base md:text-lg text-slate-700 font-medium">스트레스 관리</ListItem>
                  </ul>
                </div>
              </div>
            </Section>

            <Section
              title="주요 경력"
              icon={<Briefcase className="text-primary" size={24} />}
            >
              <div>
                <h4 className="font-bold text-slate-900 mb-3 ml-2">
                  범죄 및 재범방지 상담
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-slate-700 font-medium">
                  <ListItem>성범죄심리상담학회 회장</ListItem>
                  <ListItem>대구가정법원 위탁보호위원</ListItem>
                  <ListItem>경북권 전·의경 심리상담사</ListItem>
                  <ListItem>경북 소방공무원 심리상담 및 교육</ListItem>
                  <ListItem>학교폭력 자치위원 활동</ListItem>
                  <ListItem>청소년 인터넷중독 예방교육 강사</ListItem>
                </ul>
              </div>
            </Section>

            <Section
              title="교육 및 강의 경력"
              icon={<Users className="text-primary" size={24} />}
            >
              <div className="space-y-6 text-slate-700 font-medium">
                <div>
                  <h4 className="font-bold text-slate-900 mb-2 ml-2">
                    대학 및 교육기관
                  </h4>
                  <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
                    <p>
                      금오공과대학교, 한국폴리텍대학교, 광운대학교, 상지대학교,
                      구미대학교 등 다수 대학 출강
                    </p>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-2 ml-2">
                    기업 및 공공기관
                  </h4>
                  <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm space-y-2">
                    <p>
                      삼성, LG, SK가스, 기아자동차, 웅진코웨이 등 기업체
                      심리교육 진행
                    </p>
                    <p>
                      경찰서, 지방자치단체, 교육기관 대상 심리안정 및 재발방지
                      교육 진행
                    </p>
                  </div>
                </div>
              </div>
            </Section>

            <Section
              title="상담 철학"
              icon={<Award className="text-primary" size={24} />}
            >
              <div className="bg-slate-900 text-white p-8 rounded-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                <div className="relative z-10 space-y-4 font-medium leading-relaxed opacity-90">
                  <p>음주운전은 단순히 술의 문제가 아니라 습관과 선택의 문제입니다.</p>
                  <p>재범을 막기 위해서는 음주 자체만 통제하는 것이 아니라 음주를 선택하게 만드는 스트레스, 생활습관, 감정관리 방식, 사고방식을 함께 교정해야 합니다.</p>
                  <p>본 센터는 음주운전 사건 이후 내담자가 자신의 행동을 객관적으로 이해하고, 재범 없는 건강한 삶을 살아갈 수 있도록 심리상담과 재범방지 교육을 제공합니다.</p>
                </div>
              </div>
            </Section>

            <Section
              title="주요 프로그램"
              icon={<Briefcase className="text-primary" size={24} />}
              bg="bg-blue-50/80 border-2 border-blue-200/80 shadow-md"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 sm:p-7 rounded-3xl shadow-sm border border-blue-100 hover:shadow-md transition-shadow duration-300">
                  <h4 className="font-extrabold text-blue-950 text-lg md:text-xl mb-4 pb-2 border-b border-blue-100/30">
                    음주운전 재범방지 심리상담
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2 text-base md:text-lg text-slate-700 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></span>
                      사고 원인 분석
                    </li>
                    <li className="flex items-center gap-2 text-base md:text-lg text-slate-700 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></span>
                      음주패턴 분석
                    </li>
                    <li className="flex items-center gap-2 text-base md:text-lg text-slate-700 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></span>
                      고위험 상황 관리
                    </li>
                    <li className="flex items-center gap-2 text-base md:text-lg text-slate-700 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></span>
                      재발방지 전략 수립
                    </li>
                    <li className="flex items-center gap-2 text-base md:text-lg text-slate-700 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></span>
                      생활습관 개선
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-6 sm:p-7 rounded-3xl shadow-sm border border-blue-100 hover:shadow-md transition-shadow duration-300">
                  <h4 className="font-extrabold text-blue-950 text-lg md:text-xl mb-4 pb-2 border-b border-blue-100/30">
                    음주운전 재범방지 교육
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2 text-base md:text-lg text-slate-700 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></span>
                      음주운전 심리 이해
                    </li>
                    <li className="flex items-center gap-2 text-base md:text-lg text-slate-700 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></span>
                      재범 위험성 교육
                    </li>
                    <li className="flex items-center gap-2 text-base md:text-lg text-slate-700 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></span>
                      충동조절 훈련
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-6 sm:p-7 rounded-3xl shadow-sm border border-blue-100 hover:shadow-md transition-shadow duration-300">
                  <h4 className="font-extrabold text-blue-950 text-lg md:text-xl mb-4 pb-2 border-b border-blue-100/30">
                    기타 프로그램
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2 text-base md:text-lg text-slate-700 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></span>
                      절주 및 금주 전략
                    </li>
                    <li className="flex items-center gap-2 text-base md:text-lg text-slate-700 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></span>
                      가족관계 회복 프로그램
                    </li>
                  </ul>
                </div>
              </div>
            </Section>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const Section = ({
  title,
  children,
  icon,
  bg = "bg-white",
}: {
  title: string;
  children: React.ReactNode;
  icon: React.ReactNode;
  bg?: string;
}) => (
  <div className={`p-8 rounded-[2rem] ${bg}`}>
    <div className="flex items-center gap-3 mb-6">
      <div className="w-1.5 h-8 bg-primary rounded-full"></div>
      <h3 className="text-2xl font-black text-slate-900 flex items-center gap-2">
        {title}
      </h3>
    </div>
    <div className="pl-4 border-l border-slate-100">{children}</div>
  </div>
);

const ListItem = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <li className="flex items-start gap-2">
    <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-2 shrink-0"></span>
    <span className={`flex-1 ${className}`}>{children}</span>
  </li>
);
