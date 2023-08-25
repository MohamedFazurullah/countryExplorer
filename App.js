import React, {FC} from 'react';
import {StatusBar} from 'react-native';
import {ThemeProvider} from './screens/ThemeContext';
import AppContent from './screens/AppContent';
import {Provider} from 'react-redux';
import store from './redux/store/store';

const App: FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <StatusBar barStyle="dark-content" />
        <AppContent />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
