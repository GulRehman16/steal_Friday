import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import React from 'react';
import {Item} from 'native-base';

const Boxs = ({
  borderRadius,
  Bgcolor,
  fontSize,
  text,
  icon,
  width,
  height,
  marginRight,
  marginBottom,
  marginLeft,
  marginTop,
}) => {
  return (
    <TouchableOpacity
      style={{
        width: 160,
        height: 181,
        backgroundColor: 'red',
        borderRadius: 30,
        backgroundColor: Bgcolor || 'violet',
        marginTop: marginTop || 0,
        marginBottom: marginBottom || 0,
        marginLeft: marginLeft || 0,
        marginRight: marginRight || 0,
        elevation: 2,
      }}
      activeOpacity={0.9}>
      <View
        style={{
          width: '90%',
          alignSelf: 'center',
          flexDirection: 'row',
          marginTop: 10,
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
          }}>
          <Text style={{fontSize: 12, color: 'black'}}>{text}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export {Boxs};
