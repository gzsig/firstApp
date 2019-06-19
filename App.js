import React from 'react';
import AppNavigator from './src/navigator'
import {createAppContainer} from 'react-navigation'

const ApplicationNavigator = createAppContainer(AppNavigator);

export default function App() {
  return (
    <ApplicationNavigator />
  );
}
