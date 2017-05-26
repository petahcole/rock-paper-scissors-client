import React from 'react';
import initialState from './initialState';

export default function gameReducer(state = initialState.game, action)  {
  switch(action.type) {
    case 'LOAD_WEAPONS_SUCCESS':
      return action.weapons

  default:
        return state
  }
}
