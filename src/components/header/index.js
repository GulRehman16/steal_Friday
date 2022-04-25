import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Icon} from 'native-base';
import {Images} from '../../constants';

const Header = ({
  fontColor,
  heightImage,
  viewHeight,
  width,
  fontSize,
  leftIcon,
  text,
  leftIconProps,
  headerText,
  screenName,
  screenText,
  marginLeft,
}) => {
  return (
    <>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {leftIcon && (
          <TouchableOpacity
            activeOpacity={0.7}
            style={{position: 'absolute', left: 0}}
            onPress={leftIconProps}>
            <Image
              source={Images.Pictures.left}
              style={{width: 26, height: 26}}
            />
          </TouchableOpacity>
        )}
        {headerText && (
          <View>
            <Image
              source={Images.Pictures.loginLogo}
              style={{width: 108, height: 37, marginLeft: 50}}
              resizeMode="contain"
            />
          </View>
        )}
      </View>
      {screenName && (
        <View
          style={{
            marginTop: 20,
            alignSelf: 'center',
            width: '100%',
            alignItems: 'center',
          }}>
          <Text
            style={{
              marginLeft: marginLeft || 0,
              fontWeight: '600',
              fontSize: 22,
              color: 'black',
            }}>
            {screenText}
          </Text>
        </View>
      )}
    </>
  );
};

export {Header};

const styles = StyleSheet.create({});
