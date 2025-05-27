import React from 'react'

function Button({item, hdlCallCategory}) {
  return <button 
  className='btn' 
  onClick={ ()=>{hdlCallCategory(item);
  }}>{item}</button>;
}

export default Button