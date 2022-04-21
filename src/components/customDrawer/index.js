import {Icon} from 'native-base';
import React, {useState} from 'react';
import {
  StatusBar,
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {FormInput, AppButton} from '../../components';
import {Images} from '../../constants';
import {Header} from '../../components';

const CustomDrawer = ({navigation}) => {
  const dashboardData = [
    {
      image: Images.Pictures.user,
      stack: 'Statics',
      text: 'Connections',
      rightText: '500',
      nav: 'connections',
    },
    {
      image: Images.Pictures.setting,
      text: 'Settings',
      rightText: '',
      nav: 'settings',
      stack: 'Statics',
    },

    {
      image: Images.Pictures.fitness,
      text: 'Finesse Game',
      rightText: '',
      stack: 'MyTabs',
      nav: 'fitnessGame',
    },
    {
      stack: 'MyTabs',
      image: Images.Pictures.user,
      text: 'Chat Rooms',
      rightText: '',
      nav: 'chatRoom',
    },
    {
      image: Images.Pictures.lesbian,
      text: 'All Messages',
      rightText: '',
      nav: 'messeges',
      stack: 'MyTabs',
    },
    {
      image: Images.Pictures.lesbian,
      text: 'Saved',
      rightText: '9',
      nav: 'savedPost',
      stack: 'Statics',
    },
    {
      image: Images.Pictures.lesbian,
      text: 'Contact Us',
      rightText: '',
      nav: 'contactUs',
      stack: 'Statics',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => navigation.closeDrawer()}
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: 'transparent',
        }}>
        <ImageBackground
          resizeMode="stretch"
          source={Images.Background.drawerBg}
          style={{
            width: '100%',
            height: '100%',
          }}>
          <View>
            <Header headerText />
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export {CustomDrawer};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
