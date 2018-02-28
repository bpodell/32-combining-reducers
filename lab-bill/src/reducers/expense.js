let initialState = {}

export default (state=initialState, action) => {
    let {type, payload} = action

    switch(type) {
        case 'CATEGORY_CREATE': return {...state, [payload._id]: []}
        case 'CATEGORY_DELETE':
          let changedState = {...state}
          delete changedState[payload._id]
          return changedState
        case 'EXPENSE_CREATE':
          let index = state[payload.categoryID]
          let arrayed = [...index, payload];
          return {...state, [payload.categoryID]: arrayed}
        case 'EXPENSE_UPDATE': 
        console.log('expense update state', state)
        console.log('category', state[payload.catId])
        console.log('payload',payload)
        let updatedState = {...state}
        return updatedState[payload.catId].map(ele => ele._id === payload._id ? payload : ele)
        // return {...state, state[payload.categoryID].map(ele => ele._id === payload._id ? payload : ele)}
        case 'EXPENSE_DELETE': return // you do the thing
        case 'EXPENSE_RESET': return initialState
        default: return state
      }
}