import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import General from './Screens/General';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
      <General />
    </SafeAreaView>
  );
};

export default App;
