import React from 'react'
import { SpriteAnimator } from 'react-sprite-animator'
import FireSoldierAnimate from 'react-responsive-spritesheet'

const FireSoldier = () => {
  return (
    <>
      {/* <SpriteAnimator 
                  sprite="image/spriteSoldierGif/battleSoldier/soldierFire.png"
                  width={49}
                  height={29}
                  fps={14}
                  startFrame={Math.floor(Math.random() * 3)}
 
                /> */}
      <FireSoldierAnimate
        style={{ height: '40px', width: '80px' }}
        className={`my-element__class--style`}
        image={`image/spriteSoldierGif/battleSoldier/soldierFire.png`}
        widthFrame={49}
        heightFrame={490}
        steps={10}
        fps={14}
        autoplay={true}
        loop={true}
        startAt={Math.floor(Math.random() * 10)}
      />
    </>
  )
}

export default FireSoldier
