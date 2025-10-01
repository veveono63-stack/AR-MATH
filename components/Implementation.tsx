
import React from 'react';
import Card from './Card';
import { CameraIcon, VideoCameraIcon, NewspaperIcon } from './icons/PortfolioIcons';

const Implementation: React.FC = () => {
  return (
    <div className="space-y-8">
      <Card title="Foto Implementasi" icon={<CameraIcon />}>
        <p className="text-slate-600 mb-4">Dokumentasi foto dari implementasi karya inovasi di lingkungan belajar.</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="aspect-w-1 aspect-h-1">
              <img
                className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                src={`https://picsum.photos/seed/impl${i}/300/300`}
                alt={`Foto implementasi ${i + 1}`}
              />
            </div>
          ))}
        </div>
      </Card>
      
      <Card title="Video Pembelajaran" icon={<VideoCameraIcon />}>
        <p className="text-slate-600 mb-4">Video yang menunjukkan penggunaan media pembelajaran inovatif dalam kegiatan belajar mengajar.</p>
        <div className="grid md:grid-cols-2 gap-6">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="bg-slate-200 aspect-video rounded-lg flex items-center justify-center">
              <div className="text-center text-slate-500">
                <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <p className="mt-2 font-semibold">Video Placeholder {i+1}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
      
      <Card title="Artikel Terkait" icon={<NewspaperIcon />}>
        <p className="text-slate-600 mb-4">Artikel dan publikasi yang membahas atau berkaitan dengan karya inovasi yang telah dibuat.</p>
        <div className="space-y-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="bg-slate-100 p-4 rounded-lg flex items-center justify-between hover:bg-slate-200 transition-colors">
              <div>
                <h3 className="font-semibold text-slate-800">Judul Artikel Placeholder {i+1}</h3>
                <p className="text-sm text-slate-500">Deskripsi singkat mengenai isi dari artikel ini.</p>
              </div>
              <a href="#" className="text-sm text-blue-600 font-medium hover:underline whitespace-nowrap">Baca Selengkapnya &rarr;</a>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Implementation;
