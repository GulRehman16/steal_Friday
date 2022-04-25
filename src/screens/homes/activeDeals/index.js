import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Animated,
  Dimensions,
} from 'react-native';
import {Images} from '../../../constants';
import React, {useRef} from 'react';
import {Header, NotificationBox, TextWithLine} from '../../../components';

const getWidth = () => {
  return Dimensions.get('window').width / 3;
};

const ActiveDeals = props => {
  const toggleAnim = useRef(new Animated.Value(0)).current;

  return (
    <SafeAreaView style={styles.screenContainer}>
      <StatusBar backgroundColor={'#F8F8F8'} barStyle="dark-content" />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.mainBody}>
          <View style={{marginTop: 25}}>
            <Header
              headerText
              leftIcon
              screenName
              marginLeft={35}
              screenText={'Active Deals'}
              leftIconProps={() => {
                props.navigation.goBack();
              }}
            />
          </View>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: 20,
              position: 'relative',
            }}>
            <Animated.View
              style={{
                width: getWidth(),
                height: 23,
                position: 'absolute',
                borderBottomWidth: 3.5,
                borderBottomColor: '#CD1C1B',
                transform: [{translateX: toggleAnim}],
              }}
            />

            <TouchableOpacity
              style={{width: getWidth(), height: 23}}
              onPress={() => {
                Animated.timing(toggleAnim, {
                  toValue: 0,
                  duration: 400,
                  useNativeDriver: true,
                }).start();
              }}>
              <Text style={{color: '#000000', fontSize: 16}}>Clothing</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{width: getWidth(), height: 23}}
              onPress={() => {
                Animated.timing(toggleAnim, {
                  toValue: getWidth() / 2,
                  duration: 400,
                  useNativeDriver: true,
                }).start();
              }}>
              <Text style={{color: '#000000', fontSize: 16}}>Shoes</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{width: getWidth(), height: 23}}
              onPress={() => {
                Animated.timing(toggleAnim, {
                  toValue: getWidth() * 2,
                  duration: 400,
                  useNativeDriver: true,
                }).start();
              }}>
              <Text style={{color: '#000000', fontSize: 16}}>Accessories</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ActiveDeals;

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
});
