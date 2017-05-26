import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const HomeForm = ({game, weaponOptions, onSave, onChange, loading, errors})  =>  {
  console.log(weaponOptions)
  return (
    <form>
      <h2>Make your selection. Place your bet</h2>
      <TextInput
        name="bet"
        label="Bet"
        value={game.balance}
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
