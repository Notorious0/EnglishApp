import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './HomeScreen';
import ListScreen from './ListScreen';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Store, persistor } from './Store';
import AboutScreen from './AboutScreen';  


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <Provider store={Store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Drawer.Navigator initialRouteName="Home" screenOptions={{
            drawerStyle: {
              backgroundColor: '#4b0082', // Customize drawer background color
            },
            drawerActiveTintColor: 'white', // Customize active item text color
            drawerInactiveTintColor: 'navy', // Customize inactive item text color
            drawerActiveBackgroundColor: 'purple', // Customize active item background color
            drawerInactiveBackgroundColor: 'orange', // Customize inactive item background color
            headerStyle: {
              backgroundColor: '#571089', // Header background color
            },
            headerTintColor: '#fff', // Header text color
            headerTitleStyle: {
              fontWeight: 'bold', // Header text style
            },
            gestureEnabled: true,
            drawerType: 'slide',
          }}>
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="List" component={ListScreen} />
            <Drawer.Screen name="About" component={AboutScreen} />
          </Drawer.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}















