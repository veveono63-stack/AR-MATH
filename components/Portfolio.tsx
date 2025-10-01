
import React from 'react';
import Card from './Card';
import { EducationIcon, UsersIcon, BriefcaseIcon, DocumentTextIcon, SparklesIcon } from './icons/PortfolioIcons';

const Portfolio: React.FC = () => {
  const developmentActivities = {
    '2025': [
      'Diklat Coding & AI : Praktis Mengenalkan Kecerdasan Artifisial di Kelas',
      'Diklat Proyek Pintar Menggunakan Coding dan Micro:bit untuk Mendorong Berpikir Komputasional Siswa',
    ],
    '2024': [
      'Diklat Nasional Kunci Sukses Sekolah: Implementasi & Optimalisasi Kurikulum Merdeka Tahun 2024 di Satuan Pendidikan',
      'Diklat Nasional Strategi Efektif: Peningkatan Keterampilan Guru Dengan Memaksimalkan Penggunaan Platform Merdeka Mengajar',
      'Diklat Pembelajaran STEM pada Implementasi Kurikulum Merdeka',
      'Bimtek Penguatan Implementasi Kurikulum Merdeka bagi Guru Kelas III, VI, dan Mapel Sekolah Dasar',
      'Diklat Pembelajaran Interaktif dengan Quizizz Terintegrasi Belajar.id',
    ],
    '2023': [
      'Diklat Penerapan Pembelajaran Kreatif & Inovatif dalam Era Kurikulum Merdeka',
      'Metode Dahsyat dan Mudah: Optimalkan Penggunaan Teknologi Artificial Intelligence dalam Pendidikan',
      'Pelatihan Mandiri dalam Platform Merdeka Mengajar dengan Topik Kurikulum Merdeka',
    ],
  };

  return (
    <div className="space-y-8">
      <Card title="Kegiatan Pengembangan Diri" icon={<EducationIcon />}>
        <div className="space-y-6">
          {Object.entries(developmentActivities).map(([year, activities]) => (
            <div key={year}>
              <h3 className="text-lg font-semibold text-slate-700 mb-2 border-b pb-1">{`Tahun ${year}`}</h3>
              <ul className="list-disc list-inside space-y-2 text-slate-600">
                {activities.map((activity, index) => (
                  <li key={index}>{activity}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Card>
      
      <div className="grid md:grid-cols-2 gap-8">
        <Card title="Pendampingan Teman Sejawat" icon={<UsersIcon />}>
          <p className="text-slate-600">Informasi mengenai kegiatan pendampingan teman sejawat selama 3 tahun terakhir akan ditampilkan di sini.</p>
        </Card>
        
        <Card title="Pengalaman Organisasi Profesi" icon={<BriefcaseIcon />}>
          <p className="text-slate-600">Rincian pengalaman dalam organisasi profesi akan diperbarui di bagian ini.</p>
        </Card>
      </div>

      <Card title="Karya Tulis & Inovasi" icon={<DocumentTextIcon />}>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-slate-700">Karya Tulis (2020)</h3>
            <p className="text-slate-600 italic">"Profile of Mathematical Connection Abilities of Fraction Materials in Class V Students Viewed From Math Ability"</p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-700">Inovasi Pembelajaran (2022)</h3>
            <ul className="list-disc list-inside text-slate-600">
              <li>Media Pembelajaran Tematik berbasis Aplikasi Android</li>
              <li>Media Pembelajaran Kartu Domino ASEAN</li>
            </ul>
          </div>
        </div>
      </Card>
      
      <Card title="Prestasi & Penghargaan" icon={<SparklesIcon />}>
        <p className="text-slate-600">
          <span className="font-semibold text-slate-700">Juara 3</span> Lomba Pembuatan Video Pembelajaran SD Kategori Video Microteaching Dalam Rangka Memperingati Hari Guru Nasional Ke-77 Tahun 2022.
        </p>
      </Card>
    </div>
  );
};

export default Portfolio;
