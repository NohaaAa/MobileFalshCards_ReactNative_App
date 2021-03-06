import React, { Component } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
 
import AddDeck from './AddDeck'
import DeckView from './DeckView'
import DeckList from './DecksList'
import AddCard from './AddCard'
import TabNav from './TabNav';
import Quiz from './Quiz';


import {blue, nile, orange, yellow, white, lightGreen, beige, offWhite, red, darkGreen} from '../utils/colors'



const Stack = createStackNavigator()


export default function StackNav() {
    return (

  
          <Stack.Navigator>
            <Stack.Screen 
              name='Home'
              component={TabNav}
              options={{title: 'Decks'}}
            />
          
            <Stack.Screen 
              name='DeckView'
              component={DeckView}
              options={{
              title: 'Deck Details',
              headerTintColor: red,
              headerStyle: {backgroundColor: white}
              }}
            />

            <Stack.Screen 
              name='AddCard'
              component={AddCard}
              options={{
              title: 'Add Card',
              headerTintColor: white,
              headerStyle: {backgroundColor: darkGreen}
              }}
            />

            <Stack.Screen 
              name='Quiz'
              component={Quiz}
              options={{
              title: 'Quiz',
              headerTintColor: white,
              headerStyle: {backgroundColor: lightGreen}
              }}

            />
          </Stack.Navigator>
      )
}

  

