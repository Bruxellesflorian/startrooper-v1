import React ,{ useState }from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Display_recruit , Title } from '../styledComponent/recruit_Style'
import { buy_civil_action, buy_soldier_action } from '../actions/recruit_action'
import { increment_population } from '../actions/population_action'
import { add_soldier } from '../actions/worker_action'
import { createSoldier, create_name, avatar } from '../actions/soldier_action'
import HelpBox from './help_box'


const Recruit = () => {
  const population = useSelector((state) => state.population)
  const soldier = useSelector((state) => state.soldier)
  const ressource = useSelector((state) => state.ressource)
  const [message_to_helpBox, set_message_to_helpBox]=useState({data : "", about : ""})
  const [openOrClose, set_openOrClose]=useState(50)


  const dispatch = useDispatch()

  const buy_civil = () => {
    if (
      population.value !== population.maxValue &&
      list_recruit[0].gold <= ressource.gold
    ) {
      dispatch(buy_civil_action())
      dispatch(increment_population())
    }
  }

  const buy_soldier = () => {
    let pos =  Math.floor(Math.random()*85)

    if (
      soldier.value !== soldier.maxValue &&
      list_recruit[1].gold <= ressource.gold &&
      list_recruit[1].iron <= ressource.iron &&
      list_recruit[1].GAS <= ressource.GAS 
    ) {
      dispatch(add_soldier())
      dispatch(buy_soldier_action())
      dispatch(createSoldier(create_name(),{ pv: 10, pvMax: 10, atk: 5}, avatar(),pos ))
    }
  }

  const list_recruit = [
    { title: 'Buy civil', gold: 20, iron: 0, GAS: 0, func: buy_civil, help : "+1 population" },
    { title: 'Buy soldier', gold: 10, iron: 10, GAS: 5, func: buy_soldier,  help : "+1 soldier" },
  ]

  const toggleDisplay = () =>{
    if(openOrClose === 50){
      set_openOrClose(0)
    }else{set_openOrClose(50)}
  }
  let id = 0
  return (
    <>
  <HelpBox
  message = {message_to_helpBox}
  />
      <Title onClick={()=>toggleDisplay()}>Recruit</Title>
      <Display_recruit style={{height : `${openOrClose}px` ,overflow : "hidden" }}>
        {list_recruit.map((data) => (
          
            <div key={id++}>
              <div>{data.title}</div>
              <div>{data.gold}</div>
              <div>{data.iron}</div>
              <div>{data.GAS}</div>
              <div></div>
              <div>
                <button onClick={data.func}
                        onMouseEnter={()=>set_message_to_helpBox({data : data.help, about: ""})}
                        onMouseLeave={()=>set_message_to_helpBox({data : "", about: ""})}
                >+</button>
              </div>
            </div>
          
        ))}
      </Display_recruit>
    </>
  )
}

export default Recruit
