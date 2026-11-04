import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Tv } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { PricingContent } from "../pages/Pricing";

const STORAGE_KEY_1 = "korea_dui_hide_pricing_popup_until";
const STORAGE_KEY_2 = "daegu_dui_hide_popup2_until";

const POPUP_IMAGE_URL_2 =
  "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1792067983/%EC%A3%BC%EC%9A%94_%EB%B0%A9%EC%86%A1_%EC%96%B8%EB%A1%A0_%EA%B0%95%EC%A1%B0_%EC%83%81%EB%8B%B4%EC%84%BC%ED%84%B0_%ED%8F%AC%EC%8A%A4%ED%84%B0_e6ln84.png";

type PopupStep = 1 | 2 | null;

export const HomePopup: React.FC = () => {
  const [activePopup, setActivePopup] = useState<PopupStep>(null);
  const [dontShowToday1, setDontShowToday1] = useState(false);
  const [dontShowToday2, setDontShowToday2] = useState(false);
  const navigate = useNavigate();

  const isStorageHidden = (key: string): boolean => {
    try {
      const hideUntil = localStorage.getItem(key);
      if (hideUntil) {
        const hideTimestamp = parseInt(hideUntil, 10);
        if (!isNaN(hideTimestamp) && Date.now() < hideTimestamp) {
          return true;
        }
      }
    } catch {
      // LocalStorage access fallback
    }
    return false;
  };

  const setHideTodayInStorage = (key: string) => {
    try {
      const now = new Date();
      const endOfToday = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        23,
        59,
        59,
        999
      ).getTime();
      localStorage.setItem(key, endOfToday.toString());
    } catch {
      // ignore
    }
  };

  useEffect(() => {
    const isP1Hidden = isStorageHidden(STORAGE_KEY_1);
    const isP2Hidden = isStorageHidden(STORAGE_KEY_2);

    if (!isP1Hidden) {
      setActivePopup(1);
    } else if (!isP2Hidden) {
      setActivePopup(2);
    } else {
      setActivePopup(null);
    }
  }, []);

  // Popup 1 Close handler
  const handleClosePopup1 = (hideToday = false) => {
    if (hideToday || dontShowToday1) {
      setHideTodayInStorage(STORAGE_KEY_1);
    }

    // Immediately trigger Popup 2 if not hidden
    const isP2Hidden = isStorageHidden(STORAGE_KEY_2);
    if (!isP2Hidden) {
      setActivePopup(null);
      setTimeout(() => {
        setActivePopup(2);
      }, 150);
    } else {
      setActivePopup(null);
    }
  };

  // Popup 2 Close handler
  const handleClosePopup2 = (hideToday = false) => {
    if (hideToday || dontShowToday2) {
      setHideTodayInStorage(STORAGE_KEY_2);
    }
    setActivePopup(null);
  };

  const handleMediaLinkClick = () => {
    if (dontShowToday2) {
      setHideTodayInStorage(STORAGE_KEY_2);
    }
    setActivePopup(null);
    navigate("/about/media");
  };

  if (!activePopup) return null;

  return (
    <AnimatePresence mode="wait">
      {activePopup === 1 && (
        <div
          key="popup-1"
          className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-4 lg:p-6 bg-black/65 backdrop-blur-[2px]"
          onClick={() => handleClosePopup1(false)}
          aria-modal="true"
          role="dialog"
          aria-label="양형자료 세트 구성 및 가격 안내 팝업"
        >
          {/* Popup 1 Card - Full Pricing Page Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -15 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="relative w-full max-w-[1160px] max-h-[92vh] bg-[#f7f8fa] rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col border border-slate-200/80"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Close Button (floating) */}
            <button
              type="button"
              onClick={() => handleClosePopup1(false)}
              className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 z-30 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-900/75 hover:bg-slate-900 text-white flex items-center justify-center transition-all backdrop-blur-md cursor-pointer shadow-lg"
              aria-label="팝업 닫기"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Scrollable Full Pricing Content */}
            <div className="overflow-y-auto flex-1 px-4 sm:px-7 lg:px-10 py-8 sm:py-10">
              <PricingContent compact />
            </div>

            {/* Bottom Trust Statement */}
            <div className="shrink-0 px-4 sm:px-6 py-3 sm:py-3.5 bg-[#0b3d2e] text-white text-center border-t border-white/10 break-keep">
              <p className="text-xs sm:text-sm md:text-[15px] font-bold tracking-tight leading-relaxed">
                국가자격 임상심리사 1급과 박사 · 교수진의 전문 자문체계를 갖춘 전문센터가 당신에게 도움을 드립니다.
              </p>
            </div>

            {/* Bottom Footer Bar */}
            <div className="shrink-0 flex items-center justify-between px-4 sm:px-6 py-3 bg-slate-950 text-slate-300 text-xs sm:text-sm select-none border-t border-slate-800/80">
              <button
                type="button"
                onClick={() => handleClosePopup1(true)}
                className="hover:text-white flex items-center gap-2 transition-colors cursor-pointer group py-1 text-left"
              >
                <input
                  type="checkbox"
                  id="dontShowTodayCheck1"
                  checked={dontShowToday1}
                  onChange={(e) => {
                    setDontShowToday1(e.target.checked);
                    if (e.target.checked) {
                      handleClosePopup1(true);
                    }
                  }}
                  onClick={(e) => e.stopPropagation()}
                  className="w-4 h-4 rounded text-primary border-slate-600 bg-slate-800 cursor-pointer accent-[#2E7D32]"
                />
                <span className="group-hover:underline">오늘 하루 보지 않기</span>
              </button>

              <button
                type="button"
                onClick={() => handleClosePopup1(false)}
                className="hover:text-white font-medium px-2 py-1 transition-colors cursor-pointer hover:underline"
              >
                창 닫기
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {activePopup === 2 && (
        <div
          key="popup-2"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-[2px] overflow-y-auto"
          onClick={() => handleClosePopup2(false)}
          aria-modal="true"
          role="dialog"
          aria-label="방송 출연 및 강연 활동 안내 팝업"
        >
          {/* Popup 2 Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 15 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative w-full max-w-[340px] xs:max-w-[380px] sm:max-w-[440px] md:max-w-[560px] lg:max-w-[640px] bg-slate-900 rounded-2xl shadow-2xl overflow-hidden flex flex-col my-auto border border-slate-700/50"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Close Button (floating) */}
            <button
              type="button"
              onClick={() => handleClosePopup2(false)}
              className="absolute top-3 right-3 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/65 hover:bg-black/90 text-white flex items-center justify-center transition-all backdrop-blur-md cursor-pointer shadow-lg"
              aria-label="팝업 닫기"
            >
              <X className="w-5 h-5 sm:w-5.5 sm:h-5.5" />
            </button>

            {/* Poster Image (Zero Margins, Full-bleed, Clickable to Media Page) */}
            <Link
              to="/about/media"
              onClick={handleMediaLinkClick}
              className="relative w-full block cursor-pointer group"
              title="방송 출연 · 강연 기록보기"
            >
              <img
                src={POPUP_IMAGE_URL_2}
                alt="주요 방송 언론 보도 및 강연 포스터"
                className="w-full h-auto block select-none"
                loading="eager"
              />
            </Link>

            {/* CTA Broadcast/Lecture Button (Seamless Edge-to-Edge with Zero Margins) */}
            <Link
              to="/about/media"
              onClick={handleMediaLinkClick}
              className="w-full py-3.5 sm:py-4 px-4 bg-secondary hover:bg-[#0d47a1] active:bg-[#0a387e] text-white font-bold text-base sm:text-lg flex items-center justify-center gap-2 transition-colors cursor-pointer text-center select-none"
            >
              <Tv className="w-5 h-5" />
              <span>방송 출연 · 강연 기록보기</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            {/* Bottom Footer Bar (Zero Margin, Flush with CTA) */}
            <div className="flex items-center justify-between px-4 sm:px-5 py-2.5 sm:py-3 bg-slate-950 text-slate-300 text-xs sm:text-sm select-none border-t border-slate-800/80">
              <button
                type="button"
                onClick={() => handleClosePopup2(true)}
                className="hover:text-white flex items-center gap-2 transition-colors cursor-pointer group py-1 text-left"
              >
                <input
                  type="checkbox"
                  id="dontShowTodayCheck2"
                  checked={dontShowToday2}
                  onChange={(e) => {
                    setDontShowToday2(e.target.checked);
                    if (e.target.checked) {
                      handleClosePopup2(true);
                    }
                  }}
                  onClick={(e) => e.stopPropagation()}
                  className="w-4 h-4 rounded text-secondary border-slate-600 bg-slate-800 cursor-pointer accent-[#1565C0]"
                />
                <span className="group-hover:underline">오늘 하루 보지 않기</span>
              </button>

              <button
                type="button"
                onClick={() => handleClosePopup2(false)}
                className="hover:text-white font-medium px-2 py-1 transition-colors cursor-pointer hover:underline"
              >
                창 닫기
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
