import React, { PropTypes } from 'react';

const SelectInput = ({name, label, onChange, defaultOption, value, error, options}) =>  {

  return (
    <div className="form-group">
      <label htmlForm={name}>{label}</label>
      <div className="field">
        <select
          name={name}
          value={value}
          onChange={onChange}
          className="form-control">
          <option value="">{defaultOption}</option>
          {options.map((weapon) =>  {
              return <option key={weapon} value={weapon}>{weapon}</option>;
          })
          }
        </select>
      </div>
    </div>
  );
};

SelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  defaultOption: PropTypes.string.isRequired,
  value: PropTypes.string,
  error: PropTypes.object,
  options: PropTypes.arrayOf(PropTypes.string)
};

export default SelectInput;
