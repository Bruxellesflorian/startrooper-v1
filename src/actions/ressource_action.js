export const addModRessource = (goldP, ironP, GASP,pop) => ({
  type: 'ADD_FROM_EVENT',
  payload: {
    goldP,
    ironP,
    GASP,
    pop
  },
})

export const lowerModRessource = (goldP, ironP, GASP) => ({
  type: 'LOWER_FROM_EVENT',
  payload: {
    goldP,
    ironP,
    GASP,
  },
})

export const addDay = () =>({
  type: "INCREMENT_DAY"
})



