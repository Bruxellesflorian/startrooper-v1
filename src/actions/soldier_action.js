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

  const avatarList = ["soldier0.png","soldier1.png","soldier2.png","soldier3.png","soldier4.png","soldier5.png","soldier6.png"]

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