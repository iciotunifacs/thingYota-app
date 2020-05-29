export const initialState = {
  laoding: false,
  called: false,
  result: false,
  history: [],
  metadata: null,
  error : null
}

export const reducer = (state , action) => {
  switch (action.type) {

  case "FETCHING":
    return { ...state, laoding: true }

  case "FETCHED": {
    return {
      ...state,
      laoding: false,
      called: true,
      history : [...state.history, ...action.history],
      metadata : {...action.metadata},
      result: true
    }
  }
  case "ERRO": {
    return {
      ...state,
      laoding: false,
      called: true,
      error: action.error,
      result: false
    }
  }
  default:
    return state
  }
}
