export const house = (
  state = {
    name: 'House',
    gold_price: 25,
    iron_price: 25,
    GAS_price: 5,
    amount: 0,
  },
  action
) => {
  switch (action.type) {
    case 'BUY_HOUSE':
      return (state = {
        name: 'House',
        gold_price: state.gold_price + 25,
        iron_price: state.iron_price + 25,
        GAS_price: state.GAS_price + 5,
        amount: state.amount + 1,
      })
    default:
      return state
  }
}

export const gold_farm = (
  state = {
    name: 'Gold farm',
    gold_price: 50,
    iron_price: 50,
    GAS_price: 0,
    amount: 1,
  },
  action
) => {
  switch (action.type) {
    case 'BUY_GOLD_FARM':
      return (state = {
        name: 'Gold farm',
        gold_price: state.gold_price + 50,
        iron_price: state.iron_price + 50,
        GAS_price: state.GAS_price + 0,
        amount: state.amount + 1,
      })
    default:
      return state
  }
}

export const iron_farm = (
  state = {
    name: 'Iron farm',
    gold_price: 50,
    iron_price: 50,
    GAS_price: 0,
    amount: 1,
  },
  action
) => {
  switch (action.type) {
    case 'BUY_IRON_FARM':
      return (state = {
        name: 'Iron farm',
        gold_price: state.gold_price + 50,
        iron_price: state.iron_price + 50,
        GAS_price: state.GAS_price + 0,
        amount: state.amount + 1,
      })
    default:
      return state
  }
}

export const GAS_farm = (
  state = {
    name: 'GAS farm',
    gold_price: 50,
    iron_price: 50,
    GAS_price: 40,
    amount: 1,
  },
  action
) => {
  switch (action.type) {
    case 'BUY_GAS_FARM':
      return (state = {
        name: 'GAS farm',
        gold_price: state.gold_price + 50,
        iron_price: state.iron_price + 50,
        GAS_price: state.GAS_price + 40,
        amount: state.amount + 1,
      })
    default:
      return state
  }
}

export const soldier_farm = (
  state = {
    name: 'Soldier farm',
    gold_price: 200,
    iron_price: 200,
    GAS_price: 150,
    amount: 1,
  },
  action
) => {
  switch (action.type) {
    case 'BUY_SOLDIER_FARM':
      return (state = {
        name: 'Soldier farm',
        gold_price: state.gold_price + 200,
        iron_price: state.iron_price + 200,
        GAS_price: state.GAS_price + 150,
        amount: state.amount + 1,
      })
    default:
      return state
  }
}
