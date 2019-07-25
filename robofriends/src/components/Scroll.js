import React from 'react';

function Scroll(props) {
  return (
    <div
      style={{
        overflowY: 'scroll',
        border: '3px solid darkBlue',
        height: '370px',
      }}
    >
      {props.children};
    </div>
  );
}




export default Scroll;
