let house_inf = { gold: 0, iron: 0, GAS: 0 }
let gold_farm_inf = { gold: 0, iron: 0, GAS: 0 }
let iron_farm_inf = { gold: 0, iron: 0, GAS: 0 }
let GAS_farm_inf = { gold: 0, iron: 0, GAS: 0 }
let soldier_farm_inf = { gold: 0, iron: 0, GAS: 0 }

export const base_pv = (
  state = { value: 10, maxValue: 10 },
  action
) => {
  switch (action.type) {
    case 'DAMAGE_BASE':
      const {damage} = action.payload
      return (state = { ...state, value: state.value - damage })
    default:
      return state
  }
}

export const workers_ressource_days = (
  state = { gold: 0, iron: 0, GAS: 0 , pop : 0},
  action
) => {
  switch (action.type) {
    case 'ADD_GOLD_WORKER':
      return (state = { ...state, gold: state.gold + 5 })
    case 'ADD_IRON_WORKER':
      return (state = { ...state, iron: state.iron + 5 })
    case 'ADD_GAS_WORKER':
      return (state = { ...state, GAS: state.GAS + 5 })
    case 'BUY_HOUSE':
      return (state = { ...state, pop: state.pop + 1 })
    default:
      return state
  }
}

export const ressource = (
  state = { gold: 0, iron: 0, GAS: 0},
  action
) => {
  switch (action.type) {
    case 'ADD_FROM_EVENT': {
      const { goldP, ironP, GASP } = action.payload
      return (state = {
        gold: state.gold + goldP,
        iron: state.iron + ironP,
        GAS: state.GAS + GASP,
      })
    }
    case 'LOWER_FROM_EVENT': {
      const { goldP, ironP, GASP } = action.payload
      return (state = {
        gold: state.gold - goldP,
        iron: state.iron - ironP,
        GAS: state.GAS - GASP,
      })
    }
    case 'BUY_CIVIL':
      return (state = { ...state, gold: state.gold - 20 })
    case 'BUY_SOLDIER':
      return (state = {
        gold: state.gold - 10,
        iron: state.iron - 10,
        GAS: state.GAS - 5,
      })
    case 'BUY_HOUSE':
      return (
        (house_inf.gold += 25),
        (house_inf.iron += 25),
        (house_inf.GAS += 5),
        (state = {
          gold: state.gold - house_inf.gold,
          iron: state.iron - house_inf.iron,
          GAS: state.GAS - house_inf.GAS,
        })
      )

    case 'BUY_GOLD_FARM':
      return (
        (gold_farm_inf.gold += 50),
        (gold_farm_inf.iron += 50),
        (gold_farm_inf.GAS += 0),
        (state = {
          gold: state.gold - gold_farm_inf.gold,
          iron: state.iron - gold_farm_inf.iron,
          GAS: state.GAS - gold_farm_inf.GAS,
        })
      )
    case 'BUY_IRON_FARM':
      return (
        (iron_farm_inf.gold += 50),
        (iron_farm_inf.iron += 50),
        (iron_farm_inf.GAS += 0),
        (state = {
          gold: state.gold - iron_farm_inf.gold,
          iron: state.iron - iron_farm_inf.iron,
          GAS: state.GAS - iron_farm_inf.GAS,
        })
      )
    case 'BUY_GAS_FARM':
      return (
        (GAS_farm_inf.gold += 50),
        (GAS_farm_inf.iron += 50),
        (GAS_farm_inf.GAS += 40),
        (state = {
          gold: state.gold - GAS_farm_inf.gold,
          iron: state.iron - GAS_farm_inf.iron,
          GAS: state.GAS - GAS_farm_inf.GAS,
        })
      )
    case 'BUY_SOLDIER_FARM':
      return (
        (soldier_farm_inf.gold += 200),
        (soldier_farm_inf.iron += 200),
        (soldier_farm_inf.GAS += 150),
        (state = {
          gold: state.gold - soldier_farm_inf.gold,
          iron: state.iron - soldier_farm_inf.iron,
          GAS: state.GAS - soldier_farm_inf.GAS,
        })
      )
    default:
      return state
  }
}

export const days = (state = 1, action) => {
  switch (action.type) {
    case 'INCREMENT_DAY':
      return state + 1
    case 'DECREMENT_DAY':
      return state - 1
    default:
      return state
  }
}

export const population = (state = { value: 20, maxValue: 20 }, action) => {
  switch (action.type) {
    case 'BUY_HOUSE':
      return (state = { value: state.value, maxValue: state.maxValue + 5 })
    case 'INCREMENT_POPULATION':
      return (state = { value: state.value + 1, maxValue: state.maxValue })
    case 'DECREMENT_POPULATION':
      return (state = { value: state.value - 1, maxValue: state.maxValue })
      case 'INCREMENT_POPULATION_PER_DAY':
        const {pop} = action.payload
        return (state = { value: state.value + pop, maxValue: state.maxValue })
    default:
      return state
  }
}

export const soldier = (
  state = { name: 'Soldier', value: 10, maxValue: 20 },
  action
) => {
  switch (action.type) {
    case 'DECREMENT_SOLDIER':
      return (state = { ...state, value: state.value - 1 })
    case 'ADDSOLDIER':
      return (state = { ...state, value: state.value + 1 })
    case 'BUY_SOLDIER_FARM':
      return (state = { ...state, maxValue: state.maxValue + 10 })
    case 'REFRESH':
      const { soldier_value } = action.payload
        return (state = { ...state, value:  soldier_value }) 
    default:
      return state
  }
}

let dayAlive

export const soldierList = (state = [], action) => {
  switch (action.type) {
    case 'ADD_SOLDIER_LIST': {
      const { name, stat, avatar, pos, ids } = action.payload
      return [...state, { soldier: {ids, name,avatar,pos, dayAlive : 0 ,stat } }]
    }
    case 'DAMAGED_SOLDIER_LIST': {
      const { id, statPv } = action.payload
      state[id] = {
        soldier :{
        ids : state[id].soldier.ids ,
        name : state[id].soldier.name ,
        avatar : state[id].soldier.avatar ,
        pos : state[id].soldier.pos ,
        dayAlive : state[id].soldier.dayAlive ,
        stat: { ...state[id].soldier.stat, pv: statPv } },  }
      return [...state]
    }
    case 'DELETE_SOLDIER_LIST': {
      const { id } = action.payload
      state.splice([id], 1)
      return [...state]
    }
    case 'REFRESH': {
      const { data } = action.payload
      return data
    }

    default:
      return state
  }
}

