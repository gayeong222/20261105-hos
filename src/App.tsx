import { useEffect, useState } from "react"

const heroSlides = [
  {
    eyebrow: "몸과 마음이 다시, 편안해지는 곳",
    title: ["일상의 건강을", "되찾는 한방의 힘"],
    description: [
      "사람을 먼저 생각하는 다온한방병원이",
      "건강한 하루를 함께 만들어갑니다.",
    ],
    tone: "default",
  },
  {
    eyebrow: "전통의 지혜를 오늘의 치료로",
    title: ["환자 한 분 한 분을", "위한 맞춤 진료"],
    description: [
      "세심한 상담과 정확한 진단을 바탕으로",
      "나에게 꼭 맞는 치료를 제안합니다.",
    ],
    tone: "sage",
  },
  {
    eyebrow: "회복의 시간까지 따뜻하게",
    title: ["편안한 공간에서", "건강을 채우는 시간"],
    description: [
      "몸과 마음이 온전히 쉴 수 있도록",
      "다온이 회복의 모든 순간을 함께합니다.",
    ],
    tone: "rose",
  },
]

const signatureServices = [
  {
    icon: "✦",
    title: "맞춤 한방치료",
    lines: ["개인별 체질과 상태에 맞춘", "1:1 맞춤 치료"],
  },
  {
    icon: "✿",
    title: "안전한 한약 처방",
    lines: ["믿을 수 있는", "청정 한약재 사용"],
  },
  {
    icon: "⌁",
    title: "통증 클리닉",
    lines: ["허리·목·관절 등", "만성 통증 치료"],
  },
  {
    icon: "♧",
    title: "생활질환 클리닉",
    lines: ["소화기·호흡기·여성질환 등", "생활 속 건강 관리"],
  },
  {
    icon: "✧",
    title: "면역·보약 클리닉",
    lines: ["체질 개선과", "면역력 증진"],
  },
]

const clinics = [
  {
    title: "통증·척추 클리닉",
    description: "허리, 목, 어깨, 무릎 등",
    color: "#cfc7ba",
  },
  {
    title: "소화기 클리닉",
    description: "소화불량, 위장장애 등",
    color: "#e0d1bf",
  },
  {
    title: "교통사고 후유증 클리닉",
    description: "사고 후 통증, 재활 치료",
    color: "#c2c4ba",
  },
  {
    title: "여성건강 클리닉",
    description: "생리통, 갱년기, 여성질환 등",
    color: "#dec9c2",
  },
  {
    title: "소아·성장 클리닉",
    description: "성장, 면역, 체질 개선",
    color: "#ccd1bf",
  },
  {
    title: "보약·면역 클리닉",
    description: "체질 개선, 기력 회복",
    color: "#c4ccc2",
  },
]

const rooms = ["진료실", "추나요법실", "한약조제실", "입원실"]

type ModalType = "reservation" | "consultation" | "video" | "search" | null

function AbstractInterior({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={`abstract-interior ${
        compact ? "abstract-interior--compact" : ""
      }`}
      aria-hidden="true"
    >
      <span className="interior-light" />
      <span className="interior-highlight" />
      <span className="interior-shadow" />
      <span className="interior-floor" />
      <span className="interior-desk" />
      <span className="interior-base" />
    </div>
  )
}

function Brand() {
  return (
    <a className="brand" href="#home" aria-label="다온한방병원 홈">
      <img src="/assets/daon-leaf-mark.svg" alt="" />
      <span>
        <strong>다온한방병원</strong>
        <small>DAON KOREAN MEDICINE HOSPITAL</small>
      </span>
    </a>
  )
}

