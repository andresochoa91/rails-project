import React from 'react';
import { Button } from 'react-bootstrap';
import Home from './components/Home/Home';

const App = () => (
  <div>
    <div>Hello user</div>
    <Button variant="primary">Hello bro, what's up</Button>
    <Home />
  </div>
)

export default App;
