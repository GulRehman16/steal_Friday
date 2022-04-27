import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import splash from '../../screens/auth/splash';
import login from '../../screens/auth/login';
import home from '../../screens/homes/home';
import signup from '../../screens/auth/signup';
import mainAuth from '../../screens/auth/mainAuth';
import MyTabs from '../bottomTab';
import ContactUs from '../../screens/auth/contactUs';
import MyDrawer from '../Drawer';
import Notification from '../../screens/homes/notification';
import ActiveDeals from '../../screens/homes/activeDeals';
import ProfileSettings from '../../screens/homes/profileSettings';
import ProfileEdit from '../../screens/homes/profileEdit';

const Stack = createNativeStackNavigator();

const Auth = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="splash"
        component={splash}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="mainAuth"
        component={mainAuth}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="login"
        component={login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="signup"
        component={signup}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="contactUs"
        component={ContactUs}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export const Homes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="notification"
        component={Notification}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="activeDeals"
        component={ActiveDeals}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="profileSettings"
        component={ProfileSettings}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="profileEdit"
        component={ProfileEdit}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Auth">
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Homes"
          component={Homes}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MyTabs"
          component={MyTabs}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MyDrawer"
          component={MyDrawer}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
