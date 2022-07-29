import React, { useState } from 'react';
import { Data } from './data';
export default function Students1() {
  const [AllData, setAllData] = useState(Data);

  const [name, setName] = useState('');
  const [rollNo, setRollNo] = useState('');
  const [batch, setBatch] = useState('');
  const [class1, setClass] = useState('');
  const [index, setIndex] = useState('');
  const [flag, setFlag] = useState(false);
  const ctaSubmitHandler = () => {
    if (name === '' || rollNo === '' || batch === '' || class1 === '') {
      alert('Please fill all the fields');
    } else {
      const objData = {
        name: name,
        rollno: rollNo,
        batch: batch,
        class: class1,
      };
      setAllData([...AllData, objData]);
      setName('');
      setRollNo('');
      setBatch('');
      setClass('');
      alert('Data added successfully');
    }
  };

  const ctaGetUpdateValue = (item, i) => {
    setIndex(i);
    setName(item.name);
    setRollNo(item.rollno);
    setBatch(item.batch);
    setClass(item.class);
    setFlag(true);
  };

  const ctaUpdateHandler = () => {
    if (name === '' || rollNo === '' || batch === '' || class1 === '') {
      alert('Please fill all the fields');
    } else {
      const objData = {
        name: name,
        rollno: rollNo,
        batch: batch,
        class: class1,
      };
      let UpdatedData = AllData.map((item, i) => {
        if (index === i) {
          return objData;
        } else {
          return item;
        }
      });
      setAllData([...UpdatedData]);
      setName('');
      setRollNo('');
      setBatch('');
      setClass('');
      setFlag(false);
      alert('Data Updated');
    }
  };

  const ctaDeletehandler = (i) => {
    const newValue = AllData.filter((item, index) => {
      if (i !== index) {
        return item;
      }
    });
    setAllData([...newValue]);
    alert('Deleted Successfully');
  };
  return (
    <div style={{ marginTop: 40 }}>
      <input
        type='text'
        placeholder='Name'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type='text'
        placeholder='rollNo'
        value={rollNo}
        onChange={(e) => setRollNo(e.target.value)}
      />
      <input
        type='text'
        placeholder='batch'
        value={batch}
        onChange={(e) => setBatch(e.target.value)}
      />
      <input
        type='text'
        placeholder='class'
        value={class1}
        onChange={(e) => setClass(e.target.value)}
      />
      {flag ? (
        <button onClick={ctaUpdateHandler}>Update Field</button>
      ) : (
        <input type='submit' onClick={ctaSubmitHandler} />
      )}

      <center>
        <table style={{ marginTop: 40 }}>
          <tr>
            <th>index</th>
            <th>name</th>
            <th>rollno</th>
            <th>batch</th>
            <th>class</th>
          </tr>
          {AllData.map((item, i) => {
            return (
              <>
                <tr key={i}>
                  <td>{i}</td>
                  <td>{item.name}</td>
                  <td>{item.rollno}</td>
                  <td>{item.batch}</td>
                  <td>{item.class}</td>
                  <td>
                    <button onClick={() => ctaGetUpdateValue(item, i)}>
                      update
                    </button>
                  </td>
                  <td>
                    <button onClick={() => ctaDeletehandler(i)}>delete</button>
                  </td>
                </tr>
              </>
            );
          })}
        </table>
      </center>
    </div>
  );
}
