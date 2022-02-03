import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import AvatarAnimate from './animate/avatar'
import { ImCross} from "react-icons/im";


const Display = styled.div`
  width: 100%;
  transition: 0.5s;
  position: absolute;
  top: 50px;

  /* background-color: red; */
  z-index: 100;
  > div {
    position: relative;
    text-align: center;
    backdrop-filter: blur(10px);
    border: solid white 1px;
    background-color: #bd79d81f;

    width: 250px;
    margin: 0 auto;
    padding: 50px;
    > div:nth-child(1) {
      display: flex;
      justify-content: center;
    }
    button {
      position: absolute;
      top: 0;
      right: 0;
      cursor: pointer;
    }
    @media (max-width: 392px) {
    width: fit-content;

  }
  }
`

const Detail_soldier = (props) => {
  const [soldier_unit, set_soldier_unit] = useState()
  const [loading, set_loading] = useState(true)

  useEffect(() => {
    if (props.detail.push_soldier_detail !== undefined) {
      set_soldier_unit(props.detail.push_soldier_detail)
      set_loading(false)
    }
  }, [props])

  return (
    <Display style={{ height: `${props.display}px`, overflow: 'hidden' }}>
      {!loading ? (
        <>
          <div>
            <div>
              <AvatarAnimate avatar={soldier_unit.soldier.avatar} />
            </div>
            <button onClick={() => props.setDisplay(0)}><ImCross/></button>
            <div>Name : {soldier_unit.soldier.name}</div>
            <div>Day alive : {soldier_unit.soldier.dayAlive}</div>
            <div>HP : {soldier_unit.soldier.stat.pv}/{soldier_unit.soldier.stat.pvMax}</div>
            <div>ATK : {soldier_unit.soldier.stat.atk}</div>
          </div>
        </>
      ) : null}
    </Display>
  )
}

export default Detail_soldier
