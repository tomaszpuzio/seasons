import React from 'react';

const Spinner = (props) => {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader"> {props.message }</div>
    </div>
  );
};

//If we forget to put the message, this is what will be displayed
Spinner.defaultProps = {
  message: 'Loading...'
};

export default Spinner;