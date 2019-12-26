import React from 'react';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';
import {ThemeProvider} from 'react-native-elements';
import reducers from './src/reducers/';

import Navigation from './src/navigation';

const theme = {
  colors: {
    // primary: 'red',
  },
  Button: {
    raised: true,
    // titleStyle: {
    //   color: 'blue',
    // },
  },
};
const store = createStore(reducers, applyMiddleware(logger));

const AppContainer = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Navigation />
    </ThemeProvider>
  </Provider>
);
export default AppContainer;
