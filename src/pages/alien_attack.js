import React, { useState, useEffect } from 'react'

import {
  Display_alienAttack,
  displayNone,
  AlienBox,
  message_box_opacity100,
  message_box_opacity0,
  Alien_attack_Title,
  PvAlien,
  GameOver
} from '../styledComponent/alien_attack_style'
import { DisplayForGsm } from '../styledComponent/soldier.style'
import { damagedAlien } from '../actions/alien_attack_action'
import { damagedSoldier } from '../actions/soldier_action'
import { useSelector, useDispatch } from 'react-redux'
import { EVENT } from '../actions/step_action'
import { refreshSoldierAndAlien } from '../actions/soldier_action'
import { damageBase } from '../actions/baseHp_action'
import SoldierList from './soldierList'

import Battle_animation from './battle_animation'

import Event from './event'

const Alien_attack = () => {
  const dispatch = useDispatch()
  const step_days = useSelector((state) => state.step)

  const soldierList = useSelector((state) => state.soldierList)
  const aliens_soldier = useSelector((state) => state.aliens_soldier)
  const baseHp = useSelector((state) => state.base_pv)


  const [loading, set_loading] = useState(true)
  const [box_message_style, set_box_message_style] = useState(message_box_opacity0)
  const [box_message2_style, set_box_message2_style] = useState(message_box_opacity0)
  const [message_sequence, set_message_sequence] = useState()
  const [game_over , set_game_over]=useState("none")
  
  let round 
  let end 
  let listSoldatAlive = []

  let listDebugSoldier = []

  let listDebugAlien = []
  let whoAtk
  let whoVictime
 
  let choiceS_a
  let choiceA_a

  let choiceS_b
  let choiceA_b
  let result
  let id = 0

  const choiceOfAlienAttack = () =>{
    whoAtk = []
    for (let i = 0; i < aliens_soldier.length; i++) {
      if(aliens_soldier[i].Alien.pv > 0){whoAtk.push(aliens_soldier[i].Alien.atk)}
    }
    return aliens_soldier[Math.floor(Math.random()*whoAtk.length)].Alien.atk //return random alien alive atk 
  }  
  
  const choiceVictimSoldier = () =>{
    whoVictime = []
    for (let i = 0; i < soldierList.length; i++) {
      if(soldierList[i].soldier.stat.pv > 0){whoVictime.push(soldierList[i].soldier.ids)}
    }
    
    return whoVictime[Math.floor(Math.random() * whoVictime.length)]  //return random soldier alive ids
  }

  const choiceOfSoldierAttack = () =>{
    whoAtk = []
    for (let i = 0; i < soldierList.length; i++) {
      if(soldierList[i].soldier.stat.pv > 0){whoAtk.push(soldierList[i].soldier.stat.atk)}
    }
    return soldierList[Math.floor(Math.random()*whoAtk.length)].soldier.stat.atk //return random Soldier alive atk 
  }  
  const choiceVictimAlien = () =>{
    whoVictime = []
    for (let i = 0; i < aliens_soldier.length; i++) {
      if(aliens_soldier[i].Alien.pv > 0){whoVictime.push(aliens_soldier[i].Alien.ids)}
    }
    
    return whoVictime[Math.floor(Math.random() * whoVictime.length)]  //return random Alien alive ids
    }

    const clearRedux = () =>{

      listSoldatAlive = []
          
      for (let i = 0; i < soldierList.length; i++) {
        if(soldierList[i].soldier.stat.pv > 0 ){
          soldierList[i].soldier.dayAlive += 1  // DAY ALIVE +1
          listSoldatAlive.push(soldierList[i])
        }   
      }
  
      dispatch(refreshSoldierAndAlien(listSoldatAlive,listSoldatAlive.length)) 
    }

  const battle = () =>{
    setTimeout(() => {
      set_box_message_style(message_box_opacity100)
      set_box_message2_style(message_box_opacity100)
      set_message_sequence('The aliens attack !!!')
      setTimeout(() => {setTimeout(() => { set_box_message2_style(message_box_opacity0)}, 0) // "The aliens attack !!!" opacity -> 0

        for (let i = 0; i < soldierList.length; i++) {
          listDebugSoldier.push(soldierList[i].soldier.name)

        }

        for (let i = 0; i < aliens_soldier.length; i++) {
          listDebugAlien.push(aliens_soldier[i].Alien.name)
        }
 
        set_loading(false)

        setTimeout(() => {
          round = false
          end = false

          const timer = setInterval(() => { /////////////STAR BAAAAAAAAAAAAAAAAAATTLE ///////////////


            if(round === false){     //  : ALIEN atk SOLDIER

                  choiceS_a = choiceVictimSoldier()
                  choiceA_a = choiceOfAlienAttack()
                  for (let i = 0; i < soldierList.length; i++) {
                    if(soldierList[i].soldier.ids === choiceS_a){
                      result = soldierList[i].soldier.stat.pv -= choiceA_a
                      if(result > 0){
                        dispatch(damagedSoldier([i],result))
                      }
                      if(result <= 0){
                        dispatch(damagedSoldier([i],0))
                        listDebugSoldier.splice(0,1)
                      }

                    }                                
                }

                  if(listDebugSoldier.length === 0 ){ // Si tout les soldats sont mort
                    if(baseHp.value - choiceA_a <= 0){
                    dispatch(damageBase(baseHp.value))
                    end = true                    
                    }else{
                      dispatch(damageBase(choiceA_a))
                    }
                  }else{

                  }   
                                         
              }

              if(round === true){//  : SOLDIER atk ALIEN
              console.log('round:', round)
                 


                choiceS_b = choiceVictimAlien()
                choiceA_b = choiceOfSoldierAttack()
  
               for (let i = 0; i < aliens_soldier.length; i++) {
  
                 if(aliens_soldier[i].Alien.ids === choiceS_b){
                    let resultSOLDIER = aliens_soldier[i].Alien.pv -= choiceA_b
                   if(resultSOLDIER > 0){dispatch(damagedAlien([i],resultSOLDIER))}
                   else{
                     dispatch(damagedAlien([i],0))
                     listDebugAlien.splice(0,1)
                                          
                   }
                 }                      
               }
               
             }

                           
                if(round === true){round = false}else{round = true}
                if((listDebugSoldier.length === 0 || listDebugAlien.length === 0) && end === false){
                  //  WIN => NEXT STEP
                  //  |   |   |   |   |
                  //  V   V   V   V   V
              clearInterval(timer)
              
              if(listDebugSoldier.length === 0){
                console.log("Vous n'avez plus de soldat");
              }
              
              setTimeout(() => {
                setTimeout(() => {
         
                  clearRedux()
                }, 2000);
                dispatch(EVENT())
                set_box_message_style(displayNone)
              }, 3500);
            }
            
            if(end === true){
              clearInterval(timer)
              console.log("GAME OVER");
              set_game_over("block")
            }

        
          }, 300)
        }, 500)
      }, 1000)
    }, 1000)
  }

  useEffect(() => {
    
    if (step_days === 'NIGHT') {
      battle()
      listDebugSoldier = []
      listDebugAlien = []
      set_loading(true)  
    }
  }, [step_days])



  return (
    <>
      <div style={box_message_style}></div>
      <Display_alienAttack >
        <Alien_attack_Title>
          <div style={box_message2_style}>{message_sequence}</div>
        </Alien_attack_Title>
        <Event />

        <div style={box_message_style}>
          {!loading ? (
            <>
              <AlienBox>
                {aliens_soldier.map((data) => (
                  <div key={id++}>
                    <div>{data.Alien.name}</div>
                    <PvAlien>
                      <div style={{width:` ${(100/data.Alien.pvMax)*data.Alien.pv}%`}}></div>
                      <div>PV : {data.Alien.pv}</div>
                      
                      </PvAlien>
                    <div>Atk : {data.Alien.atk} </div>
                  </div>
                ))}
              </AlienBox>
             <Battle_animation/>        
            </>
          ) : null}
        </div>
      </Display_alienAttack>
      {step_days === "NIGHT" ? 
              <DisplayForGsm>
              {soldierList.map(data=>(
              <>
                  <div>
                    <div>
                      <div style={{width:` ${(100/data.soldier.stat.pvMax)*data.soldier.stat.pv}%`}}></div>
                      <div>PV : {data.soldier.stat.pv}  {data.soldier.name}  </div>
                    </div>
                    <div></div>
                  </div>
              </>))}
            </DisplayForGsm>
      : null}

        <GameOver style={{display : game_over }}><div>GAME OVER</div></GameOver>          
    </>
  )
}

export default Alien_attack