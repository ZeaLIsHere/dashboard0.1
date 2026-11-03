export default function PerKecamatanPage() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-between bg-surface-container-low/20">
      {/* Top Header */}
      <header className="sticky top-0 right-0 z-30 w-full bg-surface-container-lowest border-b border-outline-variant/30 shadow-sm flex flex-col sm:flex-row justify-between sm:items-center px-4 sm:px-6 py-3 gap-3">
        <div className="flex items-center gap-4">
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-headline-md font-headline-md text-primary tracking-tight">
                Analisis Indikator Kesehatan Per Kecamatan
              </h1>
              <span className="bg-secondary-fixed text-on-secondary-fixed text-label-md font-label-md px-2 py-0.5 rounded">
                Tingkat Wilayah
              </span>
            </div>
            <div className="flex items-center gap-3 text-body-sm font-body-sm text-on-surface-variant">
              <span>Kabupaten Pekalongan – Tahun 2024</span>
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-outline-variant"></span>
              <span>Program Pencegahan Pneumonia &amp; Stunting Balita</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 self-end sm:self-auto">
          <div className="relative">
            <button className="flex items-center gap-2 bg-surface-container-lowest border border-outline-variant/60 rounded px-3 py-1.5 text-body-sm font-body-sm text-primary hover:bg-surface-container transition-colors active:scale-95 shadow-xs">
              <span className="material-symbols-outlined text-secondary text-[18px]" data-icon="filter_alt">filter_alt</span>
              <span>Filter Kecamatan: Semua (19)</span>
              <span className="material-symbols-outlined text-[16px] text-on-surface-variant" data-icon="expand_more">expand_more</span>
            </button>
          </div>
          <div className="flex items-center gap-1.5 bg-surface-container-low border border-outline-variant/50 rounded px-3 py-1.5 text-body-sm font-body-sm text-primary">
            <span className="material-symbols-outlined text-secondary text-[18px]" data-icon="calendar_today">calendar_today</span>
            <span className="font-title-lg text-label-lg text-primary">Tahun 2024</span>
          </div>
          <button className="relative p-2 rounded-full hover:bg-surface-container transition-colors text-on-surface-variant active:scale-95" title="Notifikasi Surveilans">
            <span className="material-symbols-outlined text-[22px]" data-icon="notifications">notifications</span>
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-error"></span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="w-full px-4 sm:px-7 py-6 max-w-[1920px] mx-auto space-y-6">
        {/* KPI Metric Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          <div className="bg-[#E0F2FE] border border-[#BAE6FD] rounded-lg p-4 shadow-sm relative overflow-hidden transition-all duration-200 hover:shadow-md">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-label-md font-label-md uppercase tracking-wider text-[#0369A1]">Total Wilayah Kerja</p>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-metric-display font-metric-display text-[#0C4A6E]">19</span>
                  <span className="text-title-lg font-title-lg text-[#0369A1]">Kecamatan</span>
                </div>
              </div>
              <div className="w-10 h-10 rounded-full bg-[#BAE6FD]/60 flex items-center justify-center text-[#0284C7]">
                <span className="material-symbols-outlined" data-icon="location_city">location_city</span>
              </div>
            </div>
            <div className="mt-3 pt-2.5 border-t border-[#BAE6FD]/80 flex items-center justify-between text-body-sm font-body-sm text-[#075985]">
              <span className="flex items-center gap-1 font-medium">
                <span className="material-symbols-outlined text-[16px]" data-icon="home_work">home_work</span>
                272 Desa / 13 Kelurahan
              </span>
              <span className="bg-[#FFFFFF]/80 px-2 py-0.5 rounded text-[11px] font-semibold text-[#0369A1]">100% Terpetakan</span>
            </div>
          </div>

          <div className="bg-[#FFE4E6] border border-[#FECDD3] rounded-lg p-4 shadow-sm relative overflow-hidden transition-all duration-200 hover:shadow-md">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-label-md font-label-md uppercase tracking-wider text-[#BE123C]">Wilayah Kasus Tertinggi</p>
                <div className="flex items-baseline gap-1.5 mt-1">
                  <span className="text-headline-lg font-headline-lg text-[#881337] tracking-tight">Kedungwuni &amp; Wiradesa</span>
                </div>
              </div>
              <div className="w-10 h-10 rounded-full bg-[#FECDD3]/60 flex items-center justify-center text-[#E11D48]">
                <span className="material-symbols-outlined" data-icon="coronavirus">coronavirus</span>
              </div>
            </div>
            <div className="mt-3 pt-2.5 border-t border-[#FECDD3]/80 flex items-center justify-between text-body-sm font-body-sm text-[#9F1239]">
              <span className="flex items-center gap-1 font-medium">
                <span className="material-symbols-outlined text-[16px] text-error" data-icon="trending_up">trending_up</span>
                143 Kasus Terkonfirmasi Balita
              </span>
              <span className="bg-[#FFFFFF]/80 px-2 py-0.5 rounded text-[11px] font-semibold text-[#BE123C]">Zona Kewaspadaan</span>
            </div>
          </div>

          <div className="bg-[#FEF3C7] border border-[#FDE68A] rounded-lg p-4 shadow-sm relative overflow-hidden transition-all duration-200 hover:shadow-md">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-label-md font-label-md uppercase tracking-wider text-[#B45309]">Wilayah Pegunungan (3T)</p>
                <div className="flex items-baseline gap-1 mt-1">
                  <span className="text-headline-lg font-headline-lg text-[#78350F] tracking-tight">3 Kecamatan Utama</span>
                </div>
              </div>
              <div className="w-10 h-10 rounded-full bg-[#FDE68A]/60 flex items-center justify-center text-[#D97706]">
                <span className="material-symbols-outlined" data-icon="terrain">terrain</span>
              </div>
            </div>
            <div className="mt-3 pt-2.5 border-t border-[#FDE68A]/80 flex items-center justify-between text-body-sm font-body-sm text-[#92400E]">
              <span className="truncate max-w-[180px] font-medium" title="Petungkriyono, Lebakbarang, Kandangserang">
                Petungkriyono, Lebakbarang...
              </span>
              <span className="bg-[#FFFFFF]/80 px-2 py-0.5 rounded text-[11px] font-semibold text-[#B45309]">Pusling Aktif</span>
            </div>
          </div>

          <div className="bg-[#DCFCE7] border border-[#BBF7D0] rounded-lg p-4 shadow-sm relative overflow-hidden transition-all duration-200 hover:shadow-md">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-label-md font-label-md uppercase tracking-wider text-[#15803D]">Puskesmas Pembina</p>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-metric-display font-metric-display text-[#14532D]">27</span>
                  <span className="text-title-lg font-title-lg text-[#15803D]">UPTD Siaga</span>
                </div>
              </div>
              <div className="w-10 h-10 rounded-full bg-[#BBF7D0]/60 flex items-center justify-center text-[#16A34A]">
                <span className="material-symbols-outlined" data-icon="verified">verified</span>
              </div>
            </div>
            <div className="mt-3 pt-2.5 border-t border-[#BBF7D0]/80 flex items-center justify-between text-body-sm font-body-sm text-[#166534]">
              <span className="flex items-center gap-1 font-medium">
                <span className="material-symbols-outlined text-[16px]" data-icon="health_and_safety">health_and_safety</span>
                100% Terakreditasi Kemenkes
              </span>
              <span className="bg-[#FFFFFF]/80 px-2 py-0.5 rounded text-[11px] font-semibold text-[#15803D]">Paripurna &amp; Utama</span>
            </div>
          </div>
        </section>

        {/* Operational Split View: Map & Focus Panel */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-5">
          <div className="xl:col-span-8 space-y-5">
            <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-lg p-5 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-outline-variant/20">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-6 bg-primary-container rounded-sm"></span>
                  <div>
                    <h2 className="text-title-lg font-title-lg text-primary">Peta Sebaran &amp; Status Beban Kesehatan Per Kecamatan</h2>
                    <p className="text-body-sm font-body-sm text-on-surface-variant">Kabupaten Pekalongan – Visualisasi Spasial 19 Kecamatan</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-label-md font-label-md text-on-surface-variant">Lapisan:</span>
                  <button className="px-2.5 py-1 bg-surface-container-high text-primary rounded text-label-md font-label-md">Semua Kasus</button>
                  <button className="px-2.5 py-1 bg-surface-container text-on-surface-variant rounded text-label-md font-label-md">Zona Darurat</button>
                </div>
              </div>

              <div className="relative mt-4 h-[300px] w-full bg-[#F1F5F9] rounded-lg border border-outline-variant/30 p-4 flex flex-col justify-between overflow-hidden">
                <div
                  className="absolute inset-0 opacity-15"
                  style={{ backgroundImage: "radial-gradient(#0F2744 1px, transparent 1px)", backgroundSize: "20px 20px" }}
                ></div>

                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <svg className="w-full h-full drop-shadow-sm select-none" viewBox="0 0 760 280">
                    <path className="hover:opacity-80 cursor-pointer transition-opacity" d="M 340,30 L 450,25 L 490,65 L 430,85 L 360,75 Z" fill="#8EACCD" stroke="#ffffff" strokeWidth="2">
                      <title>Wiradesa: Kasus Balita 58, IDL 102.3%</title>
                    </path>
                    <text fill="#0F2744" fontSize="11" fontWeight="700" textAnchor="middle" x="410" y="55">Wiradesa</text>

                    <path className="hover:opacity-80 cursor-pointer transition-opacity" d="M 450,25 L 560,20 L 590,70 L 490,65 Z" fill="#D2E0FB" stroke="#ffffff" strokeWidth="2">
                      <title>Tirto: Kasus Balita 44, IDL 99.8%</title>
                    </path>
                    <text fill="#0F2744" fontSize="11" fontWeight="700" textAnchor="middle" x="515" y="48">Tirto</text>

                    <path className="hover:opacity-80 cursor-pointer transition-opacity" d="M 240,35 L 340,30 L 360,75 L 290,95 L 230,65 Z" fill="#D2E0FB" stroke="#ffffff" strokeWidth="2">
                      <title>Siwalan: Kasus Balita 31, IDL 101.0%</title>
                    </path>
                    <text fill="#0F2744" fontSize="11" fontWeight="700" textAnchor="middle" x="290" y="60">Siwalan</text>

                    <path className="hover:opacity-80 cursor-pointer transition-opacity" d="M 150,50 L 240,35 L 230,65 L 180,95 Z" fill="#E2E8F0" stroke="#ffffff" strokeWidth="2">
                      <title>Wonokerto: Kasus Balita 28, IDL 100.5%</title>
                    </path>
                    <text fill="#0F2744" fontSize="10" fontWeight="600" textAnchor="middle" x="195" y="70">Wonokerto</text>

                    <path className="hover:opacity-80 cursor-pointer transition-opacity" d="M 560,20 L 670,30 L 650,85 L 590,70 Z" fill="#CBD5E1" stroke="#ffffff" strokeWidth="2">
                      <title>Buaran: Kasus Balita 39, IDL 103.1%</title>
                    </path>
                    <text fill="#0F2744" fontSize="11" fontWeight="700" textAnchor="middle" x="618" y="55">Buaran</text>

                    <path className="hover:opacity-80 cursor-pointer transition-opacity" d="M 360,75 L 430,85 L 450,145 L 340,150 L 290,95 Z" fill="#FDA4AF" stroke="#ffffff" strokeWidth="2">
                      <title>Kedungwuni: Kasus Balita 85 (Zona Merah), IDL 104.2%</title>
                    </path>
                    <text fill="#881337" fontSize="12" fontWeight="800" textAnchor="middle" x="375" y="115">Kedungwuni (85)</text>

                    <path className="hover:opacity-80 cursor-pointer transition-opacity" d="M 430,85 L 520,80 L 530,140 L 450,145 Z" fill="#8EACCD" stroke="#ffffff" strokeWidth="2">
                      <title>Karangdadap: Kasus Balita 41, IDL 101.8%</title>
                    </path>
                    <text fill="#0F2744" fontSize="11" fontWeight="700" textAnchor="middle" x="480" y="115">Karangdadap</text>

                    <path className="hover:opacity-80 cursor-pointer transition-opacity" d="M 230,65 L 290,95 L 340,150 L 260,160 L 200,120 Z" fill="#D2E0FB" stroke="#ffffff" strokeWidth="2">
                      <title>Sragi: Kasus Balita 42, IDL 98.7%</title>
                    </path>
                    <text fill="#0F2744" fontSize="11" fontWeight="700" textAnchor="middle" x="270" y="125">Sragi</text>

                    <path className="hover:opacity-80 cursor-pointer transition-opacity" d="M 120,95 L 200,120 L 220,180 L 130,170 Z" fill="#E2E8F0" stroke="#ffffff" strokeWidth="2">
                      <title>Kesesi: Kasus Balita 37, IDL 102.5%</title>
                    </path>
                    <text fill="#0F2744" fontSize="11" fontWeight="600" textAnchor="middle" x="170" y="145">Kesesi</text>

                    <path className="hover:opacity-80 cursor-pointer transition-opacity" d="M 260,160 L 370,150 L 400,210 L 290,215 Z" fill="#133E87" stroke="#ffffff" strokeWidth="2">
                      <title>Kajen (Ibukota Kabupaten): Kasus Balita 52, IDL 103.4%</title>
                    </path>
                    <text fill="#FFFFFF" fontSize="12" fontWeight="800" textAnchor="middle" x="330" y="185">Kajen (Ibukota)</text>

                    <path className="hover:opacity-80 cursor-pointer transition-opacity" d="M 370,150 L 460,145 L 480,205 L 400,210 Z" fill="#8EACCD" stroke="#ffffff" strokeWidth="2">
                      <title>Doro: Kasus Balita 36, IDL 100.9%</title>
                    </path>
                    <text fill="#0F2744" fontSize="11" fontWeight="700" textAnchor="middle" x="430" y="180">Doro</text>

                    <path className="hover:opacity-80 cursor-pointer transition-opacity" d="M 460,145 L 560,140 L 570,200 L 480,205 Z" fill="#CBD5E1" stroke="#ffffff" strokeWidth="2">
                      <title>Wonopringgo: Kasus Balita 33, IDL 101.4%</title>
                    </path>
                    <text fill="#0F2744" fontSize="10" fontWeight="600" textAnchor="middle" x="515" y="175">Wonopringgo</text>

                    <path className="hover:opacity-80 cursor-pointer transition-opacity" d="M 560,140 L 660,135 L 670,195 L 570,200 Z" fill="#E2E8F0" stroke="#ffffff" strokeWidth="2">
                      <title>Talun: Kasus Balita 27, IDL 99.2%</title>
                    </path>
                    <text fill="#0F2744" fontSize="10" fontWeight="600" textAnchor="middle" x="615" y="170">Talun</text>

                    <path className="hover:opacity-80 cursor-pointer transition-opacity" d="M 220,180 L 290,215 L 260,265 L 180,240 Z" fill="#D2E0FB" stroke="#ffffff" strokeWidth="2">
                      <title>Bojong: Kasus Balita 35, IDL 102.1%</title>
                    </path>
                    <text fill="#0F2744" fontSize="11" fontWeight="600" textAnchor="middle" x="235" y="225">Bojong</text>

                    <path className="hover:opacity-80 cursor-pointer transition-opacity" d="M 140,180 L 220,180 L 180,240 L 110,230 Z" fill="#CBD5E1" stroke="#ffffff" strokeWidth="2">
                      <title>Karanganyar: Kasus Balita 29, IDL 100.8%</title>
                    </path>
                    <text fill="#0F2744" fontSize="10" fontWeight="600" textAnchor="middle" x="165" y="210">Karanganyar</text>

                    <path className="hover:opacity-80 cursor-pointer transition-opacity" d="M 290,215 L 400,210 L 380,270 L 270,265 Z" fill="#FDE68A" stroke="#ffffff" strokeWidth="2">
                      <title>Paninggaran: Kasus Balita 21, Wilayah Pegunungan 3T</title>
                    </path>
                    <text fill="#78350F" fontSize="11" fontWeight="700" textAnchor="middle" x="335" y="245">Paninggaran</text>

                    <path className="hover:opacity-80 cursor-pointer transition-opacity" d="M 400,210 L 480,205 L 470,270 L 380,270 Z" fill="#FDE68A" stroke="#ffffff" strokeWidth="2">
                      <title>Lebakbarang: Kasus Balita 14, Wilayah Pegunungan 3T</title>
                    </path>
                    <text fill="#78350F" fontSize="11" fontWeight="700" textAnchor="middle" x="430" y="245">Lebakbarang</text>

                    <path className="hover:opacity-80 cursor-pointer transition-opacity" d="M 480,205 L 590,200 L 580,270 L 470,270 Z" fill="#FDE68A" stroke="#ffffff" strokeWidth="2">
                      <title>Petungkriyono: Kasus Balita 9, Wilayah Pegunungan 3T</title>
                    </path>
                    <text fill="#78350F" fontSize="11" fontWeight="700" textAnchor="middle" x="535" y="245">Petungkriyono</text>

                    <path className="hover:opacity-80 cursor-pointer transition-opacity" d="M 200,240 L 270,265 L 250,275 L 180,255 Z" fill="#FDE68A" stroke="#ffffff" strokeWidth="2">
                      <title>Kandangserang: Kasus Balita 18, Wilayah Pegunungan 3T</title>
                    </path>
                    <text fill="#78350F" fontSize="10" fontWeight="700" textAnchor="middle" x="225" y="260">Kandangserang</text>
                  </svg>
                </div>

                <div className="relative z-10 self-start bg-surface-container-lowest/90 backdrop-blur-sm border border-outline-variant/40 rounded p-2.5 shadow-sm max-w-[240px]">
                  <span className="text-label-md font-label-md text-primary block mb-1.5 font-bold">Klasifikasi Kasus</span>
                  <div className="space-y-1 text-[11px] text-on-surface-variant font-medium">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-xs bg-[#FDA4AF] border border-[#F43F5E]"></span>
                      <span>Tinggi (≥ 50 Kasus) - Zona Merah</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-xs bg-[#8EACCD] border border-[#385CA6]"></span>
                      <span>Sedang (30 - 49 Kasus)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-xs bg-[#D2E0FB] border border-[#93CCFF]"></span>
                      <span>Rendah (&lt; 30 Kasus)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-xs bg-[#FDE68A] border border-[#D97706]"></span>
                      <span>Daerah Khusus 3T Pegunungan</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Scatter Matrix Card */}
            <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-lg p-5 shadow-sm">
              <div className="flex items-center justify-between pb-3 border-b border-outline-variant/20">
                <div>
                  <h3 className="text-title-lg font-title-lg text-primary">Matriks Korelasi: Kepadatan vs Kasus Balita</h3>
                  <p className="text-body-sm font-body-sm text-on-surface-variant">Analisis beban transmisi pneumonia terhadap rasio anggota rumah tangga</p>
                </div>
                <span className="bg-surface-container text-on-secondary-container text-label-md font-label-md px-2.5 py-1 rounded">r = +0.78</span>
              </div>

              <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-surface-container-low rounded-lg p-3.5 border border-outline-variant/20 flex flex-col justify-between">
                  <div>
                    <span className="text-label-md font-label-md text-secondary block uppercase">Klaster Urban Padat</span>
                    <span className="text-title-lg font-title-lg text-primary mt-1 block">Kedungwuni &amp; Wiradesa</span>
                    <p className="text-body-sm font-body-sm text-on-surface-variant mt-1.5 leading-relaxed">
                      Memiliki kepadatan &gt;1.400 jiwa/km² dengan rerata 3.42 jiwa/RT. Transmisi droplet 2.3x lebih aktif.
                    </p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-outline-variant/20 flex items-center justify-between text-body-sm">
                    <span className="text-on-surface-variant font-medium">Intervensi:</span>
                    <span className="text-secondary font-semibold">Home Care Posyandu</span>
                  </div>
                </div>

                <div className="md:col-span-2 bg-surface-container-lowest rounded-lg border border-outline-variant/30 p-3.5 flex flex-col justify-between">
                  <div className="flex items-center justify-between text-body-sm text-on-surface-variant mb-2">
                    <span className="font-semibold text-primary">Sebaran 5 Kecamatan Beban Terbesar</span>
                    <span className="text-[11px]">Sumbu X: Balita | Sumbu Y: Kasus</span>
                  </div>
                  <div className="space-y-2.5">
                    <div>
                      <div className="flex justify-between text-body-sm mb-1">
                        <span className="font-medium text-primary">1. Kedungwuni (8.210 Balita)</span>
                        <span className="font-bold text-error tabular-nums">85 Kasus (1.03%)</span>
                      </div>
                      <div className="w-full bg-surface-container h-2.5 rounded-full overflow-hidden">
                        <div className="bg-error h-full rounded-full" style={{ width: "85%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-body-sm mb-1">
                        <span className="font-medium text-primary">2. Wiradesa (6.450 Balita)</span>
                        <span className="font-bold text-[#E11D48] tabular-nums">58 Kasus (0.90%)</span>
                      </div>
                      <div className="w-full bg-surface-container h-2.5 rounded-full overflow-hidden">
                        <div className="bg-[#E11D48] h-full rounded-full" style={{ width: "58%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-body-sm mb-1">
                        <span className="font-medium text-primary">3. Kajen (5.890 Balita)</span>
                        <span className="font-bold text-secondary tabular-nums">52 Kasus (0.88%)</span>
                      </div>
                      <div className="w-full bg-surface-container h-2.5 rounded-full overflow-hidden">
                        <div className="bg-secondary h-full rounded-full" style={{ width: "52%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-body-sm mb-1">
                        <span className="font-medium text-primary">4. Tirto (5.120 Balita)</span>
                        <span className="font-bold text-secondary tabular-nums">44 Kasus (0.86%)</span>
                      </div>
                      <div className="w-full bg-surface-container h-2.5 rounded-full overflow-hidden">
                        <div className="bg-secondary h-full rounded-full" style={{ width: "44%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-body-sm mb-1">
                        <span className="font-medium text-primary">5. Sragi (4.930 Balita)</span>
                        <span className="font-bold text-secondary tabular-nums">42 Kasus (0.85%)</span>
                      </div>
                      <div className="w-full bg-surface-container h-2.5 rounded-full overflow-hidden">
                        <div className="bg-secondary h-full rounded-full" style={{ width: "42%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right 4-Columns */}
          <div className="xl:col-span-4 space-y-5">
            <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-lg p-5 shadow-sm">
              <div className="flex items-center gap-2 pb-3 border-b border-outline-variant/20">
                <span className="w-2.5 h-6 bg-secondary rounded-sm"></span>
                <div>
                  <h3 className="text-title-lg font-title-lg text-primary">Puskesmas Wilayah Prioritas</h3>
                  <p className="text-body-sm font-body-sm text-on-surface-variant">UPTD Penanggung Jawab 2024</p>
                </div>
              </div>
              <div className="mt-4 space-y-3">
                <div className="p-3 bg-surface-container-low rounded-lg border border-outline-variant/20">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="font-title-lg text-primary block font-bold">UPTD Puskesmas Kedungwuni I</span>
                      <span className="text-body-sm text-on-surface-variant">Kepala: dr. H. Subagyo, M.Kes</span>
                    </div>
                    <span className="bg-[#FFE4E6] text-[#9F1239] text-[11px] font-semibold px-2 py-0.5 rounded">Darurat</span>
                  </div>
                  <div className="mt-2.5 grid grid-cols-3 gap-2 text-center text-body-sm border-t border-outline-variant/20 pt-2">
                    <div><span className="text-[11px] text-on-surface-variant block">Dokter</span><span className="font-bold text-primary tabular-nums">6</span></div>
                    <div><span className="text-[11px] text-on-surface-variant block">Bidan</span><span className="font-bold text-primary tabular-nums">18</span></div>
                    <div><span className="text-[11px] text-on-surface-variant block">Rawat</span><span className="font-bold text-primary tabular-nums">24 TT</span></div>
                  </div>
                </div>

                <div className="p-3 bg-surface-container-low rounded-lg border border-outline-variant/20">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="font-title-lg text-primary block font-bold">UPTD Puskesmas Wiradesa</span>
                      <span className="text-body-sm text-on-surface-variant">Kepala: dr. Nurhayati, Sp.A</span>
                    </div>
                    <span className="bg-[#E0F2FE] text-[#075985] text-[11px] font-semibold px-2 py-0.5 rounded">Siaga</span>
                  </div>
                  <div className="mt-2.5 grid grid-cols-3 gap-2 text-center text-body-sm border-t border-outline-variant/20 pt-2">
                    <div><span className="text-[11px] text-on-surface-variant block">Dokter</span><span className="font-bold text-primary tabular-nums">5</span></div>
                    <div><span className="text-[11px] text-on-surface-variant block">Bidan</span><span className="font-bold text-primary tabular-nums">15</span></div>
                    <div><span className="text-[11px] text-on-surface-variant block">Rawat</span><span className="font-bold text-primary tabular-nums">18 TT</span></div>
                  </div>
                </div>

                <div className="p-3 bg-surface-container-low rounded-lg border border-outline-variant/20">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="font-title-lg text-primary block font-bold">UPTD Puskesmas Petungkriyono</span>
                      <span className="text-body-sm text-on-surface-variant">Kepala: dr. Bagus Santoso</span>
                    </div>
                    <span className="bg-[#DCFCE7] text-[#166534] text-[11px] font-semibold px-2 py-0.5 rounded">Terkendali</span>
                  </div>
                  <div className="mt-2.5 grid grid-cols-3 gap-2 text-center text-body-sm border-t border-outline-variant/20 pt-2">
                    <div><span className="text-[11px] text-on-surface-variant block">Dokter</span><span className="font-bold text-primary tabular-nums">3</span></div>
                    <div><span className="text-[11px] text-on-surface-variant block">Bidan</span><span className="font-bold text-primary tabular-nums">11</span></div>
                    <div><span className="text-[11px] text-on-surface-variant block">Pusling</span><span className="font-bold text-primary tabular-nums">2 Unit</span></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-lg p-5 shadow-sm space-y-3.5">
              <div className="flex items-center gap-2 pb-2 border-b border-outline-variant/20">
                <span className="material-symbols-outlined text-secondary" data-icon="assignment">assignment</span>
                <h3 className="text-title-lg font-title-lg text-primary">Catatan Penjangkauan Lapangan</h3>
              </div>
              <div className="space-y-2.5 text-body-sm font-body-sm">
                <div className="flex items-start gap-2.5 p-2 rounded bg-surface-container-low">
                  <span className="material-symbols-outlined text-secondary text-[20px] shrink-0 mt-0.5">airport_shuttle</span>
                  <div>
                    <strong className="text-primary block font-medium">Puskesmas Keliling (Pusling) Daerah 3T</strong>
                    <p className="text-on-surface-variant text-[13px] leading-relaxed">
                      Jadwal rotasi mingguan di Lebakbarang &amp; Kandangserang berfokus pada balita demam dan batuk lebih dari 3 hari. Pasokan antibiotik oral &amp; oksigen botol portabel 100% terpenuhi.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-2 rounded bg-surface-container-low">
                  <span className="material-symbols-outlined text-[#15803D] text-[20px] shrink-0 mt-0.5">how_to_reg</span>
                  <div>
                    <strong className="text-primary block font-medium">Keaktifan Kader Posyandu</strong>
                    <p className="text-on-surface-variant text-[13px] leading-relaxed">
                      Sebanyak 1.148 Posyandu aktif mencatat laju penimbangan dan skrining MTBS mencapai 94.6% dari total sasaran 99.625 balita.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-2 rounded bg-[#FFE4E6]/50 border border-[#FECDD3]">
                  <span className="material-symbols-outlined text-error text-[20px] shrink-0 mt-0.5">warning</span>
                  <div>
                    <strong className="text-error block font-medium">Peringatan Kepatuhan Imunisasi PCV</strong>
                    <p className="text-[#9F1239] text-[13px] leading-relaxed">
                      Puskesmas Tirto &amp; Bojong diminta mempercepat dosis booster PCV 3 pada bayi usia 12 bulan menyusul cuaca pancaroba pesisir utara.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full 19 Kecamatan Table */}
        <section className="bg-surface-container-lowest border border-outline-variant/30 rounded-lg p-5 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-outline-variant/20">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-6 bg-primary-container rounded-sm"></span>
                <h2 className="text-headline-md font-headline-md text-primary tracking-tight">Tabel Indikator Kesehatan 19 Kecamatan Lengkap</h2>
              </div>
              <p className="text-body-sm font-body-sm text-on-surface-variant mt-0.5">
                Surveilans demografi kependudukan, balita berisiko, insiden pneumonia, dan cakupan Imunisasi Dasar Lengkap (IDL) Tahun 2024
              </p>
            </div>
          </div>

          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#F8FAFC] border-b border-[#E2E8F0] text-label-md font-label-md text-[#64748B] uppercase tracking-wider">
                  <th className="py-3 px-3.5 text-center w-12">No</th>
                  <th className="py-3 px-4">Kecamatan</th>
                  <th className="py-3 px-4 text-right">Jumlah Penduduk</th>
                  <th className="py-3 px-4 text-right">Rumah Tangga</th>
                  <th className="py-3 px-4 text-right">Rata-rata/RT</th>
                  <th className="py-3 px-4 text-right">Jumlah Balita</th>
                  <th className="py-3 px-4 text-right">Kasus Pneumonia</th>
                  <th className="py-3 px-4 text-right">Capaian IDL (%)</th>
                  <th className="py-3 px-4 text-center">Status Wilayah</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/20 text-body-sm font-body-sm text-on-surface">
                {[
                  { no: 1, name: "Kandangserang", pop: "37.423", rt: "11.209", avg: "3,34", balita: "3.612", cases: 18, idl: "101,2%", status: "Terkendali", color: "bg-[#DCFCE7] text-[#166534]" },
                  { no: 2, name: "Paninggaran", pop: "44.314", rt: "12.963", avg: "3,42", balita: "4.180", cases: 21, idl: "100,8%", status: "Terkendali", color: "bg-[#DCFCE7] text-[#166534]" },
                  { no: 3, name: "Lebakbarang", pop: "11.602", rt: "3.676", avg: "3,16", balita: "1.120", cases: 14, idl: "102,4%", status: "Terkendali", color: "bg-[#DCFCE7] text-[#166534]" },
                  { no: 4, name: "Petungkriyono", pop: "13.635", rt: "4.444", avg: "3,07", balita: "1.290", cases: 9, idl: "103,1%", status: "Terkendali", color: "bg-[#DCFCE7] text-[#166534]" },
                  { no: 5, name: "Talun", pop: "32.542", rt: "10.518", avg: "3,10", balita: "3.190", cases: 27, idl: "99,2%", status: "Siaga", color: "bg-[#E0F2FE] text-[#075985]" },
                  { no: 6, name: "Doro", pop: "46.780", rt: "14.150", avg: "3,31", balita: "4.510", cases: 36, idl: "100,9%", status: "Siaga", color: "bg-[#E0F2FE] text-[#075985]" },
                  { no: 7, name: "Karanganyar", pop: "39.120", rt: "12.210", avg: "3,20", balita: "3.790", cases: 29, idl: "100,8%", status: "Terkendali", color: "bg-[#DCFCE7] text-[#166534]" },
                  { no: 8, name: "Kajen (Ibukota)", pop: "68.210", rt: "21.320", avg: "3,20", balita: "5.890", cases: 52, idl: "103,4%", status: "Siaga", color: "bg-[#E0F2FE] text-[#075985]" },
                  { no: 9, name: "Kesesi", pop: "71.490", rt: "22.840", avg: "3,13", balita: "6.230", cases: 37, idl: "102,5%", status: "Siaga", color: "bg-[#E0F2FE] text-[#075985]" },
                  { no: 10, name: "Sragi", pop: "58.910", rt: "18.420", avg: "3,20", balita: "4.930", cases: 42, idl: "98,7%", status: "Siaga", color: "bg-[#E0F2FE] text-[#075985]" },
                  { no: 11, name: "Siwalan", pop: "40.230", rt: "12.570", avg: "3,20", balita: "3.880", cases: 31, idl: "101,0%", status: "Terkendali", color: "bg-[#DCFCE7] text-[#166534]" },
                  { no: 12, name: "Bojong", pop: "76.320", rt: "23.850", avg: "3,20", balita: "6.910", cases: 35, idl: "102,1%", status: "Terkendali", color: "bg-[#DCFCE7] text-[#166534]" },
                  { no: 13, name: "Wonopringgo", pop: "47.880", rt: "14.960", avg: "3,20", balita: "4.420", cases: 33, idl: "101,4%", status: "Terkendali", color: "bg-[#DCFCE7] text-[#166534]" },
                  { no: 14, name: "Kedungwuni", pop: "102.430", rt: "29.950", avg: "3,42", balita: "8.210", cases: 85, idl: "104,2%", status: "Darurat", color: "bg-[#FFE4E6] text-[#9F1239]" },
                  { no: 15, name: "Buaran", pop: "48.950", rt: "14.830", avg: "3,30", balita: "4.520", cases: 39, idl: "103,1%", status: "Siaga", color: "bg-[#E0F2FE] text-[#075985]" },
                  { no: 16, name: "Tirto", pop: "54.120", rt: "16.910", avg: "3,20", balita: "5.120", cases: 44, idl: "99,8%", status: "Siaga", color: "bg-[#E0F2FE] text-[#075985]" },
                  { no: 17, name: "Wiradesa", pop: "72.410", rt: "22.620", avg: "3,20", balita: "6.450", cases: 58, idl: "102,3%", status: "Darurat", color: "bg-[#FFE4E6] text-[#9F1239]" },
                  { no: 18, name: "Wonokerto", pop: "36.190", rt: "11.310", avg: "3,20", balita: "3.490", cases: 28, idl: "100,5%", status: "Terkendali", color: "bg-[#DCFCE7] text-[#166534]" },
                  { no: 19, name: "Karangdadap", pop: "41.980", rt: "13.110", avg: "3,20", balita: "4.120", cases: 41, idl: "101,8%", status: "Siaga", color: "bg-[#E0F2FE] text-[#075985]" },
                ].map((row) => (
                  <tr key={row.no} className="hover:bg-[#F1F5F9] transition-colors">
                    <td className="py-2.5 px-3.5 text-center font-medium text-on-surface-variant tabular-nums">{row.no}</td>
                    <td className="py-2.5 px-4 font-semibold text-primary">{row.name}</td>
                    <td className="py-2.5 px-4 text-right tabular-nums">{row.pop}</td>
                    <td className="py-2.5 px-4 text-right tabular-nums">{row.rt}</td>
                    <td className="py-2.5 px-4 text-right tabular-nums">{row.avg}</td>
                    <td className="py-2.5 px-4 text-right tabular-nums">{row.balita}</td>
                    <td className="py-2.5 px-4 text-right font-medium text-primary tabular-nums">{row.cases}</td>
                    <td className="py-2.5 px-4 text-right font-medium text-[#15803D] tabular-nums">{row.idl}</td>
                    <td className="py-2.5 px-4 text-center">
                      <span className={`${row.color} px-2 py-0.5 rounded text-[11px] font-semibold`}>{row.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="bg-primary text-surface font-semibold border-t-2 border-primary-container">
                  <td className="py-3 px-4 uppercase tracking-wider text-label-md font-label-md text-white" colSpan={2}>
                    Total Kabupaten Pekalongan
                  </td>
                  <td className="py-3 px-4 text-right tabular-nums font-bold text-white">1.026.546</td>
                  <td className="py-3 px-4 text-right tabular-nums font-bold text-white">326.721</td>
                  <td className="py-3 px-4 text-right tabular-nums font-bold text-white">3,14</td>
                  <td className="py-3 px-4 text-right tabular-nums font-bold text-white">99.625</td>
                  <td className="py-3 px-4 text-right tabular-nums font-bold text-secondary-fixed">669</td>
                  <td className="py-3 px-4 text-right tabular-nums font-bold text-[#DCFCE7]">101,5%</td>
                  <td className="py-3 px-4 text-center">
                    <span className="bg-[#DCFCE7] text-[#14532D] px-2.5 py-0.5 rounded text-[11px] font-bold">Terkendali</span>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </section>

        {/* Footer Directives Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-surface-container-low border border-outline-variant/30 rounded-lg p-4 flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-[#FEF3C7] text-[#B45309] flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[20px]">lightbulb</span>
            </div>
            <div>
              <span className="font-title-lg text-label-lg text-primary block font-bold">Validasi &amp; Verifikasi Wilayah</span>
              <p className="text-body-sm font-body-sm text-on-surface-variant mt-1 leading-relaxed">
                Data cakupan imunisasi dasar lengkap (&gt;100%) merefleksikan pencatatan kohort bayi baru lahir dan kedatangan balita non-domisili dari Kabupaten Batang dan Pemalang yang berobat ke Puskesmas perbatasan.
              </p>
            </div>
          </div>

          <div className="bg-surface-container-low border border-outline-variant/30 rounded-lg p-4 flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-[#E0F2FE] text-[#0369A1] flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[20px]">insights</span>
            </div>
            <div>
              <span className="font-title-lg text-label-lg text-primary block font-bold">Rekomendasi Distribusi Nakes</span>
              <p className="text-body-sm font-body-sm text-on-surface-variant mt-1 leading-relaxed">
                Alokasi dokter spesialis anak keliling dioptimalkan tiap Selasa-Kamis di Puskesmas Kedungwuni I, Wiradesa, dan Kajen untuk menekan Case Fatality Rate balita di bawah 1,5%.
              </p>
            </div>
          </div>

          <div className="bg-surface-container-low border border-outline-variant/30 rounded-lg p-4 flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-[#DCFCE7] text-[#15803D] flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[20px]">cloud_sync</span>
            </div>
            <div>
              <span className="font-title-lg text-label-lg text-primary block font-bold">Sinkronisasi Satu Data Dinkes</span>
              <p className="text-body-sm font-body-sm text-on-surface-variant mt-1 leading-relaxed">
                Terhubung real-time dengan Pusdatin Kemenkes RI, e-PPGBM Stunting, dan Sistem Informasi Surveilans Terpadu (SIST) Jawa Tengah. Update otomatis tiap pukul 00:00 WIB.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full bg-surface-container-lowest border-t border-outline-variant/30 flex flex-col md:flex-row justify-between items-center px-6 py-4">
        <div className="flex items-center gap-3">
          <span className="text-body-sm font-body-sm text-on-surface-variant">
            © 2024 Dinas Kesehatan Pemerintah Kabupaten Pekalongan. Sistem Informasi Surveilans Terpadu.
          </span>
        </div>
        <div className="flex items-center gap-5 mt-2 md:mt-0 text-label-md font-label-md">
          <span className="text-on-surface-variant">Satu Data Kesehatan</span>
          <span className="text-outline-variant">•</span>
          <span className="text-on-surface-variant">Portal Pemkab Pekalongan</span>
          <span className="text-outline-variant">•</span>
          <span className="text-on-surface-variant">Kebijakan Privasi</span>
          <span className="text-outline-variant">•</span>
          <span className="text-primary font-semibold flex items-center gap-1">
            <span className="material-symbols-outlined text-[16px] text-error">phone_in_talk</span>
            Kontak Darurat SPGDT 119
          </span>
        </div>
      </footer>
    </div>
  );
}
