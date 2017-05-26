import GameApi from '../../api/mockGameApi';

export function loadGameSuccess()  {
  return {type: 'LOAD_GAME_SUCCESS', game}
}

export function loadGame() {
  return dispatch =>  {
    return GameApi.getGame().then(game  => {
      dispatch(loadGameSuccess(game))
    })
    .catch(error  =>  {
      throw(error)
    })
  }
}
