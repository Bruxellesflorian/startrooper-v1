import React from 'react'
import { SpriteAnimator } from 'react-sprite-animator'
import DeadOfAlien from 'react-responsive-spritesheet'

const AlienDie = () => {
  return (
    <>
      {/* <SpriteAnimator
                    sprite="image/alien/alien_DEAD/alienDead.png"
                    width={88}
                    height={60}
                    fps={11}
                    frame = {36}
                    stopLastFrame={true}
                  /> */}
      <DeadOfAlien
        style={{ height: '100px', width: '120px',transform : "translateX(20px) translateY(-8px)"  }}
        className={'my-element__class--style'}
        image={`image/alien/alien_DEAD/alienDead.png`}
        widthFrame={88}
        heightFrame={60}
        steps={36}
        fps={11}
        autoplay={true}
        loop={false}
      />
    </>
  )
}

export default AlienDie
