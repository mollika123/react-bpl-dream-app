import React, { useState } from 'react';
import { CiFlag1 } from 'react-icons/ci';
import { FaUser } from "react-icons/fa";
import { toast } from 'react-toastify';

const Card = ({ player ,setCoin,coin,setSelectedPlayers,selectedPlayers}) => {
  console.log(player);
  const [isSelected, setIsSelected] = useState(false);

  const handleChoosePlayer = () => {
      let newCoin = coin - player.price;
    if (newCoin >= 0) {
      setCoin(coin - player.price);
      
    } else {
      toast.warn("Not enough coin to purchase this player");
      return;
    }
    toast.success(`${player.name} is selected`  );
    setIsSelected(true);
    setSelectedPlayers([...selectedPlayers,player])

  
            }
  return (
       <div className="card bg-base-100 w-full shadow-sm">
     <figure>
       <img
          src={player?.img} alt='player.name'  />
     </figure>
     <div className="card-body">
             <h2 className="card-title"><FaUser />
               {player.name}</h2>
             <div className='flex justify-between items-center'>
              <div className='flex gap-2 items-center'><CiFlag1></CiFlag1>
                 <p>{player.country}</p>
               </div>
               <button className='btn btn-ghost'>{player.type}</button>
                
             </div>
   
             <div className="divider"></div>
             
                 <h2 className='font-bold'>Rating:{ player.rating}</h2>
   
             <div className='flex justify-between items-center w-full flex-1'>
               <p className='font-bold'>{player.battingStyle}</p>
               <h4 className=''>{player.bowlingStyle}</h4>
             </div>
   
       
             <div className="card-actions justify-between">
               <p className='font-bold'>{player.price}</p>
          <button
            onClick={handleChoosePlayer} disabled={isSelected ? true : false}
            className="btn">{isSelected === true ? 'Selected' : 'Choose Player'}</button>
       </div>
     </div>
   </div>
  );
};

export default Card;