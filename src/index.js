import React from 'react';
import { StatusBar } from 'react-native';

import './config/ReactotronConfig';
import Routes from './routes';

export default function App() {
   return (
      <>
         <StatusBar barStyle="light-content" backgroundColor="#1565c0" />
         <Routes />
      </>
   );
}
