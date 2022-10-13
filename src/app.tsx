import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import {View,Text} from 'react-native'


const App=()=>{
    return (
        <NavigationContainer>
            <View style={{
                flex:1,
                backgroundColor:'white',
                justifyContent:'center',
                alignItems:'center'
            }}>
            <Text>Hello, World</Text>
            </View>
        </NavigationContainer>
    )
}

export default App