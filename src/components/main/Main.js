import React, { useState } from 'react';
import { StyledComponent } from '../styles/styles';
import { Switch, AppBar, Toolbar } from '@material-ui/core';
import Fetch from './Fetch';
import Image from './Image';

const Main = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(prev => !prev);
  };
  return (
    <StyledComponent>
      <AppBar>
        <Toolbar>
          <Switch toggle={toggle} onChange={handleToggle} />
          {toggle ? <h1>Image Component</h1> : <h1>Fetch Component</h1>}
        </Toolbar>
      </AppBar>
      {toggle ? <Image /> : <Fetch />}
    </StyledComponent>
  );
};

export default Main;
