import React from 'react';

const communityManagers = [
  { name: 'Chijioke Nwosu', phone: '08012345678', email: 'chijioke.nwosu@example.com', state: 'Abia', img: 'https://pbs.twimg.com/profile_images/1721537728171446272/JnFxj0F5_400x400.jpg' },
  { name: 'Amina Bello', phone: '08023456789', email: 'amina.bello@example.com', state: 'Adamawa', img: 'https://pbs.twimg.com/profile_images/1754362603583795200/mn4Tc79i_400x400.jpg' },
  { name: 'Emeka Okafor', phone: '08034567890', email: 'emeka.okafor@example.com', state: 'Anambra', img: 'https://pbs.twimg.com/profile_images/1721537728171446272/JnFxj0F5_400x400.jpg' },
  { name: 'Fatima Ibrahim', phone: '08045678901', email: 'fatima.ibrahim@example.com', state: 'Bauchi', img: 'https://pbs.twimg.com/profile_images/1754362603583795200/mn4Tc79i_400x400.jpg' },
  { name: 'Tunde Adeyemi', phone: '08056789012', email: 'tunde.adeyemi@example.com', state: 'Benue', img: 'https://pbs.twimg.com/profile_images/1721537728171446272/JnFxj0F5_400x400.jpg' },
  { name: 'Zainab Mohammed', phone: '08067890123', email: 'zainab.mohammed@example.com', state: 'Borno', img: 'https://pbs.twimg.com/profile_images/1754362603583795200/mn4Tc79i_400x400.jpg' },
  { name: 'Chinonso Eze', phone: '08078901234', email: 'chinonso.eze@example.com', state: 'Cross River', img: 'https://pbs.twimg.com/profile_images/1721537728171446272/JnFxj0F5_400x400.jpg' },
  { name: 'Ngozi Uche', phone: '08089012345', email: 'ngozi.uche@example.com', state: 'Delta', img: 'https://pbs.twimg.com/profile_images/1721537728171446272/JnFxj0F5_400x400.jpg' },
  { name: 'Abdul Kareem', phone: '08090123456', email: 'abdul.kareem@example.com', state: 'Ebonyi', img: 'https://pbs.twimg.com/profile_images/1721537728171446272/JnFxj0F5_400x400.jpg' },
  { name: 'Tola Balogun', phone: '08001234567', email: 'tola.balogun@example.com', state: 'Ekiti', img: 'https://pbs.twimg.com/profile_images/1721537728171446272/JnFxj0F5_400x400.jpg' },
  { name: 'Damilola Adeyemo', phone: '08012345679', email: 'damilola.adeyemo@example.com', state: 'Enugu', img: 'https://pbs.twimg.com/profile_images/1721537728171446272/JnFxj0F5_400x400.jpg' },
  { name: 'Olusegun Ogunleye', phone: '08023456780', email: 'olusegun.ogunleye@example.com', state: 'Gombe', img: 'https://pbs.twimg.com/profile_images/1721537728171446272/JnFxj0F5_400x400.jpg' },
  { name: 'Chidera Nnamdi', phone: '08034567891', email: 'chidera.nnamdi@example.com', state: 'Imo', img: 'https://pbs.twimg.com/profile_images/1754362603583795200/mn4Tc79i_400x400.jpg' },
  { name: 'Ifeoma Okoro', phone: '08045678902', email: 'ifeoma.okoro@example.com', state: 'Jigawa', img: 'https://pbs.twimg.com/profile_images/1721537728171446272/JnFxj0F5_400x400.jpg' },
  { name: 'Samuel Abubakar', phone: '08056789013', email: 'samuel.abubakar@example.com', state: 'Kaduna', img: 'https://pbs.twimg.com/profile_images/1721537728171446272/JnFxj0F5_400x400.jpg' },
  { name: 'Olivia Ugochukwu', phone: '08067890124', email: 'olivia.ugochukwu@example.com', state: 'Kano', img: 'https://pbs.twimg.com/profile_images/1754362603583795200/mn4Tc79i_400x400.jpg' },
  { name: 'Daniel Ojo', phone: '08078901235', email: 'daniel.ojo@example.com', state: 'Kogi', img: 'https://pbs.twimg.com/profile_images/1721537728171446272/JnFxj0F5_400x400.jpg' },
  { name: 'Victoria Eze', phone: '08089012346', email: 'victoria.eze@example.com', state: 'Kwara', img: 'https://pbs.twimg.com/profile_images/1721537728171446272/JnFxj0F5_400x400.jpg' },
  { name: 'Chuka Duru', phone: '08090123457', email: 'chuka.duru@example.com', state: 'Lagos', img: 'https://pbs.twimg.com/profile_images/1721537728171446272/JnFxj0F5_400x400.jpg' },
  { name: 'Nneka Obasi', phone: '08001234568', email: 'nneka.obasi@example.com', state: 'Nasarawa', img: 'https://pbs.twimg.com/profile_images/1721537728171446272/JnFxj0F5_400x400.jpg' },
  { name: 'Uchechi Nwankwo', phone: '08012345680', email: 'uchechi.nwankwo@example.com', state: 'Niger', img: 'https://pbs.twimg.com/profile_images/1754362603583795200/mn4Tc79i_400x400.jpg' },
  { name: 'Kingsley Okechukwu', phone: '08023456781', email: 'kingsley.okechukwu@example.com', state: 'Ogun', img: 'https://pbs.twimg.com/profile_images/1721537728171446272/JnFxj0F5_400x400.jpg' },
  { name: 'Funke Olaniyi', phone: '08034567892', email: 'funke.olaniyi@example.com', state: 'Ondo', img: 'https://pbs.twimg.com/profile_images/1721537728171446272/JnFxj0F5_400x400.jpg' },
  { name: 'Chika Anyanwu', phone: '08045678903', email: 'chika.anyanwu@example.com', state: 'Osun', img: 'https://pbs.twimg.com/profile_images/1721537728171446272/JnFxj0F5_400x400.jpg' },
  { name: 'Tolu Abiola', phone: '08056789014', email: 'tolu.abiola@example.com', state: 'Oyo', img: 'https://pbs.twimg.com/profile_images/1721537728171446272/JnFxj0F5_400x400.jpg' },
  { name: 'Niyi Agbaje', phone: '08067890125', email: 'niyi.agbaje@example.com', state: 'Plateau', img: 'https://pbs.twimg.com/profile_images/1721537728171446272/JnFxj0F5_400x400.jpg' },
  { name: 'Chizoba Ndukwe', phone: '08078901236', email: 'chizoba.ndukwe@example.com', state: 'Rivers', img: 'https://pbs.twimg.com/profile_images/1721537728171446272/JnFxj0F5_400x400.jpg' },
  { name: 'Emmanuella Okafor', phone: '08089012347', email: 'emmanuella.okafor@example.com', state: 'Sokoto', img: 'https://pbs.twimg.com/profile_images/1721537728171446272/JnFxj0F5_400x400.jpg' },
  { name: 'Ibrahim Abdul', phone: '08090123458', email: 'ibrahim.abdul@example.com', state: 'Taraba', img: 'https://pbs.twimg.com/profile_images/1721537728171446272/JnFxj0F5_400x400.jpg' },
  { name: 'Sarah Musa', phone: '08001234569', email: 'sarah.musa@example.com', state: 'Yobe', img: 'https://pbs.twimg.com/profile_images/1721537728171446272/JnFxj0F5_400x400.jpg' },
  { name: 'Emeka Okwudili', phone: '08012345681', email: 'emeka.okwudili@example.com', state: 'Zamfara', img: 'https://pbs.twimg.com/profile_images/1721537728171446272/JnFxj0F5_400x400.jpg' },
];

function CommunityManagerSlider() {
  return (
    <div className="overflow-hidden max-w-6xl mx-auto bg-gray-100 py-10">
      <h2 className="text-2xl font-bold text-center text-green-600 mb-4">Community Managers</h2>
      <div className="flex animate-slide space-x-6">
        {communityManagers.concat(communityManagers).map((manager, index) => (
          <div key={index} className="flex-shrink-0 w-48 h-64 p-4 bg-white rounded-lg shadow-lg">
            <img
              src={manager.img}
              alt={`${manager.name} avatar`}
              className="w-24 h-24 mx-auto rounded-full border-4 border-green-500"
            />
            <div className="text-center mt-3">
              <h3 className="text-md font-semibold text-gray-800">{manager.name}</h3>
              <p className="text-sm text-gray-500">{manager.state}</p>
              <p className="text-sm text-gray-600">{manager.phone}</p>
              <p className="text-sm text-gray-600 overflow-hidden">{manager.email}</p>
            </div>
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

export default CommunityManagerSlider;
