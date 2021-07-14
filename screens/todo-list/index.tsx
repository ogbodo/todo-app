import React from 'react'
import { FlatList, Text, View, StyleSheet, ActivityIndicator } from 'react-native'
import { useRecoilState } from 'recoil'
import { todoState } from '../../store/todo'
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { widthPercentageToDP as WP } from 'react-native-responsive-screen'
import { userFetchTodos } from '../../server';


interface PropType { }

export default function TodoList(props: PropType) {
  const [globalState, setGlobalState] = useRecoilState(todoState)
  const { data, isLoading } = userFetchTodos()

  return (
    <View style={styles.container} >
      <FlatList
        contentContainerStyle={styles.contentContainer}
        data={data?.data.payload}
        keyExtractor={(_, index) => `${index}`}
        renderItem={(renderTodo) => {
          return <View style={styles.itemContainer} >
            <Text style={styles.item} >{renderTodo.item.title}</Text>
            <View style={styles.actionStyle}>
              <Feather name="edit" size={WP(6)} color="black" />
              <MaterialIcons name="delete" size={WP(6)} color="black" />
            </View>
          </View>

        }}
        ListEmptyComponent={() => isLoading ? <ActivityIndicator color="red" /> : <Text style={{ marginTop: WP(7.5), fontSize: WP(3.6) }} >Empty list</Text>}
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
    padding: WP(5),
  },
  item: {
    fontSize: WP(5),
    textAlign: "center",
    textTransform: "capitalize"
  },
  itemContainer: {
    justifyContent: "center",
    backgroundColor: 'white',
    width: WP('90%'),
    borderRadius: WP(1),
    padding: WP(1),
    marginVertical: WP(2)
  },
  actionStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: WP(7),
  }
})