// File: PartnerSlider.jsx

import React from 'react';

const partners = [
  { name: 'Google', img: 'https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-1024.png' },
  { name: 'Microsoft', img: 'https://cdn.iconscout.com/icon/free/png-512/free-microsoft-logo-icon-download-in-svg-png-gif-file-formats--logos-pack-icons-722716.png?f=webp&w=512' },
  { name: '3mtt', img: 'https://app.3mtt.training/static/media/main.242b8b1ce339b38fd589.png' },
  { name: 'Utiva', img: 'https://utiva.io/static/media/utivacolored.7364336b.svg' },
  { name: 'hack51', img: 'https://hack51.africa/wp-content/uploads/elementor/thumbs/hack51-nav-logo-qr1bmwyzpfnd87g08fp0ojcgri4uqdjb59vm1cxaoq.png' },
  { name: 'Dahel', img: 'https://scontent.fabb1-3.fna.fbcdn.net/v/t39.30808-6/273678184_103505842270427_7842191907460115838_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGysd22dW5etP5hMf0jrl8eNinuEwI7N_42Ke4TAjs3_vv6-s9hw0lB9rFEw75On6qA_6GurpX_TYRAxyxTnEKe&_nc_ohc=2WXYJjP6LAkQ7kNvgH6f-r8&_nc_zt=23&_nc_ht=scontent.fabb1-3.fna&_nc_gid=A2k0PN06NT2urlyKa_Ntg7x&oh=00_AYCDdjAJ4ZrVTbXrcJ3L1wqO-6RHZHSu0OTkcRtnc93pMw&oe=6738E11F' },
  { name: 'Guru', img: 'https://scontent.fabb1-1.fna.fbcdn.net/v/t39.30808-6/310736201_104199882474134_3117684508541822745_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFCdGBu964i3n66XVf0eOvqwNAnh7ZE-y3A0CeHtkT7LWJuM_43sCYPes3phrXLBQjBp1wWkxrXwNrerKF6e1in&_nc_ohc=w0VYoWFLe8UQ7kNvgGoeBIb&_nc_zt=23&_nc_ht=scontent.fabb1-1.fna&_nc_gid=AYYcvtxDGCZixkM0dUjYEnB&oh=00_AYDikEImHAhVsAVWE1alpqRL2qiLGt7viRNkoHITveGhTQ&oe=6738F0F8' },
  { name: 'Cross River State', img: 'https://www.crossriverstate.gov.ng/assets/crs_logo_white-087ea47b.png' },
  // Duplicate logos for seamless looping
];

function PartnerSlider() {
  return (
    <div className="overflow-hidden w-full bg-gray-100 py-6">
      <h2 className="text-2xl font-bold text-center text-green-600 mb-4">Our Partners</h2>
      <div className="flex animate-slide space-x-6">
        {partners.concat(partners).map((partner, index) => (
          <div key={index} className="flex-shrink-0 w-48 h-32 p-4 bg-white rounded-lg shadow-lg flex items-center justify-center">
            <img
              src={partner.img}
              alt={`${partner.name} logo`}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-slide {
          animation: slide 20s linear infinite;
        }
      `}</style>
    </div>
  );
}

export default PartnerSlider;
