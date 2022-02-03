import styled from 'styled-components'

export const day = {
  height: 'fit-content',
  opacity: '100%',
  transitionDuration: '2s',
}

export const night = {
  height: '0vh',
  opacity: '0%',
  transitionDuration: '1s',
}

export const display_block = {
  display: 'block',
}

export const display_none = {
  display: 'none',
}

export const All_center = styled.div`
  margin: 0px auto;
  width: fit-content;

  > div {
    transition: 0.5s;
    > div {
      &:hover {
        background-color: rgba(54, 70, 105, 0.685);
      }
    }
  }
  @media (max-width: 392px) {
font-size: 12px;
  }
`

export const SoldierBox = styled.div`
  transition: 2s;

`
