import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  GraduationCap,
  Briefcase,
  BookOpen,
  Languages,
  FileText,
  Award,
  Users,
  Mic,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";

type SectionIconType =
  | "edu"
  | "career"
  | "book"
  | "translation"
  | "upcoming"
  | "award"
  | "society"
  | "broadcast";

interface BioSection {
  title: string;
  icon: SectionIconType;
  items: string[];
}

interface ExpertItem {
  name: string;
  image: string;
  imagePosition?: string;
  title: string;
  desc: React.ReactNode;
  roles: string;
  linkTo?: string;
  bioSections?: BioSection[];
}

const renderSectionIcon = (type: SectionIconType) => {
  switch (type) {
    case "edu":
      return <GraduationCap size={17} className="text-primary shrink-0" />;
    case "career":
      return <Briefcase size={17} className="text-primary shrink-0" />;
    case "book":
      return <BookOpen size={17} className="text-primary shrink-0" />;
    case "translation":
      return <Languages size={17} className="text-primary shrink-0" />;
    case "upcoming":
      return <FileText size={17} className="text-primary shrink-0" />;
    case "award":
      return <Award size={17} className="text-primary shrink-0" />;
    case "society":
      return <Users size={17} className="text-primary shrink-0" />;
    case "broadcast":
      return <Mic size={17} className="text-primary shrink-0" />;
  }
};

