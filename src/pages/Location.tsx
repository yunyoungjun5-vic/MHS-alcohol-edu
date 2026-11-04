import { motion } from 'framer-motion';
import { MapPin, Phone, Car, Train, Bus, Clock, ArrowRight } from 'lucide-react';

export const Location = () => {
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
            How To Find Us
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl lg:text-8xl font-black mb-8 tracking-tighter italic animate-fade-in"
          >
            오시는 길
          </motion.h1>
          <p className="text-slate-400 text-xl lg:text-2xl max-w-2xl mx-auto font-bold leading-relaxed break-keep">
            한국음주운전재범방지교육상담센터로 오시는 길을 편리하게 안내해 드립니다.
          </p>
        </div>
      </section>

      {/* Map & Basic Info Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-slate-50/60 rounded-[3rem] border border-slate-100 overflow-hidden shadow-xl">
            {/* Info Panel */}
            <div className="lg:col-span-5 p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
              <span className="text-primary font-bold tracking-widest text-xs uppercase mb-3 block">Location Details</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-8 tracking-tight">
                센터 방문 안내
              </h2>
              
              <div className="space-y-8">
                <div className="flex gap-4 sm:gap-5">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0 shadow-sm shadow-primary/10">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 text-base sm:text-lg mb-1">상담센터 주소</h5>
                    <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">대구광역시 달서구 용산큰못 2길 25, 4층</p>
                    <p className="text-xs text-primary/90 font-bold mt-1">(상세주소: 용산동 2차 서한화성타운 삼거리 인근)</p>
                  </div>
                </div>

                <div className="flex gap-4 sm:gap-5">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0 shadow-sm shadow-primary/10">
                    <Phone size={22} />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 text-base sm:text-lg mb-1">전화번호 및 문의</h5>
                    <p className="text-sm sm:text-base text-slate-600 font-bold">0507-1351-5463</p>
                    <p className="text-xs text-slate-400 mt-0.5">상담 중인 경우 통화가 어려울 수 있으니 부재 시 문자 남겨주시면 연락 드리겠습니다.</p>
                  </div>
                </div>

                <div className="flex gap-4 sm:gap-5">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0 shadow-sm shadow-primary/10">
                    <Car size={22} />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 text-base sm:text-lg mb-1">주차 및 차량 안내</h5>
                    <p className="text-sm sm:text-base text-slate-600 font-medium">센터 주변 골목 및 도로변 무료 주차 공간 이용이 가능합니다.</p>
                  </div>
                </div>

                <div className="flex gap-4 sm:gap-5">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0 shadow-sm shadow-primary/10">
                    <Clock size={22} />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 text-base sm:text-lg mb-1">상담 운영 시간</h5>
                    <p className="text-sm sm:text-base text-slate-600 font-medium">평일 09:00 - 20:00 (주말 및 공휴일은 100% 예약제로 운영)</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 sm:mt-12">
                <a 
                  href="https://map.naver.com/p/search/%EB%8C%80%EA%B5%AC%EA%B4%91%EC%97%AD%EC%8B%9C%20%EB%8B%AC%EC%84%9C%EA%B5%AC%20%EC%9A%A9%EC%82%B0%ED%81%B0%EB%AA%BB%202%EA%B8%B8%2025" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-primary text-white rounded-xl font-bold hover:bg-secondary transition-all shadow-lg shadow-primary/10 text-sm sm:text-base transform hover:-translate-y-0.5"
                >
                  네이버 지도로 확인하기 <ArrowRight size={16} />
                </a>
              </div>
            </div>

            {/* Embed Map */}
            <div className="lg:col-span-7 min-h-[450px] sm:min-h-[500px] lg:min-h-[600px] relative bg-slate-150">
              <iframe 
                src="https://maps.google.com/maps?q=대구광역시%20달서구%20용산큰못%202길%2025&t=&z=17&ie=UTF8&iwloc=&output=embed"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
                title="한국음주운전재범방지교육상담센터 위치"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Public Transportation Guides */}
      <section className="py-16 lg:py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              대중교통 교통편 안내
            </h2>
            <p className="text-slate-500 mt-4 max-w-2xl mx-auto font-medium text-base sm:text-lg">
              고객님의 방문 목적지에 따라 다양한 대중교통 노선을 선택하여 오실 수 있습니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Subway */}
            <div className="bg-white p-8 sm:p-10 rounded-[2rem] border border-slate-100 shadow-sm flex gap-6 items-start">
              <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-650 shrink-0 shadow-sm">
                <Train size={28} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                  지하철 (대구 2호선)
                </h4>
                <div className="text-slate-600 text-sm leading-relaxed space-y-3.5 font-medium">
                  <p className="font-semibold text-slate-800">
                    대구 2호선 <strong className="text-emerald-600 font-bold">용산역</strong>에서 출발 기준
                  </p>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>용산역 <strong className="font-bold">5번 출구</strong>에서 약 1.6km 거리에 위치해 있습니다.</li>
                    <li>역 출구에서 도보로 약 20분 내외가 소요됩니다.</li>
                    <li>지하철 하차 후 급행8번 등을 탑승하시거나 택시를 이용하시면 5분 안에 편리하게 센터에 도달하실 수 있습니다.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Bus */}
            <div className="bg-white p-8 sm:p-10 rounded-[2rem] border border-slate-100 shadow-sm flex gap-6 items-start">
              <div className="w-14 h-14 bg-sky-50 rounded-2xl flex items-center justify-center text-sky-650 shrink-0 shadow-sm">
                <Bus size={28} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-sky-500"></span>
                  시내 버스 노선
                </h4>
                <div className="text-slate-600 text-sm leading-relaxed space-y-3.5 font-medium">
                  <p className="font-semibold text-slate-800">
                    인근 버스 정류장 및 하차 안내
                  </p>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>
                      <strong className="text-slate-800">서한화성타운앞/건너 정류장</strong> (도보 5분 소요):<br />
                      <span className="text-slate-500">일반 버스: 509번 / 527번 / 성서3번</span>
                    </li>
                    <li>
                      <strong className="text-slate-800">용산큰못공원 인근 정류장</strong> (도보 1분 소요):<br />
                      <span className="text-slate-500">용산큰못공원에서 도보 약 1분 거리에 삼거리가 자리하고 있습니다.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reservation guide */}
      <section className="py-20 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=2000" alt="Consultation" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 tracking-tight">전문가와의 1:1 예약제 긴급 면담</h2>
          <p className="text-slate-200 text-base sm:text-lg mb-10 max-w-2xl mx-auto font-medium leading-relaxed break-keep">
            음주운전 후 면허 취소, 정지, 처벌 위기에 처하셨다면 즉시 한국음주운전재범방지교육상담센터의 도움을 받아야 가장 확실한 반성과 재발 방지 대책을 마련할 수 있습니다.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="tel:0507-1351-5463"
              className="px-8 py-4 bg-white text-primary rounded-xl font-black text-sm hover:bg-slate-50 transition-all shadow-xl shadow-slate-900/10 flex items-center justify-center gap-2"
            >
              <Phone size={16} /> 전화 문의 (0507-1351-5463)
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
