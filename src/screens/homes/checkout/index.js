import React, {useState} from 'react';
import {CheckBox} from 'react-native-elements';
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';

import {
  SafeAreaView,
  StyleSheet,
  View,
  ScrollView,
  Text,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {Header, AppButton} from '../../../components';
import {Images} from '../../../constants';

const CheckOut = ({navigation}) => {
  const [state, setState] = useState({checked: false});
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar translucent={true} backgroundColor={'transparent'} />
      <ImageBackground source={Images.Background.bg} style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1}}>
          <View style={{marginTop: 45}}>
            <Header
              text
              leftIcon
              lIconClr={'#fff'}
              leftIconProps={() => {
                props.navigation.goBack();
              }}
            />
          </View>

          <View style={styles.body}>
            <View style={{width: '100%'}}>
              <ProgressSteps labelFontSize={12}>
                <ProgressStep label="Shipping Details">
                  <View style={{alignItems: 'center'}}>
                    <Text>This is the content within step 1!</Text>
                  </View>
                </ProgressStep>
                <ProgressStep label="Address">
                  <View style={{alignItems: 'center'}}>
                    <Text>This is the content within step 2!</Text>
                  </View>
                </ProgressStep>
                <ProgressStep label="Payments">
                  <View style={{alignItems: 'center'}}>
                    <Text>This is the content within step 3!</Text>
                  </View>
                </ProgressStep>
              </ProgressSteps>
            </View>

            <View
              style={{
                width: '100%',
                marginTop: 30,
              }}>
              <Text style={{color: 'white', fontSize: 16, fontWeight: '700'}}>
                Shipping Charges
              </Text>

              <View style={styles.select}>
                <Text style={{fontSize: 12, color: 'white'}}>
                  Standard Delivery $9.99{'\n'}Order will be delivered in 3- 5
                  Business Days.
                </Text>
                <CheckBox
                  onPress={() => {
                    setState({checked: !state.checked});
                  }}
                  center
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                  uncheckedColor="#1492E6"
                  checked={!state.checked}
                />
              </View>
              <View style={styles.select}>
                <Text style={{fontSize: 12, color: 'white'}}>
                  Express Delivery $15.9{'\n'}Order will be delivered in 2
                  Business Days.
                </Text>

                <CheckBox
                  onPress={() => {
                    setState({checked: !state.checked});
                  }}
                  center
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                  uncheckedColor="#1492E6"
                  checked={state.checked}
                />
              </View>
            </View>

            <View style={styles.mainBox}>
              <Text style={styles.mainBoxHead}>Summary</Text>
              <View
                style={{
                  height: '75%',
                  width: '100%',
                  justifyContent: 'space-evenly',
                }}>
                <View style={styles.box}>
                  <Text style={{fontSize: 16, color: 'black'}}>Price(2)</Text>
                  <Text style={{fontSize: 16, color: 'black'}}>$250.00</Text>
                </View>
                <View style={styles.box}>
                  <Text style={{fontSize: 16, color: 'black'}}>
                    Shipping Charges
                  </Text>
                  <Text style={{fontSize: 16, color: 'black'}}>$15.99</Text>
                </View>
                <View style={styles.box}>
                  <Text style={{fontSize: 16, color: 'black'}}>
                    Total Price
                  </Text>
                  <Text style={{fontSize: 16, color: 'black'}}>$265.99</Text>
                </View>
              </View>
            </View>
            <View
              style={{
                paddingVertical: 20,
                width: '100%',
                alignItems: 'center',
              }}>
              <AppButton btnWidth={180} label="Next" onPress={() => {}} />
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default CheckOut;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  body: {
    alignSelf: 'center',
    width: '100%',
    height: '100%',
  },
  select: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    justifyContent: 'space-between',
  },
  mainBox: {
    marginTop: 30,
    width: '100%',
    height: 218,
    backgroundColor: 'white',
    borderRadius: 40,
  },
  box: {
    alignSelf: 'center',
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  mainBoxHead: {
    fontSize: 20,
    color: 'black',
    alignSelf: 'center',
    fontWeight: '600',
    marginTop: 10,
  },
});
