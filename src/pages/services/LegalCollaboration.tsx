import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Scale, ShieldCheck, Info, ChevronDown, Phone } from "lucide-react";

const PHONE_HREF = "tel:0507-1351-5463";

const problemsAfterIncident = [
  {
    step: "01 형사 절차",
    title: "경찰 조사 · 검찰 · 재판",
    desc: "단계마다 진술과 태도가 기록되고, 무엇을 준비해야 할지 막막합니다.",
  },
  {
    step: "02 행정 처분",
    title: "면허 정지 · 취소",
    desc: "생계와 출퇴근이 흔들리면서 불안과 조급함이 커집니다.",
  },
  {
    step: "03 관계와 일상",
    title: "가족 · 직장 · 신뢰",
    desc: "가족의 실망과 직장 문제까지 겹쳐 심리적 소진이 깊어집니다.",
  },
  {
    step: "04 재범 위험",
    title: "반복되는 음주 패턴",
    desc: "원인을 다루지 않으면 같은 상황이 되풀이될 위험이 남습니다.",
  },
];

const stageSupports = [
  {
    num: "01",
    title: "단속 · 경찰 조사",
    sub: "사건 직후",
    desc: "충격과 불안을 정리하는 초기 상담, 음주 습관에 대한 초기 평가를 진행합니다. 조사 전 심리적 안정을 돕고, 재범방지 교육을 일찍 시작할수록 쌓이는 기록도 깊어집니다.",
  },
  {
    num: "02",
    title: "검찰 송치 · 처분 전",
    sub: "수사 진행 중",
    desc: "정기 교육과 상담을 이어가며 단주 실천 일지, 중간 경과 기록을 정리합니다. 협력 변호사와 협의한 시점에 맞추어 필요한 자료를 발급합니다.",
  },
  {
    num: "03",
    title: "기소 · 공판",
    sub: "재판 진행 중",
    desc: "교육 이수 현황과 심리평가 소견을 종합해 재범방지 계획을 구체화합니다. 법정 진술을 앞둔 긴장과 불안도 상담으로 함께 다룹니다.",
  },
  {
    num: "04",
    title: "판결 이후",
    sub: "일상 회복",
    desc: "사건이 끝난 뒤에도 재발을 막는 사후 관리 상담을 제공합니다. 처분과 무관하게 음주 습관을 실제로 바꾸는 것이 이 과정의 최종 목표입니다.",
  },
];

const counselingModules = [
  {
    num: "01",
    title: "음주 동기와 패턴 분석",
    desc: "언제, 누구와, 어떤 감정일 때 술을 찾는지 구체적으로 살펴봅니다.",
  },
  {
    num: "02",
    title: "판단 오류와 합리화 점검",
    desc: "“가까운 거리니까 괜찮다” 같은 생각이 어떻게 위험한 선택으로 이어졌는지 짚어봅니다.",
  },
  {
    num: "03",
    title: "스트레스 · 감정 조절",
    desc: "술 대신 감정을 다루는 방법을 익혀 음주의 근본 원인을 줄입니다.",
  },
  {
    num: "04",
    title: "위험 상황 대처 훈련",
    desc: "회식, 모임 등 재범 위험이 높은 상황에서의 구체적인 대처법을 연습합니다.",
  },
  {
    num: "05",
    title: "가족관계 회복",
    desc: "가족과 함께하는 회기로 무너진 신뢰를 회복하고 지지 체계를 세웁니다.",
  },
  {
    num: "06",
    title: "단주 유지 · 재발 방지 계획",
    desc: "상담 종료 후에도 지킬 수 있는 현실적인 재발 방지 계획을 세웁니다.",
  },
];

