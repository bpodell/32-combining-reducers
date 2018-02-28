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
          console.log('payload ====>', payload.categoryID)
          console.log('state',state[payload.categoryID])
          let index = state[payload.categoryID]
          let arrayed = [...index, payload];
          return {...state, [payload.categoryID]: arrayed}
        case 'EXPENSE_UPDATE': return // you do the thing
        case 'EXPENSE_DELETE': return // you do the thing
        case 'EXPENSE_RESET': return initialState
        default: return state
      }
}