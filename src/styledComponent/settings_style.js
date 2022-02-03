import styled from 'styled-components'

export const Display_settings = styled.div`
    backdrop-filter: blur(3px);


  select {
    border: none;
    color: grey;
    background: none;
    font-size: 20px;
    text-align: center;
  }
  position: absolute;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  right: 5%;
  top: 5%;
  z-index: 1000;

  > div {
    // box settings
    margin: 0 auto;
    width: 100%;
    padding-bottom: 20px;
    border: inset 5px white;
    > div {
      width: 80%;
      margin: 0 auto;
    }
  }
  h2 {
    text-align: center;
  }
`
export const List_font = styled.div`
  padding-left: 20px;
  > div {
    transition: 0.2s;
    :hover {
      background: red;
      cursor: pointer;
      padding: 3px;
    }
  }
`
