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
import React, {useState, useRef} from 'react';
import {Header, NotificationBox, TextWithLine, Boxs} from '../../../components';
import {Themes} from '../../../constants';
const getWidth = () => {
  return Dimensions.get('window').width / 3;
};

const ActiveDeals = props => {
  const data = [
    {
      color: Themes.boxColors.grayLite,
      text: 'old',
      img: Images.Icon.grayStar,
      itemImg: Images.Pictures.tShirt2,
      itemName: 'Gym T-Shirt',
      ammount: ' $15.00',
      imgW: 65,
      imgH: 100,
    },
    {
      color: Themes.boxColors.purpulLite,
      text: 'old',
      img: Images.Icon.purpleStar,
      itemImg: Images.Pictures.purpleShoes,
      ammount: ' $15.00',
      itemName: 'Nike Collection',
      imgW: 75,
      imgH: 80,
    },
    {
      color: Themes.boxColors.blueLite,
      text: 'New',
      itemName: 'Beats Up HeadSet',
      img: Images.Icon.star1,
      itemImg: Images.Pictures.headPhone,
      ammount: ' $15.00',
      imgW: 65,
      imgH: 65,
    },
    {
      img: Images.Icon.greenStar,
      itemImg: Images.Pictures.greenShoes,
      color: Themes.boxColors.greenLite,
      text: 'New',
      ammount: ' $15.00',
      itemName: 'Nike Collection',
      imgW: 60,
      imgH: 65,
    },

    {
      color: Themes.boxColors.grayLite,
      text: 'old',
      img: Images.Icon.grayStar,
      itemName: 'Gym T-Shirt',
      itemImg: Images.Pictures.tShirt1,
      ammount: ' $15.00',
      imgW: 70,
      imgH: 100,
    },
  ];

  const data2 = [
    {
      color: Themes.boxColors.grayLite,
      text: 'old',
      img: Images.Icon.grayStar,
      itemImg: Images.Pictures.tShirt2,
      itemName: 'Gym T-Shirt',
      ammount: ' $15.00',
      imgW: 65,
      imgH: 100,
    },
    {
      color: Themes.boxColors.purpulLite,
      text: 'old',
      img: Images.Icon.purpleStar,
      itemImg: Images.Pictures.purpleShoes,
      ammount: ' $15.00',
      itemName: 'Nike Collection',
      imgW: 75,
      imgH: 80,
    },
    {
      color: Themes.boxColors.blueLite,
      text: 'New',
      itemName: 'Beats Up HeadSet',
      img: Images.Icon.star1,
      itemImg: Images.Pictures.headPhone,
      ammount: ' $15.00',
      imgW: 65,
      imgH: 65,
    },
    {
      img: Images.Icon.greenStar,
      itemImg: Images.Pictures.greenShoes,
      color: Themes.boxColors.greenLite,
      text: 'New',
      ammount: ' $15.00',
      itemName: 'Nike Collection',
      imgW: 60,
      imgH: 65,
    },

    {
      color: Themes.boxColors.redLite,
      text: 'old',
      img: Images.Icon.grayStar,
      itemName: 'Gym T-Shirt',
      itemImg: Images.Pictures.airpods,
      ammount: ' $15.00',
      imgW: 70,
      imgH: 100,
    },

    {
      color: Themes.boxColors.grayLite,
      text: 'old',
      img: Images.Icon.grayStar,
      itemName: 'Gym T-Shirt',
      itemImg: Images.Pictures.tShirt1,
      ammount: ' $15.00',
      imgW: 70,
      imgH: 100,
    },
  ];
  const toggleAnim = useRef(new Animated.Value(0)).current;
  const [width, setWidth] = useState(0);

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
              justifyContent: 'space-evenly',
              marginTop: 20,
              position: 'relative',
            }}>
            <Animated.View
              style={{
                width: width,
                height: 23,
                position: 'absolute',
                borderBottomWidth: 3.5,
                borderBottomColor: '#CD1C1B',
                transform: [{translateX: toggleAnim}],
              }}
            />

            <TouchableOpacity
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: '33.3%',
                height: 23,
              }}
              onPress={() => {
                setWidth(68);
                Animated.timing(toggleAnim, {
                  toValue: 0,
                  duration: 400,
                  useNativeDriver: true,
                }).start();
              }}>
              <Text style={{color: '#000000', fontSize: 16}}>Clothing</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: '33.3%',
                height: 23,
              }}
              onPress={() => {
                setWidth(55);
                Animated.timing(toggleAnim, {
                  toValue: getWidth() / 1.7,
                  duration: 400,
                  useNativeDriver: true,
                }).start();
              }}>
              <Text style={{color: '#000000', fontSize: 16}}>Shoes</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: '33.3%',
                height: 23,

                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={() => {
                setWidth(100);
                Animated.timing(toggleAnim, {
                  toValue: '33.3%',
                  duration: 400,
                  useNativeDriver: true,
                }).start();
              }}>
              <Text style={{color: '#000000', fontSize: 16}}>Accessories</Text>
            </TouchableOpacity>
          </View>
          <View style={{width: '100%', marginTop: 20}}>
            <View style={styles.box4}>
              {data2.map((item, index) => {
                return (
                  <>
                    <Boxs
                      Bgcolor={item.color}
                      marginRight={10}
                      text={item.text}
                      icon={item.img}
                      itemImg={item.itemImg}
                      itemName={item.itemName}
                      amount={item.ammount}
                      imgHeight={item.imgH}
                      imgWidth={item.imgW}
                      StockNewOld
                      FeaturedDeals
                    />
                  </>
                );
              })}
            </View>
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
  box4: {
    flexDirection: 'row',
    marginLeft: -10,
    flexWrap: 'wrap',
    marginTop: 20,
    backgroundColor: '#F8F8F8',
  },
});
