import React, { useState } from 'react'

const Items = ({ content, selectItems, setSelectItems, selectedItems, setSelectedItems, selectedBucket, name }) => {

    const [selected, setSelected] = useState(false);

    const handleClick = () => {
        if (selectedBucket === name || !selectedBucket || selectedItems.length === 0) {

            if (selectedItems.includes(content)) {
                setSelectedItems(prev => prev.splice(prev.indexOf(content), 1))
            }
            else {
                setSelectedItems(prev => [...prev, content])
            }

            setSelectItems(true)
            setSelected(prev => !prev)
        }
        else {
            alert(`Select items from ${selectedBucket}`)
        }
    }

    return (
        <div className='item-container'>
            <span className={selectItems && selected ? 'active item' : 'item'} onClick={handleClick}>{content}</span>
            <div className='item-hover-text'>click to select item</div>
        </div>
    )
}

export default Items