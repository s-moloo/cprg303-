import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

// Destructure addTask from props
function ToDoForm({ addTask }) {
  // Manage local state for the input field
  const [taskText, setTaskText] = useState('');

  const handleAddTask = () => {
    if (taskText.trim()) {
      addTask(taskText); // Pass taskText to addTask
      setTaskText(''); // Clear the input field
    }
  };

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task..."
        // Update taskText state as the user types
        onChangeText={(text) => setTaskText(text)}
        value={taskText}
      />
      {/* Trigger handleAddTask on button press */}
      <Button title="Add Task" onPress={handleAddTask} />
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
});

export default ToDoForm;
