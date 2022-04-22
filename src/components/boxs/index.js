import {StyleSheet, TouchableOpacity, View, Text, Image} from 'react-native';
import React from 'react';
import {Item} from 'native-base';
import {Images} from '../../constants/images';
import {Themes} from '../../constants';

const Boxs = ({
  borderRadius,
  Bgcolor,
  alignItems,
  justifyContent,
  fontSize,
  backgroundColor,
  amount,
  text,
  icon,
  width,
  height,
  marginRight,
  marginBottom,
  marginLeft,
  marginTop,
  itemImg,
  imgWidth,
  imgHeight,
  borderradius,
  elevation,
  StockNewOld,
  DealCategories,
  FeaturedDeals,
  itemName,
}) => {
  return (
    <>
      <View style={{alignItems: 'center', height: 220, flexWrap: 'wrap'}}>
        <TouchableOpacity
          style={{
            width: width || 155,
            height: height || 181,
            borderRadius: borderradius || 30,
            alignItems: alignItems || 'center',
            justifyContent: justifyContent || 'center',
            backgroundColor: Bgcolor || 'white',
            marginTop: marginTop || 0,
            marginBottom: marginBottom || 0,
            marginLeft: marginLeft || 0,
            marginRight: marginRight || 0,
            elevation: elevation || 0,
            overflow: 'visible',
            position: 'relative',
          }}
          activeOpacity={0.9}>
          {FeaturedDeals && (
            <>
              <View
                style={{
                  width: '90%',
                  alignSelf: 'center',
                  flexDirection: 'row',
                  marginTop: 10,
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <View
                  style={{
                    width: '30%',
                    height: 20,
                    backgroundColor: 'gray',
                    opacity: 0.8,
                    borderRadius: 50,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  opacity={0.4}>
                  <Text style={{fontSize: 12, color: '#030303'}}>{text}</Text>
                </View>

                <View style={{width: 31, height: 31}}>
                  <Image
                    resizeMode="contain"
                    source={icon}
                    style={{width: '100%', height: '100%'}}
                  />
                </View>
              </View>
              <View style={{height: 150}}>
                <View
                  style={{
                    width: '90%',
                    alignSelf: 'center',
                    height: 125,
                    alignItems: 'center',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      color: Themes.textColors.primaryText,
                      fontSize: 25,
                      fontWeight: 'bold',
                    }}>
                    {amount}
                  </Text>
                  <View style={{}}>
                    <Image
                      resizeMode="contain"
                      source={itemImg}
                      style={{
                        width: imgWidth || 97,
                        height: imgHeight || '100%',
                      }}
                    />
                  </View>
                </View>
              </View>
            </>
          )}

          {DealCategories && (
            <View
              style={{
                width: 196,
                height: 196,
              }}>
              <Image
                resizeMode="contain"
                source={Images.Pictures.headPhone}
                style={{
                  height: 196,
                  width: 196,
                }}
              />
            </View>
          )}
        </TouchableOpacity>
        <View style={{position: 'absolute', bottom: 6}}>
          <Text style={{fontSize: 16, color: 'black'}}>{itemName}</Text>
        </View>
      </View>
    </>
  );
};

export {Boxs};
