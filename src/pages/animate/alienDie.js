import React from 'react'
import DeadOfAlien from 'react-responsive-spritesheet'
import alienDieSprite from '../../sprites/alien/alien_DEAD/alienDead.png'
const AlienDie = () => {
  return (
    <>
      <DeadOfAlien
        style={{ height: '100px', width: '120px',transform : "translateX(20px) translateY(-8px)"}}
        className={'my-element__class--style'}
        image={alienDieSprite}
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
