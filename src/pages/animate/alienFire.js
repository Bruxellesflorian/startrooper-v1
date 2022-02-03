import React from "react";
import { SpriteAnimator } from 'react-sprite-animator'
import AtkAlien from 'react-responsive-spritesheet'

const AlienFire = () =>{
    return(
        <>
                  {/* <SpriteAnimator
                    sprite="image/alien/alien_ATK/alienATK.png"
                    width={79}
                    height={48}
                    fps={9}
                    startFrame={Math.floor(Math.random() * 3)}
                  /> */}
                                    <AtkAlien
                    style={{ height: '100px', width: '120px' }}
                    className={`my-element__class--style`}
                    image={`image/alien/alien_ATK/alienATK.png`}
                    widthFrame={79}
                    heightFrame={48}
                    steps={6}
                    fps={9}
                    autoplay={true}
                    loop={true}
                    startAt={Math.floor(Math.random() * 6)}
                  />
        </>
    )
}

export default AlienFire