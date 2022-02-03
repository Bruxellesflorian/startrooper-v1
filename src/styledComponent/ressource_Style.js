import styled from 'styled-components'

export const Display_ressource = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-around;

  @media (max-width: 968px) {
    flex-direction: column;
    /* background-color: blue; */
    margin: 2%;
  }

  > div:nth-child(1) {
    font-size: 30px;
    width: 110%;
    padding: 5px;
    @media (max-width: 968px) {
      width: 100%;
      text-align: center;
    }
  }
  > div:nth-child(2) {
    width: 100%;

    display: flex;
    justify-content: center;

    > div {
      flex-direction: column;
      margin: 5px;
      text-align: center;
    }
  }
  > div:nth-child(3) {
    > div:nth-child(1) {
      > div {
        margin-left: 10px;
      }

      display: flex;
    }
    @media (max-width: 968px) {
      flex-direction: column;
      > div:nth-child(3) {
        background-color: red;
        width: 50%;
        margin: 0 auto;
      }
    }
    width: 100%;
    display: flex;
    justify-content: center;

    > div {
      margin: 0 auto;
      text-align: center;
    }
    > div:nth-child(2) {
      background-color: #ff340131;
      color: white;
      font-size: 13px;
      width: 50%;
      height: 19px;
      position: relative;
      transition: 0.5s;
      > div:nth-child(1) {
        height: 19px;
        background-color: green;
        position: absolute;
        top: 0;
        text-align: center;
        transition: 0.5s;
      }
      > div:nth-child(2) {
        width: 100%;
        height: 19px;
        position: absolute;
        top: 0;
        text-align: center;
        transition: 0.5s;
      }
    }
  }
  > div:nth-child(4) {
    z-index: 200;
    @media (max-width: 968px) {
      position: absolute;
      top: 1%;
      right: 0;
    }

    padding-right: 10px;
    font-size: 30px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    cursor: pointer;
    > div {
      text-align: center;
      display: flex;
      animation-name: spin;
      animation-duration: 4000ms;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
      :hover {
        color: red;
      }
    }
    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }
`

export const Gold_title = styled.div`
  color: gold;
`
export const Iron_title = styled.div`
  color: rgb(168, 168, 168);
`

export const Gas_title = styled.div`
  color: yellowgreen;
`
