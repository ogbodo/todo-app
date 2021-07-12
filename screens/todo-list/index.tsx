import React from 'react'
import { FlatList, Text, View, StyleSheet } from 'react-native'
import { useRecoilValue } from 'recoil'
import { todoState } from '../store/todo'
import { Feather, MaterialIcons } from '@expo/vector-icons';


interface PropType { }

export default function TodoList(props: PropType) {
  const todoGlobalState = useRecoilValue(todoState)

  return (
    <View style={styles.container} >
      <FlatList
        contentContainerStyle={styles.contentContainer}
        data={todoGlobalState}
        renderItem={(renderTodo) => {
          return <View style={styles.itemContainer} >
            <Text style={styles.item} >{renderTodo.item.title}</Text>
            <View style={styles.actionStyle}>
              <Feather name="edit" size={24} color="black" />
              <MaterialIcons name="delete" size={24} color="black" />
            </View>
          </View>

        }}
        ListEmptyComponent={() => <Text style={{ marginTop: 40, fontSize: 18 }} >Empty list</Text>}
      />
    </View>)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',

  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    padding: 20,
  },
  item: {
    fontSize: 24,
    textAlign: "center",
    textTransform: "capitalize"
  },
  itemContainer: {
    justifyContent: "center",
    backgroundColor: 'white',
    width: 350,
    borderRadius: 5,
    padding: 5
  },
  actionStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 30,
  }
})