function Header({ openModal }: { openModal: (type: ModalType) => void }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const navItems = [
    ["병원소개", "#about"],
    ["진료안내", "#services"],
    ["치료클리닉", "#clinics"],
    ["한방건강정보", "#information"],
    ["커뮤니티", "#community"],
  ]

  return (
    <header className="site-header">
      <div className="header-inner">
        <Brand />
        <nav
          className={menuOpen ? "main-nav is-open" : "main-nav"}
          aria-label="주요 메뉴"
        >
          {navItems.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
          <div className="mobile-actions">
            <button
              className="text-button"
              onClick={() => openModal("consultation")}
            >
              온라인 상담
            </button>
            <button
              className="button button--brown"
              onClick={() => openModal("reservation")}
            >
              예약하기
            </button>
          </div>
        </nav>
        <div className="header-actions">
          <button
            className="search-button"
            onClick={() => openModal("search")}
            aria-label="검색 열기"
          >
            ⌕
          </button>
          <button
            className="text-button"
            onClick={() => openModal("consultation")}
          >
            온라인 상담
          </button>
          <button
            className="button button--brown"
            onClick={() => openModal("reservation")}
          >
            예약하기
          </button>
        </div>
        <button
          className={menuOpen ? "menu-button is-open" : "menu-button"}
          onClick={() => setMenuOpen((current) => !current)}
          aria-expanded={menuOpen}
          aria-label="모바일 메뉴 열기"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}

function Hero({ openModal }: { openModal: (type: ModalType) => void }) {
  const [active, setActive] = useState(0)
  const slide = heroSlides[active]
  const move = (direction: number) =>
    setActive((active + direction + heroSlides.length) % heroSlides.length)

  return (
    <section
      className={`hero hero--${slide.tone}`}
      id="home"
      aria-label="주요 소식 슬라이드"
    >
      <div className="hero-copy">
        <p className="eyebrow">{slide.eyebrow}</p>
        <h1>
          {slide.title.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h1>
        <p className="hero-description">
          {slide.description.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </p>
        <div className="hero-buttons">
          <button
            className="button button--brown"
            onClick={() => openModal("reservation")}
          >
            진료 예약하기 <span>→</span>
          </button>
          <a className="button button--light" href="#about">
            병원 소개 보기
          </a>
        </div>
        <div
          className="slider-status"
          aria-label={`${active + 1} / ${heroSlides.length}`}
        >
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={index === active ? "active" : ""}
              onClick={() => setActive(index)}
              aria-label={`${index + 1}번 슬라이드`}
            >
              {String(index + 1).padStart(2, "0")}
            </button>
          ))}
        </div>
      </div>
      <div className="hero-art">
        <AbstractInterior />
      </div>
      <div className="slider-arrows">
        <button onClick={() => move(-1)} aria-label="이전 슬라이드">
          ‹
        </button>
        <button onClick={() => move(1)} aria-label="다음 슬라이드">
          ›
        </button>
      </div>
    </section>
  )
}

function SignatureServices() {
  return (
    <section
      className="signature-services"
      id="services"
      aria-label="다온의 주요 진료 특징"
    >
      {signatureServices.map((service) => (
        <article key={service.title}>
          <span className="service-icon" aria-hidden="true">
            {service.icon}
          </span>
          <h2>{service.title}</h2>
          <p>
            {service.lines[0]}
            <br />
            {service.lines[1]}
          </p>
        </article>
      ))}
    </section>
  )
}

function Philosophy({ openModal }: { openModal: (type: ModalType) => void }) {
  return (
    <section className="philosophy" id="about">
      <div className="philosophy-art">
        <AbstractInterior />
      </div>
      <div className="philosophy-copy">
        <p className="section-kicker">
          ━&nbsp;&nbsp; 전통의 지혜, 오늘의 건강으로
        </p>
        <h2>
          사람을 위한
          <br />
          올바른 한방치료
        </h2>
        <p>
          다온한방병원은 전통의 가치를 바탕으로
          <br />
          현대인의 건강 고민을 함께 해결합니다.
        </p>
        <div className="care-values">
          <span>
            <b>♡</b>환자 중심 진료
          </span>
          <span>
            <b>♧</b>안전한 의료 시스템
          </span>
          <span>
            <b>♙</b>풍부한 임상 경험
          </span>
        </div>
      </div>
      <button
        className="video-button"
        onClick={() => openModal("video")}
        aria-label="다온한방병원 소개 영상 보기"
      >
        <i>▶</i>
        <span>
          다온한방병원
          <br />
          소개 영상 보기
        </span>
      </button>
    </section>
  )
}

function ClinicCard({ clinic }: { clinic: typeof clinics[number] }) {
  return (
    <a className="clinic-card" href="#reservation">
      <div className="clinic-image" style={{ backgroundColor: clinic.color }}>
        <span />
        <i />
      </div>
      <h3>{clinic.title}</h3>
      <p>{clinic.description}</p>
    </a>
  )
}

function Clinics() {
  return (
    <section className="clinics" id="clinics">
      <div className="section-heading">
        <h2>주요 진료 클리닉</h2>
        <p>
          다양한 한방 진료로
          <br />
          일상의 건강을 지켜드립니다.
        </p>
        <a href="#reservation">전체 진료 보기&nbsp; →</a>
      </div>
      <div className="clinic-grid">
        {clinics.map((clinic) => (
          <ClinicCard clinic={clinic} key={clinic.title} />
        ))}
      </div>
    </section>
  )
}

function HealingSpace() {
  const [selectedRoom, setSelectedRoom] = useState(0)
  return (
    <section className="healing-space" id="space">
      <div className="space-copy">
        <h2>
          편안함이 머무는
          <br />
          치료 공간
        </h2>
        <p>
          몸과 마음이 모두 편안할 수 있는
          <br />
          쾌적한 진료 환경을 제공합니다.
        </p>
        <button
          className="button button--light"
          onClick={() => setSelectedRoom((selectedRoom + 1) % rooms.length)}
        >
          다음 공간 보기&nbsp; →
        </button>
      </div>
      <div className="room-gallery">
        {rooms.map((room, index) => (
          <button
            key={room}
            className={selectedRoom === index ? "active" : ""}
            onClick={() => setSelectedRoom(index)}
            aria-label={`${room} 사진 보기`}
          >
            <AbstractInterior compact />
            <span>{room}</span>
          </button>
        ))}
      </div>
    </section>
  )
}

function Information({ openModal }: { openModal: (type: ModalType) => void }) {
  const notices = [
    ["추석 연휴 진료 일정 안내", "2024.09.10"],
    ["특강 해열 한약 프로그램 안내", "2024.09.05"],
    ["진료 예약 시스템 오픈 안내", "2024.08.28"],
  ]
  return (
    <section className="information" id="information">
      <div className="notice-panel">
        <div className="info-title">
          <h2>공지사항</h2>
          <a href="#community">더보기&nbsp; +</a>
        </div>
        <ul>
          {notices.map(([title, date]) => (
            <li key={title}>
              <a href="#community">{title}</a>
              <time>{date}</time>
            </li>
          ))}
        </ul>
      </div>
      <div className="story-panel" id="community">
        <h2>환자분들의 이야기</h2>
        <blockquote>
          “꾸준한 치료로 허리 통증이 많이 좋아졌어요.
          <br />
          친절하고 세심한 진료에 늘 감사합니다.”
        </blockquote>
        <p>김○○ 님&nbsp;&nbsp; | &nbsp;&nbsp;허리 통증 치료</p>
      </div>
      <div className="location-panel">
        <h2>오시는 길</h2>
        <div className="map-placeholder">
          <span>●</span>
        </div>
        <address>
          경상남도 진주시 진주대로 123
          <br />
          다온한방병원
        </address>
        <a
          className="panel-link"
          href="https://map.naver.com/v5/search/경상남도%20진주시%20진주대로%20123"
          target="_blank"
          rel="noreferrer"
        >
          지도에서 보기&nbsp; →
        </a>
      </div>
      <div className="contact-panel" id="reservation">
        <h2>진료 예약 및 상담</h2>
        <a className="phone" href="tel:0551234567">
          ☎&nbsp; 055-123-4567
        </a>
        <p>
          평일&nbsp;&nbsp;&nbsp;&nbsp; 09:00 - 18:00
          <br />
          토요일&nbsp;&nbsp; 09:00 - 13:00
          <br />
          점심시간&nbsp; 12:30 - 13:30
        </p>
        <div>
          <button onClick={() => openModal("reservation")}>
            진료 예약하기 →
          </button>
          <button onClick={() => openModal("consultation")}>
            온라인 상담 →
          </button>
        </div>
      </div>
    </section>
  )
}

function Modal({ type, close }: { type: ModalType close: () => void }) {
  const [submitted, setSubmitted] = useState(false)
  useEffect(() => {
    if (!type) return
    const closeOnEscape = (event: KeyboardEvent) =>
      event.key === "Escape" && close()
    document.addEventListener("keydown", closeOnEscape)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", closeOnEscape)
      document.body.style.overflow = ""
    }
  }, [type, close])

  if (!type) return null
  const isForm = type === "reservation" || type === "consultation"
  const title =
    type === "reservation"
      ? "진료 예약하기"
      : type === "consultation"
        ? "온라인 상담"
        : type === "search"
          ? "사이트 검색"
          : "다온한방병원 소개"

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={close}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-label={title}
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button className="modal-close" onClick={close} aria-label="팝업 닫기">
          ×
        </button>
        <h2>{title}</h2>
        {submitted ? (
          <div className="success-message">
            <b>신청이 완료되었습니다.</b>
            <p>확인 후 빠르게 연락드리겠습니다.</p>
            <button className="button button--brown" onClick={close}>
              확인
            </button>
          </div>
        ) : isForm ? (
          <form
            onSubmit={(event) => {
              event.preventDefault()
              setSubmitted(true)
            }}
          >
            <label>
              이름
              <input required name="name" placeholder="이름을 입력해 주세요" />
            </label>
            <label>
              연락처
              <input
                required
                name="phone"
                type="tel"
                placeholder="010-0000-0000"
              />
            </label>
            <label>
              {type === "reservation" ? "희망 진료과" : "상담 내용"}
              {type === "reservation" ? (
                <select name="clinic">
                  <option>통증·척추 클리닉</option>
                  <option>소화기 클리닉</option>
                  <option>여성건강 클리닉</option>
                  <option>보약·면역 클리닉</option>
                </select>
              ) : (
                <textarea
                  required
                  name="message"
                  placeholder="궁금한 내용을 남겨 주세요"
                />
              )}
            </label>
            <button className="button button--brown" type="submit">
              {type === "reservation" ? "예약 신청" : "상담 신청"}
            </button>
          </form>
        ) : type === "search" ? (
          <form
            className="search-form"
            onSubmit={(event) => {
              event.preventDefault()
              close()
              document
                .querySelector("#clinics")
                ?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            <label>
              검색어
              <input
                autoFocus
                required
                placeholder="진료과 또는 증상을 검색해 주세요"
              />
            </label>
            <button className="button button--brown" type="submit">
              검색
            </button>
          </form>
        ) : (
          <div className="video-placeholder">
            <AbstractInterior />
            <button
              onClick={() => setSubmitted(true)}
              aria-label="소개 영상 재생"
            >
              ▶
            </button>
            <p>환자를 먼저 생각하는 다온의 이야기를 만나보세요.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default function App() {
  const [modal, setModal] = useState<ModalType>(null)
  return (
    <>
      <Header openModal={setModal} />
      <main>
        <Hero openModal={setModal} />
        <SignatureServices />
        <Philosophy openModal={setModal} />
        <Clinics />
        <HealingSpace />
        <Information openModal={setModal} />
      </main>
      <Modal type={modal} close={() => setModal(null)} />
    </>
  )
}
