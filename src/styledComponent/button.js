import styled from 'styled-components'

export const Button = styled.div`
  background: rgb(0, 255, 179);
  text-align: center;
  border: none;
  width: 100%;
  
  cursor: pointer;
  height: fit-content;
  padding: 20px;
  margin: 0 auto;
  font-size: 30px;
  transition: 1s;
  color: white;
  &:hover{
  background: rgb(115, 255, 0);

  }
  @media (max-width: 476px) {
  padding: 5px;
    }
    @media (max-width: 320px) {
  padding: 5px;
  height: 80px;
    }
`

export const PosButton = styled.div`
  position: absolute;
  bottom: 10%;
  width: fit-content;
  display: flex;
  left: 50%;
  transform: translateX(-50%);
  @media (max-width: 968px) {
    transform: none;
    left: 50%;
    transform: translateX(-50%);
}



`
