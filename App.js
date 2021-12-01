import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native';
import Comment from './components/comment';
import Header from './components/header';
import List from './components/list';
import TextBox from './components/textbox';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <List />
      <TextBox />
      <Comment />
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
