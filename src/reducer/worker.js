export const worker = (
  state = {
    gold_worker: { name: 'Gold worker', value: 0 , maxValue : 10},
    iron_worker: { name: 'Iron worker', value: 0 , maxValue : 10},
    GAS_worker: { name: 'GAS worker', value: 0 , maxValue : 10},
  },
  action
) => {
  switch (action.type) {
    case 'ADD_GOLD_WORKER':
      return (state = { ...state, gold_worker: {...state.gold_worker,value:state.gold_worker.value + 1} })
    case 'ADD_IRON_WORKER':
        return (state = { ...state, iron_worker: {...state.iron_worker,value:state.iron_worker.value + 1} })
    case 'ADD_GAS_WORKER':
        return (state = { ...state, GAS_worker: {...state.GAS_worker,value:state.GAS_worker.value + 1} })
    case 'BUY_GOLD_FARM':
        return (state = { ...state, gold_worker: {...state.gold_worker,maxValue:state.gold_worker.maxValue + 5} })  
    case 'BUY_IRON_FARM':
        return (state = { ...state, iron_worker: {...state.iron_worker,maxValue:state.iron_worker.maxValue + 5} }) 
    case 'BUY_GAS_FARM':
        return (state = { ...state, GAS_worker: {...state.GAS_worker,maxValue:state.GAS_worker.maxValue + 5} }) 
    case 'ADD_MOD_GOLD_WORKER':
        const { value_gold_add } = action.payload
        return (state = { ...state, gold_worker: {...state.gold_worker,value:state.gold_worker.value + value_gold_add} })       
    case 'ADD_MOD_IRON_WORKER':
          const { value_iron_add } = action.payload
        return (state = { ...state, iron_worker: {...state.iron_worker,value:state.iron_worker.value + value_iron_add} }) 
    case 'ADD_MOD_GAS_WORKER':
          const { value_GAS_add } = action.payload
        return (state = { ...state, GAS_worker: {...state.GAS_worker,value:state.GAS_worker.value + value_GAS_add} }) 
    case 'LOWER_MOD_GOLD_WORKER':
          const { value_gold_lower } = action.payload
        return (state = { ...state, gold_worker: {...state.gold_worker,value:state.gold_worker.value - value_gold_lower} })
    case 'LOWER_MOD_IRON_WORKER':
          const { value_iron_lower } = action.payload
        return (state = { ...state, iron_worker: {...state.iron_worker,value:state.iron_worker.value - value_iron_lower} })                   
    case 'LOWER_MOD_GAS_WORKER':
          const { value_GAS_lower } = action.payload
        return (state = { ...state, GAS_worker: {...state.GAS_worker,value:state.GAS_worker.value - value_GAS_lower} })
        default:
      return state
  }
}

