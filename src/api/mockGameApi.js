const game =
  {
    id: '1',
    user: '',
    balance: 100,
    newBalance: 100,
    bet: 0,
    weapons: ['rock', 'paper', 'scissors'],
    winner: null
  }


class GameApi {
  static getGame()  {
    return new Promise((resolve, reject)  =>  {
      resolve(game)
    })
  }
}

export default GameApi
