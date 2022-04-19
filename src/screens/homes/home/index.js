import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  StatusBar,
  ScrollView,
  FlatList,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Images} from '../../../constants';
import CountDown from 'react-native-countdown-component';
import LinearGradient from 'react-native-linear-gradient';
import {Boxs, TextWithLine} from '../../../components';
import {Themes} from '../../../constants';

const Home = props => {
  return (
    <SafeAreaView style={styles.screenContainer}>
      <StatusBar backgroundColor={'#F8F8F8'} barStyle="dark-content" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.Header}>
          <View style={styles.Headerpart1}>
            <TouchableOpacity
              style={styles.Headerpart1Content1}
              activeOpacity={0.8}>
              <Image
                source={Images.Pictures.drawerLogo}
                style={styles.Headerpart1Content2}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.Headerpart2}>
            <View>
              <Image
                source={Images.Pictures.loginLogo}
                style={styles.Headerpart2Content1}
                resizeMode="contain"
              />
            </View>
            <Text style={styles.Headerpart2Content2}>By</Text>
            <View>
              <Image
                source={Images.Pictures.homeHeaderText}
                style={styles.Headerpart2Content3}
                resizeMode="contain"
              />
            </View>
          </View>

          <View style={styles.Headerpart3}>
            <TouchableOpacity
              style={styles.Headerpart3Content1}
              activeOpacity={0.8}>
              <Image
                source={Images.Pictures.notificationLogo}
                style={styles.Headerpart3Content2}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.Headerpart3Content3}
              activeOpacity={0.8}>
              <Image
                source={Images.Pictures.profile1}
                style={styles.Headerpart3Content3_1}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            width: '90%',
            height: '100%',
            alignSelf: 'center',
          }}>
          <LinearGradient
            colors={['#650E0D', '#CA1C1A']}
            style={{
              width: '100%',
              borderRadius: 20,
              backgroundColor: '#AF0010',
              alignSelf: 'center',
              height: 65,
              elevation: 5,
            }}>
            <CountDown
              size={25}
              until={1000}
              onFinish={() => console.log('finished')}
              digitStyle={{}}
              digitTxtStyle={{color: 'white'}}
              // timeLabelStyle={{color: 'red', fontWeight: 'bold'}}
              separatorStyle={{color: '#AF0010'}}
              timeToShow={['D', 'H', 'M', 'S']}
              timeLabels={{d: 'Days', h: 'Hours', m: 'Minutes', s: 'Seconds'}}
              timeLabelStyle={{
                color: 'white',
                position: 'absolute',
                bottom: 0,
                fontSize: 10,
                color: '#ffffffff',
                opacity: 0.5,
              }}
              showSeparator
            />
          </LinearGradient>

          <View style={{width: '100%', marginTop: 20}}>
            <TextWithLine left={0} text="Featured Deals" text2="View All" />
          </View>
          <View
            style={{
              width: '100%',
              marginTop: 20,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              data={[
                {color: Themes.boxColors.blueLite, text: 'New'},
                {color: Themes.boxColors.greenLite},
                {color: Themes.boxColors.grayLite},
              ]}
              horizontal={true}
              renderItem={({item}) => {
                return (
                  <Boxs Bgcolor={item.color} marginRight={4} text={item.text} />
                );
              }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  screenContainer: {flex: 1, backgroundColor: '#F8F8F8'},
  Header: {
    width: '90%',
    alignSelf: 'center',
    height: 120,

    marginTop: 25,
    flexDirection: 'row',
  },

  Headerpart1: {
    width: '16%',

    height: '36%',
  },
  Headerpart2: {
    width: '55%',

    height: '60%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  Headerpart3: {
    width: '25%',
    height: '36%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  Headerpart1Content1: {width: 50, height: 50},
  Headerpart1Content2: {width: '100%', height: '100%'},
  Headerpart2Content1: {width: 108, height: 37},
  Headerpart2Content2: {fontSize: 14, color: '#030303', fontWeight: 'bold'},
  Headerpart2Content3: {width: 81, height: 41},
  Headerpart3Content1: {
    marginRight: 10,
    width: 21,
    height: 29,
  },
  Headerpart3Content2: {width: '100%', height: '100%'},
  Headerpart3Content3: {
    width: 50,
    height: 50,
  },
  Headerpart3Content3_1: {width: '100%', height: '100%'},
});
