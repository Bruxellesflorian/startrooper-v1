import React from 'react'

import AvatarAnimateSprite from 'react-responsive-spritesheet'

const AvatarAnimate = (avatar) => {

  return (
    <>
      <AvatarAnimateSprite
        style={{ height: '50px', width: '90px' }}
        className={`my-element__class--style`}
        image={`image/soldierSprite/${avatar.avatar}`}
        widthFrame={64}
        heightFrame={60}
        steps={55}
        fps={11}
        autoplay={true}
        loop={true}
        startAt={Math.floor(Math.random() * 15)}
      />   
    </>
  )
}

export default AvatarAnimate
