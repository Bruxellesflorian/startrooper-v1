import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { list_event } from '../event/event_ENG'
import { DAY } from '../actions/step_action'
import { addModRessource , lowerModRessource , addDay} from '../actions/ressource_action'
import { addModGoldWorker, addModIronWorker, addModGASWorker, lowerModGoldWorker , lowerModIronWorker , lowerModGASWorker  } from '../actions/worker_action'
import { createSoldier, create_name, decrementSoldier, deleteSoldier, avatar ,damagedSoldier } from '../actions/soldier_action'
import EventAnimate from './animate/eventAnimate'
import { increment_population , decrement_population, increment_population_per_day } from '../actions/population_action'
import { upAliens } from '../actions/alien_attack_action'


import {
  Display_all_event,
  Story_box,
  Question_button,
  opacity100,
  opacity0,
  Result_box,
  Question,
} from '../styledComponent/event_style'

const Event = () => {
  const dispatch = useDispatch()

  const ressourceReducer = useSelector((state) => state.ressource)

  const [button_dis, set_button_dis] = useState(true)
  const [cursor, set_cursor] = useState("pointer")
  const [result, set_result] = useState()
  const [story_box, set_story_box] = useState(opacity0)
  const [question_box, set_question_box] = useState(opacity0)
  const [result_box, set_result_box] = useState(opacity0)
  
  const [quest_event, set_quest_event] = useState()
  const [loading, set_loading] = useState(true)

  const step_days = useSelector((state) => state.step)
  const ressource_per_day = useSelector((state) => state.workers_ressource_days)
  const population = useSelector((state) => state.population)
  const worker = useSelector((state) => state.worker)
  const soldierList = useSelector((state) => state.soldierList)

  let popMaxOrNot 

  let random_event
  let sentence = ''
  let list_ressource_reducer
  let list_worker_reducer
  let ressource
  let workerList 

  useEffect(() => {
    if (step_days === 'EVENT') {
      random_event = list_event[Math.floor(Math.random() * list_event.length)] // Choix de l'événement
      set_quest_event(random_event) // stock in var
      event() // start event
    }
  }, [step_days])

  const event = () => {
    set_loading(false)
    set_button_dis(true)
    setTimeout(() => {
      set_story_box(opacity100)
    }, 1000)
    setTimeout(() => {
      set_question_box(opacity100)
      set_cursor("pointer")
    }, 2000)

  }

  const add_ressource_per_day = () =>{
    if((population.value + ressource_per_day.pop)< population.maxValue ){
      popMaxOrNot = ressource_per_day.pop 
    }else{popMaxOrNot = 0}
    dispatch(addModRessource(ressource_per_day.gold,ressource_per_day.iron,ressource_per_day.GAS))
    dispatch(increment_population_per_day(popMaxOrNot))
  }

  const end_night = () =>{
    setTimeout(() => {
      add_ressource_per_day()
      set_question_box(opacity0)
      set_result_box(opacity0)
      dispatch(DAY())
      dispatch(addDay())
      dispatch(upAliens())
    }, 3000);

  }

  const pay_generator = () => {
    list_ressource_reducer = Object.values(ressourceReducer)
    list_worker_reducer = Object.values(worker)
    ressource = []
    workerList = []
    sentence = ""
    if (quest_event.payed === true) {sentence = 'Vous gagnez '} 
    else { sentence = 'Vous perdez '}



    if(quest_event.upatk !== undefined){                          // Gestion d'événement bonus d'attaque
      sentence += quest_event.upatk.value + ' ' + quest_event.upatk.name + '. '   // ajout de phrase de sentence 
      for (let i = 0; i < soldierList.length; i++) {
        let result = soldierList[i].soldier.stat.atk += quest_event.upatk.value
        dispatch(damagedSoldier([i],result))
      }
      
    }

    if(quest_event.heal !== undefined){                          // Gestion de l'événement Heal soldier
      sentence = "La santé de vos soldat est restauré"           // ajout de phrase de sentence
      for (let i = 0; i < soldierList.length; i++) {
        let result = soldierList[i].soldier.stat.pv = soldierList[i].soldier.stat.pvMax
        dispatch(damagedSoldier([i],result))
      }
    }



      for (let i = 0; i < quest_event.ressource.length; i++) { // Gestion des ressources de l'évenement
          if(quest_event.ressource[i].value > 0){ // ajout de phrase de sentence
              sentence += quest_event.ressource[i].value + ' ' + quest_event.ressource[i].name + ', '   
            }

            if(list_ressource_reducer[i] >= quest_event.ressource[i].value) { // vérifie les ressources pour ne pas être en négatif
              ressource.push(quest_event.ressource[i].value)            
            }else{if(quest_event.payed === true){ressource.push(quest_event.ressource[i].value)}
             else{if(quest_event.ressource[i].value >= list_ressource_reducer[i]){ressource.push(list_ressource_reducer[i])}}
            }

          }
      if (quest_event.payed === true) {dispatch(addModRessource(ressource[0],ressource[1],ressource[2]))}
      else{dispatch(lowerModRessource(ressource[0],ressource[1],ressource[2]))} 

           for (let i = 0; i < quest_event.workers.length; i++) { // Gestion des workers de l'évenement
              if(quest_event.workers[i].value > 0){ // ajout de phrase de sentence
              sentence += quest_event.workers[i].value + ' ' + quest_event.workers[i].name + ', '
            }
            if((list_worker_reducer[i].value >= quest_event.workers[i].value)){
              workerList.push(quest_event.workers[i].value)            
            }else{if(quest_event.payed === true){workerList.push(quest_event.workers[i].value)}
            else{if(quest_event.workers[i].value >= list_worker_reducer[i].value){workerList.push(list_worker_reducer[i].value)}}
           }
          } 

        if (quest_event.payed === true) {
          dispatch(addModGoldWorker(workerList[0]))
          dispatch(addModIronWorker(workerList[1]))
          dispatch(addModGASWorker(workerList[2]))
        }
        else{
          dispatch(lowerModGoldWorker(workerList[0]))
          dispatch(lowerModIronWorker(workerList[1]))
          dispatch(lowerModGASWorker(workerList[2]))} 
      

            if(quest_event.soldiers.value > 0){sentence += quest_event.soldiers.value + ' ' + quest_event.soldiers.name + ', '
                 if(quest_event.payed === true){                     // Gestion des soldiers de l'évenement
                    for(let i = 0; i < quest_event.soldiers.value; i++){
                      let pos =  Math.floor(Math.random()*85)
                      dispatch(createSoldier(create_name(),{ pv: 10, pvMax: 10, atk: 5}, avatar(),pos ))}  }
          

                    else{for (let i = 0; i < quest_event.soldiers.value; i++) {
                      dispatch(deleteSoldier(0))
                      dispatch(decrementSoldier()) }
                    }}
          
            if(quest_event.population.value > 0){                  // Gestion des Civils de l'évenement
              sentence += quest_event.population.value + ' ' + quest_event.population.name + ', ' // ajout de phrase de sentence             
              if(quest_event.payed === true){dispatch(increment_population())}
              else{for (let i = 0; i < quest_event.population.value; i++){
              if(population.value > 0){dispatch(decrement_population())}}}}

                setTimeout(() => {
                  set_result(sentence)
                  set_result_box(opacity100)
                  end_night()     // FIN DE LA NUIT
                }, 1500);
                
              }
              

  const handle_choice = (choice) => {
    if(button_dis === true ){

      set_cursor("not-allowed")
      set_result(choice.answer)
      set_story_box(opacity0)
      set_question_box(opacity0)
      setTimeout(() => {
        set_result_box(opacity100)
      }, 1000)
  
      if (choice.action === true) {   // si la réponse donne une action start l'action
        setTimeout(() => {
          set_result_box(opacity0)
          pay_generator()
        }, 3000)
      }else{
        end_night()                  // Sinon FIN DE LA NUIT
      }
      set_button_dis(false)
    }
      
    
  }

  return (
    <>
    <Display_all_event>
      {step_days === 'EVENT' && !loading ? (
        <>

          <div style={story_box}>
            
            <Story_box>{quest_event.story}</Story_box>

            <EventAnimate
            imgEvent = {quest_event.imageEvent.img}
            />
              <div style={question_box}>
              <Question>
                <Question_button
                style={{cursor : `${cursor}`}}
                  onClick={() => handle_choice(quest_event.result_A)}
                >
                  {quest_event.choice_A}
                </Question_button>
                <Question_button
                  style={{cursor : `${cursor}`}}
                  onClick={() => handle_choice(quest_event.result_B)}
                >
                  {quest_event.choice_B}
                </Question_button>
              </Question>
            </div>
          </div>

          
            
          

        </>
      ) : null}
    </Display_all_event>

          <Result_box style={result_box}>
            <div>{result}</div>
          </Result_box>
    </>
    
  )
}

export default Event
