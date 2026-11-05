import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  Calendar,
  User,
  ArrowRight,
  X,
  Clock,
} from "lucide-react";

interface ColumnItem {
  id: number;
  title: string;
  excerpt: string;
  content: string[];
  author: {
    name: string;
    role: string;
    image: string;
  };
  date: string;
  category: string;
  readTime: string;
  bannerImage: string;
}

const columns: ColumnItem[] = [
  {
    id: 1,
    title: "음주운전 처벌 강화에 따른 양형자료 준비 가이드",
    excerpt:
      "사법부의 음주운전 처벌 기준이 엄격해짐에 따라, 진정성 있는 반성과 재범 방지 노력을 입증하기 위한 실질적 원칙과 효과적인 양형자료 준비법을 알려드립니다.",
    content: [
      "최근 사법부와 검찰은 음주운전에 대해 단순한 일회성 실수가 아닌, 불특정 다수의 생명을 위협하는 중대한 범죄로 취급하고 있습니다. 처벌 기준과 형량이 대폭 강화됨에 따라 재판 과정에서 피고인이 제출하는 양형 자료의 신뢰성과 진정성이 그 어느 때보다 중요해졌습니다.",
      "많은 분들이 인터넷이나 주변의 조언을 듣고 단순히 정형화된 반성문이나 탄원서 몇 장만을 준비하는 경우가 많습니다. 하지만 법원과 재판부는 수없이 많은 형식적인 문서를 검토하기 때문에 지나치게 상투적인 내용은 오히려 나쁜 인상을 주거나 실질적으로 양형에 참작되지 않을 가능성이 높습니다.",
      "실효성 있는 양형자료의 핵심은 '진정성 있는 반성'과 '재발방지를 위한 구조적이고 구체적인 노력'을 객관적으로 입증하는 것입니다.",
      "첫째, '반성의 태도'는 추상적인 글이 아니라 행동으로 증명되어야 합니다. 음주 운전 직후 본인의 차량을 매각하거나 폐차하는 조치는 매우 설득력 있는 재발 방지 행동의 일환으로 판단될 수 있습니다. 또한 알코올 치료 전문 병원이나 저희와 같은 공인 심리상담 센터를 통해 전문적인 심리 치료 및 행동 교정 프로그램을 시작했음을 증명하는 서류(진단서, 상담확인서, 치료일지)는 절대적으로 유용합니다.",
      "둘째, '재범 위험성 배제'입니다. 본인이 술에 빠졌던 원인을 냉철하게 분석하고 치료 및 상담을 정기적으로 수강하고 있음을 구체적으로 보여주어야 합니다. 교육 프로그램의 출석부, 상담 과정에서 본인이 작성한 자기반성 일지나 워크북 등을 첨부하는 것이 유리합니다.",
      "단순히 '한 번만 선처해 달라'는 호소는 통하지 않습니다. 스스로 통제 불가능한 상태를 인정하고, 전문가들의 구조적인 평가를 수용하며, 향후 단주의 계획을 어떻게 구체적으로 실행해 나갈 것인지를 철저히 입증하는 자료 구성이 감형을 유도하는 유일하고 확실한 길입니다.",
    ],
    author: {
      name: "윤영준 대표원장",
      role: "중독·범죄 전문 심리상담가 / 상담학 박사",
      image:
        "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1776971442/dec5ff46-df87-4bb0-8b0d-d90f1cd06d5d_cxd8uj.png",
    },
    date: "2026.06.01",
    category: "양형 & 법률",
    readTime: "5분",
    bannerImage:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    title: "알코올 의존도 자가 진단 및 심리적 대처법",
    excerpt:
      "음주운전 재범 근절의 첫 단추는 본인의 알코올 섭취 습관을 객관적으로 인정하는 데 있습니다. 의존성 단계를 자가 진단하고, 심리적인 갈망을 다스리는 행동 가이드를 제시합니다.",
    content: [
      "음주운전으로 적발되시는 분들 중 상당수는 '내가 알코올 중독은 아니다', '운이 나빠 걸렸을 뿐 술은 기분 좋게 조절할 수 있다'고 믿습니다. 그러나 통계적으로 음주운전 초범 내담자들의 상당수도 이미 알코올 의존 증상인 '내성'이나 '블랙아웃(필름 끊김)'을 빈번하게 겪고 있는 경우가 아주 흔합니다.",
      "알코올 의존은 서서히 마음과 뇌를 갉아먹는 질환이므로 스스로 통제력을 상실했음에도 이를 부정하게 만듭니다. 재범을 저지르는 분들의 치명적인 공통점은 '뇌의 전두엽 기능 약화'와 심리적인 '부정(Denial)'에 있습니다.",
      "자가 진단을 위해 아래 항목 중 2가지 이상이 해당한다면 즉각적인 상담 조치가 필요합니다.",
      "1. 술을 줄이거나 끊으려고 시도해 보았지만 실패한 적이 있다. 2. 음주 후 행동에 대해 후회되거나 주변에서 음주와 관련해 비판한 적이 있다. 3. 필름이 끊기는 경우가 분기에 1회 이상 발생한다. 4. 아침이나 낮에 술을 마시고 싶거나 해장술을 마신 적이 있다.",
      "이를 극복하기 위한 심리적 대처의 첫 단계는 '갈망(Craving) 인지'와 '대체 행동 설계'입니다. 흔히 술이 생각나는 순간은 스트레스, 외로움, 특정 인간관계 등 자극 요인이 작동할 때입니다. 술 생각이 강하게 날 때 바로 술잔을 드는 대신 15분을 견디는 '지연 전략'을 사용해야 합니다. 뇌의 도파민 충동은 보통 15분을 정점으로 사그라들기 때문입니다.",
      "또한 술자리 모임을 의도적으로 회피하고, 본인을 지지해주고 감시해줄 수 있는 단주 파트너나 가족, 그리고 전문 조력자를 적극적으로 곁에 두어야 합니다. 자신을 객관적으로 마주 보는 순간 치료는 시작됩니다.",
    ],
    author: {
      name: "윤영준 대표원장",
      role: "중독·범죄 전문 심리상담가 / 상담학 박사",
      image:
        "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1776971442/dec5ff46-df87-4bb0-8b0d-d90f1cd06d5d_cxd8uj.png",
    },
    date: "2026.05.24",
    category: "심리상담 & 예방",
    readTime: "4분",
    bannerImage:
      "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1793766347/assdf_vmdtbp.png",
  },
  {
    id: 3,
    title: "재범 방지 교육 이수가 사법 처리 결과에 미치는 실질적 영향",
    excerpt:
      "단순한 벌금 회피용 교육이 아닙니다. 전문적인 재범 방지 교육 이수를 통해 사법 당국과 법원에 진정성 있는 인지 왜곡 교정 노력을 증명하는 메커니즘을 상세히 다룹니다.",
    content: [
      "음주운전 피고인 상담을 진행하며 가장 많이 받는 질문 중 하나는 바로 '재범방지 교육이나 심리상담 수강 확인서가 진짜 재판 결과에 도움이 되나요?'입니다. 결론부터 말씀드리면, 형식적인 종이 한 장 수준은 무의미하나 양질의 검증된 전문 재범방지 시스템을 수료하는 행위는 재판부에 아주 유의미한 양형 조건으로 작용합니다.",
      "대법원 양형위원회가 제시하는 특별양형 인자 중에는 '진지한 반성'과 '재범 위험성 감소를 위한 자발적 노력'이 명시되어 있습니다. 재판부는 단순히 '다시는 안 마시겠다'는 피고인의 말 한마디를 결코 믿지 않습니다. 수많은 상습 범죄자들이 똑같은 법정 진술을 매일 하기 때문입니다.",
      "따라서 수사기관과 법원을 움직이는 것은 '체계적인 교육 프로그램에 자발적으로 참여하여 스스로의 문제를 자각하고 태도를 실질적으로 교정한 객관적 흔적'입니다.",
      "전문 교육 상담 기관에서 진행되는 재범방지 교육에는 단순히 음주운전의 법적 위험뿐 아니라 개인의 잘못된 신념, 습관적 행동 양식, 대인간 분노 조절 등 다각적인 심리 교정 모듈이 결합되어 있습니다.",
      "프로그램 이수 후 발급되는 '전문가 소견서 및 교육 이수 보고서'에는 본 센터 대표자의 서명과 직인은 물론 가해자의 성실도 평가, 인지적 변화 상태가 전문 용어와 수치로 심도 있게 리포트됩니다.",
      "이는 변호인 의견서와 함께 결합 시 강력한 시너지를 내어 판사의 재량 감형 및 보호관찰 조건부 선처 등의 긍정적 사법 처리를 유도할 수 있는 탄탄한 사회적 안전망 증빙이 됩니다. 선처는 능동적으로 입증하는 이들의 전유물입니다.",
    ],
    author: {
      name: "강주오 변호사",
      role: "법무법인 로하스 대표변호사",
      image:
        "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1776971476/73290c9b-6542-4f47-9ea0-ec8be1861807_plqybw.png",
    },
    date: "2026.05.18",
    category: "양형 & 법률",
    readTime: "6분",
    bannerImage:
      "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1793766519/sfgsdfg_a7zmgd.png",
  },
  {
    id: 4,
    title: "단주를 위한 마음가짐과 인지행동 치유의 원리",
    excerpt:
      "몸과 마음의 면역을 강화하여 알코올 의존성을 서서히 거둬내고 건강한 행동 리듬을 안착하는 기능의학 및 지혜로운 인지 치유법을 제시합니다.",
    content: [
      "음주 충동을 억제하기 위해 단순히 '참고 견디는 것'은 극도의 고통과 재발의 불씨를 남겨둡니다. 근본적으로 단주를 유지하기 위해서는 우리의 왜곡된 보상 심리와 신경 전달 전구 물질들의 균형부터 바로잡는 '행동 교정적 중재'가 개입되어야 합니다.",
      "알코올은 고장 난 라디오 볼륨처럼 뇌의 쾌락 수용체를 과작동시켰다가 술이 깨면서 극도의 불안과 영양 소모를 남깁니다. 그리하여 사람들은 '불안을 없애려고 다시 마시는' 악순환 고리에 빠집니다.",
      "기능의학적 관점에서는 불균형해진 비타민과 필수 미네랄 영양소를 적극 공급하고 충분한 수면 환경을 재설계함으로써 뇌의 생화학적 불안 상태를 조절해야 합니다. 건강한 신체 기반이 마련되어야 비로소 심리 상담 기법이 안전하게 뇌 속에 안착할 수 있습니다.",
      "또한 인지행동치료(CBT)를 통해 '술을 마시면 스트레스가 해소된다'는 가짜 신념을 전면적으로 수정해 나가야 합니다. 술은 스트레스를 뇌가 일시적으로 인지하지 못하게 고장 내는 독극물이지 해결책이 될 수 없음을 스스로 가슴 깊이 납득하도록 만드는 원리입니다.",
      "이를 '체계적 둔감화' 과정과 '인지 재구조화' 상담 과정을 통해 훈련합니다. 참는 것이 아니라 더는 마시고 싶지 않은 해방된 마음의 무덤덤함에 도달하는 것이 진정한 치료의 귀결점입니다.",
    ],
    author: {
      name: "소윤주 부원장",
      role: "부원장 / 기능의학 전문가",
      image:
        "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1774347139/KakaoTalk_20240521_123825759_gslvpg.jpg",
    },
    date: "2026.05.10",
    category: "치료 & 행동교정",
    readTime: "5분",
    bannerImage:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800",
  },
];

