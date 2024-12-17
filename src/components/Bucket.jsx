import React, { useState } from 'react'
import Items from './Items'

const Bucket = ({ name, data, selectedBucket, setSelectedBucket, selectItems, setSelectItems, selectedItems, setSelectedItems }) => {
    const [selectBucket, setSelectBucket] = useState(false);

    const handleClick = (item) => {
        if (!selectedBucket || selectedBucket === name || selectedItems.length == 0) {
            setSelectBucket(true);
            setSelectedBucket(name);
        }
        else {
            alert(`${selectedBucket} already selected`)
        }
    }

    return (
        <div>
            <h3 id='bucket-name'>{name}</h3>
            <div className={selectBucket && selectedBucket === name ? 'bucket active' : 'bucket'} onClick={handleClick}>
                {data.map((ele, i) => (
                    <Items
                        content={ele}
                        selectItems={selectItems}
                        setSelectItems={setSelectItems}
                        selectedItems={selectedItems}
                        setSelectedItems={setSelectedItems}
                        selectedBucket={selectedBucket}
                        name={name}
                        key={i} />
                ))}
                <span className='bucket-hover-text'>click to select bucket</span>
            </div>
        </div>
    )
}

export default Bucket