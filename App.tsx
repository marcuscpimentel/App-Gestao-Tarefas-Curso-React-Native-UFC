import React from 'react';
import { View } from 'react-native';
import ToDoList from './ToDoList';
import { NativeBaseProvider, extendTheme } from 'native-base';
import { TodosProvider } from './TodosContext';

const newColorTheme = {
  brand: {
    900: '#5B8DF6',
    800: '#ffffff',
    700: '#cccccc',
  },
};

const theme = extendTheme({
  colors: newColorTheme,
});

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <TodosProvider>
        <View>
          <ToDoList />
        </View>
      </TodosProvider>
    </NativeBaseProvider>
  );
}
