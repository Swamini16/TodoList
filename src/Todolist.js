import React from 'react';
import { useState } from "react";

function Todolist() {
  const [activity, setActivity] = useState("");
  const [listData, setlistData] = useState([]);

  function addActivity() {
    setlistData((listData) => {
      const updatedList = [...listData, activity];
      console.log(updatedList);
      setActivity("");
      return updatedList;
    });
  }
  function remove(i) {
    const UpdateListData = listData.filter((elem, id) => {
      return i != id;
    });
    setlistData(UpdateListData);
  }

  function removeAll() {
    setlistData([]);
  }
  return (
    <>
      <div className="container">
        <div className="header">TODO LIST</div>
        <input type="text"
          placeholder="Add Activity"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
        />
        <button onClick={addActivity}>Add </button>
        <p className="list-heading">Here is your List :{")"}</p>
        {listData != [] &&
          listData.map((data, i) => {
            return (
              <>
                <p key={i}>
                  <div className='listData'>{data}</div>
                  <div className="btn-position">
                    <button onClick={() => remove(i)}>Remove</button>
                  </div>
                </p>
              </>
            );
          })}
        {listData.length >= 1 && (
          <button onClick={removeAll}>REMOVE ALL</button>
        )}
      </div>
    </>
  );
}

export default Todolist;
