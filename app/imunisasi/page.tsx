export default function ImunisasiPage() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-between bg-surface-container-low/20">
      {/* Top Header */}
      <header className="sticky top-0 right-0 z-30 w-full bg-surface-container-lowest border-b border-outline-variant/30 px-4 sm:px-7 py-3 flex flex-col sm:flex-row justify-between sm:items-center gap-3 shadow-sm">
        <div className="flex items-center gap-4">
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-headline-md font-headline-md text-primary font-bold tracking-tight">
                Cakupan Imunisasi Dasar Lengkap (IDL) &amp; Vaksinasi Balita
              </h1>
              <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold bg-[#DCFCE7] text-[#166534] border border-[#BBF7D0]">
                Surveilans Terpadu
              </span>
            </div>
            <p className="text-body-sm font-body-sm text-on-surface-variant flex items-center gap-2 mt-0.5">
              <span>Kabupaten Pekalongan – Tahun 2024</span>
              <span className="inline-block w-1 h-1 rounded-full bg-outline"></span>
              <span>Program Pencegahan Pneumonia &amp; Stunting Balita</span>
            </p>
          </div>
        </div>
        {/* Actions & Filters */}
        <div className="flex items-center gap-3 self-end sm:self-auto">
          <button
            className="h-[38px] px-3.5 bg-surface-container-lowest border border-[#CBD5E1] rounded-lg text-primary hover:bg-[#F8FAFC] text-label-lg font-label-lg flex items-center gap-2 transition-all active:scale-95 shadow-xs"
            type="button"
          >
            <span className="material-symbols-outlined text-[18px] text-secondary" data-icon="filter_alt">filter_alt</span>
            <span>Filter Kecamatan: Semua</span>
            <span className="material-symbols-outlined text-[16px] text-outline" data-icon="expand_more">expand_more</span>
          </button>
          <button
            className="h-[38px] px-3.5 bg-primary-container text-white rounded-lg text-label-lg font-label-lg flex items-center gap-2 hover:bg-[#133E87] transition-all active:scale-95 shadow-xs"
            type="button"
          >
            <span className="material-symbols-outlined text-[17px] text-[#8eafff]" data-icon="calendar_today">calendar_today</span>
            <span>Tahun: 2024</span>
            <span className="material-symbols-outlined text-[16px] text-[#8eafff]" data-icon="arrow_drop_down">arrow_drop_down</span>
          </button>
          <button
            className="w-[38px] h-[38px] flex items-center justify-center rounded-lg border border-[#CBD5E1] bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container transition-colors relative"
            title="Notifikasi Surveilans"
            type="button"
          >
            <span className="material-symbols-outlined text-[19px]" data-icon="notifications">notifications</span>
            <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full ring-2 ring-white"></span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-4 sm:p-7 max-w-[1920px] mx-auto w-full flex-1 flex flex-col gap-6">
        {/* KPI Metric Cards */}
        <section aria-label="Ringkasan Kinerja Imunisasi" className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          <div className="bg-[#DCFCE7]/70 border border-[#86EFAC] rounded-xl p-4.5 flex flex-col justify-between shadow-sm relative overflow-hidden transition-all hover:shadow-md">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-lg bg-[#166534] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <span className="material-symbols-outlined text-[22px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    verified
                  </span>
                </div>
                <div>
                  <span className="text-label-md font-label-md text-[#166534] tracking-wide block">TARGET NASIONAL TERCAPAI</span>
                  <h3 className="text-title-lg font-title-lg text-[#0F2744]">Cakupan IDL 2024</h3>
                </div>
              </div>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-[#BBF7D0] text-[#14532D]">
                <span className="material-symbols-outlined text-[14px]">trending_up</span> +1,2%
              </span>
            </div>
            <div className="mt-3 flex items-baseline justify-between">
              <div className="flex items-baseline gap-2">
                <span className="text-metric-display font-metric-display text-[#14532D] tabular-nums">101,5%</span>
                <span className="text-body-sm font-body-sm text-[#166534] font-medium">(Target ≥ 100%)</span>
              </div>
              <span className="text-[11px] text-[#166534] font-medium bg-white/70 px-2 py-0.5 rounded border border-[#86EFAC]/50">
                30.824 Bayi IDL
              </span>
            </div>
          </div>

          <div className="bg-[#E0F2FE]/70 border border-[#7DD3FC] rounded-xl p-4.5 flex flex-col justify-between shadow-sm relative overflow-hidden transition-all hover:shadow-md">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-lg bg-[#0369A1] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <span className="material-symbols-outlined text-[22px]">child_care</span>
                </div>
                <div>
                  <span className="text-label-md font-label-md text-[#0369A1] tracking-wide block">KUMULATIF DOSIS BALITA</span>
                  <h3 className="text-title-lg font-title-lg text-[#0F2744]">Total Dosis Diberikan</h3>
                </div>
              </div>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-[#BAE6FD] text-[#075985]">
                <span className="material-symbols-outlined text-[14px]">groups</span> 99.625 Balita
              </span>
            </div>
            <div className="mt-3 flex items-baseline justify-between">
              <div className="flex items-baseline gap-1.5">
                <span className="text-metric-display font-metric-display text-[#075985] tabular-nums">101.120</span>
                <span className="text-body-sm font-body-sm text-[#0369A1]">dosis balita</span>
              </div>
              <span className="text-[11px] text-[#0369A1] font-medium bg-white/70 px-2 py-0.5 rounded border border-[#7DD3FC]/50">
                Rasio 1,02/balita
              </span>
            </div>
          </div>

          <div className="bg-[#F3E8FF]/80 border border-[#D8B4FE] rounded-xl p-4.5 flex flex-col justify-between shadow-sm relative overflow-hidden transition-all hover:shadow-md">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-lg bg-[#7E22CE] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <span className="material-symbols-outlined text-[22px]">pulmonology</span>
                </div>
                <div>
                  <span className="text-label-md font-label-md text-[#7E22CE] tracking-wide block">PENCEGAHAN PNEUMONIA</span>
                  <h3 className="text-title-lg font-title-lg text-[#0F2744]">Cakupan PCV (Pneumokokus)</h3>
                </div>
              </div>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-[#E9D5FF] text-[#6B21A8]">
                Target 95%
              </span>
            </div>
            <div className="mt-3 flex items-baseline justify-between">
              <div className="flex items-baseline gap-2">
                <span className="text-metric-display font-metric-display text-[#581C87] tabular-nums">94,8%</span>
                <span className="text-body-sm font-body-sm text-[#6B21A8] font-medium">Perlindungan Paru</span>
              </div>
              <span className="text-[11px] text-[#6B21A8] font-medium bg-white/70 px-2 py-0.5 rounded border border-[#D8B4FE]/50">
                Gap -0,2% target
              </span>
            </div>
          </div>

          <div className="bg-[#FEF3C7]/80 border border-[#FCD34D] rounded-xl p-4.5 flex flex-col justify-between shadow-sm relative overflow-hidden transition-all hover:shadow-md">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-lg bg-[#B45309] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <span className="material-symbols-outlined text-[22px]">published_with_changes</span>
                </div>
                <div>
                  <span className="text-label-md font-label-md text-[#92400E] tracking-wide block">KUALITAS CONTINUITY</span>
                  <h3 className="text-title-lg font-title-lg text-[#0F2744]">Drop-Out Rate (DPT-Hib)</h3>
                </div>
              </div>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-[#FDE68A] text-[#78350F]">
                <span className="material-symbols-outlined text-[13px]">check_circle</span> Aman &lt;5%
              </span>
            </div>
            <div className="mt-3 flex items-baseline justify-between">
              <div className="flex items-baseline gap-2">
                <span className="text-metric-display font-metric-display text-[#78350F] tabular-nums">1,8%</span>
                <span className="text-body-sm font-body-sm text-[#92400E] font-medium">Ambang batas baik</span>
              </div>
              <span className="text-[11px] text-[#92400E] font-medium bg-white/70 px-2 py-0.5 rounded border border-[#FCD34D]/50">
                Rendah Resiko Loss
              </span>
            </div>
          </div>
        </section>

        {/* Analytical Row 1 */}
        <section className="grid grid-cols-1 xl:grid-cols-12 gap-5 items-stretch">
          {/* Tren IDL Line */}
          <div className="xl:col-span-7 bg-surface-container-lowest border border-[#0F2744]/10 rounded-xl shadow-sm flex flex-col justify-between overflow-hidden">
            <div className="px-5 py-4 border-b border-outline-variant/20 flex items-center justify-between bg-surface-container-lowest">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-5 bg-primary-container rounded-sm"></span>
                <div>
                  <h2 className="text-title-lg font-title-lg text-primary">Tren Cakupan Imunisasi Dasar Lengkap (IDL)</h2>
                  <p className="text-body-sm font-body-sm text-on-surface-variant">Perbandingan capaian riil 2021–2024 terhadap standar target</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-[11px] font-medium">
                <div className="flex items-center gap-1.5 text-secondary">
                  <span className="w-3 h-3 rounded-full bg-secondary"></span>
                  <span>Cakupan IDL</span>
                </div>
                <div className="flex items-center gap-1.5 text-[#059669]">
                  <span className="w-3 h-0.5 border-t-2 border-dashed border-[#059669]"></span>
                  <span>Target (≥100%)</span>
                </div>
              </div>
            </div>

            <div className="p-6 flex-1 flex flex-col justify-end">
              <div className="relative w-full h-[210px] flex flex-col justify-between">
                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none text-[11px] text-outline">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-1">
                    <span>125%</span><span className="w-full ml-4 border-b border-dashed border-slate-200"></span>
                  </div>
                  <div className="flex items-center justify-between border-b border-slate-100 pb-1">
                    <span>100%</span><span className="w-full ml-4 border-b-2 border-dashed border-[#10B981]/50"></span>
                  </div>
                  <div className="flex items-center justify-between border-b border-slate-100 pb-1">
                    <span>75%</span><span className="w-full ml-4 border-b border-dashed border-slate-200"></span>
                  </div>
                  <div className="flex items-center justify-between border-b border-slate-100 pb-1">
                    <span>50%</span><span className="w-full ml-4 border-b border-dashed border-slate-200"></span>
                  </div>
                  <div className="flex items-center justify-between border-b border-slate-200 pb-1">
                    <span>0%</span><span className="w-full ml-4 border-b border-slate-300"></span>
                  </div>
                </div>

                <div className="relative h-full w-full z-10 flex items-end justify-around px-8 pb-3">
                  <svg className="absolute inset-0 w-full h-[180px] overflow-visible" preserveAspectRatio="none" viewBox="0 0 400 140">
                    <defs>
                      <linearGradient id="trendGradient" x1="0%" x2="0%" y1="0%" y2="100%">
                        <stop offset="0%" stopColor="#385ca6" stopOpacity="0.25"></stop>
                        <stop offset="100%" stopColor="#385ca6" stopOpacity="0.0"></stop>
                      </linearGradient>
                    </defs>
                    <polygon fill="url(#trendGradient)" points="50,92 150,22 250,38 350,36 350,140 50,140"></polygon>
                    <line stroke="#059669" strokeDasharray="4,4" strokeWidth="2" x1="20" x2="380" y1="38" y2="38"></line>
                    <polyline fill="none" points="50,92 150,22 250,38 350,36" stroke="#133E87" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5"></polyline>
                  </svg>

                  <div className="flex flex-col items-center z-20 group cursor-pointer transition-transform hover:-translate-y-1">
                    <div className="bg-primary text-white text-[11px] font-bold px-2 py-0.5 rounded shadow-sm mb-1.5 tabular-nums">65,4%</div>
                    <div className="w-4 h-4 rounded-full bg-surface-container-lowest border-4 border-secondary shadow"></div>
                    <span className="text-label-md font-label-md text-on-surface-variant mt-2 font-bold">2021</span>
                    <span className="text-[10px] text-error font-medium">Pandemi Covid</span>
                  </div>

                  <div className="flex flex-col items-center z-20 group cursor-pointer transition-transform hover:-translate-y-1">
                    <div className="bg-primary text-white text-[11px] font-bold px-2 py-0.5 rounded shadow-sm mb-1.5 tabular-nums">113,3%</div>
                    <div className="w-4 h-4 rounded-full bg-surface-container-lowest border-4 border-secondary shadow"></div>
                    <span className="text-label-md font-label-md text-on-surface-variant mt-2 font-bold">2022</span>
                    <span className="text-[10px] text-secondary font-medium">Catch-up BIAN</span>
                  </div>

                  <div className="flex flex-col items-center z-20 group cursor-pointer transition-transform hover:-translate-y-1">
                    <div className="bg-primary text-white text-[11px] font-bold px-2 py-0.5 rounded shadow-sm mb-1.5 tabular-nums">100,3%</div>
                    <div className="w-4 h-4 rounded-full bg-surface-container-lowest border-4 border-secondary shadow"></div>
                    <span className="text-label-md font-label-md text-on-surface-variant mt-2 font-bold">2023</span>
                    <span className="text-[10px] text-[#166534] font-medium">Target Renstra</span>
                  </div>

                  <div className="flex flex-col items-center z-20 group cursor-pointer transition-transform hover:-translate-y-1">
                    <div className="bg-[#166534] text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full shadow-sm mb-1.5 ring-2 ring-[#DCFCE7] tabular-nums">101,5%</div>
                    <div className="w-5 h-5 rounded-full bg-[#166534] border-4 border-[#DCFCE7] shadow"></div>
                    <span className="text-label-md font-label-md text-primary mt-2 font-bold">2024 (Aktual)</span>
                    <span className="text-[10px] text-[#166534] font-bold">Capai Target</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-on-surface-variant">
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[15px] text-secondary">insights</span>
                  Rata-rata 3 tahun terakhir stabil melampaui target nasional (≥100%).
                </span>
                <span className="text-[11px] text-outline">Sumber: Aplikasi ASIK &amp; SP2TP Dinkes Pekalongan</span>
              </div>
            </div>
          </div>

          {/* Capaian Antigen */}
          <div className="xl:col-span-5 bg-surface-container-lowest border border-[#0F2744]/10 rounded-xl shadow-sm flex flex-col justify-between overflow-hidden">
            <div className="px-5 py-4 border-b border-outline-variant/20 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-5 bg-secondary rounded-sm"></span>
                <h2 className="text-title-lg font-title-lg text-primary">Capaian per Jenis Antigen Balita</h2>
              </div>
              <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-surface-container text-on-secondary-container">Target: 95%</span>
            </div>

            <div className="p-5 space-y-3.5 flex-1 flex flex-col justify-around">
              <div>
                <div className="flex justify-between items-center text-body-sm font-body-sm mb-1">
                  <span className="font-medium text-primary">HB0 (&lt;24 jam pasca lahir)</span>
                  <span className="font-bold text-primary tabular-nums">98,2% <span className="text-[11px] font-normal text-on-surface-variant">(29.814 bayi)</span></span>
                </div>
                <div className="w-full bg-[#E2E8F0] h-2.5 rounded-full overflow-hidden">
                  <div className="bg-[#133E87] h-full rounded-full transition-all" style={{ width: "98.2%" }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center text-body-sm font-body-sm mb-1">
                  <span className="font-medium text-primary">BCG (Tuberkulosis)</span>
                  <span className="font-bold text-primary tabular-nums">102,4% <span className="text-[11px] font-normal text-on-surface-variant">(31.090 bayi)</span></span>
                </div>
                <div className="w-full bg-[#E2E8F0] h-2.5 rounded-full overflow-hidden">
                  <div className="bg-[#2563EB] h-full rounded-full transition-all" style={{ width: "100%" }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center text-body-sm font-body-sm mb-1">
                  <span className="font-medium text-primary">Polio (OPV 4 + IPV 2)</span>
                  <span className="font-bold text-primary tabular-nums">99,1% <span className="text-[11px] font-normal text-on-surface-variant">(30.088 bayi)</span></span>
                </div>
                <div className="w-full bg-[#E2E8F0] h-2.5 rounded-full overflow-hidden">
                  <div className="bg-[#0284C7] h-full rounded-full transition-all" style={{ width: "99.1%" }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center text-body-sm font-body-sm mb-1">
                  <span className="font-medium text-primary">DPT-HB-Hib 3 (Pentavalen)</span>
                  <span className="font-bold text-primary tabular-nums">101,1% <span className="text-[11px] font-normal text-on-surface-variant">(30.702 bayi)</span></span>
                </div>
                <div className="w-full bg-[#E2E8F0] h-2.5 rounded-full overflow-hidden">
                  <div className="bg-[#0D9488] h-full rounded-full transition-all" style={{ width: "100%" }}></div>
                </div>
              </div>

              <div className="p-2.5 rounded-lg bg-[#FAF5FF] border border-[#E9D5FF]">
                <div className="flex justify-between items-center text-body-sm font-body-sm mb-1">
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[17px] text-[#7E22CE]">shield</span>
                    <span className="font-bold text-[#6B21A8]">PCV 1, 2 &amp; Lanjutan (Proteksi Pneumonia)</span>
                  </div>
                  <span className="font-bold text-[#6B21A8] tabular-nums">94,8% <span className="text-[11px] font-normal text-outline">(28.780 balita)</span></span>
                </div>
                <div className="w-full bg-[#E9D5FF] h-2.5 rounded-full overflow-hidden">
                  <div className="bg-[#9333EA] h-full rounded-full transition-all" style={{ width: "94.8%" }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center text-body-sm font-body-sm mb-1">
                  <span className="font-medium text-primary">Campak-Rubella (MR Balita)</span>
                  <span className="font-bold text-primary tabular-nums">100,6% <span className="text-[11px] font-normal text-on-surface-variant">(30.550 balita)</span></span>
                </div>
                <div className="w-full bg-[#E2E8F0] h-2.5 rounded-full overflow-hidden">
                  <div className="bg-[#059669] h-full rounded-full transition-all" style={{ width: "100%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Analytical Row 2: Puskesmas & Cold Chain */}
        <section className="grid grid-cols-1 xl:grid-cols-12 gap-5 items-stretch">
          {/* Table Puskesmas */}
          <div className="xl:col-span-7 bg-surface-container-lowest border border-[#0F2744]/10 rounded-xl shadow-sm flex flex-col justify-between overflow-hidden">
            <div className="px-5 py-4 border-b border-outline-variant/20 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-5 bg-[#0F2744] rounded-sm"></span>
                <div>
                  <h2 className="text-title-lg font-title-lg text-primary">Monitoring Capaian IDL per Puskesmas</h2>
                  <p className="text-body-sm font-body-sm text-on-surface-variant">Evaluasi berkala terhadap 27 UPTD Puskesmas di Kabupaten Pekalongan</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold bg-[#DCFCE7] text-[#166534] px-2 py-0.5 rounded">
                  23 Tercapai
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold bg-[#FEF3C7] text-[#92400E] px-2 py-0.5 rounded">
                  4 Akselerasi
                </span>
              </div>
            </div>

            <div className="overflow-x-auto flex-1">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#F8FAFC] border-b border-[#E2E8F0] text-[11px] font-semibold text-[#64748B] uppercase tracking-wider">
                    <th className="py-2.5 px-4">Nama Puskesmas</th>
                    <th className="py-2.5 px-3">Kecamatan</th>
                    <th className="py-2.5 px-3 text-right">Sasaran Bayi</th>
                    <th className="py-2.5 px-3 text-right">Realisasi IDL</th>
                    <th className="py-2.5 px-3 text-right">Capaian (%)</th>
                    <th className="py-2.5 px-4 text-center">Status Surveilans</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-body-sm font-body-sm">
                  <tr className="hover:bg-[#F1F5F9] transition-colors">
                    <td className="py-2.5 px-4 font-semibold text-primary">Puskesmas Kajen I</td>
                    <td className="py-2.5 px-3 text-on-surface-variant">Kajen</td>
                    <td className="py-2.5 px-3 text-right tabular-nums">1.412</td>
                    <td className="py-2.5 px-3 text-right tabular-nums font-semibold">1.474</td>
                    <td className="py-2.5 px-3 text-right tabular-nums font-bold text-[#166534]">104,4%</td>
                    <td className="py-2.5 px-4 text-center">
                      <span className="inline-block px-2 py-0.5 rounded text-[11px] font-semibold bg-[#DCFCE7] text-[#166534]">Terkendali</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-[#F1F5F9] transition-colors">
                    <td className="py-2.5 px-4 font-semibold text-primary">Puskesmas Kedungwuni I</td>
                    <td className="py-2.5 px-3 text-on-surface-variant">Kedungwuni</td>
                    <td className="py-2.5 px-3 text-right tabular-nums">1.890</td>
                    <td className="py-2.5 px-3 text-right tabular-nums font-semibold">1.942</td>
                    <td className="py-2.5 px-3 text-right tabular-nums font-bold text-[#166534]">102,8%</td>
                    <td className="py-2.5 px-4 text-center">
                      <span className="inline-block px-2 py-0.5 rounded text-[11px] font-semibold bg-[#DCFCE7] text-[#166534]">Terkendali</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-[#F1F5F9] transition-colors">
                    <td className="py-2.5 px-4 font-semibold text-primary">Puskesmas Wiradesa</td>
                    <td className="py-2.5 px-3 text-on-surface-variant">Wiradesa</td>
                    <td className="py-2.5 px-3 text-right tabular-nums">1.620</td>
                    <td className="py-2.5 px-3 text-right tabular-nums font-semibold">1.645</td>
                    <td className="py-2.5 px-3 text-right tabular-nums font-bold text-[#166534]">101,5%</td>
                    <td className="py-2.5 px-4 text-center">
                      <span className="inline-block px-2 py-0.5 rounded text-[11px] font-semibold bg-[#DCFCE7] text-[#166534]">Terkendali</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-[#F1F5F9] transition-colors">
                    <td className="py-2.5 px-4 font-semibold text-primary">Puskesmas Bojong I</td>
                    <td className="py-2.5 px-3 text-on-surface-variant">Bojong</td>
                    <td className="py-2.5 px-3 text-right tabular-nums">1.250</td>
                    <td className="py-2.5 px-3 text-right tabular-nums font-semibold">1.268</td>
                    <td className="py-2.5 px-3 text-right tabular-nums font-bold text-[#166534]">101,4%</td>
                    <td className="py-2.5 px-4 text-center">
                      <span className="inline-block px-2 py-0.5 rounded text-[11px] font-semibold bg-[#DCFCE7] text-[#166534]">Terkendali</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-[#F1F5F9] transition-colors bg-[#FFFBEB]/40">
                    <td className="py-2.5 px-4 font-semibold text-[#92400E]">Puskesmas Petungkriyono</td>
                    <td className="py-2.5 px-3 text-on-surface-variant">Petungkriyono</td>
                    <td className="py-2.5 px-3 text-right tabular-nums">410</td>
                    <td className="py-2.5 px-3 text-right tabular-nums font-semibold">394</td>
                    <td className="py-2.5 px-3 text-right tabular-nums font-bold text-[#B45309]">96,1%</td>
                    <td className="py-2.5 px-4 text-center">
                      <span className="inline-block px-2 py-0.5 rounded text-[11px] font-semibold bg-[#FEF3C7] text-[#92400E]">Perlu Akselerasi</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-[#F1F5F9] transition-colors bg-[#FFFBEB]/40">
                    <td className="py-2.5 px-4 font-semibold text-[#92400E]">Puskesmas Lebakbarang</td>
                    <td className="py-2.5 px-3 text-on-surface-variant">Lebakbarang</td>
                    <td className="py-2.5 px-3 text-right tabular-nums">385</td>
                    <td className="py-2.5 px-3 text-right tabular-nums font-semibold">372</td>
                    <td className="py-2.5 px-3 text-right tabular-nums font-bold text-[#B45309]">96,6%</td>
                    <td className="py-2.5 px-4 text-center">
                      <span className="inline-block px-2 py-0.5 rounded text-[11px] font-semibold bg-[#FEF3C7] text-[#92400E]">Perlu Akselerasi</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="px-5 py-2.5 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-[11px] text-on-surface-variant">
              <span>Menampilkan 6 dari 27 unit Puskesmas terverifikasi kohort bayi 2024</span>
              <span className="text-secondary font-semibold">Lihat Seluruh 27 Puskesmas</span>
            </div>
          </div>

          {/* Cold Chain */}
          <div className="xl:col-span-5 bg-surface-container-lowest border border-[#0F2744]/10 rounded-xl shadow-sm flex flex-col justify-between overflow-hidden">
            <div className="px-5 py-4 border-b border-outline-variant/20 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-5 bg-[#075985] rounded-sm"></span>
                <div>
                  <h2 className="text-title-lg font-title-lg text-primary">Rantai Dingin (Cold Chain) &amp; Stok</h2>
                  <p className="text-body-sm font-body-sm text-on-surface-variant">Ketersediaan &amp; suhu penyimpanan di Farmasi</p>
                </div>
              </div>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold bg-[#E0F2FE] text-[#075985]">
                <span className="w-2 h-2 rounded-full bg-[#0284C7] animate-ping"></span> Suhu +2°C sd +8°C
              </span>
            </div>

            <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-surface-container-low p-3 rounded-lg border border-slate-200">
                  <span className="text-[11px] font-semibold text-on-surface-variant block mb-1">STOK VAKSIN PCV</span>
                  <span className="text-title-lg font-title-lg text-[#0F2744] font-bold tabular-nums">18.450</span>
                  <span className="text-[11px] text-[#166534] font-medium block mt-0.5">Aman (Cukup 3,2 bln)</span>
                </div>
                <div className="bg-surface-container-low p-3 rounded-lg border border-slate-200">
                  <span className="text-[11px] font-semibold text-on-surface-variant block mb-1">STOK DPT-HB-HIB</span>
                  <span className="text-title-lg font-title-lg text-[#0F2744] font-bold tabular-nums">22.800</span>
                  <span className="text-[11px] text-[#166534] font-medium block mt-0.5">Aman (Cukup 3,8 bln)</span>
                </div>
                <div className="bg-surface-container-low p-3 rounded-lg border border-slate-200">
                  <span className="text-[11px] font-semibold text-on-surface-variant block mb-1">FREEZER SOLAR / LISTRIK</span>
                  <span className="text-title-lg font-title-lg text-[#0F2744] font-bold tabular-nums">64 Unit</span>
                  <span className="text-[11px] text-[#166534] font-medium block mt-0.5">100% Berfungsi Normal</span>
                </div>
                <div className="bg-surface-container-low p-3 rounded-lg border border-slate-200">
                  <span className="text-[11px] font-semibold text-on-surface-variant block mb-1">POSYANDU AKTIF</span>
                  <span className="text-title-lg font-title-lg text-[#0F2744] font-bold tabular-nums">1.148 Pos</span>
                  <span className="text-[11px] text-[#0369A1] font-medium block mt-0.5">Terlayani 19 Kecamatan</span>
                </div>
              </div>

              <div className="bg-[#F8FAFC] border border-[#CBD5E1] rounded-lg p-3 flex items-start gap-3">
                <span className="material-symbols-outlined text-[20px] text-secondary shrink-0 mt-0.5">local_shipping</span>
                <div>
                  <h4 className="text-label-lg font-label-lg text-primary">Jadwal Distribusi Batch IV (Oktober-November 2024)</h4>
                  <p className="text-body-sm font-body-sm text-on-surface-variant mt-0.5">
                    Distribusi buffer stock vaksin PCV &amp; IPV difokuskan ke wilayah dataran tinggi (Puskesmas Petungkriyono, Lebakbarang, dan Paninggaran) antisipasi cuaca ekstrem.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Analytical Row 3: Catatan Resmi */}
        <section aria-label="Catatan Metodologi &amp; Sumber Data" className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="bg-[#FEF3C7]/60 border border-[#FCD34D] rounded-xl p-4.5 flex gap-3.5 shadow-xs">
            <div className="w-8 h-8 rounded-full bg-[#F59E0B] text-white flex items-center justify-center shrink-0 shadow-xs">
              <span className="material-symbols-outlined text-[20px]">warning</span>
            </div>
            <div className="space-y-1">
              <h3 className="text-label-lg font-label-lg text-[#78350F]">Catatan Penting: Capaian &gt;100%</h3>
              <p className="text-body-sm font-body-sm text-[#92400E] leading-relaxed">
                Angka cakupan IDL mencapai 101,5% dikarenakan adanya bayi luar domisili yang diimunisasi di fasilitas kesehatan Kab. Pekalongan, serta perbedaan proyeksi target Pusdatin Kemenkes dengan data riil kohort bayi Disdukcapil setempat.
              </p>
            </div>
          </div>

          <div className="bg-[#E0F2FE]/60 border border-[#7DD3FC] rounded-xl p-4.5 flex gap-3.5 shadow-xs">
            <div className="w-8 h-8 rounded-full bg-[#0284C7] text-white flex items-center justify-center shrink-0 shadow-xs">
              <span className="material-symbols-outlined text-[20px]">lightbulb</span>
            </div>
            <div className="space-y-1">
              <h3 className="text-label-lg font-label-lg text-[#075985]">Kesimpulan Singkat Kinerja</h3>
              <p className="text-body-sm font-body-sm text-[#0369A1] leading-relaxed">
                Cakupan perlindungan dasar bayi dalam status sangat aman. Integrasi antigen PCV (94,8%) berkorelasi langsung dalam menekan insiden fatalitas balita akibat komplikasi pneumonia bakterial di tahun 2024.
              </p>
            </div>
          </div>

          <div className="bg-surface-container-lowest border border-[#0F2744]/10 rounded-xl p-4.5 flex gap-3.5 shadow-xs">
            <div className="w-8 h-8 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center shrink-0 shadow-xs">
              <span className="material-symbols-outlined text-[20px]">dataset</span>
            </div>
            <div className="space-y-1">
              <h3 className="text-label-lg font-label-lg text-primary">Metadata &amp; Sumber Resmi</h3>
              <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                Dinas Kesehatan Pemerintah Kabupaten Pekalongan. Data terintegrasi Satu Data Kesehatan, Sistem Informasi Imunisasi Terpadu (SIMKEP/ASIK), dan Dashboard Surveilans ISPA/Pneumonia Provinsi Jawa Tengah 2024.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full bg-surface-container-lowest border-t border-outline-variant/30 px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-3">
        <div className="flex items-center gap-2">
          <span className="text-label-lg font-label-lg text-primary font-bold">Dinas Kesehatan Kab. Pekalongan</span>
          <span className="text-on-surface-variant text-[12px]">•</span>
          <p className="text-body-sm font-body-sm text-on-surface-variant">
            © 2024 Dinas Kesehatan Pemerintah Kabupaten Pekalongan. Sistem Informasi Surveilans Terpadu.
          </p>
        </div>
        <div className="flex items-center gap-5 text-label-md font-label-md">
          <span className="text-on-surface-variant">Satu Data Kesehatan</span>
          <span className="text-on-surface-variant">Portal Pemkab Pekalongan</span>
          <span className="text-on-surface-variant">Kebijakan Privasi</span>
          <span className="text-primary font-semibold flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px] text-error">phone_in_talk</span>
            <span>Kontak Darurat SPGDT 119</span>
          </span>
        </div>
      </footer>
    </div>
  );
}
