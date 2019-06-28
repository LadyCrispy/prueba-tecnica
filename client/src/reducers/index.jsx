const initialState = {
    phones: [],
    onePhone: {}
  }
  
const Reducers=(state = initialState, action)=>{
    switch(action.type){
      case 'SET_ALL_PHONES':
        return{
          ...state,
          phones: action.payload
        }
      case 'DETAIL':
        // const thePhone = state.phones.filter(elm=> elm.id===parseInt(action.payload))
        return{
          ...state,
          onePhone: state.phones.filter(elm=> elm.id===parseInt(action.payload))[0]
        }

      case 'GOTOINDEX':
        return state
  
      default:
        return state
      }
  }


export default Reducers