export const Column = () => {
  const [selectedColumn, setSelectedColumn] = useState<ColumnItem | null>(null);

  return (
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="bg-emerald-50/50 py-16 mb-16 border-y border-emerald-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 text-primary font-bold text-xs rounded-full uppercase tracking-wider">
              <BookOpen size={12} /> Experts Insight
            </span>
            <h1 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              전문가 칼럼
            </h1>
            <p className="text-lg text-slate-600 font-medium max-w-3xl mx-auto break-keep">
              한국음주운전재범방지교육상담센터의 대표 전문가들이
              전해드리는 사법 대응 가이드, 심리 분석 및 극복 솔루션입니다.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main List Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {columns.map((column, idx) => (
            <motion.div
              key={column.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-[2rem] overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col justify-between group hover:shadow-2xl hover:border-slate-200/80 transition-all duration-500"
            >
              <div>
                {/* Banner */}
                <div className="h-56 relative overflow-hidden bg-slate-100">
                  <img
                    src={column.bannerImage}
                    alt={column.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-6 left-6 bg-slate-900/80 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-black text-white tracking-wide">
                    {column.category}
                  </div>
                </div>

                {/* Body info */}
                <div className="p-8 lg:p-10">
                  <div className="flex items-center gap-4 text-xs font-bold text-slate-400 mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar size={13} /> {column.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={13} /> {column.readTime} 소요
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-slate-900 group-hover:text-primary transition-colors leading-snug tracking-tight mb-4 break-keep">
                    {column.title}
                  </h3>

                  <p className="text-slate-500 font-medium text-sm leading-relaxed mb-6 break-keep line-clamp-3">
                    {column.excerpt}
                  </p>
                </div>
              </div>

              {/* Author Footer & Button */}
              <div className="px-8 lg:px-10 pb-8 pt-4 border-t border-slate-50 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-slate-100 bg-slate-50">
                    <img
                      src={column.author.image}
                      alt={column.author.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-black text-slate-900 leading-none mb-1">
                      {column.author.name}
                    </p>
                    <p className="text-[11px] text-slate-400 font-medium">
                      {column.author.role}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedColumn(column)}
                  className="px-6 py-3 bg-slate-50 text-slate-700 hover:bg-primary hover:text-white rounded-full font-bold text-xs transition-colors duration-300 flex items-center gap-2"
                >
                  칼럼 읽기 <ArrowRight size={14} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick Helper Banner */}
        <div className="mt-20 bg-slate-900 rounded-[2.5rem] p-10 lg:p-16 text-white text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 translate-x-1/2"></div>
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl font-black tracking-tight break-keep">
              사법적인 가책과 음주 갈망에 헤매고 계시다면
            </h2>
            <p className="text-slate-300 font-medium leading-relaxed break-keep text-sm lg:text-base">
              전문가 집단의 체계적인 진단과 신뢰할 수 있는 법적 양형 자료, 인지
              교정 노하우가 집약된 최고의 교육심리 프로그램을 통해 안전하게
              일상으로 귀환하세요.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="tel:0507-1351-5463"
                className="px-8 py-4 bg-primary hover:bg-secondary text-white rounded-full font-bold shadow-lg shadow-primary/20 transition-all text-sm"
              >
                전화 문의 (0507-1351-5463)
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Reader Modal */}
      <AnimatePresence>
        {selectedColumn && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto"
            onClick={() => setSelectedColumn(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 max-w-4xl w-full max-h-[85vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image banner inside modal */}
              <div className="h-64 sm:h-80 relative overflow-hidden bg-slate-100">
                <img
                  src={selectedColumn.bannerImage}
                  alt={selectedColumn.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <button
                  onClick={() => setSelectedColumn(null)}
                  className="absolute top-6 right-6 w-11 h-11 bg-black/40 hover:bg-black/60 text-white rounded-full flex items-center justify-center transition-colors z-10 font-bold"
                >
                  <X size={20} />
                </button>
                <div className="absolute bottom-8 left-8 sm:left-12 pr-12 text-white">
                  <span className="inline-block bg-primary px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider mb-3">
                    {selectedColumn.category}
                  </span>
                  <h2 className="text-xl sm:text-3xl font-black tracking-tight leading-snug break-keep">
                    {selectedColumn.title}
                  </h2>
                </div>
              </div>

              {/* Content area */}
              <div className="p-8 sm:p-12">
                {/* Author Info block */}
                <div className="flex flex-col sm:flex-row justify-between sm:items-center pb-8 border-b border-slate-100 gap-6 mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary bg-slate-50">
                      <img
                        src={selectedColumn.author.image}
                        alt={selectedColumn.author.name}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div>
                      <p className="text-base font-black text-slate-900 mb-1">
                        {selectedColumn.author.name}
                      </p>
                      <p className="text-xs text-slate-500 font-medium">
                        {selectedColumn.author.role}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-xs font-bold text-slate-400">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} /> {selectedColumn.date} 작성
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} /> 일독 약 {selectedColumn.readTime}
                    </span>
                  </div>
                </div>

                {/* Article body */}
                <div className="text-slate-700 leading-relaxed space-y-6 text-base sm:text-lg font-medium break-keep">
                  {selectedColumn.content.map((paragraph, pIdx) => (
                    <p key={pIdx} className="text-justify indent-2">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Action Footer */}
                <div className="mt-12 pt-8 border-t border-slate-100 flex justify-end items-center">
                  <button
                    onClick={() => setSelectedColumn(null)}
                    className="w-full sm:w-auto px-8 py-3.5 bg-slate-900 hover:bg-slate-800 text-white rounded-full font-bold text-sm transition-all text-center"
                  >
                    목록으로 돌아가기
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
