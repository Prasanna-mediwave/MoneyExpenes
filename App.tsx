import React from 'react';
import './nativewind-output';
import {NavigationContainer} from '@react-navigation/native';
import Routing from './src/Navigation/Routing';

export default function App() {
  return (
    <NavigationContainer>
      <Routing />
    </NavigationContainer>
  );
}
