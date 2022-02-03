import styled from 'styled-components'

export const Title = styled.div`
text-align: center;
width: 100%;
padding: 5px 0 5px 0;

cursor: pointer;
  :hover{
    background: red;
  }

`

export const Display_recruit = styled.div`

  button{
    background: none;
    color: white;
    border: none;
    cursor: pointer;
    font-weight: bolder;
    font-size: 20px;
  }
  width: fit-content;
  > div {
    display: flex;
    > div:nth-child(1) {//   title
      text-align: center;
      width: 160px;
    }
    > div:nth-child(2) {//   gold
      width: 50px;
      color: gold;
      text-align: center;

    }
    > div:nth-child(3) {//   iron
      width: 50px;
      color: rgb(168, 168, 168);
      text-align: center;

    }
    > div:nth-child(4) {//    GAS
      width: 60px;
      color: yellowgreen;
      text-align: center;

    }
    > div:nth-child(5) {//   Button
      width: 50px;
      
    }

    @media (max-width: 392px) {
      > div:nth-child(1) {
      //   title
      text-align: center;
      width: 160px;
    }
    > div:nth-child(2) {
      //   gold
      width: 30px;
      color: white;
      text-align: center;
    }
    > div:nth-child(3) {
      //   iron
      width: 50px;
      color: rgb(168, 168, 168);
      text-align: center;
    }
    > div:nth-child(4) {
      //    GAS
      width: 40px;
      color: red;
      text-align: center;
    }
    > div:nth-child(5) {
      //   Button
      width: 30px;
    }
    }
  }
`
