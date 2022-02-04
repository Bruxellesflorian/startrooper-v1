import soldier0 from '../sprites/soldierAvatar/soldier0.png'
import soldier1 from '../sprites/soldierAvatar/soldier1.png'
import soldier2 from '../sprites/soldierAvatar/soldier2.png'
import soldier3 from '../sprites/soldierAvatar/soldier3.png'
import soldier4 from '../sprites/soldierAvatar/soldier4.png'
import soldier5 from '../sprites/soldierAvatar/soldier5.png'
import soldier6 from '../sprites/soldierAvatar/soldier6.png'

let idS = 0
export const createSoldier = (name,stat,avatar, pos) => ({
  type: "ADD_SOLDIER_LIST",
  payload: {
    name,
    stat,
    avatar,
    pos,
    ids : idS++,
  },
})

export const modSoldier = (id,name,statPv,statAtk, pos) => ({
  type: "DAMAGEDSOLDIER_LIST",
  payload: {
    id: id,
    name,
    statPv,
    statAtk,
    pos,
  },
})

export const damagedSoldier = (id,statPv) => ({
  type: "DAMAGED_SOLDIER_LIST",
  payload: {
    id: id,
    statPv,
  },
})

export const deleteSoldier = (id) => ({
  type: "DELETE_SOLDIER_LIST",
  payload: {
    id: id,
  },
})

export const decrementSoldier = () =>({
  type : "DECREMENT_SOLDIER"
})



  
  export const create_name = () =>{
    const startCreateName0 = ["vi","di","rai","ban","flo","oli","ale","fra","sil","domi","sve","ste","ana","alla","lau","li","moni","dra","dre","fre","e","a","theo"]
    const startCreateName1 = ["b","c","d","f","g","h","j","k","l","n","p","q","r","s","t","v"]
    const startCreateName2 = ["ian","ier","andre","ue","er","e","co","a","u"]

    return  startCreateName0[Math.floor(Math.random()*startCreateName0.length)]+
    startCreateName1[Math.floor(Math.random()*startCreateName1.length)]+
    startCreateName2[Math.floor(Math.random()*startCreateName2.length)]

  }

const avatarList = [soldier0,soldier1,soldier2,soldier3,soldier4,soldier5,soldier6]

export const avatar = () => {
  return avatarList[Math.floor(Math.random()*avatarList.length)]
}


export const refreshSoldierAndAlien = (data,soldier_value) => ({
  type: "REFRESH",
  payload: {
   data : data,
   soldier_value : soldier_value
  },
})