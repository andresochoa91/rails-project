import React, { useState, useEffect } from 'react';
import axios from "axios";


const Home = () => {
  const [ courseModules, setCourseModules ] = useState([]);

  useEffect(() => {
    axios.get('./episodes.json')
    .then(data => {
      let res = [];
      console.log(data.data.data)
      data.data.data.map(d => {
        const { id, title, description} = d
        res.push({ id, title, description, active: false });
      })
      setCourseModules(res);
    })
    .catch(err => console.error(err));
  }, [])

  return (
    <div>
      {
        courseModules.length 
        ? 
        courseModules.map((course) => 
          <div key={ course.title }>
            <h2>{ course.id }</h2>
            <h3>{ course.title }</h3>
            <h4>{ course.description }</h4>
            <h4>{ course.active }</h4>
          </div>
        )
        :
        <h2>Shit</h2>
      }
    </div>
  );
}

export default Home;