const expertGroups: ExpertItem[][] = [
  // 1행 2열
  [
    {
      name: "윤영준 대표원장",
      image:
        "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1776971442/dec5ff46-df87-4bb0-8b0d-d90f1cd06d5d_cxd8uj.png",
      title: "대표원장 / 중독, 범죄 전문 심리상담가",
      desc: "음주운전 심리 및 재범방지 전문가.",
      roles: "상담학 박사 / 국제 임상최면치료사",
      linkTo: "/about/director",
    },
    {
      name: "소윤주 부원장",
      image:
        "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1774347139/KakaoTalk_20240521_123825759_gslvpg.jpg",
      title: "부원장 / 기능의학 전문가",
      desc: "알코올 의존 및 행동 수정 전문가.",
      roles: "기능의학 / 최면 / 성상담 전문가",
      bioSections: [
        {
          title: "학회",
          icon: "society",
          items: [
            "제5심리과학학회 이사, 동서통합심리학회 이사",
            "대한레이저피부모발학회, 대한미용성형레이저학회",
            "대한일차진료학회, 대한필러학회",
          ],
        },
        {
          title: "학력 및 경력",
          icon: "edu",
          items: [
            "원광대학교 의과대학",
            "전 부산서울피부과의원",
            "전 대전 DS피부과의원",
            "전 대전 J의원",
            "전 대구 파르베의원",
            "현 미안의원 부원장",
          ],
        },
        {
          title: "방송활동 및 출강",
          icon: "broadcast",
          items: [
            "KBS 동행, MBC 등 다수 출연",
            "고용노동부, 교육지원청, 한화글로벌, 삼성탈레스, 한화, LG 이노텍 등 다수 강의",
            "중·고·대학교 인터넷 중독예방, 자살예방교육 강의, 심리검사 및 교육",
            "서던캘 타임즈 의학부(의과학) 칼럼위원",
            "뇌과학기술인협회, 나무명상",
          ],
        },
        {
          title: "저서",
          icon: "book",
          items: ["회복과 성장", "심신건강 최면치료"],
        },
        {
          title: "강의내용",
          icon: "upcoming",
          items: [
            "몸·마음 건강과 기능의학",
            "명상과 건강",
            "명상과 심신건강",
            "심신전환을 위한 싱잉요법",
          ],
        },
      ],
    },
  ],
  // 2행 3열
  [
    {
      name: "허선무 변호사",
      image:
        "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1776971435/3e1b3bd6-c219-4e70-b259-e535e502df92_elrt12.png",
      title: "법무법인 소울 변호사 / 음주운전 사건 전문 변호사",
      desc: "전문적인 법률 자문 및 대응 전략 지원.",
      roles: "현재 법무법인 소울 변호사 / 창원지방법원 조정위원",
      bioSections: [
        {
          title: "주요 약력 및 경력",
          icon: "career",
          items: [
            "사법연수원 44기 수료",
            "창원지방법원 민사조정위원",
            "창원지방검찰청 검사직무대리",
            "창원지방법원 국선변호인",
            "대한법률구조공단 창원지부 구조위원",
            "김해중부경찰서 수사민원상담센터 상담변호사",
            "경남 농아인협회 창원지회 자문위원",
            "창원지방검찰청 형사조정위원",
            "이혼·상속 전문변호사 등록",
            "법무법인 소울 변호사",
          ],
        },
      ],
    },
    {
      name: "강주오 대표 변호사",
      image:
        "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1776971476/73290c9b-6542-4f47-9ea0-ec8be1861807_plqybw.png",
      title: "법무법인 로하스 대표변호사",
      desc: "음주운전 및 형사 사건, 구미시 고문변호사로 활동 중입니다.",
      roles:
        "現 법무법인 로하스 대표변호사 / 경북도청 법률상담관 / 구미시 법률 상담관 / 구미시의회 고문변호사",
      bioSections: [
        {
          title: "학력",
          icon: "edu",
          items: [
            "대아고등학교 졸업",
            "성균관대학교 졸업 (행정학사, 경제학사)",
            "동아대학교 법학전문대학원 졸업",
          ],
        },
        {
          title: "현재 경력 (現)",
          icon: "career",
          items: [
            "現 법무법인 로하스 대표변호사",
            "現 법무부 창조경제혁신센터 법률지원단 자문 변호사",
            "現 법무부 남북하나재단 북한이탈주민 지원 변호인",
            "現 경북하나센터, 대구하나센터 고문변호사",
            "現 삼성연합의원 탑/예스정형외과의원 등 다수 병원 자문",
            "現 옥계아동병원 자문",
            "現 칠곡북삼 지역주택 조합 고문 변호사",
            "現 삼성전자 주식회사 자문변호사",
            "現 경북지방노동위원회 권리구제대리인",
            "現 국가권익위원회 비실명대리신고 자문변호사",
            "現 중소벤처기업부 불공정거래 신고센터 법률전문위원",
            "現 경북도청 법률상담관, 보건복지부 산하 행복재단 감사",
            "現 구미시 법률 상담관",
            "現 구미시의회 고문변호사",
            "現 구미교육청 학폭심의위원회 위원장",
            "現 대구지방 가정법원 김천지원 민사/가사 조정위원회 부회장",
            "現 구미경찰서 법률상담변호사, 경미범죄심사위원, 여성청소년 지도위원, 아동학대예방 자문의원",
            "現 법무부 법사랑 위원",
            "現 경북경찰청 청원심의위원회 위원",
            "現 경북경찰청 보통징계위원회 위원",
            "現 금오공과대학교 보통징계위원회 위원",
            "現 구미 인동농협/산동농협 상담 변호사",
          ],
        },
        {
          title: "이전 경력 (前)",
          icon: "award",
          items: [
            "前 법무법인 정인(正人)",
            "前 삼성전자 주식회사 인사팀",
            "前 강동 종합법률사무소 대표변호사",
          ],
        },
      ],
    },
    {
      name: "백진욱 변호사",
      image:
        "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1777026382/bfb4a67d-9cf5-410b-9338-7f76ed3b73b9-md_qycut4.jpg",
      title: "법무법인 로하스 변호사",
      desc: "음주운전 및 형사 사건 전문 법률 조력자.",
      roles: "現 법무법인 로하스 변호사",
      bioSections: [
        {
          title: "학력",
          icon: "edu",
          items: [
            "고려대학교 사회/행정학 전공",
            "경북대학교 법학전문대학원 졸업",
          ],
        },
        {
          title: "경력",
          icon: "career",
          items: ["現 법무법인 로하스 변호사", "前 한국부동산원 변호사"],
        },
      ],
    },
  ],
  // 3행 3열 (문영애 교수 · 임진수 박사 · 이제승 교수)
  [
    {
      name: "문영애 교수",
      image:
        "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1779201676/%EB%AC%B8%EC%98%81%EC%95%A0_%EA%B5%90%EC%88%981_q9eo9t.png",
      title: "움직임치료 · 꿈치료 · 전문 코칭",
      desc: (
        <>
          <span className="block">신체와 무의식의 통합적 치유를 통해</span>
          <span className="block">심리적 안정과 전인적 회복을 지원합니다.</span>
        </>
      ),
      roles:
        "상담심리학 박사 / 자아초월상담학 박사 / 휠든크라이스 수퍼바이저",
      bioSections: [
        {
          title: "학력 및 학위",
          icon: "edu",
          items: [
            "상담심리학 박사",
            "자아초월상담학 박사",
            "성균관대학교 체육학 박사과정 이수",
          ],
        },
        {
          title: "전문 분야",
          icon: "society",
          items: [
            "움직임 치료",
            "꿈치료",
            "전문 코칭",
          ],
        },
        {
          title: "경력 및 주요 활동",
          icon: "career",
          items: [
            "휠든크라이스 수퍼바이저",
            "상담코치협회 이사",
            "한국신체심리치료 연구소 대표",
            "자기치유 관련 저서 공저",
            "방송 특강, 움직임 치료, 꿈치료, 기업 강의 및 코칭",
          ],
        },
      ],
    },
    {
      name: "임진수 박사",
      image: "/assets/aistudio/1446168883094_f6a2a5ce.jpg",
      imagePosition: "object-[center_18%]",
      title: "정신분석가 / 프로이트 라캉 학회 대표",
      desc: (
        <>
          <span className="block">심층 정신분석을 통한 무의식적 충동 분석 및</span>
          <span className="block">근본적 행동 변화를 자문합니다.</span>
        </>
      ),
      roles:
        "서울대학교 박사 / 계명대학교 교수 역임 / 프랑스 파리 8대학 DEA",
      bioSections: [
        {
          title: "학력 및 주요 약력",
          icon: "edu",
          items: [
            "서울대학교 불어교육과 졸업, 동 대학원 박사학위 취득",
            "계명대학교 유럽학과 교수 역임",
            "프랑스 파리 VIII 대학 정신분석학과에서 DEA 취득 및 박사과정 수료",
            "1995년부터 2003년까지 파리 고등사회과학원(E.H.E.S.S.) 교수인 프랑수아즈 다부안느(Françoise Davoine)에게 교육 분석을 받음",
            "2002년부터 대구에 '프로이트 라캉 학교'를 개설하고 정신분석가로 활동 중",
          ],
        },
        {
          title: "저서",
          icon: "book",
          items: [
            "『정신분석 세미나 IV: 환상의 정신분석』",
            "『정신분석 세미나 Ⅴ: 남근의 의미작용』",
            "『정신분석 세미나 IX: 네 가지 담화』",
            "『정신분석 세미나 XI: 위상학적 정신분석』 등 정신분석 세미나 총서 16권",
          ],
        },
        {
          title: "역서",
          icon: "translation",
          items: [
            "『정신분석사전』 (라플랑슈, 퐁탈리스)",
            "『정신분석의 탄생』 (프로이트)",
            "『끝이 있는 분석과 끝이 없는 분석』 (프로이트) 등",
          ],
        },
        {
          title: "발간 예정",
          icon: "upcoming",
          items: [
            "『신경증의 병인』",
            "『정신분석적 정신치료』",
            "『세미나 X : 불안』",
            "『세미나 XX : 앙코르』",
          ],
        },
      ],
    },
    {
      name: "이제승 교수",
      image:
        "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1779153823/%EC%9D%B4%EC%A0%9C%EC%8A%B9_%EA%B5%90%EC%88%98_gkluyp.jpg",
      title: "국제마음치유연구원 원장 / 심리상담학과 교수",
      desc: "체계적인 마음치유 프로그램으로 재범 방지를 조력합니다.",
      roles:
        "국제마음치유연구원 원장 / 심리상담학과 교수 / 한국심리상담전문학회 학회장",
      bioSections: [
        {
          title: "주요 약력",
          icon: "career",
          items: [
            "IMC 국제마음치유연구원 원장",
            "국제기독대학교 심리상담학과 교수",
            "한국심리상담전문학회 학회장",
          ],
        },
      ],
    },
  ],
  // 4행 3열 (유보경 선생님 · 함종수 교수 · 윤송이 선생님)
  [
    {
      name: "유보경 선생님",
      image:
        "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1779201666/%EC%9C%A0%EB%B3%B4%EA%B2%BD_%EC%84%A0%EC%83%9D%EB%8B%98_2_lobfoq.png",
      title: "상담심리 전문가 / 성인 교육 강사",
      desc: "음주운전 예방 및 재발 방지를 위한 심리 교육 전문가.",
      roles: "상담심리 전문가 / 성인 교육 강사",
      bioSections: [
        {
          title: "학력",
          icon: "edu",
          items: [
            "경북대학교대학원 아동복지과 전공 석사",
            "경북대학교대학원 아동가족학 전공 박사과정",
          ],
        },
        {
          title: "전문 교육 및 자격 사항",
          icon: "award",
          items: [
            "보육교수 1급, 평생교육사 2급, 사회복지사 2급, 요양보호사 1급",
            "심리상담사 1급, 발달진단평가 2급, 미술치료사 1급",
            "NLP프랙티셔너, 최면심리상담사 2급",
            "이고그램 전문강사 과정",
            "덴버(6개월), 베일리검사(12, 24, 36개월), 코오트 전문검사요원",
            "장애아보육도우미교육",
            "특별직무교육과정(장애아보육과정, 방과후교육과정)",
            "장애아 보육시설 교사교육(장애유형에 대한 이해 및 지도방법, IEP 함께 작성하기)",
            "2011년 보육시설 평가인증 참여설명회 및 지도교육",
            "자원개발을 위한 프로포절 핵심기법",
            "장애아어린이집 교사교육(장애 영유아 부모의 이해와 지원방법)",
          ],
        },
        {
          title: "경력 · 수상 및 방송 · 학회 활동",
          icon: "career",
          items: [
            "발로 뛰는 희망천사 에세이 ‘최우수상’",
            "우수교사 해외연수(전국 장애아동 보육시설협의회)",
            "사회복지인상(사회복지협의회)",
            "장애전담 어린이집 근무",
            "장애인복지관 가족소통프로그램 진행",
            "노인복지관, 요양원 집단상담, 미술치료",
            "삼성팰리스, MBC생방송 오늘의 아침, 연합뉴스 등 다수 출연",
            "순천향대학병원·대구가톨릭대학병원 연구원",
            "어린이문학교육학회 정회원",
            "한국심리학회 정회원, 임상코디네이터",
          ],
        },
      ],
    },
    {
      name: "함종수 교수",
      image:
        "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1793856790/professor_wut7ut.png",
      title: "미국상담심리치료학회(AACPT) 회장",
      desc: (
        <>
          <span className="block">철학과 심리학의 깊이 있는 통찰을 바탕으로</span>
          <span className="block">근본적인 인지 변화와 회복을 자문합니다.</span>
        </>
      ),
      roles:
        "애리조나 주립대 철학과 교수 역임 / 철학·신학·심리학 박사 / 미국 LA 시장상 수상",
      bioSections: [
        {
          title: "학력 및 학위",
          icon: "edu",
          items: [
            "철학박사 (Ph.D.)",
            "신학박사 (Th.D.)",
            "심리학박사 (Psy.D.)",
          ],
        },
        {
          title: "주요 경력 및 직책",
          icon: "career",
          items: [
            "애리조나 주립대 철학과 교수 역임",
            "미국상담심리치료학회(AACPT) 회장",
            "미국장로교총회(GAPC) 목사",
          ],
        },
        {
          title: "수상 내역",
          icon: "award",
          items: ["미국 LA 시장상 수상"],
        },
      ],
    },
    {
      name: "윤송이 선생님",
      image:
        "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1779201655/%EC%9C%A4%EC%86%A1%EC%9D%B4_%EC%84%A0%EC%83%9D%EB%8B%98_2_q34upo.png",
      title: "임상심리사 / 재범방지 교육 강사",
      desc: "인지행동치료 기반의 음주운전 감수성 향상 교육.",
      roles: "임상심리사 2급(국가자격증) / 상담심리 전문가 / 재범방지 교육 강사",
      bioSections: [
        {
          title: "학력 및 자격 사항",
          icon: "edu",
          items: [
            "임상심리사 2급(국가자격증)",
            "경북대학교대학원 심리학 석사",
            "서불대 신심통합치유학과 뇌인지과학 박사수료",
            "위로상담가 수료, 청소년상담사 3급",
            "심리상담사 1급, 미술치료사 1급, 요가지도자 1급",
            "한국상담학회 준회원, NLP프랙티셔너",
          ],
        },
        {
          title: "주요 경력 및 출강 · 방송 활동",
          icon: "career",
          items: [
            "의성군건강가정지원센터 부부 힐링 클리닉",
            "구미시장애인종합복지관 장애부모자녀 관계 조정",
            "구미경찰서 전의경 상담",
            "기업 ㈜성진포머 직원지원프로그램(직원심리상담) 현 진행",
            "MBC 생방송 오늘의 아침 외 다수 출연",
            "대구노인종합복지관 황혼육아 양육코칭 강의",
            "대구 성서경찰서 기동대 폭력의 이해, 수치심/죄책감/열등감 강의",
            "대구장애인가족지원센터 동료상담가 실습진행",
            "대룡초등학교, 운암중학교, 의흥초등학교 집단상담",
          ],
        },
      ],
    },
  ],
  // 5행 3열
  [
    {
      name: "전경숙 선생님",
      image:
        "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1779198673/%EC%A0%84%EA%B2%BD%EC%88%99_%EC%84%A0%EC%83%9D%EB%8B%98_hctbka.png",
      title: "한국뇌기반심리상담 대표 / 상담심리 전문가",
      desc: (
        <>
          <span className="block">음주 습관 분석 및 알코올 문제 해결을 위한</span>
          <span className="block">뇌인지 기반 전문 심리 상담을 제공합니다.</span>
        </>
      ),
      roles: "뇌인지 박사 수료 / 교육학 명예박사 / 자아초월상담심리학 석사",
      bioSections: [
        {
          title: "학력 및 저서",
          icon: "edu",
          items: [
            "자아초월상담심리학 석사",
            "명상학 이수",
            "뇌인지 박사 수료",
            "International Christian College HONORARY DOCTOR EDUCATION (Ed.D) 교육학명예박사",
            "『아이의 몸과 뇌 바뀌면 성적이 오른다』 공저",
          ],
        },
        {
          title: "주요 경력",
          icon: "career",
          items: [
            "한국뇌기반심리상담 대표",
            "교육분야 20년 · 청소년 진로 및 발달상담",
            "조장희 박사님과 뇌과학문화운동 대표",
            "한국상담학회 회원",
            "아봐타/마스터",
          ],
        },
        {
          title: "활동 이력",
          icon: "broadcast",
          items: [
            "2015년 박문호 박사 뇌과학문화운동 8회차 진행",
            "2016년~2021년 조장희 박사 썸머 진행",
            "2019년~2021년 서초문화원 명상강의",
            "2022년 인천지역 학교상담교사 교육",
          ],
        },
        {
          title: "강의 및 프로그램",
          icon: "society",
          items: [
            "뇌상담사 양성과정 강의",
            "코칭프로그램 진행",
            "기아, 현대자동차 프로그램 진행",
            "코오롱기업연수 프로그램 진행",
            "NAVER 꿈분석 전문상담",
            "NAVER 명상상담",
          ],
        },
        {
          title: "자격 사항",
          icon: "award",
          items: [
            "뇌상담사",
            "진로상담사",
            "명상상담",
            "뇌교육지도사",
            "중독상담사, 성폭력상담사, 학교폭력상담사",
          ],
        },
      ],
    },
    {
      name: "박경실 선생님",
      image:
        "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1779200461/ChatGPT_Image_2026%EB%85%84_5%EC%9B%94_19%EC%9D%BC_%EC%98%A4%ED%9B%84_11_20_53_jagksr.png",
      title: "상담심리 전문가 / 청소년 상담사",
      desc: "내담자의 심리적 안정과 긍정적 행동 변화 지원.",
      roles: "상담심리 전문가 / 청소년 상담사",
      bioSections: [
        {
          title: "학력 및 자격",
          icon: "edu",
          items: [
            "최면상담학 박사",
            "심리상담학 석사",
            "임상심리사 1급",
            "사회복지사 1급",
            "청소년상담사 2급",
          ],
        },
        {
          title: "주요 경력",
          icon: "career",
          items: [
            "병영생활전문상담관",
            "어세스타",
            "서울시동부교육청 청소년상담센터",
          ],
        },
      ],
    },
    {
      name: "강민경 선생님",
      image:
        "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1779198673/%EA%B0%95%EB%AF%BC%EA%B2%BD_%EC%84%A0%EC%83%9D%EB%8B%98_2_bganyn.bmp",
      title: "상담심리 전문가 / 교육 강사",
      desc: "심리 정서적 지지를 통한 자존감 회복 및 재발 방지 상담.",
      roles: "가족학 석사 / 부모, 가족 교육 강사",
      bioSections: [
        {
          title: "학력",
          icon: "edu",
          items: ["가족학 석사, 미술치료 석사, 뇌인지 박사"],
        },
        {
          title: "주요 경력 및 자격",
          icon: "career",
          items: [
            "이든아이아동발달센터 부원장",
            "미술치료상담원",
            "한국아동발달지원연구소",
            "뇌교육사",
            "임상미술상담사",
            "진로상담사",
          ],
        },
      ],
    },
  ],
];

