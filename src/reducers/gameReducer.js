import React from 'react';
import initialState from './initialState';

export default function gameReducer(state = initialState, action)  {
  switch(action.type) {
    case 'LOAD_GAME_SUCCESS':
    console.log(action)
      return action.game

  default:
        return state
  }
}
