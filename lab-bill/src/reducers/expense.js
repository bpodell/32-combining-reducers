let initialState = {};

export default (state=initialState, action) => {
  let {type, payload} = action;

  switch(type) {
  case 'CATEGORY_CREATE': return {...state, [payload._id]: []};
  case 'CATEGORY_DELETE':
    delete state[payload.categoryId];
    return {...state};
  case 'EXPENSE_CREATE':
    state[payload.categoryId] = state[payload.categoryId].concat([payload]);
    return {...state};
  case 'EXPENSE_UPDATE': 
    let updatedState = {...state};
    updatedState[payload.categoryId] = updatedState[payload.categoryId].map(ele => ele._id === payload._id ? payload : ele);
    return updatedState;
    updatedState[payload.categoryId] = updatedState[payload.categoryId].map(ele => ele._id === payload._id ? payload : ele);
    return updatedState;
  case 'EXPENSE_DESTROY':
    console.log('state{payload}',state[payload.categoryId]);
    console.log('payload',payload);
    let deleteState = {...state};
    deleteState[payload.categoryId] = deleteState[payload.categoryId].filter(ele => ele._id !== payload._id);
    return deleteState;
  case 'EXPENSE_RESET': return initialState;
  default: return state;
  }
};