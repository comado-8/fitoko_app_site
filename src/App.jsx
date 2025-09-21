import { useState } from 'react'

import './App.css'
import asset1 from './assets/108-99.webp'
import asset2 from './assets/143-77.webp'
import asset3 from './assets/143-85.webp'
import asset4 from './assets/I13-213;369-807.webp'
import asset5 from './assets/I13-213;369-808.webp'
import asset6 from './assets/I13-303;369-807.webp'
import asset7 from './assets/I13-303;369-808.webp'
import asset8 from './assets/I13-306;369-807.webp'
import asset9 from './assets/I13-306;369-808.webp'
import asset10 from './assets/6-2412.webp'
import asset11 from './assets/17-94.webp'
import asset12 from './assets/I13-247;1974-8504;1973-3053.svg'
import asset13 from './assets/I13-247;1974-8504;1973-3054.svg'
import asset14 from './assets/I13-247;1974-8504;1973-3055.svg'
import asset15 from './assets/I13-248;1974-8504;1973-3058.svg'
import asset16 from './assets/I13-248;1974-8504;1973-3059.svg'
import asset17 from './assets/I13-248;1974-8504;1973-3060.svg'
import asset18 from './assets/I13-249;1974-8504;1973-3063.svg'
import asset19 from './assets/I13-249;1974-8504;1973-3064.svg'
import asset20 from './assets/I13-249;1974-8504;1973-3065.svg'
import asset21 from './assets/I6-1712;1973-3053.svg'
import asset22 from './assets/I6-1712;1973-3054.svg'
import asset23 from './assets/I6-1712;1973-3055.svg'
import asset24 from './assets/I6-1722;1973-3058.svg'
import asset25 from './assets/I6-1722;1973-3059.svg'
import asset26 from './assets/I6-1722;1973-3060.svg'
import asset27 from './assets/13-144.svg'
import asset38 from './assets/1-1320.svg'
import asset39 from './assets/1-1311.svg'
import asset40 from './assets/1-1302.svg'
import asset42 from './assets/143-92.svg'

