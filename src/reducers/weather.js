import { FETCH_WEATHER } from '../actions/index'

export default function(state=[], action){
  //console.log(('Action recieved', action));
  switch(action.type){
    case FETCH_WEATHER:
    return [action.payload.data, ...state]; //this returns a brand new array with action.palyload.data fflattened out in a arry
  }
  return state
}
