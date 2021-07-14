import React, { useState } from 'react'
import { View, StyleSheet, TextInput, Button, ActivityIndicator } from 'react-native'
import showToast from "../../components/toast";
import { usePostTodo } from '../../server';

export default function AddTodoScreen() {
  const [state, setState] = useState({ title: '', description: '' })
  const { isLoading, mutateAsync } = usePostTodo()

  const handleSubmitTodo = async () => {
    try {
      const response = await mutateAsync(state)
      console.log(response.data);
      showToast(response.data.message)
    } catch (error) {
      console.log(error);
    }
  }

  return <View style={styles.container}>
    <TextInput placeholder="Enter title" style={styles.input} onChangeText={(title) => {
      setState({ ...state, title })
    }} />
    <TextInput placeholder="Enter description" style={styles.input} onChangeText={(description) => {
      setState({ ...state, description })
    }} />
    <Button title="submit" onPress={() => {
      handleSubmitTodo()
    }} color="green" />
    {isLoading ? <ActivityIndicator color="red" /> : null}
  </View>
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white', alignItems: "center" },
  input: { margin: 10, },
})