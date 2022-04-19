import {Icon} from 'native-base';
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const TextWithLine = ({
  text,
  text2,
  left,
  right,
  fontSize,
  fontWeight,
  lineColor,
}) => {
  return (
    <>
      <View
        style={{
          width: '100%',
          height: 25,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 10,
          flexDirection: 'row',
        }}>
        <View
          style={{
            width: '100%',
            height: 2,
            backgroundColor: lineColor || 'grey',
            alignItems: 'center',
          }}>
          <View
            style={{
              position: 'absolute',
              top: -13,
              height: 25,
              left: left,
              right: right,
              overflow: 'hidden',
              backgroundColor: '#F8F8F8',
              paddingHorizontal: 10,
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: fontSize || 16,
                color: '#030303',
                fontWeight: fontWeight || '600',
              }}>
              {text}
            </Text>
          </View>
          <TouchableOpacity
            style={{
              position: 'absolute',
              top: -13,
              height: 25,
              right: 0,
              overflow: 'hidden',
              backgroundColor: '#F8F8F8',
              paddingHorizontal: 10,
              flexDirection: 'row',
              alignItems: 'center',
            }}
            activeOpacity={0.9}>
            <Text
              style={{
                fontSize: fontSize || 14,
                color: '#CD1C1B',
                fontWeight: fontWeight || 'bold',
              }}>
              {text2}
            </Text>

            <Icon
              name="arrow-right"
              type="FontAwesome"
              style={{
                color: '#CD1C1B',
                fontWeight: 'bold',
                fontSize: 15,
                marginLeft: 5,
              }}
            />
          </TouchableOpacity>
        </View>
        {/* <View style={styles.activeRoom}></View>
        <Text style={styles.activeRoomText}>{text}</Text>
        <View style={styles.activeLine}></View> */}
      </View>
    </>
  );
};

export {TextWithLine};
