
import React from 'react';
import { FacebookIcon, InstagramIcon, TikTokIcon } from './icons/SocialIcons';
import Card from './Card';

const Profile: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <Card>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-shrink-0">
            <img
              className="h-40 w-40 rounded-full object-cover shadow-lg border-4 border-white"
              src="https://picsum.photos/seed/asnadikuncoro/200"
              alt="Foto profil Asnadi Kuncoro"
            />
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-blue-700">ASNADI KUNCORO</h2>
            <p className="mt-2 text-lg text-slate-600">
              Guru di SD NEGERI 2 TANJUNGSARI
            </p>
            <p className="text-md text-slate-500">
              Kec. Karangrejo, Kab. Tulungagung
            </p>
            <div className="mt-6 flex justify-center md:justify-start space-x-6">
              <a href="https://facebook.com/AsnadiKuncoro" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-600 transition-colors">
                <FacebookIcon className="h-8 w-8" />
              </a>
              <a href="https://instagram.com/asnadikun96" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-pink-600 transition-colors">
                <InstagramIcon className="h-8 w-8" />
              </a>
              <a href="https://tiktok.com/@askun96" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-black transition-colors">
                <TikTokIcon className="h-8 w-8" />
              </a>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Profile;
