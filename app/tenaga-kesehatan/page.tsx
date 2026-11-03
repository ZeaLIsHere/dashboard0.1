export default function TenagaKesehatanPage() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-between bg-surface-container-low/20">
      {/* Top Header */}
      <header className="sticky top-0 right-0 z-30 w-full bg-surface-container-lowest border-b border-outline-variant/30 px-4 sm:px-7 py-3 flex flex-col sm:flex-row justify-between sm:items-center gap-3 shadow-sm">
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <h1 className="text-headline-md font-headline-md text-primary font-bold tracking-tight">
              Ketersediaan &amp; Distribusi Tenaga Kesehatan
            </h1>
            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-[#DCFCE7] text-[#166534]">
              RESMI DINKES
            </span>
          </div>
          <p className="text-body-sm font-body-sm text-on-surface-variant">
            Kabupaten Pekalongan – Tahun 2024 • Program Pencegahan Pneumonia &amp; Stunting Balita
          </p>
        </div>
        {/* Trailing Actions */}
        <div className="flex items-center gap-3 self-end sm:self-auto">
          <div className="flex items-center gap-2 bg-[#F8FAFC] border border-[#CBD5E1] rounded-lg px-3 py-1.5 text-body-sm font-body-sm text-on-surface">
            <span className="material-symbols-outlined text-secondary text-[18px]" data-icon="filter_alt">filter_alt</span>
            <span className="font-medium text-xs">Filter Kecamatan: Semua</span>
          </div>
          <div className="flex items-center gap-2 bg-primary-container text-white px-3.5 py-1.5 rounded-lg text-body-sm font-body-sm shadow-sm">
            <span className="material-symbols-outlined text-[16px] text-tertiary-fixed" data-icon="calendar_today">calendar_today</span>
            <span className="font-semibold text-xs">Tahun: 2024</span>
          </div>
          <button className="relative p-2 rounded-lg text-on-surface-variant hover:bg-surface-container transition-colors" title="Notifikasi Sistem">
            <span className="material-symbols-outlined text-[20px]" data-icon="notifications">notifications</span>
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-error ring-2 ring-white"></span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="w-full px-4 sm:px-7 py-6 max-w-[1920px] mx-auto flex-1 flex flex-col gap-6">
        {/* KPI Metric Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          <div className="bg-[#E0F2FE] border border-[#BAE6FD] rounded-xl p-5 shadow-sm relative overflow-hidden flex flex-col justify-between">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-label-md font-label-md uppercase tracking-wider text-[#0369A1] font-bold">TOTAL TENAGA KESEHATAN</span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-metric-display font-metric-display text-[#0C4A6E] tabular-nums tracking-tight">2.594</span>
                  <span className="text-body-sm font-body-sm text-[#0369A1] font-semibold">orang</span>
                </div>
              </div>
              <div className="w-12 h-12 rounded-xl bg-white/80 flex items-center justify-center text-[#0284C7] shadow-sm">
                <span className="material-symbols-outlined text-[26px]">medical_services</span>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-[#BAE6FD]/70 flex items-center justify-between text-body-sm">
              <span className="text-[#0369A1] text-xs">Cakupan Wilayah: 19 Kecamatan</span>
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold bg-white/90 text-[#0284C7]">
                +4,8% YoY
              </span>
            </div>
          </div>

          <div className="bg-[#DCFCE7] border border-[#BBF7D0] rounded-xl p-5 shadow-sm relative overflow-hidden flex flex-col justify-between">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-label-md font-label-md uppercase tracking-wider text-[#15803D] font-bold">PERAWAT &amp; BIDAN DESA</span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-metric-display font-metric-display text-[#14532D] tabular-nums tracking-tight">1.722</span>
                  <span className="text-body-sm font-body-sm text-[#15803D] font-semibold">orang</span>
                </div>
              </div>
              <div className="w-12 h-12 rounded-xl bg-white/80 flex items-center justify-center text-[#16A34A] shadow-sm">
                <span className="material-symbols-outlined text-[26px]">health_and_safety</span>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-[#BBF7D0]/70 flex items-center justify-between text-body-sm">
              <span className="text-[#15803D] text-xs font-medium">1.011 Perawat • 711 Bidan</span>
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold bg-[#22C55E]/20 text-[#14532D]">
                66,4% Total
              </span>
            </div>
          </div>

          <div className="bg-[#F3E8FF] border border-[#E9D5FF] rounded-xl p-5 shadow-sm relative overflow-hidden flex flex-col justify-between">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-label-md font-label-md uppercase tracking-wider text-[#7E22CE] font-bold">DOKTER UMUM &amp; SPESIALIS</span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-metric-display font-metric-display text-[#581C87] tabular-nums tracking-tight">263</span>
                  <span className="text-body-sm font-body-sm text-[#7E22CE] font-semibold">dokter</span>
                </div>
              </div>
              <div className="w-12 h-12 rounded-xl bg-white/80 flex items-center justify-center text-[#9333EA] shadow-sm">
                <span className="material-symbols-outlined text-[26px]">respiratory_rate</span>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-[#E9D5FF]/70 flex items-center justify-between text-body-sm">
              <span className="text-[#7E22CE] text-xs font-medium">135 Dokter Umum • 128 Spesialis</span>
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold bg-[#A855F7]/20 text-[#581C87]">
                Rasio 0,26‰
              </span>
            </div>
          </div>

          <div className="bg-[#FFEDD5] border border-[#FED7AA] rounded-xl p-5 shadow-sm relative overflow-hidden flex flex-col justify-between">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-label-md font-label-md uppercase tracking-wider text-[#C2410C] font-bold">TENAGA GIZI &amp; LAINNYA</span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-metric-display font-metric-display text-[#7C2D12] tabular-nums tracking-tight">609</span>
                  <span className="text-body-sm font-body-sm text-[#C2410C] font-semibold">nakes</span>
                </div>
              </div>
              <div className="w-12 h-12 rounded-xl bg-white/80 flex items-center justify-center text-[#EA580C] shadow-sm">
                <span className="material-symbols-outlined text-[26px]">groups</span>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-[#FED7AA]/70 flex items-center justify-between text-body-sm">
              <span className="text-[#C2410C] text-xs font-medium">58 Nutrisionis • 559 Penunjang Medis</span>
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold bg-[#F97316]/20 text-[#7C2D12]">
                Intervensi Gizi
              </span>
            </div>
          </div>
        </section>

        {/* Section 2: Bento Grid Analytics */}
        <div className="grid grid-cols-12 gap-5">
          {/* Left: Bar Chart */}
          <div className="col-span-12 xl:col-span-7 bg-surface-container-lowest rounded-xl border border-outline-variant/30 shadow-sm overflow-hidden flex flex-col">
            <div className="bg-primary-container text-white px-5 py-3.5 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-secondary-container"></span>
                <h2 className="text-title-lg font-title-lg text-white">Komposisi Tenaga Kesehatan Tahun 2024</h2>
              </div>
              <span className="text-label-md font-label-md text-on-primary-container uppercase tracking-wider">Unit Kerja Dinkes &amp; RSUD</span>
            </div>
            <div className="p-5 flex flex-col justify-between flex-1 gap-5">
              <p className="text-body-sm font-body-sm text-on-surface-variant">
                Proporsi tenaga medis berdasar klasifikasi fungsional kesehatan guna akselerasi deteksi dini infeksi pneumonia serta monitoring status nutrisi anak balita.
              </p>

              <div className="flex flex-col gap-3.5 my-auto">
                <div className="flex flex-col gap-1">
                  <div className="flex justify-between items-center text-body-sm">
                    <span className="font-medium text-on-surface flex items-center gap-2">
                      <span className="w-3 h-3 rounded-sm bg-[#133E87]"></span> Perawat
                    </span>
                    <span className="font-bold tabular-nums text-primary">1.011 <span className="font-normal text-on-surface-variant text-xs">(39,0%)</span></span>
                  </div>
                  <div className="w-full bg-[#F1F5F9] rounded-full h-3 overflow-hidden">
                    <div className="bg-[#133E87] h-full rounded-full transition-all duration-500" style={{ width: "100%" }}></div>
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <div className="flex justify-between items-center text-body-sm">
                    <span className="font-medium text-on-surface flex items-center gap-2">
                      <span className="w-3 h-3 rounded-sm bg-[#385CA6]"></span> Bidan
                    </span>
                    <span className="font-bold tabular-nums text-primary">711 <span className="font-normal text-on-surface-variant text-xs">(27,4%)</span></span>
                  </div>
                  <div className="w-full bg-[#F1F5F9] rounded-full h-3 overflow-hidden">
                    <div className="bg-[#385CA6] h-full rounded-full transition-all duration-500" style={{ width: "70.3%" }}></div>
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <div className="flex justify-between items-center text-body-sm">
                    <span className="font-medium text-on-surface flex items-center gap-2">
                      <span className="w-3 h-3 rounded-sm bg-[#60A5FA]"></span> Tenaga Kesehatan Lainnya (Sanitarian/Farmasi/Lab)
                    </span>
                    <span className="font-bold tabular-nums text-primary">559 <span className="font-normal text-on-surface-variant text-xs">(21,5%)</span></span>
                  </div>
                  <div className="w-full bg-[#F1F5F9] rounded-full h-3 overflow-hidden">
                    <div className="bg-[#60A5FA] h-full rounded-full transition-all duration-500" style={{ width: "55.2%" }}></div>
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <div className="flex justify-between items-center text-body-sm">
                    <span className="font-medium text-on-surface flex items-center gap-2">
                      <span className="w-3 h-3 rounded-sm bg-[#0D9488]"></span> Dokter Umum
                    </span>
                    <span className="font-bold tabular-nums text-primary">135 <span className="font-normal text-on-surface-variant text-xs">(5,2%)</span></span>
                  </div>
                  <div className="w-full bg-[#F1F5F9] rounded-full h-3 overflow-hidden">
                    <div className="bg-[#0D9488] h-full rounded-full transition-all duration-500" style={{ width: "13.3%" }}></div>
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <div className="flex justify-between items-center text-body-sm">
                    <span className="font-medium text-on-surface flex items-center gap-2">
                      <span className="w-3 h-3 rounded-sm bg-[#8B5CF6]"></span> Dokter Spesialis (Anak, Paru, Penyakit Dalam)
                    </span>
                    <span className="font-bold tabular-nums text-primary">128 <span className="font-normal text-on-surface-variant text-xs">(4,9%)</span></span>
                  </div>
                  <div className="w-full bg-[#F1F5F9] rounded-full h-3 overflow-hidden">
                    <div className="bg-[#8B5CF6] h-full rounded-full transition-all duration-500" style={{ width: "12.6%" }}></div>
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <div className="flex justify-between items-center text-body-sm">
                    <span className="font-medium text-on-surface flex items-center gap-2">
                      <span className="w-3 h-3 rounded-sm bg-[#F59E0B]"></span> Tenaga Gizi / Nutrisionis
                    </span>
                    <span className="font-bold tabular-nums text-primary">58 <span className="font-normal text-on-surface-variant text-xs">(2,2%)</span></span>
                  </div>
                  <div className="w-full bg-[#F1F5F9] rounded-full h-3 overflow-hidden">
                    <div className="bg-[#F59E0B] h-full rounded-full transition-all duration-500" style={{ width: "5.7%" }}></div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between text-[11px] text-on-surface-variant border-t border-outline-variant/20 pt-2 font-mono">
                <span>0</span>
                <span>250</span>
                <span>500</span>
                <span>750</span>
                <span>1.011 (Maksimum)</span>
              </div>
            </div>
          </div>

          {/* Right: Rasio SPM */}
          <div className="col-span-12 xl:col-span-5 bg-surface-container-lowest rounded-xl border border-outline-variant/30 shadow-sm overflow-hidden flex flex-col">
            <div className="bg-primary-container text-white px-5 py-3.5 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                <h2 className="text-title-lg font-title-lg text-white">Rasio Standar Pelayanan Minimal (SPM)</h2>
              </div>
              <span className="text-label-md font-label-md bg-white/10 px-2 py-0.5 rounded text-white text-[11px]">Kemenkes RI</span>
            </div>
            <div className="p-5 flex flex-col justify-between flex-1 gap-4">
              <div className="p-3.5 bg-surface-container-low rounded-lg border border-outline-variant/20 flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-label-md font-label-md text-on-surface font-semibold">Rasio Bidan per Desa / Kelurahan</span>
                  <span className="text-body-sm font-body-sm text-on-surface-variant text-xs">285 Desa di Kab. Pekalongan</span>
                </div>
                <div className="text-right">
                  <span className="text-title-lg font-title-lg text-secondary tabular-nums font-bold">2,49</span>
                  <span className="block text-[11px] text-[#166534] font-semibold">Target: min. 1,00 (Terpenuhi)</span>
                </div>
              </div>

              <div className="p-3.5 bg-surface-container-low rounded-lg border border-outline-variant/20 flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-label-md font-label-md text-on-surface font-semibold">Perawat per 1.000 Balita</span>
                  <span className="text-body-sm font-body-sm text-on-surface-variant text-xs">Basis: 99.625 Balita terdata</span>
                </div>
                <div className="text-right">
                  <span className="text-title-lg font-title-lg text-secondary tabular-nums font-bold">10,14</span>
                  <span className="block text-[11px] text-[#166534] font-semibold">Status: Sangat Memadai</span>
                </div>
              </div>

              <div className="p-3.5 bg-surface-container-low rounded-lg border border-outline-variant/20 flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-label-md font-label-md text-on-surface font-semibold">Dokter per 1.000 Penduduk</span>
                  <span className="text-body-sm font-body-sm text-on-surface-variant text-xs">Populasi 1.026.546 jiwa</span>
                </div>
                <div className="text-right">
                  <span className="text-title-lg font-title-lg text-[#C2410C] tabular-nums font-bold">0,26</span>
                  <span className="block text-[11px] text-[#9A3412] font-semibold">Standar WHO: 1,00</span>
                </div>
              </div>

              <div className="bg-[#EFF6FF] border border-[#BFDBFE] rounded-lg p-3 flex items-start gap-2.5">
                <span className="material-symbols-outlined text-[#1D4ED8] text-[20px] shrink-0 mt-0.5">info</span>
                <p className="text-[12px] text-[#1E40AF] leading-relaxed">
                  Kapasitas perawat dan bidan desa mencukupi untuk skrining primer MTBS (Manajemen Terpadu Balita Sakit) di 27 wilayah kerja Puskesmas.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Sebaran Wilayah & RSUD */}
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-12 xl:col-span-7 bg-surface-container-lowest rounded-xl border border-outline-variant/30 shadow-sm overflow-hidden flex flex-col">
            <div className="bg-primary-container text-white px-5 py-3.5 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-secondary-container">location_city</span>
                <h2 className="text-title-lg font-title-lg text-white">Sebaran Tenaga Medis di 27 UPTD Puskesmas &amp; 2 RSUD</h2>
              </div>
              <span className="text-label-md font-label-md text-on-primary-container">Kawasan Dataran &amp; Pegunungan</span>
            </div>
            <div className="p-5 flex flex-col gap-4 flex-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="border border-[#CBD5E1] rounded-lg p-3 bg-white flex items-center justify-between">
                  <div>
                    <span className="text-label-md font-label-md font-bold text-primary block">RSUD Kajen (Pusat Rujukan Selatan)</span>
                    <span className="text-xs text-on-surface-variant">54 Dokter • 218 Perawat • 46 Bidan</span>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#DCFCE7] text-[#166534]">Tipe B</span>
                </div>
                <div className="border border-[#CBD5E1] rounded-lg p-3 bg-white flex items-center justify-between">
                  <div>
                    <span className="text-label-md font-label-md font-bold text-primary block">RSUD Kraton (Pusat Rujukan Utara)</span>
                    <span className="text-xs text-on-surface-variant">74 Dokter • 312 Perawat • 58 Bidan</span>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#DCFCE7] text-[#166534]">Tipe B Pendidikan</span>
                </div>
              </div>

              <div className="relative bg-[#F8FAFC] border border-outline-variant/30 rounded-lg p-4 flex flex-col items-center justify-center min-h-[220px]">
                <div className="w-full flex flex-col sm:flex-row items-center justify-between mb-2 gap-2">
                  <span className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider">Klasterisasi Zona Pelayanan</span>
                  <div className="flex flex-wrap items-center gap-3 text-[11px]">
                    <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-[#133E87]"></span> Pesisir/Kota</span>
                    <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-[#0D9488]"></span> Tengah/Industri</span>
                    <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-[#EA580C]"></span> Pegunungan (DTPK)</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2.5 w-full my-2">
                  <div className="bg-white border border-[#133E87]/30 rounded p-2 text-center">
                    <span className="block text-[11px] font-bold text-primary">Wiradesa</span>
                    <span className="text-[10px] text-on-surface-variant">42 Nakes</span>
                  </div>
                  <div className="bg-white border border-[#133E87]/30 rounded p-2 text-center">
                    <span className="block text-[11px] font-bold text-primary">Kedungwuni I</span>
                    <span className="text-[10px] text-on-surface-variant">51 Nakes</span>
                  </div>
                  <div className="bg-white border border-[#133E87]/30 rounded p-2 text-center">
                    <span className="block text-[11px] font-bold text-primary">Kedungwuni II</span>
                    <span className="text-[10px] text-on-surface-variant">38 Nakes</span>
                  </div>
                  <div className="bg-white border border-[#0D9488]/30 rounded p-2 text-center">
                    <span className="block text-[11px] font-bold text-primary">Kajen I</span>
                    <span className="text-[10px] text-on-surface-variant">46 Nakes</span>
                  </div>
                  <div className="bg-white border border-[#0D9488]/30 rounded p-2 text-center">
                    <span className="block text-[11px] font-bold text-primary">Kajen II</span>
                    <span className="text-[10px] text-on-surface-variant">39 Nakes</span>
                  </div>
                  <div className="bg-white border border-[#0D9488]/30 rounded p-2 text-center">
                    <span className="block text-[11px] font-bold text-primary">Bojong I</span>
                    <span className="text-[10px] text-on-surface-variant">44 Nakes</span>
                  </div>
                  <div className="bg-white border border-[#0D9488]/30 rounded p-2 text-center">
                    <span className="block text-[11px] font-bold text-primary">Wonopringgo</span>
                    <span className="text-[10px] text-on-surface-variant">40 Nakes</span>
                  </div>
                  <div className="bg-white border border-[#0D9488]/30 rounded p-2 text-center">
                    <span className="block text-[11px] font-bold text-primary">Doro I</span>
                    <span className="text-[10px] text-on-surface-variant">35 Nakes</span>
                  </div>
                  <div className="bg-white border border-[#0D9488]/30 rounded p-2 text-center">
                    <span className="block text-[11px] font-bold text-primary">Kesesi I</span>
                    <span className="text-[10px] text-on-surface-variant">41 Nakes</span>
                  </div>
                  <div className="bg-orange-50 border border-[#EA580C]/40 rounded p-2 text-center">
                    <span className="block text-[11px] font-bold text-[#9A3412]">Lebakbarang</span>
                    <span className="text-[10px] text-[#C2410C] font-semibold">27 Nakes</span>
                  </div>
                  <div className="bg-orange-50 border border-[#EA580C]/40 rounded p-2 text-center">
                    <span className="block text-[11px] font-bold text-[#9A3412]">Petungkriyono</span>
                    <span className="text-[10px] text-[#C2410C] font-semibold">29 Nakes</span>
                  </div>
                  <div className="bg-orange-50 border border-[#EA580C]/40 rounded p-2 text-center">
                    <span className="block text-[11px] font-bold text-[#9A3412]">Kandangserang</span>
                    <span className="text-[10px] text-[#C2410C] font-semibold">32 Nakes</span>
                  </div>
                </div>

                <p className="text-[11px] text-on-surface-variant text-center mt-1">
                  *Tiga puskesmas dataran tinggi terpencil diprioritaskan insentif tunjangan &amp; telemedicine rujukan Pneumonia Balita ke RSUD Kajen.
                </p>
              </div>
            </div>
          </div>

          {/* Table ABK */}
          <div className="col-span-12 xl:col-span-5 bg-surface-container-lowest rounded-xl border border-outline-variant/30 shadow-sm overflow-hidden flex flex-col">
            <div className="bg-primary-container text-white px-5 py-3.5 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                <h2 className="text-title-lg font-title-lg text-white">Analisis Kebutuhan Tenaga (ABK 2024)</h2>
              </div>
              <span className="text-label-md font-label-md text-on-primary-container">Data Sampel Faskes</span>
            </div>
            <div className="p-0 flex-1 overflow-x-auto">
              <table className="w-full text-left text-body-sm">
                <thead className="bg-[#F8FAFC] text-[11px] uppercase text-[#64748B] font-semibold border-b border-[#E2E8F0]">
                  <tr>
                    <th className="px-4 py-3">Fasilitas Kesehatan</th>
                    <th className="px-3 py-3 text-right">Ada</th>
                    <th className="px-3 py-3 text-right">Ideal</th>
                    <th className="px-3 py-3 text-right">Gap</th>
                    <th className="px-4 py-3 text-center">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E2E8F0]">
                  <tr className="hover:bg-[#F1F5F9] transition-colors">
                    <td className="px-4 py-3 font-medium text-on-surface">Pusk. Petungkriyono</td>
                    <td className="px-3 py-3 text-right tabular-nums">29</td>
                    <td className="px-3 py-3 text-right tabular-nums">35</td>
                    <td className="px-3 py-3 text-right tabular-nums text-error font-semibold">-6</td>
                    <td className="px-4 py-3 text-center">
                      <span className="inline-block px-2 py-0.5 rounded text-[10px] font-semibold bg-[#FFE4E6] text-[#9F1239]">Prioritas</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-[#F1F5F9] transition-colors">
                    <td className="px-4 py-3 font-medium text-on-surface">Pusk. Lebakbarang</td>
                    <td className="px-3 py-3 text-right tabular-nums">27</td>
                    <td className="px-3 py-3 text-right tabular-nums">32</td>
                    <td className="px-3 py-3 text-right tabular-nums text-error font-semibold">-5</td>
                    <td className="px-4 py-3 text-center">
                      <span className="inline-block px-2 py-0.5 rounded text-[10px] font-semibold bg-[#FFE4E6] text-[#9F1239]">Prioritas</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-[#F1F5F9] transition-colors">
                    <td className="px-4 py-3 font-medium text-on-surface">Pusk. Kandangserang</td>
                    <td className="px-3 py-3 text-right tabular-nums">32</td>
                    <td className="px-3 py-3 text-right tabular-nums">38</td>
                    <td className="px-3 py-3 text-right tabular-nums text-error font-semibold">-6</td>
                    <td className="px-4 py-3 text-center">
                      <span className="inline-block px-2 py-0.5 rounded text-[10px] font-semibold bg-[#FFE4E6] text-[#9F1239]">Prioritas</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-[#F1F5F9] transition-colors">
                    <td className="px-4 py-3 font-medium text-on-surface">Pusk. Kedungwuni I</td>
                    <td className="px-3 py-3 text-right tabular-nums">51</td>
                    <td className="px-3 py-3 text-right tabular-nums">52</td>
                    <td className="px-3 py-3 text-right tabular-nums text-on-surface-variant">-1</td>
                    <td className="px-4 py-3 text-center">
                      <span className="inline-block px-2 py-0.5 rounded text-[10px] font-semibold bg-[#DCFCE7] text-[#166534]">Terkendali</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-[#F1F5F9] transition-colors">
                    <td className="px-4 py-3 font-medium text-on-surface">RSUD Kajen (Pneumo)</td>
                    <td className="px-3 py-3 text-right tabular-nums">318</td>
                    <td className="px-3 py-3 text-right tabular-nums">330</td>
                    <td className="px-3 py-3 text-right tabular-nums text-on-surface-variant">-12</td>
                    <td className="px-4 py-3 text-center">
                      <span className="inline-block px-2 py-0.5 rounded text-[10px] font-semibold bg-[#E0F2FE] text-[#075985]">Siaga</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="p-3 bg-[#F8FAFC] border-t border-[#E2E8F0] flex items-center justify-between text-xs text-on-surface-variant">
              <span>Total Defisit Dokter Gigi &amp; Spesialis Anak: <strong>14 orang</strong></span>
            </div>
          </div>
        </div>

        {/* Section 4: Policy Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="bg-[#FEFCE8] border border-[#FEF08A] rounded-xl p-4 flex gap-3.5 shadow-sm">
            <div className="w-9 h-9 rounded-lg bg-[#FACC15]/20 flex items-center justify-center text-[#A16207] shrink-0">
              <span className="material-symbols-outlined text-[22px]">warning</span>
            </div>
            <div>
              <h3 className="text-label-lg font-label-lg text-[#854D0E] font-bold">Catatan Penting Distribusi</h3>
              <p className="text-body-sm font-body-sm text-[#713F12] mt-1 leading-relaxed text-xs">
                Distribusi bidan dan perawat telah memenuhi 100% desa di Kab. Pekalongan, namun penempatan dokter umum tetap terpusat di kawasan pesisir (Wiradesa, Kedungwuni, Buaran).
              </p>
            </div>
          </div>

          <div className="bg-[#EFF6FF] border border-[#BFDBFE] rounded-xl p-4 flex gap-3.5 shadow-sm">
            <div className="w-9 h-9 rounded-lg bg-[#3B82F6]/20 flex items-center justify-center text-[#1D4ED8] shrink-0">
              <span className="material-symbols-outlined text-[22px]">assignment</span>
            </div>
            <div>
              <h3 className="text-label-lg font-label-lg text-[#1E40AF] font-bold">Kebijakan Wilayah DTPK 2024</h3>
              <p className="text-body-sm font-body-sm text-[#1E3A8A] mt-1 leading-relaxed text-xs">
                Alokasi insentif khusus BOK (Bantuan Operasional Kesehatan) dan penugasan khusus Nusantara Sehat ditempatkan di Petungkriyono, Lebakbarang, dan Kandangserang guna menekan fatalitas pneumonia.
              </p>
            </div>
          </div>

          <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-xl p-4 flex gap-3.5 shadow-sm">
            <div className="w-9 h-9 rounded-lg bg-[#22C55E]/20 flex items-center justify-center text-[#15803D] shrink-0">
              <span className="material-symbols-outlined text-[22px]">verified_user</span>
            </div>
            <div>
              <h3 className="text-label-lg font-label-lg text-[#166534] font-bold">Validasi &amp; Sumber Data</h3>
              <p className="text-body-sm font-body-sm text-[#14532D] mt-1 leading-relaxed text-xs">
                Sistem Informasi SDM Kesehatan (SISDMK) Kemenkes RI cut-off 15 November 2024, disinkronkan dengan BKPSDM Kab. Pekalongan.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full bg-surface-container-lowest border-t border-outline-variant/30 px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-3">
        <div className="flex items-center gap-2">
          <span className="text-label-lg font-label-lg text-primary font-bold">Dinas Kesehatan</span>
          <span className="text-body-sm font-body-sm text-on-surface-variant">
            © 2024 Dinas Kesehatan Pemerintah Kabupaten Pekalongan. Sistem Informasi Surveilans Terpadu.
          </span>
        </div>
        <div className="flex items-center gap-5 text-label-md font-label-md">
          <span className="text-on-surface-variant">Satu Data Kesehatan</span>
          <span className="text-on-surface-variant">Portal Pemkab Pekalongan</span>
          <span className="text-on-surface-variant">Kebijakan Privasi</span>
          <span className="text-primary font-semibold flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-error inline-block"></span>
            Kontak Darurat SPGDT 119
          </span>
        </div>
      </footer>
    </div>
  );
}
