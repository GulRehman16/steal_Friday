import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from 'native-base';
import home from '../../screens/homes/home';
import profile from '../../screens/homes/profile';
import settings from '../../screens/homes/settings';
import {TabBar} from '../../components';

const Tab = createBottomTabNavigator();

const MyTabs = props => {
  return (
    <Tab.Navigator tabBar={props => <TabBar {...props} />}>
      <Tab.Screen name="home" component={home} options={{headerShown: false}} />
      <Tab.Screen
        name="profile"
        component={profile}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="settings"
        component={settings}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export default MyTabs;
