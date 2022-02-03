export const settings = (state = { font: '' }, action) => {
  switch (action.type) {
    case 'CHANGE_FONT':
      const { font } = action.payload
      return (state = font)
    default:
      return state
  }
}
