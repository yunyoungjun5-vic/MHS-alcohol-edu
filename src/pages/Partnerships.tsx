import { motion } from 'framer-motion';
import { ShieldCheck, Building2, Landmark, GraduationCap, Building, HeartHandshake } from 'lucide-react';

export const Partnerships = () => {
  // ==========================================================================
  // CONFIGURATION: Replace these logo URLs with actual partner logos later.
  // ==========================================================================
  const PARTNERS_CONFIG = {
    header: {
      category: "Partnership & Networks",
      title: "협력 · 협약 · 출강 기관",
      description: "한국음주운전재범방지교육상담센터는 27년 이상의 임상 경험과 200여 개 공공기관 · 법률기관 · 교육기관 · 기업과의 협력 실적을 기반으로 신뢰할 수 있는 전문 상담과 재범방지 교육을 제공하고 있습니다."
    },
    // Category 1: 공공기관 및 유관기관 (17 Logo Slots, updated with provided Cloudinary URLs & official homepage links)
    publicAgencies: [
      { id: "publicAgency1", name: "대검찰청", logo: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775208774/%ED%99%94%EB%A9%B4_%EC%BA%A1%EC%B2%98_2026-04-03_165954_iuzr0z.png", desc: "검찰기관 협력", url: "https://www.spo.go.kr" },
      { id: "publicAgency2", name: "경북북부교도소", logo: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775029521/ChatGPT_Image_2026%EB%85%84_4%EC%9B%94_1%EC%9D%BC_%EC%98%A4%ED%9B%84_04_45_05_m125fo.png", desc: "교정기관 협력", url: "https://www.corrections.go.kr/corrections/index.do" },
      { id: "publicAgency3", name: "대구가정법원", logo: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775044656/logo_gibhqm.png", desc: "사법기관 협력", url: "https://dgfamily.scourt.go.kr/" },
      { id: "publicAgency4", name: "대구광역시", logo: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775106397/%EC%8B%AC%EB%B2%8C%EB%A1%9C%EA%B3%A0%EC%A1%B0%ED%95%A9_dgtm0l.png", desc: "지방자치단체", url: "https://www.daegu.go.kr" },
      { id: "publicAgency5", name: "대구광역시 교육청", logo: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775034616/Daegu_Metropolitan_Office_of_Education_Logo__vertical.svg_de9yzu.png", desc: "교육행정기관", url: "https://www.dge.go.kr" },
      { id: "publicAgency6", name: "구미경찰서", logo: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775049813/ChatGPT_Image_2026%EB%85%84_4%EC%9B%94_1%EC%9D%BC_%EC%98%A4%ED%9B%84_10_21_22_y3zmxw.png", desc: "치안기관 협력", url: "https://www.gbpolice.go.kr/gm/" },
      { id: "publicAgency7", name: "김천경찰서", logo: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775035271/76761_46193_5823_jbroqw.jpg", desc: "치안기관 협력", url: "https://www.gbpolice.go.kr/gc/" },
      { id: "publicAgency8", name: "성주경찰서", logo: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775371843/ChatGPT_Image_2026%EB%85%84_4%EC%9B%94_1%EC%9D%BC_%EC%98%A4%ED%9B%84_10_30_46_yi5w0l_paiqye.png", desc: "치안기관 협력", url: "https://www.gbpolice.go.kr/sj/" },
      { id: "publicAgency9", name: "경북자립지원전담기관", logo: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775108360/ChatGPT_Image_2026%EB%85%84_4%EC%9B%94_1%EC%9D%BC_%EC%98%A4%ED%9B%84_03_52_15_qncqwz.png", desc: "유관기관 협력", url: "https://kbjarip.or.kr" },
      { id: "publicAgency10", name: "경상북도 소방본부", logo: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775050128/ChatGPT_Image_2026%EB%85%84_4%EC%9B%94_1%EC%9D%BC_%EC%98%A4%ED%9B%84_10_28_38_tbz3pv.png", desc: "재난대응기관", url: "https://gb119.go.kr" },
      { id: "publicAgency11", name: "구미시", logo: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775106397/2021051414001839942_l_zhbpdi.jpg", desc: "지방자치단체", url: "https://www.gumi.go.kr" },
      { id: "publicAgency12", name: "김천시", logo: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775107339/1709611612765527_jhy58j.jpg", desc: "지방자치단체", url: "https://www.gc.go.kr" },
      { id: "publicAgency13", name: "한국산림복지진흥원", logo: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775026406/%ED%99%94%EB%A9%B4_%EC%BA%A1%EC%B2%98_2026-04-01_155124_cun9ie.png", desc: "공공기관 협력", url: "https://www.fowi.or.kr" },
      { id: "publicAgency14", name: "울산광역시교육청", logo: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775106408/Ulsan_Metropolitan_Office_of_Education_Logo__vertical.svg_rxkoah.png", desc: "교육행정기관", url: "https://www.use.go.kr" },
      { id: "publicAgency15", name: "울산도산도서관", logo: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775026416/ChatGPT_Image_2026%EB%85%84_4%EC%9B%94_1%EC%9D%BC_%EC%98%A4%ED%9B%84_03_38_44_kta3nq.png", desc: "공공도서관", url: "https://www.ulsannamgu.go.kr/library" },
      { id: "publicAgency16", name: "한국교직원공제회", logo: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775110776/1-06_%EA%B5%AD%EB%AC%B8%EC%8B%9C%EA%B7%B8%EB%8B%88%EC%B2%98_%EC%83%81%ED%95%98%EA%B8%B0%EB%B3%B8%ED%98%95_xaebzn.jpg", desc: "교직원복지", url: "https://www.ktcu.or.kr" },
      { id: "publicAgency17", name: "경북고용성장지원센터", logo: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775370945/%EA%B2%BD%EB%B6%81%EA%B3%A0%EC%9A%A9%EC%84%B1%EC%9E%A5%EC%A7%80%EC%9B%90%EC%84%BC%ED%84%B0_%EB%A1%9C%EA%B3%A0_1__2021102093716_ownuux.png", desc: "고용성장 협력", url: "http://kdscjob.or.kr/" }
    ],
    // Category 2: 법률기관 (11 Logo Slots, updated with provided Cloudinary URLs & official homepage links)
    legalInstitutions: [
      { id: "legalInst1", name: "법무법인 로하스", logo: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775047909/KakaoTalk_20210501_115331134_1_ppiuf2.jpg", desc: "법률협력 파트너", url: "https://lohas-law.com/" },
      { id: "legalInst2", name: "법무법인 소울", logo: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775047795/%EC%86%8C%EC%9A%B8_%EB%A1%9C%EA%B3%A0_s6wvju.png", desc: "법률협력 파트너", url: "https://www.soullaw.co.kr/" },
      { id: "legalInst3", name: "법무법인 효성", logo: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775048089/channels4_profile_xud3rd.jpg", desc: "법률협력 파트너", url: "http://www.hyosunglaw.com/" },
      { id: "legalInst4", name: "법무법인 안팍", logo: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775046813/0D.43742774.1_pkrc6o.webp", desc: "법률협력 파트너", url: "https://ahnparkcrime.com/" },
      { id: "legalInst5", name: "법무법인 동주", logo: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775046880/qakhuz_jvzw-h0clsn_logo_vrlnjr.png", desc: "법률협력 파트너", url: "https://dongju-lawfirm.com/" },
      { id: "legalInst6", name: "법무법인 YK", logo: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775046992/8d2ece49bcd7fb061177e44e464b9c23_v3tz0f.png", desc: "법률협력 파트너", url: "https://www.yklaw.co.kr/" },
      { id: "legalInst7", name: "법무법인 조율", logo: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775047068/20160906_182634_y7nrsj.jpg", desc: "법률협력 파트너", url: "https://joyullaw.co.kr/" },
      { id: "legalInst8", name: "법무법인 예문정앤파트너스", logo: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775047313/%EB%8B%A4%EC%9A%B4%EB%A1%9C%EB%93%9C_9_qv3cbr.jpg", desc: "법률협력 파트너", url: "http://www.yemunga.com" },
      { id: "legalInst9", name: "법무법인 가나다", logo: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775047378/42233%EB%8C%80%EC%A7%80_169_bspdqq.jpg", desc: "법률협력 파트너", url: "http://ganadalaw.com/" },
      { id: "legalInst10", name: "더킴로펌", logo: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775047490/profileImage_gizmtd.png", desc: "글로벌 법률 파트너", url: "https://www.thekimlawfirm.co.kr/" },
      { id: "legalInst11", name: "법무법인 대륜", logo: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775047562/2021073014260111_izxbrm.avif", desc: "법률협력 파트너", url: "https://www.daeryunlaw.com/" }
    ],
    // Category 3: 교육기관 (10 Logo Slots, updated with provided Cloudinary URLs & official homepage links)
    educationalInstitutions: [
      { id: "eduInst1", name: "광운대학교", logo: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775208775/Seal_3D-type_lkm7qd.png", desc: "고등교육기관 협력", url: "https://www.kw.ac.kr/" },
      { id: "eduInst2", name: "구미대학교", logo: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775208775/%ED%99%94%EB%A9%B4_%EC%BA%A1%EC%B2%98_2026-04-03_170130_tlytqt.png", desc: "고등교육기관 협력", url: "https://www.gumi.ac.kr/" },
      { id: "eduInst3", name: "금오공과대학교", logo: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775055378/img_ci03_pc_1_fo68ol.jpg", desc: "고등교육기관 협력", url: "https://www.kumoh.ac.kr/" },
      { id: "eduInst4", name: "동국대학교", logo: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775032778/symbol_01_1_jzh3rr.png", desc: "고등교육기관 협력", url: "https://www.dongguk.edu/" },
      { id: "eduInst5", name: "영진사이버대학교", logo: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775218764/ChatGPT_Image_2026%EB%85%84_4%EC%9B%94_1%EC%9D%BC_%EC%98%A4%ED%9B%84_06_20_23_xzx7jj_u9pfha.png", desc: "고등교육기관 협력", url: "https://www.ycc.ac.kr/" },
      { id: "eduInst6", name: "부산디지털대학교", logo: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775046633/%EC%A0%9C%EB%AA%A9_%EC%97%86%EC%9D%8C_lgknb0.png", desc: "학술 연구 파트너", url: "https://www.bdu.ac.kr/" },
      { id: "eduInst7", name: "상주대학교 (Sangju National University)", logo: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775277906/%EB%8B%A4%EC%9A%B4%EB%A1%9C%EB%93%9C_1_v0kdya.jpg", desc: "고등교육기관 협력", url: "https://www.knu.ac.kr/wbbs/wbbs/main/main.action" },
      { id: "eduInst8", name: "부산외국어대학교", logo: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775282540/0S5zqzZ3OZ0sDrUNrwOY4VPNA0JXBATRC_lutxzgtHjFdn0EO1POXAi-yEwwEcbrM0xNxequghYxGTE-mYclqlBjbw_XVLmpWHom5V9tUnOlNeqT-jr-BgXzkF95zpKE5u_-htBqRvEAgSK6TcblOw_leu6dr.webp", desc: "고등교육기관 협력", url: "https://www.bufs.ac.kr/" },
      { id: "eduInst9", name: "춘해보건대학교", logo: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775283202/2015_73076000_1440825192922_szd3ef.jpg", desc: "고등교육기관 협력", url: "https://www.ch.ac.kr/" },
      { id: "eduInst10", name: "한국폴리텍대학교", logo: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775283430/2016-09-21_17-48-47_vclflo.jpg", desc: "직업전문교육기관", url: "https://www.kopo.ac.kr/" }
    ],
    // Category 4: 기업 (13 Logo Slots, updated with provided Cloudinary URLs & official homepage links)
    corporations: [
      { id: "corpPartner1", name: "삼성전자", logo: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775208762/%EC%82%BC%EC%84%B1%EC%A0%84%EC%9E%90%EB%A1%9C%EA%B3%A0_taigm8.jpg", desc: "기업 임직원 상담/출강", url: "https://www.samsung.com/" },
      { id: "corpPartner2", name: "삼성SDI", logo: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775208763/1307022_635021_74_thheyi.jpg", desc: "기업 임직원 상담/출강", url: "https://www.samsungsdi.co.kr/" },
      { id: "corpPartner3", name: "삼성탈레스", logo: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775208754/%ED%99%94%EB%A9%B4_%EC%BA%A1%EC%B2%98_2026-04-03_172451_iv50pl.png", desc: "기업 임직원 상담/출강", url: "https://www.hanwhasystems.com/" },
      { id: "corpPartner4", name: "LG전자", logo: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775208754/%ED%99%94%EB%A9%B4_%EC%BA%A1%EC%B2%98_2026-04-03_172717_dpk2rd.png", desc: "기업 임직원 상담/출강", url: "https://www.lge.co.kr/" },
      { id: "corpPartner5", name: "기아자동차", logo: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775283654/%ED%99%94%EB%A9%B4_%EC%BA%A1%EC%B2%98_2026-04-04_151917_itkmwn.png", desc: "기업 임직원 상담/출강", url: "https://www.kia.com/" },
      { id: "corpPartner6", name: "웅진코웨이", logo: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775029714/%ED%99%94%EB%A9%B4_%EC%BA%A1%EC%B2%98_2026-04-01_164820_w6ohae.png", desc: "기업 임직원 상담/출강", url: "https://www.coway.co.kr/" },
      { id: "corpPartner7", name: "코레일", logo: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775032592/sign_4_mgmxmn.png", desc: "공공기업 임직원 출강", url: "https://www.letskorail.com/" },
      { id: "corpPartner8", name: "성진포머 (Sungjin FOMA)", logo: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775031588/%EB%A1%9C%EA%B3%A0_20080213083914_phbofg.jpg", desc: "기업 파트너십", url: "https://www.sjfoma.com/" },
      { id: "corpPartner9", name: "한화시스템", logo: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775030072/%ED%99%94%EB%A9%B4_%EC%BA%A1%EC%B2%98_2026-04-01_165426_vfbzcq.png", desc: "기업 임직원 상담/출강", url: "https://www.hanwhasystems.com/" },
      { id: "corpPartner10", name: "순천향대학교 구미병원", logo: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775029928/%EC%88%9C%EC%B2%9C%ED%96%A5%EB%8C%80%ED%95%99%EA%B5%90_%EA%B5%AC%EB%AF%B8%EB%B3%91%EC%9B%90_%EA%B5%AD%EB%AC%B8_%EC%84%B8%EB%A1%9C_j8brvd.jpg", desc: "의료 네트워크 협력", url: "https://www.schmc.ac.kr/gumi/" },
      { id: "corpPartner11", name: "코리아세븐", logo: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775118793/18680416d1909c8dc0450c8e1b3c074d131f32a688076fc4db8edca1d879518c_warzh9.webp", desc: "기업 파트너십", url: "https://www.7-eleven.co.kr/" },
      { id: "corpPartner12", name: "아모레퍼시픽", logo: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775119159/7083658_180942_2659_rxrac8.jpg", desc: "기업 임직원 상담/출강", url: "https://www.apgroup.com/" },
      { id: "corpPartner13", name: "쿠팡", logo: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775119160/coupang-bi-brand-logo-230109-01_szk7vn.jpg", desc: "기업 임직원 상담/출강", url: "https://www.coupang.com/" }
    ],
    // Category 5: 심리상담 및 웰니스 기관 (4 Logo Slots, updated with provided Cloudinary URLs & official homepage links)
    wellnessInstitutions: [
      { id: "wellnessInst1", name: "TELUS Health", logo: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775112935/ChatGPT_Image_2026%EB%85%84_4%EC%9B%94_2%EC%9D%BC_%EC%98%A4%ED%9B%84_03_55_33_garp5i.png", desc: "EAP 임직원 정신건강 케어", url: "https://www.telushealth.com/" },
      { id: "wellnessInst2", name: "한국심리상담센터", logo: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775031507/%EB%8B%A4%EC%9A%B4%EB%A1%9C%EB%93%9C_wcijfi.png", desc: "심리상담 네트워크 협력", url: "https://www.mykpcc.com/" },
      { id: "wellnessInst3", name: "구미Wee센터", logo: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775033817/ChatGPT_Image_2026%EB%85%84_4%EC%9B%94_1%EC%9D%BC_%EC%98%A4%ED%9B%84_05_55_15_gsvezi.png", desc: "학생 정신건강 상담망", url: "https://www.wee.go.kr/" },
      { id: "wellnessInst4", name: "이지앤웰니스", logo: "https://res.cloudinary.com/dxjz9ksjg/image/upload/v1775218297/2102151025114130_a8a7lk.jpg", desc: "웰니스 기업 파트너", url: "http://www.eznwellness.com/" }
    ]
  };

  const categories = [
    {
      title: "공공기관 및 유관기관",
      icon: <Building2 className="text-emerald-600 w-6 h-6" />,
      items: PARTNERS_CONFIG.publicAgencies,
      bg: "bg-emerald-50/50"
    },
    {
      title: "법률기관",
      icon: <Landmark className="text-indigo-600 w-6 h-6" />,
      items: PARTNERS_CONFIG.legalInstitutions,
      bg: "bg-indigo-50/50"
    },
    {
      title: "교육기관",
      icon: <GraduationCap className="text-amber-600 w-6 h-6" />,
      items: PARTNERS_CONFIG.educationalInstitutions,
      bg: "bg-amber-50/50"
    },
    {
      title: "기업",
      icon: <Building className="text-blue-600 w-6 h-6" />,
      items: PARTNERS_CONFIG.corporations,
      bg: "bg-blue-50/50"
    },
    {
      title: "심리상담 및 웰니스 기관",
      icon: <HeartHandshake className="text-rose-600 w-6 h-6" />,
      items: PARTNERS_CONFIG.wellnessInstitutions,
      bg: "bg-rose-50/50"
    }
  ];

  return (
    <div className="pt-20 bg-[#F4F7F6]">
      {/* Upper Title Header Section */}
      <section className="bg-white border-b border-slate-100 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary font-extrabold tracking-[0.3em] text-xs lg:text-sm uppercase mb-4 block"
          >
            {PARTNERS_CONFIG.header.category}
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight"
          >
            {PARTNERS_CONFIG.header.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 text-base lg:text-lg max-w-4xl mx-auto font-medium leading-relaxed break-keep"
          >
            {PARTNERS_CONFIG.header.description}
          </motion.p>
        </div>
      </section>

      {/* Main Categories Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 lg:space-y-28">
          {categories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: catIdx * 0.1 }}
              className="space-y-8"
            >
              {/* Category Title Header */}
              <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
                <div className={`p-2.5 rounded-xl ${category.bg}`}>
                  {category.icon}
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-slate-800 tracking-tight">
                  {category.title}
                </h2>
              </div>

              {/* Responsive Logo Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
                {category.items.map((item, itemIdx) => {
                  const isPlaceholder = !item.logo || item.logo.includes('placeholder') || item.logo.includes('via.placeholder');

                  return (
                    <motion.a
                      key={item.id}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -6, scale: 1.015 }}
                      transition={{ type: "spring", stiffness: 300, damping: 22 }}
                      className="relative bg-white rounded-2xl p-2 sm:p-3 md:p-4 aspect-[1.6] flex items-center justify-center shadow-[0_2px_10px_-3px_rgba(0,0,0,0.03),0_1px_4px_-1px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_24px_-8px_rgba(0,0,0,0.08)] border border-slate-100/60 hover:border-slate-200 transition-all cursor-pointer overflow-hidden group"
                    >
                      {/* Grid background subtle light overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      <div className="relative z-10 w-full h-full flex items-center justify-center">
                        {isPlaceholder ? (
                          <div className="flex flex-col items-center justify-center text-center px-1">
                            {/* Typography/Logo style for placeholders */}
                            <div className="text-slate-800 font-extrabold text-xs sm:text-sm lg:text-base tracking-tight group-hover:text-primary transition-colors duration-300 leading-snug line-clamp-2">
                              {item.name}
                            </div>
                            <div className="text-[9px] sm:text-[10px] lg:text-xs font-semibold text-slate-400 mt-1">
                              {item.desc}
                            </div>
                          </div>
                        ) : (
                          <div className="w-full h-full flex items-center justify-center p-0">
                            <img
                              src={item.logo}
                              alt={`${item.name} Logo`}
                              className="max-h-[85%] max-w-[90%] w-auto object-contain transition-all duration-300 drop-shadow-[0_1px_2px_rgba(0,0,0,0.02)] group-hover:scale-103"
                              referrerPolicy="no-referrer"
                            />
                          </div>
                        )}
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Dynamic CTA Footer Section */}
      <section className="bg-white border-t border-slate-100 py-16 lg:py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-6">
            <ShieldCheck size={26} />
          </div>
          <h3 className="text-2xl lg:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">
            신뢰할 수 있는 구치소 · 검찰 · 법원 공식 연계 전문 연수
          </h3>
          <p className="text-slate-500 text-base leading-relaxed font-semibold max-w-2xl mx-auto mb-8 break-keep">
            내담자 한 분 한 분의 권익 보호성 양형자료 구성 및 전문 상담 출강은 다년간 입증된 공공 · 학술 연계 기관과의 성과를 기반으로 증명됩니다.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:0507-1351-5463"
              className="bg-primary text-white font-extrabold text-sm px-8 py-3.5 rounded-full shadow-lg shadow-primary/20 hover:bg-secondary transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              전화 문의 (0507-1351-5463)
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
