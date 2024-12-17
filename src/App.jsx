import Bucket from "./components/Bucket"
import './App.css'
import Operations from "./components/Operations"
import { useState } from "react"

function App() {
  // initialize the bucket items
  const bucket = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6', 'item7', 'item8', 'item9', 'item10'];

  //initial state for bucket1
  const [bucket1, setBucket1] = useState(bucket.slice(0, 5));
  //initial state for bucket1
  const [bucket2, setBucket2] = useState(bucket.slice(5, 10));

  //state for selected bucket
  const [selectedBucket, setSelectedBucket] = useState(null);

  //initialized selected items
  const [selectedItems, setSelectedItems] = useState([]);

  const [selectItems, setSelectItems] = useState(false);

  //tranfer element
  const addItem = () => {
    if (bucket1.includes(selectedItems[0])) {
      setBucket2([...bucket2, ...selectedItems]);
      setBucket1(bucket1.filter(item => !selectedItems.includes(item)));
      setSelectedItems([]);
      setSelectItems(false);
    }
    else if (bucket2.includes(selectedItems[0])) {
      setBucket1([...bucket1, ...selectedItems]);
      setBucket2(bucket2.filter(item => !selectedItems.includes(item)));
      setSelectedItems([]);
      setSelectItems(false);
    }
    else {
      alert('Item not selected')
    }
    setSelectedBucket(null);
  };

  //removing element
  const removeItem = () => {
    if (bucket1.includes(selectedItems[0])) {
      setBucket1(bucket1.filter(item => !selectedItems.includes(item)));
      setSelectedItems([]);
      setSelectItems(false);
    }
    else if (bucket2.includes(selectedItems[0])) {
      setBucket2(bucket2.filter(item => !selectedItems.includes(item)));
      setSelectedItems([]);
      setSelectItems(false);
    }
    else {
      alert('Item not selected')
    }
    setSelectedBucket(null);
  };

  //adding all items
  const addAllItems = () => {
    if (selectedBucket === 'Bucket 1') {
      setBucket2([...bucket2, ...bucket1]);
      setBucket1([]);
    }
    else if(selectedBucket === 'Bucket 2') {
      setBucket1([...bucket1, ...bucket2]);
      setBucket2([]);
    }
    else{
      alert('Bucket is not selected')
    }
    setSelectedBucket(null);
  };

  //remove all itemss
  const removeAllItems = () => {
    if (selectedBucket === 'Bucket 1') {
      setBucket1([]);
    }
    else if(selectedBucket === 'Bucket 2') {
      setBucket2([]);
    }
    else{
      alert('Bucket is not selected')
    }
    setSelectedBucket(null);
  };

  return (
    <>
      <header>
        <h1>Element Tranfer</h1>
      </header>
      <div className="container">
        <div className="bucket-container">
          <Bucket
            name='Bucket 1'
            data={bucket1}
            selectedBucket={selectedBucket}
            setSelectedBucket={setSelectedBucket}
            selectItems={selectItems}
            setSelectItems={setSelectItems}
            selectedItems={selectedItems}
            setSelectedItems={setSelectedItems}
          />
          <Operations
            addItem={addItem}
            addAllItems={addAllItems}
            removeItem={removeItem}
            removeAllItems={removeAllItems}
          />
          <Bucket
            name='Bucket 2'
            data={bucket2}
            selectedBucket={selectedBucket}
            setSelectedBucket={setSelectedBucket}
            selectItems={selectItems}
            setSelectItems={setSelectItems}
            selectedItems={selectedItems}
            setSelectedItems={setSelectedItems}
          />
        </div>
      </div>
    </>
  )
}

export default App