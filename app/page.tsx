export default function Home() {
  return (
    <main className="flex-1 flex flex-col p-2.5 sm:p-3.5 space-y-3 w-full min-w-0 max-w-[1600px] mx-auto">
      {/* BEGIN: TopHeader */}
      <header className="relative bg-white rounded-xl shadow-sm border border-slate-200/80 px-3.5 sm:px-4 py-2.5 sm:py-2 flex flex-col sm:flex-row sm:items-center justify-between gap-2 overflow-hidden flex-shrink-0">
        {/* Background Silhouette Skyline / Landmark Watermark */}
        <div className="hidden md:flex absolute right-16 sm:right-24 -bottom-1.5 sm:-bottom-2 top-0 opacity-25 pointer-events-none items-end">
          <img
            src="/assets/Blue Monument Skyline in Misty Clouds.png"
            alt="Landmark Pekalongan"
            className="h-28 md:h-32 lg:h-36 w-auto max-w-none object-contain object-bottom"
          />
        </div>
        {/* Left Title */}
        <div className="z-10 flex items-center">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-[#0b224e] tracking-tight leading-tight">
              Dashboard Pneumonia Balita
            </h2>
            <h3 className="text-xs sm:text-base font-bold text-[#0b224e] mt-0.5">
              Kabupaten Pekalongan – Tahun 2024
            </h3>
          </div>
        </div>
        {/* Right Year Filter Selector */}
        <div className="relative inline-flex items-center sm:mt-0 z-10 self-end sm:self-auto">
          <svg
            className="pointer-events-none absolute left-3 w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-700 z-10"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
          <select
            id="year-filter"
            aria-label="Pilih Tahun"
            defaultValue="2024"
            className="appearance-none bg-slate-50 hover:bg-slate-100 border border-slate-300 pl-8 sm:pl-9 pr-8 py-1 sm:py-1.5 rounded-lg text-xs font-semibold text-slate-700 cursor-pointer shadow-sm transition focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            style={{ backgroundImage: "none" }}
          >
            <option value="2024">Tahun: 2024</option>
          </select>
          <svg
            className="pointer-events-none absolute right-2.5 w-3.5 h-3.5 text-slate-500 z-10"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </header>
      {/* END: TopHeader */}

      {/* BEGIN: MetricCardsRow */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 flex-shrink-0" data-purpose="kpi-metrics-row">
        {/* Card 1: Jumlah Balita */}
        <div className="bg-[#e8f2fe] border border-blue-200/70 rounded-xl p-3 sm:p-3.5 flex items-center space-x-3.5 shadow-xs">
          <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-xs flex-shrink-0">
            <img src="/assets/01_icon_bayi.png" alt="Jumlah Balita" className="w-10 h-10 object-contain" />
          </div>
          <div className="min-w-0">
            <p className="text-xs sm:text-[13px] font-bold text-slate-700 leading-snug">Jumlah Balita</p>
            <div className="text-2xl sm:text-[28px] font-black text-[#0b224e] tracking-tight mt-0.5 leading-none">99.625</div>
            <span className="text-xs font-semibold text-slate-500 block mt-0.5">jiwa</span>
          </div>
        </div>

        {/* Card 2: Kasus Pneumonia */}
        <div className="bg-[#fdeeed] border border-rose-200/70 rounded-xl p-3 sm:p-3.5 flex items-center space-x-3.5 shadow-xs">
          <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-xs flex-shrink-0">
            <img src="/assets/02_icon_virus_pneumonia.png" alt="Kasus Pneumonia" className="w-10 h-10 object-contain" />
          </div>
          <div className="min-w-0">
            <p className="text-xs sm:text-[13px] font-bold text-slate-700 leading-snug">Kasus Pneumonia</p>
            <div className="text-2xl sm:text-[28px] font-black text-[#0b224e] tracking-tight mt-0.5 leading-none">669</div>
            <span className="text-[11px] sm:text-xs font-semibold text-rose-700 block mt-0.5">(0,67% dari jumlah balita)</span>
          </div>
        </div>

        {/* Card 3: Jumlah Kematian */}
        <div className="bg-[#f1eafb] border border-purple-200/70 rounded-xl p-3 sm:p-3.5 flex items-center space-x-3.5 shadow-xs">
          <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-xs flex-shrink-0">
            <img src="/assets/03_icon_kematian.png" alt="Jumlah Kematian" className="w-10 h-10 object-contain" />
          </div>
          <div className="min-w-0">
            <p className="text-xs sm:text-[13px] font-bold text-slate-700 leading-snug">Jumlah Kematian</p>
            <div className="text-2xl sm:text-[28px] font-black text-[#0b224e] tracking-tight mt-0.5 leading-none">11</div>
            <span className="text-[11px] sm:text-xs font-semibold text-purple-700 block mt-0.5">(CFR 1,64%)</span>
          </div>
        </div>

        {/* Card 4: Cakupan IDL 2024 */}
        <div className="bg-[#e8f7ee] border border-emerald-200/70 rounded-xl p-3 sm:p-3.5 flex items-center space-x-3.5 shadow-xs">
          <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-xs flex-shrink-0">
            <img src="/assets/04_icon_perlindungan_idl.png" alt="Cakupan IDL 2024" className="w-10 h-10 object-contain" />
          </div>
          <div className="min-w-0">
            <p className="text-xs sm:text-[13px] font-bold text-slate-700 leading-snug">Cakupan IDL 2024</p>
            <div className="text-2xl sm:text-[28px] font-black text-[#0b224e] tracking-tight mt-0.5 leading-none">101,5%</div>
            <span className="text-[11px] sm:text-xs font-semibold text-emerald-700 block mt-0.5">(Target ≥100%)</span>
          </div>
        </div>
      </section>
      {/* END: MetricCardsRow */}

      {/* BEGIN: DataRowOne (3 Cards) */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 flex-shrink-0" data-purpose="middle-charts-row">
        {/* Card 1: Perbandingan Kasus Pneumonia */}
        <article className="bg-white rounded-xl shadow-sm border border-slate-200/90 overflow-hidden flex flex-col">
          <header className="bg-[#0b224e] px-4 py-2.5">
            <h4 className="text-xs sm:text-sm font-bold text-white tracking-wide">Perbandingan Kasus Pneumonia</h4>
          </header>
          <div className="p-3.5 sm:p-4 flex-1 flex flex-col justify-end">
            <div className="h-44 sm:h-48 w-full flex items-end relative border-b border-slate-300">
              {/* Y Axis Grid & Labels */}
              <div className="absolute left-0 inset-y-0 w-12 flex flex-col justify-between text-xs text-slate-500 font-bold pr-1">
                <span>15.000</span>
                <span>10.000</span>
                <span>5.000</span>
                <span>0</span>
              </div>
              {/* Y Axis Dotted Gridlines */}
              <div className="absolute left-12 right-0 inset-y-0 flex flex-col justify-between pointer-events-none">
                <div className="border-b border-slate-100 w-full"></div>
                <div className="border-b border-slate-100 w-full"></div>
                <div className="border-b border-slate-100 w-full"></div>
                <div className="border-b border-transparent w-full"></div>
              </div>
              {/* Chart Bars Container */}
              <div className="ml-12 w-full h-full flex items-end justify-around px-4 z-10">
                {/* Bar 1: Pekalongan (669) */}
                <div className="flex flex-col items-center group w-1/3">
                  <span className="text-xs sm:text-sm font-extrabold text-[#0b224e] mb-1.5">669</span>
                  <div className="w-14 sm:w-16 bg-[#2563eb] rounded-t-md shadow-xs" style={{ height: "14px" }}></div>
                </div>
                {/* Bar 2: Pemalang (13.768) */}
                <div className="flex flex-col items-center group w-1/3">
                  <span className="text-xs sm:text-sm font-extrabold text-[#0b224e] mb-1.5">13.768</span>
                  <div className="w-14 sm:w-16 bg-[#2563eb] rounded-t-md shadow-xs" style={{ height: "140px" }}></div>
                </div>
              </div>
            </div>
            {/* X-Axis Labels */}
            <div className="ml-12 flex justify-around text-center pt-2">
              <span className="w-1/2 text-xs sm:text-[13px] font-bold text-slate-800 leading-snug">Kabupaten Pekalongan</span>
              <span className="w-1/2 text-xs sm:text-[13px] font-bold text-slate-800 leading-snug">Kabupaten Pemalang</span>
            </div>
          </div>
        </article>

        {/* Card 2: Peta Persebaran Penduduk per Kecamatan */}
        <article className="bg-white rounded-xl shadow-sm border border-slate-200/90 overflow-hidden flex flex-col">
          <header className="bg-[#0b224e] px-4 py-2.5">
            <h4 className="text-xs sm:text-sm font-bold text-white tracking-wide leading-tight">
              Peta Persebaran Penduduk per Kecamatan (Kabupaten Pekalongan)
            </h4>
          </header>
          <div className="p-3.5 sm:p-4 flex-1 flex flex-row items-center justify-between gap-2">
            {/* Choropleth Map Polygonal Representation */}
            <div className="w-3/5 h-44 sm:h-48 flex items-center justify-center">
              <svg className="w-full h-full drop-shadow-sm" viewBox="0 0 200 200">
                <polygon fill="#0d3b82" points="60,20 90,15 110,35 85,45 65,35" stroke="#ffffff" strokeWidth="1.5"></polygon>
                <polygon fill="#1d4ed8" points="110,35 140,25 155,50 130,65 85,45" stroke="#ffffff" strokeWidth="1.5"></polygon>
                <polygon fill="#3b82f6" points="40,45 65,35 85,45 75,75 45,70" stroke="#ffffff" strokeWidth="1.5"></polygon>
                <polygon fill="#1e40af" points="85,45 130,65 115,95 75,75" stroke="#ffffff" strokeWidth="1.5"></polygon>
                <polygon fill="#60a5fa" points="130,65 165,55 175,85 140,105 115,95" stroke="#ffffff" strokeWidth="1.5"></polygon>
                <polygon fill="#93c5fd" points="30,75 75,75 65,110 25,100" stroke="#ffffff" strokeWidth="1.5"></polygon>
                <polygon fill="#1e3a8a" points="75,75 115,95 105,125 65,110" stroke="#ffffff" strokeWidth="1.5"></polygon>
                <polygon fill="#3b82f6" points="115,95 140,105 130,135 95,130 105,125" stroke="#ffffff" strokeWidth="1.5"></polygon>
                <polygon fill="#93c5fd" points="140,105 175,85 180,120 150,140 130,135" stroke="#ffffff" strokeWidth="1.5"></polygon>
                <polygon fill="#60a5fa" points="25,100 65,110 55,145 20,135" stroke="#ffffff" strokeWidth="1.5"></polygon>
                <polygon fill="#2563eb" points="65,110 105,125 90,165 50,155 55,145" stroke="#ffffff" strokeWidth="1.5"></polygon>
                <polygon fill="#1e40af" points="95,130 130,135 120,170 85,165" stroke="#ffffff" strokeWidth="1.5"></polygon>
                <polygon fill="#60a5fa" points="50,155 90,165 75,190 40,180" stroke="#ffffff" strokeWidth="1.5"></polygon>
                <polygon fill="#93c5fd" points="90,165 120,170 110,192 75,190" stroke="#ffffff" strokeWidth="1.5"></polygon>
              </svg>
            </div>
            {/* Legend */}
            <div className="w-2/5 pl-1.5 space-y-2">
              <span className="font-bold text-[#0b224e] block text-xs sm:text-sm mb-1.5 tracking-tight">Jumlah Penduduk</span>
              <div className="flex items-center space-x-2">
                <span className="w-3.5 h-3.5 bg-[#0d3b82] rounded-xs flex-shrink-0 shadow-2xs"></span>
                <span className="text-[11px] sm:text-xs font-semibold text-slate-700">≥ 80.000</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-3.5 h-3.5 bg-[#2563eb] rounded-xs flex-shrink-0 shadow-2xs"></span>
                <span className="text-[11px] sm:text-xs font-semibold text-slate-700">60k – 80k</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-3.5 h-3.5 bg-[#60a5fa] rounded-xs flex-shrink-0 shadow-2xs"></span>
                <span className="text-[11px] sm:text-xs font-semibold text-slate-700">40k – 60k</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-3.5 h-3.5 bg-[#bfdbfe] rounded-xs flex-shrink-0 shadow-2xs"></span>
                <span className="text-[11px] sm:text-xs font-semibold text-slate-700">&lt; 40.000</span>
              </div>
            </div>
          </div>
        </article>

        {/* Card 3: Komposisi Penduduk */}
        <article className="bg-white rounded-xl border border-slate-200/90 shadow-sm overflow-hidden flex flex-col">
          <header className="bg-[#0b224e] px-4 py-2.5">
            <h4 className="text-xs sm:text-sm font-bold text-white tracking-wide">Komposisi Penduduk</h4>
          </header>
          <div className="p-3.5 sm:p-4 flex-1 flex flex-row items-center justify-between space-x-2">
            {/* Gender Donut Chart */}
            <div className="w-1/2 flex flex-col items-center">
              <div className="relative w-24 sm:w-28 h-24 sm:h-28 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                  {/* Pink Segment (Perempuan 49.17%) */}
                  <circle
                    cx="18"
                    cy="18"
                    fill="none"
                    r="14"
                    stroke="#f87171"
                    strokeDasharray="49.17 100"
                    strokeDashoffset="0"
                    strokeWidth="4.8"
                  ></circle>
                  {/* Blue Segment (Laki-laki 50.83%) */}
                  <circle
                    cx="18"
                    cy="18"
                    fill="none"
                    r="14"
                    stroke="#2563eb"
                    strokeDasharray="50.83 100"
                    strokeDashoffset="-49.17"
                    strokeWidth="4.8"
                  ></circle>
                </svg>
                {/* Center Text in Donut */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <span className="text-xs sm:text-sm font-extrabold text-slate-900 leading-none">50,83%</span>
                  <span className="text-[9px] sm:text-[10px] text-slate-500 font-bold mt-0.5">Laki-laki</span>
                </div>
              </div>
              {/* Gender Legend */}
              <div className="mt-2 text-xs space-y-1 w-full max-w-[130px]">
                <div className="flex items-center justify-between text-[11px]">
                  <div className="flex items-center space-x-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#2563eb] flex-shrink-0"></span>
                    <span className="text-slate-700 font-medium">Laki-laki</span>
                  </div>
                  <span className="font-extrabold text-slate-900">50,8%</span>
                </div>
                <div className="flex items-center justify-between text-[11px]">
                  <div className="flex items-center space-x-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#f87171] flex-shrink-0"></span>
                    <span className="text-slate-700 font-medium">Perempuan</span>
                  </div>
                  <span className="font-extrabold text-slate-900">49,2%</span>
                </div>
              </div>
            </div>
            {/* Age Brackets Redesign (Clean Horizontal Bars) */}
            <div className="w-1/2 flex flex-col justify-between pl-3 border-l border-slate-100 h-full">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs sm:text-sm font-bold text-[#0b224e]">Kelompok Umur</span>
                <span className="text-[10px] text-slate-400 font-semibold">(Tahun)</span>
              </div>
              <div className="space-y-2 flex-1 flex flex-col justify-center py-1">
                {/* 0-4 thn */}
                <div>
                  <div className="flex justify-between items-center text-xs mb-0.5">
                    <span className="font-bold text-blue-900 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                      0–4 thn
                      <span className="text-[10px] bg-blue-100 text-blue-800 px-1.5 py-0.2 rounded font-bold">Balita</span>
                    </span>
                    <span className="font-extrabold text-blue-900 tabular-nums">6,8%</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                    <div className="bg-blue-600 h-full rounded-full transition-all duration-300" style={{ width: "12.7%" }}></div>
                  </div>
                </div>

                {/* 5-14 thn */}
                <div>
                  <div className="flex justify-between items-center text-xs mb-0.5">
                    <span className="font-medium text-slate-700 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-slate-300"></span>
                      5–14 thn
                    </span>
                    <span className="font-bold text-slate-800 tabular-nums">16,8%</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                    <div className="bg-blue-400 h-full rounded-full transition-all duration-300" style={{ width: "31.5%" }}></div>
                  </div>
                </div>

                {/* 15-19 thn */}
                <div>
                  <div className="flex justify-between items-center text-xs mb-0.5">
                    <span className="font-medium text-slate-700 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-slate-300"></span>
                      15–19 thn
                    </span>
                    <span className="font-bold text-slate-800 tabular-nums">14,6%</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                    <div className="bg-blue-400 h-full rounded-full transition-all duration-300" style={{ width: "27.3%" }}></div>
                  </div>
                </div>

                {/* 20-59 thn */}
                <div>
                  <div className="flex justify-between items-center text-xs mb-0.5">
                    <span className="font-medium text-slate-700 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-slate-300"></span>
                      20–59 thn
                    </span>
                    <span className="font-bold text-slate-800 tabular-nums">53,4%</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                    <div className="bg-blue-500 h-full rounded-full transition-all duration-300" style={{ width: "100%" }}></div>
                  </div>
                </div>

                {/* ≥60 thn */}
                <div>
                  <div className="flex justify-between items-center text-xs mb-0.5">
                    <span className="font-medium text-slate-700 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-slate-300"></span>
                      ≥ 60 thn
                    </span>
                    <span className="font-bold text-slate-800 tabular-nums">8,4%</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                    <div className="bg-blue-400 h-full rounded-full transition-all duration-300" style={{ width: "15.7%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
      {/* END: DataRowOne */}

      {/* BEGIN: DataRowTwo (3 Cards) */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 flex-shrink-0" data-purpose="bottom-charts-row">
        {/* Card 1: Tren Cakupan Imunisasi Dasar Lengkap (IDL) */}
        <article className="bg-white rounded-xl shadow-sm border border-slate-200/90 overflow-hidden flex flex-col">
          <header className="bg-[#0b224e] px-4 py-2.5">
            <h4 className="text-xs sm:text-sm font-bold text-white tracking-wide">Tren Cakupan Imunisasi Dasar Lengkap (IDL)</h4>
          </header>
          <div className="p-3.5 sm:p-4 flex-1 flex flex-col justify-between">
            <div className="relative h-44 sm:h-48 w-full flex items-end">
              {/* Y-Axis Labels */}
              <div className="w-10 sm:w-11 h-full flex flex-col justify-between text-[11px] sm:text-xs text-slate-500 font-bold pr-1">
                <span>125%</span>
                <span>100%</span>
                <span>75%</span>
                <span>50%</span>
                <span>25%</span>
                <span>0%</span>
              </div>
              {/* Chart Graph Area */}
              <div className="relative flex-1 h-full border-b border-l border-slate-200">
                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-40">
                  <div className="border-b border-slate-200 w-full"></div>
                  <div className="border-b border-emerald-400 border-dashed w-full"></div>
                  <div className="border-b border-slate-200 w-full"></div>
                  <div className="border-b border-slate-200 w-full"></div>
                  <div className="border-b border-slate-200 w-full"></div>
                  <div className="w-full"></div>
                </div>
                {/* Line Chart SVG Path */}
                <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 300 150">
                  <line stroke="#10b981" strokeDasharray="5 4" strokeWidth="2" x1="10" x2="290" y1="30" y2="30"></line>
                  <polyline
                    fill="none"
                    points="25,72 105,14 195,30 275,28"
                    stroke="#2563eb"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                  ></polyline>
                  <circle cx="25" cy="72" fill="#ffffff" r="4.5" stroke="#2563eb" strokeWidth="2.5"></circle>
                  <text fill="#0b224e" fontSize="10" fontWeight="800" textAnchor="middle" x="25" y="58">65,4%</text>
                  <circle cx="105" cy="14" fill="#ffffff" r="4.5" stroke="#2563eb" strokeWidth="2.5"></circle>
                  <text fill="#0b224e" fontSize="10" fontWeight="800" textAnchor="middle" x="105" y="6">113,3%</text>
                  <circle cx="195" cy="30" fill="#ffffff" r="4.5" stroke="#2563eb" strokeWidth="2.5"></circle>
                  <text fill="#0b224e" fontSize="10" fontWeight="800" textAnchor="middle" x="195" y="18">100,3%</text>
                  <circle cx="275" cy="28" fill="#ffffff" r="4.5" stroke="#2563eb" strokeWidth="2.5"></circle>
                  <text fill="#0b224e" fontSize="10" fontWeight="800" textAnchor="middle" x="275" y="16">101,5%</text>
                </svg>
              </div>
            </div>
            {/* X-Axis Year Labels */}
            <div className="ml-10 sm:ml-11 flex justify-around text-xs font-bold text-slate-700 pt-2">
              <span>2021</span>
              <span>2022</span>
              <span>2023</span>
              <span>2024</span>
            </div>
            {/* Chart Legend */}
            <div className="flex items-center justify-center space-x-4 pt-2 text-[11px] sm:text-xs">
              <div className="flex items-center space-x-1.5">
                <span className="w-3.5 h-0.5 bg-[#2563eb] inline-block relative">
                  <span className="w-1.5 h-1.5 rounded-full border border-[#2563eb] bg-white absolute -top-0.5 left-1"></span>
                </span>
                <span className="text-slate-700 font-semibold">Cakupan IDL</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <span className="w-3.5 border-b-2 border-dashed border-emerald-500 inline-block"></span>
                <span className="text-slate-700 font-semibold">Target (≥100%)</span>
              </div>
            </div>
          </div>
        </article>

        {/* Card 2: Data per Kecamatan (Table) */}
        <article className="bg-white rounded-xl shadow-sm border border-slate-200/90 overflow-hidden flex flex-col">
          <header className="bg-[#0b224e] px-4 py-2.5">
            <h4 className="text-xs sm:text-sm font-bold text-white tracking-wide">Data per Kecamatan</h4>
          </header>
          <div className="p-2.5 sm:p-3 flex-1 overflow-x-auto w-full">
            <table className="w-full min-w-[260px] text-left text-xs border-collapse tabular-nums" data-purpose="subdistrict-table">
              <thead>
                <tr className="bg-[#0b224e] text-white">
                  <th className="py-1.5 px-2 font-bold text-center border-r border-blue-900 w-8">No</th>
                  <th className="py-1.5 px-2.5 font-bold border-r border-blue-900">Kecamatan</th>
                  <th className="py-1.5 px-2 font-bold text-right border-r border-blue-900">Penduduk</th>
                  <th className="py-1.5 px-2 font-bold text-right border-r border-blue-900">RT</th>
                  <th className="py-1.5 px-2 font-bold text-center">Rata/RT</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700 font-medium">
                <tr className="hover:bg-blue-50/40 transition">
                  <td className="py-1 px-2 text-center border-r border-slate-200 font-bold text-slate-500">1</td>
                  <td className="py-1 px-2.5 border-r border-slate-200 font-bold text-slate-800">Kandangserang</td>
                  <td className="py-1 px-2 text-right border-r border-slate-200 font-semibold text-slate-700">37.423</td>
                  <td className="py-1 px-2 text-right border-r border-slate-200 font-semibold text-slate-700">11.209</td>
                  <td className="py-1 px-2 text-center font-semibold text-slate-700">3,34</td>
                </tr>
                <tr className="hover:bg-blue-50/40 transition bg-slate-50/70">
                  <td className="py-1 px-2 text-center border-r border-slate-200 font-bold text-slate-500">2</td>
                  <td className="py-1 px-2.5 border-r border-slate-200 font-bold text-slate-800">Paninggaran</td>
                  <td className="py-1 px-2 text-right border-r border-slate-200 font-semibold text-slate-700">44.314</td>
                  <td className="py-1 px-2 text-right border-r border-slate-200 font-semibold text-slate-700">12.963</td>
                  <td className="py-1 px-2 text-center font-semibold text-slate-700">3,42</td>
                </tr>
                <tr className="hover:bg-blue-50/40 transition">
                  <td className="py-1 px-2 text-center border-r border-slate-200 font-bold text-slate-500">3</td>
                  <td className="py-1 px-2.5 border-r border-slate-200 font-bold text-slate-800">Lebakbarang</td>
                  <td className="py-1 px-2 text-right border-r border-slate-200 font-semibold text-slate-700">11.602</td>
                  <td className="py-1 px-2 text-right border-r border-slate-200 font-semibold text-slate-700">3.676</td>
                  <td className="py-1 px-2 text-center font-semibold text-slate-700">3,16</td>
                </tr>
                <tr className="hover:bg-blue-50/40 transition bg-slate-50/70">
                  <td className="py-1 px-2 text-center border-r border-slate-200 font-bold text-slate-500">4</td>
                  <td className="py-1 px-2.5 border-r border-slate-200 font-bold text-slate-800">Petungkriyono</td>
                  <td className="py-1 px-2 text-right border-r border-slate-200 font-semibold text-slate-700">13.635</td>
                  <td className="py-1 px-2 text-right border-r border-slate-200 font-semibold text-slate-700">4.444</td>
                  <td className="py-1 px-2 text-center font-semibold text-slate-700">3,07</td>
                </tr>
                <tr className="hover:bg-blue-50/40 transition">
                  <td className="py-1 px-2 text-center border-r border-slate-200 font-bold text-slate-500">5</td>
                  <td className="py-1 px-2.5 border-r border-slate-200 font-bold text-slate-800">Talun</td>
                  <td className="py-1 px-2 text-right border-r border-slate-200 font-semibold text-slate-700">32.542</td>
                  <td className="py-1 px-2 text-right border-r border-slate-200 font-semibold text-slate-700">10.518</td>
                  <td className="py-1 px-2 text-center font-semibold text-slate-700">3,10</td>
                </tr>
              </tbody>
              <tfoot>
                <tr className="bg-blue-100/70 font-extrabold text-slate-900 border-t-2 border-slate-300">
                  <td className="py-1.5 px-2.5 text-left border-r border-slate-300 font-black text-[#0b224e]" colSpan={2}>
                    Total
                  </td>
                  <td className="py-1.5 px-2 text-right border-r border-slate-300 font-black text-[#0b224e]">1.026.546</td>
                  <td className="py-1.5 px-2 text-right border-r border-slate-300 font-black text-[#0b224e]">326.721</td>
                  <td className="py-1.5 px-2 text-center font-black text-[#0b224e]">3,14</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </article>

        {/* Card 3: Tenaga Kesehatan Tahun 2024 */}
        <article className="bg-white rounded-xl shadow-sm border border-slate-200/90 overflow-hidden flex flex-col">
          <header className="bg-[#0b224e] px-4 py-2.5">
            <h4 className="text-xs sm:text-sm font-bold text-white tracking-wide">Tenaga Kesehatan Tahun 2024</h4>
          </header>
          <div className="p-3.5 sm:p-4 flex-1 flex flex-col justify-between">
            <div className="space-y-2 pt-1">
              {/* Row 1: Perawat */}
              <div className="flex items-center">
                <span className="w-28 sm:w-32 text-right pr-2 text-xs font-bold text-slate-800 truncate">Perawat</span>
                <div className="flex-1 flex items-center">
                  <div className="bg-[#2563eb] h-3.5 sm:h-4 rounded-r-xs shadow-xs" style={{ width: "82%" }}></div>
                  <span className="text-xs font-extrabold text-[#0b224e] ml-1.5 sm:ml-2">1.011</span>
                </div>
              </div>
              {/* Row 2: Bidan */}
              <div className="flex items-center">
                <span className="w-28 sm:w-32 text-right pr-2 text-xs font-bold text-slate-800 truncate">Bidan</span>
                <div className="flex-1 flex items-center">
                  <div className="bg-[#2563eb] h-3.5 sm:h-4 rounded-r-xs shadow-xs" style={{ width: "60%" }}></div>
                  <span className="text-xs font-extrabold text-[#0b224e] ml-1.5 sm:ml-2">711</span>
                </div>
              </div>
              {/* Row 3: Dokter Umum */}
              <div className="flex items-center">
                <span className="w-28 sm:w-32 text-right pr-2 text-xs font-bold text-slate-800 truncate">Dokter Umum</span>
                <div className="flex-1 flex items-center">
                  <div className="bg-[#2563eb] h-3.5 sm:h-4 rounded-r-xs shadow-xs" style={{ width: "13%" }}></div>
                  <span className="text-xs font-extrabold text-[#0b224e] ml-1.5 sm:ml-2">135</span>
                </div>
              </div>
              {/* Row 4: Dokter Spesialis */}
              <div className="flex items-center">
                <span className="w-28 sm:w-32 text-right pr-2 text-xs font-bold text-slate-800 truncate">Dokter Spesialis</span>
                <div className="flex-1 flex items-center">
                  <div className="bg-[#2563eb] h-3.5 sm:h-4 rounded-r-xs shadow-xs" style={{ width: "12%" }}></div>
                  <span className="text-xs font-extrabold text-[#0b224e] ml-1.5 sm:ml-2">128</span>
                </div>
              </div>
              {/* Row 5: Tenaga Gizi */}
              <div className="flex items-center">
                <span className="w-28 sm:w-32 text-right pr-2 text-xs font-bold text-slate-800 truncate">Tenaga Gizi</span>
                <div className="flex-1 flex items-center">
                  <div className="bg-[#2563eb] h-3.5 sm:h-4 rounded-r-xs shadow-xs" style={{ width: "6%" }}></div>
                  <span className="text-xs font-extrabold text-[#0b224e] ml-1.5 sm:ml-2">58</span>
                </div>
              </div>
              {/* Row 6: Tenaga Kesehatan Lainnya */}
              <div className="flex items-center">
                <span className="w-28 sm:w-32 text-right pr-2 text-xs font-bold text-slate-800 truncate">Tenaga Lainnya</span>
                <div className="flex-1 flex items-center">
                  <div className="bg-[#2563eb] h-3.5 sm:h-4 rounded-r-xs shadow-xs" style={{ width: "48%" }}></div>
                  <span className="text-xs font-extrabold text-[#0b224e] ml-1.5 sm:ml-2">559</span>
                </div>
              </div>
            </div>
            {/* X-Axis Ruler Scale */}
            <div className="mt-2 pt-1 border-t border-slate-200 pl-28 sm:pl-32 flex justify-between text-[11px] text-slate-400 font-semibold">
              <span>0</span>
              <span>250</span>
              <span>500</span>
              <span>750</span>
              <span>1.000</span>
            </div>
          </div>
        </article>
      </section>
      {/* END: DataRowTwo */}

      {/* BEGIN: BottomInformationCards (3 Cards) */}
      <footer className="grid grid-cols-1 md:grid-cols-3 gap-2.5 flex-shrink-0" data-purpose="summary-footer-cards">
        {/* Card 1: Catatan Penting */}
        <div className="bg-[#fef9c3]/70 border border-amber-300/80 rounded-xl p-3 flex items-start space-x-3 shadow-xs">
          <div className="w-8 h-8 rounded-full bg-amber-400 text-white flex items-center justify-center font-black text-sm flex-shrink-0 mt-0.5 shadow-2xs">
            !
          </div>
          <div className="text-xs text-slate-800 flex-1">
            <h5 className="font-bold text-slate-900 mb-1 text-xs sm:text-[13px]">Catatan Penting</h5>
            <ul className="list-disc pl-4 space-y-1 leading-snug font-medium text-slate-700">
              <li>Data kasus pneumonia berasal dari Kabupaten Pekalongan dan Pemalang (wilayah berbeda).</li>
              <li>Angka cakupan imunisasi &gt;100% perlu diverifikasi dengan sumber asli.</li>
              <li>Data faktor risiko (paparan asap rokok, status gizi, BBLR, dll) masih belum tersedia.</li>
            </ul>
          </div>
        </div>

        {/* Card 2: Kesimpulan Singkat */}
        <div className="bg-[#ede9fe]/70 border border-purple-300/80 rounded-xl p-3 flex items-start space-x-3 shadow-xs">
          <div className="w-8 h-8 rounded-full bg-purple-200 text-purple-800 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-2xs">
            <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14H8a4 4 0 01-2.383-7.218 4.015 4.015 0 014.766 0A4 4 0 0112 14z"></path>
            </svg>
          </div>
          <div className="text-xs text-slate-800 flex-1">
            <h5 className="font-bold text-slate-900 mb-1 text-xs sm:text-[13px]">Kesimpulan Singkat</h5>
            <p className="leading-relaxed font-medium text-slate-700">
              Kasus pneumonia di Kabupaten Pekalongan tahun 2024 sebesar{" "}
              <strong className="font-bold text-slate-900">0,67%</strong> dari jumlah balita, dengan CFR{" "}
              <strong className="font-bold text-slate-900">1,64%</strong>. Cakupan imunisasi dasar lengkap sudah mencapai target,
              dan ketersediaan tenaga kesehatan cukup memadai.
            </p>
          </div>
        </div>

        {/* Card 3: Sumber Data */}
        <div className="bg-[#dcfce7]/70 border border-emerald-300/80 rounded-xl p-3 flex items-start space-x-3 shadow-xs">
          <div className="w-8 h-8 rounded-full bg-emerald-200 text-emerald-800 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-2xs">
            <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"></path>
            </svg>
          </div>
          <div className="text-xs text-slate-800 flex-1">
            <h5 className="font-bold text-slate-900 mb-1 text-xs sm:text-[13px]">Sumber Data</h5>
            <p className="leading-relaxed font-medium text-slate-700">
              <strong className="font-bold text-slate-900">Dinas Kesehatan Kabupaten Pekalongan, 2024</strong>
              <br />
              <span className="text-slate-600 text-[11px] font-normal">
                (Beserta data pembanding dari Jawa Barat, Jawa Tengah, dan sumber global).
              </span>
            </p>
          </div>
        </div>
      </footer>
      {/* END: BottomInformationCards */}
    </main>
  );
}
