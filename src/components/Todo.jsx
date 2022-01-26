import React, { useEffect, useState } from 'react';


// to get form local storage...

const togetItems=()=>{
  let list =localStorage.getItem('lists');
  console.log(list);
  
  if(list)
  {
    return JSON.parse(localStorage.getItem('lists'));
  }
  else
  {
    return [];
  }
}
const Todo = () => {
  //input add
  const [inputdata, setinputdata] = useState('');
  // adding data
  const [items, setitems] = useState(togetItems());
  
  // adding item to list
  const addItem = () => {
    if (!inputdata) {
      alert("Cann't Add Empty Data")
    }
    else {
      setitems([...items, inputdata]);
      setinputdata('');
    }

  }
//  deleting item
  const deleteItem = (id) => {
    console.log(id);
    const updateItems = items.filter((ele,ind) => {
        return ind !== id;
    })
    setitems(updateItems);
  }

  // remove all item

  const removeAll=()=>{
    setitems([]);
  }

  // adding to local storage 

  useEffect(()=>{
    localStorage.setItem('lists',JSON.stringify(items));
  },[items]);


  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src="" alt="Todo logo" />
            <figcaption>Add Your List Here!!!</figcaption>

          </figure>
          <div className="addItem">
            <input type="text" value={inputdata} onChange={(e) => setinputdata(e.target.value)} name="" id="" placeholder='Add Text Here' />
            <i className="fa fa-plus add-btn" title='Add item' onClick={addItem}></i>
          </div>
          <div className='showItems'>
            {
              items.map((val, ind) => {
                return (

                  <div className="eachItem" key={ind}>
                    <h3>{val}</h3>
                    <i className="far fa-edit -alt add-btn" title='delete item' onClick={() => deleteItem(ind)}></i>
                  </div>
                )
              })
            }

          </div>
          <div className="showItems">
            <button className="btn effect04" data-sm-link-text="Remove All" onClick={removeAll}><span>Check List</span></button>
          </div>
        </div>
      </div>
    </>
  )
};

export default Todo;
