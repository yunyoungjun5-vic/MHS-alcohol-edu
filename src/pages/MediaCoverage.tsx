import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Newspaper, Tv, ExternalLink, Calendar, Award, BookOpen, ArrowLeft, ChevronRight, X } from 'lucide-react';

// Define the Category Types
type CategoryTab = 'all' | 'broadcast' | 'lecture' | 'radio' | 'education';

export const MediaCoverage = () => {
  const [activeTab, setActiveTab ] = useState<CategoryTab>('all');
  const [popupImage, setPopupImage] = useState<{ src: string; title: string; desc: string } | null>(null);

  // Automatically scroll to the content area or top of window when active tab changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  useEffect(() => {
    if (popupImage) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setPopupImage(null);
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [popupImage]);

  // ==========================================================================
  // ARCHIVE DATASETS (Transcribed & curated based on real-world representative activities)
  // ==========================================================================

  // 1. 대표 활동 (Selected 6 High-Profile Items)
  const representativeItems = [
    {
      id: "rep1",
      category: "방송 출연",
      title: "KBS 동행 441회 후반부에 437회 ‘윤정이의 겨울 붕어빵’ 후기 방송분 1",
      desc: "KBS 동행 441회 후기 방송분 출연 1",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775307821/F677_5_z8bltz.png",
      date: "2024.12.07"
    },
    {
      id: "rep2",
      category: "방송 출연",
      title: "KBS 동행 441회 후반부에 437회 ‘윤정이의 겨울 붕어빵’ 후기 방송분 3",
      desc: "KBS 동행 441회 후기 방송분 출연 3",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775307789/KakaoTalk_20241207_200825917_01_kczsra.jpg",
      date: "2024.12.07"
    },
    {
      id: "rep3",
      category: "라디오 및 인터뷰",
      title: "TBN 교통방송 라디오 심리상담 코너",
      desc: "현대인의 충동 조절과 심리 분석",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775294702/20190607_094719_fx6e6a.jpg",
      date: "2019.06.07"
    },
    {
      id: "rep4",
      category: "방송 출연",
      title: "KBS1 '사랑의 가족' 방영분 3030회 '집착하는 아내와 수상한 남편'3",
      desc: "KBS1 '사랑의 가족' 3030회 출연 3",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775293098/%EC%82%AC%EB%9E%91%EC%9D%98_%EA%B0%80%EC%A1%B1_%EC%B5%9C%EB%A9%B4_vzfbjx.png",
      date: "2024.08.03"
    },
    {
      id: "rep5",
      category: "라디오 및 인터뷰",
      title: "라디오세상 울산만사 [ 2022년 05월 24일]",
      desc: "『연애할 때 애착 유형이 미치는 영향』 이라는 주제로 방송하였습니다.",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775292908/%EC%97%B0%EC%95%A0%ED%95%A0_%EB%95%8C_%EC%95%A0%EC%B0%A9_%EC%9C%A0%ED%98%95%EC%9D%B4_%EB%AF%B8%EC%B9%98%EB%8A%94_%EC%98%81%ED%96%A5_ss3jmj.jpg",
      date: "2022.05.24"
    },
    {
      id: "rep6",
      category: "강연 및 특강",
      title: "문경소방대원 상담 및 강의",
      desc: "문경소방대원 상담 및 강의",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775294966/1_cmgsnr.jpg",
      date: "2023.09.12"
    }
  ];

  // 2. 방송 출연 (Category 1) -> Total 26 items
  const broadcastItems = [
    {
      id: "bc_new1",
      broadcast: "KBS 동행",
      title: "KBS 동행 441회 후반부에 437회 ‘윤정이의 겨울 붕어빵’ 후기 방송분 1",
      desc: "KBS 동행 441회 '윤정이의 겨울 붕어빵' 가정을 위한 치료 프로그램 지원 1",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775307821/F677_5_z8bltz.png"
    },
    {
      id: "bc_new2",
      broadcast: "KBS 동행",
      title: "KBS 동행 441회 후반부에 437회 ‘윤정이의 겨울 붕어빵’ 후기 방송분 3",
      desc: "KBS 동행 441회 '윤정이의 겨울 붕어빵' 가정을 위한 치료 프로그램 지원 3",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775307789/KakaoTalk_20241207_200825917_01_kczsra.jpg"
    },
    {
      id: "bc_new3",
      broadcast: "KBS1 사랑의 가족",
      title: "KBS1 '사랑의 가족' 방영분 3030회 ’집착하는 아내와 수상한 남편’3",
      desc: "KBS1 '사랑의 가족' 3030회 솔루션 자문 및 정밀 상담과 의견 3",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775293098/%EC%82%AC%EB%9E%91%EC%9D%98_%EA%B0%80%EC%A1%B1_%EC%B5%9C%EB%A9%B4_vzfbjx.png"
    },
    {
      id: "bc_new4",
      broadcast: "MBC 실화탐사대",
      title: "MBC 실화탐사대 284회 마음을 닫아버린 딸 1",
      desc: "MBC 실화탐사대 284회 '마음을 닫아버린 딸' 자문 및 현장 인터뷰 1",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775306761/F113_GOMCAM_20241024_2238470227_mc9xrf.png"
    },
    {
      id: "bc_new5",
      broadcast: "MBC 실화탐사대",
      title: "MBC 실화탐사대 284회 마음을 닫아버린 딸 2",
      desc: "MBC 실화탐사대 284회 '마음을 닫아버린 딸' 자문 및 현장 인터뷰 2",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775306677/F112_GOMCAM_20241024_2240580615_ekst3i.png"
    },
    {
      id: "bc_new6",
      broadcast: "MBC 실화탐사대",
      title: "MBC 실화탐사대 284회 마음을 닫아버린 딸 3",
      desc: "MBC 실화탐사대 284회 '마음을 닫아버린 딸' 자문 및 현장 인터뷰 3",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775306676/F114_GOMCAM_20241024_2245280054_bvc0fo.png"
    },
    {
      id: "bc_new7",
      broadcast: "KBS1 사랑의 가족",
      title: "KBS1 '사랑의 가족' 방영분 3030회 ’집착하는 아내와 수상한 남편’1",
      desc: "KBS1 '사랑의 가족' 3030회 솔루션 자문 및 정밀 상담과 의견 1",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775307101/KakaoTalk_20240803_113845133_01_ucklcc.png"
    },
    {
      id: "bc_new8",
      broadcast: "KBS1 사랑의 가족",
      title: "KBS1 '사랑의 가족' 방영분 3030회 ’집착하는 아내와 수상한 남편’2",
      desc: "KBS1 '사랑의 가족' 3030회 솔루션 자문 및 정밀 상담과 의견 2",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775293104/%EC%82%AC%EB%9E%91%EC%9D%98_%EA%B0%80%EC%A1%B1_%EC%9C%A4%EC%9B%90%EC%9E%A5%EB%8B%98_%EC%A0%95%EB%A9%B4_fr1576.png"
    },
    {
      id: "bc_new9",
      broadcast: "KBS 동행",
      title: "KBS 동행 441회 후반부에 437회 ‘윤정이의 겨울 붕어빵’ 후기 방송분 2",
      desc: "KBS 동행 441회 '윤정이의 겨울 붕어빵' 가정을 위한 치료 프로그램 지원 2",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775307827/F674_2_ysucnz.png"
    },
    {
      id: "bc_new10",
      broadcast: "MBN 특종세상",
      title: "MBN 특종세상 351회 20년째 허리 굽은 채 통나무를 나르며 살아온 할머니1",
      desc: "MBN 특종세상 351회 '통나무 할머니'를 위한 정서 복구 및 위로 심리 상담 자문 1",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775307402/F136_GOMCAM_20250102_1950400666_xqosa0.png"
    },
    {
      id: "bc_new11",
      broadcast: "MBN 특종세상",
      title: "MBN 특종세상 351회 20년째 허리 굽은 채 통나무를 나르며 살아온 할머니2",
      desc: "MBN 특종세상 351회 '통나무 할머니'를 위한 정서 복구 및 위로 심리 상담 자문 2",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775307399/F137_GOMCAM_20250102_1951510757_cnfafa.png"
    },
    {
      id: "bc_new12",
      broadcast: "MBN 특종세상",
      title: "MBN 특종세상 351회 20년째 허리 굽은 채 통나무를 나르며 살아온 할머니3",
      desc: "MBN 특종세상 351회 '통나무 할머니'를 위한 정서 복구 및 위로 심리 상담 자문 3",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775307405/F138_GOMCAM_20250102_1953330454_ayqrv4.png"
    },
    {
      id: "bc_new13",
      broadcast: "SBS 그것이 알고 싶다",
      title: "SBS '그것이 알고 싶다' 방영분 1420회 세 용의자의 진실게임 - 영도 청학동 살인 사건 1",
      desc: "SBS '그것이 알고 싶다' 1420회 강력 최면 분석 및 관계자 용의 진술 자문 1",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775295062/KakaoTalk_20241207_211912951_08_evmvb8.jpg"
    },
    {
      id: "bc_new14",
      broadcast: "SBS 그것이 알고 싶다",
      title: "SBS '그것이 알고 싶다' 방영분 1420회 세 용의자의 진실게임 - 영도 청학동 살인 사건2",
      desc: "SBS '그것이 알고 싶다' 1420회 강력 최면 분석 및 관계자 용의 진술 자문 2",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775295063/KakaoTalk_20241207_211912951_09_wj9ntc.jpg"
    },
    {
      id: "bc_new15",
      broadcast: "SBS 그것이 알고 싶다",
      title: "SBS '그것이 알고 싶다' 방영분 1420회 세 용의자의 진실게임 - 영도 청학동 살인 사건 3",
      desc: "SBS '그것이 알고 싶다' 1420회 강력 최면 분석 및 관계자 용의 진술 자문 3",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775295065/KakaoTalk_20241207_211912951_07_kzyycr.jpg"
    },
    {
      id: "bc_new16",
      broadcast: "EBS 나눔 0700",
      title: "EBS 나눔 0700 644회 상처투성이 엄마에게 온 선물1",
      desc: "EBS 나눔 0700 644회 '상처투성이 엄마' 가정을 위한 심층 마음 치료 구제 상담 1",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775438137/EBS_%EB%82%98%EB%88%94_0700_644%ED%9A%8C_%EC%83%81%EC%B2%98%ED%88%AC%EC%84%B1%EC%9D%B4_%EC%97%84%EB%A7%88%EC%97%90%EA%B2%8C_%EC%98%A8_%EC%84%A0%EB%AC%BC_1_pjjrvv.png"
    },
    {
      id: "bc_new17",
      broadcast: "EBS 나눔 0700",
      title: "EBS 나눔 0700 644회 상처투성이 엄마에게 온 선물2",
      desc: "EBS 나눔 0700 644회 '상처투성이 엄마' 가정을 위한 심층 마음 치료 구제 상담 2",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775438136/EBS_%EB%82%98%EB%88%94_0700_644%ED%9A%8C_%EC%83%81%EC%B2%98%ED%88%AC%EC%84%B1%EC%9D%B4_%EC%97%84%EB%A7%88%EC%97%90%EA%B2%8C_%EC%98%A8_%EC%84%A0%EB%AC%BC_2_v5x5ux.png"
    },
    {
      id: "bc_new18",
      broadcast: "EBS 나눔 0700",
      title: "EBS 나눔 0700 644회 상처투성이 엄마에게 온 선물",
      desc: "EBS 나눔 0700 644회 '상처투성이 엄마' 가정을 위한 심층 마음 치료 구제 상담 3",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775438142/EBS_%EB%82%98%EB%88%94_0700_644%ED%9A%8C_%EC%83%81%EC%B2%98%ED%88%AC%EC%84%B1%EC%9D%B4_%EC%97%84%EB%A7%88%EC%97%90%EA%B2%8C_%EC%98%A8_%EC%84%A0%EB%AC%BC_oerezb.png"
    },
    {
      id: "bc_new19",
      broadcast: "tvN 화성인 X파일",
      title: "tvN 화성인 X 파일 - 쓰레기집 2부작 1",
      desc: "tvN 화성인 X파일 '쓰레기집 2부작' 해결 자문 인터뷰 및 솔루션 진행 1",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775399476/tvN_%ED%99%94%EC%84%B1%EC%9D%B8_X_%ED%8C%8C%EC%9D%BC_-_%EC%93%B0%EB%A0%88%EA%B8%B0%EC%A7%91_2%EB%B6%80%EC%9E%91_1_wzz0z2.jpg"
    },
    {
      id: "bc_new20",
      broadcast: "tvN 화성인 X파일",
      title: "tvN 화성인 X 파일 - 쓰레기집 2부작 2",
      desc: "tvN 화성인 X파일 '쓰레기집 2부작' 해결 자문 인터뷰 및 솔루션 진행 2",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775399478/tvN_%ED%99%94%EC%84%B1%EC%9D%B8_X_%ED%8C%8C%EC%9D%BC_-_%EC%93%B0%EB%A0%88%EA%B8%B0%EC%A7%91_2%EB%B6%80%EC%9E%91_2_oxiptx.jpg"
    },
    {
      id: "bc_new21",
      broadcast: "tvN 화성인 X파일",
      title: "tvN 화성인 X 파일 - 쓰레기집 2부작 3",
      desc: "tvN 화성인 X파일 '쓰레기집 2부작' 해결 자문 인터뷰 및 솔루션 진행 3",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775399482/tvN_%ED%99%94%EC%84%B1%EC%9D%B8_X_%ED%8C%8C%EC%9D%BC_-_%EC%93%B0%EB%A0%88%EA%B8%B0%EC%A7%91_2%EB%B6%80%EC%9E%91_3_l6j9ls.jpg"
    },
    {
      id: "bc_new22",
      broadcast: "TV조선 가족 두 개의 문",
      title: "TV조선 가족 두 개의 문 - 화목하지 않은 부부와 그 사이에서 상처받아 온 아들의 이야기",
      desc: "TV조선 '가족 두 개의 문' 불화 가족 상담 및 갈등 해결 솔루션 출연 자문",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775399498/TV%EC%A1%B0%EC%84%A0_%EA%B0%80%EC%A1%B1_%EB%91%90_%EA%B0%9C%EC%9D%98_%EB%AC%B8_%ED%99%94%EB%AA%A9%ED%95%98%EC%A7%80_%EC%95%8A%EC%9D%80_%EB%B6%80%EB%B6%80%EC%99%80_%EA%B7%B8_%EC%82%AC%EC%9D%B4%EC%97%90%EC%84%9C_%EC%83%81%EC%B2%98%EB%B0%9B%EC%95%84_%EC%98%A8_%EC%95%84%EB%93%A4%EC%9D%98_%EC%9D%B4%EC%95%BC%EA%B8%B0_gv9cgk.jpg"
    },
    {
      id: "bc_new23",
      broadcast: "부부수업 파뿌리",
      title: "부부수업 파뿌리 16회 - 귀농 부부 전쟁의 시작 방송 1",
      desc: "MBN 부부수업 파뿌리 16회 상처 치유와 위기 부부 조율 솔루션 자문 진행 1",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775399502/%EB%B6%80%EB%B6%80%EC%88%98%EC%97%85_%ED%8C%8C%EB%BF%8C%EB%A6%AC_16%ED%9A%8C_-_%EA%B7%80%EB%86%8D_%EB%B6%80%EB%B6%80_%EC%A0%84%EC%9F%81%EC%9D%98_%EC%8B%9C%EC%9E%91_%EB%B0%A9%EC%86%A1_1_ejsu6t.jpg"
    },
    {
      id: "bc_new24",
      broadcast: "부부수업 파뿌리",
      title: "부부수업 파뿌리 16회 - 귀농 부부 전쟁의 시작 방송 2",
      desc: "MBN 부부수업 파뿌리 16회 상처 치유와 위기 부부 조율 솔루션 자문 진행 2",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775399505/%EB%B6%80%EB%B6%80%EC%88%98%EC%97%85_%ED%8C%8C%EB%BF%8C%EB%A6%AC_16%ED%9A%8C_-_%EA%B7%80%EB%86%8D_%EB%B6%80%EB%B6%80_%EC%A0%84%EC%9F%81%EC%9D%98_%EC%8B%9C%EC%9E%91_%EB%B0%A9%EC%86%A1_2_l0glvd.jpg"
    },
    {
      id: "bc_new25",
      broadcast: "연합뉴스 뉴스Y",
      title: "연합뉴스 뉴스Y채널 다문화공동프로젝트 하모니",
      desc: "연합뉴스 뉴스Y채널 다문화공동프로젝트 '하모니' 전문가 심리 상담 자문",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775399509/%EC%97%B0%ED%95%A9%EB%89%B4%EC%8A%A4_%EB%89%B4%EC%8A%A4Y%EC%B1%84%EB%84%90_%EB%8B%A4%EB%AC%B8%ED%99%94%EA%B3%B5%EB%8F%99%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8_%ED%95%98%EB%AA%A8%EB%8B%88_ygwkfc.jpg"
    },
    {
      id: "bc_new26",
      broadcast: "JTBC 위험한 마음",
      title: "JTBC 방송 위험한마음 3회 내아들은 시한 폭탄 부제 - 심리 치유 프로젝트 1",
      desc: "JTBC 위험한 마음 '내 아들은 시한폭탄' 심리 치유 구제 프로젝트 자문 진행 1",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775399518/JTBC_%EB%B0%A9%EC%86%A1_%EC%9C%84%ED%97%98%ED%95%9C%EB%A7%88%EC%9D%8C_3%ED%9A%8C_%EB%82%B4%EC%95%84%EB%93%A4%EC%9D%80_%EC%8B%9C%ED%95%9C_%ED%8F%AD%ED%83%84_%EB%B6%80%EC%A0%9C_-_%EC%8B%AC%EB%A6%AC_%EC%B9%98%EC%9C%A0_%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8_1_m6n8pt.jpg"
    },
    {
      id: "bc_new27",
      broadcast: "JTBC 위험한 마음",
      title: "JTBC 방송 위험한마음 3회 내아들은 시한 폭탄 부제 - 심리 치유 프로젝트 2",
      desc: "JTBC 위험한 마음 '내 아들은 시한폭탄' 심리 치유 구제 프로젝트 자문 진행 2",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775399521/JTBC_%EB%B0%A9%EC%86%A1_%EC%9C%84%ED%97%98%ED%95%9C%EB%A7%88%EC%9D%8C_3%ED%9A%8C_%EB%82%B4%EC%95%84%EB%93%A4%EC%9D%80_%EC%8B%9C%ED%95%9C_%ED%8F%AD%ED%83%84_%EB%B6%80%EC%A0%9C_-_%EC%8B%AC%EB%A6%AC_%EC%B9%98%EC%9C%A0_%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8_2_cdrnc4.jpg"
    },
    {
      id: "bc_new28",
      broadcast: "JTBC 위험한 마음",
      title: "JTBC 방송 위험한마음 3회 내아들은 시한 폭탄 부제 - 심리 치유 프로젝트 3",
      desc: "JTBC 위험한 마음 '내 아들은 시한폭탄' 심리 치유 구제 프로젝트 자문 진행 3",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775399526/JTBC_%EB%B0%A9%EC%86%A1_%EC%9C%84%ED%97%98%ED%95%9C%EB%A7%88%EC%9D%8C_3%ED%9A%8C_%EB%82%B4%EC%95%84%EB%93%A4%EC%9D%80_%EC%8B%9C%ED%95%9C_%ED%8F%AD%ED%83%84_%EB%B6%80%EC%A0%9C_-_%EC%8B%AC%EB%A6%AC_%EC%B9%98%EC%9C%A0_%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8_3_l0crs1.jpg"
    },
    {
      id: "bc_new29",
      broadcast: "KBS 굿모닝 대한민국",
      title: "KBS 굿모닝 대한민국 - 아내에게 집착하는 남편 1",
      desc: "KBS 굿모닝 대한민국 '아내에게 집착하는 남편' 가족 갈등 및 중조율 전문가 자문 1",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775399534/KBS_%EA%B5%BF%EB%AA%A8%EB%8B%9D_%EB%8C%80%ED%95%9C%EB%AF%BC%EA%B5%AD_-_%EC%95%84%EB%82%B4%EC%97%90%EA%B2%8C_%EC%A7%91%EC%B0%A9%ED%95%98%EB%8A%94_%EB%82%A8%ED%8E%B8_1_to9zqm.jpg"
    },
    {
      id: "bc_new30",
      broadcast: "KBS 굿모닝 대한민국",
      title: "KBS 굿모닝 대한민국 - 아내에게 집착하는 남편 2",
      desc: "KBS 굿모닝 대한민국 '아내에게 집착하는 남편' 가족 갈등 및 중조율 전문가 자문 2",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775399538/KBS_%EA%B5%BF%EB%AA%A8%EB%8B%9D_%EB%8C%80%ED%95%9C%EB%AF%BC%EA%B5%AD_-_%EC%95%84%EB%82%B4%EC%97%90%EA%B2%8C_%EC%A7%91%EC%B0%A9%ED%95%98%EB%8A%94_%EB%82%A8%ED%8E%B8_2_oag0d7.jpg"
    },
    {
      id: "bc_new31",
      broadcast: "KBS 굿모닝 대한민국",
      title: "KBS 굿모닝 대한민국 - 아내에게 집착하는 남편 3",
      desc: "KBS 굿모닝 대한민국 '아내에게 집착하는 남편' 가족 갈등 및 중조율 전문가 자문 3",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775399542/KBS_%EA%B5%BF%EB%AA%A8%EB%8B%9D_%EB%8C%80%ED%95%9C%EB%AF%BC%EA%B5%AD_-_%EC%95%84%EB%82%B4%EC%97%90%EA%B2%8C_%EC%A7%91%EC%B0%A9%ED%95%98%EB%8A%94_%EB%82%A8%ED%8E%B8_3_emyofh.jpg"
    },
    {
      id: "bc_new32",
      broadcast: "KBS2 굿모닝 대한민국",
      title: "KBS2 굿모닝 대한민국 - 패밀리 상담소 -공주병 아내 좀 말려주세요 1",
      desc: "KBS2 굿모닝 대한민국 '패밀리 상담소' 공주병 아내 치유 솔루션 자문 1",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775399546/KBS2_%EA%B5%BF%EB%AA%A8%EB%8B%9D_%EB%8C%80%ED%95%9C%EB%AF%BC%EA%B5%AD_-_%ED%8C%A8%EB%B0%80%EB%A6%AC_%EC%83%81%EB%8B%B4%EC%86%8C_-%EA%B3%B5%EC%A3%BC%EB%B3%91_%EC%95%84%EB%82%B4_%EC%A2%80_%EB%A7%90%EB%A0%A4%EC%A3%BC%EC%84%B8%EC%9A%94_1_lvjrur.jpg"
    },
    {
      id: "bc_new33",
      broadcast: "KBS2 굿모닝 대한민국",
      title: "KBS2 굿모닝 대한민국 - 패밀리 상담소 -공주병 아내 좀 말려주세요 2",
      desc: "KBS2 굿모닝 대한민국 '패밀리 상담소' 공주병 아내 치유 솔루션 자문 2",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775399549/KBS2_%EA%B5%BF%EB%AA%A8%EB%8B%9D_%EB%8C%80%ED%95%9C%EB%AF%BC%EA%B5%AD_-_%ED%8C%A8%EB%B0%80%EB%A6%AC_%EC%83%81%EB%8B%B4%EC%86%8C_-%EA%B3%B5%EC%A3%BC%EB%B3%91_%EC%95%84%EB%82%B4_%EC%A2%80_%EB%A7%90%EB%A0%A4%EC%A3%BC%EC%84%B8%EC%9A%94_2_mhpgup.jpg"
    },
    {
      id: "bc_new34",
      broadcast: "MBC 생방송 오늘 아침",
      title: "MBC 생방송 오늘 아침 新 가족기획 - 아내 노트의 비밀 출연 1",
      desc: "MBC 생방송 오늘 아침 '新 가족기획' 아내 노트의 비밀 부부 갈등 솔루션 1",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775399553/MBC_%EC%83%9D%EB%B0%A9%EC%86%A1_%EC%98%A4%EB%8A%98%EC%9D%98_%EC%95%84%EC%B9%A8_%E6%96%B0_%EA%B0%80%EC%A1%B1%EA%B8%B0%ED%9A%8D_-_%EC%95%84%EB%82%B4_%EB%85%B8%ED%8A%B8%EC%9D%98_%EB%B9%84%EB%B0%80_%EC%B6%9C%EC%97%B0_1_dume9m.jpg"
    },
    {
      id: "bc_new35",
      broadcast: "MBC 생방송 오늘 아침",
      title: "MBC 생방송 오늘 아침 新 가족기획 - 아내 노트의 비밀 출연 2",
      desc: "MBC 생방송 오늘 아침 '新 가족기획' 아내 노트의 비밀 부부 갈등 솔루션 2",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775399557/MBC_%EC%83%9D%EB%B0%A9%EC%86%A1_%EC%98%A4%EB%8A%98%EC%9D%98_%EC%95%84%EC%B9%A8_%E6%96%B0_%EA%B0%80%EC%A1%B1%EA%B8%B0%ED%9A%8D_-_%EC%95%84%EB%82%B4_%EB%85%B8%ED%8A%B8%EC%9D%98_%EB%B9%84%EB%B0%80_%EC%B6%9C%EC%97%B0_2_xyebjx.jpg"
    },
    {
      id: "bc_new36",
      broadcast: "MBC 생방송 오늘 아침",
      title: "MBC 생방송 오늘 아침 新 가족기획 - 외간남자 부를까 봐 집 지키는 남편 출연 1",
      desc: "MBC 생방송 오늘 아침 '新 가족기획' 집착하는 남편과 소통 상담 및 중재 솔루션 1",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775399561/MBC_%EC%83%9D%EB%B0%A9%EC%86%A1_%EC%98%A4%EB%8A%98%EC%9D%98_%EC%95%84%EC%B9%A8_%E6%96%B0_%EA%B0%80%EC%A1%B1%EA%B8%B0%ED%9A%8D_-_%EC%99%B8%EA%B0%84%EB%82%A8%EC%9E%90_%EB%B6%80%EB%A5%BC%EA%B9%8C_%EB%B4%90_%EC%A7%91_%EC%A7%80%ED%82%A4%EB%8A%94_%EB%82%A8%ED%8E%B8_%EC%B6%9C%EC%97%B0_1_kwexhw.jpg"
    },
    {
      id: "bc_new37",
      broadcast: "MBC 생방송 오늘 아침",
      title: "MBC 생방송 오늘 아침 新 가족기획 - 외간남자 부를까 봐 집 지키는 남편 출연 2",
      desc: "MBC 생방송 오늘 아침 '新 가족기획' 집착하는 남편과 소통 상담 및 중재 솔루션 2",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775399565/MBC_%EC%83%9D%EB%B0%A9%EC%86%A1_%EC%98%A4%EB%8A%98%EC%9D%98_%EC%95%84%EC%B9%A8_%E6%96%B0_%EA%B0%80%EC%A1%B1%EA%B8%B0%ED%9A%8D_-_%EC%99%B8%EA%B0%84%EB%82%A8%EC%9E%90_%EB%B6%80%EB%A5%BC%EA%B9%8C_%EB%B4%90_%EC%A7%91_%EC%A7%80%ED%82%A4%EB%8A%94_%EB%82%A8%ED%8E%B8_%EC%B6%9C%EC%97%B0_2_nzfnxq.jpg"
    },
    {
      id: "bc_new38",
      broadcast: "MBC 생방송 오늘 아침",
      title: "MBC 생방송 오늘 아침 新 가족기획 - 친정엄마 짝사랑 하는 딸 : 그녀가 친정에 못가는 이유 출연 1",
      desc: "MBC 생방송 오늘 아침 '新 가족기획' 친정엄마를 짝사랑하는 딸 갈등 솔루션 1",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775399568/MBC_%EC%83%9D%EB%B0%A9%EC%86%A1_%EC%98%A4%EB%8A%98%EC%9D%98_%EC%95%84%EC%B9%A8_%E6%96%B0_%EA%B0%80%EC%A1%B1%EA%B8%B0%ED%9A%8D_-_%EC%B9%9C%EC%A0%95%EC%97%84%EB%A7%88_%EC%A7%9D%EC%82%AC%EB%9E%91_%ED%95%98%EB%8A%94_%EB%94%B8_%EA%B7%B8%EB%85%80%EA%B0%80_%EC%B9%9C%EC%A0%95%EC%97%90_%EB%AA%BB%EA%B0%80%EB%8A%94_%EC%9D%B4%EC%9C%A0_%EC%B6%9C%EC%97%B0_1_ihihbj.jpg"
    },
    {
      id: "bc_new39",
      broadcast: "MBC 생방송 오늘 아침",
      title: "MBC 생방송 오늘 아침 新 가족기획 - 친정엄마 짝사랑 하는 딸 그녀가 친정에 못가는 이유 출연",
      desc: "MBC 생방송 오늘 아침 '新 가족기획' 친정엄마를 짝사랑하는 딸 갈등 솔루션 2",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775399572/MBC_%EC%83%9D%EB%B0%A9%EC%86%A1_%EC%98%A4%EB%8A%98%EC%9D%98_%EC%95%84%EC%B9%A8_%E6%96%B0_%EA%B0%80%EC%A1%B1%EA%B8%B0%ED%9A%8D_-_%EC%B9%9C%EC%A0%95%EC%97%84%EB%A7%88_%EC%A7%9D%EC%82%AC%EB%9E%91_%ED%95%98%EB%8A%94_%EB%94%B8_%EA%B7%B8%EB%85%80%EA%B0%80_%EC%B9%9C%EC%A0%95%EC%97%90_%EB%AA%BB%EA%B0%80%EB%8A%94_%EC%9D%B4%EC%9C%A0_%EC%B6%9C%EC%97%B0_ok89bv.jpg"
    },
    {
      id: "bc_new40",
      broadcast: "MBC 생방송 오늘 아침",
      title: "MBC 생방송 오늘 아침 新 가족기획 - 나이 많은 게 죄인가요 스킨십 안 해주는 남편 출연 1",
      desc: "MBC 생방송 오늘 아침 '新 가족기획' 나이 많은 게 죄인가요 부부 소통 및 성격 극복 솔루션 1",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775399576/MBC_%EC%83%9D%EB%B0%A9%EC%86%A1_%EC%98%A4%EB%8A%98%EC%9D%98_%EC%95%84%EC%B9%A8_%E6%96%B0_%EA%B0%80%EC%A1%B1%EA%B8%B0%ED%9A%8D_%EB%82%98%EC%9D%B4_%EB%A7%8E%EC%9D%80_%EA%B2%8C_%EC%A3%84%EC%9D%B8%EA%B0%80%EC%9A%94_%EC%8A%A4%ED%82%A8%EC%8B%AD_%EC%95%88_%ED%95%B4%EC%A3%BC%EB%8A%94_%EB%82%A8%ED%8E%B8_%EC%B6%9C%EC%97%B0_1_bh6d3q.jpg"
    },
    {
      id: "bc_new41",
      broadcast: "MBC 생방송 오늘 아침",
      title: "MBC 생방송 오늘 아침 新 가족기획 - 나이 많은 게 죄인가요 스킨십 안 해주는 남편 출연 2",
      desc: "MBC 생방송 오늘 아침 '新 가족기획' 나이 많은 게 죄인가요 부부 소통 및 성격 극복 솔루션 2",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775399580/MBC_%EC%83%9D%EB%B0%A9%EC%86%A1_%EC%98%A4%EB%8A%98%EC%9D%98_%EC%95%84%EC%B9%A8_%E6%96%B0_%EA%B0%80%EC%A1%B1%EA%B8%B0%ED%9A%8D_%EB%82%98%EC%9D%B4_%EB%A7%8E%EC%9D%80_%EA%B2%8C_%EC%A3%84%EC%9D%B8%EA%B0%80%EC%9A%94_%EC%8A%A4%ED%82%A8%EC%8B%AD_%EC%95%88_%ED%95%B4%EC%A3%BC%EB%8A%94_%EB%82%A8%ED%8E%B8_%EC%B6%9C%EC%97%B0_2_u3sg2x.jpg"
    },
    {
      id: "bc_new42",
      broadcast: "MBC 생방송 오늘 아침",
      title: "MBC 생방송 오늘 아침 新 가족기획 - 나이 많은 게 죄인가요 스킨십 안 해주는 남편 출연 3",
      desc: "MBC 생방송 오늘 아침 '新 가족기획' 나이 많은 게 죄인가요 부부 소통 및 성격 극복 솔루션 3",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775399583/MBC_%EC%83%9D%EB%B0%A9%EC%86%A1_%EC%98%A4%EB%8A%98%EC%9D%98_%EC%95%84%EC%B9%A8_%E6%96%B0_%EA%B0%80%EC%A1%B1%EA%B8%B0%ED%9A%8D_%EB%82%98%EC%9D%B4_%EB%A7%8E%EC%9D%80_%EA%B2%8C_%EC%A3%84%EC%9D%B8%EA%B0%80%EC%9A%94_%EC%8A%A4%ED%82%A8%EC%8B%AD_%EC%95%88_%ED%95%B4%EC%A3%BC%EB%8A%94_%EB%82%A8%ED%8E%B8_%EC%B6%9C%EC%97%B0_3_nog0hx.jpg"
    },
    {
      id: "bc_new43",
      broadcast: "MBC 생방송 오늘 아침",
      title: "MBC 생방송 오늘 아침 출연 新 가족기획 - 자식만 줄줄이 낳아 놓고. 나몰라라 철없는 남편 1",
      desc: "MBC 생방송 오늘 아침 '新 가족기획' 자식만 줄줄이 낳아 놓고 나몰라라 철없는 남편 갈등 상담 1",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775399588/MBC_%EC%83%9D%EB%B0%A9%EC%86%A1_%EC%98%A4%EB%8A%98%EC%9D%98_%EC%95%84%EC%B9%A8_%EC%B6%9C%EC%97%B0_%E6%96%B0_%EA%B0%80%EC%A1%B1%EA%B8%B0%ED%9A%8D_%EC%9E%90%EC%8B%9D%EB%A7%8C_%EC%A4%84%EC%A4%84%EC%9D%B4_%EB%82%B3%EC%95%84_%EB%86%93%EA%B3%A0._%EB%82%98%EB%AA%B0%EB%9D%BC%EB%9D%BC_%EC%B2%A0%EC%97%86%EB%8A%94_%EB%82%A8%ED%8E%B8_1_nvt6mg.jpg"
    },
    {
      id: "bc_new44",
      broadcast: "MBC 생방송 오늘 아침",
      title: "MBC 생방송 오늘 아침 출연 新 가족기획 - 자식만 줄줄이 낳아 놓고. 나몰라라 철없는 남편 2",
      desc: "MBC 생방송 오늘 아침 '新 가족기획' 자식만 줄줄이 낳아 놓고 나몰라라 철없는 남편 갈등 상담 2",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775399592/MBC_%EC%83%9D%EB%B0%A9%EC%86%A1_%EC%98%A4%EB%8A%98%EC%9D%98_%EC%95%84%EC%B9%A8_%EC%B6%9C%EC%97%B0_%E6%96%B0_%EA%B0%80%EC%A1%B1%EA%B8%B0%ED%9A%8D_%EC%9E%90%EC%8B%9D%EB%A7%8C_%EC%A4%84%EC%A4%84%EC%9D%B4_%EB%82%B3%EC%95%84_%EB%86%93%EA%B3%A0._%EB%82%98%EB%AA%B0%EB%9D%BC%EB%9D%BC_%EC%B2%A0%EC%97%86%EB%8A%94_%EB%82%A8%ED%8E%B8_2_quqd8o.jpg"
    },
    {
      id: "bc_new45",
      broadcast: "MBC 생방송 오늘 아침",
      title: "MBC 생방송 오늘 아침 출연 新 가족기획 - 자식만 줄줄이 낳아 놓고. 나몰라라 철없는 남편 3",
      desc: "MBC 생방송 오늘 아침 '新 가족기획' 자식만 줄줄이 낳아 놓고 나몰라라 철없는 남편 갈등 상담 3",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775399595/MBC_%EC%83%9D%EB%B0%A9%EC%86%A1_%EC%98%A4%EB%8A%98%EC%9D%98_%EC%95%84%EC%B9%A8_%EC%B6%9C%EC%97%B0_%E6%96%B0_%EA%B0%80%EC%A1%B1%EA%B8%B0%ED%9A%8D_%EC%9E%90%EC%8B%9D%EB%A7%8C_%EC%A4%84%EC%A4%84%EC%9D%B4_%EB%82%B3%EC%95%84_%EB%86%93%EA%B3%A0._%EB%82%98%EB%AA%B0%EB%9D%BC%EB%9D%BC_%EC%B2%A0%EC%97%86%EB%8A%94_%EB%82%A8%ED%8E%B8_3_bc1igk.jpg"
    },
    {
      id: "bc_new46",
      broadcast: "MBC 생방송 오늘 아침",
      title: "MBC 생방송 오늘 아침 新가족기획 - 심리상황극 방송 촬영 0331 1",
      desc: "MBC 생방송 오늘 아침 '新가족기획' 심리상황극 솔루션 방송 촬영 1",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775399611/MBC_%EC%83%9D%EB%B0%A9%EC%86%A1%EC%98%A4%EB%8A%98%EC%95%84%EC%B9%A8_%E6%96%B0%EA%B0%80%EC%A1%B1%EA%B8%B0%ED%9A%8D_-_%EC%8B%AC%EB%A6%AC%EC%83%81%ED%99%A9%EA%B7%B9_%EB%B0%A9%EC%86%A1_%EC%B4%AC%EC%98%81_0331_1_hrvcvn.jpg"
    },
    {
      id: "bc_new47",
      broadcast: "MBC 생방송 오늘 아침",
      title: "MBC 생방송 오늘 아침 新가족기획 - 심리상황극 방송 촬영 0331 2",
      desc: "MBC 생방송 오늘 아침 '新가족기획' 심리상황극 솔루션 방송 촬영 2",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775399599/MBC_%EC%83%9D%EB%B0%A9%EC%86%A1%EC%98%A4%EB%8A%98%EC%95%84%EC%B9%A8_%E6%96%B0%EA%B0%80%EC%A1%B1%EA%B8%B0%ED%9A%8D_-_%EC%8B%AC%EB%A6%AC%EC%83%81%ED%99%A9%EA%B7%B9_%EB%B0%A9%EC%86%A1_%EC%B4%AC%EC%98%81_0331_2_fwsc8n.jpg"
    },
    {
      id: "bc_new48",
      broadcast: "MBC 생방송 오늘 아침",
      title: "MBC 생방송 오늘 아침 新가족기획 - 내 남편의 이중생활 1",
      desc: "MBC 생방송 오늘 아침 '新가족기획' 내 남편의 이중생활 편에서 가족 간의 갈등과 심리 상담 과정을 다룬 방송 장면입니다.",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775399604/MBC_%EC%83%9D%EB%B0%A9%EC%86%A1%EC%98%A4%EB%8A%98%EC%95%84%EC%B9%A8_%E6%96%B0%EA%B0%80%EC%A1%B1%EA%B8%B0%ED%9A%8D_-_%EB%82%B4_%EB%82%A8%ED%8E%B8%EC%9D%98_%EC%9D%B4%EC%A4%91%EC%83%9D%ED%99%9C_1_azca0p.jpg"
    },
    {
      id: "bc_new49",
      broadcast: "MBC 생방송 오늘 아침",
      title: "MBC 생방송 오늘 아침 新가족기획 - 내 남편의 이중생활 2",
      desc: "MBC 생방송 오늘 아침 '新가족기획' 내 남편의 이중생활 편에서 심리 치료를 통해 관계 회복을 시도하는 과정을 담은 장면입니다.",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775399607/MBC_%EC%83%9D%EB%B0%A9%EC%86%A1%EC%98%A4%EB%8A%98%EC%95%84%EC%B9%A8_%E6%96%B0%EA%B0%80%EC%A1%B1%EA%B8%B0%ED%9A%8D_-_%EB%82%B4_%EB%82%A8%ED%8E%B8%EC%9D%98_%EC%9D%B4%EC%A4%91%EC%83%9D%ED%99%9C_2_szpzgw.jpg"
    },
    {
      id: "bc_new50",
      broadcast: "MBC 생방송 오늘 아침",
      title: "MBC 생방송 오늘 아침 新가족기획 20150126 맨몸으로 나가라는 남편 30년전 일 때문에",
      desc: "과거의 상처로 인해 갈등을 겪는 부부의 사연을 다루며, 오랜 기간 쌓인 오해를 풀고 치유하는 과정을 다룬 부부 상담 프로그램입니다.",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775399615/MBC_%EC%83%9D%EB%B0%A9%EC%86%A1%EC%98%A4%EB%8A%98%EC%95%84%EC%B9%A8_%E6%96%B0%EA%B0%80%EC%A1%B1%EA%B8%B0%ED%9A%8D_20150126_%EB%A7%A8%EB%AA%B8%EC%9C%BC%EB%A1%9C_%EB%82%98%EA%B0%80%EB%9D%BC%EB%8A%94_%EB%82%A8%ED%8E%B8_30%EB%85%84%EC%A0%84_%EC%9D%BC_%EB%95%8C%EB%AC%B8%EC%97%90_xmn0so.jpg"
    },
    {
      id: "bc_new51",
      broadcast: "MBC 생방송 오늘 아침",
      title: "MBC 생방송 오늘 아침 新가족기획 방송 - 무시당해도 참는 아내 촬영 1",
      desc: "지속적인 무시와 억압 속에서 고통받는 아내의 심리 상태를 분석하고 부부 관계 개선을 위한 솔루션을 제시한 방송입니다.",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775399619/MBC_%EC%83%9D%EB%B0%A9%EC%86%A1%EC%98%A4%EB%8A%98%EC%95%84%EC%B9%A8_%E6%96%B0%EA%B0%80%EC%A1%B1%EA%B8%B0%ED%9A%8D_%EB%B0%A9%EC%86%A1_-_%EB%AC%B4%EC%8B%9C%EB%8B%B9%ED%95%B4%EB%8F%84_%EC%B0%B8%EB%8A%94_%EC%95%84%EB%82%B4_%EC%B4%AC%EC%98%81_0311_1_skamfc.jpg"
    },
    {
      id: "bc_new52",
      broadcast: "MBC 생방송 오늘 아침",
      title: "MBC 생방송 오늘 아침 新가족기획 방송 - 무시당해도 참는 아내 촬영 2",
      desc: "낮아진 자존감을 회복하고 가정 내 소통 방식을 건강하게 변화시키기 위한 구체적인 상담 과정이 포함된 에피소드입니다.",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775399623/MBC_%EC%83%9D%EB%B0%A9%EC%86%A1%EC%98%A4%EB%8A%98%EC%95%84%EC%B9%A8_%E6%96%B0%EA%B0%80%EC%A1%B1%EA%B8%B0%ED%9A%8D_%EB%B0%A9%EC%86%A1_-_%EB%AC%B4%EC%8B%9C%EB%8B%B9%ED%95%B4%EB%8F%84_%EC%B0%B8%EB%8A%94_%EC%95%84%EB%82%B4_%EC%B4%AC%EC%98%81_0311_2_ug5zr0.jpg"
    },
    {
      id: "bc_new53",
      broadcast: "MBC 생방송 오늘 아침",
      title: "MBC 생방송 오늘 아침 新가족기획 - 젊어서는 바람피고 늙어서는 잔소리하는 남편 1",
      desc: "과거 남편의 외도로 인한 상처와 현재의 잦은 잔소리로 겪는 황혼 부부의 갈등을 심층적으로 분석한 방송입니다.",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775399626/MBC_%EC%83%9D%EB%B0%A9%EC%86%A1%EC%98%A4%EB%8A%98%EC%9D%98%EC%95%84%EC%B9%A8_%E6%96%B0%EA%B0%80%EC%A1%B1%EA%B8%B0%ED%9A%8D_-_%EC%A0%8A%EC%96%B4%EC%84%9C%EB%8A%94_%EB%B0%94%EB%9E%8C%ED%94%BC%EA%B3%A0_%EB%8A%99%EC%96%B4%EC%84%9C%EB%8A%94_%EC%9E%94%EC%86%8C%EB%A6%AC%ED%95%98%EB%8A%94_%EB%82%A8%ED%8E%B8_1_whe9kn.jpg"
    },
    {
      id: "bc_new54",
      broadcast: "MBC 생방송 오늘 아침",
      title: "MBC 생방송 오늘 아침 新가족기획 - 젊어서는 바람피고 늙어서는 잔소리하는 남편 2",
      desc: "오랜 세월 누적된 부부 사이의 감정적 골을 메우고, 소통과 공감을 통해 관계를 개선해 나가는 솔루션 과정을 보여줍니다.",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775399630/MBC_%EC%83%9D%EB%B0%A9%EC%86%A1%EC%98%A4%EB%8A%98%EC%9D%98%EC%95%84%EC%B9%A8_%E6%96%B0%EA%B0%80%EC%A1%B1%EA%B8%B0%ED%9A%8D_-_%EC%A0%8A%EC%96%B4%EC%84%9C%EB%8A%94_%EB%B0%94%EB%9E%8C%ED%94%BC%EA%B3%A0_%EB%8A%99%EC%96%B4%EC%84%9C%EB%8A%94_%EC%9E%94%EC%86%8C%EB%A6%AC%ED%95%98%EB%8A%94_%EB%82%A8%ED%8E%B8_2_mmycxc.jpg"
    },
    {
      id: "bc_new55",
      broadcast: "MBC 생방송 오늘 아침",
      title: "MBC 생방송 오늘 아침 新가족기획 - 젊어서는 바람피고 늙어서는 잔소리하는 남편",
      desc: "상처받은 아내의 마음을 위로하고 치유하며, 건강한 노년의 부부 생활을 돕기 위해 진행된 맞춤형 심리 코칭 장면입니다.",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775399634/MBC_%EC%83%9D%EB%B0%A9%EC%86%A1%EC%98%A4%EB%8A%98%EC%9D%98%EC%95%84%EC%B9%A8_%E6%96%B0%EA%B0%80%EC%A1%B1%EA%B8%B0%ED%9A%8D_-_%EC%A0%8A%EC%96%B4%EC%84%9C%EB%8A%94_%EB%B0%94%EB%9E%8C%ED%94%BC%EA%B3%A0_%EB%8A%99%EC%96%B4%EC%84%9C%EB%8A%94_%EC%9E%94%EC%86%8C%EB%A6%AC%ED%95%98%EB%8A%94_%EB%82%A8%ED%8E%B8_mnjl18.jpg"
    },
    {
      id: "bc_new56",
      broadcast: "MBN 파뿌리",
      title: "MBN 파뿌리 5회 - 어린 부부의 과속 스캔들",
      desc: "MBN '파뿌리' 5회에 방영된 어린 부부의 현실적인 문제와 양육에 대한 갈등을 솔직하게 터놓고, 해결책을 모색하는 부부 상담 프로그램입니다.",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775399645/MBN_%ED%8C%8C%EB%BF%8C%EB%A6%AC_5%ED%9A%8C_-_%EC%96%B4%EB%A6%B0_%EB%B6%80%EB%B6%80%EC%9D%98_%EA%B3%BC%EC%86%8D_%EC%8A%A4%EC%BA%94%EB%93%A4_yhb2d4.jpg"
    },
    {
      id: "bc_new57",
      broadcast: "MBN 파뿌리",
      title: "MBN 파뿌리 12회 - 채팅부부의 비밀",
      desc: "온라인 채팅으로 인한 오해와 불신으로 멀어진 부부를 상대로 전문적인 심리 분석과 대화 단절을 극복하기 위한 맞춤형 심리 치료 방송입니다.",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775399648/MBN_%ED%8C%8C%EB%BF%8C%EB%A6%AC_12%ED%9A%8C_-_%EC%B1%84%ED%8C%85%EB%B6%80%EB%B6%80%EC%9D%98_%EB%B9%84%EB%B0%80_zi5lvn.jpg"
    },
    {
      id: "bc_new58",
      broadcast: "TV 조선",
      title: "TV 조선 가족 두개의 문 - 아내의 집착 남편의 거짓말 편 윤영준 원장님 출연 1",
      desc: "TV조선 '가족 두 개의 문'에서 남편의 잦은 거짓말과 아내의 심한 불안형 집착으로 인한 위기 부부의 문제 행동을 분석하고 해결책을 제시했습니다.",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775399652/TV_%EC%A1%B0%EC%84%A0_%EA%B0%80%EC%A1%B1_%EB%91%90%EA%B0%9C%EC%9D%98_%EB%AC%B8_%EC%95%84%EB%82%B4%EC%9D%98_%EC%A7%91%EC%B0%A9_%EB%82%A8%ED%8E%B8%EC%9D%98_%EA%B1%B0%EC%A7%93%EB%A7%90_%ED%8E%B8_%EC%9C%A4%EC%98%81%EC%A4%80_%EC%9B%90%EC%9E%A5%EB%8B%98_%EC%B6%9C%EC%97%B0_1_kg20sz.jpg"
    },
    {
      id: "bc_new59",
      broadcast: "TV 조선",
      title: "TV 조선 가족 두개의 문 - 아내의 집착 남편의 거짓말 편 윤영준 원장님 출연 2",
      desc: "어긋난 부부의 소통 방식을 올바르게 되찾기 위해 윤영준 원장님이 직접 맞춤형 부부 상담과 심리 치유 솔루션을 진행한 장면입니다.",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775399657/TV_%EC%A1%B0%EC%84%A0_%EA%B0%80%EC%A1%B1_%EB%91%90%EA%B0%9C%EC%9D%98_%EB%AC%B8_%EC%95%84%EB%82%B4%EC%9D%98_%EC%A7%91%EC%B0%A9_%EB%82%A8%ED%8E%B8%EC%9D%98_%EA%B1%B0%EC%A7%93%EB%A7%90_%ED%8E%B8_%EC%9C%A4%EC%98%81%EC%A4%80_%EC%9B%90%EC%9E%A5%EB%8B%98_%EC%B6%9C%EC%97%B0_2_olc6or.jpg"
    },
    {
      id: "bc_new60",
      broadcast: "KBS 7시 뉴스",
      title: "KBS 7시 뉴스 인터뷰 - 주택가 파고든 홀덤펍 1",
      desc: "주택가 깊숙이 자리 잡은 홀덤펍 및 도박 시설 문제에 대해 도박 중독의 심리적 문제점과 사회적 위험성을 경고한 KBS 뉴스 인터뷰입니다.",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775400752/%EB%89%B4%EC%8A%A4_%EC%9D%B8%ED%84%B0%EB%B7%B0_-_%EC%A3%BC%ED%83%9D%EA%B0%80_%ED%8C%8C%EA%B3%A0%EB%93%A0_%ED%99%80%EB%8D%A4%ED%8E%8D_1_tzxldz.jpg"
    },
    {
      id: "bc_new61",
      broadcast: "KBS 7시 뉴스",
      title: "KBS 7시 뉴스 인터뷰 - 주택가 파고든 홀덤펍 2",
      desc: "불법 도박 심리를 깊이 분석하고 환경적 요인이 중독에 미치는 영향에 대한 전문가로서의 소견이 보도된 뉴스 인터뷰 장면입니다.",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775400749/%EB%89%B4%EC%8A%A4_%EC%9D%B8%ED%84%B0%EB%B7%B0_-_%EC%A3%BC%ED%83%9D%EA%B0%80_%ED%8C%8C%EA%B3%A0%EB%93%A0_%ED%99%80%EB%8D%A4%ED%8E%8D_2_gp4n2a.jpg"
    },
    {
      id: "bc_new62",
      broadcast: "MBN 천기누설",
      title: "MBN 천기누설 6화 - 멈출 수 없는 식탐 폭식증 1",
      desc: "MBN '천기누설'에서 신체적 질병뿐 아니라 정신적 스트레스로 발현되는 과도한 식탐과 폭식증의 심리적 원인을 분석한 방송입니다.",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775443249/MBN_%EC%B2%9C%EA%B8%B0%EB%88%84%EC%84%A4_6%ED%99%94_-_%EB%A9%88%EC%B6%9C_%EC%88%98_%EC%97%86%EB%8A%94_%EC%8B%9D%ED%83%90_%ED%8F%AD%EC%8B%9D%EC%A6%9D_1_chnjuc.png"
    },
    {
      id: "bc_new63",
      broadcast: "MBN 천기누설",
      title: "MBN 천기누설 6화 - 멈출 수 없는 식탐 폭식증 2",
      desc: "단순한 다이어트가 아닌, 심리적 공허함을 채우고 건강한 식습관을 되찾기 위한 근본적인 심리 치료적 접근 방법을 제시했습니다.",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775443248/MBN_%EC%B2%9C%EA%B8%B0%EB%88%84%EC%84%A4_6%ED%99%94_-_%EB%A9%88%EC%B6%9C_%EC%88%98_%EC%97%86%EB%8A%94_%EC%8B%9D%ED%83%90_%ED%8F%AD%EC%8B%9D%EC%A6%9D_2_zxtoup.png"
    },
    {
      id: "bc_new64",
      broadcast: "MBC 언니가 돌아왔다",
      title: "MBC 언니가 돌아왔다 재취업 프로젝트 방송 촬영",
      desc: "경력 단절 여성들의 재취업 과정에서 동반되는 심리적 부담감과 우울감을 덜어주고 자존감을 높여주기 위한 심리 지원 프로젝트입니다.",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775399637/MBC_%EC%96%B8%EB%8B%88%EA%B0%80_%EB%8F%8C%EC%95%84%EC%99%94%EB%8B%A4_%EC%9E%AC%EC%B7%A8%EC%97%85_%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8_%EB%B0%A9%EC%86%A1_%EC%B4%AC%EC%98%81_zkwalz.jpg"
    },
    {
      id: "bc_new65",
      broadcast: "tvN 엑소시스트",
      title: "tvN 엑소시스트 99회 색귀와 싸우는 여자",
      desc: "tvN '엑소시스트'에서 무속적 해석이 아닌, 심리학적이고 과학적인 뇌파 및 심리 분석 기법을 통해 트라우마를 분석한 에피소드입니다.",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775399661/tvN_%EC%97%91%EC%86%8C%EC%8B%9C%EC%8A%A4%ED%8A%B8_99%ED%9A%8C_%EC%83%89%EA%B7%80%EC%99%80_%EC%8B%B8%EC%9A%B0%EB%8A%94_%EC%97%AC%EC%9E%90_cqh06a.jpg"
    },
    {
      id: "bc_new66",
      broadcast: "tvN 엑소시스트",
      title: "tvN 엑소시스트 125화 고개가 뒤로 넘어가는 남자 1",
      desc: "알 수 없는 신체화 증상으로 고통받는 내담자를 위해 무의식 속에 잠재되어 있는 불안 및 심리적 억압을 다각도로 분석하고 진단한 방송입니다.",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775400768/tvN_%EC%97%91%EC%86%8C%EC%8B%9C%EC%8A%A4%ED%8A%B8_125%ED%99%94_%EA%B3%A0%EA%B0%9C%EA%B0%80_%EB%92%A4%EB%A1%9C_%EB%84%98%EC%96%B4%EA%B0%80%EB%8A%94_%EB%82%A8%EC%9E%90_1_np74t5.png"
    },
    {
      id: "bc_new67",
      broadcast: "tvN 엑소시스트",
      title: "tvN 엑소시스트 125화 고개가 뒤로 넘어가는 남자 2",
      desc: "특정 행동과 신체적 이상 반응을 야기하는 근본적인 정신적 원인을 찾기 위해 심층 분석 요법 및 상담을 통하여 심리 치유를 시도했습니다.",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775400772/tvN_%EC%97%91%EC%86%8C%EC%8B%9C%EC%8A%A4%ED%8A%B8_125%ED%99%94_%EA%B3%A0%EA%B0%9C%EA%B0%80_%EB%92%A4%EB%A1%9C_%EB%84%98%EC%96%B4%EA%B0%80%EB%8A%94_%EB%82%A8%EC%9E%90_2_oxvile.png"
    },
    {
      id: "bc_new68",
      broadcast: "tvN 엑소시스트",
      title: "tvN 엑소시스트 103화 매일 자살을 시도하는 여자 1",
      desc: "깊은 절망과 극단적 선택의 충동에 시달리는 사연자를 만나, 과거의 충격적인 상처와 억압된 심리 상태를 위기 개입 상담으로 접근한 방송입니다.",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775400794/tvN_%EC%97%91%EC%86%8C%EC%8B%9C%EC%8A%A4%ED%8A%B8103%ED%99%94%EB%A7%A4%EC%9D%BC%EC%9E%90%EC%82%B4%EC%9D%84%EC%8B%9C%EB%8F%84%ED%95%98%EB%8A%94%EC%97%AC%EC%9E%90_1_loohb6.png"
    },
    {
      id: "bc_new69",
      broadcast: "tvN 엑소시스트",
      title: "tvN 엑소시스트 103화 매일 자살을 시도하는 여자 2",
      desc: "정서적 안정을 유도하기 위해 체계적인 심리 상담과 심층 진단을 통해 내담자가 스스로 극복할 수 있도록 내면의 힘을 찾아가는 과정을 담았습니다.",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775400798/tvN_%EC%97%91%EC%86%8C%EC%8B%9C%EC%8A%A4%ED%8A%B8103%ED%99%94%EB%A7%A4%EC%9D%BC%EC%9E%90%EC%82%B4%EC%9D%84%EC%8B%9C%EB%8F%84%ED%95%98%EB%8A%94%EC%97%AC%EC%9E%90_2_eluxsm.png"
    },
    {
      id: "bc_new70",
      broadcast: "tvN 엑소시스트",
      title: "tvN 엑소시스트 103화 매일 자살을 시도하는 여자 3",
      desc: "가라앉은 심리를 극복하고 새로운 삶의 희망을 찾을 수 있도록 맞춤형 심리 치료와 지속적인 감정 조율 솔루션을 제공한 장면입니다.",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775400790/tvN_%EC%97%91%EC%86%8C%EC%8B%9C%EC%8A%A4%ED%8A%B8103%ED%99%94%EB%A7%A4%EC%9D%BC%EC%9E%90%EC%82%B4%EC%9D%84%EC%8B%9C%EB%8F%84%ED%95%98%EB%8A%94%EC%97%AC%EC%9E%90_3_icxtd9.jpg"
    },
    {
      id: "bc_new71",
      broadcast: "Weekly People",
      title: "인물 시사 주간지 Weekly People 주간 인물 선정 윤영준 원장님",
      desc: "그동안 쌓아온 탁월한 심리 상담 전문성과 수많은 치유 사례를 인정받아 인물 시사 주간지 'Weekly People'의 주간 인물로 선정된 인터뷰 자료입니다.",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775399514/%EC%9D%B8%EB%AC%BC_%EC%8B%9C%EC%82%AC_%EC%A3%BC%EA%B0%84%EC%A7%80_Weekly_People_%EC%A3%BC%EA%B0%84_%EC%9D%B8%EB%AC%BC_%EC%84%A0%EC%A0%95_%EC%9C%A4%EC%98%81%EC%A4%80_%EC%9B%90%EC%9E%A5%EB%8B%98_ypsquf.jpg"
    }
  ];

  // 3. 강연 및 특강 (Category 2) -> Total 8 items
  const lectureItems = [
    {
      id: "lec9",
      category: "lecture",
      title: "문경소방대원 상담 및 강의",
      desc: "각종 재난 현장에서 스트레스를 받는 소방대원들의 심리적 안정을 위한 맞춤형 상담 및 멘탈 케어 특강 현장입니다.",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775294966/1_cmgsnr.jpg"
    },
    {
      id: "lec10",
      category: "lecture",
      title: "울산 도산도서관 명상 강의",
      desc: "울산 도산도서관에서 지역 주민들을 대상으로 진행한 마음 챙김 및 심신 안정을 위한 명상 강의입니다.",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775294462/%EB%8F%84%EC%82%B0%EB%8F%84%EC%84%9C%EA%B4%80_aslywn.jpg"
    },
    {
      id: "lec11",
      category: "lecture",
      title: "고용지원센터 - 자문자답테라피 & 집단상담 1",
      desc: "고용지원센터 내 구직자들의 자존감 회복과 진로 탐색을 돕기 위한 자문자답 테라피 및 집단 심리상담 1부입니다.",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775304810/%EA%B3%A0%EC%9A%A9%EC%A7%80%EC%9B%90%EC%84%BC%ED%84%B0-%EC%9E%90%EB%AC%B8%EC%9E%90%EB%8B%B5%ED%85%8C%EB%9D%BC%ED%94%BC_%EC%A7%91%EB%8B%A8%EC%83%81%EB%8B%B4_1_rswxtk.jpg"
    },
    {
      id: "lec12",
      category: "lecture",
      title: "고용지원센터 - 자문자답테라피 & 집단상담 2",
      desc: "고용지원센터 내 구직자들의 자존감 회복과 진로 탐색을 돕기 위한 자문자답 테라피 및 집단 심리상담 2부입니다.",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775298852/%EA%B3%A0%EC%9A%A9%EC%A7%80%EC%9B%90%EC%84%BC%ED%84%B0-%EC%9E%90%EB%AC%B8%EC%9E%90%EB%8B%B5%ED%85%8C%EB%9D%BC%ED%94%BC_%EC%A7%91%EB%8B%A8%EC%83%81%EB%8B%B4_2_xfxh1o.jpg"
    },
    {
      id: "lec13",
      category: "lecture",
      title: "경북권 경찰기동대 상담 및 강의 영천, 구미, 김천",
      desc: "영천, 구미, 김천 등 경북권 경찰기동대 소속 대원들의 직무 스트레스 해소와 정서 안정을 위한 순회 심리 상담입니다.",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775298845/%EA%B2%BD%EB%B6%81%EA%B6%8C_%EA%B2%BD%EC%B0%B0%EA%B8%B0%EB%8F%99%EB%8C%80_%EC%83%81%EB%8B%B4_%EB%B0%8F_%EA%B0%95%EC%9D%98_%EC%98%81%EC%B2%9C_%EA%B5%AC%EB%AF%B8_%EA%B9%80%EC%B2%9C_re6thi.jpg"
    },
    {
      id: "lec14",
      category: "lecture",
      title: "경북권 경찰기동대 상담 및 강의 영천, 구미, 김천 2",
      desc: "직무 특성상 높은 긴장감을 유지해야 하는 서부 경북권 경찰기동대 대원들을 위한 심층 멘탈 케어 특강입니다.",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775301930/%EA%B2%BD%EB%B6%81%EA%B6%8C_%EA%B2%BD%EC%B0%B0%EA%B8%B0%EB%8F%99%EB%8C%80_%EC%83%81%EB%8B%B4_%EB%B0%8F_%EA%B0%95%EC%9D%98_%EC%98%81%EC%B2%9C_%EA%B5%AC%EB%AF%B8_%EA%B9%80%EC%B2%9C_2_g39hpf.jpg"
    },
    {
      id: "lec15",
      category: "lecture",
      title: "경북고용성장지원센터 내면아이 및 미해결과제 실습 및 강의 1",
      desc: "경북고용성장지원센터에서 진행된 무의식 속 내면아이 치유와 미해결 과제 해소를 위한 심리 실습 강의 1부입니다.",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775298856/%EA%B2%BD%EB%B6%81%EA%B3%A0%EC%9A%A9%EC%84%B1%EC%9E%A5%EC%A7%80%EC%9B%90%EC%84%BC%ED%84%B0_%EB%82%B4%EB%A9%B4%EC%95%84%EC%9D%B4_%EB%B0%8F_%EB%AF%B8%ED%95%B4%EA%B2%B0%EA%B3%BC%EC%A0%9C_%EC%8B%A4%EC%8A%B5_%EB%B0%8F_%EA%B0%95%EC%9D%981_djkplp.jpg"
    },
    {
      id: "lec16",
      category: "lecture",
      title: "경북고용성장지원센터 내면아이 및 미해결과제 실습 및 강의 2",
      desc: "경북고용성장지원센터에서 진행된 무의식 속 내면아이 치유와 미해결 과제 해소를 위한 심리 실습 강의 2부입니다.",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775298854/%EA%B2%BD%EB%B6%81%EA%B3%A0%EC%9A%A9%EC%84%B1%EC%9E%A5%EC%A7%80%EC%9B%90%EC%84%BC%ED%84%B0_%EB%82%B4%EB%A9%B4%EC%95%84%EC%9D%B4_%EB%B0%8F_%EB%AF%B8%ED%95%B4%EA%B2%B0%EA%B3%BC%EC%A0%9C_%EC%8B%A4%EC%8A%B5_%EB%B0%8F_%EA%B0%95%EC%9D%982_ze6kjn.jpg"
    },
    {
      id: "lec17",
      category: "lecture",
      title: "경북선거관리위원회 강의 실시 1",
      desc: "경북선거관리위원회 직원들의 대민 업무 스트레스 관리와 건강한 조직 문화를 위한 특강 현장입니다.",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775298887/%EA%B2%BD%EB%B6%81%EC%84%A0%EA%B1%B0%EA%B4%80%EB%A6%AC%EC%9C%84%EC%9B%90%ED%9A%8C_%EA%B0%95%EC%9D%98_%EC%8B%A4%EC%8B%9C1_vskzrc.jpg"
    },
    {
      id: "lec18",
      category: "lecture",
      title: "경북선거관리위원회 강의 실시 2",
      desc: "심리적 안정감 도모와 원활한 소통 능력을 향상시키기 위해 선거관리위원회 직원 대상으로 진행된 심리 교육입니다.",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775298885/%EA%B2%BD%EB%B6%81%EC%84%A0%EA%B1%B0%EA%B4%80%EB%A6%AC%EC%9C%84%EC%9B%90%ED%9A%8C_%EA%B0%95%EC%9D%98_%EC%8B%A4%EC%8B%9C2_qft41o.jpg"
    },
    {
      id: "lec19",
      category: "lecture",
      title: "경북지방경찰청 기동1중대 전, 의경 심리교육",
      desc: "단체 생활에서 오는 고충과 스트레스를 완화하고 건강한 부대 생활을 지원하기 위한 기동1중대 대원 심리 교육입니다.",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775298897/%EA%B2%BD%EB%B6%81%EC%A7%80%EB%B0%A9%EA%B2%BD%EC%B0%B0%EC%B2%AD_%EA%B8%B0%EB%8F%991%EC%A4%91%EB%8C%80_%EC%A0%84_%EC%9D%98%EA%B2%BD_%EC%8B%AC%EB%A6%AC%EA%B5%90%EC%9C%A1_wjm5ig.jpg"
    },
    {
      id: "lec20",
      category: "lecture",
      title: "경북칠곡경찰서 전, 의경 집단 및 개인상담 진행 1",
      desc: "경북칠곡경찰서 소속 전·의경들을 대상으로 군 복무 중 겪는 스트레스와 고충을 해소하기 위해 진행된 집단 및 개인 심리 상담 현장입니다.",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775298891/%EA%B2%BD%EB%B6%81%EC%B9%A0%EA%B3%A1%EA%B2%BD%EC%B0%B0%EC%84%9C_%EC%A0%84_%EC%9D%98%EA%B2%BD_%EC%A7%91%EB%8B%A8_%EB%B0%8F_%EA%B0%9C%EC%9D%B8%EC%83%81%EB%8B%B4_%EC%A7%84%ED%96%89_1_xgtat9.jpg"
    },
    {
      id: "lec21",
      category: "lecture",
      title: "경북칠곡경찰서 전, 의경 집단 및 개인상담 진행 2",
      desc: "경북칠곡경찰서 전·의경들의 원활한 부대 생활과 심리적 안정을 도모하기 위해 심층적으로 진행된 심리 상담 2부입니다.",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775298889/%EA%B2%BD%EB%B6%81%EC%B9%A0%EA%B3%A1%EA%B2%BD%EC%B0%B0%EC%84%9C_%EC%A0%84_%EC%9D%98%EA%B2%BD_%EC%A7%91%EB%8B%A8_%EB%B0%8F_%EA%B0%9C%EC%9D%B8%EC%83%81%EB%8B%B4_%EC%A7%84%ED%96%89_2_hhhmnm.jpg"
    },
    {
      id: "lec22",
      category: "lecture",
      title: "경상북도 소방공무원 찾아가는 상담실",
      desc: "재난 현장 출동으로 인한 외상후 스트레스(PTSD)를 예방하고 경상북도 소방공무원의 마음 건강을 돌보기 위한 찾아가는 상담실 운영 모습입니다.",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775298861/%EA%B2%BD%EC%83%81%EB%B6%81%EB%8F%84_%EC%86%8C%EB%B0%A9%EA%B3%B5%EB%AC%B4%EC%9B%90_%EC%B0%BE%EC%95%84%EA%B0%80%EB%8A%94_%EC%83%81%EB%8B%B4%EC%8B%A4_wqbqtt.jpg"
    },
    {
      id: "lec23",
      category: "lecture",
      title: "경주경찰서 전, 의경 심리교육 1",
      desc: "경주경찰서 전·의경 대원들의 올바른 가치관 형성과 복무 중 심리적 안정감을 높이기 위해 마련된 맞춤형 심리 교육입니다.",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775298894/%EA%B2%BD%EC%A3%BC%EA%B2%BD%EC%B0%B0%EC%84%9C_%EC%A0%84_%EC%9D%98%EA%B2%BD_%EC%8B%AC%EB%A6%AC%EA%B5%90%EC%9C%A1_1_vh0eap.jpg"
    },
    {
      id: "lec24",
      category: "lecture",
      title: "경주경찰서 전, 의경 심리교육 2",
      desc: "경주경찰서 전·의경들을 대상으로 상호 존중과 원활한 소통 방법을 교육하며 활기찬 부대 환경을 조성하기 위한 특강 현장입니다.",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775298892/%EA%B2%BD%EC%A3%BC%EA%B2%BD%EC%B0%B0%EC%84%9C_%EC%A0%84_%EC%9D%98%EA%B2%BD_%EC%8B%AC%EB%A6%AC%EA%B5%90%EC%9C%A1_2_um3gbf.jpg"
    },
    {
      id: "lec25",
      category: "lecture",
      title: "계명문화대학교 고객심리 특강",
      desc: "계명문화대학교 학생들을 대상으로 서비스 현장에서 마주하는 다양한 고객 심리를 이해하고 원활하게 응대하기 위한 특강을 진행했습니다.",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775298898/%EA%B3%84%EB%AA%85%EB%AC%B8%ED%99%94%EB%8C%80%ED%95%99%EA%B5%90_%EA%B3%A0%EA%B0%9D%EC%8B%AC%EB%A6%AC_%ED%8A%B9%EA%B0%95_tdtkxg.jpg"
    },
    {
      id: "lec26",
      category: "lecture",
      title: "구미 경찰서 방범순찰대 전, 의경 정신건강상담 특강 진행 1",
      desc: "구미경찰서 방범순찰대 대원들의 대민 업무 스트레스 해소 및 정신 건강 증진을 위해 마련된 전문 심리 상담 특강 1부입니다.",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775298848/%EA%B5%AC%EB%AF%B8_%EA%B2%BD%EC%B0%B0%EC%84%9C_%EB%B0%A9%EB%B2%94%EC%88%9C%EC%B0%B0%EB%8C%80_%EC%A0%84_%EC%9D%98%EA%B2%BD_%EC%A0%95%EC%8B%A0%EA%B1%B4%EA%B0%95%EC%83%81%EB%8B%B4_%ED%8A%B9%EA%B0%95_%EC%A7%84%ED%96%89_151119_y1ehyl.jpg"
    },
    {
      id: "lec27",
      category: "lecture",
      title: "구미 경찰서 방범순찰대 전, 의경 정신건강상담 특강 진행 2",
      desc: "구미경찰서 방범순찰대 대원들이 심리적 긴장감을 낮추고 긍정적인 복무 자세를 확립할 수 있도록 돕는 정신 건강 특강 2부입니다.",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775298846/%EA%B5%AC%EB%AF%B8_%EA%B2%BD%EC%B0%B0%EC%84%9C_%EB%B0%A9%EB%B2%94%EC%88%9C%EC%B0%B0%EB%8C%80_%EC%A0%84_%EC%9D%98%EA%B2%BD_%EC%A0%95%EC%8B%A0%EA%B1%B4%EA%B0%95%EC%83%81%EB%8B%B4_%ED%8A%B9%EA%B0%95_%EC%A7%84%ED%96%89_151119_2_owk3hy.jpg"
    },
    {
      id: "lec28",
      category: "lecture",
      title: "구미경찰서 특강 1",
      desc: "구미경찰서 직원들을 대상으로 직무 스트레스 관리와 조직 내 소통을 위해 진행된 심리 특강입니다.",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775298900/%EA%B5%AC%EB%AF%B8%EA%B2%BD%EC%B0%B0%EC%84%9C_%ED%8A%B9%EA%B0%951_rknhyg.jpg"
    },
    {
      id: "lec29",
      category: "lecture",
      title: "구미정보고등학교 심리검사 & 진로적성검사와 진로교육 1",
      desc: "구미정보고등학교 학생들의 자기 이해도를 높이고 올바른 진로 선택을 돕기 위해 진행된 심리검사 및 진로적성검사 교육 1부입니다.",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775298859/%EA%B5%AC%EB%AF%B8%EC%A0%95%EB%B3%B4%EA%B3%A0%EB%93%B1%ED%95%99%EA%B5%90_%EC%8B%AC%EB%A6%AC%EA%B2%80%EC%82%AC_%EC%A7%84%EB%A1%9C%EC%A0%81%EC%84%B1%EA%B2%80%EC%82%AC%EC%99%80_%EC%A7%84%EB%A1%9C%0A%EA%B5%90%EC%9C%A1_1_eiqyij.jpg"
    },
    {
      id: "lec30",
      category: "lecture",
      title: "구미정보고등학교 심리검사 & 진로적성검사와 진로교육 2",
      desc: "구미정보고등학교 학생들을 대상으로 객관적인 진로적성검사 결과를 바탕으로 심층적인 진로 탐색을 지원하는 교육 현장입니다.",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775298858/%EA%B5%AC%EB%AF%B8%EC%A0%95%EB%B3%B4%EA%B3%A0%EB%93%B1%ED%95%99%EA%B5%90_%EC%8B%AC%EB%A6%AC%EA%B2%80%EC%82%AC_%EC%A7%84%EB%A1%9C%EC%A0%81%EC%84%B1%EA%B2%80%EC%82%AC%EC%99%80_%EC%A7%84%EB%A1%9C%EA%B5%90%EC%9C%A1_2_vmfwmi.jpg"
    },
    {
      id: "lec31",
      category: "lecture",
      title: "김천경찰서 315전경대 개인 및 집단 상담",
      desc: "김천경찰서 315전경대 대원들의 복무 스트레스 해소와 정서 안정을 위해 진행된 맞춤형 심리 상담 프로그램입니다.",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775298883/%EA%B9%80%EC%B2%9C%EA%B2%BD%EC%B0%B0%EC%84%9C_315%EC%A0%84%EA%B2%BD%EB%8C%80_%EA%B0%9C%EC%9D%B8_%EB%B0%8F_%EC%A7%91%EB%8B%A8_%EC%83%81%EB%8B%B4_xfirab.jpg"
    },
    {
      id: "lec32",
      category: "lecture",
      title: "서대구 다문화 가족 지원센터 출강",
      desc: "서대구 다문화 가족 지원센터에서 다문화 가정의 원활한 소통과 가족 관계 증진을 위해 진행된 심리 특강입니다.",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775302611/%EC%84%9C%EB%8C%80%EA%B5%AC_%EB%8B%A4%EB%AC%B8%ED%99%94_%EA%B0%80%EC%A1%B1_%EC%A7%80%EC%9B%90%EC%84%BC%ED%84%B0_%EC%B6%9C%EA%B0%95_%EC%9C%A4%EC%98%81%EC%A4%80_%EC%9B%90%EC%9E%A5%EB%8B%98_ebdfvg.jpg"
    },
    {
      id: "lec33",
      category: "lecture",
      title: "양산교육지원청 Wee센터 부모교육",
      desc: "양산교육지원청 Wee센터에서 학부모를 대상으로 자녀와의 건강한 애착 관계 형성을 위해 실시한 부모 교육 특강입니다.",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775298867/%EC%96%91%EC%82%B0%EA%B5%90%EC%9C%A1%EC%A7%80%EC%9B%90%EC%B2%ADWee%EC%84%BC%ED%84%B0_%EB%B6%80%EB%AA%A8%EA%B5%90%EC%9C%A1_hut8b6.jpg"
    },
    {
      id: "lec34",
      category: "lecture",
      title: "울산 동구 정신건강증진센터에서 부모교육 특강실시 1",
      desc: "울산 동구 정신건강증진센터에서 지역 주민 and 학부모를 대상으로 자녀 양육의 심리적 어려움을 해소하기 위해 진행된 특강 1부입니다.",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775298843/%EC%9A%B8%EC%82%B0_%EB%8F%99%EA%B5%AC_%EC%A0%95%EC%8B%A0%EA%B1%B4%EA%B0%95%EC%A6%9D%EC%A7%84%EC%84%BC%ED%84%B0%EC%97%90%EC%84%9C_%EB%B6%80%EB%AA%A8%EA%B5%90%EC%9C%A1_%ED%8A%B9%EA%B0%95%EC%8B%A4%EC%8B%9C_1_sv6nrl.jpg"
    },
    {
      id: "lec35",
      category: "lecture",
      title: "울산 동구 정신건강증진센터에서 부모교육 특강실시 2",
      desc: "울산 동구 정신건강증진센터에서 진행된 바람직한 부모 역할 and 심리적 지지 기반을 다지는 부모교육 특강 2부 현장입니다.",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775298841/%EC%9A%B8%EC%82%B0_%EB%8F%99%EA%B5%AC_%EC%A0%95%EC%8B%A0%EA%B1%B4%EA%B0%95%EC%A6%9D%EC%A7%84%EC%84%BC%ED%84%B0%EC%97%90%EC%84%9C_%EB%B6%80%EB%AA%A8%EA%B5%90%EC%9C%A1_%ED%8A%B9%EA%B0%95%EC%8B%A4%EC%8B%9C_2_uins69.jpg"
    },
    {
      id: "lec36",
      category: "lecture",
      title: "울산 삼남중학교 생명사랑존중교육 강의 1",
      desc: "울산 삼남중학교 학생들의 생명 존중 의식을 고취하고 긍정적인 가치관을 함양하기 위해 마련된 인성 교육 1부입니다.",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775298876/%EC%9A%B8%EC%82%B0_%EC%82%BC%EB%82%A8%EC%A4%91%ED%95%99%EA%B5%90_%EC%83%9D%EB%AA%85%EC%82%AC%EB%9E%91%EC%A1%B4%EC%A4%91%EA%B5%90%EC%9C%A1_%EA%B0%95%EC%9D%98_1_utw9wt.jpg"
    },
    {
      id: "lec37",
      category: "lecture",
      title: "울산 삼남중학교 생명사랑존중교육 강의 2",
      desc: "청소년기 우울증 예방 및 올바른 생명 윤리 확립을 위해 실시된 삼남중학교 생명사랑존중교육 2부 특강입니다.",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775298874/%EC%9A%B8%EC%82%B0_%EC%82%BC%EB%82%A8%EC%A4%91%ED%95%99%EA%B5%90_%EC%83%9D%EB%AA%85%EC%82%AC%EB%9E%91%EC%A1%B4%EC%A4%91%EA%B5%90%EC%9C%A1_%EA%B0%95%EC%9D%98_2_sqwu8l.jpg"
    },
    {
      id: "lec38",
      category: "lecture",
      title: "전국 코레일 전담 심리상담사 워크샵",
      desc: "근로자들의 심리 치유를 담당하는 코레일 힐링센터 전담 심리상담사들을 대상으로 진행된 전문성 강화 워크샵입니다.",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775298872/%EC%A0%84%EA%B5%AD_%EC%BD%94%EB%A0%88%EC%9D%BC_%EC%8B%AC%EB%A6%AC%EC%83%81%EB%8B%B4%EC%82%AC_%EC%9B%8C%ED%81%AC%EC%83%B5_al2doc.jpg"
    },
    {
      id: "lec39",
      category: "lecture",
      title: "울산 시청 특강 실시 하였습니다. 주제 트라우마",
      desc: "울산 시청 재난 대응 및 주요 업무 담당자들을 대상으로 외상 후 스트레스(PTSD)와 트라우마 관리를 주제로 진행된 특강입니다.",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775302879/%EC%9A%B8%EC%82%B0_%EC%8B%9C%EC%B2%AD_%ED%8A%B9%EA%B0%95_%EC%8B%A4%EC%8B%9C_%ED%95%98%EC%98%80%EC%8A%B5%EB%8B%88%EB%8B%A4_%EC%A3%BC%EC%A0%9C%ED%8A%B8%EB%9D%BC%EC%9A%B0%EB%A7%88_rntnhp.jpg"
    },
    {
      id: "lec40",
      category: "lecture",
      title: "월서 중학교 진로 특강 입니다",
      desc: "미래의 주역인 월서중학교 학생들을 대상으로 진로 탐색에 대한 동기 부여와 비전 설계를 돕기 위한 진로 특강입니다.",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775298881/%EC%9B%94%EC%84%9C_%EC%A4%91%ED%95%99%EA%B5%90_%EC%A7%84%EB%A1%9C_%ED%8A%B9%EA%B0%95_%EC%9E%85%EB%8B%88%EB%8B%A4_v72hh1.jpg"
    },
    {
      id: "lec41",
      category: "lecture",
      title: "직업인 초청 특강  동문고등학교에서 1",
      desc: "동문고등학교 학생들을 대상으로 심리 상담사 등 관련 직업 탐색과 비전을 제시한 진로 특강 1부입니다.",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775298880/%EC%A7%81%EC%97%85%EC%9D%B8_%EC%B4%88%EC%B2%AD_%ED%8A%B9%EA%B0%951_%EB%8F%99%EB%AC%B8%EA%B3%A0%EB%93%B1%ED%95%99%EA%B5%90%EC%97%90%EC%84%9C_kfs9e2.jpg"
    },
    {
      id: "lec42",
      category: "lecture",
      title: "직업인 초청 특강  동문고등학교에서 2",
      desc: "학생들의 적극적인 참여 속에서 다양한 진로 고민을 나누고 멘토링을 진행한 동문고등학교 직업인 초청 특강 2부입니다.",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775298878/%EC%A7%81%EC%97%85%EC%9D%B8_%EC%B4%88%EC%B2%AD_%ED%8A%B9%EA%B0%951_%EB%8F%99%EB%AC%B8%EA%B3%A0%EB%93%B1%ED%95%99%EA%B5%90%EC%97%90%EC%84%9C_2_yf9bic.jpg"
    },
    {
      id: "lec43",
      category: "lecture",
      title: "칠곡소방서 집단상담 1",
      desc: "칠곡소방서 소방대원들의 현장 출동으로 인한 심리적 긴장과 스트레스를 완화하기 위해 진행된 집단 심리상담 1부입니다.",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775298865/%EC%B9%A0%EA%B3%A1%EC%86%8C%EB%B0%A9%EC%84%9C_%EC%A7%91%EB%8B%A8%EC%83%81%EB%8B%B4_1_suugoy.jpg"
    },
    {
      id: "lec44",
      category: "lecture",
      title: "칠곡소방서 집단상담 2",
      desc: "소방대원 상호 간의 지지와 공감을 통해 마음 건강을 다지고 긍정적인 에너지를 채우는 집단 심리상담 2부 현장입니다.",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775298863/%EC%B9%A0%EA%B3%A1%EC%86%8C%EB%B0%A9%EC%84%9C_%EC%A7%91%EB%8B%A8%EC%83%81%EB%8B%B4_2_gr4ndu.jpg"
    },
    {
      id: "lec45",
      category: "lecture",
      title: "학남중 진로특강 실시1",
      desc: "자기 탐색과 미래 설계에 관심이 많고 학업 스트레스가 많은 학남중학교 학생들을 위해 마련된 맞춤형 성장 및 진로 특강 1부입니다.",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775298870/%ED%95%99%EB%82%A8%EC%A4%91_%EC%A7%84%EB%A1%9C%ED%8A%B9%EA%B0%95_%EC%8B%A4%EC%8B%9C1_anfyva.jpg"
    },
    {
      id: "lec46",
      category: "lecture",
      title: "학남중 진로특강 실시2",
      desc: "청소년기 올바른 자아 형성과 주도적인 진로 선택을 돕는 유익한 정보 제공 위주의 학남중 진로특강 2부입니다.",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775298869/%ED%95%99%EB%82%A8%EC%A4%91_%EC%A7%84%EB%A1%9C%ED%8A%B9%EA%B0%95_%EC%8B%A4%EC%8B%9C2_yiigii.jpg"
    },
    {
      id: "lec47",
      category: "lecture",
      title: "문수실버복지관 강의",
      desc: "어르신들의 활기찬 노년 생활과 심리적 안정감을 찾기 위해 문수실버복지관에서 진행된 맞춤형 마음 치유 강의입니다.",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775308068/%EB%AC%B8%EC%88%98%EC%8B%A4%EB%B2%84%EB%B3%B5%EC%A7%80%EA%B4%80_%EA%B0%95%EC%9D%98_ux66dl.png"
    },
    {
      id: "lec48",
      category: "lecture",
      title: "상주경찰서에서 의경을 대상으로 심리상담의 실제에 대해 강의를 하였습니다.",
      desc: "상주경찰서 의경들을 대상으로 일상 속 심리 관리와 상담의 실제 적용 사례를 알기 쉽게 설명한 특강입니다.",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775307954/%EC%83%81%EC%A3%BC%EA%B2%BD%EC%B0%B0%EC%84%9C%EC%97%90%EC%84%9C_%EC%9D%98%EA%B2%BD%EC%9D%84_%EB%8C%80%EC%83%81%EC%9C%BC%EB%A1%9C_%EC%8B%AC%EB%A6%AC%EC%83%81%EB%8B%B4%EC%9D%98_%EC%8B%A4%EC%A0%9C%EC%97%90_%EB%8C%80%ED%95%B4_%EA%B0%95%EC%9D%98%EB%A5%BC_%ED%95%98%EC%98%80%EC%8A%B5%EB%8B%88%EB%8B%A4._mi1jtl.jpg"
    }

  ];

  // 4. 라디오 및 인터뷰 (Category 3) -> Total 8 items
  const radioItems = [
    {
      id: "rad_new1",
      radio: "라디오 및 인터뷰",
      date: "2019.12.13",
      title: "20191213_093243_tbn교통방송 심리코너 진행",
      summary: "TBN 교통방송 정기 심리상담 코너를 통하여 현대인들의 다양한 고민을 나누고 해결책을 조언하는 방송을 진행했습니다.",
      desc: "TBN 교통방송 심리 코너에서 방송 녹음 및 대화를 진행하는 심리 전문가로서의 실제 방송 참여 모습입니다.",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775293165/20191213_093243_upohwz.jpg"
    },
    {
      id: "rad_new2",
      radio: "라디오 및 인터뷰",
      date: "2019.06.07",
      title: "20190607 TBN 교통방송 PD님과 함께",
      summary: "TBN 교통방송 정기 심리상담 코너의 담당 PD님과 함께 성공적인 방송 진행을 기념하며 촬영한 기념사진입니다.",
      desc: "성공적인 대민 방송 진행을 위해 보이지 않는 곳에서 애써주시는 방송 관계자(PD)분과 뜻깊은 기념사진을 남겼습니다.",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775294702/20190607_094719_fx6e6a.jpg"
    },
    {
      id: "rad_new3",
      radio: "라디오 및 인터뷰",
      date: "2022.03.15",
      title: "라디오세상 울산만사 [ 2022년 03월 15일] 『대통령 선거를 통해서 되짚어보는 투표 심리』",
      summary: "『대통령 선거를 통해서 되짚어보는 투표 심리』 라는 주제로 방송하였습니다.",
      desc: "선거에 영향을 미치는 후보자 이미지와 유권자 심리 기저에 깔린 무의식적 경향성에 대해 분석하고 해설해 드립니다.",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775292903/%EB%8C%80%ED%86%B5%EB%A0%B9_%EC%84%A0%EA%B1%B0%EB%A5%BC_%ED%86%B5%ED%95%B4%EC%84%9C_%EB%90%98%EC%A7%9A%EC%96%B4%EB%B3%B4%EB%8A%94_%ED%88%AC%ED%91%9C_%EC%8B%AC%EB%A6%AC_zpm2rh.png"
    },
    {
      id: "rad_new4",
      radio: "라디오 및 인터뷰",
      date: "2022.03.29",
      title: "라디오세상 울산만사 [ 2022년 03월 29일] 『심리학 관점에서 바라보는 ‘시간’』",
      summary: "『심리학 관점에서 바라보는 ‘시간’』 이라는 주제로 방송하였습니다.",
      desc: "인생을 살아가며 누구나 느끼는 시간의 마음속 움직임을 심층적으로 분석하고 유익한 활용법을 공유한 인터뷰입니다.",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775292907/%EC%8B%AC%EB%A6%AC%ED%95%99_%EA%B4%80%EC%A0%90%EC%97%90%EC%84%9C_%EB%B0%94%EB%9D%BC%EB%B3%B4%EB%8A%94_%EC%8B%9C%EA%B0%84_dyn5uz.jpg"
    },
    {
      id: "rad_new5",
      radio: "라디오 및 인터뷰",
      date: "2022.04.12",
      title: "라디오세상 울산만사 [ 2022년 04월 12일] 『’봄만 되면 왜 우울할까? ‘계절성 우울’』",
      summary: "『’봄만 되면 왜 우울할까? ‘계절성 우울’』 이라는 주제로 방송하였습니다.",
      desc: "황홀한 봄 날씨에도 가라앉는 내면의 서글픔을 생리적 요인과 환경적 호르몬 관점에서 분석하고 심리 솔루션을 조언한 코너입니다.",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775292905/%EB%B4%84%EB%A7%8C_%EB%90%98%EB%A9%B4_%EC%99%9C_%EC%9A%B0%EC%9A%B8%ED%95%A0%EA%B9%8C_%EA%B3%84%EC%A0%88%EC%84%B1_%EC%9A%B0%EC%9A%B8_jur08i.png"
    },
    {
      id: "rad_new6",
      radio: "라디오 및 인터뷰",
      date: "2022.04.26",
      title: "라디오세상 울산만사 [ 2022년 04월 26일] 『내가 하면 로맨스, 남이 하면 불륜?! ‘내로남불’심리』",
      summary: "『내가 하면 로맨스, 남이 하면 불륜?! ‘내로남불’심리』 라는 주제로 방송하였습니다.",
      desc: "인지부조화를 회복하고 자기 합리화에 이르는 방어기제들을 흥미진진하게 풀어보며, 보다 객관적인 자기 성찰의 길을 보여줍니다.",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775292910/%EB%82%B4%EA%B0%80_%ED%95%98%EB%A9%B4_%EB%A1%9C%EB%A7%A8%EC%8A%A4_%EB%82%A8%EC%9D%B4_%ED%95%98%EB%A9%B4_%EB%B6%88fbs_ysvvoh.jpg"
    },
    {
      id: "rad_new7",
      radio: "라디오 및 인터뷰",
      date: "2022.05.10",
      title: "라디오세상 울산만사 [ 2022년 05월 10일] 『마스크를 쓰고 벗는 얼굴속에 감춰진 심리』",
      summary: "『마스크를 쓰고 벗는 얼굴속에 감춰진 심리』 라는 주제로 방송하였습니다.",
      desc: "익명성과 보안성이라는 두 갈래 감정 속에서 마스크 이면에 숨겨둔 안전지대 및 청소년들의 가림심리 상태를 해설한 코너입니다.",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775292904/%EB%A7%88%EC%8A%A4%ED%81%AC%EC%8B%AC%EB%A6%AC_cvkl4y.png"
    },
    {
      id: "rad_new8",
      radio: "라디오 및 인터뷰",
      date: "2022.05.24",
      title: "라디오세상 울산만사 [ 2022년 05월 24일] 『연애할 때 애착 유형이 미치는 영향』",
      summary: "『연애할 때 애착 유형이 미치는 영향』 이라는 주제로 방송하였습니다.",
      desc: "어릴 적 주양육자와의 관계 속에서 발전한 고착된 애착 성향을 통찰하여 성인기 연애에서 건강하고 튼튼한 연대를 시작하게 돕는 상담 솔루션입니다.",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775292908/%EC%97%B0%EC%95%A0%ED%95%A0_%EB%95%8C_%EC%95%A0%EC%B0%A9_%EC%9C%A0%ED%98%95%EC%9D%B4_%EB%AF%B8%EC%B9%98%EB%8A%94_%EC%98%81%ED%96%A5_ss3jmj.jpg"
    },
    {
      id: "rad_new9",
      radio: "라디오 및 인터뷰",
      date: "2022.06.07",
      title: "라디오세상 울산만사 [ 2022년 06월 07일] 『건강한 팬덤 문화를 위한 심리적 조언』",
      summary: "『건강한 팬덤 문화를 위한 심리적 조언』 이라는 주제로 방송하였습니다.",
      desc: "소속감 and 고취된 자아 존중감을 선사해 주는 팬심의 건강한 동반 관계를 지지하고 과도한 몰입의 부작용을 극복하도록 돕는 가이드 방송입니다.",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775292909/%EA%B1%B4%EA%B0%95%ED%95%9C_%ED%8C%AC%EB%8D%A4_eoj2le.png"
    },
    {
      id: "rad_new10",
      radio: "라디오 및 인터뷰",
      date: "2022.07.05",
      title: "라디오세상 울산만사 [ 2022년 07월 05일] 『몸은 어른, 마음은 아이 ‘ 성인아이’』",
      summary: "『몸은 어른, 마음은 아이 ‘ 성인아이’\n』 라는 주제로 방송하였습니다.",
      desc: "과거 미해결된 무의식 속 갈등과 상처를 직시함으로써, 진정으로 자율적이고 조화로운 온전한 어른으로 스스로 우뚝 서는 여정을 논하는 치유의 방송자료입니다.",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775292906/%EC%84%B1%EC%9D%B8%EC%95%84%EC%9D%B4_jcuxyn.png"
    },
    {
      id: "rad_new11",
      radio: "라디오 및 인터뷰",
      date: "2022.07.19",
      title: "라디오세상 울산만사 [ 2022년 07월 19일] 『부부간 의사소통을 위한 심리 조언』",
      summary: "『부부간 의사소통을 위한 심리 조언』 이라는 주제로 방송하였습니다.",
      desc: "갈등을 예방하고 공감을 더하는 부부 대화의 정서적 피난처와 건강한 소통 기술을 조언합니다.",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775292905/%EB%B6%80%EB%B6%80%EC%9D%98%EC%82%AC%EC%86%8C%ED%86%B5_wzc83z.png"
    },
    {
      id: "rad_new12",
      radio: "라디오 및 인터뷰",
      date: "2022.08.02",
      title: "라디오세상 울산만사 [ 2022년 08월 02일] 『비언어적 의사소통』",
      summary: "『비언어적 의사소통』 이라는 주제로 방송하였습니다.",
      desc: "언어를 넘어 눈빛, 몸짓, 동작에 깃든 잠재적 내면을 캐치하고 깊은 교감을 이루는 통찰 코칭입니다.",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775292905/%EB%B9%84%EC%96%B8%EC%96%B4_jw6jea.png"
    },
    {
      id: "rad_new13",
      radio: "라디오 및 인터뷰",
      date: "2022.08.16",
      title: "라디오세상 울산만사 [ 2022년 08월 16일] 『전화 공포증 ‘콜 포비아’』",
      summary: "『전화 공포증 ‘콜 포비아’』 라는 주제로 방송하였습니다.",
      desc: "텍스트에 익숙해진 현대인들이 음성 소통에 갖는 두려움과 거부반응의 메커니즘을 짚어보고 치유법을 찾아갑니다.",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775300334/%EC%BD%9C%ED%8F%AC%EB%B9%84%EC%95%84_w16bxn.png"
    },
    {
      id: "rad_new14",
      radio: "라디오 및 인터뷰",
      date: "2022.08.30",
      title: "라디오세상 울산만사 [ 2022년 08월 30일] 『아이에게 화를 내는 부모의 심리』",
      summary: "『아이에게 화를 내는 부모의 심리』 라는 주제로 방송하였습니다.",
      desc: "부모 내부의 채워지지 못한 잔여 스트레스와 투사를 이해하고, 화내지 않고 다가가는 사랑 가득한 훈육법을 나눕니다.",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775292907/%EC%95%84%EC%9D%B4%EC%97%90%EA%B2%8C_%ED%99%94%EB%82%B4%EB%8A%94_ykgs0e.png"
    },
    {
      id: "rad_new15",
      radio: "라디오 및 인터뷰",
      date: "2022.09.13",
      title: "라디오세상 울산만사 [ 2022년 09월 13일] 『명절 연휴를 통해 되짚어보는 가족의 의미』",
      summary: "『명절 연휴를 통해 되짚어보는 가족의 의미』 라는 주제로 방송하였습니다.",
      desc: "가장 가깝지만 때론 가장 아픈 존재인 가족 사이의 긴장과 갈등을 명절 증후군 관점에서 치유하는 멘토링입니다.",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775292909/%EA%B0%80%EC%A1%B1%EC%9D%98_%EC%9D%98%EB%AF%B8_lksrzx.png"
    },
    {
      id: "rad_new16",
      radio: "라디오 및 인터뷰",
      date: "2022.09.27",
      title: "라디오세상 울산만사 [ 2022년 09월 27일] 『남을 행복하게 해주려는 마음』",
      summary: "『남을 행복하게 해주려는 마음』 이라는 주제로 방송하였습니다.",
      desc: "착한 사람 증후군의 이면에 숨어있는 미움받을 두려움을 해소하고 스스로를 존중하며 진정한 행복을 찾는 길을 제시합니다.",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775292910/%EB%82%A8%EC%9D%84_%ED%96%89%EB%B3%B5%ED%95%98%EA%B2%8C_k7jubj.png"
    },
    {
      id: "rad_new17",
      radio: "라디오 및 인터뷰",
      date: "2022.10.11",
      title: "라디오세상 울산만사 [ 2022년 10월 11일] 『반대로 하고 싶은 ‘청개구리 심리’』",
      summary: "『반대로 하고 싶은 ‘청개구리 심리’』 라는 주제로 방송하였습니다.",
      desc: "간섭이나 지시를 거부하는 반발 심리 이면의 무의식을 탐색하고, 소통의 방향성을 현명하게 지휘할 심리학적 조언을 담았습니다.",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775300469/%EC%B2%AD%EA%B0%9C%EA%B5%AC%EB%A6%AC_ejqpsc.png"
    },
    {
      id: "rad_new18",
      radio: "라디오 및 인터뷰",
      date: "2022.10.25",
      title: "라디오세상 울산만사 [ 2022년 10월 25일] 『위축되는 소비심리… 이유는?』",
      summary: "『위축되는 소비심리… 이유는?』 이라는 주제로 방송하였습니다.",
      desc: "사회적·경제적 리스크 속에 불안해하는 가계의 방어적 소비 위축 기저를 심층 분석하고 마음의 대응력을 제안합니다.",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775292906/%EC%86%8C%EB%B9%84%EC%8B%AC%EB%A6%AC%EC%9C%84%EC%B6%95_zvqo4w.png"
    },
    {
      id: "rad_new19",
      radio: "라디오 및 인터뷰",
      date: "2022.11.08",
      title: "라디오세상 울산만사 [ 2022년 11월 08일] 『다른 사람과 비교하는 심리』",
      summary: "『다른 사람과 비교하는 심리』 라는 주제로 방송하였습니다.",
      desc: "타인과의 비교로 인해 삶의 활력을 잃고 계신 분들을 위해, 비교의 시선을 나에게로 돌려 내면의 자존을 세워주는 코너입니다.",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775292911/%EB%8B%A4%EB%A5%B8_%EC%82%AC%EB%9E%8C%EA%B3%BC_%EB%B9%84%EA%B5%90_bedyv9.png"
    },
    {
      id: "rad_new20",
      radio: "라디오 및 인터뷰",
      date: "2022.11.22",
      title: "라디오세상 울산만사 [ 2022년 11월 22일] 『사람들은 왜 싫어하는 사람을 닮아갈까?』",
      summary: "『사람들은 왜 싫어하는 사람을 닮아갈까?』 라는 주제로 방송하였습니다.",
      desc: "나를 괴롭혔던 어떤 이의 모습을 어느새 흉내 내는 '적대적 동일시' 심리의 원인과 굴레를 끊는 주체적인 삶의 자세를 안내합니다.",
      image: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775292906/%EC%8B%AB%EC%96%B4%ED%95%98%EB%8A%94_%EC%82%AC%EB%9E%8C%EC%9D%84_%EB%8B%AE%EB%8A%94_%EC%9D%B4%EC%9C%A0_lebvhk.png"
    }
  ];

  const educationItems = [
    {
      id: "edu1",
      education: "교육 및 프로그램",
      title: "기업 임직원 성인지 감수성 교육",
      desc: "건강한 조직 문화를 위한 배려와 존중 교육 자료",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=60"
    },
    {
      id: "edu2",
      education: "교육 및 프로그램",
      title: "교정시설 재소자 교화 프로그램",
      desc: "인지왜곡 수정 및 사회성 재건을 위한 특화 교화 자료",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=60"
    },
    {
      id: "edu3",
      education: "교육 및 프로그램",
      title: "알코올 및 중독 재활 예방 교육 프로그램",
      desc: "건강한 사회인 복귀를 위한 집단 상담 교단 자료",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=60"
    },
    {
      id: "edu4",
      education: "교육 및 프로그램",
      title: "부부 및 가족 갈등 솔루션 워크숍",
      desc: "가정 법원 연계 가족 관계 회복 프로그램 수강 자료",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=60"
    },
    {
      id: "edu5",
      education: "교육 및 프로그램",
      title: "청소년 진로 및 학업 스트레스 완화 세미나",
      desc: "중고등학교 대상 마인드 플로우 교육 과정 훈련서",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=60"
    },
    {
      id: "edu6",
      education: "교육 및 프로그램",
      title: "시니어 마음 치유 및 웰에이징 프로그램",
      desc: "인지 보존 및 심리 정서 활성화 프로그램 교재",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=60"
    },
    {
      id: "edu7",
      education: "교육 및 프로그램",
      title: "군 장병 자살 예방 및 복무 적응 교육",
      desc: "생명 존중 및 회복력 함양 트레이닝 워크북",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=60"
    },
    {
      id: "edu8",
      education: "교육 및 프로그램",
      title: "분노 조절 및 정서적 자기 규제 훈련",
      desc: "충동 억제와 갈등 관리를 위한 전문 교안 및 실습",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=60"
    }
  ];

  // Menu bar config items
  const menuBarItems = [
    { id: 'all', label: '전체' },
    { id: 'broadcast', label: '방송 출연' },
    { id: 'lecture', label: '강연 및 특강' },
    { id: 'radio', label: '라디오 및 인터뷰' },
    { id: 'education', label: '교육 및 프로그램' }
  ];

  return (
    <div className="pt-20 bg-slate-50/30">
      {/* Top Banner Header */}
      <section className="bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 py-24 lg:py-36 border-b border-slate-800 text-white relative overflow-hidden">
        {/* Abstract background light elements */}
        <div className="absolute top-0 right-0 w-2/3 h-full bg-teal-500/5 skew-x-12 translate-x-1/4 pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary font-bold tracking-[0.3em] text-xs lg:text-sm uppercase mb-6 bg-teal-500/10 px-4 py-1.5 rounded-full border border-teal-500/20 inline-flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" /> Official Archive
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white mb-8 tracking-tight"
          >
            대표원장 방송 출연 · 강연
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-teal-100/80 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto font-normal leading-relaxed text-center"
          >
            윤영준 대표원장의 방송 출연, 강연, 인터뷰, 라디오, 교육 활동을 체계적으로 정리한<br className="hidden md:block" />
            공식 아카이브 페이지입니다. 방송, 강연, 인터뷰, 교육 프로그램 등 다양한 현장에서의<br className="hidden md:block" />
            실제 활동 기록을 확인하실 수 있습니다.
          </motion.p>
        </div>
      </section>

      {/* Category Selection Filter Menu Bar */}
      <section className="sticky top-20 z-40 bg-white/95 backdrop-blur-md shadow-[0_2px_15px_-4px_rgba(0,0,0,0.05)] border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex items-center justify-start sm:justify-center overflow-x-auto scrollbar-none pb-2 sm:pb-0 -mx-4 sm:mx-0 px-4 sm:px-0">
            <div className="inline-flex items-center p-1 bg-slate-100/80 rounded-full border border-slate-200/50 gap-1.5 shrink-0">
              {menuBarItems.map((tab) => {
                const isSelected = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as CategoryTab)}
                    className={`relative px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-tight transition-all duration-300 min-h-[40px] shrink-0 cursor-pointer ${
                      isSelected
                        ? 'bg-primary text-white shadow-md shadow-primary/20 hover:bg-primary/95 scale-[1.03]'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <AnimatePresence mode="wait">
          {/* =========================================================================
              VIEW MODE: 전체 (ALL CATEGORIES)
              ========================================================================= */}
          {activeTab === 'all' && (
            <motion.div
              key="all"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="space-y-24 sm:space-y-32"
            >
              {/* 대표 활동 (Representative Items Section) */}
              <section id="representative-activities">
                <div className="flex items-center gap-3.5 mb-10 sm:mb-12 border-b border-slate-100 pb-5">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0">
                    <Tv size={22} className="sm:size-[24px]" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">대표 활동</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                  {representativeItems.map((item, idx) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ delay: idx * 0.08, duration: 0.5 }}
                      className="group flex flex-col h-full bg-transparent transition-all duration-500"
                    >
                      <div 
                        onClick={() => setPopupImage({ src: item.image, title: item.title, desc: item.desc || (item as any).summary })}
                        className="relative aspect-[16/10] overflow-hidden rounded-3xl bg-slate-100 shrink-0 shadow-sm group-hover:shadow-md group-hover:scale-[1.02] transition-all duration-500 cursor-zoom-in"
                      >
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="pt-4 flex flex-col flex-grow">
                        <span className="text-xs sm:text-sm font-bold text-primary mb-1.5 block tracking-wider">{item.category}</span>
                        <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2 leading-snug group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mt-auto line-clamp-1 font-medium">
                          {item.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </section>

              {/* 전체 아카이브 Wrapper */}
              <div className="pt-8 border-t border-slate-200/60 space-y-24 sm:space-y-32">
                <div className="text-center sm:text-left">
                  <span className="text-primary font-bold text-xs sm:text-sm tracking-widest uppercase mb-2 block">Archive Portfolio</span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">전체 아카이브</h2>
                </div>

                {/* Section A: 방송 출연 (Limited to 6 items) */}
                <section id="section-broadcast" className="bg-white/40 rounded-3xl p-6 sm:p-10 border border-slate-100">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 sm:mb-12 border-b border-slate-100 pb-5">
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 sm:w-11 h-10 sm:h-11 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0">
                        <Play size={20} className="sm:size-[22px]" />
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">방송 출연</h3>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {broadcastItems.slice(0, 8).map((item, idx) => (
                      <div
                        key={item.id}
                        className="group flex flex-col h-full bg-transparent transition-all duration-300"
                      >
                        <div 
                          onClick={() => setPopupImage({ src: item.image, title: item.title, desc: item.desc || (item as any).summary })}
                          className="aspect-[16/10] overflow-hidden relative rounded-2xl bg-slate-100 shrink-0 shadow-sm group-hover:shadow-md group-hover:scale-[1.02] transition-all duration-400 cursor-zoom-in"
                        >
                          <img 
                            src={item.image} 
                            alt={item.title} 
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <div className="pt-4 flex flex-col flex-grow">
                          <span className="text-[10px] font-bold text-primary uppercase tracking-wider mb-1.5 block">{item.broadcast}</span>
                          <h4 className="text-base sm:text-lg font-extrabold text-slate-800 mb-2 group-hover:text-primary transition-colors leading-snug">
                            {item.title}
                          </h4>
                          <p className="text-slate-400 text-xs leading-relaxed font-normal mt-auto line-clamp-1 font-medium font-medium">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-10 sm:mt-12 flex justify-center">
                    <button 
                      onClick={() => setActiveTab('broadcast')}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-slate-200/80 rounded-full text-slate-700 hover:text-primary hover:border-primary/50 text-sm font-bold shadow-sm hover:shadow transition-all duration-300 hover:gap-3 cursor-pointer"
                    >
                      방송 출연 전체보기 <ChevronRight size={16} />
                    </button>
                  </div>
                </section>

                {/* Section B: 강연 및 특강 (Limited to 6 items) */}
                <section id="section-lecture" className="bg-white/40 rounded-3xl p-6 sm:p-10 border border-slate-100">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 sm:mb-12 border-b border-slate-100 pb-5">
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 sm:w-11 h-10 sm:h-11 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0">
                        <Award size={20} className="sm:size-[22px]" />
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">강연 및 특강</h3>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {lectureItems.slice(0, 8).map((item, idx) => (
                      <div
                        key={item.id}
                        className="group flex flex-col h-full bg-transparent transition-all duration-300"
                      >
                        <div 
                          onClick={() => setPopupImage({ src: item.image, title: item.title, desc: item.desc || (item as any).summary })}
                          className="aspect-[16/10] overflow-hidden rounded-2xl bg-slate-100 shrink-0 shadow-sm group-hover:shadow-md group-hover:scale-[1.02] transition-all duration-400 cursor-zoom-in"
                        >
                          <img 
                            src={item.image} 
                            alt={item.title} 
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <div className="pt-4 flex flex-col flex-grow">
                          <span className="text-[10px] font-bold text-primary uppercase tracking-wider mb-1.5 block">"강연 및 특강"</span>
                          <h4 className="text-base sm:text-lg font-extrabold text-slate-800 mb-2 group-hover:text-primary transition-colors leading-snug">
                            {item.title}
                          </h4>
                          <p className="text-slate-400 text-xs leading-relaxed font-normal mt-auto line-clamp-1 font-medium font-medium">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-10 sm:mt-12 flex justify-center">
                    <button 
                      onClick={() => setActiveTab('lecture')}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-slate-200/80 rounded-full text-slate-700 hover:text-primary hover:border-primary/50 text-sm font-bold shadow-sm hover:shadow transition-all duration-300 hover:gap-3 cursor-pointer"
                    >
                      강연 및 특강 전체보기 <ChevronRight size={16} />
                    </button>
                  </div>
                </section>

                {/* Section C: 라디오 및 인터뷰 (Limited to 6 items) */}
                <section id="section-radio" className="bg-white/40 rounded-3xl p-6 sm:p-10 border border-slate-100">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 sm:mb-12 border-b border-slate-100 pb-5">
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 sm:w-11 h-10 sm:h-11 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0">
                        <Newspaper size={20} className="sm:size-[22px]" />
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">라디오 및 인터뷰</h3>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {radioItems.slice(0, 8).map((item, idx) => (
                      <div
                        key={item.id}
                        className="group flex flex-col h-full bg-transparent transition-all duration-300"
                      >
                        <div 
                          onClick={() => setPopupImage({ src: item.image, title: item.title, desc: item.desc || (item as any).summary })}
                          className="aspect-[16/10] overflow-hidden rounded-2xl bg-slate-100 shrink-0 shadow-sm group-hover:shadow-md group-hover:scale-[1.02] transition-all duration-400 cursor-zoom-in"
                        >
                          <img 
                            src={item.image} 
                            alt={item.title} 
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <div className="pt-4 flex flex-col flex-grow">
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="text-[10px] font-bold text-primary uppercase tracking-wider block">{item.radio}</span>
                            <span className="text-[10px] font-semibold text-slate-400 block">{item.date}</span>
                          </div>
                          <h4 className="text-base sm:text-lg font-extrabold text-slate-800 mb-2 group-hover:text-primary transition-colors leading-snug">
                            {item.title}
                          </h4>
                          <p className="text-slate-400 text-xs leading-relaxed font-normal mt-auto line-clamp-1 font-medium font-medium">
                            {item.summary}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-10 sm:mt-12 flex justify-center">
                    <button 
                      onClick={() => setActiveTab('radio')}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-slate-200/80 rounded-full text-slate-700 hover:text-primary hover:border-primary/50 text-sm font-bold shadow-sm hover:shadow transition-all duration-300 hover:gap-3 cursor-pointer"
                    >
                      라디오 및 인터뷰 전체보기 <ChevronRight size={16} />
                    </button>
                  </div>
                </section>

                {/* Section D: 교육 및 프로그램 (Shows up to 6 / has 2 items total) */}
                <section id="section-education" className="bg-white/40 rounded-3xl p-6 sm:p-10 border border-slate-100">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 sm:mb-12 border-b border-slate-100 pb-5">
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 sm:w-11 h-10 sm:h-11 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0">
                        <BookOpen size={20} className="sm:size-[22px]" />
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">교육 및 프로그램</h3>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {educationItems.slice(0, 8).map((item, idx) => (
                      <div
                        key={item.id}
                        className="group flex flex-col h-full bg-transparent transition-all duration-300"
                      >
                        <div 
                          onClick={() => setPopupImage({ src: item.image, title: item.title, desc: item.desc || (item as any).summary })}
                          className="aspect-[16/10] overflow-hidden rounded-2xl bg-slate-100 shrink-0 shadow-sm group-hover:shadow-md group-hover:scale-[1.02] transition-all duration-400 cursor-zoom-in"
                        >
                          <img 
                            src={item.image} 
                            alt={item.title} 
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <div className="pt-4 flex flex-col flex-grow">
                          <span className="text-[10px] font-bold text-primary uppercase tracking-wider mb-1.5 block">{item.education}</span>
                          <h4 className="text-base sm:text-lg font-extrabold text-slate-800 mb-2 group-hover:text-primary transition-colors leading-snug">
                            {item.title}
                          </h4>
                          <p className="text-slate-400 text-xs leading-relaxed font-normal mt-auto line-clamp-1 font-medium font-medium">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-10 sm:mt-12 flex justify-center">
                    <button 
                      onClick={() => setActiveTab('education')}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-slate-200/80 rounded-full text-slate-700 hover:text-primary hover:border-primary/50 text-sm font-bold shadow-sm hover:shadow transition-all duration-300 hover:gap-3 cursor-pointer"
                    >
                      교육 및 프로그램 전체보기 <ChevronRight size={16} />
                    </button>
                  </div>
                </section>
              </div>
            </motion.div>
          )}

          {/* =========================================================================
              VIEW MODE: 방송 출연 (BROADCAST SPECIFIC ARCHIVE) - SHOWS ALL ITEMS
              ========================================================================= */}
          {activeTab === 'broadcast' && (
            <motion.div
              key="broadcast"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="space-y-12"
            >
              {/* Header and Back Button */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 border-b border-slate-200 pb-8">
                <div>
                  <button 
                    onClick={() => setActiveTab('all')}
                    className="flex items-center gap-1.5 text-slate-500 text-sm font-semibold hover:text-primary transition-colors cursor-pointer mb-3"
                  >
                    <ArrowLeft size={16} /> 전체 카테고리 보기
                  </button>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">방송 출연 전체보기</h2>
                  <p className="text-slate-500 text-sm sm:text-base mt-2">윤영준 원장의 방송 출연 풀 아카이브를 확인할 수 있습니다.</p>
                </div>
                <div className="shrink-0 text-slate-400 text-sm font-semibold">
                  총 <span className="text-primary font-bold">{broadcastItems.length}</span>개의 자료 보존됨
                </div>
              </div>

              {/* Grid Layout containing ALL items */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {broadcastItems.map((item, idx) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.04 }}
                    className="group flex flex-col h-full bg-transparent transition-all duration-300"
                  >
                    <div 
                      onClick={() => setPopupImage({ src: item.image, title: item.title, desc: item.desc || (item as any).summary })}
                      className="aspect-[16/10] overflow-hidden relative rounded-3xl bg-slate-100 shrink-0 shadow-sm group-hover:shadow-md group-hover:scale-[1.02] transition-all duration-400 cursor-zoom-in"
                    >
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="pt-4 flex flex-col flex-grow">
                      <span className="text-[10px] font-bold text-primary uppercase tracking-wider mb-1.5 block">{item.broadcast}</span>
                      <h4 className="text-base sm:text-lg font-extrabold text-slate-800 mb-2 group-hover:text-primary transition-colors leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mt-auto line-clamp-1 font-medium">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* =========================================================================
              VIEW MODE: 강연 및 특강 (LECTURES SPECIFIC ARCHIVE) - SHOWS ALL ITEMS
              ========================================================================= */}
          {activeTab === 'lecture' && (
            <motion.div
              key="lecture"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="space-y-12"
            >
              {/* Header and Back Button */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 border-b border-slate-200 pb-8">
                <div>
                  <button 
                    onClick={() => setActiveTab('all')}
                    className="flex items-center gap-1.5 text-slate-500 text-sm font-semibold hover:text-primary transition-colors cursor-pointer mb-3"
                  >
                    <ArrowLeft size={16} /> 전체 카테고리 보기
                  </button>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">강연 및 특강 전체보기</h2>
                  <p className="text-slate-500 text-sm sm:text-base mt-2">지방행정, 기동대대, 고용공단 등 출강 및 특강 풀 아카이브입니다.</p>
                </div>
                <div className="shrink-0 text-slate-400 text-sm font-semibold">
                  총 <span className="text-primary font-bold">{lectureItems.length}</span>개의 자료 보존됨
                </div>
              </div>

              {/* Grid Layout containing ALL items */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {lectureItems.map((item, idx) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.04 }}
                    className="group flex flex-col h-full bg-transparent transition-all duration-300"
                  >
                    <div 
                      onClick={() => setPopupImage({ src: item.image, title: item.title, desc: item.desc || (item as any).summary })}
                      className="aspect-[16/10] overflow-hidden rounded-3xl bg-slate-100 shrink-0 shadow-sm group-hover:shadow-md group-hover:scale-[1.02] transition-all duration-400 cursor-zoom-in"
                    >
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="pt-4 flex flex-col flex-grow">
                      <span className="text-[10px] font-bold text-primary uppercase tracking-wider mb-1.5 block">"강연 및 특강"</span>
                      <h4 className="text-base sm:text-lg font-extrabold text-slate-800 mb-2 group-hover:text-primary transition-colors leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mt-auto line-clamp-1 font-medium">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* =========================================================================
              VIEW MODE: 라디오 및 인터뷰 (RADIO SPECIFIC ARCHIVE) - SHOWS ALL ITEMS
              ========================================================================= */}
          {activeTab === 'radio' && (
            <motion.div
              key="radio"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="space-y-12"
            >
              {/* Header and Back Button */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 border-b border-slate-200 pb-8">
                <div>
                  <button 
                    onClick={() => setActiveTab('all')}
                    className="flex items-center gap-1.5 text-slate-500 text-sm font-semibold hover:text-primary transition-colors cursor-pointer mb-3"
                  >
                    <ArrowLeft size={16} /> 전체 카테고리 보기
                  </button>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">라디오 및 인터뷰 전체보기</h2>
                  <p className="text-slate-500 text-sm sm:text-base mt-2">교통방송 정기 출연, 심리 고문 답변, 언론 보도 목록입니다.</p>
                </div>
                <div className="shrink-0 text-slate-400 text-sm font-semibold">
                  총 <span className="text-primary font-bold">{radioItems.length}</span>개의 자료 보존됨
                </div>
              </div>

              {/* Grid Layout containing ALL items */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {radioItems.map((item, idx) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.04 }}
                    className="group flex flex-col h-full bg-transparent transition-all duration-300"
                  >
                    <div 
                      onClick={() => setPopupImage({ src: item.image, title: item.title, desc: item.desc || (item as any).summary })}
                      className="aspect-[16/10] overflow-hidden rounded-3xl bg-slate-100 shrink-0 shadow-sm group-hover:shadow-md group-hover:scale-[1.02] transition-all duration-400 cursor-zoom-in"
                    >
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="pt-4 flex flex-col flex-grow">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[10px] font-bold text-primary uppercase tracking-wider block">{item.radio}</span>
                        <span className="text-[10px] font-semibold text-slate-400 block">{item.date}</span>
                      </div>
                      <h4 className="text-base sm:text-lg font-extrabold text-slate-800 mb-2 group-hover:text-primary transition-colors leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mt-auto line-clamp-1 font-medium">
                        {item.summary}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* =========================================================================
              VIEW MODE: 교육 및 프로그램 (EDUCATION SPECIFIC ARCHIVE) - SHOWS ALL ITEMS
              ========================================================================= */}
          {activeTab === 'education' && (
            <motion.div
              key="education"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="space-y-12"
            >
              {/* Header and Back Button */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 border-b border-slate-200 pb-8">
                <div>
                  <button 
                    onClick={() => setActiveTab('all')}
                    className="flex items-center gap-1.5 text-slate-500 text-sm font-semibold hover:text-primary transition-colors cursor-pointer mb-3"
                  >
                    <ArrowLeft size={16} /> 전체 카테고리 보기
                  </button>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">교육 및 프로그램 전체보기</h2>
                  <p className="text-slate-500 text-sm sm:text-base mt-2">기업 임직원, 재소자 교육 등 전문 수탁 교재 및 프로그램 목록입니다.</p>
                </div>
                <div className="shrink-0 text-slate-400 text-sm font-semibold">
                  총 <span className="text-primary font-bold">{educationItems.length}</span>개의 자료 보존됨
                </div>
              </div>

              {/* Grid Layout containing ALL items */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {educationItems.map((item, idx) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.04 }}
                    className="group flex flex-col h-full bg-transparent transition-all duration-300"
                  >
                    <div 
                      onClick={() => setPopupImage({ src: item.image, title: item.title, desc: item.desc || (item as any).summary })}
                      className="aspect-[16/10] overflow-hidden rounded-3xl bg-slate-100 shrink-0 shadow-sm group-hover:shadow-md group-hover:scale-[1.02] transition-all duration-400 cursor-zoom-in"
                    >
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="pt-4 flex flex-col flex-grow">
                      <span className="text-[10px] font-bold text-primary uppercase tracking-wider mb-1.5 block">{item.education}</span>
                      <h4 className="text-base sm:text-lg font-extrabold text-slate-800 mb-2 group-hover:text-primary transition-colors leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mt-auto line-clamp-1 font-medium">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Trust Description Block Section */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <div className="bg-slate-50 rounded-[2.5rem] p-8 sm:p-12 border border-slate-100">
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-6 text-center">
              대표원장 방송 출연 및 강연 기록
            </h3>
            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
              <p>
                본 페이지는 윤영준 대표원장의 방송 출연, 심리상담 관련 인터뷰, 공공기관 및 교육기관 강연, 재범방지 교육 활동 등을 기록한 공식 아카이브입니다.
              </p>
              <p>
                윤영준 대표원장은 <strong className="text-primary font-bold">MBC, KBS, EBS, JTBC, MBN, tvN, 채널A, TV조선, TBN 교통방송, 연합뉴스</strong> 등 국내 주요 방송사 및 언론에 80회 이상 출연하며 심리상담 전문가로서 다양한 현장에서 사람들의 이야기를 함께 나누어 왔습니다.
              </p>
              <p>
                특히 <strong className="text-slate-800 font-bold">KBS 라디오 「4시에 힐링타임」, 「생방송 정보스펀지」, TBN 교통방송 「Talk 터놓고 말해요」, 「가족의 세계(심리코너)」</strong> 등 여러 프로그램을 8년 이상 진행하며, 누구나 공감할 수 있는 언어로 마음을 이해하고 풀어내는 시간을 이어왔습니다.
              </p>
              <p>
                이러한 방송과 강연은 단순한 정보 전달을 넘어, 실제 삶에 도움이 되는 방향을 함께 찾아가는 과정이었습니다.
              </p>
              <p className="text-slate-400 text-xs sm:text-sm pt-4 border-t border-slate-200/60">
                일부 자료는 현재도 재방영 및 온라인을 통해 확인할 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Stats Counter Banner */}
      <section className="py-16 bg-slate-55 border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-10 sm:gap-20 text-center">
            <div>
              <div className="text-3xl sm:text-5xl font-black text-primary mb-2">80+</div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Media Appearances</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-slate-200 self-center"></div>
            <div>
              <div className="text-3xl sm:text-5xl font-black text-primary mb-2">1500+</div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Public Lectures</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-slate-200 self-center"></div>
            <div>
              <div className="text-3xl sm:text-5xl font-black text-primary mb-2">20+ Yrs</div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Clinical Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* 원본 이미지 팝업 모달 */}
      <AnimatePresence>
        {popupImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/85 backdrop-blur-md p-4 sm:p-6"
            onClick={() => setPopupImage(null)}
          >
            {/* 닫기 버튼 */}
            <button
              onClick={() => setPopupImage(null)}
              className="absolute top-4 right-4 z-[110] p-2.5 rounded-full bg-slate-900/60 hover:bg-slate-800 text-white border border-slate-700/60 shadow-lg transition-colors hover:scale-105 duration-200 cursor-pointer"
              aria-label="닫기"
            >
              <X size={20} />
            </button>

            {/* 카드 컨테이너 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-4xl w-full bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl flex flex-col items-center"
              onClick={(e) => e.stopPropagation()} // 내부 클릭 시 닫히지 않도록 방지
            >
              {/* 이미지 영역 */}
              <div className="relative w-full max-h-[70vh] flex justify-center bg-slate-950 overflow-hidden select-none">
                <img
                  src={popupImage.src}
                  alt={popupImage.title}
                  className="max-w-full max-h-[70vh] object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* 텍스트 메타데이터 영역 */}
              <div className="w-full bg-slate-900 px-6 py-4 border-t border-slate-800 flex items-center justify-between">
                <div className="flex-1 min-w-0 pr-4">
                  <span className="text-[10px] font-bold text-primary uppercase tracking-wider block mb-1">Original View</span>
                  <h4 className="text-sm sm:text-base font-bold text-slate-100 truncate">
                    {popupImage.title}
                  </h4>
                  {popupImage.desc && (
                    <p className="mt-1 text-xs sm:text-sm text-slate-400">
                      {popupImage.desc}
                    </p>
                  )}
                </div>
                <button
                  onClick={() => setPopupImage(null)}
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold rounded-lg transition-colors flex-shrink-0"
                >
                  닫기
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
