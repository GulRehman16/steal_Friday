import React, { useState } from 'react';
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
import { Icon, Item } from 'native-base';
import { Themes, Images } from './../../../constants';
import { Header, FormInput, AppButton, Overlays } from '../../../components';

const ChangePassword = props => {
  const [visible, setVisible] = useState(false);
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
    <>
      <SafeAreaView style={styles.screenContainer}>
        <StatusBar backgroundColor={'#F8F8F8'} barStyle="dark-content" />
        <ScrollView
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1 }}>
          <View style={styles.mainBody}>
            <View style={{ marginTop: 55 }}>
              <Header
                headerText1
                leftIcon
                screenName1
                screenText1={'Change Password'}
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
                  marginVertical: 8,
                  borderColor:
                    state.focus === 'confirmPassword' ? '#CD1C1B' : null,
                  borderWidth: state.focus === 'confirmPassword' ? 1 : 0,
                  borderRadius: 20,
                  width: '100%'
                }}>
                <FormInput
                  value={state.confirmPassword}
                  onChangeText={value =>
                    setState({ ...state, confirmPassword: value })
                  }
                  iconL
                  secureText={state.secureText2}
                  iconLName="lock"
                  iconLType="Feather"
                  iconR
                  iconRName={state.secureText2 ? 'eye-with-line' : 'eye'}
                  iconRType="Entypo"
                  onPressR={() =>
                    setState({ ...state, secureText2: !state.secureText2 })
                  }
                  placeHolder="Current Password"
                  onFocus={() => setState({ ...state, focus: 'confirmPassword' })}
                  onBlur={() => setState({ ...state, focus: '' })}
                />
              </View>

              <View
                style={{
                  elevation: 5,
                  backgroundColor: 'white',
                  marginVertical: 8,
                  borderColor:
                    state.focus === 'confirmPassword' ? '#CD1C1B' : null,
                  borderWidth: state.focus === 'confirmPassword' ? 1 : 0,
                  borderRadius: 20,
                  width: '100%'
                }}>
                <FormInput
                  value={state.confirmPassword}
                  onChangeText={value =>
                    setState({ ...state, confirmPassword: value })
                  }
                  iconL
                  secureText={state.secureText2}
                  iconLName="lock"
                  iconLType="Feather"
                  iconR
                  iconRName={state.secureText2 ? 'eye-with-line' : 'eye'}
                  iconRType="Entypo"
                  onPressR={() =>
                    setState({ ...state, secureText2: !state.secureText2 })
                  }
                  placeHolder="New Password"
                  onFocus={() => setState({ ...state, focus: 'confirmPassword' })}
                  onBlur={() => setState({ ...state, focus: '' })}
                />
              </View>

              <View
                style={{
                  elevation: 5,
                  backgroundColor: 'white',
                  marginVertical: 8,
                  borderColor:
                    state.focus === 'confirmPassword' ? '#CD1C1B' : null,
                  borderWidth: state.focus === 'confirmPassword' ? 1 : 0,
                  borderRadius: 20,
                  width: '100%'
                }}>
                <FormInput
                  value={state.confirmPassword}
                  onChangeText={value =>
                    setState({ ...state, confirmPassword: value })
                  }
                  iconL
                  secureText={state.secureText2}
                  iconLName="lock"
                  iconLType="Feather"
                  iconR
                  iconRName={state.secureText2 ? 'eye-with-line' : 'eye'}
                  iconRType="Entypo"
                  onPressR={() =>
                    setState({ ...state, secureText2: !state.secureText2 })
                  }
                  placeHolder="Confirm Password"
                  onFocus={() => setState({ ...state, focus: 'confirmPassword' })}
                  onBlur={() => setState({ ...state, focus: '' })}
                />
              </View>

              <View
                style={{
                  width: '60%',
                  alignSelf: 'center',
                  marginTop: 10,
                }}>
                <View
                  style={{
                    paddingVertical: 20,
                    width: '100%',
                    alignItems: 'center',
                  }}>
                  <AppButton
                    btnWidth={180}
                    label="Update" text
                    onPress={() => setVisible(!visible)}
                  />
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
      <Overlays popupcontent btn btnes TexView label1="Password Updated!"
        navigation={props.navigation}
        labletext="Close" visible={visible}
        toggleOverlay={() => setVisible(false)} />
    </>
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
