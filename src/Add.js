import React from 'react';



function Add(props) {
  return (
    <div> 
       <div>
      <h1>Today we are serving {props.dishName}</h1>
      <h1>Today we are also serving sweet dish {props.sweetDish}</h1>
    </div>
      </div>
  );
}

export default Add;
