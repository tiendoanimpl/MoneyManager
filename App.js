import React from 'react';
import {Provider} from 'react-native-paper';
import Screens from './src/screens/';

const App = () => {
  return (
    <Provider>
      <Screens />
    </Provider>
  );
};

export default App;
