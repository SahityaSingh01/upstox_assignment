import {  StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react'
import ListElement from './src/components/ListElement'



const App = () => {

  return (
    <View style={styles.mainView}>
      <View style={styles.HeadingMainView}>
        <Text style={styles.headingText
             }>Upstox Holding</Text>
      </View>
      <ListElement/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  mainView:{
    flex: 1,backgroundColor:'#c8c4cc'
  },
  HeadingMainView:{
    backgroundColor:'#880484',height:50,justifyContent:'center'
  },
  headingText:{
    color: 'white',
    fontSize: 16,
    fontWeight:'bold',marginLeft:16
  }
})