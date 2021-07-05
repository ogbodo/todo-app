import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Screens from '../screens'
import { Ionicons } from '@expo/vector-icons';

const TodoStack = createStackNavigator()

export default function AppNavigator() {

  return (
    <NavigationContainer>
      <TodoStack.Navigator>
        <TodoStack.Screen
          name='TodoListScreen'
          component={Screens.TodoListScreen}
          options={{
            headerTitle: 'Todo List',
            headerRight: () => (
              <Ionicons name="add-circle-sharp" size={35} color="green" />
            )
          }}
        />
      </TodoStack.Navigator>
    </NavigationContainer>
  )

}