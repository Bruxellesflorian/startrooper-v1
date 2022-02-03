export const add_gold_worker = () => {
  return {
    type: 'ADD_GOLD_WORKER',
  }
}
export const add_iron_worker = () => {
  return {
    type: 'ADD_IRON_WORKER',
  }
}
export const ADD_GAS_WORKER = () => {
  return {
    type: 'ADD_GAS_WORKER',
  }
}

export const add_soldier = () => {
  return {
    type: 'ADDSOLDIER',
  }
}

export const addModGoldWorker = (value_gold_add) => ({
  type: 'ADD_MOD_GOLD_WORKER',
  payload: {
    value_gold_add,
  },
})
export const addModIronWorker = (value_iron_add) => ({
  type: 'ADD_MOD_IRON_WORKER',
  payload: {
    value_iron_add,
  },
})
export const addModGASWorker = (value_GAS_add) => ({
  type: 'ADD_MOD_GAS_WORKER',
  payload: {
    value_GAS_add,
  },
})

export const lowerModGoldWorker = (value_gold_lower) => ({
  type: 'LOWER_MOD_GOLD_WORKER',
  payload: {
    value_gold_lower,
  },
})
export const lowerModIronWorker = (value_iron_lower) => ({
  type: 'LOWER_MOD_IRON_WORKER',
  payload: {
    value_iron_lower,
  },
})
export const lowerModGASWorker = (value_GAS_lower) => ({
  type: 'LOWER_MOD_GAS_WORKER',
  payload: {
    value_GAS_lower,
  },
})