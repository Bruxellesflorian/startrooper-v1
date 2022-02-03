export const decrement_population = ()=>{
    return {
        type: 'DECREMENT_POPULATION'
    }
}
export const increment_population = ()=>{
    return {
        type: 'INCREMENT_POPULATION'
    }
}

export const increment_population_per_day = (pop)=>{
    return {
        type: 'INCREMENT_POPULATION_PER_DAY',
        payload : {
            pop : pop
        }
    }
}