export const Experts = () => {
  const [selectedExpert, setSelectedExpert] = useState<ExpertItem | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedExpert(null);
      }
    };
    if (selectedExpert) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedExpert]);

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      {/* Header Area */}
      <div className="bg-emerald-50/50 py-16 mb-20 border-y border-emerald-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 tracking-tight">
              상담전문가
            </h1>
            <p className="text-lg text-slate-600 font-medium max-w-3xl mx-auto break-keep">
              한국음주운전재범방지교육상담센터는 단순한 처벌이 아닌 행동
              변화와 재범 방지를 목표로 합니다.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">
            음주운전 특화 전문가 및 자문위원
          </h2>
          <p className="text-slate-500 font-medium">
            단순 심리상담사가 아닌, 구조적 개입과 행동 교정의 전문가들이
            함께합니다.
          </p>
        </motion.div>

        <div className="space-y-16 lg:space-y-24">
          {expertGroups.map((group, groupIdx) => (
            <div
              key={groupIdx}
              className="flex flex-wrap justify-center gap-8 lg:gap-12"
            >
              {group.map((expert, idx) => {
                const hasBio = Boolean(
                  expert.bioSections && expert.bioSections.length > 0
                );
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className={`group flex flex-col items-center text-center w-full max-w-sm ${
                      group.length === 2
                        ? "sm:w-[calc(50%-2rem)] md:w-[calc(50%-2rem)] lg:w-[calc(50%-3rem)]"
                        : "sm:w-[calc(50%-2rem)] md:w-[calc(33.333%-2rem)] lg:w-[calc(33.333%-3rem)]"
                    }`}
                  >
                    {expert.linkTo ? (
                      <Link
                        to={expert.linkTo}
                        className="w-48 h-48 rounded-full overflow-hidden mb-6 shadow-xl shadow-slate-200/50 border-4 border-white group-hover:scale-105 transition-transform duration-500 cursor-pointer block"
                        title="클릭하여 소개 페이지로 이동"
                      >
                        <img
                          src={expert.image}
                          alt={expert.name}
                          referrerPolicy="no-referrer"
                          className={`w-full h-full object-cover ${
                            expert.imagePosition || "object-top"
                          } group-hover:scale-110 transition-transform duration-700`}
                        />
                      </Link>
                    ) : (
                      <div
                        onClick={() => hasBio && setSelectedExpert(expert)}
                        className={`w-48 h-48 rounded-full overflow-hidden mb-6 shadow-xl shadow-slate-200/50 border-4 border-white group-hover:scale-105 transition-transform duration-500 ${
                          hasBio ? "cursor-pointer" : ""
                        }`}
                      >
                        <img
                          src={expert.image}
                          alt={expert.name}
                          referrerPolicy="no-referrer"
                          className={`w-full h-full object-cover ${
                            expert.imagePosition || "object-top"
                          } group-hover:scale-110 transition-transform duration-700`}
                        />
                      </div>
                    )}

                    {expert.linkTo ? (
                      <Link
                        to={expert.linkTo}
                        className="text-xl sm:text-2xl font-black text-slate-900 hover:text-primary transition-colors mb-1 break-keep inline-flex items-center gap-1 cursor-pointer underline decoration-slate-300 hover:decoration-primary underline-offset-4"
                        title="클릭하여 소개 페이지로 이동"
                      >
                        <span>{expert.name}</span>
                        <ChevronRight size={18} className="text-primary shrink-0" />
                      </Link>
                    ) : hasBio ? (
                      <button
                        type="button"
                        onClick={() => setSelectedExpert(expert)}
                        className="text-xl sm:text-2xl font-black text-slate-900 hover:text-primary transition-colors mb-1 break-keep inline-flex items-center gap-1 cursor-pointer underline decoration-slate-300 hover:decoration-primary underline-offset-4"
                        title="클릭하여 상세 약력 보기"
                      >
                        <span>{expert.name}</span>
                        <ChevronRight size={18} className="text-primary shrink-0" />
                      </button>
                    ) : (
                      <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-1 break-keep">
                        {expert.name}
                      </h3>
                    )}

                    <p className="text-primary font-bold text-sm mb-2 break-keep">
                      {expert.title}
                    </p>
                    <div className="text-slate-500 text-sm leading-relaxed mb-2 break-keep">
                      {expert.desc}
                    </div>
                    <div className="text-slate-400 text-xs tracking-tight break-keep flex flex-wrap justify-center items-center gap-y-1">
                      {expert.roles.split(" / ").map((role, i) => (
                        <React.Fragment key={i}>
                          <span className="inline-block whitespace-nowrap">
                            {role}
                          </span>
                          {i !== expert.roles.split(" / ").length - 1 && (
                            <span className="inline-block mx-1.5 text-slate-300">
                              ·
                            </span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* Expert Detail Biography Modal */}
      <AnimatePresence>
        {selectedExpert && selectedExpert.bioSections && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-[2px]"
            onClick={() => setSelectedExpert(null)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="expert-bio-modal-title"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl max-h-[88vh] bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col break-keep"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between gap-4 px-6 sm:px-8 py-6 bg-slate-50 border-b border-slate-100 shrink-0">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-md shrink-0">
                    <img
                      src={selectedExpert.image}
                      alt={selectedExpert.name}
                      referrerPolicy="no-referrer"
                      className={`w-full h-full object-cover ${
                        selectedExpert.imagePosition || "object-top"
                      }`}
                    />
                  </div>
                  <div className="text-left">
                    <h3
                      id="expert-bio-modal-title"
                      className="text-2xl font-black text-slate-900 tracking-tight"
                    >
                      {selectedExpert.name}
                    </h3>
                    <p className="text-sm font-bold text-primary mt-0.5">
                      {selectedExpert.title}
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedExpert(null)}
                  className="w-9 h-9 rounded-full bg-white hover:bg-slate-100 border border-slate-200 text-slate-500 hover:text-slate-900 flex items-center justify-center transition-colors cursor-pointer shrink-0"
                  aria-label="닫기"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Modal Body */}
              <div className="overflow-y-auto px-6 sm:px-8 py-6 space-y-6 text-left">
                {selectedExpert.bioSections.map((section, secIdx) => (
                  <div
                    key={secIdx}
                    className={secIdx > 0 ? "pt-5 border-t border-slate-100" : ""}
                  >
                    <h4 className="text-sm font-extrabold text-slate-900 flex items-center gap-2 mb-3">
                      {renderSectionIcon(section.icon)}
                      <span>{section.title}</span>
                    </h4>
                    <ul className="space-y-2 text-sm text-slate-700 leading-relaxed pl-1">
                      {section.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <span className="text-primary font-bold mt-0.5">·</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Modal Footer */}
              <div className="px-6 sm:px-8 py-4 bg-slate-50 border-t border-slate-100 flex justify-end shrink-0">
                <button
                  type="button"
                  onClick={() => setSelectedExpert(null)}
                  className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-sm font-bold rounded-full transition-colors cursor-pointer"
                >
                  닫기
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
