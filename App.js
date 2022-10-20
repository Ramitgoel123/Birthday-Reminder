import React, { useState } from 'react'
import data from './data'
import Home from './screens/Home'
import {Text, View, Button, SafeAreaProvider} from 'react-native'
import { Header } from 'react-native-elements'

function App() {
  const [people, setPeople] = useState(data)
  return (
  // <SafeAreaProvider> 
      <View className='container'>
        <Header backgroundColor={'#ffff00'} centerComponent={{ text: 'Birthday Reminder', style: { color: '#fff', fontSize: 20 }, }} />
        <Home people={people} />
        {/* <Button onClick={() => setPeople([])}>clear all</Button> */}

        <Button
  onPress={() => setPeople([])} title="Clear All" color="#841584" />
  </View>
   // </SafeAreaProvider> 
  )
}
// setPeople is a function to update the states
export default App