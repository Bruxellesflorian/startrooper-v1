export const aliens = (state = { number: 10, pv: 4, atk: 5 }, action) => {
  switch (action.type) {
    case 'ATTACK_FROM_ALIENS': {
      const { number, pv, atk } = action.payload
      return { number, pv, atk }
    }
    case 'UP_ALIENS': {
      return (state = {
        number: state.number + 3,
        pv: state.pv + 1,
        atk: state.atk + 1,
      })
    }
    default:
      return state
  }
}
let Alien

export const aliens_soldier = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ALIENS': {
      const { name, pv, pvMax, atk, pos, ids } = action.payload
      return [...state, { Alien: { name, pv, pvMax ,atk, pos , ids} }]
    }
    case 'DAMAGED_ALIENS_LIST': {
      const { id, pv } = action.payload
      state[id] = {...state[id], Alien : {...state[id].Alien, pv : pv}}
      return [...state]
    }
    case 'REFRESH': {
      return []
    }
    case 'DELETE_ALIENS_LIST': {
      const { id } = action.payload
      state.splice([id], 1)
      return [...state]
    }
    default:
      return state
  }
}

