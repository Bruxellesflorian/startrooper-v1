
export const aliens_numbers_action = (number, pv, atk) => ({
  type: 'ATTACK_FROM_ALIENS',
  payload: {
    number,
    pv,
    atk,
  },
})

let id = 0

export const createAliens = (name,pv,pvMax,atk,pos,ids) => ({
  type: "ADD_ALIENS",
  payload: {
    name,
    pv,
    pvMax,
    atk,
    pos,
    ids : id++
  },
})

export const damagedAlien = (id,pv) => ({
  type: "DAMAGED_ALIENS_LIST",
  payload: {
    id: id,
    pv : pv,
  },
})

export const deleteAlien = (id) => ({
  type: "DELETE_ALIENS_LIST",
  payload: {
    id: id,
  },
})

export const upAliens = () => ({
  type: "UP_ALIENS",
})





