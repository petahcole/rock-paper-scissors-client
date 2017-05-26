#Rock Paper Scissors Client

*Initialize game with username, bet, and RPS selection - validate all fields are completed
**Will open a websocket
*Makes server request that will pend until another request is made
*Once response is made action will get floated to reducer and state will get passed down
*User fake balance will get stored in state, state is initialized with x balance
*Frontend validation that checks input logic to ensure no bet is made over what the user has
**Backend will validate as well
*End game button will close websocket
