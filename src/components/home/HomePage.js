import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as gameActions from '../../actions/gameActions';
import HomeForm from './HomeForm';

class HomePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      game: Object.assign({}, this.props.game),
    };

    this.updateGameState = this.updateGameState.bind(this);
    this.startGame = this.startGame.bind(this);
  }


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
