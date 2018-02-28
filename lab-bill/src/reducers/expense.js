let initialState = {}

export default (state=initialState, action) => {
    let {type, payload} = action

    switch(type) {
        case 'CATEGORY_CREATE': return {...state, [payload._id]: []}
        case 'CATEGORY_DELETE':
          delete state[payload.categoryId]
          return {...state}
        case 'EXPENSE_CREATE':
          state[payload.categoryId] = state[payload.categoryId].concat([payload])
          return {...state}
        case 'EXPENSE_UPDATE': 
        console.log('expense update state', state)
        console.log('category', state[payload.categoryId])
        console.log('payload',payload)
        let updatedState = {...state}
        updatedState[payload.categoryId] = updatedState[payload.categoryId].map(ele => ele._id === payload._id ? payload : ele)
        return updatedState
        // return {...state, state[payload.categoryId].map(ele => ele._id === payload._id ? payload : ele)}
        case 'EXPENSE_DELETE': return // you do the thing
        case 'EXPENSE_RESET': return initialState
        default: return state
      }
}