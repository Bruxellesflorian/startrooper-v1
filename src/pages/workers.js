import React , { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  add_gold_worker,
  add_iron_worker,
  ADD_GAS_WORKER,
  add_soldier,
} from '../actions/worker_action'
import { decrement_population } from '../actions/population_action'
import { Display_workers, Title_pop } from '../styledComponent/workers_Style'
import { createSoldier, create_name, avatar } from '../actions/soldier_action'
import HelpBox from './help_box'

const Workers = () => {
  const dispatch = useDispatch()

  const population = useSelector((state) => state.population)
  const soldier = useSelector((state) => state.soldier)
  const worker = useSelector((state) => state.worker)

  const [openOrClose, set_openOrClose]=useState(100)

  const [message_to_helpBox, set_message_to_helpBox]=useState({data : "", about : ""})

  const toggleDisplay = () =>{
    if(openOrClose === 100){
      set_openOrClose(0)
    }else{set_openOrClose(100)}
  }

  let reducer_list_andFunction = [
    { worker_reducer: worker.gold_worker, func: add_gold_worker , help : "+5 gold / day" },
    { worker_reducer: worker.iron_worker, func: add_iron_worker ,help : "+5 iron / day"},
    { worker_reducer: worker.GAS_worker, func: ADD_GAS_WORKER ,help : "+5 gas / day"},
    { worker_reducer: soldier, func: add_soldier , help: "+1 soldier"},
  ]

  const addWorker = (value, maxValue, dispatchFunc, title) => {
    let pos =  Math.floor(Math.random()*85)

    if (population.value > 0 && value < maxValue) {
      dispatch(decrement_population())
      dispatch(dispatchFunc())
      if (title === 'Soldier') {
        dispatch(createSoldier(create_name(),{ pv: 10, pvMax: 10, atk: 5}, avatar(),pos ))
      }
    }
  }



let id = 0
  return (
    <>
      <HelpBox message = {message_to_helpBox}/>
      <Title_pop onClick={()=>toggleDisplay()}>
        <div>Population{" "} </div>
        <div>{population.value}/{population.maxValue}</div>
      </Title_pop>

      
      <Display_workers style={{height : `${openOrClose}px` ,overflow : "hidden" }}>
        {reducer_list_andFunction.map((data) => (
          
            <div key={id++}> 
              <div>{data.worker_reducer.name}</div>
              <div>{data.worker_reducer.value} </div>
              <div>|</div>
              <div>{data.worker_reducer.maxValue}</div>
              <div></div>
              <div>
                <button 
                onMouseEnter={()=>set_message_to_helpBox({data : data.help, about: "workers"})}
                onMouseLeave={()=>set_message_to_helpBox({data : "", about: ""})}
                  onClick={() =>
                    addWorker(
                      data.worker_reducer.value,
                      data.worker_reducer.maxValue,
                      data.func,
                      data.worker_reducer.name
                    )
                  }
                >
                  +
                </button>
              </div>
            </div>
         
        ))}
      </Display_workers>
    </>
  )
}

export default Workers
