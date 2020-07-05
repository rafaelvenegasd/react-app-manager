import React from 'react';
import {Provider} from 'react-redux';
import store from './store'

const App = () => {
  <Provider store={store}> 
    <main>
      <Players />
      <Selected />
    </main>
  </Provider>
}

export default App;
