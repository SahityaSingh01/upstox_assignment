import {Pressable, StyleSheet, Text, View} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import React, {useRef} from 'react';

const BottomContent = props => {
  const {todayPlState, cvState, ivState} = props;
  const refRBSheet = useRef();

  return (
    <View>
      <Pressable
        onPress={() => refRBSheet.current.open()}
        style={{
          backgroundColor: 'white',
          minHeight: 60,
          flexDirection: 'column',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 24,
            marginHorizontal: 12,
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: 16,
              fontWeight: 'bold',
            }}>
            P/L:
          </Text>
          <Text
            style={{
              color: 'black',
              fontSize: 16,
            }}>
            ₹ {(cvState - ivState).toFixed(2)}
          </Text>
        </View>
      </Pressable>
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        customStyles={{
          wrapper: {
            backgroundColor: 'transparent',
          },
          draggableIcon: {
            backgroundColor: '#000',
          },
        }}>
        <View
          style={{
            marginHorizontal: 12,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 12,
            }}>
            <Text
              style={{
                color: 'black',
                fontSize: 16,
                fontWeight: 'bold',
              }}>
              Current Value :
            </Text>
            <Text
              style={{
                color: 'black',
                fontSize: 16,
              }}>
              ₹ {cvState.toFixed(2)}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 12,
            }}>
            <Text
              style={{
                color: 'black',
                fontSize: 16,
                fontWeight: 'bold',
              }}>
              Total Investment :
            </Text>
            <Text
              style={{
                color: 'black',
                fontSize: 16,
              }}>
              ₹ {ivState.toFixed(2)}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 10,
            }}>
            <Text
              style={{
                color: 'black',
                fontSize: 16,
                fontWeight: 'bold',
              }}>
              Today's Profit & loss :
            </Text>
            <Text
              style={{
                color: 'black',
                fontSize: 16,
              }}>
              ₹ {todayPlState.toFixed(2)}
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 24,
            }}>
            <Text
              style={{
                color: 'black',
                fontSize: 16,
                fontWeight: 'bold',
              }}>
              P/L:
            </Text>
            <Text
              style={{
                color: 'black',
                fontSize: 16,
              }}>
              ₹ {(cvState - ivState).toFixed(2)}
            </Text>
          </View>
        </View>
      </RBSheet>
    </View>
  );
};

export default BottomContent;

const styles = StyleSheet.create({});
