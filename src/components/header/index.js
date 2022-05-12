import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Icon } from 'native-base';
import { Images } from '../../constants';

const Header = ({
  fontColor,
  viewHeight,
  width,
  fontSize,
  leftIcon,
  RightIcon,
  text,
  leftIconProps,
  headerText,
  screenName,
  screenText,
  marginLeft,
  imageHeight,
  imageWidth,

  IconColor,
  RICon,
  RICon2,

  textColor,
  lIconClr,

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
            style={{ position: 'absolute', left: 0 }}
            onPress={leftIconProps}>
            <Image
              source={Images.Pictures.left}

              style={{ width: 26, height: 26, color: IconColor || '#000' }}



            />
          </TouchableOpacity>
        )}

        {headerText && (
          <View>
            <Image
              source={Images.Pictures.loginLogo}
              style={{
                width: imageWidth || 108,
                height: imageHeight || 37,
                marginLeft: 50,
              }}
              resizeMode="contain"
            />
          </View>
        )}
      </View>
      {text && (
        <Text
          style={{
            alignSelf: 'center',
            fontSize: 20,
            color: 'white',
            marginTop: 20,
          }}>
          Checkout
        </Text>
      )}
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
      {RightIcon && (
        <TouchableOpacity
          activeOpacity={0.7}
          style={{ position: 'absolute', right: 0 }}
          onPress={leftIconProps}>
          {RICon && (
            <Image
              source={Images.Pictures.headericon1}
              style={{ width: 26, height: 26 }}
            />

          )}
          {RICon2 && (
            <Icon name='cross' type='Entypo' />

          )}

        </TouchableOpacity>
      )}
    </>
  );
};

export { Header };

const styles = StyleSheet.create({});
