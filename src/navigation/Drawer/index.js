import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { CustomDrawer } from '../../components';
import { Homes, Statics } from '../stack';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: 'transparent',

          // width: Dimensions.get('window').width / 1.5,
        },
      }}
      drawerContent={props => <CustomDrawer {...props} />}>
      {/* <Drawer.Screen
        name="Homes"
        component={Homes}
        options={{headerShown: false}}
      /> */}

      <Drawer.Screen
        name="home"
        component={Homes}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
}

export default MyDrawer;
