import {  StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react'
import ListElement from './src/components/ListElement'



const App = () => {

  return (
    <View style={{flex: 1,backgroundColor:'#c8c4cc'}}>
      <View style={{backgroundColor:'#880484',height:50,justifyContent:'center'}}>
        <Text style={{color: 'white',
              fontSize: 16,
              fontWeight:'bold',marginLeft:16
             }}>Upstox Holding</Text>
      </View>
 
      <ListElement/>

     
    {/*  */}
    </View>
  )
}

export default App

const styles = StyleSheet.create({})