import React from 'react'
import { FlatList, Text, View, StyleSheet } from 'react-native'
import { useRecoilValue } from 'recoil'
import { todoState } from '../store/todo'

interface PropType { }

export default function TodoList(props: PropType) {
  const todoGlobalState = useRecoilValue(todoState)

  return (
    <View style={styles.container} >
      <FlatList
        contentContainerStyle={styles.contentContainer}
        data={todoGlobalState}
        renderItem={(renderTodo) => {
          return <Text style={styles.item} >{renderTodo.item.title}</Text>
        }}
        ListEmptyComponent={() => <Text style={{ marginTop: 40, fontSize: 18 }} >Empty list</Text>}
      />
    </View>)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc'
  },
  contentContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  item: {
    color: 'red',
    fontSize: 24
  }
})