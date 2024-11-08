import React from 'react';
import PeerGroupEngagement from '../component/PeerGroup';

function PeerGroup() {
  return (
    <div className="p-8 text-center">
      <h2 className="text-green-600 text-2xl font-bold mb-4">Peer Group Page</h2>
      <p>Connect with other learners at your skill level in peer groups for collaborative learning.</p>
      <PeerGroupEngagement/>
    </div>
  );
}

export default PeerGroup;
