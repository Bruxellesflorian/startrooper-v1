import './App.css'
import React, { useState, useEffect } from 'react'

import Ressource from './pages/ressource'
import Workers from './pages/workers'
import Recruit from './pages/recruit'
import Building from './pages/building'
import Alien_attack from './pages/alien_attack'
import Star_background from './pages/star_background'
import Footer from './pages/footer'
import SoldierList from './pages/soldierList'


import { useSelector, useDispatch } from 'react-redux'
import { Button, PosButton } from './styledComponent/button'
import { createAliens } from './actions/alien_attack_action'
import { changeFont } from './actions/settings_action'
import {
  day,
  night,
  display_block,
  display_none,
  All_center,
} from './styledComponent/app_style'
import { ScaleGsm } from './styledComponent/scale_gsm'
import { NIGHT } from './actions/step_action'
import { createSoldier, create_name, avatar } from './actions/soldier_action'

const App = () => {
  const dispatch = useDispatch()

  const step_days = useSelector((state) => state.step)
  const font = useSelector((state) => state.settings)
  const soldier = useSelector((state) => state.soldier)
  const aliens = useSelector((state) => state.aliens)
  const [ transitionSoldierOpacityDayToNight,set_transitionSoldierOpacityDayToNight] = useState('100%')
  const [daysDisplay, set_daysDisplay] = useState()
  const [initializeSoldier, set_initializeSoldier] = useState(true)

  let hpAlien

  const generateNumberOfAliens = () => {
    return Math.round(Math.random() * (aliens.number - 1) + 1)
  }
  const generatePvOfAliens = () => {
    return Math.round(Math.random() * (aliens.pv - 1) + 1)
  }
  const generateAtkOfAliens = () => {
    return Math.round(Math.random() * (aliens.atk - 1) + 1)
  }

  const alienAttackChangeStyle = () => {
    set_transitionSoldierOpacityDayToNight('0%')
    setTimeout(() => {
      set_transitionSoldierOpacityDayToNight('100%')
      set_daysDisplay(display_none)
      dispatch(NIGHT())
    }, 1000)

    for (let i = 0; i < generateNumberOfAliens(); i++) {
      hpAlien = generatePvOfAliens()
      dispatch(createAliens('Alien' + i,hpAlien, hpAlien,generateAtkOfAliens(),Math.floor(Math.random() * 65)))
    }
  }

  useEffect(() => {
    if (initializeSoldier === true) {
      // créer le nombre de soldat au début de la partie
      dispatch(changeFont('pixels3'))
      for (let i = 0; i < soldier.value; i++) {
        let pos = Math.floor(Math.random() * 85)
        dispatch(createSoldier(create_name(), { pv: 10, pvMax: 10, atk: 5 }, avatar(), pos))}
      set_initializeSoldier(false)
    }

    if (step_days === 'DAY') {
      set_daysDisplay(display_block)
      setTimeout(() => { set_transitionSoldierOpacityDayToNight('100%')}, 2000)
    } else {set_transitionSoldierOpacityDayToNight('0%') }
  }, [step_days])

  return (
    <>
      <div style={{ fontFamily: `${font}` }}>
        <Star_background />
        <div className="regroupAll">
          <Ressource />
          <div style={{ opacity: transitionSoldierOpacityDayToNight,transition: '2s', }}>
            <div style={daysDisplay}>
              <div style={step_days === 'DAY' ? day : night}>
                <All_center>
                  <Workers />
                  <Recruit />
                  <Building />
                </All_center>
              </div>
            </div>
          </div>

          {step_days !== "NIGHT" ? 
            <SoldierList/>
            :
            <ScaleGsm>
              <SoldierList/>
            </ScaleGsm>
          }

          <Alien_attack />

            <div style={{height : "100px", width : "100vw" }}></div>
          {step_days === 'DAY' ? <Footer /> : null}
        </div>

        <PosButton>
          <div>
            {step_days !== 'DAY' ? null : (
              <Button onClick={() => alienAttackChangeStyle()}>
                Spend one night
              </Button>
            )}
          </div>
        </PosButton>
      </div>
    </>
  )
}

export default App
