import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Display_building , Title} from '../styledComponent/building_Style'
import HelpBox from './help_box';

import {
  buy_house_action,
  buy_goldFarm_action,
  buy_ironFarm_action,
  buy_GASFarm_action,
  buy_soldierFarm_action,
} from '../actions/building_action'

const Building = () => {
  const house = useSelector((state) => state.house)
  const gold_farm = useSelector((state) => state.gold_farm)
  const iron_farm = useSelector((state) => state.iron_farm)
  const GAS_farm = useSelector((state) => state.GAS_farm)
  const soldier_farm = useSelector((state) => state.soldier_farm)
  const ressource = useSelector((state) => state.ressource)
  const [message_to_helpBox, set_message_to_helpBox]=useState({data : "", about : ""})
  const [openOrClose, set_openOrClose]=useState(150)

  const dispatch = useDispatch()

  const list_building = [
    { building_reducer: house, func: buy_house_action , help : "+5 population limit  population +1 / day"},
    { building_reducer: gold_farm, func: buy_goldFarm_action, help : "+5 Gold workers limit" },
    { building_reducer: iron_farm, func: buy_ironFarm_action , help : "+5 Iron workers limit"},
    { building_reducer: GAS_farm, func: buy_GASFarm_action , help : "+5 Gas workers limit"},
    { building_reducer: soldier_farm, func: buy_soldierFarm_action , help : "+10 soldier limit max"},
  ]

  const buy_farm = (list_building_func, gold, iron, GAS) => {
    if (ressource.gold >= gold && ressource.iron >= iron && ressource.GAS >= GAS) {
      dispatch(list_building_func())
    }
  }

  const toggleDisplay = () =>{
    if(openOrClose === 150){
      set_openOrClose(0)
    }else{set_openOrClose(150)}
  }

let id = 0
  return (
    <>
      <HelpBox
        message = {message_to_helpBox}
      />
      <Title onClick={()=>toggleDisplay()}>Building</Title>
      <Display_building style={{height : `${openOrClose}px` ,overflow : "hidden" }}>
        {list_building.map((data) => (
          <div key={id++}>
            <div>{data.building_reducer.name}</div>
            <div>{data.building_reducer.gold_price}</div>
            <div>{data.building_reducer.iron_price}</div>
            <div>{data.building_reducer.GAS_price}</div>
            <div>{data.building_reducer.amount}</div>
            <div>
              <button
                onMouseEnter={()=>set_message_to_helpBox({data : data.help, about: "building"})}
                onMouseLeave={()=>set_message_to_helpBox({data : "", about: ""})}
                onClick={() =>
                  buy_farm(
                    data.func,
                    data.building_reducer.gold_price,
                    data.building_reducer.iron_price,
                    data.building_reducer.GAS_price
                  )
                }
              >
                +
              </button>
            </div>
          </div>
        ))}
      </Display_building>
    </>
  )
}

export default Building
