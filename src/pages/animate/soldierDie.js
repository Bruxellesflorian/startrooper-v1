import React from "react";
import { SpriteAnimator } from 'react-sprite-animator'
import DeadOfSoldier from 'react-responsive-spritesheet'

const SoldierDie = () =>{
    return(
        <>
                {/* <SpriteAnimator 
                  sprite="image/spriteSoldierGif/deadSoldier/deadSoldier.png"
                  width={61}
                  height={31}
                  fps={9}
                  stopLastFrame={true}
                /> */}
                
                <DeadOfSoldier
                  style={{ height: '50px', width: '90px' }}
                  className={`my-element__class--style`}
                  image={`image/spriteSoldierGif/deadSoldier/deadSoldier.png`}
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