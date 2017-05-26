import React from 'react';
import GameApi from '../api/mockGameApi';

export function loadGameSuccess(game)  {
  return {type: 'LOAD_GAME_SUCCESS', game}
}

export function loadGame() {
  return function(dispatch)  {
    return GameApi.getGame().then(game  => {
      dispatch(loadGameSuccess(game))
    })
    .catch(error  =>  {
      throw(error)
    })
  }
}
