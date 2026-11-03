export default function TentangDataPage() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-between bg-surface-container-low/20">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 right-0 z-30 w-full bg-surface-container-lowest border-b border-outline-variant/30 shadow-sm flex flex-col sm:flex-row justify-between sm:items-center px-4 sm:px-6 py-3 gap-3">
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <h1 className="font-headline-md text-headline-md text-primary tracking-tight">
              Metadata, Sumber Data &amp; Tata Kelola Surveilans
            </h1>
            <span className="bg-secondary/10 text-secondary px-2.5 py-0.5 rounded-full font-label-md text-label-md">
              Rilis Resmi
            </span>
          </div>
          <div className="flex items-center gap-3 text-on-surface-variant font-body-sm text-body-sm mt-0.5">
            <span className="font-medium text-secondary">Kabupaten Pekalongan – Tahun 2024</span>
            <span className="w-1 h-1 rounded-full bg-outline-variant"></span>
            <span>Program Pencegahan Pneumonia &amp; Stunting Balita</span>
          </div>
        </div>

        <div className="flex items-center gap-3 self-end sm:self-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-surface-container-low border border-outline-variant/50 rounded-lg text-primary hover:bg-surface-container active:scale-95 transition-all text-body-sm">
            <span className="material-symbols-outlined text-[18px] text-secondary">filter_alt</span>
            <span className="font-label-lg text-label-lg">Filter Kecamatan: Semua</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary-container text-surface-container-lowest rounded-lg hover:bg-secondary active:scale-95 transition-all text-body-sm">
            <span className="material-symbols-outlined text-[18px]">calendar_today</span>
            <span className="font-label-lg text-label-lg">Versi: Rilis November 2024</span>
          </div>
          <button
            className="w-9 h-9 rounded-lg flex items-center justify-center text-on-surface-variant hover:bg-surface-container active:scale-95 transition-colors relative"
            title="Notifikasi Verifikasi Data"
          >
            <span className="material-symbols-outlined">notifications</span>
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-error ring-2 ring-surface-container-lowest"></span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="w-full p-4 sm:p-6 space-y-6 flex-1 max-w-[1920px] mx-auto">
        {/* KPI Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          <div className="bg-[#DCFCE7] border border-[#BBF7D0] rounded-xl p-5 shadow-sm relative overflow-hidden flex flex-col justify-between">
            <div className="flex items-start justify-between">
              <div className="flex flex-col">
                <span className="font-label-md text-label-md text-[#166534] tracking-wider uppercase">Integritas Data</span>
                <div className="flex items-baseline gap-2 mt-2">
                  <span className="font-metric-display text-metric-display text-[#14532D]">100%</span>
                  <span className="font-title-lg text-title-lg text-[#166534]">Terverifikasi</span>
                </div>
              </div>
              <div className="w-10 h-10 rounded-full bg-white/70 flex items-center justify-center text-[#166534] shadow-sm">
                <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  verified_user
                </span>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-[#166534]/15 flex items-center justify-between text-body-sm font-body-sm text-[#166534]">
              <span className="flex items-center gap-1 font-medium">
                <span className="material-symbols-outlined text-[16px]">check_circle</span> Kemenkes &amp; Dinkes Prov.
              </span>
              <span className="font-label-md text-label-md bg-white/80 px-2 py-0.5 rounded-full text-[#14532D]">Audit Valid</span>
            </div>
          </div>

          <div className="bg-[#E0F2FE] border border-[#BAE6FD] rounded-xl p-5 shadow-sm relative overflow-hidden flex flex-col justify-between">
            <div className="flex items-start justify-between">
              <div className="flex flex-col">
                <span className="font-label-md text-label-md text-[#075985] tracking-wider uppercase">Sumber Data Utama</span>
                <div className="flex items-baseline gap-2 mt-2">
                  <span className="font-metric-display text-metric-display text-[#0C4A6E]">4</span>
                  <span className="font-title-lg text-title-lg text-[#075985]">Sistem Terintegrasi</span>
                </div>
              </div>
              <div className="w-10 h-10 rounded-full bg-white/70 flex items-center justify-center text-[#075985] shadow-sm">
                <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  hub
                </span>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-[#075985]/15 flex items-center justify-between text-body-sm font-body-sm text-[#075985]">
              <span className="font-medium truncate">SIMKEP, ASiK, SIRS, Disdukcapil</span>
              <span className="font-label-md text-label-md bg-white/80 px-2 py-0.5 rounded-full text-[#0C4A6E]">API Live</span>
            </div>
          </div>

          <div className="bg-[#F3E8FF] border border-[#E9D5FF] rounded-xl p-5 shadow-sm relative overflow-hidden flex flex-col justify-between">
            <div className="flex items-start justify-between">
              <div className="flex flex-col">
                <span className="font-label-md text-label-md text-[#6B21A8] tracking-wider uppercase">Frekuensi Pembaruan</span>
                <div className="flex items-baseline gap-2 mt-2">
                  <span className="font-metric-display text-metric-display text-[#581C87]">Real-time</span>
                  <span className="font-body-md text-body-md text-[#7E22CE]">Sinkronisasi</span>
                </div>
              </div>
              <div className="w-10 h-10 rounded-full bg-white/70 flex items-center justify-center text-[#6B21A8] shadow-sm">
                <span className="material-symbols-outlined text-[24px]">sync</span>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-[#6B21A8]/15 flex items-center justify-between text-body-sm font-body-sm text-[#6B21A8]">
              <span className="font-medium">Harian (Puskesmas) / Bulanan (SKDR)</span>
              <span className="font-label-md text-label-md bg-white/80 px-2 py-0.5 rounded-full text-[#581C87]">Auto-sync</span>
            </div>
          </div>

          <div className="bg-[#FFEDD5] border border-[#FED7AA] rounded-xl p-5 shadow-sm relative overflow-hidden flex flex-col justify-between">
            <div className="flex items-start justify-between">
              <div className="flex flex-col">
                <span className="font-label-md text-label-md text-[#9A3412] tracking-wider uppercase">Total Entitas Terdata</span>
                <div className="flex items-baseline gap-2 mt-2">
                  <span className="font-metric-display text-metric-display text-[#7C2D12]">27</span>
                  <span className="font-title-lg text-title-lg text-[#9A3412]">Puskesmas</span>
                </div>
              </div>
              <div className="w-10 h-10 rounded-full bg-white/70 flex items-center justify-center text-[#9A3412] shadow-sm">
                <span className="material-symbols-outlined text-[24px]">apartment</span>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-[#9A3412]/15 flex items-center justify-between text-body-sm font-body-sm text-[#9A3412]">
              <span className="font-medium">Jejaring: 1.148 Posyandu Aktif</span>
              <span className="font-label-md text-label-md bg-white/80 px-2 py-0.5 rounded-full text-[#7C2D12]">100% Wilayah</span>
            </div>
          </div>
        </section>

        {/* Diagram Alur Integrasi */}
        <section className="bg-surface-container-lowest border border-outline-variant/30 rounded-xl overflow-hidden shadow-sm">
          <div className="bg-primary-container px-6 py-4 flex flex-col sm:flex-row justify-between sm:items-center gap-3 text-surface">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-surface/10 flex items-center justify-center text-surface-container-highest">
                <span className="material-symbols-outlined text-[20px]">account_tree</span>
              </div>
              <div>
                <h2 className="font-headline-md text-headline-md text-surface font-semibold tracking-tight">
                  Arsitektur &amp; Alur Integrasi Satu Data Kesehatan Kab. Pekalongan
                </h2>
                <p className="font-body-sm text-body-sm text-on-primary-container">
                  Pipeline pertukaran data interoperabilitas standar HL7 FHIR &amp; format interoperabel SatuSehat Kemenkes RI
                </p>
              </div>
            </div>
            <span className="px-3 py-1 bg-surface/10 text-primary-fixed rounded-full font-label-md text-label-md flex items-center gap-1.5 self-start sm:self-auto">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span> Interoperabilitas Aktif
            </span>
          </div>

          <div className="p-6 bg-surface-container-lowest">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
              {/* Node 1 */}
              <div className="bg-[#F8FAFC] border border-outline-variant/40 rounded-xl p-4 flex flex-col justify-between hover:border-secondary transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-label-md text-label-md bg-secondary/10 text-secondary px-2 py-0.5 rounded font-semibold">TINGKAT 1</span>
                  <span className="material-symbols-outlined text-secondary">child_care</span>
                </div>
                <div>
                  <h3 className="font-title-lg text-title-lg text-primary mb-1">Posyandu &amp; Kader Desa</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-3">
                    Pencatatan primer penimbangan balita, gejala batuk/sukar bernapas, riwayat imunisasi BCG s/d DPT-HB-Hib di tingkat RW.
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-200 flex flex-col gap-1.5 font-label-md text-label-md text-on-surface-variant">
                  <div className="flex items-center justify-between">
                    <span>Instrumen:</span>
                    <span className="font-semibold text-primary">Buku KIA / e-PPGBM</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Total Titik:</span>
                    <span className="font-semibold text-primary">1.148 Posyandu</span>
                  </div>
                </div>
              </div>

              {/* Node 2 */}
              <div className="bg-[#F8FAFC] border border-outline-variant/40 rounded-xl p-4 flex flex-col justify-between hover:border-secondary transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-label-md text-label-md bg-secondary/10 text-secondary px-2 py-0.5 rounded font-semibold">TINGKAT 2</span>
                  <span className="material-symbols-outlined text-secondary">local_hospital</span>
                </div>
                <div>
                  <h3 className="font-title-lg text-title-lg text-primary mb-1">27 Puskesmas Se-Kabupaten</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-3">
                    Validasi klinis oleh dokter dan petugas MTBS (Manajemen Terpadu Balita Sakit). Klasifikasi pneumonia ringan, berat, dan rujukan.
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-200 flex flex-col gap-1.5 font-label-md text-label-md text-on-surface-variant">
                  <div className="flex items-center justify-between">
                    <span>Aplikasi:</span>
                    <span className="font-semibold text-primary">SIMKEP &amp; ASiK Kemenkes</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Frekuensi:</span>
                    <span className="font-semibold text-primary">Harian / Real-time</span>
                  </div>
                </div>
              </div>

              {/* Node 3 */}
              <div className="bg-[#EFF6FF] border-2 border-secondary/40 rounded-xl p-4 flex flex-col justify-between hover:border-secondary transition-colors shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-label-md text-label-md bg-primary-container text-surface px-2 py-0.5 rounded font-semibold">PUSAT KONTROL</span>
                  <span className="material-symbols-outlined text-secondary">analytics</span>
                </div>
                <div>
                  <h3 className="font-title-lg text-title-lg text-primary mb-1">Dinkes Kab. Pekalongan</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-3">
                    Tim Epidemiologi melakukan agregasi kewilayahan, audit CFR, monitoring stok vaksin, dan validasi duplikasi NIK.
                  </p>
                </div>
                <div className="pt-3 border-t border-blue-200 flex flex-col gap-1.5 font-label-md text-label-md text-on-surface-variant">
                  <div className="flex items-center justify-between">
                    <span>Engine:</span>
                    <span className="font-semibold text-secondary">Surveilans Terpadu Dinkes</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Verifikasi:</span>
                    <span className="font-semibold text-emerald-700">100% Cleansed Data</span>
                  </div>
                </div>
              </div>

              {/* Node 4 */}
              <div className="bg-[#F8FAFC] border border-outline-variant/40 rounded-xl p-4 flex flex-col justify-between hover:border-secondary transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-label-md text-label-md bg-secondary/10 text-secondary px-2 py-0.5 rounded font-semibold">NASIONAL</span>
                  <span className="material-symbols-outlined text-secondary">cloud_done</span>
                </div>
                <div>
                  <h3 className="font-title-lg text-title-lg text-primary mb-1">Satu Data Kemenkes RI</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-3">
                    Penyelarasan indikator RPJMD &amp; target Renstra Nasional melalui portal SatuSehat serta pelaporan SKDR.
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-200 flex flex-col gap-1.5 font-label-md text-label-md text-on-surface-variant">
                  <div className="flex items-center justify-between">
                    <span>Protokol:</span>
                    <span className="font-semibold text-primary">FHIR REST API JSON</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Output:</span>
                    <span className="font-semibold text-primary">Publikasi Resmi RI</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between text-body-sm text-on-surface-variant gap-2">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-[18px]">security</span>
                <span>Semua transfer data dienkripsi dengan standar TLS 1.3 serta mematuhi UU No. 27/2022 (PDP).</span>
              </div>
              <span className="font-label-md text-label-md text-secondary">Latency Sync: &lt; 15 menit</span>
            </div>
          </div>
        </section>

        {/* Kamus Data & Validasi */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
          <div className="xl:col-span-8 bg-surface-container-lowest border border-outline-variant/30 rounded-xl overflow-hidden shadow-sm flex flex-col">
            <div className="px-6 py-4 border-b border-outline-variant/20 flex items-center justify-between bg-surface-container-lowest">
              <div className="flex items-center gap-2.5">
                <span className="bg-primary-container px-2.5 py-1 rounded text-label-md font-label-md text-white">METADATA RESMI</span>
                <h2 className="font-headline-md text-headline-md text-primary font-semibold">Kamus Data &amp; Definisi Operasional</h2>
              </div>
              <button className="px-3 py-1 bg-surface-container-low border border-outline-variant/40 rounded text-body-sm font-label-lg text-primary hover:bg-surface-container transition-colors flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px]">file_download</span> Unduh PDF
              </button>
            </div>

            <div className="overflow-x-auto flex-1">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#F8FAFC] border-b border-outline-variant/30 text-on-surface-variant font-label-md text-label-md uppercase tracking-wider">
                    <th className="py-3 px-4 w-12 text-center">No</th>
                    <th className="py-3 px-4 w-44">Indikator Surveilans</th>
                    <th className="py-3 px-4">Definisi Operasional Standar</th>
                    <th className="py-3 px-4 w-48">Formula / Rumus Kalkulasi</th>
                    <th className="py-3 px-4 w-32 text-center">Sumber Baku</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/20 font-body-sm text-body-sm">
                  <tr className="hover:bg-[#F1F5F9] transition-colors">
                    <td className="py-3.5 px-4 text-center text-on-surface-variant font-semibold">1</td>
                    <td className="py-3.5 px-4">
                      <div className="font-semibold text-primary">Kasus Pneumonia Balita</div>
                      <span className="text-xs text-secondary font-medium">ICD-10: J12-J18</span>
                    </td>
                    <td className="py-3.5 px-4 text-on-surface-variant leading-relaxed">
                      Balita usia 0–59 bulan dengan keluhan batuk atau kesukaran bernapas yang disertai napas cepat dan/atau tarikan dinding dada ke dalam (chest indrawing).
                    </td>
                    <td className="py-3.5 px-4 font-mono text-xs text-primary bg-slate-50/50 rounded p-2">
                      ∑ Kasus Balita Terdiagnosa Pneumonia dlm Periode Berjalan
                    </td>
                    <td className="py-3.5 px-4 text-center">
                      <span className="px-2 py-0.5 bg-blue-100 text-blue-800 rounded font-label-md text-label-md">SIMKEP / MTBS</span>
                    </td>
                  </tr>

                  <tr className="hover:bg-[#F1F5F9] transition-colors">
                    <td className="py-3.5 px-4 text-center text-on-surface-variant font-semibold">2</td>
                    <td className="py-3.5 px-4">
                      <div className="font-semibold text-primary">Cakupan IDL Balita</div>
                      <span className="text-xs text-secondary font-medium">Indikator Renstra</span>
                    </td>
                    <td className="py-3.5 px-4 text-on-surface-variant leading-relaxed">
                      Persentase bayi yang telah mendapatkan 1 dosis Hepatitis B, 1 dosis BCG, 3 dosis DPT-HB-Hib, 4 dosis Polio tetes, 1 dosis IPV, dan 1 dosis Campak-Rubella sebelum genap berusia 12 bulan.
                    </td>
                    <td className="py-3.5 px-4 font-mono text-xs text-primary bg-slate-50/50 rounded p-2">
                      (∑ Bayi IDL / ∑ Sasaran Kohort Bayi Lahir Hidup) × 100%
                    </td>
                    <td className="py-3.5 px-4 text-center">
                      <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded font-label-md text-label-md">ASiK Kemenkes</span>
                    </td>
                  </tr>

                  <tr className="hover:bg-[#F1F5F9] transition-colors">
                    <td className="py-3.5 px-4 text-center text-on-surface-variant font-semibold">3</td>
                    <td className="py-3.5 px-4">
                      <div className="font-semibold text-primary">Case Fatality Rate (CFR)</div>
                      <span className="text-xs text-error font-medium">Tingkat Fatalitas</span>
                    </td>
                    <td className="py-3.5 px-4 text-on-surface-variant leading-relaxed">
                      Rasio mortalitas balita akibat komplikasi pneumonia terhadap total seluruh penderita pneumonia yang terdata pada fasilitas pelayanan kesehatan.
                    </td>
                    <td className="py-3.5 px-4 font-mono text-xs text-primary bg-slate-50/50 rounded p-2">
                      (∑ Kematian Balita Pneumonia / ∑ Total Kasus Pneumonia) × 100%
                    </td>
                    <td className="py-3.5 px-4 text-center">
                      <span className="px-2 py-0.5 bg-red-100 text-red-800 rounded font-label-md text-label-md">SIRS &amp; Audit Dinkes</span>
                    </td>
                  </tr>

                  <tr className="hover:bg-[#F1F5F9] transition-colors">
                    <td className="py-3.5 px-4 text-center text-on-surface-variant font-semibold">4</td>
                    <td className="py-3.5 px-4">
                      <div className="font-semibold text-primary">Rata-rata Penduduk / RT</div>
                      <span className="text-xs text-secondary font-medium">Kepadatan Hunian</span>
                    </td>
                    <td className="py-3.5 px-4 text-on-surface-variant leading-relaxed">
                      Rata-rata jumlah jiwa dalam setiap satuan Rumah Tangga (RT) di tingkat kecamatan, merefleksikan tingkat kepadatan mikro dan potensi penularan droplet.
                    </td>
                    <td className="py-3.5 px-4 font-mono text-xs text-primary bg-slate-50/50 rounded p-2">
                      ∑ Jumlah Jiwa Penduduk / ∑ Total Rumah Tangga Resmi
                    </td>
                    <td className="py-3.5 px-4 text-center">
                      <span className="px-2 py-0.5 bg-purple-100 text-purple-800 rounded font-label-md text-label-md">Disdukcapil 2024</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Validation & Helpdesk */}
          <div className="xl:col-span-4 space-y-6 flex flex-col justify-between">
            <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-xl p-5 shadow-sm">
              <div className="flex items-center gap-2.5 mb-3 text-primary">
                <span className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-700 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>warning</span>
                </span>
                <h3 className="font-title-lg text-title-lg font-semibold">Catatan Validasi &amp; Verifikasi</h3>
              </div>
              <div className="space-y-3 font-body-sm text-body-sm text-on-surface-variant">
                <div className="p-3 bg-amber-50/70 border border-amber-200/80 rounded-lg flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-amber-700 text-[18px] shrink-0 mt-0.5">difference</span>
                  <div>
                    <span className="font-semibold text-amber-950">Perbandingan dengan Kab. Pemalang:</span>
                    <p className="mt-0.5 text-amber-900 leading-snug">
                      Data kasus pneumonia Kab. Pekalongan (669 kasus) dan Kab. Pemalang (13.768 kasus) merepresentasikan perbedaan operasional definisi skrining.
                    </p>
                  </div>
                </div>

                <div className="p-3 bg-blue-50/70 border border-blue-200/80 rounded-lg flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5">trending_up</span>
                  <div>
                    <span className="font-semibold text-blue-950">Anomali Cakupan IDL &gt; 100% (101,5%):</span>
                    <p className="mt-0.5 text-blue-900 leading-snug">
                      Disebabkan migrasi balita komuter non-domisili yang memperoleh imunisasi di faskes perbatasan Kab. Pekalongan.
                    </p>
                  </div>
                </div>

                <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-on-surface-variant text-[18px] shrink-0 mt-0.5">analytics</span>
                  <div>
                    <span className="font-semibold text-primary">Keterbatasan Variabel Faktor Risiko:</span>
                    <p className="mt-0.5 text-on-surface-variant leading-snug">
                      Faktor risiko pajanan asap rokok domestik, status BBLR, dan ventilasi hunian saat ini masih dalam fase agregasi kohort tahap II.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-xl p-5 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <span className="font-label-md text-label-md bg-rose-100 text-rose-800 px-2 py-0.5 rounded font-semibold uppercase">SPGDT &amp; Surveilans</span>
                <span className="material-symbols-outlined text-rose-600">emergency</span>
              </div>
              <h4 className="font-title-lg text-title-lg text-primary font-semibold">Helpdesk &amp; Tim Epidemiologi</h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 mb-4 leading-relaxed">
                Dinas Kesehatan Kabupaten Pekalongan menyediakan jalur koordinasi terpadu untuk klarifikasi anomali data fasilitas kesehatan.
              </p>
              <div className="space-y-2.5 pt-2 border-t border-slate-200">
                <div className="flex items-center justify-between text-body-sm font-body-sm">
                  <span className="text-on-surface-variant flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px] text-secondary">call</span> Kontak Darurat:
                  </span>
                  <span className="font-bold text-rose-700 bg-rose-50 px-2 py-0.5 rounded border border-rose-200">119 / (0285) 381119</span>
                </div>
                <div className="flex items-center justify-between text-body-sm font-body-sm">
                  <span className="text-on-surface-variant flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px] text-secondary">mail</span> Email:
                  </span>
                  <span className="font-semibold text-primary">surveilans@pekalongankab.go.id</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Bento Modules */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-xl p-5 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary mb-3">
                <span className="material-symbols-outlined text-[24px]">enhanced_encryption</span>
              </div>
              <h3 className="font-title-lg text-title-lg text-primary font-semibold mb-1">Tata Kelola &amp; Perlindungan PDP</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-4">
                Penyajian data publik menerapkan pseudonimisasi dan masking ketat. NIK balita dan nama orang tua tidak dipublikasikan ke ranah terbuka.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between font-label-md text-label-md text-secondary">
              <span>UU PDP No. 27/2022</span>
              <span className="material-symbols-outlined text-[16px]">lock</span>
            </div>
          </div>

          <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-xl p-5 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-700 mb-3">
                <span className="material-symbols-outlined text-[24px]">event_repeat</span>
              </div>
              <h3 className="font-title-lg text-title-lg text-primary font-semibold mb-1">Jadwal Siklus Rekonsiliasi</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-4">
                Rekonsiliasi berkala triwulanan melibatkan perwakilan 27 pengelola data Puskesmas, IDAI Cabang Jawa Tengah, dan Seksi Surveilans Dinkes.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between font-label-md text-label-md text-emerald-800">
              <span>Siklus Selanjutnya: Triwulan I 2025</span>
              <span className="material-symbols-outlined text-[16px]">schedule</span>
            </div>
          </div>

          <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-xl p-5 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-700 mb-3">
                <span className="material-symbols-outlined text-[24px]">share</span>
              </div>
              <h3 className="font-title-lg text-title-lg text-primary font-semibold mb-1">Prinsip Satu Data Indonesia</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-4">
                Seluruh dataset dilengkapi standar data baku, metadata terstruktur, interoperabilitas lintas sektor dengan Bappeda, dan kode Kemendagri.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between font-label-md text-label-md text-purple-800">
              <span>Terdaftar di Portal SDI Jateng</span>
              <span className="material-symbols-outlined text-[16px]">public</span>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full bg-surface-container-lowest border-t border-outline-variant/30 flex flex-col md:flex-row justify-between items-center px-6 py-4">
        <div className="flex items-center gap-3">
          <span className="font-label-lg text-label-lg text-primary font-bold">DINKES KAB. PEKALONGAN</span>
          <span className="text-outline-variant">|</span>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            © 2024 Dinas Kesehatan Pemerintah Kabupaten Pekalongan. Sistem Informasi Surveilans Terpadu.
          </p>
        </div>
        <div className="flex items-center gap-6 mt-3 md:mt-0 font-label-md text-label-md">
          <span className="text-on-surface-variant">Satu Data Kesehatan</span>
          <span className="text-on-surface-variant">Portal Pemkab Pekalongan</span>
          <span className="text-on-surface-variant">Kebijakan Privasi</span>
          <span className="text-primary font-semibold flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px] text-error">call</span>
            Kontak Darurat SPGDT 119
          </span>
        </div>
      </footer>
    </div>
  );
}