const collaborationSteps = [
  {
    step: "STEP 1",
    title: "초기 상담 · 동의",
    desc: "사건 단계와 상황을 확인하고, 법률 조력이 필요하면 협력 변호사 상담으로 연결합니다.",
    highlight: false,
  },
  {
    step: "STEP 2",
    title: "심리평가",
    desc: "음주 문제 선별검사와 면담으로 음주 패턴, 재범 위험 요인을 평가합니다.",
    highlight: false,
  },
  {
    step: "STEP 3",
    title: "맞춤 교육 · 상담",
    desc: "평가 결과에 맞춘 재범방지 교육과 개인 상담을 비대면 화상으로 진행합니다.",
    highlight: false,
  },
  {
    step: "STEP 4",
    title: "경과 기록",
    desc: "출석, 과제 수행, 단주 실천 일지 등 변화 과정을 회기마다 기록합니다.",
    highlight: false,
  },
  {
    step: "STEP 5",
    title: "자료 발급 · 전달",
    desc: "협력 변호사와 일정을 맞춰 자료를 발급하고, 동의한 범위에서 함께 검토합니다.",
    highlight: true,
  },
];

const sentencingStages = [
  {
    stage: "1단계",
    title: "경찰 조사",
    docs: ["초기 심리평가 소견서", "재범방지 교육 등록 확인서", "재범방지 서약서"],
  },
  {
    stage: "2단계",
    title: "검찰 수사 · 처분 전",
    docs: ["교육 중간 이수 확인서", "상담 경과 보고서", "단주 실천 일지"],
  },
  {
    stage: "3단계",
    title: "기소 · 공판",
    docs: [
      "교육 이수 확인서",
      "종합 심리평가 소견서",
      "재범방지 실천 계획서",
      "가족 상담 참여 기록",
    ],
  },
  {
    stage: "4단계",
    title: "항소 · 판결 이후",
    docs: ["추가 교육 이수 확인서", "사후관리 상담 기록"],
  },
];

const principles = [
  {
    title: "법률 상담은 변호사가 합니다",
    desc: "처벌 수위나 법적 전략은 센터가 아닌 협력 변호사가 직접 상담합니다.",
  },
  {
    title: "양형에 반영되는 자료를 만듭니다",
    desc: "재범방지 노력과 진지한 반성은 양형에서 고려되는 요소입니다. 체계적으로 준비된 자료는 그 노력을 재판부에 분명하게 보여줍니다.",
  },
  {
    title: "연계 대가를 주고받지 않습니다",
    desc: "센터는 변호사 연계에 따른 수수료를 받지 않으며, 선임 여부와 수임료는 내담자와 변호사가 직접 정합니다.",
  },
  {
    title: "동의 없이 공유하지 않습니다",
    desc: "상담 내용은 비밀이 보장되며, 서면 동의한 범위만 전달됩니다.",
  },
];

const faqs = [
  {
    q: "Q. 협력 변호사에게 반드시 사건을 맡겨야 하나요?",
    a: "아닙니다. 협력 변호사 선임은 선택 사항이며, 선임 여부는 내담자가 자유롭게 결정합니다. 재범방지 교육은 선임 여부와 관계없이 동일하게 진행됩니다.",
  },
  {
    q: "Q. 협력 변호사 상담은 어떻게 연결되나요?",
    a: "센터 초기 상담에서 법률 조력이 필요하다고 판단되면, 본인 동의 후 사건 상황에 맞는 연계 변호사와의 상담 일정을 안내해 드립니다.",
  },
  {
    q: "Q. 사건이 꽤 진행된 뒤에 시작해도 늦지 않나요?",
    a: "어느 단계에서든 시작할 수 있습니다. 다만 교육 기간이 길수록 변화 과정이 충실히 기록되므로 가능한 한 빨리 시작하기를 권합니다.",
  },
  {
    q: "Q. 법원이나 검찰의 수강명령과는 어떻게 다른가요?",
    a: "의미와 용도가 전혀 다릅니다. 센터에서 제공하는 양형자료는 재판 전에, 양형 판단을 위해 본인이 스스로 재범방지 노력을 기울였음을 보여주는 자료입니다. 반면 법원 · 검찰의 수강명령은 판결이 내려진 이후 처벌의 한 형태로 부과되는 교육입니다.",
  },
];

