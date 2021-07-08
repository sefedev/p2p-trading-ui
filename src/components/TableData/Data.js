import React, { useState, useEffect } from 'react'
import TableData from './TableData'

const Data = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const dataFromServer = await fetchData();
      setData(dataFromServer);
      ;
    };

    getData();
  }, [data]);

  const fetchData = async () => {
    const res = await fetch("http://localhost:5000/posts");
    const data = await res.json();
    return data;
  };

    return (
        <>
          {data.map((dd) => (
            <TableData key={dd.id} data={dd}/>
          ))}  
        </>
    )
}

export default Data;