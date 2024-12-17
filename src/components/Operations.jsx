import React from 'react'

const Operations = ({ addItem, addAllItems, removeItem, removeAllItems }) => {

  return (
    <div>
      <div className='function-btn'>
        <button onClick={addItem}>Add</button>
        <button onClick={removeItem}>Remove</button>
        <button onClick={addAllItems}>Add All</button>
        <button onClick={removeAllItems}>Remove All</button>
      </div>
    </div>
  )
}

export default Operations