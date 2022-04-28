import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Icon, Item} from 'native-base';
import {Themes, Images} from './../../../constants';
import {Header, FormInput, AppButton} from '../../../components';

const ChangePassword = props => {
  const [userInfo, setUserInfo] = useState({
    email: '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const [error, setError] = useState();

  const [state, setState] = useState({
    focus: false,
    secureText1: true,
    secureText2: true,
    secureText3: true,
  });

  const showToast = text => {
    Toast.show({
      type: 'error',
      text2: text,
      visibilityTime: 4000,
      topOffset: 15,
    });
  };

  return (
    <SafeAreaView style={styles.screenContainer}>
      <StatusBar backgroundColor={'#F8F8F8'} barStyle="dark-content" />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.mainBody}>
          <View style={{marginTop: 55}}>
            <Header
              headerText
              leftIcon
              screenName
              screenText={'Change Password'}
              marginLeft={33}
              leftIconProps={() => {
                props.navigation.goBack();
              }}
            />
          </View>

          <View
            style={{
              width: '100%',
              marginTop: 70,
              alignItems: 'center',
            }}>
            <View
              style={{
                elevation: 5,
                backgroundColor: 'white',
                marginVertical: 28,
                borderColor:
                  state.focus === 'currentPassword' ? '#CD1C1B' : null,
                borderWidth: state.focus === 'currentPassword' ? 1 : 0,
                borderRadius: 20,
              }}>
              <FormInput
                value={userInfo.currentPassword}
                onChangeText={value =>
                  setUserInfo({...userInfo, currentPassword: value})
                }
                iconL
                secureText={state.secureText1}
                iconLName="lock"
                iconLType="Feather"
                iconR
                iconRName={state.secureText1 ? 'eye-with-line' : 'eye'}
                iconRType="Entypo"
                onPressR={() =>
                  setState({...state, secureText1: !state.secureText1})
                }
                placeHolder="Enter Current Password"
                onFocus={() => setState({...state, focus: 'currentPassword'})}
                onBlur={() => setState({...state, focus: ''})}
              />
            </View>

            <View
              style={{
                elevation: 5,
                backgroundColor: 'white',
                marginVertical: 28,
                borderColor:
                  state.focus === 'Enter New Password' ? '#CD1C1B' : null,
                borderWidth: state.focus === 'Enter New Password' ? 1 : 0,
                borderRadius: 20,
              }}>
              <FormInput
                value={userInfo.newPassword}
                onChangeText={value =>
                  setUserInfo({...userInfo, newPassword: value})
                }
                iconL
                secureText={state.secureText2}
                iconLName="lock"
                iconLType="Feather"
                iconR
                iconRName={state.secureText2 ? 'eye-with-line' : 'eye'}
                iconRType="Entypo"
                onPressR={() =>
                  setState({...state, secureText2: !state.secureText2})
                }
                placeHolder="Enter New Password"
                onFocus={() =>
                  setState({...state, focus: 'Enter New Password'})
                }
                onBlur={() => setState({...state, focus: ''})}
              />
            </View>

            <View
              style={{
                elevation: 5,
                backgroundColor: 'white',
                marginVertical: 28,
                borderColor:
                  state.focus === 'Confirm Password' ? '#CD1C1B' : null,
                borderWidth: state.focus === 'Confirm Password' ? 1 : 0,
                borderRadius: 20,
              }}>
              <FormInput
                value={userInfo.confirmPassword}
                onChangeText={value =>
                  setUserInfo({...userInfo, confirmPassword: value})
                }
                iconL
                secureText={state.secureText3}
                iconLName="lock"
                iconLType="Feather"
                iconR
                iconRName={state.secureText3 ? 'eye-with-line' : 'eye'}
                iconRType="Entypo"
                onPressR={() =>
                  setState({...state, secureText3: !state.secureText3})
                }
                placeHolder="Confirm Password"
                onFocus={() => setState({...state, focus: 'Confirm Password'})}
                onBlur={() => setState({...state, focus: ''})}
              />
            </View>

            <View
              style={{
                width: '60%',
                alignSelf: 'center',
                marginTop: 35,
              }}>
              <View
                style={{
                  paddingVertical: 20,
                  width: '100%',
                  alignItems: 'center',
                }}>
                <AppButton btnWidth={180} label="Update" onPress={() => {}} />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ChangePassword;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  mainBody: {
    width: '90%',
    height: '100%',
    alignSelf: 'center',
    paddingBottom: 30,
  },
  loginBtn: {
    width: '100%',
    height: 43,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});