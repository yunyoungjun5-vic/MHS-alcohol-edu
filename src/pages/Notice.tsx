import { motion } from "framer-motion";
import {
  Bell,
  ExternalLink,
  Monitor,
  Calendar,
  MessageSquareText,
  Phone,
  ArrowRight,
} from "lucide-react";

export const Notice = () => {
  const NOTICE_EXTERNAL_URL =
    "https://mindbrain.cafe24.com/%ec%bb%a4%eb%ae%a4%eb%8b%88%ed%8b%b0/%ea%b3%b5%ec%a7%80%ec%82%ac%ed%95%ad/";

  const noticeCategories = [
    {
      icon: <Monitor className="w-7 h-7 text-primary" />,
      title: "센터 운영 공지",
      desc: "상담 일정 변경, 휴무 안내 등",
    },
    {
      icon: <Calendar className="w-7 h-7 text-primary" />,
      title: "교육 프로그램 일정",
      desc: "재범방지 교육 및 상담 프로그램 일정 안내",
    },
    {
      icon: <MessageSquareText className="w-7 h-7 text-primary" />,
      title: "상담 관련 안내",
      desc: "상담 신청 및 상담 절차 관련 공지",
    },
  ];

  return (
    <div className="pt-24 lg:pt-28 pb-24 bg-white min-h-screen">
      {/* Header Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-b from-slate-50 via-emerald-50/20 to-white overflow-hidden border-b border-slate-100">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000"
            alt="Background"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-primary/10 text-primary font-bold text-xs rounded-full uppercase tracking-wider">
              <Bell size={13} /> Notice &amp; Announcements
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
              공지사항 안내
            </h1>
            <p className="text-lg sm:text-xl font-bold text-slate-700 max-w-2xl mx-auto break-keep pt-1">
              센터 운영 안내, 교육 일정, 상담 관련 공지사항을 확인하실 수 있습니다.
            </p>
            <div className="pt-3 text-sm text-slate-500 leading-relaxed max-w-2xl mx-auto space-y-1 break-keep">
              <p>
                센터 운영 안내, 상담 일정, 교육 프로그램 공지 등은 별도의
                공지사항 페이지에서 확인하실 수 있습니다.
              </p>
              <p>최신 공지사항은 아래 링크를 통해 확인하실 수 있습니다.</p>
            </div>
          </motion.div>

          {/* Central Callout Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-12 bg-white rounded-3xl p-8 sm:p-12 shadow-xl shadow-slate-200/60 border border-slate-100 max-w-2xl mx-auto text-center"
          >
            <h3 className="text-2xl font-black text-slate-900 mb-3 tracking-tight">
              센터 공지사항 확인
            </h3>
            <p className="text-sm sm:text-base text-slate-500 font-medium mb-8 leading-relaxed break-keep">
              상담 일정, 교육 프로그램 안내, 센터 운영 공지 등 최신 공지사항을
              확인하실 수 있습니다.
            </p>
            <a
              href={NOTICE_EXTERNAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-primary hover:bg-secondary text-white rounded-2xl font-black text-base shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>공지사항 바로가기</span>
              <ExternalLink size={18} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* 3 Categories Cards Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {noticeCategories.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-slate-50/80 hover:bg-white rounded-3xl p-8 text-center border border-slate-100 shadow-sm hover:shadow-xl hover:border-slate-200/80 transition-all duration-300 group flex flex-col items-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-white group-hover:bg-primary/10 border border-slate-100 group-hover:border-primary/20 flex items-center justify-center mb-5 transition-all duration-300 shadow-sm">
                  {item.icon}
                </div>
                <h4 className="text-lg font-black text-slate-900 mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed break-keep">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Notice Usage Info Section */}
      <section className="py-16 bg-slate-50/60 border-y border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            공지 이용 안내
          </h3>
          <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto break-keep">
            센터 공지사항에는 상담 일정, 교육 프로그램, 센터 운영과 관련된
            다양한 안내가 게시됩니다. 공지사항은 별도의 공지 페이지에서
            관리되며 최신 정보는 공지사항 페이지에서 확인하실 수 있습니다.
          </p>
          <div className="pt-2">
            <a
              href={NOTICE_EXTERNAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary font-bold hover:text-secondary hover:gap-3 transition-all text-sm sm:text-base"
            >
              <span>공지사항 바로가기</span>
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Consultation Inquiry Section */}
      <section className="pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            상담 문의 안내
          </h3>
          <p className="text-sm sm:text-base text-slate-500 font-medium leading-relaxed max-w-xl mx-auto break-keep">
            공지사항 확인 후 상담 문의가 필요한 경우, 센터로 연락 주시면
            친절하게 안내해 드립니다.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:0507-1351-5463"
              className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-secondary text-white rounded-full font-bold shadow-lg shadow-primary/20 hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2.5 text-sm sm:text-base"
            >
              <Phone size={18} />
              <span>전화상담 (0507-1351-5463)</span>
            </a>
            <a
              href={NOTICE_EXTERNAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-full font-bold transition-all duration-200 flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              <span>공지사항 바로가기</span>
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
