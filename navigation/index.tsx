import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Screens from '../screens/screens'
import { Ionicons } from '@expo/vector-icons';
import AnimationPracticeScreen from '../screens/animation';
import { widthPercentageToDP as WP } from 'react-native-responsive-screen'

const TodoStack = createStackNavigator()

export default function AppNavigator() {

  return (
    <NavigationContainer>
      <TodoStack.Navigator mode="modal">
        <TodoStack.Screen
          name='TodoListScreen'
          component={Screens.TodoListScreen}
          options={(data) => ({
            headerTitle: 'Todo List',
            headerRight: () => (
              <Ionicons name="add-circle-sharp" size={35} color="green" onPress={() => {
                data.navigation.navigate("AddTodoScreen")
              }} />
            )
          })}
        />
        <TodoStack.Screen
          name='AddTodoScreen'
          component={Screens.AddTodoScreen}
          options={{
            headerTitle: 'Add Todo',
          }}
        />
        <TodoStack.Screen
          name='AnimationPracticeScreen'
          component={AnimationPracticeScreen}
          options={{
            headerTitle: 'Animation Practice',
          }}
        />
      </TodoStack.Navigator>
    </NavigationContainer>
  )

}