const navItems = [
  { label: '特徴', target: 'features', icon: asset38 },
  { label: 'とこペンって？', target: 'tokopen', icon: asset39 },
  { label: 'とこペンの親指道場', target: 'thumb-dojo', icon: asset40 }
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNavClick = (target) => {
    if (typeof window === 'undefined') return

    const element = document.getElementById(target)
    if (!element) return

    const yOffset = 80
    const y = element.getBoundingClientRect().top + window.scrollY - yOffset

    window.scrollTo({ top: y, behavior: 'smooth' })
    setMenuOpen(false)
  }

  const iconLineBase =
    "absolute left-1/2 h-[3px] w-6 -translate-x-1/2 bg-[#374c51] rounded-full transition-all duration-200 ease-in-out"

  return (
    <div className="w-full min-h-screen bg-[#fbfdfd] overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 w-full px-4 md:px-12 py-3 md:py-4 bg-[#fbfdfd]/80 backdrop-blur-md border-b border-[#d7e4e6]/60 flex justify-between items-center">
        <div className="flex justify-start items-center gap-4 md:gap-12">
          <div className="h-8 flex justify-start items-center gap-1">
            <img className="w-[120px] md:w-[186.31px] h-[32px] md:h-[50px]" src={asset27} alt="Fitoko Logo" />
          </div>
        </div>
        <button
          type="button"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'メニューを閉じる' : 'メニューを開く'}
          onClick={() => setMenuOpen((prev) => !prev)}
          className="md:hidden relative w-11 h-11 rounded-lg border border-[#d7e4e6] bg-[#fbfdfd]/90 shadow-[3px_3px_0_#b5c7ca] transition-transform duration-150 hover:translate-y-[1px]"
        >
          <span
            className={`${iconLineBase} ${menuOpen ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-[calc(50%-9px)] -translate-y-1/2'}`}
          ></span>
          <span
            className={`${iconLineBase} ${menuOpen ? 'top-1/2 -translate-y-1/2 opacity-0' : 'top-1/2 -translate-y-1/2 opacity-100'}`}
          ></span>
          <span
            className={`${iconLineBase} ${menuOpen ? 'top-1/2 -translate-y-1/2 -rotate-45' : 'top-[calc(50%+9px)] -translate-y-1/2'}`}
          ></span>
        </button>
        <nav className="hidden md:flex justify-start items-center gap-8">
          <div className="flex justify-start items-start gap-8">
            {navItems.map(({ label, target, icon }) => (
              <button
                key={target}
                type="button"
                onClick={() => handleNavClick(target)}
                className="group flex items-center gap-1 text-[#374c51] text-[15px] font-semibold font-['Public_Sans'] transition-colors hover:text-[#00808f] cursor-pointer"
              >
                <span>{label}</span>
                <span className="w-5 h-5 flex items-center justify-center transition-transform duration-150 group-hover:translate-y-[2px]">
                  <img className="w-3 h-2" src={icon} alt="" />
                </span>
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={() => handleNavClick('waitlist')}
            className="px-4 py-2 bg-gradient-to-b from-[#ffe066] via-[#ffd954] to-[#ffc94d] rounded-lg flex justify-center items-center cursor-pointer text-[#1b1f20] text-[15px] font-semibold font-['Public_Sans'] shadow-[3px_3px_0_#c39c1f] transition-transform duration-150 hover:translate-y-[1px]"
          >
            待合室に参加
          </button>
        </nav>
      </header>

      {menuOpen && (
        <div className="fixed inset-x-0 top-[64px] z-40 md:hidden bg-white/95 backdrop-blur-md border-t border-[#d7e4e6] shadow-[0_6px_0_#b5c7ca] flex flex-col items-center gap-6 py-8 px-6">
          <div className="flex flex-col items-center gap-5 w-full text-center">
            {navItems.map(({ label, target }) => (
              <button
                key={target}
                type="button"
                onClick={() => handleNavClick(target)}
                className="w-full text-[#374c51] text-xl font-semibold font-['Public_Sans'] tracking-wide hover:text-[#00808f] transition-colors"
              >
                {label}
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={() => handleNavClick('waitlist')}
            className="w-full max-w-[280px] px-6 py-3 bg-gradient-to-b from-[#ffe066] via-[#ffd954] to-[#ffc94d] rounded-lg flex justify-center items-center text-[#0a1a1c] text-base font-semibold font-['Inter'] shadow-[3px_3px_0_#c39c1f] transition-transform duration-150 hover:translate-y-[1px]"
          >
            待合室に参加
          </button>
        </div>
      )}

      {/* Hero Section */}
      <section className="-mt-6 sm:-mt-8 md:-mt-10 pt-24 md:pt-28 w-full overflow-hidden">
        <div className="relative w-[100vw] md:w-[min(100vw,1600px)] mx-auto min-h-[62vh] md:min-h-[68vh] py-14 md:py-20">
          <img className="absolute inset-0 w-[100vw] md:w-full h-full object-cover" src={asset1} alt="Hero Background" />
          <div className="absolute inset-0 bg-gradient-to-br from-white/45 via-white/18 to-transparent" aria-hidden="true"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(63,183,204,0.14),rgba(63,183,204,0)_45%)]" aria-hidden="true"></div>
          <div className="relative z-10 flex h-full w-full items-center justify-center">
            <div className="w-full max-w-[1320px] px-6 md:px-12 xl:px-16 md:[padding-inline:calc(var(--spacing)*25)] flex flex-col-reverse md:flex-row items-center md:items-center justify-between gap-4 md:gap-10">
              <div className="flex w-full max-w-[660px] flex-col items-start gap-6 md:gap-7">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#d7e4e6] bg-white/80 backdrop-blur-sm px-4 py-2 text-xs sm:text-sm font-['Inter'] tracking-[0.1em] text-[#006577]/80 shadow-[2px_2px_0_rgba(0,101,119,0.12)]">
                  <span className="h-2 w-2 rounded-full bg-[#00a2b3]"></span>
                  <span>待合室（事前登録）受付中</span>
                </div>
                <h1 className="hero-title">
                  <span className="hero-title__line">筋トレする</span><br />
                  <span className="hero-title__line">体力がない人</span>
                  <span className="hero-title__badge">専用</span><br className="block sm:hidden" />
                  <span className="hero-sub hero-sub--inline">ゲーム感覚のフィットネスアプリ</span>
                </h1>
                <div className="w-full max-w-[560px] flex flex-col items-start gap-4 ml-0">
                  <p className="text-[#274046] text-sm sm:text-base md:text-lg font-medium font-['Inter'] leading-relaxed">
                    <span className="inline-block sm:whitespace-nowrap">運動に自信がなくても、ほんの数分のクエストで“できた”を積み上げる。</span>Fitokoはそんな毎日を届けるために生まれました。
                  </p>
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full">
                    <button
                      type="button"
                      onClick={() => handleNavClick('waitlist')}
                      className="px-6 py-3 bg-gradient-to-b from-[#ffe066] via-[#ffd954] to-[#ffc94d] rounded-lg text-[#0a1a1c] text-base md:text-lg font-semibold font-['Inter'] shadow-[3px_3px_0_#c39c1f] transition-transform duration-150 hover:translate-y-[1px]"
                    >
                      待合室に参加する
                    </button>
                    <button
                      type="button"
                      onClick={() => handleNavClick('features')}
                      className="px-6 py-3 bg-white/80 backdrop-blur-sm rounded-lg text-[#006577] text-base md:text-lg font-semibold font-['Inter'] shadow-[3px_3px_0_rgba(0,101,119,0.2)] transition-transform duration-150 hover:translate-y-[1px]"
                    >
                      特徴をみる
                    </button>
                  </div>
                </div>
              </div>
              <div className="relative w-[80vw] sm:w-[60vw] md:w-[40vw] lg:w-[36vw] xl:w-[34vw] max-w-[640px] flex justify-center md:justify-end overflow-visible">
                <div className="relative w-full max-w-[640px]">
                  <img
                    src={asset2}
                    width="1292"
                    height="1435"
                    fetchpriority="high"
                    decoding="async"
                    alt="Fitokoアプリのクエスト画面"
                    className="w-full h-auto drop-shadow-[18px_20px_48px_rgba(8,32,37,0.25)]"
                  />
                  <img
                    src={asset3}
                    width="827"
                    height="981"
                    decoding="async"
                    alt="Fitokoアプリの達成カード"
                    className="absolute bottom-[-8%] right-[-4%] w-[46%] h-auto drop-shadow-[12px_16px_48px_rgba(8,32,37,0.2)] rotate-[-4deg]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <section
          id="waitlist"
          className="mt-24 md:mt-32 w-full px-4 md:px-12 py-[50px] md:py-[100px] bg-[#ffeab0] shadow-[3px_3px_0_#d7b25f] flex flex-col justify-center items-center gap-[30px] md:gap-[45px] scroll-mt-24"
        >
          <div className="w-full max-w-[800px] flex flex-col justify-start items-start gap-[15px] overflow-hidden">
            <div className="w-full text-center text-[#006577] text-3xl md:text-5xl font-bold font-['Inter']">Fitokoの待合室はこちら</div>
            <div className="w-full h-0 outline outline-2 outline-offset-[-1px] outline-[#374c51]"></div>
            <div className="w-full text-center text-[#374c51] text-lg md:text-2xl font-semibold font-['Inter']">メールアドレスを入力し待合室に参加すると、<br/>リリース時にいち早くご案内します。</div>
            <div className="w-full text-center text-[#374c51] text-sm md:text-base font-normal font-['Inter']">※配信停止はメール内リンクからいつでも可能です。<br/>※ 登録情報は通知目的のみに利用します。詳細は［プライバシーポリシー］をご確認ください。</div>
          </div>
          <div className="w-full max-w-[600px] h-auto flex flex-col md:flex-row justify-start items-start gap-3">
            <div className="flex-1 w-full px-4 py-3 bg-[#fbfdfd] rounded-lg outline outline-[1.50px] outline-offset-[-1.50px] outline-black/0 flex justify-start items-center gap-2">
              <input className="flex-1 bg-transparent text-[#132a2e] text-lg md:text-xl font-normal font-['Public_Sans'] placeholder:text-[#132a2e]/40 outline-none" placeholder="Enter your email" />
            </div>
            <button
              type="button"
              className="w-full md:w-auto px-6 py-3 bg-[#0d4e5a] rounded-lg flex justify-center items-center text-[#fbfdfd] text-lg md:text-xl font-semibold font-['Inter'] shadow-[3px_3px_0_#06353b] transition-transform duration-150 hover:translate-y-[1px]"
            >
              参加する
            </button>
          </div>
        </section>

        {/* Features Section */}
        <section
          id="features"
          className="mt-24 md:mt-32 w-full max-w-[1346px] px-4 md:px-28 py-12 md:py-24 bg-[#ffffff] rounded-[20px] shadow-[3px_3px_0_#1a6c79] flex flex-col justify-start items-center gap-[25px] md:gap-[35px] mx-4 scroll-mt-24"
        >
          <div className="w-full max-w-[837px] flex flex-col justify-start items-start gap-[15px] overflow-hidden">
            <div className="w-full text-center text-[#374c51] text-3xl md:text-5xl font-bold font-['Inter']">Fitoko[フィトコ]の特徴</div>
            <div className="w-full text-center text-[#374c51] text-base md:text-xl font-normal font-['Inter']">体力のない人のために設計した、やさしいスタートのアプリ「Fitoko」<br/>サボりがちな日も、体調が揺らぐ日も、"できる一歩"だけでOK！<br/>Fitokoは小さな積み重ねを基礎体力と自信へつなぎ、ジムや筋トレへの橋渡しを目指します。</div>
          </div>
          
          {/* Feature Cards */}
          <div className="w-full flex flex-col md:flex-row justify-center items-center gap-[30px] md:gap-[61px] overflow-hidden">
            <div className="w-full md:w-96 rounded-lg flex flex-col justify-start items-center gap-6">
              <div className="w-8 h-8 relative overflow-hidden">
                <img className="w-2 h-4 absolute right-[4px] top-[8px]" src={asset12} alt="" />
                <img className="w-[9.33px] h-8 absolute left-0 top-0" src={asset13} alt="" />
                <img className="w-[9.33px] h-8 absolute left-[12px] top-0" src={asset14} alt="" />
              </div>
              <div className="w-full px-4 flex flex-col justify-start items-center gap-2 overflow-hidden">
                <div className="w-full text-center text-[#374c51] text-2xl md:text-3xl font-bold font-['Inter']">驚くほど<br/>やさしいストレッチ</div>
                <div className="w-full text-center text-[#374c51] text-sm md:text-base font-normal font-['Inter']">一般的なアプリより低いハードル<br/>イスのまま/ベッドの上でもOK、<br/>まずは10秒から</div>
              </div>
            </div>
            
            <div className="w-full md:w-96 rounded-lg flex flex-col justify-start items-center gap-6">
              <div className="w-8 h-8 relative overflow-hidden">
                <div className="w-[29.33px] h-[29.33px] absolute left-[1.33px] top-[1.33px]">
                  <img className="w-[29.33px] h-2 absolute left-0 top-0" src={asset15} alt="" />
                  <img className="w-[29.33px] h-2 absolute left-0 top-[10.67px]" src={asset16} alt="" />
                  <img className="w-[29.33px] h-2 absolute left-0 top-[21.33px]" src={asset17} alt="" />
                </div>
              </div>
              <div className="w-full px-4 flex flex-col justify-start items-center gap-2 overflow-hidden">
                <div className="w-full text-center text-[#374c51] text-2xl md:text-3xl font-bold font-['Inter']">毎日が<br/>ちいさなクエスト</div>
                <div className="w-full text-center text-[#374c51] text-sm md:text-base font-normal font-['Inter']">"できた"が目に見える演出で<br/>ゲーム感覚の達成感<br/>楽しく前に進めます</div>
              </div>
            </div>
            
            <div className="w-full md:w-96 rounded-lg flex flex-col justify-start items-center gap-6">
              <div className="w-8 h-8 relative overflow-hidden">
                <div className="w-[29.33px] h-[29.33px] absolute left-[1.33px] top-[1.33px]">
                  <img className="w-[29.33px] h-[6.67px] absolute left-0 top-0" src={asset18} alt="" />
                  <img className="w-2 h-5 absolute left-0 top-[9.33px]" src={asset19} alt="" />
                  <img className="w-[18.67px] h-5 absolute left-[10.67px] top-[9.33px]" src={asset20} alt="" />
                </div>
              </div>
              <div className="w-full px-4 flex flex-col justify-start items-center gap-2 overflow-hidden">
                <div className="w-full text-center text-[#374c51] text-2xl md:text-3xl font-bold font-['Inter']">やさしさ<br/>ファースト</div>
                <div className="w-full text-center text-[#374c51] text-sm md:text-base font-normal font-['Inter']">体調や忙しさに合わせて<br/>軽め／スキップOK<br/>それでも続くように整えました</div>
              </div>
            </div>
          </div>

          {/* Phone Screenshots */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-[30px] md:gap-[125px] mt-8">
            <div className="w-[200px] md:w-[261px] h-[400px] md:h-[522px] relative shadow-[3px_3px_0_rgba(17,24,39,0.2)]">
              <img className="w-[175px] md:w-[227.62px] h-[380px] md:h-[492.87px] absolute left-[12px] md:left-[17px] top-[12px] md:top-[15.78px]" src={asset4} alt="App Screenshot 1" />
              <img className="w-full h-full absolute left-0 top-0" src={asset5} alt="Phone Frame 1" />
            </div>
            <div className="w-[200px] md:w-[261px] h-[400px] md:h-[522px] relative shadow-[3px_3px_0_rgba(17,24,39,0.2)]">
              <img className="w-[175px] md:w-[227.62px] h-[380px] md:h-[492.87px] absolute left-[12px] md:left-[17px] top-[12px] md:top-[15.78px]" src={asset6} alt="App Screenshot 2" />
              <img className="w-full h-full absolute left-0 top-0" src={asset7} alt="Phone Frame 2" />
            </div>
            <div className="w-[200px] md:w-[261px] h-[400px] md:h-[522px] relative shadow-[3px_3px_0_rgba(17,24,39,0.2)]">
              <img className="w-[175px] md:w-[227.62px] h-[380px] md:h-[492.87px] absolute left-[12px] md:left-[17px] top-[12px] md:top-[15.78px]" src={asset8} alt="App Screenshot 3" />
              <img className="w-full h-full absolute left-0 top-0" src={asset9} alt="Phone Frame 3" />
            </div>
          </div>

          <div className="w-full max-w-[709px] text-center text-[#374c51] text-sm md:text-base font-normal font-['Inter']">※画面は開発中のもので、変更となる可能性がございます。</div>
          
          <div className="w-full max-w-[800px] pt-[30px] flex flex-col justify-start items-start gap-2 overflow-hidden">
            <div className="w-full text-center text-[#374c51] text-3xl md:text-5xl font-bold font-['Inter']">みんなは当てはまる？</div>
          </div>

          {/* Target Audience Cards */}
          <div className="w-full flex flex-col md:flex-row justify-center items-center gap-8 md:gap-[110px] overflow-hidden">
            <div className="w-full md:w-96 py-[40px] md:py-[60px] bg-[#ccecf2] rounded-lg shadow-[3px_3px_0_#86bcc7] flex flex-col justify-start items-center gap-6">
              <div className="w-8 h-8 relative overflow-hidden">
                <img className="w-2 h-4 absolute right-[4px] top-[8px]" src={asset21} alt="" />
                <img className="w-[9.33px] h-8 absolute left-0 top-0" src={asset22} alt="" />
                <img className="w-[9.33px] h-8 absolute left-[12px] top-0" src={asset23} alt="" />
              </div>
              <div className="w-full px-4 flex flex-col justify-center items-center gap-2 overflow-hidden">
                <div className="w-full text-center text-[#374c51] text-2xl md:text-3xl font-bold font-['Inter']">こんな人におすすめ</div>
                <div className="w-full text-left text-[#374c51] text-sm md:text-base font-normal font-['Inter']">✓ 筋トレをする筋力・体力がない<br/>✓ 運動習慣がなく何から始めればいいかわからない<br/>✓ ジムに通うのはハードルが高い<br/>✓ 体調に波があり、無理をしたくない<br/>✓ 継続することが苦手<br/>✓ ゲーム感覚で楽しく続けたい</div>
              </div>
            </div>
            
            <div className="w-full md:w-96 py-[40px] md:py-[60px] bg-[#f0f0f0] rounded-lg shadow-[3px_3px_0_#bdc4c7] flex flex-col justify-start items-center gap-6">
              <div className="w-8 h-8 relative overflow-hidden">
                <div className="w-[29.33px] h-[29.33px] absolute left-[1.33px] top-[1.33px]">
                  <img className="w-[29.33px] h-2 absolute left-0 top-0" src={asset24} alt="" />
                  <img className="w-[29.33px] h-2 absolute left-0 top-[10.67px]" src={asset25} alt="" />
                  <img className="w-[29.33px] h-2 absolute left-0 top-[21.33px]" src={asset26} alt="" />
                </div>
              </div>
              <div className="w-full px-4 flex flex-col justify-center items-center gap-2 overflow-hidden">
                <div className="w-full text-center text-[#374c51] text-2xl md:text-3xl font-bold font-['Inter']">少し慣れてきたら</div>
                <div className="w-full text-left text-[#374c51] text-sm md:text-base font-normal font-['Inter']">✓ 筋トレアプリに挑戦してみる<br/>✓ ジムの見学・体験に行ってみる<br/>✓ ヨガやピラティスを始めてみる<br/>✓ ウォーキングやランニングを始める<br/>✓ スポーツクラブに入会する</div>
              </div>
            </div>
          </div>
        </section>

        {/* Character Section */}
        <section
          id="tokopen"
          className="mt-24 md:mt-32 w-full max-w-[1346px] px-4 md:px-28 py-12 md:py-24 bg-[#ccecf2] rounded-[20px] shadow-[3px_3px_0_#86bcc7] flex flex-col justify-start items-center gap-[25px] md:gap-[35px] mx-4 scroll-mt-24"
        >
          <div className="w-full max-w-[837px] flex flex-col justify-start items-start gap-[15px] overflow-hidden">
            <div className="w-full text-center text-[#374c51] text-3xl md:text-5xl font-bold font-['Inter']">キャラクター紹介</div>
          </div>
          <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-[30px] md:gap-[61px] overflow-hidden">
            <div className="w-[300px] md:w-[400px] lg:w-[544px] h-[300px] md:h-[400px] lg:h-[544px] relative">
              <img className="w-full h-full object-contain" src={asset10} alt="とこペン" />
            </div>
            <div className="w-full lg:w-[545px] flex flex-col justify-start items-start gap-6">
              <div className="w-full flex flex-col justify-start items-start gap-2">
                <div className="w-full text-[#374c51] text-base font-normal font-['Inter']">公式マスコットキャラクター</div>
                <div className="w-full text-[#374c51] text-3xl md:text-5xl font-bold font-['Inter']">とこペン</div>
                <div className="w-full text-[#374c51] text-lg md:text-xl font-normal font-['Inter']">ゆるい運動が大好きなペンギン。<br/>ゆるい運動を通じてユーザーを支える優しいペンギン。</div>
              </div>
              <div className="w-full flex flex-col justify-start items-start gap-2">
                <div className="w-full text-[#374c51] text-base font-normal font-['Inter']">とこペンの、運動に対するゆるいメッセージをお届けします。</div>
                <div className="w-full text-[#374c51] text-base font-normal font-['Inter']">・ 今日は「できた」ことを褒めてあげよう<br/>・ 体調が悪い日は「休む」ことも大切<br/>・ 小さな一歩でも、続けることで大きな変化に<br/>・ 無理をしないで、自分のペースで<br/>・ 運動は楽しむもの、義務ではありません</div>
              </div>
            </div>
          </div>
        </section>

        {/* Special Content Section */}
        <section
          id="thumb-dojo"
          className="mt-24 md:mt-32 w-full max-w-[1346px] px-4 md:px-28 py-12 md:py-24 bg-[#ffffff] rounded-[20px] shadow-[3px_3px_0_#1a6c79] flex flex-col justify-start items-center gap-[25px] md:gap-[35px] mx-4 scroll-mt-24"
        >
          <div className="w-full max-w-[837px] flex flex-col justify-start items-start gap-[15px] overflow-hidden">
            <div className="w-full text-center text-[#374c51] text-3xl md:text-5xl font-bold font-['Inter']">スペシャルコンテンツ</div>
            <div className="w-full text-center text-[#374c51] text-3xl md:text-5xl font-bold font-['Inter']">とこペンの親指道場</div>
          </div>
          <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-[30px] md:gap-[61px] overflow-hidden">
            <div className="w-[300px] md:w-[400px] lg:w-[544px] h-[300px] md:h-[400px] lg:h-[544px] relative">
              <img className="w-full h-full object-contain" src={asset11} alt="とこペンの親指道場" />
            </div>
            <div className="w-full lg:w-[545px] flex flex-col justify-start items-start gap-6">
              <div className="w-full text-[#374c51] text-lg md:text-xl font-normal font-['Inter']">Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <div className="mt-24 md:mt-32 w-full px-4 md:px-12 py-[50px] md:py-[100px] bg-[#0c5c66] shadow-[3px_3px_0_#073f46] flex flex-col justify-center items-center gap-[30px] md:gap-[45px]">
          <div className="w-full max-w-[800px] flex flex-col justify-start items-start gap-[15px] overflow-hidden">
            <div className="w-full text-center text-[#fbfdfd] text-3xl md:text-5xl font-bold font-['Inter']">Fitokoの待合室に、今すぐ参加しよう！</div>
            <div className="w-full text-center text-[#fbfdfd] text-sm md:text-base font-normal font-['Inter']">※配信停止はメール内リンクからいつでも可能です。<br/>※ 登録情報は通知目的のみに利用します。詳細は［プライバシーポリシー］をご確認ください。</div>
          </div>
          <div className="w-full max-w-[600px] h-auto flex flex-col md:flex-row justify-start items-start gap-3">
            <div className="flex-1 w-full px-4 py-3 bg-[#fbfdfd] rounded-lg outline outline-[1.50px] outline-offset-[-1.50px] outline-black/0 flex justify-start items-center gap-2">
              <input className="flex-1 bg-transparent text-[#132a2e] text-lg md:text-xl font-normal font-['Public_Sans'] placeholder:text-[#132a2e]/40 outline-none" placeholder="Enter your email" />
            </div>
            <button
              type="button"
              className="w-full md:w-auto px-6 py-3 bg-[#ffe066] rounded-lg flex justify-center items-center text-[#0a1a1c] text-lg md:text-xl font-semibold font-['Inter'] shadow-[3px_3px_0_#c39c1f] transition-transform duration-150 hover:translate-y-[1px]"
            >
              参加する
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="w-full px-4 md:px-12 py-4 bg-[#0d4e5a] flex justify-center items-center">
          <div className="text-[#fbfdfd] text-base font-normal font-['Inter']">© 2024 Fitoko. All rights reserved.</div>
        </div>
      </section>
    </div>
  )
}

export default App
