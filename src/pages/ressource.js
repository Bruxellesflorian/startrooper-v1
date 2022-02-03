import React, { useState , useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { IoSettings } from 'react-icons/io5'
import SettingsGame from './settings'
import {
  Display_ressource,
  Gold_title,
  Iron_title,
  Gas_title,
} from '../styledComponent/ressource_Style'

const Ressource = () => {
  const gold = useSelector((state) => state.ressource.gold)
  const GAS = useSelector((state) => state.ressource.GAS)
  const iron = useSelector((state) => state.ressource.iron)
  const soldier = useSelector((state) => state.soldier.value)
  const days = useSelector((state) => state.days)
  const baseHp = useSelector((state) => state.base_pv)
  const step_days = useSelector((state) => state.step)

  const [display_settings, set_display_settings] = useState('none')

  const handeDisplaySettings = () => {
    if (display_settings === 'none') {
      set_display_settings('block')
    } else {
      set_display_settings('none')
    }
  }

  useEffect(() => {
    

  }, [step_days])

  return (
    <>
    {step_days !== "EVENT" ? 
    <>
    <SettingsGame displayStyle={display_settings} />
    <Display_ressource>
      <div className="TitleSTARTROOPER">StarTrooper</div>

      <div>
        <Gold_title>
          <div>GOLD</div>
          <div>{gold}</div>
        </Gold_title>

        <Iron_title>
          <div>IRON</div>
          <div>{iron}</div>
        </Iron_title>

        <Gas_title>
          <div>GAS</div>
          <div>{GAS}</div>
        </Gas_title>
      </div>
      {/* __________________________________________ */}
      <div>
        <div>
        <div>
          <div>SOLDIER</div>
          <div>{soldier}</div>
        </div>
        <div>
          <div>DAYS</div>
          <div>{days}</div>
        </div>
        </div>

        <div>
          <div style={{ width: `${(100 / baseHp.maxValue) * baseHp.value}%` }}/>
          <div>Base HP : {baseHp.value}</div>
        </div>
      </div>
      <div>
        <div onClick={() => handeDisplaySettings()}>
          <IoSettings />
        </div>
      </div>
    </Display_ressource>
  </> : null}
   </>
  )
}

export default Ressource
