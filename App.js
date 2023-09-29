import {View, Text} from 'react-native';
import React from 'react';
import Home from './src/views/Home';
import Product from './src/views/Product';
import Profile from './src/views/Profile';
import Setting from './src/views/Setting';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
const Tab = createBottomTabNavigator();
import {Provider} from 'react-redux';
import Redux from './src/redux/store';
import Loading from './src/views/modal';

const App = () => {
  return (
    <Provider store={Redux.store}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Product" component={Product} />
          <Tab.Screen name="Profile" component={Loading} />
          <Tab.Screen name="Settings" component={Setting} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
