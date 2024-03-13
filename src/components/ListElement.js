import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import BottomContent from './BottomContent';

const ListElement = () => {
  const [cvState, setCVstate] = useState(0);
  const [ivState, setIVstate] = useState(0);
  const [todayPlState, setTodayPlState] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (data.length > 0) {
      let currentValue = 0;
      let investmentValue = 0;
      let todaysPLValue = 0;
      data.forEach(item => {
        let itemCurrentValue = item.ltp * item.quantity;
        let itemInvestementValue = item.avgPrice * item.quantity;
        let itemTodaysPLValue = (item.close - item.ltp) * item.quantity;

        currentValue += itemCurrentValue;
        investmentValue += itemInvestementValue;
        todaysPLValue += itemTodaysPLValue;
      });

      setCVstate(currentValue);
      setIVstate(investmentValue);
      setTodayPlState(todaysPLValue);
    }
  }, [data]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        'https://run.mocky.io/v3/bde7230e-bc91-43bc-901d-c79d008bddc8',
      );
      const json = await response.json();
      setData(json.userHolding);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching data: ', error);
      setIsLoading(false);
    }
  };
  const renderItem = ({item}) => {
    return (
      <View style={{backgroundColor: 'white'}}>
        <View
          style={{
            padding: 10,
            flexDirection: 'column',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                color: 'black',
                fontSize: 16,
                fontWeight: 'bold',
              }}>
              {item.symbol}
            </Text>
            <Text
              style={{
                color: 'black',
                fontSize: 16,
              }}>
              LTP : {''}
              <Text
                style={{
                  color: 'black',
                  fontSize: 16,
                  fontWeight: 'bold',
                }}>
                ₹ {item.ltp.toFixed(2)}
              </Text>
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 6,
            }}>
            <Text
              style={{
                color: 'black',
                fontSize: 16,
              }}>
              {item.quantity}
            </Text>
            <Text
              style={{
                color: 'black',
                fontSize: 16,
              }}>
              P/L :{''}
              <Text
                style={{
                  color: 'black',
                  fontSize: 16,
                  fontWeight: 'bold',
                }}>
                ₹ {item.avgPrice.toFixed(2)}
              </Text>
            </Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: '#c8c4cc',
            height: 1,
            width: '100%',
            height: 1,
            marginTop: 4,
            marginLeft: 12,
          }}></View>
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      {isLoading ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList data={data} renderItem={renderItem} />
      )}

      <BottomContent
        data={data}
        cvState={cvState}
        ivState={ivState}
        todayPlState={todayPlState}
      />
    </View>
  );
};

export default ListElement;

const styles = StyleSheet.create({});
