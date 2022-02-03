import styled from 'styled-components'

export const Display_alienAttack = styled.div`
  /* overflow: scroll; */
`
export const CrashTest = styled.div``

export const GameOver = styled.div`
  transition: 3s;
  position: absolute;
  top: 20%;
  width: 100%;
  height: 100vh;
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  >div{
    width: fit-content;
    margin: 0 auto;
    font-size: 40px;

  }
`

export const SoldierBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: fit-content;
  margin: 0 auto;
  > div {
    margin: 10px;
  }
`

export const AlienBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: fit-content;
  margin: 0 auto;
  z-index: 100;

  > div {
    margin: 10px;
  }
  @media (max-width: 476px) {
  font-size: 10px;
  }
`
export const PvAlien = styled.div`
  color: white;
  font-size: 13px;
  width: 100%;
  height: 13px;
  position: relative;
  transition: 0.5s;
  > div:nth-child(1) {
    height: 15px;
    background-color: red;
    position: absolute;
    top: 0;
    text-align: center;
    transition: 0.5s;
  }
  > div:nth-child(2) {
    width: 100%;
    height: 13px;
    position: absolute;
    top: 0;
    text-align: center;
    transition: 0.5s;
  }
  @media (max-width: 476px) {
  font-size: 10px;
  > div:nth-child(1) {
    height: 10px;
    background-color: red;
    position: absolute;
    top: 0;
    text-align: center;
    transition: 0.5s;
  }
  > div:nth-child(2) {
    width: 100%;
    height: 10px;
    position: absolute;
    top: 0;
    text-align: center;
    transition: 0.5s;
  }
  }
`

export const message_box_opacity100 = {
  opacity: '100%',
  transitionDuration: '3s',
}

export const message_box_opacity0 = {
  opacity: '0%',
  transitionDuration: '3s',
}

export const Alien_attack_Title = styled.div`
  width: fit-content;
  margin: 0 auto;
  font-size: 30px;
  height: 32px;
  display: flex;
  flex-direction: column;
  background-position: right;
`
export const displayNone = {
  display: 'none',
}

export const Battle_animate = styled.div`
  display: flex;
  position: absolute;
  bottom: 50%;
  width: 100%;
`

export const Player_side = styled.div`
  width: 40%;
  height: 100%;
  position: relative;
  z-index: 100;

`

export const Enemy_side = styled.div`
  width: 50%;
  height: 100%;
  position: relative;
`


