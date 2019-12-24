import React from 'react';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';
import {ThemeProvider} from 'react-native-elements';
import NewPostScreen from './src/NewPostScreen';
import reducers from './src/reducers/';
import LoginScreen from './src/LoginScreen';

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
      <LoginScreen />
    </ThemeProvider>
  </Provider>
);
export default AppContainer;