export const LegalCollaboration: React.FC = () => {
  const { pathname } = useLocation();
  const [imgError, setImgError] = useState(false);
  const [openFaqIndices, setOpenFaqIndices] = useState<number[]>([0, 1, 2, 3]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  const scrollToProcess = () => {
    const el = document.getElementById("collaboration-process");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleFaq = (idx: number) => {
    setOpenFaqIndices((prev) =>
      prev.includes(idx) ? prev.filter((item) => item !== idx) : [...prev, idx]
    );
  };

  return (
    <div className="pt-[84px] lg:pt-[117px] bg-white text-slate-900 break-keep">
      {/* 1. Hero Section */}
      <section className="bg-[#0b3d2e] text-white py-20 lg:py-28">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <p className="inline-block text-xs font-bold text-[#7ce2b3] border border-[#7ce2b3]/35 bg-[#0f4a38]/80 rounded-full px-3.5 py-1.5 mb-6">
                전국 최초 변호사 협력 음주운전 재범방지 교육센터
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold leading-[1.24] tracking-tight mb-6">
                변호사는 법정을,
                <br />
                센터는 변화를 준비합니다
              </h1>
              <p className="text-white/80 text-base lg:text-[17px] leading-[1.7] font-normal max-w-xl mb-9">
                음주운전 사건은 수사·재판·행정처분이 동시에 진행되는 사건입니다.
                본 센터는 다수의 로펌 및 변호사와 연계하여, 법률 조력과 재범방지
                교육·심리상담이 한 흐름 안에서 이루어지는 협업 상담 시스템을
                운영합니다.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={PHONE_HREF}
                  className="px-6 py-3.5 bg-white text-[#0b3d2e] rounded-full text-sm font-bold hover:bg-slate-100 transition-colors inline-flex items-center gap-2 whitespace-nowrap shrink-0"
                >
                  <Phone size={15} />
                  전화 문의 0507-1351-5463
                </a>
                <button
                  type="button"
                  onClick={scrollToProcess}
                  className="px-6 py-3.5 bg-transparent border border-white/30 text-white rounded-full text-sm font-bold hover:bg-white/10 transition-colors cursor-pointer whitespace-nowrap shrink-0"
                >
                  진행 절차 보기
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-[#0f4a38] border border-white/10 rounded-2xl p-7 sm:p-8 divide-y divide-white/10">
                <div className="pb-5">
                  <span className="block text-xs font-semibold text-[#7ce2b3] mb-1.5">
                    운영 범위
                  </span>
                  <p className="text-lg font-bold text-white">전국 상담</p>
                </div>
                <div className="py-5">
                  <span className="block text-xs font-semibold text-[#7ce2b3] mb-1.5">
                    법률 네트워크
                  </span>
                  <p className="text-lg font-bold text-white">
                    다수의 연계 로펌 및 변호사
                  </p>
                </div>
                <div className="pt-5">
                  <span className="block text-xs font-semibold text-[#7ce2b3] mb-1.5">
                    자료 공유 원칙
                  </span>
                  <p className="text-lg font-bold text-white">
                    본인 서면 동의 후에만
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. 협력 법률 네트워크 */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-6">
              {!imgError ? (
                <div className="rounded-2xl overflow-hidden bg-[#f3f7f5]">
                  <img
                    src="/assets/lawyer-collaboration.png"
                    alt="상담 전문가와 협력 변호사의 사례 협의 모습"
                    referrerPolicy="no-referrer"
                    onError={() => setImgError(true)}
                    className="w-full h-auto block object-cover"
                  />
                </div>
              ) : (
                <div className="aspect-[4/3] rounded-2xl bg-[#f3f7f5] border border-slate-200 flex flex-col items-center justify-center p-8 text-center">
                  <Scale className="w-12 h-12 text-[#0b3d2e] mb-4" />
                  <p className="text-base font-bold text-slate-800">
                    상담 전문가 · 협력 변호사 협업 시스템
                  </p>
                </div>
              )}
            </div>

            <div className="lg:col-span-6">
              <span className="block text-xs font-bold text-[#146c4e] mb-2.5">
                협력 법률 네트워크
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-extrabold text-slate-900 leading-[1.3] tracking-tight mb-5">
                센터와 연계된
                <br />
                변호사 · 법무법인이 함께합니다
              </h2>
              <p className="text-[15px] sm:text-base text-slate-600 leading-[1.75] mb-7">
                본 센터는 다수의 로펌 및 변호사와 연계되어 있습니다. 상담 과정에서
                법률 조력이 필요하면 협력 변호사의 법률 상담으로 연결하고, 변호사
                상담 과정에서 재범방지 교육이 필요하면 센터로 연계되는 양방향
                구조입니다.
              </p>

              <div className="bg-[#0b3d2e] text-white rounded-2xl p-6 sm:p-7">
                <span className="inline-block bg-white text-[#0b3d2e] text-[11px] font-extrabold px-3 py-1 rounded-full mb-3.5">
                  전국 최초
                </span>
                <h3 className="text-lg sm:text-[19px] font-bold leading-[1.45] mb-2.5">
                  음주운전 재범방지 교육센터와 변호사 간
                  <br />
                  협력 시스템을 전국 최초로 구축했습니다
                </h3>
                <p className="text-xs sm:text-[13.5px] text-white/75 leading-[1.65]">
                  법률 조력과 재범방지 교육이 따로 움직이지 않도록, 사건 초기부터
                  판결까지 하나의 체계로 연결합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 사건 이후, 동시에 밀려오는 문제들 */}
      <section className="pb-20 lg:pb-28 pt-4 bg-white">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-0">
          <div className="mb-12">
            <span className="block text-xs font-bold text-[#146c4e] mb-2.5">
              사건 이후, 동시에 밀려오는 문제들
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-extrabold text-slate-900 leading-[1.3] tracking-tight mb-4">
              법적 대응만으로는 설명되지 않는 것이 있습니다
            </h2>
            <p className="text-[15px] sm:text-base text-slate-600 leading-[1.7] max-w-2xl">
              음주운전 사건에서 수사기관과 재판부는 사건 경위뿐 아니라, 당사자가
              음주 습관을 어떻게 인식하고 무엇을 바꾸고 있는지에 주목합니다. 그러나
              그 변화는 말로만 설명하기 어렵습니다.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {problemsAfterIncident.map((item) => (
              <div
                key={item.step}
                className="bg-white border border-slate-200/80 rounded-2xl p-6"
              >
                <span className="block text-xs font-semibold text-slate-400 mb-3 tabular-nums">
                  {item.step}
                </span>
                <h3 className="text-[17px] font-bold text-slate-900 mb-2.5">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-[1.65]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. 협업 구조 */}
      <section className="py-20 lg:py-28 bg-[#f3f7f5]">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-0">
          <div className="mb-12">
            <span className="block text-xs font-bold text-[#146c4e] mb-2.5">
              협업 구조
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-extrabold text-slate-900 leading-[1.3] tracking-tight mb-4">
              역할은 분명하게 나누고,
              <br />
              방향은 하나로 맞춥니다
            </h2>
            <p className="text-[15px] sm:text-base text-slate-600 leading-[1.7] max-w-2xl">
              법률 판단은 변호사의 영역이고, 심리평가와 재범방지 교육은 센터의
              영역입니다. 서로의 전문 영역을 침범하지 않기에 각자의 결과물이 더
              신뢰를 얻습니다.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6 items-stretch">
            {/* 법률 영역 */}
            <div className="bg-white border border-slate-200/70 rounded-2xl p-7 sm:p-8">
              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                  <Scale className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-blue-700">
                    법률 영역
                  </span>
                  <h3 className="text-lg font-bold text-slate-900">
                    협력 변호사 · 법무법인
                  </h3>
                </div>
              </div>
              <ul className="space-y-2.5 text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <span className="text-slate-400 mt-0.5">•</span>
                  <span>사건 법리 검토와 변론 방향 설정</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-slate-400 mt-0.5">•</span>
                  <span>수사 · 재판 절차 대리와 의견서 작성</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-slate-400 mt-0.5">•</span>
                  <span>제출 자료의 채택 여부와 시점 판단</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-slate-400 mt-0.5">•</span>
                  <span>행정처분 관련 법률 대응</span>
                </li>
              </ul>
            </div>

            {/* 공동의 목표 */}
            <div className="bg-[#0b3d2e] text-white rounded-2xl p-7 sm:p-8 flex flex-col justify-between">
              <div>
                <span className="block text-xs font-bold text-[#7ce2b3] mb-3">
                  공동의 목표
                </span>
                <h3 className="text-xl sm:text-2xl font-bold leading-[1.35]">
                  내담자의 실제 변화를
                  <br />
                  객관적으로 보여주는 것
                </h3>
              </div>
              <p className="text-sm text-white/80 leading-[1.7] mt-6">
                협력 변호사와 센터는 사례 협의를 통해 진행 방향과 자료 준비 시점을
                맞춥니다. 모든 정보 공유는 내담자 본인이 서면 동의한 범위 안에서만
                이루어집니다.
              </p>
            </div>
          </div>

          {/* 심리 · 교육 영역 */}
          <div className="bg-white border border-slate-200/70 rounded-2xl p-7 sm:p-8">
            <div className="flex items-center gap-3.5 mb-6">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#146c4e] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-xs font-bold text-[#146c4e]">
                  심리 · 교육 영역
                </span>
                <h3 className="text-lg font-bold text-slate-900">
                  재범방지 교육센터
                </h3>
              </div>
            </div>
            <ul className="space-y-2.5 text-sm text-slate-700">
              <li className="flex items-start gap-2.5">
                <span className="text-slate-400 mt-0.5">•</span>
                <span>음주 문제 수준과 재범 위험 요인 평가</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-slate-400 mt-0.5">•</span>
                <span>개인 맞춤 재범방지 교육 및 상담</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-slate-400 mt-0.5">•</span>
                <span>단주 실천과 생활 변화 경과 기록</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-slate-400 mt-0.5">•</span>
                <span>평가 소견서 · 이수 확인서 등 자료 발급</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 5. 절차 단계별 지원 */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-0">
          <div className="mb-12">
            <span className="block text-xs font-bold text-[#146c4e] mb-2.5">
              절차 단계별 지원
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-extrabold text-slate-900 leading-[1.3] tracking-tight">
              사건이 어느 단계에 있든
              <br />
              지금 시작할 수 있습니다
            </h2>
          </div>

          <div className="border-t border-slate-200 divide-y divide-slate-200">
            {stageSupports.map((item) => (
              <div
                key={item.num}
                className="py-7 sm:py-8 flex flex-col md:flex-row md:items-start gap-4 md:gap-10"
              >
                <div className="flex items-baseline gap-4 md:w-64 shrink-0">
                  <span className="text-xl font-extrabold text-[#146c4e] tabular-nums">
                    {item.num}
                  </span>
                  <div>
                    <h3 className="text-[17px] font-bold text-slate-900">
                      {item.title}
                    </h3>
                    <span className="block text-xs text-slate-400 mt-1">
                      {item.sub}
                    </span>
                  </div>
                </div>
                <p className="text-sm sm:text-[15px] text-slate-600 leading-[1.75] flex-1">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. 음주운전 재범방지 심리상담 */}
      <section className="py-20 lg:py-28 bg-[#f3f7f5]">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            <div className="lg:col-span-4">
              <span className="block text-xs font-bold text-[#146c4e] mb-2.5">
                음주운전 재범방지 심리상담
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-[30px] font-extrabold text-slate-900 leading-[1.32] tracking-tight mb-5">
                교육만으로는
                <br />
                부족합니다
                <br />
                왜 마셨고, 왜 운전대를
                <br />
                잡았는지 다룹니다
              </h2>
              <p className="text-sm sm:text-[15px] text-slate-600 leading-[1.75] mb-6">
                음주운전은 대부분 한 번의 실수가 아니라 오래된 음주 습관과 판단
                패턴에서 비롯됩니다. 범죄심리 전문 상담가가 1:1 심리상담으로 그
                원인을 찾고, 다시 같은 선택을 하지 않도록 구체적인 변화를 만들어
                갑니다.
              </p>
              <div className="bg-white border border-slate-200/80 rounded-xl p-5">
                <p className="text-[13.5px] font-bold text-slate-800 leading-[1.65]">
                  심리상담 과정 자체가 진지한 반성과 실제 변화의 근거가 되어, 상담
                  경과 보고서와 심리평가 소견서에 그대로 기록됩니다.
                </p>
              </div>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {counselingModules.map((mod) => (
                <div
                  key={mod.num}
                  className="bg-white border border-slate-200/70 rounded-2xl p-6"
                >
                  <span className="block text-xs font-bold text-[#146c4e] mb-2 tabular-nums">
                    {mod.num}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {mod.title}
                  </h3>
                  <p className="text-[13.5px] text-slate-600 leading-[1.65]">
                    {mod.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. 협업 진행 절차 */}
      <section
        id="collaboration-process"
        className="py-20 lg:py-28 bg-[#0b3d2e] text-white"
      >
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-0">
          <div className="mb-12">
            <span className="block text-xs font-bold text-[#7ce2b3] mb-2.5">
              협업 진행 절차
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-extrabold leading-[1.3] tracking-tight">
              상담 신청부터 자료 정리까지
              <br />
              다섯 단계로 진행됩니다
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {collaborationSteps.map((s) =>
              s.highlight ? (
                <div
                  key={s.step}
                  className="bg-white text-slate-900 rounded-2xl p-6 shadow-lg"
                >
                  <span className="block text-[11px] font-extrabold text-[#146c4e] mb-2.5 tabular-nums">
                    {s.step}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 mb-2.5">
                    {s.title}
                  </h3>
                  <p className="text-[13px] text-slate-600 leading-[1.65]">
                    {s.desc}
                  </p>
                </div>
              ) : (
                <div
                  key={s.step}
                  className="bg-[#0f4a38] border border-white/10 rounded-2xl p-6 text-white"
                >
                  <span className="block text-[11px] font-extrabold text-[#7ce2b3] mb-2.5 tabular-nums">
                    {s.step}
                  </span>
                  <h3 className="text-base font-bold text-white mb-2.5">
                    {s.title}
                  </h3>
                  <p className="text-[13px] text-white/75 leading-[1.65]">
                    {s.desc}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* 8. 단계별 양형자료 제공 */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            <div className="lg:col-span-4">
              <span className="block text-xs font-bold text-[#146c4e] mb-2.5">
                단계별 양형자료 제공
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-[30px] font-extrabold text-slate-900 leading-[1.32] tracking-tight mb-5">
                법률 절차와 조사
                <br />
                일정에 맞춰
                <br />
                필요한 양형자료를
                <br />
                준비합니다
              </h2>
              <p className="text-sm sm:text-[15px] text-slate-600 leading-[1.75] mb-6">
                양형자료는 제출 시점이 중요합니다. 협력 변호사와 절차 진행 상황을
                공유하며, 각 단계에서 적절하고 꼭 필요한 자료를 순서대로 발급합니다.
              </p>

              <div className="bg-[#ebf3ef] rounded-xl p-5 mb-4">
                <p className="text-[13.5px] font-bold text-[#0b3d2e] leading-[1.65]">
                  같은 반성과 노력이라도, 객관적인 자료로 정리되어 있는지에 따라
                  재판부가 판단할 수 있는 근거는 분명히 달라집니다. 준비된
                  양형자료는 최종 양형 판단에 실질적인 도움이 됩니다.
                </p>
              </div>

              <p className="text-xs text-slate-400 leading-[1.6]">
                모든 자료는 실제 평가와 교육 이수 내용만을 기재하며, 제출 여부는
                변호사가 법률적으로 판단합니다.
              </p>
            </div>

            <div className="lg:col-span-8 space-y-3.5">
              {sentencingStages.map((item) => (
                <div
                  key={item.stage}
                  className="bg-[#f3f7f5] border border-slate-200/70 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8"
                >
                  <div className="sm:w-36 shrink-0">
                    <span className="block text-xs font-bold text-[#146c4e] mb-1 tabular-nums">
                      {item.stage}
                    </span>
                    <h3 className="text-[15px] font-bold text-slate-900">
                      {item.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2 flex-1">
                    {item.docs.map((doc) => (
                      <span
                        key={doc}
                        className="bg-white border border-slate-200/90 rounded-lg px-3.5 py-2 text-xs font-semibold text-slate-700"
                      >
                        {doc}
                      </span>
                    ))}
                  </div>
                </div>
              ))}

              <div className="bg-[#f3f7f5] border border-slate-200/70 rounded-xl px-5 py-4 flex items-start gap-2.5 text-xs text-slate-500 leading-[1.65]">
                <Info className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <p>
                  단계별 양형자료 목록은 고정된 것이 아닙니다. 내담자의 상황과
                  사건의 경중에 따라 필요한 자료를 판단하여 목록을 유동성 있게
                  재구성합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. 전국 운영 */}
      <section className="py-20 lg:py-24 bg-[#f3f7f5]">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-0">
          <span className="block text-xs font-bold text-[#146c4e] mb-2.5">
            전국 운영
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-extrabold text-slate-900 leading-[1.3] tracking-tight mb-4">
            사건 관할이 어디든
            <br />
            같은 기준으로 진행합니다
          </h2>
          <p className="text-[15px] sm:text-base text-slate-600 leading-[1.7] max-w-xl mb-8">
            거주지와 사건 관할이 달라도 문제없습니다. 비대면 화상 상담으로 전국
            어디서나 동일한 평가 기준과 교육 과정으로 진행됩니다.
          </p>

          <div className="bg-white border border-slate-200/70 rounded-2xl p-7 sm:p-8">
            <h3 className="text-lg font-bold text-slate-900 mb-2">비대면 상담</h3>
            <p className="text-sm text-slate-600 leading-[1.65] mb-2.5">
              화상 상담으로 거리와 시간 제약 없이 평가와 교육을 이어갑니다.
            </p>
            <p className="text-xs text-slate-500">
              비대면 회기도 출석과 과제 수행이 동일하게 기록됩니다.
            </p>
          </div>
        </div>
      </section>

      {/* 10. 센터의 원칙 */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-0">
          <div className="mb-12">
            <span className="block text-xs font-bold text-[#146c4e] mb-2.5">
              센터의 원칙
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-extrabold text-slate-900 leading-[1.3] tracking-tight">
              정직하게 준비한 자료가 차이를 만듭니다
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {principles.map((p) => (
              <div key={p.title} className="border-t-2 border-[#0b3d2e] pt-5">
                <h3 className="text-base font-bold text-slate-900 leading-[1.4] mb-3">
                  {p.title}
                </h3>
                <p className="text-[13.5px] text-slate-600 leading-[1.7]">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. 자주 묻는 질문 */}
      <section className="py-20 lg:py-28 bg-[#f3f7f5]">
        <div className="max-w-[820px] mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-9">
            자주 묻는 질문
          </h2>

          <div className="space-y-4">
            {faqs.map((item, idx) => {
              const isOpen = openFaqIndices.includes(idx);
              return (
                <div
                  key={item.q}
                  className="bg-white border border-slate-200/70 rounded-2xl p-6 sm:p-7"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-4 text-left cursor-pointer"
                  >
                    <h3 className="text-[15.5px] sm:text-base font-bold text-slate-900">
                      {item.q}
                    </h3>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <p className="text-sm text-slate-600 leading-[1.7] mt-3">
                      {item.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 12. Bottom CTA */}
      <section className="py-20 lg:py-24 bg-[#0b3d2e] text-white text-center">
        <div className="max-w-[760px] mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-extrabold leading-[1.35] tracking-tight mb-4">
            법정 밖에서 준비할 수 있는 것,
            <br />
            지금 함께 시작하세요
          </h2>
          <p className="text-sm sm:text-base text-white/80 mb-8">
            사건 단계와 지역을 알려주시면 진행 가능한 일정과 방식을 안내해
            드립니다.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-3 mb-8">
            <a
              href={PHONE_HREF}
              className="px-7 py-3.5 bg-white text-[#0b3d2e] rounded-full text-sm font-bold hover:bg-slate-100 transition-colors inline-flex items-center gap-2 whitespace-nowrap shrink-0"
            >
              <Phone size={15} />
              전화 문의 0507-1351-5463
            </a>
          </div>

          <p className="text-xs text-white/50">
            법률 서비스는 협력 변호사가 직접 제공하며, 본 센터는 변호사 연계에 따른
            대가를 받지 않습니다.
          </p>
        </div>
      </section>
    </div>
  );
};
