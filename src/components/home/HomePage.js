import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import * as rpsActions from '';
import HomeForm from './HomeForm'

class HomePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      game: Object.assign({}, this.props.game),
      errors: {}
    };

    this.updateGameState = this.updateGameState.bind(this);
    this.startGame = this.startGame.bind(this);
  }

  // componentWillReceiveProps(nextProps)  {
  //   if (this.props) {
  //
  //   }
  // }

  updateGameState(event)  {
    const field = event.target.name;
    let game = this.state.game;
    game[field] = event.target.value;
    return this.setState({game: game})
  }

  startGame(event)  {
    event.preventDefault();
    this.props.actions.startGame(this.state.game);
  }

  render()  {
    return  (
      <HomeForm game={this.state.game}
          weaponOptions={this.props.weapons}
          onChange={this.updateGameState}
          onSave={this.startGame}
          errors={this.state.errors}
      />
    )
  };
};

HomePage.propTypes = {
  game: PropTypes.object.isRequired,
  weapons: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};
