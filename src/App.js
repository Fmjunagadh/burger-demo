import { Provider } from "react-redux";
import React, { useState, useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import { useOnClickOutside } from './hooks';
import { GlobalStyles } from './global';
import { theme } from './theme';
import { Burger, Menu } from './components';
import FocusLock from 'react-focus-lock';

import {Route, Switch} from 'react-router-dom';
import Screening from './containers/Screening';
import MyLocation from './containers/Location';
import Resources from './components/Menu/Resources';

import configureStore from "./store";

function App() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";

  useOnClickOutside(node, () => setOpen(false));

  return (
    <Provider store={configureStore}>

    
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <div ref={node}>
          <FocusLock disabled={!open}>
            <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
            <Menu open={open} setOpen={setOpen} id={menuId} />
          </FocusLock>
        </div>
        
        <div>
          <Switch>
          <Route exact path ="/" component={Menu}/>
          <Route path ="/Screening" component={Screening}/>
          <Route path ="/MyLocation" component={MyLocation}/>
          <Route path ="/Resources" component={Resources}/>
          </Switch>
        </div>
        
      </>
    </ThemeProvider>
    </Provider>
  );
}

export default App;
