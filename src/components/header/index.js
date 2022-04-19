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
}) => {
  return (
    <View
      style={{
        width: '90%',
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
  );
};

export {Header};

const styles = StyleSheet.create({});
