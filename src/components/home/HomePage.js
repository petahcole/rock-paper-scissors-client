import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as gameActions from '../../actions/gameActions';
import HomeForm from './HomeForm';

class HomePage extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      game: Object.assign({}, this.props.game)
    };

    this.updateGameState = this.updateGameState.bind(this);
    this.startGame = this.startGame.bind(this);
  }

  componentWillMount()  {
    const socket = new WebSocket('ws://localhost:8080/ws');

    socket.onopen = function(e) {
      console.log("Sending text to server")
    }
    socket.onclose = function(e)  {
      socket.send("disconnected")
    }
    socket.onmessage = function(e)  {
      socket.send(e.data)
    }
  }


  updateGameState(event)  {
    const field = event.target.name;
    let game = this.props.game;
    game[field] = event.target.value;
    return this.setState({game: game})
  }

  startGame(event, socket)  {
    event.preventDefault();
    let gameData = {
      type: 'message',
      text: this.props.game,
      id: this.props.game.id
    };
    console.log(gameData)
    socket.send(JSON.stringify(gameData));
  }

  render()  {
    return  (
      <HomeForm game={this.props.game}
          weaponOptions={this.props.game.weapons}
          onChange={this.updateGameState}
          onSave={this.startGame}
          errors={this.state.errors}
      />
    )
  }
}

HomePage.propTypes = {
  game: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps)   {
    console.log(state)
    return {
        game: state.game
    }
}

function mapDispatchToProps(dispatch)   {
    return  {
        actions: bindActionCreators(gameActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
