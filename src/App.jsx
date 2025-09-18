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

function App() {
  return (
    <div className="w-full min-h-screen bg-[#fbfdfd] overflow-x-hidden">
      {/* Header */}
      <header className="w-full px-4 md:px-12 py-4 bg-[#fbfdfd] flex justify-between items-center">
        <div className="flex justify-start items-center gap-4 md:gap-12">
          <div className="h-8 flex justify-start items-center gap-1">
            <img className="w-[120px] md:w-[186.31px] h-[32px] md:h-[50px]" src={asset27} alt="Fitoko Logo" />
          </div>
        </div>
        <div className="hidden md:flex justify-start items-center gap-8">
          <div className="flex justify-start items-start gap-8">
            <div className="flex justify-start items-center gap-1">
              <div className="text-[#374c51] text-[15px] font-medium font-['Public_Sans']">特徴</div>
              <div className="w-4 h-4 relative overflow-hidden">
                <img className="w-2 h-1" src={asset38} alt="" />
              </div>
            </div>
            <div className="flex justify-start items-center gap-1">
              <div className="text-[#374c51] text-[15px] font-medium font-['Public_Sans']">とこペンって？</div>
              <div className="w-4 h-4 relative overflow-hidden">
                <img className="w-2 h-1" src={asset39} alt="" />
              </div>
            </div>
            <div className="flex justify-start items-center gap-1">
              <div className="text-[#374c51] text-[15px] font-medium font-['Public_Sans']">とこペンの親指道場</div>
              <div className="w-4 h-4 relative overflow-hidden">
                <img className="w-2 h-1" src={asset40} alt="" />
              </div>
            </div>
          </div>
          <div className="px-4 py-2 bg-gradient-to-b from-[#f6e076]/50 to-[#ffb974]/50 rounded-lg flex justify-center items-center cursor-pointer hover:opacity-80 transition-opacity">
            <div className="text-[#010303] text-[15px] font-medium font-['Public_Sans']">待合室に参加</div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full flex flex-col justify-center items-center gap-[50px] md:gap-[100px]">
        <div className="w-full h-[400px] md:h-[672px] pb-12 md:pb-24 relative flex flex-col justify-start items-center gap-12 overflow-hidden">
          <img className="w-full h-full object-cover" src={asset1} alt="Hero Background" />
          <img className="w-[280px] md:w-[770px] h-auto absolute top-[80px] md:top-[227px] left-1/2 transform -translate-x-1/2 md:left-[45px] md:transform-none z-10" src={asset42} alt="Hero Text" />
          <div className="w-[250px] md:w-[400px] lg:w-[500px] h-auto absolute top-[20px] md:top-[-50px] right-4 md:right-[100px] z-20">
            <div className="relative">
              <img className="w-full h-auto" src={asset2} alt="Phone 1" />
            </div>
            <div className="absolute top-[30%] right-[-15%] w-[50%] h-auto">
              <img className="w-full h-auto" src={asset3} alt="Phone 2" />
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="w-full px-4 md:px-12 py-[50px] md:py-[100px] bg-gradient-to-b from-[#f6e076]/50 to-[#ffb974]/50 shadow-[7px_7px_0px_0px_rgba(198,167,15,0.40)] flex flex-col justify-center items-center gap-[30px] md:gap-[45px]">
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
            <div className="w-full md:w-auto px-6 py-3 bg-[#0d4e5a] rounded-lg flex justify-center items-center cursor-pointer hover:bg-[#0d4e5a]/90 transition-colors">
              <div className="text-[#fbfdfd] text-lg md:text-xl font-normal font-['Inter']">参加する</div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="w-full max-w-[1346px] px-4 md:px-28 py-12 md:py-24 bg-[#fbfdfd]/70 rounded-[20px] shadow-[7px_7px_0px_0px_rgba(28,111,126,0.25)] flex flex-col justify-start items-center gap-[25px] md:gap-[35px] mx-4">
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
            <div className="w-[200px] md:w-[261px] h-[400px] md:h-[522px] relative shadow-[0px_24px_48px_-12px_rgba(17,24,39,0.25)]">
              <img className="w-[175px] md:w-[227.62px] h-[380px] md:h-[492.87px] absolute left-[12px] md:left-[17px] top-[12px] md:top-[15.78px]" src={asset4} alt="App Screenshot 1" />
              <img className="w-full h-full absolute left-0 top-0" src={asset5} alt="Phone Frame 1" />
            </div>
            <div className="w-[200px] md:w-[261px] h-[400px] md:h-[522px] relative shadow-[0px_24px_48px_-12px_rgba(17,24,39,0.25)]">
              <img className="w-[175px] md:w-[227.62px] h-[380px] md:h-[492.87px] absolute left-[12px] md:left-[17px] top-[12px] md:top-[15.78px]" src={asset6} alt="App Screenshot 2" />
              <img className="w-full h-full absolute left-0 top-0" src={asset7} alt="Phone Frame 2" />
            </div>
            <div className="w-[200px] md:w-[261px] h-[400px] md:h-[522px] relative shadow-[0px_24px_48px_-12px_rgba(17,24,39,0.25)]">
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
            <div className="w-full md:w-96 py-[40px] md:py-[60px] bg-[#ccecf2] rounded-lg shadow-[7px_7px_0px_0px_rgba(28,111,126,0.25)] flex flex-col justify-start items-center gap-6">
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
            
            <div className="w-full md:w-96 py-[40px] md:py-[60px] bg-[#f0f0f0] rounded-lg shadow-[7px_7px_0px_0px_rgba(28,111,126,0.25)] flex flex-col justify-start items-center gap-6">
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
        </div>

        {/* Character Section */}
        <div className="w-full max-w-[1346px] px-4 md:px-28 py-12 md:py-24 bg-[#ccecf2] rounded-[20px] shadow-[7px_7px_0px_0px_rgba(28,111,126,0.25)] flex flex-col justify-start items-center gap-[25px] md:gap-[35px] mx-4">
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
        </div>

        {/* Special Content Section */}
        <div className="w-full max-w-[1346px] px-4 md:px-28 py-12 md:py-24 bg-[#fbfdfd]/70 rounded-[20px] shadow-[7px_7px_0px_0px_rgba(28,111,126,0.25)] flex flex-col justify-start items-center gap-[25px] md:gap-[35px] mx-4">
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
        </div>

        {/* Final CTA Section */}
        <div className="w-full px-4 md:px-12 py-[50px] md:py-[100px] bg-gradient-to-b from-[#006577] to-[#0d4e5a] shadow-[7px_7px_0px_0px_rgba(198,167,15,0.40)] flex flex-col justify-center items-center gap-[30px] md:gap-[45px]">
          <div className="w-full max-w-[800px] flex flex-col justify-start items-start gap-[15px] overflow-hidden">
            <div className="w-full text-center text-[#fbfdfd] text-3xl md:text-5xl font-bold font-['Inter']">Fitokoの待合室に、今すぐ参加しよう！</div>
            <div className="w-full text-center text-[#fbfdfd] text-sm md:text-base font-normal font-['Inter']">※配信停止はメール内リンクからいつでも可能です。<br/>※ 登録情報は通知目的のみに利用します。詳細は［プライバシーポリシー］をご確認ください。</div>
          </div>
          <div className="w-full max-w-[600px] h-auto flex flex-col md:flex-row justify-start items-start gap-3">
            <div className="flex-1 w-full px-4 py-3 bg-[#fbfdfd] rounded-lg outline outline-[1.50px] outline-offset-[-1.50px] outline-black/0 flex justify-start items-center gap-2">
              <input className="flex-1 bg-transparent text-[#132a2e] text-lg md:text-xl font-normal font-['Public_Sans'] placeholder:text-[#132a2e]/40 outline-none" placeholder="Enter your email" />
            </div>
            <div className="w-full md:w-auto px-6 py-3 bg-[#f6e076] rounded-lg flex justify-center items-center cursor-pointer hover:bg-[#f6e076]/90 transition-colors">
              <div className="text-[#010303] text-lg md:text-xl font-normal font-['Inter']">参加する</div>
            </div>
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

