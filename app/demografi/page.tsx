export default function DemografiPage() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-background">
      {/* Top Header */}
      <header className="sticky top-0 right-0 z-30 w-full bg-surface-container-lowest dark:bg-surface-container-low border-b border-outline-variant/30 shadow-sm">
        <div className="flex flex-col sm:flex-row justify-between sm:items-center px-4 sm:px-6 py-3 w-full gap-3">
          <div className="flex items-center gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-headline-md font-headline-md text-primary tracking-tight">
                  Analisis Demografi &amp; Penduduk Balita
                </span>
                <span className="px-2 py-0.5 rounded-full text-label-md font-label-md bg-secondary-container text-on-secondary-container font-semibold">
                  Resmi BPS &amp; Dinkes
                </span>
              </div>
              <div className="flex items-center gap-2 text-body-sm font-body-sm text-on-surface-variant">
                <span>Kabupaten Pekalongan – Tahun 2024</span>
                <span>•</span>
                <span className="text-secondary font-medium">Program Pencegahan Pneumonia &amp; Stunting Balita</span>
              </div>
            </div>
          </div>
          {/* Controls & Trailing Actions */}
          <div className="flex items-center gap-3 self-end sm:self-auto">
            <div className="flex items-center bg-surface-container-low border border-outline-variant/50 rounded-lg px-3 py-1.5 gap-2 text-body-sm font-body-sm text-on-surface">
              <span className="material-symbols-outlined text-[18px] text-secondary">filter_alt</span>
              <span className="font-medium">Filter Kecamatan: Semua (19 Kec.)</span>
            </div>
            <div className="flex items-center bg-primary-container text-surface-bright rounded-lg px-3 py-1.5 gap-2 text-body-sm font-body-sm shadow-sm cursor-pointer hover:bg-primary transition-colors">
              <span className="material-symbols-outlined text-[18px] text-tertiary-fixed">calendar_today</span>
              <span className="font-semibold">Tahun 2024</span>
              <span className="material-symbols-outlined text-[16px]">expand_more</span>
            </div>
            <button
              aria-label="Notifikasi Sistem"
              className="w-9 h-9 rounded-lg border border-outline-variant/40 flex items-center justify-center text-on-surface-variant hover:bg-surface-container transition-colors relative"
            >
              <span className="material-symbols-outlined text-[20px]">notifications</span>
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-error"></span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="w-full px-4 sm:px-7 py-6 space-y-6">
        {/* KPI Metric Row */}
        <section aria-label="Ringkasan Indikator Kunci Demografi" className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {/* KPI 1 */}
          <div className="bg-blue-50/70 border border-blue-200/80 rounded-xl p-4 shadow-sm relative overflow-hidden flex flex-col justify-between">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-label-md font-label-md text-blue-900 tracking-wider">TOTAL PENDUDUK KABUPATEN</p>
                <h2 className="text-metric-display font-metric-display text-primary mt-1 tabular-nums">1.026.546</h2>
                <p className="text-body-sm font-body-sm text-blue-800 font-medium">jiwa terdaftar resmi Dukcapil</p>
              </div>
              <div className="w-11 h-11 rounded-xl bg-blue-100/90 text-blue-800 flex items-center justify-center shadow-xs">
                <span className="material-symbols-outlined text-[24px]">groups</span>
              </div>
            </div>
            <div className="mt-3 pt-2.5 border-t border-blue-200/60 flex items-center justify-between text-body-sm font-body-sm">
              <span className="text-blue-900 flex items-center gap-1 font-medium">
                <span className="material-symbols-outlined text-[16px] text-blue-700">trending_up</span> +0,82% laju pertumbuhan
              </span>
              <span className="text-label-md font-label-md bg-blue-200/80 text-blue-900 px-2 py-0.5 rounded-full font-semibold">
                19 Kecamatan
              </span>
            </div>
          </div>

          {/* KPI 2 */}
          <div className="bg-purple-50/70 border border-purple-200/80 rounded-xl p-4 shadow-sm relative overflow-hidden flex flex-col justify-between">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-label-md font-label-md text-purple-900 tracking-wider">JUMLAH BALITA (0–4 TAHUN)</p>
                <h2 className="text-metric-display font-metric-display text-primary mt-1 tabular-nums">99.625</h2>
                <p className="text-body-sm font-body-sm text-purple-900 font-medium">9,71% dari total penduduk</p>
              </div>
              <div className="w-11 h-11 rounded-xl bg-purple-100/90 text-purple-800 flex items-center justify-center shadow-xs">
                <span className="material-symbols-outlined text-[24px]">child_care</span>
              </div>
            </div>
            <div className="mt-3 pt-2.5 border-t border-purple-200/60 flex items-center justify-between text-body-sm font-body-sm">
              <span className="text-purple-900 flex items-center gap-1 font-medium">
                <span className="material-symbols-outlined text-[16px] text-purple-700">shield</span> Target Kohort Terdata
              </span>
              <span className="text-label-md font-label-md bg-purple-200/80 text-purple-950 px-2 py-0.5 rounded-full font-semibold">
                Sasaran Prioritas
              </span>
            </div>
          </div>

          {/* KPI 3 */}
          <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-xl p-4 shadow-sm relative overflow-hidden flex flex-col justify-between">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-label-md font-label-md text-emerald-900 tracking-wider">JUMLAH RUMAH TANGGA (KK)</p>
                <h2 className="text-metric-display font-metric-display text-primary mt-1 tabular-nums">326.721</h2>
                <p className="text-body-sm font-body-sm text-emerald-900 font-medium">Rata-rata 3,14 jiwa / RT</p>
              </div>
              <div className="w-11 h-11 rounded-xl bg-emerald-100/90 text-emerald-800 flex items-center justify-center shadow-xs">
                <span className="material-symbols-outlined text-[24px]">cottage</span>
              </div>
            </div>
            <div className="mt-3 pt-2.5 border-t border-emerald-200/60 flex items-center justify-between text-body-sm font-body-sm">
              <span className="text-emerald-900 flex items-center gap-1 font-medium">
                <span className="material-symbols-outlined text-[16px] text-emerald-700">check_circle</span> Kerapatan Domisili Ideal
              </span>
              <span className="text-label-md font-label-md bg-emerald-200/80 text-emerald-950 px-2 py-0.5 rounded-full font-semibold">
                272 Desa / Kelurahan
              </span>
            </div>
          </div>

          {/* KPI 4 */}
          <div className="bg-amber-50/70 border border-amber-200/80 rounded-xl p-4 shadow-sm relative overflow-hidden flex flex-col justify-between">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-label-md font-label-md text-amber-900 tracking-wider">RASIO JENIS KELAMIN BALITA</p>
                <h2 className="text-metric-display font-metric-display text-primary mt-1 tabular-nums">103,4</h2>
                <p className="text-body-sm font-body-sm text-amber-900 font-medium">50,83% Laki-laki | 49,17% Perempuan</p>
              </div>
              <div className="w-11 h-11 rounded-xl bg-amber-100/90 text-amber-800 flex items-center justify-center shadow-xs">
                <span className="material-symbols-outlined text-[24px]">wc</span>
              </div>
            </div>
            <div className="mt-3 pt-2.5 border-t border-amber-200/60 flex items-center justify-between text-body-sm font-body-sm">
              <span className="text-amber-900 flex items-center gap-1 font-medium">
                <span className="material-symbols-outlined text-[16px] text-amber-700">balance</span> 50.640 L vs 48.985 P
              </span>
              <span className="text-label-md font-label-md bg-amber-200/80 text-amber-950 px-2 py-0.5 rounded-full font-semibold">
                Seimbang
              </span>
            </div>
          </div>
        </section>

        {/* Operational Analytical Grid */}
        <div className="grid grid-cols-12 gap-6">
          {/* Left: Choropleth Grid */}
          <div className="col-span-12 xl:col-span-7 bg-surface-container-lowest border border-outline-variant/30 rounded-xl overflow-hidden shadow-sm flex flex-col">
            <div className="bg-primary-container text-surface-bright px-5 py-3.5 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-secondary-container text-[20px]">map</span>
                <div>
                  <h3 className="text-title-lg font-title-lg leading-tight">Peta Choropleth Kepadatan Penduduk &amp; Balita</h3>
                  <p className="text-body-sm font-body-sm text-on-primary-container">Surveilans Teritorial 19 Kecamatan Kab. Pekalongan</p>
                </div>
              </div>
              <span className="text-label-md font-label-md bg-surface-container-lowest/15 text-surface-bright px-2.5 py-1 rounded">
                Skala: Balita per Km²
              </span>
            </div>

            <div className="p-5 flex-1 flex flex-col justify-between bg-surface-container-low/30 relative">
              <div className="relative w-full h-[280px] bg-gradient-to-br from-blue-50/50 to-surface-container-low rounded-lg border border-outline-variant/20 p-4 flex items-center justify-center overflow-hidden">
                <div className="w-full max-w-lg grid grid-cols-5 gap-2 text-center text-body-sm font-body-sm select-none">
                  <div className="p-2 rounded bg-blue-900 text-surface-bright border border-blue-950 shadow-xs">
                    <p className="font-bold text-label-md">Wonokerto</p>
                    <p className="text-[10px] opacity-80 tabular-nums">4.120 Balita</p>
                  </div>
                  <div className="p-2 rounded bg-blue-800 text-surface-bright border border-blue-900 shadow-xs">
                    <p className="font-bold text-label-md">Wiradesa</p>
                    <p className="text-[10px] opacity-80 tabular-nums">7.410 Balita</p>
                  </div>
                  <div className="p-2 rounded bg-blue-900 text-surface-bright border border-blue-950 shadow-xs">
                    <p className="font-bold text-label-md">Tirto</p>
                    <p className="text-[10px] opacity-80 tabular-nums">6.980 Balita</p>
                  </div>
                  <div className="p-2 rounded bg-blue-700 text-surface-bright border border-blue-800 shadow-xs">
                    <p className="font-bold text-label-md">Buaran</p>
                    <p className="text-[10px] opacity-80 tabular-nums">5.120 Balita</p>
                  </div>
                  <div className="p-2 rounded bg-blue-600 text-surface-bright border border-blue-700 shadow-xs">
                    <p className="font-bold text-label-md">Siwalan</p>
                    <p className="text-[10px] opacity-80 tabular-nums">4.330 Balita</p>
                  </div>
                  <div className="p-2 rounded bg-blue-600 text-surface-bright border border-blue-700 shadow-xs">
                    <p className="font-bold text-label-md">Sragi</p>
                    <p className="text-[10px] opacity-80 tabular-nums">5.820 Balita</p>
                  </div>
                  <div className="p-2 rounded bg-blue-800 text-surface-bright border border-blue-900 shadow-xs ring-2 ring-amber-400">
                    <p className="font-bold text-label-md">Kedungwuni</p>
                    <p className="text-[10px] opacity-80 tabular-nums">9.845 Balita</p>
                  </div>
                  <div className="p-2 rounded bg-blue-700 text-surface-bright border border-blue-800 shadow-xs">
                    <p className="font-bold text-label-md">Bojong</p>
                    <p className="text-[10px] opacity-80 tabular-nums">6.890 Balita</p>
                  </div>
                  <div className="p-2 rounded bg-blue-600 text-surface-bright border border-blue-700 shadow-xs">
                    <p className="font-bold text-label-md">Karangdadap</p>
                    <p className="text-[10px] opacity-80 tabular-nums">4.180 Balita</p>
                  </div>
                  <div className="p-2 rounded bg-blue-500 text-surface-bright border border-blue-600 shadow-xs">
                    <p className="font-bold text-label-md">Wonopringgo</p>
                    <p className="text-[10px] opacity-80 tabular-nums">4.720 Balita</p>
                  </div>
                  <div className="p-2 rounded bg-blue-400 text-surface-bright border border-blue-500 shadow-xs">
                    <p className="font-bold text-label-md">Kesesi</p>
                    <p className="text-[10px] opacity-80 tabular-nums">6.230 Balita</p>
                  </div>
                  <div className="p-2 rounded bg-blue-700 text-surface-bright border border-blue-800 shadow-xs">
                    <p className="font-bold text-label-md">Kajen (Ibukota)</p>
                    <p className="text-[10px] opacity-80 tabular-nums">6.540 Balita</p>
                  </div>
                  <div className="p-2 rounded bg-blue-400 text-surface-bright border border-blue-500 shadow-xs">
                    <p className="font-bold text-label-md">Karanganyar</p>
                    <p className="text-[10px] opacity-80 tabular-nums">4.210 Balita</p>
                  </div>
                  <div className="p-2 rounded bg-blue-300 text-on-surface border border-blue-400 shadow-xs">
                    <p className="font-bold text-label-md">Doro</p>
                    <p className="text-[10px] opacity-80 tabular-nums">4.090 Balita</p>
                  </div>
                  <div className="p-2 rounded bg-blue-300 text-on-surface border border-blue-400 shadow-xs">
                    <p className="font-bold text-label-md">Talun</p>
                    <p className="text-[10px] opacity-80 tabular-nums">3.120 Balita</p>
                  </div>
                  <div className="col-start-2 p-2 rounded bg-blue-200 text-on-surface border border-blue-300 shadow-xs">
                    <p className="font-bold text-label-md">Paninggaran</p>
                    <p className="text-[10px] opacity-80 tabular-nums">3.840 Balita</p>
                  </div>
                  <div className="p-2 rounded bg-blue-200 text-on-surface border border-blue-300 shadow-xs">
                    <p className="font-bold text-label-md">Kandangserang</p>
                    <p className="text-[10px] opacity-80 tabular-nums">3.310 Balita</p>
                  </div>
                  <div className="p-2 rounded bg-blue-100 text-blue-900 border border-blue-200 shadow-xs">
                    <p className="font-bold text-label-md">Lebakbarang</p>
                    <p className="text-[10px] opacity-80 tabular-nums">1.090 Balita</p>
                  </div>
                  <div className="p-2 rounded bg-blue-100 text-blue-900 border border-blue-200 shadow-xs">
                    <p className="font-bold text-label-md">Petungkriyono</p>
                    <p className="text-[10px] opacity-80 tabular-nums">1.280 Balita</p>
                  </div>
                </div>
              </div>

              {/* Legend */}
              <div className="mt-4 pt-3 border-t border-outline-variant/30 flex flex-wrap items-center justify-between gap-3 text-body-sm font-body-sm">
                <div className="flex items-center gap-2">
                  <span className="text-label-md font-label-md text-on-surface font-semibold">Legenda Balita / Km²:</span>
                  <div className="flex items-center gap-1.5">
                    <span className="w-3.5 h-3.5 rounded bg-blue-100 border border-blue-200"></span>
                    <span className="text-body-sm text-outline">&lt; 150</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-3.5 h-3.5 rounded bg-blue-300 border border-blue-400"></span>
                    <span className="text-body-sm text-outline">150–350</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-3.5 h-3.5 rounded bg-blue-600"></span>
                    <span className="text-body-sm text-outline">350–600</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-3.5 h-3.5 rounded bg-blue-900"></span>
                    <span className="text-body-sm text-outline">&gt; 600</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 text-label-md font-label-md bg-amber-100 text-amber-900 px-2 py-0.5 rounded font-semibold border border-amber-200">
                    <span className="w-2 h-2 rounded-full bg-amber-500"></span> Sorotan: Kedungwuni (9.845)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Age Distribution */}
          <div className="col-span-12 xl:col-span-5 bg-surface-container-lowest border border-outline-variant/30 rounded-xl overflow-hidden shadow-sm flex flex-col justify-between">
            <div className="p-4 border-b border-outline-variant/30 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-5 bg-secondary rounded-sm"></span>
                <div>
                  <h3 className="text-title-lg font-title-lg text-primary">Piramida &amp; Distribusi Kelompok Usia</h3>
                  <p className="text-body-sm font-body-sm text-outline">Struktur Beban Ketergantungan Penduduk 2024</p>
                </div>
              </div>
              <span className="material-symbols-outlined text-outline">file_open</span>
            </div>

            <div className="p-5 space-y-4 flex-1 flex flex-col justify-center">
              <div>
                <div className="flex justify-between items-center text-body-sm font-body-sm mb-1">
                  <span className="font-bold text-on-surface flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-purple-600"></span> 0 – 4 Tahun (Balita Kohort)
                  </span>
                  <span className="tabular-nums font-semibold text-primary">99.625 jiwa (9,71%)</span>
                </div>
                <div className="w-full bg-surface-container h-3 rounded-full overflow-hidden">
                  <div className="bg-purple-600 h-full rounded-full" style={{ width: "9.71%" }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center text-body-sm font-body-sm mb-1">
                  <span className="text-on-surface-variant flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span> 5 – 14 Tahun (Anak &amp; Remaja Awal)
                  </span>
                  <span className="tabular-nums font-medium text-on-surface">172.460 jiwa (16,80%)</span>
                </div>
                <div className="w-full bg-surface-container h-3 rounded-full overflow-hidden">
                  <div className="bg-blue-500 h-full rounded-full" style={{ width: "16.80%" }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center text-body-sm font-body-sm mb-1">
                  <span className="text-on-surface-variant flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-blue-400"></span> 15 – 19 Tahun (Remaja Akhir)
                  </span>
                  <span className="tabular-nums font-medium text-on-surface">149.876 jiwa (14,60%)</span>
                </div>
                <div className="w-full bg-surface-container h-3 rounded-full overflow-hidden">
                  <div className="bg-blue-400 h-full rounded-full" style={{ width: "14.60%" }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center text-body-sm font-body-sm mb-1">
                  <span className="text-on-surface-variant flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-primary-container"></span> 20 – 59 Tahun (Usia Produktif)
                  </span>
                  <span className="tabular-nums font-semibold text-primary">548.176 jiwa (53,40%)</span>
                </div>
                <div className="w-full bg-surface-container h-3 rounded-full overflow-hidden">
                  <div className="bg-primary-container h-full rounded-full" style={{ width: "53.40%" }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center text-body-sm font-body-sm mb-1">
                  <span className="text-on-surface-variant flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-slate-400"></span> ≥ 60 Tahun (Lanjut Usia)
                  </span>
                  <span className="tabular-nums font-medium text-on-surface">56.409 jiwa (5,49%)</span>
                </div>
                <div className="w-full bg-surface-container h-3 rounded-full overflow-hidden">
                  <div className="bg-slate-400 h-full rounded-full" style={{ width: "5.49%" }}></div>
                </div>
              </div>
            </div>

            <div className="p-3.5 bg-surface-container-low/60 border-t border-outline-variant/30 flex items-center justify-between text-body-sm font-body-sm">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-[18px]">family_restroom</span>
                <span className="text-on-surface-variant">Rasio Ketergantungan (Dependency Ratio):</span>
              </div>
              <span className="font-bold text-primary tabular-nums">47,2 per 100 usia produktif</span>
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-12 gap-6">
          {/* Tipologi Geografis */}
          <div className="col-span-12 xl:col-span-4 bg-surface-container-lowest border border-outline-variant/30 rounded-xl overflow-hidden shadow-sm flex flex-col justify-between">
            <div className="p-4 border-b border-outline-variant/30">
              <h3 className="text-title-lg font-title-lg text-primary">Tipologi Geografis Balita</h3>
              <p className="text-body-sm font-body-sm text-outline">Karakteristik Lingkungan &amp; Risiko Kesehatan</p>
            </div>
            <div className="p-5 space-y-4">
              <div className="p-3 rounded-lg bg-surface-container-low border border-outline-variant/20 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-blue-100 text-blue-800 flex items-center justify-center">
                    <span className="material-symbols-outlined text-[20px]">water</span>
                  </div>
                  <div>
                    <p className="text-label-lg font-label-lg text-primary">Pesisir Pantura</p>
                    <p className="text-body-sm font-body-sm text-outline">Wonokerto, Tirto, Wiradesa</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-primary tabular-nums text-title-lg">24.520</p>
                  <span className="text-label-md font-label-md text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded font-semibold">24,6% Balita</span>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-surface-container-low border border-outline-variant/20 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center">
                    <span className="material-symbols-outlined text-[20px]">apartment</span>
                  </div>
                  <div>
                    <p className="text-label-lg font-label-lg text-primary">Dataran Rendah &amp; Urban</p>
                    <p className="text-body-sm font-body-sm text-outline">Kedungwuni, Buaran, Kajen</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-primary tabular-nums text-title-lg">52.885</p>
                  <span className="text-label-md font-label-md text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded font-semibold">53,1% Balita</span>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-surface-container-low border border-outline-variant/20 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center">
                    <span className="material-symbols-outlined text-[20px]">landscape</span>
                  </div>
                  <div>
                    <p className="text-label-lg font-label-lg text-primary">Pegunungan Selatan</p>
                    <p className="text-body-sm font-body-sm text-outline">Petungkriyono, Lebakbarang</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-primary tabular-nums text-title-lg">22.220</p>
                  <span className="text-label-md font-label-md text-amber-800 bg-amber-50 px-1.5 py-0.5 rounded font-semibold">22,3% Balita</span>
                </div>
              </div>
            </div>
            <div className="p-3.5 bg-amber-50/50 border-t border-amber-200/50 text-body-sm font-body-sm text-amber-950 flex items-center gap-2">
              <span className="material-symbols-outlined text-amber-700 text-[18px]">info</span>
              <span>Suhu dingin pegunungan &amp; rob pesisir berkorelasi dengan kerentanan ISPA/Pneumonia balita.</span>
            </div>
          </div>

          {/* Table */}
          <div className="col-span-12 xl:col-span-8 bg-surface-container-lowest border border-outline-variant/30 rounded-xl overflow-hidden shadow-sm flex flex-col justify-between">
            <div className="p-4 border-b border-outline-variant/30 flex items-center justify-between">
              <div>
                <h3 className="text-title-lg font-title-lg text-primary">Tabel Komparasi Profil Demografi Kecamatan</h3>
                <p className="text-body-sm font-body-sm text-outline">Perbandingan Wilayah Densitas Tertinggi vs Terendah (Kab. Pekalongan 2024)</p>
              </div>
              <span className="text-label-md font-label-md bg-secondary-container/40 text-on-secondary-container px-2 py-1 rounded font-semibold">
                Data Surveilans Dinkes
              </span>
            </div>

            <div className="overflow-x-auto flex-1">
              <table className="w-full text-left border-collapse text-body-sm font-body-sm">
                <thead>
                  <tr className="bg-surface-container-low border-b border-outline-variant/30 text-outline text-[11px] uppercase tracking-wider font-semibold">
                    <th className="py-2.5 px-4">Kategori / Kecamatan</th>
                    <th className="py-2.5 px-4 text-right">Luas (Km²)</th>
                    <th className="py-2.5 px-4 text-right">Total Penduduk</th>
                    <th className="py-2.5 px-4 text-right">Balita (0–4 th)</th>
                    <th className="py-2.5 px-4 text-right">Jml Rumah Tangga</th>
                    <th className="py-2.5 px-4 text-right">Kepadatan (Jiwa/Km²)</th>
                    <th className="py-2.5 px-4 text-center">Status Faskes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/20">
                  <tr className="hover:bg-surface-container-low/50 transition-colors">
                    <td className="py-2.5 px-4 font-semibold text-primary flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-rose-500"></span> Kedungwuni (Terpadat #1)
                    </td>
                    <td className="py-2.5 px-4 text-right tabular-nums text-on-surface-variant">22,27</td>
                    <td className="py-2.5 px-4 text-right tabular-nums font-semibold text-primary">102.430</td>
                    <td className="py-2.5 px-4 text-right tabular-nums text-purple-900 font-bold">9.845</td>
                    <td className="py-2.5 px-4 text-right tabular-nums text-on-surface-variant">32.620</td>
                    <td className="py-2.5 px-4 text-right tabular-nums font-bold text-rose-700">4.599</td>
                    <td className="py-2.5 px-4 text-center">
                      <span className="inline-block px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-100 text-emerald-800">2 Puskesmas</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-surface-container-low/50 transition-colors">
                    <td className="py-2.5 px-4 font-semibold text-primary flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-rose-500"></span> Buaran (Terpadat #2)
                    </td>
                    <td className="py-2.5 px-4 text-right tabular-nums text-on-surface-variant">9,43</td>
                    <td className="py-2.5 px-4 text-right tabular-nums font-medium text-primary">48.910</td>
                    <td className="py-2.5 px-4 text-right tabular-nums text-purple-900 font-bold">5.120</td>
                    <td className="py-2.5 px-4 text-right tabular-nums text-on-surface-variant">15.576</td>
                    <td className="py-2.5 px-4 text-right tabular-nums font-bold text-rose-700">5.186</td>
                    <td className="py-2.5 px-4 text-center">
                      <span className="inline-block px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-100 text-emerald-800">1 Puskesmas</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-surface-container-low/50 transition-colors">
                    <td className="py-2.5 px-4 font-semibold text-primary flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-rose-500"></span> Wiradesa (Terpadat #3)
                    </td>
                    <td className="py-2.5 px-4 text-right tabular-nums text-on-surface-variant">24,78</td>
                    <td className="py-2.5 px-4 text-right tabular-nums font-medium text-primary">76.320</td>
                    <td className="py-2.5 px-4 text-right tabular-nums text-purple-900 font-bold">7.410</td>
                    <td className="py-2.5 px-4 text-right tabular-nums text-on-surface-variant">24.305</td>
                    <td className="py-2.5 px-4 text-right tabular-nums font-bold text-rose-700">3.079</td>
                    <td className="py-2.5 px-4 text-center">
                      <span className="inline-block px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-100 text-emerald-800">1 Puskesmas Siaga</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-surface-container-low/50 transition-colors bg-blue-50/20">
                    <td className="py-2.5 px-4 font-semibold text-primary flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-500"></span> Petungkriyono (Tersepi #1)
                    </td>
                    <td className="py-2.5 px-4 text-right tabular-nums text-on-surface-variant">73,59</td>
                    <td className="py-2.5 px-4 text-right tabular-nums font-medium text-primary">13.635</td>
                    <td className="py-2.5 px-4 text-right tabular-nums text-purple-900 font-bold">1.280</td>
                    <td className="py-2.5 px-4 text-right tabular-nums text-on-surface-variant">4.444</td>
                    <td className="py-2.5 px-4 text-right tabular-nums font-bold text-blue-700">185</td>
                    <td className="py-2.5 px-4 text-center">
                      <span className="inline-block px-2 py-0.5 rounded text-[11px] font-semibold bg-amber-100 text-amber-900">1 Pustu / Poskesdes</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-surface-container-low/50 transition-colors bg-blue-50/20">
                    <td className="py-2.5 px-4 font-semibold text-primary flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-500"></span> Lebakbarang (Tersepi #2)
                    </td>
                    <td className="py-2.5 px-4 text-right tabular-nums text-on-surface-variant">46,21</td>
                    <td className="py-2.5 px-4 text-right tabular-nums font-medium text-primary">11.602</td>
                    <td className="py-2.5 px-4 text-right tabular-nums text-purple-900 font-bold">1.090</td>
                    <td className="py-2.5 px-4 text-right tabular-nums text-on-surface-variant">3.676</td>
                    <td className="py-2.5 px-4 text-right tabular-nums font-bold text-blue-700">251</td>
                    <td className="py-2.5 px-4 text-center">
                      <span className="inline-block px-2 py-0.5 rounded text-[11px] font-semibold bg-amber-100 text-amber-900">1 Puskesmas Daerah Terpencil</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="p-3 bg-surface-container-low/40 border-t border-outline-variant/30 flex items-center justify-between text-body-sm font-body-sm">
              <span className="text-on-surface-variant">Total 19 Kecamatan diinput otomatis ke dalam Sistem Surveilans Dinkes</span>
            </div>
          </div>
        </div>

        {/* Bottom Tri-Panel Insights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="bg-amber-50/70 border border-amber-200/80 rounded-xl p-4 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-amber-900 mb-2">
                <span className="material-symbols-outlined text-[20px] text-amber-700">warning</span>
                <h4 className="text-title-lg font-title-lg text-amber-950">Catatan Demografi &amp; Risiko</h4>
              </div>
              <ul className="text-body-sm font-body-sm text-amber-900/90 space-y-1.5 list-disc pl-4">
                <li>Kecamatan Kedungwuni dan Buaran memiliki tingkat kepadatan di atas 4.500 jiwa/km², mempercepat transmisi infeksi saluran pernapasan.</li>
                <li>Wilayah dataran tinggi (Petungkriyono &amp; Lebakbarang) memiliki hambatan geografis rujukan darurat anak ke RSUD Kajen atau RSUD Kraton.</li>
                <li>Pencatatan kohort balita terintegrasi dengan data Posyandu Prima di seluruh 272 desa.</li>
              </ul>
            </div>
            <div className="mt-3 pt-2 border-t border-amber-200/60 text-label-md font-label-md text-amber-800">
              Update Data: Sinkronisasi Terakhir 14 November 2024
            </div>
          </div>

          <div className="bg-indigo-50/70 border border-indigo-200/80 rounded-xl p-4 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-indigo-900 mb-2">
                <span className="material-symbols-outlined text-[20px] text-indigo-700">insights</span>
                <h4 className="text-title-lg font-title-lg text-indigo-950">Kesimpulan Surveilans Balita</h4>
              </div>
              <p className="text-body-sm font-body-sm text-indigo-900/90 leading-relaxed">
                Dari total <strong className="font-bold">99.625 balita</strong> di Pekalongan, 53,1% terkonsentrasi di kawasan aglomerasi perkotaan dan industri konveksi. Intervensi penanganan pneumonia harus difokuskan pada mitigasi polusi domestik, ventilasi rumah padat, dan ketepatan imunisasi PCV.
              </p>
            </div>
            <div className="mt-3 pt-2 border-t border-indigo-200/60 flex items-center justify-between text-label-md font-label-md text-indigo-800">
              <span>Tingkat Kesiapan Posyandu:</span>
              <span className="font-bold bg-indigo-200/80 px-2 py-0.5 rounded text-indigo-950">98,2% Aktif</span>
            </div>
          </div>

          <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-xl p-4 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-emerald-900 mb-2">
                <span className="material-symbols-outlined text-[20px] text-emerald-700">source</span>
                <h4 className="text-title-lg font-title-lg text-emerald-950">Sumber Data &amp; Otoritas</h4>
              </div>
              <p className="text-body-sm font-body-sm text-emerald-900/90 leading-relaxed">
                Data kependudukan bersumber dari registrasi resmi <strong className="font-bold">Badan Pusat Statistik (BPS)</strong> Kabupaten Pekalongan, Dinas Kependudukan dan Pencatatan Sipil (Disdukcapil), serta Surveilans Kohort Balita Seksi Kesga &amp; Gizi Dinkes Kab. Pekalongan 2024.
              </p>
            </div>
            <div className="mt-3 pt-2 border-t border-emerald-200/60 flex items-center justify-between text-label-md font-label-md text-emerald-800">
              <span className="flex items-center gap-1 font-semibold">
                <span className="material-symbols-outlined text-[16px]">verified</span> Validitas Terverifikasi
              </span>
              <span className="text-emerald-950 font-bold">BPS &amp; DINKES 2024</span>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full bg-surface-container-lowest dark:bg-surface-container-low border-t border-outline-variant/30 flex flex-col md:flex-row justify-between items-center px-6 py-4 mt-8">
        <div className="flex items-center gap-2 text-center md:text-left mb-2 md:mb-0">
          <span className="material-symbols-outlined text-secondary text-[18px]">verified</span>
          <p className="text-body-sm font-body-sm text-on-surface-variant">
            © 2024 Dinas Kesehatan Pemerintah Kabupaten Pekalongan. Sistem Informasi Surveilans Terpadu.
          </p>
        </div>
        <div className="flex items-center gap-5 text-label-md font-label-md">
          <span className="text-on-surface-variant">Satu Data Kesehatan</span>
          <span className="text-on-surface-variant">Portal Pemkab Pekalongan</span>
          <span className="text-on-surface-variant">Kebijakan Privasi</span>
          <span className="text-primary font-semibold flex items-center gap-1">
            <span className="material-symbols-outlined text-[16px] text-error">phone_in_talk</span>
            <span>Kontak Darurat SPGDT 119</span>
          </span>
        </div>
      </footer>
    </div>
  );
}
