import React from 'react'
import EventImage from 'react-responsive-spritesheet'
import styled from 'styled-components'

const EventAnimate = (imgEvent) => {

  const BoxEvent = styled.div`
    border: inset white 3px;
    width: fit-content;
    margin: 0 auto;
    position: relative;
  `

  return (
    <BoxEvent>
      <EventImage
        style={{ height: '200px', width: '200px' }}
        className={`my-element__class--style`}
        image={`${imgEvent.imgEvent}`}
        widthFrame={100}
        heightFrame={100}
        steps={40}
        fps={9}
        autoplay={true}
        loop={false}
      />
    </BoxEvent>
  )
}

export default EventAnimate
