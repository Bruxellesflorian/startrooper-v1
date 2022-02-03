import React from 'react'
import { useSelector } from 'react-redux'
import { Display_help } from '../styledComponent/helpBox_style'

const HelpBox = ({ message }) => {
  const soldier = useSelector((state) => state.soldier)
  const population = useSelector((state) => state.population)
  const worker = useSelector((state) => state.worker)
  const workers_ressource_days = useSelector(
    (state) => state.workers_ressource_days
  )
  return (
    <>
      {message.data === '' ? null : (
        <>
          <Display_help>
            <div style={{color : "green"}}>{message.data}</div>
            {message.about === 'workers' ? (
              <>
                <div>Gold {workers_ressource_days.gold} / day </div>
                <div>Iron {workers_ressource_days.iron} / day</div>
                <div>Gas {workers_ressource_days.GAS} / day</div>
              </>
            ) : null}
            {message.about === 'building' ? (
              <>
                <div>Population {population.maxValue} max<br></br></div>
                <div>Population + {workers_ressource_days.pop} / day</div>
                <div>Gold worker {worker.gold_worker.maxValue} max</div>
                <div>Iron worker {worker.iron_worker.maxValue} max</div>
                <div>Gas worker {worker.GAS_worker.maxValue} max</div>
                <div>Soldier {soldier.maxValue} max</div>
              </>
            ) : null}
          </Display_help>
        </>
      )}
    </>
  )
}

export default HelpBox
