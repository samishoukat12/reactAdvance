import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { endPoint } from './config/Config'
import Destruction from './destruction/Destruction';
import FormHandling from './formHandling/FormHandling';
import Students1 from './crud/students';
import CheckBox from './checkboxe/CheckBox';
import { Check } from './checkboxe/Check';

function App() {
  // const [storeData, setStoreData] = useState([]);
  // const [loading, setLoading] = useState(false)
  // const fetchApi = async () => {
  //   try {
  //     setLoading(true)
  //     const response = await axios.get(`${endPoint}/products?limit=5`)
  //     const filtering = response.data.filter((item) => item.category === "jewelery")
  //     setStoreData(filtering)
  //   }
  //   catch (error) {
  //     console.log(error)
  //   }
  //   finally {
  //     setLoading(false)
  //   }
  // }
  // console.log(storeData)
  // useEffect(() => {
  //   fetchApi()
  // }, [])

  return (
    <div className="App">
      {/* <Destruction/>
      <FormHandling/> */}
      {/* {
        loading &&
        <>
          {
            storeData.map((item) => {
              return (
                <p>{item.title}</p>
              )
            })
          }
        </>
      } */}
      <Check />
      {/* <Students1/> */}
    </div>
  );
}

export default App;
