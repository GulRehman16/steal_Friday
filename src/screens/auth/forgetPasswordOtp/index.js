import React from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
  View,
} from 'react-native';
import {Header} from '../../../components';
import OTPInputView from '@twotalltotems/react-native-otp-input';

const ForgetPasswordOtp = props => {
  return (
    <SafeAreaView style={styles.screenContainer}>
      <StatusBar backgroundColor={'#F8F8F8'} barStyle="dark-content" />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.mainBody}>
          <Header
            headerText
            marginLeft={33}
            imageHeight={51}
            imageWidth={200}
          />
          <View style={styles.HeaderText}>
            <Text style={{fontSize: 14, color: '#707070', textAlign: 'center'}}>
              Please enter the 6 digits code sent to you registered email
              address ab***@gmail.com
            </Text>
          </View>
          <OTPInputView
            style={{width: '80%', height: 200}}
            pinCount={6}
            autoFocusOnLoad={false}
            codeInputFieldStyle={styles.underlineStyleBase}
            codeInputHighlightStyle={styles.underlineStyleHighLighted}
            onCodeFilled={code => {
              console.log(`Code is ${code}, you are good to go!`);
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ForgetPasswordOtp;

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
    alignItems: 'center',
    justifyContent: 'center',
  },
  HeaderText: {
    width: '90%',
    height: 87,
    alignItems: 'center',
    justifyContent: 'center',
  },
  borderStyleBase: {
    width: 38,
    height: 37,
  },

  borderStyleHighLighted: {
    borderColor: '#03DAC6',
  },

  underlineStyleBase: {
    width: 38,
    height: 37,
    borderWidth: 1,
    elevation: 5,
    backgroundColor: 'white',
    borderBottomWidth: 1,
  },

  underlineStyleHighLighted: {
    borderColor: '#03DAC6',
  },
});
