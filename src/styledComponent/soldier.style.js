import styled from 'styled-components'

export const Display_soldier = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  transition: 2s;
`
export const Soldier_box = styled.div`
  margin: 5px auto;
  border: inset white 1px;
  padding: 5px;
  background: black;
  position: relative;
  transition: 0.2s;
  @media (max-width: 476px) {
    transform: scale(0.8);
    margin: 0 auto;
    padding: 0;
    height: 140px;
  }
  > div:nth-child(2) {
    /* background-color: red; */
    text-align: center;
    @media (max-width: 476px) {
      margin-top: 20px;
      padding: 0;
      width: 100%;
      font-size: 12px;
    }
  }
  :hover {
    background: #682222;
    cursor: pointer;
    padding: 10px;
  }
`

export const Avatar = styled.div`
  height: 80px;
  width: 80px;
  z-index: 10;
  background-position: center;
  background-size: contain;
`
export const Pv = styled.div`
  color: white;
  font-size: 13px;
  width: 100%;
  height: 13px;
  position: relative;
  transition: 0.5s;
  > div:nth-child(1) {
    height: 15px;
    background-color: green;
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
    transform: scale(0.8);
    padding: 0;
    width: 100%;
  }
`

export const Atk = styled.div`
  padding: 2px;
  font-size: 13px;
  height: 13px;
  text-align: center;
`

export const DisplayForGsm = styled.div`
  display: none;
  @media (max-width: 476px) {
    font-size: 10px;
    display: block;
    position: absolute;
    bottom: 0;
    width: 100%;
    text-shadow: none;
    z-index: 0;
    > div {
      display: flex;
      width: 40%;
      height: 13px;
      position: relative;
      margin-top: 5px;

      > div:nth-child(1) {
        position: relative;
        width: 100%;
        > div:nth-child(1) {
          height: 15px;
          background-color: green;
          position: absolute;
          top: 0;
          transition: 0.5s;
          width: 50px;
        }
        > div:nth-child(2) {
          width: 100%;
          height: 13px;
          position: absolute;
          top: 0;
          transition: 0.5s;
        }
      }
    }
  }
`
