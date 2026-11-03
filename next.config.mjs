/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: false },
      { source: "/code.html", destination: "/", permanent: false },
      { source: "/demografi.html", destination: "/demografi", permanent: false },
      { source: "/kasus_pneumonia.html", destination: "/kasus-pneumonia", permanent: false },
      { source: "/imunisasi.html", destination: "/imunisasi", permanent: false },
      { source: "/tenaga_kesehatan.html", destination: "/tenaga-kesehatan", permanent: false },
      { source: "/per_kecamatan.html", destination: "/per-kecamatan", permanent: false },
      { source: "/tentang_data.html", destination: "/tentang-data", permanent: false },
    ];
  },
};

export default nextConfig;
