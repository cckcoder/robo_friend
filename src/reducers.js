<<<<<<< HEAD
import { CHANGE_SEARCH_FIELD } from './constants'
=======
import {CHANGE_SEARCH_FIELD} from './constants.js'
>>>>>>> master

const intialState = {
  searchField: ''
}

export const searchRobots = (state=intialState, action={}) => {
<<<<<<< HEAD
  switch(action.type) {
    case CHANGE_SEARCH_FIELD:
      return Object.assign({}, state, { searchField: action.payload })
=======
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return Object.assign({}, state, { searchField : action.payload })
>>>>>>> master
    default:
      return state
  }
}
<<<<<<< HEAD
=======

>>>>>>> master
