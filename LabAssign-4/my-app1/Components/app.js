import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';

function App() {
  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog',
  ]);

  // Implement addTask to update tasks state
  const addTask = (taskText) => {
    if (taskText.trim()) {
      setTasks([...tasks, taskText]);
    }
  };

  return (
    <SafeAreaView>
      <ToDoList tasks={tasks} />
      {/* Pass the addTask function to ToDoForm */}
      <ToDoForm addTask={addTask} />
    </SafeAreaView>
  );
}

export default App;
