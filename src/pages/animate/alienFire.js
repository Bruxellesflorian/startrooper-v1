import React from 'react'
import AtkAlien from 'react-responsive-spritesheet'
import alienFireSprite from '../../sprites/alien/alien_ATK/alienATK.png'

const AlienFire = () => {
  return (
    <>
      <AtkAlien
        style={{ height: '100px', width: '120px' }}
        className={`my-element__class--style`}
        image={alienFireSprite}
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
