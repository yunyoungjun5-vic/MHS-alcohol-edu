import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Check, Phone } from "lucide-react";

const PHONE_HREF = "tel:0507-1351-5463";

interface FeatureItemProps {
  title: string;
  desc?: string;
  dark?: boolean;
}

const FeatureItem: React.FC<FeatureItemProps> = ({
  title,
  desc,
  dark = false,
}) => (
  <li className="flex items-start gap-3">
    <span className="mt-0.5 w-[18px] h-[18px] rounded-full bg-[#2E7D32] text-white flex items-center justify-center shrink-0">
      <Check size={11} strokeWidth={3} />
    </span>
    <div>
      <p
        className={`text-[14.5px] font-bold leading-snug ${
          dark ? "text-white" : "text-slate-800"
        }`}
      >
        {title}
      </p>
      {desc && (
        <p className="text-xs mt-1 leading-relaxed text-slate-400">{desc}</p>
      )}
    </div>
  </li>
);

export const PricingContent: React.FC<{ compact?: boolean }> = ({
  compact = false,
}) => {
  return (
    <div className="break-keep">
      {/* Header */}
      <div className={`text-center ${compact ? "mb-9 sm:mb-11" : "mb-14 sm:mb-16"}`}>
        <span className="block text-xs font-extrabold tracking-[0.28em] text-[#2E7D32] uppercase mb-3">
          PRICE &amp; PACKAGE
        </span>
        <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-black italic tracking-tight text-[#0f172a] mb-3">
          양형자료 <span className="text-[#2E7D32]">세트 구성</span> 및 가격 안내
        </h2>
        <p className="text-sm sm:text-base text-slate-500 font-medium">
          사건 상황과 진행 단계에 맞춰 필요한 구성을 선택하실 수 있습니다.
        </p>
      </div>

      {/* 3 Pricing Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 xl:gap-7 items-stretch">
        {/* SET 1 */}
        <div
          className={`bg-white rounded-[24px] border border-slate-200/80 shadow-[0_8px_30px_rgba(15,23,42,0.03)] ${
            compact ? "p-6 sm:p-7" : "p-8 sm:p-9"
          } flex flex-col text-left`}
        >
          <div>
            <span className="block text-xs font-extrabold text-[#2E7D32] tracking-wide mb-2">
              SET 1
            </span>
            <h3 className="text-[22px] sm:text-2xl font-black text-[#0f172a] tracking-tight mb-3">
              교육프로그램 세트
            </h3>
            <p className="text-[13.5px] text-slate-500 leading-[1.65] mb-6 min-h-[44px]">
              재범방지 교육 이수와 실천 계획을 통해 재발 방지 노력을 증명하는 기본
              구성입니다.
            </p>

            <div className="pb-6 border-b border-slate-100 mb-6 flex items-baseline gap-1">
              <span className="text-[36px] xl:text-[38px] font-black text-[#0f172a] tracking-tight tabular-nums leading-none">
                120,000
              </span>
              <span className="text-base font-bold text-slate-500">원</span>
            </div>

            {/* 교육 이수 자료 */}
            <div className="mb-6">
              <h4 className="text-xs font-bold text-slate-500 mb-4">
                교육 이수 자료
              </h4>
              <ul className="space-y-3.5">
                <FeatureItem
                  title="재범방지 교육·프로그램 이수증 1부"
                  desc="절주교육 / 인지행동 / 재범방지 프로그램"
                />
                <FeatureItem
                  title="교육 이수 소감문 작성 가이드"
                  desc="교육을 통한 인식 변화 정리"
                />
              </ul>
            </div>

            {/* 실천 자료 */}
            <div>
              <h4 className="text-xs font-bold text-slate-500 mb-4">실천 자료</h4>
              <ul className="space-y-3.5">
                <FeatureItem
                  title="재발방지 계획서 1부"
                  desc="구체적인 행동 변화 계획"
                />
                <FeatureItem
                  title="절주 계획서 1부"
                  desc="음주 통제를 위한 실질적 실천 계획"
                />
                <FeatureItem
                  title="준법 서약서 1부"
                  desc="재발 방지에 대한 책임과 의지 선언"
                />
                <FeatureItem title="반성문 작성 가이드 제공" />
              </ul>
            </div>
          </div>

          <div className="mt-auto pt-10">
            <p className="text-xs text-slate-500 font-medium mb-1">
              교육 이수 후 이수증 즉시 발급
            </p>
            <p className="text-xs font-bold text-[#c62828] mb-5">
              긴급 제출 시 별도 문의
            </p>
            <a
              href={PHONE_HREF}
              className="w-full py-3.5 rounded-full border-[1.5px] border-[#2E7D32] text-[#2E7D32] font-extrabold text-[15px] hover:bg-[#2E7D32] hover:text-white transition-colors text-center flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <Phone size={15} />
              전화 문의 (0507-1351-5463)
            </a>
          </div>
        </div>

        {/* SET 2 */}
        <div
          className={`bg-white rounded-[24px] border border-slate-200/80 shadow-[0_8px_30px_rgba(15,23,42,0.03)] ${
            compact ? "p-6 sm:p-7" : "p-8 sm:p-9"
          } flex flex-col text-left`}
        >
          <div>
            <span className="block text-xs font-extrabold text-[#2E7D32] tracking-wide mb-2">
              SET 2
            </span>
            <h3 className="text-[22px] sm:text-2xl font-black text-[#0f172a] tracking-tight mb-3">
              심리상담 세트
            </h3>
            <p className="text-[13.5px] text-slate-500 leading-[1.65] mb-6 min-h-[44px]">
              교육 이수에 더해 전문 심리상담으로 심리상태와 변화 가능성을 전문가
              의견으로 정리하는 구성입니다.
            </p>

            <div className="pb-6 border-b border-slate-100 mb-6 flex items-baseline gap-1">
              <span className="text-[36px] xl:text-[38px] font-black text-[#0f172a] tracking-tight tabular-nums leading-none">
                199,000
              </span>
              <span className="text-base font-bold text-slate-500">원</span>
            </div>

            {/* 포함 안내 박스 */}
            <div className="bg-[#f0f8f0] rounded-xl px-4 py-3 flex items-center gap-2.5 mb-6">
              <span className="w-[18px] h-[18px] rounded-full bg-[#2E7D32] text-white flex items-center justify-center shrink-0">
                <Check size={11} strokeWidth={3} />
              </span>
              <span className="text-[13.5px] font-extrabold text-slate-800">
                SET 1 교육프로그램 세트 전체 포함
              </span>
            </div>

            {/* 심리상담 자료 */}
            <div>
              <h4 className="text-xs font-bold text-slate-500 mb-4">
                심리상담 자료
              </h4>
              <ul className="space-y-3.5">
                <FeatureItem
                  title="1:1 심리상담 및 심리상담 확인서 1부"
                  desc="재범방지 노력의 시작을 증명하는 자료"
                />
                <FeatureItem
                  title="알코올 사용 선별검사 결과지 1부"
                  desc="고위험 음주 여부 확인"
                />
                <FeatureItem
                  title="심리상담 소견서 1부"
                  desc="심리상태 평가 및 변화 가능성 분석"
                />
              </ul>
            </div>
          </div>

          <div className="mt-auto pt-10">
            <p className="text-xs text-slate-500 font-medium mb-1">
              심리상담 진행 후 소견서 발급까지 평균 1~2일 소요
            </p>
            <p className="text-xs font-bold text-[#c62828] mb-5">
              긴급 제출 시 별도 문의
            </p>
            <a
              href={PHONE_HREF}
              className="w-full py-3.5 rounded-full border-[1.5px] border-[#2E7D32] text-[#2E7D32] font-extrabold text-[15px] hover:bg-[#2E7D32] hover:text-white transition-colors text-center flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <Phone size={15} />
              전화 문의 (0507-1351-5463)
            </a>
          </div>
        </div>

        {/* SET 3 - 올인원 세트 */}
        <div
          className={`relative bg-[#141c33] text-white rounded-[24px] shadow-[0_20px_50px_rgba(20,28,51,0.22)] ${
            compact ? "p-6 sm:p-7" : "p-8 sm:p-9"
          } flex flex-col text-left mt-2 lg:mt-0`}
        >
          {/* 추천 배지 */}
          <span className="absolute -top-3.5 right-7 bg-[#2E7D32] text-white text-xs font-extrabold px-4 py-1.5 rounded-full shadow-md">
            추천
          </span>

          <div>
            <span className="block text-xs font-extrabold text-[#66bb6a] tracking-wide mb-2">
              SET 3
            </span>
            <h3 className="text-[22px] sm:text-2xl font-black text-white tracking-tight mb-3">
              올인원 세트
            </h3>
            <p className="text-[13.5px] text-slate-300 leading-[1.65] mb-6">
              심리평가·재범 위험성 평가부터 반성문·탄원서 코칭까지, 제출 자료
              전체를 종합적으로 준비하는 최종 구성입니다.
            </p>

            <div className="pb-6 border-b border-white/10 mb-6 flex items-baseline gap-1">
              <span className="text-[36px] xl:text-[38px] font-black text-white tracking-tight tabular-nums leading-none">
                350,000
              </span>
              <span className="text-base font-bold text-slate-300">원</span>
            </div>

            {/* 포함 안내 박스 */}
            <div className="bg-[#22293f] border border-white/10 rounded-xl px-4 py-3 flex items-center gap-2.5 mb-6">
              <span className="w-[18px] h-[18px] rounded-full bg-[#2E7D32] text-white flex items-center justify-center shrink-0">
                <Check size={11} strokeWidth={3} />
              </span>
              <span className="text-[13.5px] font-extrabold text-white">
                SET 1 + SET 2 전체 포함
              </span>
            </div>

            {/* 심화 평가 자료 */}
            <div className="mb-6">
              <h4 className="text-xs font-bold text-slate-400 mb-4">
                심화 평가 자료
              </h4>
              <ul className="space-y-3.5">
                <FeatureItem
                  dark
                  title="심리평가 보고서 1부"
                  desc="표준화 심리검사 기반 문제 구조 분석"
                />
                <FeatureItem
                  dark
                  title="재범 위험성 평가 1부"
                  desc="재범 가능성과 통제 가능성 분석"
                />
                <FeatureItem
                  dark
                  title="종합 의견서 1부"
                  desc="상담·평가 결과, 사건 인식, 재발방지 실천과정 종합 반영"
                />
              </ul>
            </div>

            {/* 작성 코칭 */}
            <div className="mb-6">
              <h4 className="text-xs font-bold text-slate-400 mb-4">작성 코칭</h4>
              <ul className="space-y-3.5">
                <FeatureItem
                  dark
                  title="반성문 1:1 코칭"
                  desc="사건 내용을 반영한 구조화 및 첨삭 지원"
                />
                <FeatureItem
                  dark
                  title="가족 탄원서 코칭"
                  desc="가족의 지지와 변화 환경을 전달하는 작성 지도"
                />
              </ul>
            </div>

            {/* 단계별 제출 컨설팅 박스 */}
            <div className="bg-[#22293f] border border-white/10 shadow-[inset_3px_0_0_#43a047] rounded-xl px-4 py-3.5 mb-6">
              <p className="text-[13.5px] font-extrabold text-white leading-[1.55]">
                경찰·검찰·법원 단계별 제출 컨설팅
                <br />
                (사건 종결 시점까지 지속 지원)
              </p>
            </div>
          </div>

          <div className="mt-auto">
            <p className="text-xs text-slate-400 leading-[1.6]">
              센터 작성 자료는 통상 1~2일 소요
            </p>
            <p className="text-xs text-slate-400 leading-[1.6] mb-1.5">
              실제 준비 기간은 개별 진행 상황에 따라 달라질 수 있습니다.
            </p>
            <p className="text-xs font-bold text-[#ff8a80] mb-5">
              긴급 제출 시 별도 문의
            </p>
            <a
              href={PHONE_HREF}
              className="w-full py-3.5 rounded-full bg-[#2E7D32] hover:bg-[#256629] text-white font-extrabold text-[15px] transition-colors text-center flex items-center justify-center gap-2 shadow-lg shadow-black/20 whitespace-nowrap"
            >
              <Phone size={15} />
              전화 문의 (0507-1351-5463)
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Disclaimer */}
      <div
        className={`${
          compact ? "mt-8" : "mt-12"
        } text-center text-xs sm:text-[13px] text-slate-400 leading-[1.85]`}
      >
        <p>
          양형자료는 반성과 재범 방지 노력을 객관적으로 보여주는 자료이며, 처벌
          감경 여부는 법원이 종합적으로 판단합니다.
        </p>
        <p>모든 자료는 실제 상담과 평가 내용에 근거하여 작성됩니다.</p>
      </div>
    </div>
  );
};

export const Pricing: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <div className="pt-[84px] lg:pt-[117px] bg-[#f7f8fa] min-h-screen">
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8">
          <PricingContent />
        </div>
      </section>
    </div>
  );
};
