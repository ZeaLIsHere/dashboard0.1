export default function KasusPneumoniaPage() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-background">
      {/* Top App Bar */}
      <header className="sticky top-0 right-0 z-30 w-full bg-surface-container-lowest border-b border-outline-variant/30 px-4 sm:px-6 py-3 flex flex-col sm:flex-row justify-between sm:items-center gap-3 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <h1 className="text-headline-md font-headline-md text-primary tracking-tight">Surveilans Kasus Pneumonia Balita</h1>
              <span className="px-2 py-0.5 rounded-full text-label-md font-label-md bg-secondary-fixed text-on-secondary-fixed border border-secondary-fixed-dim">
                Aktif Terverifikasi
              </span>
            </div>
            <p className="text-body-sm font-body-sm text-on-surface-variant">
              Kabupaten Pekalongan – Tahun 2024 • Data Terpadu Epidemiologi &amp; Intervensi MTBS
            </p>
          </div>
        </div>
        {/* Actions & Filter Clusters */}
        <div className="flex items-center gap-3 self-end sm:self-auto">
          <div className="relative">
            <button className="flex items-center gap-1.5 px-3 py-1.5 bg-surface-container-low border border-outline-variant/50 rounded-lg text-body-sm font-label-lg text-on-surface hover:bg-surface-container transition-colors">
              <span className="material-symbols-outlined text-secondary">filter_alt</span>
              <span>Filter Kecamatan: Semua</span>
              <span className="material-symbols-outlined text-outline">expand_more</span>
            </button>
          </div>
          <div className="relative">
            <button className="flex items-center gap-1.5 px-3 py-1.5 bg-primary-container text-surface-bright rounded-lg text-body-sm font-label-lg hover:bg-secondary transition-colors">
              <span className="material-symbols-outlined text-surface-bright">calendar_today</span>
              <span>Tahun 2024</span>
              <span className="material-symbols-outlined text-on-primary-container">expand_more</span>
            </button>
          </div>
          <div className="h-6 w-px bg-outline-variant/40 mx-1"></div>
          <button
            aria-label="Notifikasi Sistem"
            className="p-2 text-on-surface-variant hover:text-primary rounded-lg hover:bg-surface-container transition-colors relative"
          >
            <span className="material-symbols-outlined">notifications</span>
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-error rounded-full"></span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="w-full p-4 sm:p-6 space-y-6 flex-1">
        {/* Row 1: KPI Metric Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {/* Card 1 */}
          <div className="bg-[#FFF1F2] border border-[#FECDD3] rounded-xl p-4 flex flex-col justify-between shadow-sm relative overflow-hidden">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-label-md font-label-md uppercase tracking-wider text-[#9F1239]">Total Kasus Pneumonia</span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-metric-display font-metric-display text-[#881337] tabular-nums">669</span>
                  <span className="text-body-sm font-body-sm text-[#9F1239]">kasus balita</span>
                </div>
              </div>
              <div className="w-10 h-10 rounded-lg bg-[#FFE4E6] flex items-center justify-center text-[#BE123C]">
                <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  coronavirus
                </span>
              </div>
            </div>
            <div className="mt-3 pt-2.5 border-t border-[#FECDD3]/60 flex items-center justify-between text-body-sm">
              <span className="text-[#9F1239]">Insidensi: <strong className="tabular-nums">0,67%</strong> balita</span>
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#9F1239] bg-[#FFE4E6] px-2 py-0.5 rounded-full">
                <span className="material-symbols-outlined text-[13px]">trending_down</span> -4.1% vs 2023
              </span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#FFFBEB] border border-[#FDE68A] rounded-xl p-4 flex flex-col justify-between shadow-sm relative overflow-hidden">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-label-md font-label-md uppercase tracking-wider text-[#92400E]">Pneumonia Berat</span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-metric-display font-metric-display text-[#78350F] tabular-nums">48</span>
                  <span className="text-body-sm font-body-sm text-[#92400E]">balita</span>
                </div>
              </div>
              <div className="w-10 h-10 rounded-lg bg-[#FEF3C7] flex items-center justify-center text-[#D97706]">
                <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  emergency
                </span>
              </div>
            </div>
            <div className="mt-3 pt-2.5 border-t border-[#FDE68A]/60 flex items-center justify-between text-body-sm">
              <span className="text-[#92400E]">Proporsi: <strong className="tabular-nums">7,17%</strong> total kasus</span>
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#92400E] bg-[#FEF3C7] px-2 py-0.5 rounded-full">
                Rujuk RSUD Kraton &amp; Kajen
              </span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#FAF5FF] border border-[#E9D5FF] rounded-xl p-4 flex flex-col justify-between shadow-sm relative overflow-hidden">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-label-md font-label-md uppercase tracking-wider text-[#6B21A8]">Kematian Balita (CFR)</span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-metric-display font-metric-display text-[#581C87] tabular-nums">11</span>
                  <span className="text-body-sm font-body-sm text-[#6B21A8]">jiwa balita</span>
                </div>
              </div>
              <div className="w-10 h-10 rounded-lg bg-[#F3E8FF] flex items-center justify-center text-[#9333EA]">
                <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  heart_broken
                </span>
              </div>
            </div>
            <div className="mt-3 pt-2.5 border-t border-[#E9D5FF]/60 flex items-center justify-between text-body-sm">
              <span className="text-[#6B21A8]">CFR: <strong className="tabular-nums">1,64%</strong> kasus</span>
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#6B21A8] bg-[#F3E8FF] px-2 py-0.5 rounded-full">
                Target Nasional &lt; 1%
              </span>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-xl p-4 flex flex-col justify-between shadow-sm relative overflow-hidden">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-label-md font-label-md uppercase tracking-wider text-[#166534]">Tingkat Kesembuhan</span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-metric-display font-metric-display text-[#14532D] tabular-nums">610</span>
                  <span className="text-body-sm font-body-sm text-[#166534]">sembuh tuntas</span>
                </div>
              </div>
              <div className="w-10 h-10 rounded-lg bg-[#DCFCE7] flex items-center justify-center text-[#16A34A]">
                <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  check_circle
                </span>
              </div>
            </div>
            <div className="mt-3 pt-2.5 border-t border-[#BBF7D0]/60 flex items-center justify-between text-body-sm">
              <span className="text-[#166534]">Recovery Rate: <strong className="tabular-nums">91,19%</strong></span>
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#166534] bg-[#DCFCE7] px-2 py-0.5 rounded-full">
                Terkendali &amp; Terpantau
              </span>
            </div>
          </div>
        </section>

        {/* Row 2: Widescreen Visualizations */}
        <section className="grid grid-cols-12 gap-5">
          {/* Panel A: Tren Bulanan */}
          <div className="col-span-12 xl:col-span-8 bg-surface-container-lowest border border-outline-variant/30 rounded-xl p-5 shadow-sm flex flex-col justify-between">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-outline-variant/20">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-6 bg-primary-container rounded-sm"></span>
                <div>
                  <h2 className="text-title-lg font-title-lg text-primary">Tren Kasus Pneumonia Bulanan (Jan – Des 2024)</h2>
                  <p className="text-body-sm font-body-sm text-on-surface-variant">Pola lonjakan insidensi bertepatan dengan musim hujan dan kelembapan tinggi</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1.5 text-body-sm text-on-surface-variant">
                  <span className="w-3 h-3 rounded-full bg-secondary"></span> Kasus Balita
                </span>
                <span className="flex items-center gap-1.5 text-body-sm text-on-surface-variant">
                  <span className="w-3 h-1 bg-error rounded-full"></span> Batas Waspada
                </span>
              </div>
            </div>

            <div className="w-full pt-4 pb-2 overflow-x-auto">
              <svg className="w-full min-w-[600px] h-52 overflow-visible" viewBox="0 0 740 210">
                <line stroke="#E2E8F0" strokeDasharray="3 3" x1="40" x2="720" y1="20" y2="20"></line>
                <line stroke="#E2E8F0" strokeDasharray="3 3" x1="40" x2="720" y1="65" y2="65"></line>
                <line stroke="#E2E8F0" strokeDasharray="3 3" x1="40" x2="720" y1="110" y2="110"></line>
                <line stroke="#CBD5E1" x1="40" x2="720" y1="155" y2="155"></line>

                <text className="text-[11px] fill-slate-400 font-medium" textAnchor="end" x="30" y="24">90</text>
                <text className="text-[11px] fill-slate-400 font-medium" textAnchor="end" x="30" y="69">60</text>
                <text className="text-[11px] fill-slate-400 font-medium" textAnchor="end" x="30" y="114">30</text>
                <text className="text-[11px] fill-slate-400 font-medium" textAnchor="end" x="30" y="159">0</text>

                <line stroke="#F43F5E" strokeDasharray="4 4" strokeWidth="1.5" x1="40" x2="720" y1="50" y2="50"></line>
                <text className="text-[10px] fill-rose-600 font-semibold" textAnchor="end" x="715" y="44">Batas Waspada Epidemi (70 kasus)</text>

                <defs>
                  <linearGradient id="pneumoniaTrendGrad" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#385CA6" stopOpacity="0.25"></stop>
                    <stop offset="100%" stopColor="#385CA6" stopOpacity="0.0"></stop>
                  </linearGradient>
                </defs>
                <path d="M 60 115 L 120 78 L 180 52 L 240 68 L 300 110 L 360 130 L 420 125 L 480 118 L 540 85 L 600 58 L 660 48 L 710 75 L 710 155 L 60 155 Z" fill="url(#pneumoniaTrendGrad)"></path>
                <path d="M 60 115 L 120 78 L 180 52 L 240 68 L 300 110 L 360 130 L 420 125 L 480 118 L 540 85 L 600 58 L 660 48 L 710 75" fill="none" stroke="#133E87" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path>

                {/* Nodes */}
                <circle cx="60" cy="115" fill="#FFFFFF" r="4" stroke="#133E87" strokeWidth="2"></circle>
                <text className="text-[10px] font-bold fill-slate-700" textAnchor="middle" x="60" y="105">32</text>
                <text className="text-[11px] fill-slate-500 font-medium" textAnchor="middle" x="60" y="173">Jan</text>

                <circle cx="120" cy="78" fill="#FFFFFF" r="4" stroke="#133E87" strokeWidth="2"></circle>
                <text className="text-[10px] font-bold fill-slate-700" textAnchor="middle" x="120" y="68">58</text>
                <text className="text-[11px] fill-slate-500 font-medium" textAnchor="middle" x="120" y="173">Feb</text>

                <circle cx="180" cy="52" fill="#DC2626" r="5" stroke="#FFFFFF" strokeWidth="2"></circle>
                <text className="text-[11px] font-bold fill-rose-700" textAnchor="middle" x="180" y="42">76 (Peak)</text>
                <text className="text-[11px] fill-slate-900 font-bold" textAnchor="middle" x="180" y="173">Mar</text>

                <circle cx="240" cy="68" fill="#FFFFFF" r="4" stroke="#133E87" strokeWidth="2"></circle>
                <text className="text-[10px] font-bold fill-slate-700" textAnchor="middle" x="240" y="58">64</text>
                <text className="text-[11px] fill-slate-500 font-medium" textAnchor="middle" x="240" y="173">Apr</text>

                <circle cx="300" cy="110" fill="#FFFFFF" r="4" stroke="#133E87" strokeWidth="2"></circle>
                <text className="text-[10px] font-bold fill-slate-700" textAnchor="middle" x="300" y="100">35</text>
                <text className="text-[11px] fill-slate-500 font-medium" textAnchor="middle" x="300" y="173">Mei</text>

                <circle cx="360" cy="130" fill="#FFFFFF" r="4" stroke="#133E87" strokeWidth="2"></circle>
                <text className="text-[10px] font-bold fill-slate-700" textAnchor="middle" x="360" y="120">24</text>
                <text className="text-[11px] fill-slate-500 font-medium" textAnchor="middle" x="360" y="173">Jun</text>

                <circle cx="420" cy="125" fill="#FFFFFF" r="4" stroke="#133E87" strokeWidth="2"></circle>
                <text className="text-[10px] font-bold fill-slate-700" textAnchor="middle" x="420" y="115">28</text>
                <text className="text-[11px] fill-slate-500 font-medium" textAnchor="middle" x="420" y="173">Jul</text>

                <circle cx="480" cy="118" fill="#FFFFFF" r="4" stroke="#133E87" strokeWidth="2"></circle>
                <text className="text-[10px] font-bold fill-slate-700" textAnchor="middle" x="480" y="108">31</text>
                <text className="text-[11px] fill-slate-500 font-medium" textAnchor="middle" x="480" y="173">Agu</text>

                <circle cx="540" cy="85" fill="#FFFFFF" r="4" stroke="#133E87" strokeWidth="2"></circle>
                <text className="text-[10px] font-bold fill-slate-700" textAnchor="middle" x="540" y="75">54</text>
                <text className="text-[11px] fill-slate-500 font-medium" textAnchor="middle" x="540" y="173">Sep</text>

                <circle cx="600" cy="58" fill="#FFFFFF" r="4" stroke="#133E87" strokeWidth="2"></circle>
                <text className="text-[10px] font-bold fill-slate-700" textAnchor="middle" x="600" y="48">72</text>
                <text className="text-[11px] fill-slate-500 font-medium" textAnchor="middle" x="600" y="173">Okt</text>

                <circle cx="660" cy="48" fill="#DC2626" r="5" stroke="#FFFFFF" strokeWidth="2"></circle>
                <text className="text-[11px] font-bold fill-rose-700" textAnchor="middle" x="660" y="38">79 (Peak)</text>
                <text className="text-[11px] fill-slate-900 font-bold" textAnchor="middle" x="660" y="173">Nov</text>

                <circle cx="710" cy="75" fill="#FFFFFF" r="4" stroke="#133E87" strokeWidth="2"></circle>
                <text className="text-[10px] font-bold fill-slate-700" textAnchor="middle" x="710" y="65">60</text>
                <text className="text-[11px] fill-slate-500 font-medium" textAnchor="middle" x="710" y="173">Des</text>
              </svg>
            </div>

            <div className="bg-surface-container-low p-2.5 rounded-lg border border-outline-variant/30 flex items-center justify-between mt-2">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary">info</span>
                <span className="text-body-sm text-on-surface">Pola musiman menunjukkan kenaikan signifikan pada Maret (76) dan November (79). Edukasi dini disiagakan sejak Februari &amp; Oktober.</span>
              </div>
              <span className="text-label-md font-semibold text-primary">Kesiapan Nebulizer: 100%</span>
            </div>
          </div>

          {/* Panel B: Komparasi & Faktor Risiko */}
          <div className="col-span-12 xl:col-span-4 flex flex-col gap-5">
            <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-xl p-5 shadow-sm">
              <div className="flex items-center justify-between pb-3 border-b border-outline-variant/20">
                <h3 className="text-title-lg font-title-lg text-primary">Komparasi Wilayah Sekitar</h3>
                <span className="text-label-md text-on-surface-variant">Laporan Prov. Jateng 2024</span>
              </div>
              <div className="space-y-3.5 pt-4">
                <div>
                  <div className="flex justify-between items-center text-body-sm font-medium mb-1">
                    <span className="text-primary font-bold flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-secondary"></span> Kab. Pekalongan
                    </span>
                    <span className="tabular-nums font-bold text-primary">669 kasus</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
                    <div className="bg-secondary h-full rounded-full" style={{ width: "18%" }}></div>
                  </div>
                  <span className="text-[11px] text-slate-500">Skrining intensif terfokus di 27 Puskesmas</span>
                </div>

                <div>
                  <div className="flex justify-between items-center text-body-sm font-medium mb-1">
                    <span className="text-on-surface">Kab. Batang (Wilayah Timur)</span>
                    <span className="tabular-nums font-semibold text-on-surface">1.120 kasus</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
                    <div className="bg-slate-400 h-full rounded-full" style={{ width: "32%" }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center text-body-sm font-medium mb-1">
                    <span className="text-on-surface">Kab. Pemalang (Wilayah Barat)</span>
                    <span className="tabular-nums font-semibold text-rose-700">13.768 kasus</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
                    <div className="bg-rose-500 h-full rounded-full" style={{ width: "95%" }}></div>
                  </div>
                  <span className="text-[11px] text-rose-600 font-medium">Beban kasus regional sangat tinggi</span>
                </div>
              </div>
            </div>

            <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-xl p-5 shadow-sm">
              <div className="flex items-center justify-between pb-3 border-b border-outline-variant/20">
                <h3 className="text-title-lg font-title-lg text-primary">Faktor Risiko Dominan</h3>
                <span className="text-label-md text-secondary font-semibold">Analisis Etiologi</span>
              </div>
              <div className="space-y-3 pt-3">
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-rose-50/60 border border-rose-100">
                  <div className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-rose-600 text-xl">smoking_rooms</span>
                    <div>
                      <div className="text-body-sm font-semibold text-rose-950">Paparan Asap Rokok di Rumah</div>
                      <div className="text-[11px] text-rose-700">Perokok aktif anggota keluarga balita</div>
                    </div>
                  </div>
                  <span className="text-headline-md font-bold text-rose-700 tabular-nums">62%</span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-lg bg-amber-50/60 border border-amber-100">
                  <div className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-amber-600 text-xl">nutrition</span>
                    <div>
                      <div className="text-body-sm font-semibold text-amber-950">Status Gizi Kurang / Stunting</div>
                      <div className="text-[11px] text-amber-700">Daya tahan respiratori rendah</div>
                    </div>
                  </div>
                  <span className="text-headline-md font-bold text-amber-700 tabular-nums">24%</span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-lg bg-blue-50/60 border border-blue-100">
                  <div className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-secondary text-xl">child_care</span>
                    <div>
                      <div className="text-body-sm font-semibold text-blue-950">Riwayat BBLR (&lt;2500 gr)</div>
                      <div className="text-[11px] text-blue-700">Kapasitas paru belum matur saat lahir</div>
                    </div>
                  </div>
                  <span className="text-headline-md font-bold text-blue-800 tabular-nums">14%</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Row 3: Tabel Klasifikasi Puskesmas */}
        <section className="bg-surface-container-lowest border border-outline-variant/30 rounded-xl p-5 shadow-sm">
          <div className="flex items-center justify-between pb-3 border-b border-outline-variant/20">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-6 bg-primary-container rounded-sm"></span>
              <div>
                <h2 className="text-title-lg font-title-lg text-primary">Klasifikasi Kasus per Wilayah Puskesmas</h2>
                <p className="text-body-sm text-on-surface-variant">Data rujukan Manajemen Terpadu Balita Sakit (MTBS)</p>
              </div>
            </div>
            <button className="px-2.5 py-1 text-label-md font-semibold text-secondary hover:bg-surface-container rounded-lg border border-outline-variant/40 transition-colors flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">download</span> Unduh XLS
            </button>
          </div>

          <div className="overflow-x-auto mt-3">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-low border-b border-outline-variant/30 text-[11px] font-semibold uppercase text-on-surface-variant tracking-wider">
                  <th className="py-2.5 px-3">No</th>
                  <th className="py-2.5 px-3">Puskesmas / Kecamatan</th>
                  <th className="py-2.5 px-3 text-right">Pneumonia</th>
                  <th className="py-2.5 px-3 text-right">Berat</th>
                  <th className="py-2.5 px-3 text-right">Rujuk RSUD</th>
                  <th className="py-2.5 px-3 text-center">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/20 text-body-sm">
                <tr className="hover:bg-surface-container-low/70 transition-colors">
                  <td className="py-2.5 px-3 tabular-nums font-medium text-slate-500">1</td>
                  <td className="py-2.5 px-3 font-semibold text-primary">Kedungwuni I</td>
                  <td className="py-2.5 px-3 text-right tabular-nums">74</td>
                  <td className="py-2.5 px-3 text-right tabular-nums text-rose-700 font-semibold">6</td>
                  <td className="py-2.5 px-3 text-right tabular-nums">6</td>
                  <td className="py-2.5 px-3 text-center">
                    <span className="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-rose-100 text-rose-800">Siaga Ketat</span>
                  </td>
                </tr>
                <tr className="hover:bg-surface-container-low/70 transition-colors">
                  <td className="py-2.5 px-3 tabular-nums font-medium text-slate-500">2</td>
                  <td className="py-2.5 px-3 font-semibold text-primary">Wiradesa</td>
                  <td className="py-2.5 px-3 text-right tabular-nums">68</td>
                  <td className="py-2.5 px-3 text-right tabular-nums text-rose-700 font-semibold">5</td>
                  <td className="py-2.5 px-3 text-right tabular-nums">5</td>
                  <td className="py-2.5 px-3 text-center">
                    <span className="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-rose-100 text-rose-800">Siaga Ketat</span>
                  </td>
                </tr>
                <tr className="hover:bg-surface-container-low/70 transition-colors">
                  <td className="py-2.5 px-3 tabular-nums font-medium text-slate-500">3</td>
                  <td className="py-2.5 px-3 font-semibold text-primary">Kajen I (Ibukota)</td>
                  <td className="py-2.5 px-3 text-right tabular-nums">52</td>
                  <td className="py-2.5 px-3 text-right tabular-nums text-amber-700 font-semibold">4</td>
                  <td className="py-2.5 px-3 text-right tabular-nums">4</td>
                  <td className="py-2.5 px-3 text-center">
                    <span className="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-amber-100 text-amber-800">Waspada</span>
                  </td>
                </tr>
                <tr className="hover:bg-surface-container-low/70 transition-colors">
                  <td className="py-2.5 px-3 tabular-nums font-medium text-slate-500">4</td>
                  <td className="py-2.5 px-3 font-semibold text-primary">Buaran</td>
                  <td className="py-2.5 px-3 text-right tabular-nums">49</td>
                  <td className="py-2.5 px-3 text-right tabular-nums text-amber-700 font-semibold">3</td>
                  <td className="py-2.5 px-3 text-right tabular-nums">3</td>
                  <td className="py-2.5 px-3 text-center">
                    <span className="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-amber-100 text-amber-800">Waspada</span>
                  </td>
                </tr>
                <tr className="hover:bg-surface-container-low/70 transition-colors">
                  <td className="py-2.5 px-3 tabular-nums font-medium text-slate-500">5</td>
                  <td className="py-2.5 px-3 font-semibold text-primary">Doro I</td>
                  <td className="py-2.5 px-3 text-right tabular-nums">38</td>
                  <td className="py-2.5 px-3 text-right tabular-nums text-emerald-700 font-semibold">2</td>
                  <td className="py-2.5 px-3 text-right tabular-nums">2</td>
                  <td className="py-2.5 px-3 text-center">
                    <span className="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-100 text-emerald-800">Terkendali</span>
                  </td>
                </tr>
                <tr className="hover:bg-surface-container-low/70 transition-colors">
                  <td className="py-2.5 px-3 tabular-nums font-medium text-slate-500">6</td>
                  <td className="py-2.5 px-3 font-semibold text-primary">Petungkriyono</td>
                  <td className="py-2.5 px-3 text-right tabular-nums">11</td>
                  <td className="py-2.5 px-3 text-right tabular-nums text-emerald-700 font-semibold">0</td>
                  <td className="py-2.5 px-3 text-right tabular-nums">0</td>
                  <td className="py-2.5 px-3 text-center">
                    <span className="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-100 text-emerald-800">Terkendali</span>
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr className="bg-surface-container-low/90 font-bold border-t border-outline-variant/40 text-on-surface">
                  <td className="py-2.5 px-3 text-primary" colSpan={2}>Total 27 Puskesmas</td>
                  <td className="py-2.5 px-3 text-right tabular-nums text-primary">669</td>
                  <td className="py-2.5 px-3 text-right tabular-nums text-rose-700">48</td>
                  <td className="py-2.5 px-3 text-right tabular-nums text-primary">48</td>
                  <td className="py-2.5 px-3 text-center text-label-md text-emerald-700">100% Rujuk Tuntas</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </section>

        {/* Row 4: Catatan Kebijakan */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="bg-[#EFF6FF] border border-[#BFDBFE] rounded-xl p-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-secondary font-bold text-title-lg mb-2">
                <span className="material-symbols-outlined text-secondary">stethoscope</span>
                <h3>Protokol MTBS Balita Sakit</h3>
              </div>
              <p className="text-body-sm text-slate-700 leading-relaxed">
                Hitung napas cepat dalam 1 menit penuh dan deteksi tarikan dinding dada ke dalam (chest indrawing). Ketersediaan antibiotik lini pertama Amoksisilin dispersible tablet terjaga 100% di seluruh Puskesmas.
              </p>
            </div>
            <div className="mt-3 pt-2 border-t border-[#BFDBFE]/60 text-label-md font-semibold text-secondary flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">verified</span> Kemenkes RI Standard
            </div>
          </div>

          <div className="bg-[#F8FAFC] border border-[#CBD5E1] rounded-xl p-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-primary font-bold text-title-lg mb-2">
                <span className="material-symbols-outlined text-primary">lightbulb</span>
                <h3>Kesimpulan Surveilans 2024</h3>
              </div>
              <p className="text-body-sm text-slate-700 leading-relaxed">
                Insidensi balita Pekalongan berada pada level 0,67% dengan CFR 1,64%. Kunci penurunan mortalitas adalah edukasi dini orang tua dalam mendeteksi sesak napas sebelum terjadi pneumonia berat.
              </p>
            </div>
            <div className="mt-3 pt-2 border-t border-[#CBD5E1]/60 text-label-md font-semibold text-slate-700 flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">alarm</span> Penanganan &lt; 24 Jam Esensial
            </div>
          </div>

          <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-xl p-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-[#166534] font-bold text-title-lg mb-2">
                <span className="material-symbols-outlined text-[#166534]">database</span>
                <h3>Sumber Data Terintegrasi</h3>
              </div>
              <p className="text-body-sm text-slate-700 leading-relaxed">
                Sinkronisasi harian dari Sistem Informasi Surveilans Terpadu (SIST), e-Puskesmas Pekalongan, Sistem Informasi Rumah Sakit (SIRS) Online, dan Satu Data Kesehatan Nasional.
              </p>
            </div>
            <div className="mt-3 pt-2 border-t border-[#BBF7D0]/60 text-label-md font-semibold text-[#166534] flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">sync</span> Terakhir Sinkron: Hari Ini 08:30 WIB
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full bg-surface-container-lowest border-t border-outline-variant/30 px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-3">
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-body-sm font-body-sm text-on-surface-variant">
          <span className="text-label-lg font-label-lg text-primary font-bold">Dinas Kesehatan Kab. Pekalongan</span>
          <span className="hidden md:inline text-outline-variant">•</span>
          <span>© 2024 Dinas Kesehatan Pemerintah Kabupaten Pekalongan. Sistem Informasi Surveilans Terpadu.</span>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-label-md font-label-md">
          <span className="text-on-surface-variant">Satu Data Kesehatan</span>
          <span className="text-on-surface-variant">Portal Pemkab Pekalongan</span>
          <span className="text-on-surface-variant">Kebijakan Privasi</span>
          <span className="text-primary font-semibold flex items-center gap-1">
            <span className="material-symbols-outlined text-[15px] text-rose-600">call</span> Kontak Darurat SPGDT 119
          </span>
        </div>
      </footer>
    </div>
  );
}
