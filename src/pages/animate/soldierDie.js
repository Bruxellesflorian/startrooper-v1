import React from "react";
import DeadOfSoldier from 'react-responsive-spritesheet'
import soldierDieSprite from '../../sprites/spriteBattle/deadSoldier/deadSoldier.png'

const SoldierDie = () =>{
    return(
        <>
               
                <DeadOfSoldier
                  style={{ height: '50px', width: '90px' }}
                  className={`my-element__class--style`}
                  image={soldierDieSprite}
                  widthFrame={61}
                  heightFrame={732}
                  steps={12}
                  fps={9}
                  autoplay={true}
                  loop={false}
                />

        </>
    )
}

export default SoldierDie