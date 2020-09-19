import React, { useState } from 'react';

const Home = () => {
  const [ courseModules, setCourseModules ] = useState([
    { id: 1, title: "First", description: "lorem1", active: false },
    { id: 2, title: "Second", description: "lorem2", active: false },
    { id: 3, title: "Third", description: "lorem3", active: false },
    { id: 4, title: "Forth", description: "lorem4", active: false },
  ]);

  return (
    <div>This is our home component</div>
  );
}

export default Home;