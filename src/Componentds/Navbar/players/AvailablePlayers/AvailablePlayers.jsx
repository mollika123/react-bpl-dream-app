import React from 'react';

import { GiCarDoor } from 'react-icons/gi';
import Card from '../../../ui/Card';




const AvailablePlayers = ({ players ,setCoin,coin,setSelectedPlayers,selectedPlayers}) => {

  return (
    <div className='container mx-auto'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5 '>
        {
        players.map(player => {
          console.log(player);
          return (
           <Card key={player.id} player={player} setCoin={setCoin} coin={coin} setSelectedPlayers={setSelectedPlayers} selectedPlayers={selectedPlayers}></Card>
          )
     
        })
        }
      </div>
    
    </div>
  );
};

export default AvailablePlayers;