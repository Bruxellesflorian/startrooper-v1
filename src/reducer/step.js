

export const step = (state = 'DAY', action) => {
  switch (action.type) {
    case 'DAY':
      return (state = 'DAY')
    case 'NIGHT':
      return (state = 'NIGHT')
    case 'EVENT':
      return (state = 'EVENT')
    default:
      return state
  }
}
