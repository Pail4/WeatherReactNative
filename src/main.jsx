import React from 'react';
import ReactDOM from 'react-dom';
import './styles/style.css';
import App from './components/App';
import {View} from 'react-native/types';

ReactDOM.render(
  <React.StrictMode>
    <View className="content">
      <App />
    </View>
  </React.StrictMode>,
  document.getElementById('root'),
);
