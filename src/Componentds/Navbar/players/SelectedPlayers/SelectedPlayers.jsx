import React from 'react';
import { FaUser } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

const SelectedPlayers = ({ selectedPlayers ,setSelectedPlayers,setCoin,coin}) => {
  console.log(selectedPlayers);

  const handleDeleteSelectedPlayer = (player) => {
    console.log('player', player);
    const filteredPlayers = selectedPlayers.filter(
      (selectedPlayer) => selectedPlayer.name != player.name
    );
    console.log(filteredPlayers);
    setSelectedPlayers(filteredPlayers);
    setCoin(coin + player.price);
  }
  return (
    <div>
      <div className='space-y-5'>
        {
          selectedPlayers.length === 0 ? <div className='h-[400px] flex items-center justify-center flex-col gap-4 '>
            <h2 className='font-bold text-2xl'>No players selected yet</h2>
            <p>Go to Available tab to select players</p>
          </div>:
        selectedPlayers.map((player) => {
          return <div key={player.id} className='flex items-center gap-6 justify-between rounded-2xl p-10'>

            <div className='flex items-center gap-6'>
              <img src={player.img} alt="" className='h-[100px] w-auto rounded-md'/>
              <div>
                <h2 className='flex items-center gap-2 font-bold text-2xl'><FaUser></FaUser>{player.name}</h2>
                <p>{player.type }</p>
              </div>
            </div>
            <button onClick={()=>handleDeleteSelectedPlayer(player)} className='text-red-500'>
              <MdDelete size={40}></MdDelete>
            </button>
          </div>
        })
     }
      </div>
    </div>
  );
};

export default SelectedPlayers;