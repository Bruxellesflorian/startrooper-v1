import React from 'react'
import { useSelector } from 'react-redux'

import {
  Battle_animate,
  Player_side,
  Enemy_side,
} from '../styledComponent/alien_attack_style'

import FireSoldier from './animate/soldierFire'
import SoldierDie from './animate/soldierDie'
import AlienDie from './animate/alienDie'
import AlienFire from './animate/alienFire'

const Battle_animation = () => {
  const soldierList = useSelector((state) => state.soldierList)
  const aliens_soldier = useSelector((state) => state.aliens_soldier)

  let soldier_posY = 0
  let alien_posY = 0
  let id = 0

  return (
    <>
      <Battle_animate>
        <Player_side>
          {soldierList.map((data) => (
            <>
            <div key={id++} style={{ position: 'absolute',top: (soldier_posY += 5), left: `${data.soldier.pos}%`,}}>
              {data.soldier.stat.pv > 0 ? (
                <FireSoldier/>
              ) : (
                <SoldierDie/>
              )}
            </div>
            </>
          ))}
        </Player_side>

        <Enemy_side>
          {aliens_soldier.map((data) => (
            <div key={id++}style={{position: 'absolute',top: (alien_posY += 5),left: `${data.Alien.pos}%`,}}
            >
              {data.Alien.pv > 0 ? (
                <>
                    <AlienFire/>
                 </>
              ) : (
                <>
                    <AlienDie/>
                </>
              )}
            </div>
          ))}
        </Enemy_side>
      </Battle_animate>
    </>
  )
}

export default Battle_animation
