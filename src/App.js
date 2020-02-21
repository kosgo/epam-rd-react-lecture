import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from './core/configureStore';
import Homepage from './featues/homepage';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Homepage />
      </div>
    </Provider>
  );
}

export default App;
