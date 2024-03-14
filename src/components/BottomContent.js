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
        style={styles.pressableContainerStyle}>
        <View style={styles.mainContainerStyle}>
          <Text style={styles.plTextStyle}>P/L:</Text>
          <Text style={styles.plValueTextStyle}>
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
        <View style={styles.bottomsheetMainContainer}>
          <View style={styles.bottomsheetTextContainerStyle}>
            <Text style={styles.bottomsheetTextHeadingContainerStyle}>
              Current Value :
            </Text>
            <Text style={styles.plValueTextStyle}>₹ {cvState.toFixed(2)}</Text>
          </View>
          <View style={styles.bottomsheetTextContainerStyle}>
            <Text style={styles.bottomsheetTextHeadingContainerStyle}>
              Total Investment :
            </Text>
            <Text style={styles.plValueTextStyle}>₹ {ivState.toFixed(2)}</Text>
          </View>
          <View style={styles.bottomsheetTextContainerStyle}>
            <Text style={styles.bottomsheetTextHeadingContainerStyle}>
              Today's Profit & loss :
            </Text>
            <Text style={styles.plValueTextStyle}>
              ₹ {todayPlState.toFixed(2)}
            </Text>
          </View>

          <View style={styles.plView}>
            <Text style={styles.plTextStyle}>P/L:</Text>
            <Text style={styles.plValueTextStyle}>
              ₹ {(cvState - ivState).toFixed(2)}
            </Text>
          </View>
        </View>
      </RBSheet>
    </View>
  );
};

export default BottomContent;

const styles = StyleSheet.create({
  pressableContainerStyle: {
    backgroundColor: 'white',
    minHeight: 60,
    flexDirection: 'column',
  },
  mainContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 24,
    marginHorizontal: 12,
  },
  plTextStyle: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  plValueTextStyle: {
    color: 'black',
    fontSize: 16,
  },
  bottomsheetMainContainer: {
    marginHorizontal: 12,
  },
  bottomsheetTextContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 12,
  },
  bottomsheetTextHeadingContainerStyle: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  plView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 24,
  },
});
