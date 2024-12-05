// File: PartnerSlider.jsx

import React from 'react';

const partners = [
  { name: 'Google', img: 'https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-1024.png' },
  { name: 'Microsoft', img: 'https://cdn.iconscout.com/icon/free/png-512/free-microsoft-logo-icon-download-in-svg-png-gif-file-formats--logos-pack-icons-722716.png?f=webp&w=512' },
  { name: '3mtt', img: 'https://app.3mtt.training/static/media/main.242b8b1ce339b38fd589.png' },
  { name: 'Utiva', img: 'https://utiva.io/static/media/utivacolored.7364336b.svg' },
  { name: 'hack51', img: 'https://hack51.africa/wp-content/uploads/elementor/thumbs/hack51-nav-logo-qr1bmwyzpfnd87g08fp0ojcgri4uqdjb59vm1cxaoq.png' },
  { name: 'Dahel', img: 'https://pbs.twimg.com/profile_images/1707911067555241984/Tf7Gvezt_400x400.jpg' },
  { name: 'Guru', img: 'https://media.licdn.com/dms/image/v2/C4D0BAQHcOVpKpOVyMQ/company-logo_200_200/company-logo_200_200/0/1678480233101?e=1741219200&v=beta&t=CmMoU5juCwOWIdvYs0gDdHZ_pEC5lyGJivl0bGdFscw' },
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
