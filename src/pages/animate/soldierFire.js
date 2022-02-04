import React from 'react'
import FireSoldierAnimate from 'react-responsive-spritesheet'
import fireSoldierSprite from '../../sprites/spriteBattle/battleSoldier/soldierFire.png'

const FireSoldier = () => {
  return (
    <>

      <FireSoldierAnimate
        style={{ height: '40px', width: '80px' }}
        className={`my-element__class--style`}
        image={fireSoldierSprite}
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
