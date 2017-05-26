const game =
  {
    id: '1',
    balance: 100,
    newBalance: 0,
    weapons: ['rock', 'paper', 'scissors']
  }


class GameApi {
  static getGame()  {
    return new Promise((resolve, reject)  =>  {
      resolve(game)
    })
  }
}

export default GameApi
