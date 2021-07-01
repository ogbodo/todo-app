import React from 'react'
import { FlatList, Text, View, StyleSheet } from 'react-native'

interface PropType { }

const todos = [
  { title: 'firstTitle', description: 'firstDescription' },
  { title: 'secondTitle', description: 'secondDescription' },
  { title: 'thirdTitle', description: 'thirdDescription' }]

export default function TodoList(props: PropType) {

  return (
    <View style={styles.container} >
      <FlatList
        contentContainerStyle={styles.contentContainer}
        data={todos}
        renderItem={(renderTodo) => {
          return <Text style={styles.item} >{renderTodo.item.title}</Text>
        }}
      />
    </View>)
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  item: {
    color: 'red',
    fontSize: 24
  }
})