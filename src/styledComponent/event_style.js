import styled from 'styled-components'

export const Display_all_event = styled.div`
  @media (max-width: 735px) {
      div{
    font-size: 12px;
    padding: 1%;

}

  }

    position: absolute;
    top: 0;
    width: 100%;
    >div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100vh;
    }
`

export const Story_box = styled.div`
    width: fit-content;
    text-align: center;
    margin: 0 auto;
    font-size: 30px;

`
export const Question = styled.div`
    width: fit-content;
    margin: 0 auto;
    
`
export const Button = styled.div`

`
export const Question_button = styled.div`
  background: #505050;
  text-align: center;
  border: none;
  width: 90%;
  height: fit-content;
  padding: 20px;
  margin: 30px auto;
  font-size: 30px;
  transition: 1s;
  color: white;
  &:hover{
  background: rgb(115, 255, 0);

  }
`
export const Result_box = styled.div`
    width: 90%;
    font-size: 30px;
    margin: 0 auto;

    /* background-color: red; */
    >div{
        width: fit-content;
        margin: 0 auto;
    }
`

export const opacity100 = {
    opacity : "100%",
    transitionDuration: "2s"
}

export const opacity0 = {
    opacity : "0%",
    transitionDuration: "2s"
}

export const displayNone = {
    display : 'none'
}

export const displayBlock = {
    display : 'block'
}