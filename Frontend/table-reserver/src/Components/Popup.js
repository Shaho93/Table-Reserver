import React from 'react';

function Popup(props) {
  return(props.trigger) ? (
    <div className='popup'>
      <div className='inner-popup'>
        <button>"Bestätigen</button>
      </div>
    </div>
  ): "";
}

export default Popup;
