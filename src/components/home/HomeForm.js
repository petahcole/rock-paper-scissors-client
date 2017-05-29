import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const HomeForm = ({game, weaponOptions, onSave, onChange, loading, errors})  =>  {

  return (
    <form>
      <h2>Make your selection. Place your bet</h2>
      <TextInput
        name="user"
        label="Username"
        value={game.user}
        onChange={onChange}/>

      <h5>Current Balance</h5>
      <h6>{game.balance}</h6>

      <h5>New Balance</h5>
      <h6>{game.balance}</h6>

      <TextInput
        name="bet"
        label="Place Bet"
        value={game.bet}
        onChange={onChange}/>

      <SelectInput
        name="weapon"
        label="Weapon"
        value={game.weapon}
        defaultOption="Select Weapon"
        options={weaponOptions}
        onChange={onChange} error={errors}/>

      <input
        type="submit"
        disabled={loading}
        value={loading ? 'Saving...' : 'Save'}
        className="btn btn-primary"
        onClick={onSave}/>
    </form>
  );
};

HomeForm.PropTypes = {
  game: React.PropTypes.object.isRequired,
  weaponOptions: React.PropTypes.array.isRequired,
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  loading: React.PropTypes.bool,
  errors: React.PropTypes.object
};

export default HomeForm;
