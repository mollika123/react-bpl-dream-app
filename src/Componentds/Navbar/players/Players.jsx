import React, { use, useState } from 'react';
import AvailablePlayers from './AvailablePlayers/AvailablePlayers.jsx';
import SelectedPlayers from './SelectedPlayers/SelectedPlayers.jsx';

const Players = ({ playerPromise ,setCoin,coin}) => {
  console.log(playerPromise);
  const players = use(playerPromise);
  console.log(players);

  const [selectedType, setSelectedType] = useState('available');
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  return (
    <div className='container mx-auto my-[30px]  pb-40 relative z-0'>
      <div className='flex items-center justify-between gap-4 mb-[30px]'>
        {
          selectedType==='available'? <h2 className='font-bold text-3xl'>Available Player</h2>: <h2 className='font-bold text-3xl'>Selected Players({selectedPlayers.length}/{players.length})</h2>
       }
        <div >
          <button
            onClick={()=>setSelectedType('available')}
            className={`btn ${selectedType === 'available' ? "bg-[#FEE502]" : ''} rounded-r-none rounded-l-xl`}>Available</button>
          <button
            onClick={() => setSelectedType('selected')}
            className={`btn ${selectedType === 'selected' ? 'bg-[#FEE502]' : ''} rounded-l-none rounded-r-xl`}>Selected({selectedPlayers.length})</button>
        </div>
</div>


     {selectedType==='available'? (<AvailablePlayers
        players={players} setCoin={setCoin} coin={coin} setSelectedPlayers={setSelectedPlayers} selectedPlayers={selectedPlayers}></AvailablePlayers>) : (
        <SelectedPlayers selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} setCoin={setCoin} coin={coin} ></SelectedPlayers>)}
    </div>
  );
};

export default Players;