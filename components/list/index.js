import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const data = [
    'stay on topic1',
    'stay on topic2',
    'stay on topic3',
    'stay on topic4',
    'stay on topic5',
    'stay on topic6',
]

export default function List() {
  return (
    <View style={styles.container}>  
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Constitutional Law Roles</Text>
      </View>
      <View style={styles.content}>
          {data.map((data,index) => (
          <View key={index} width="65%">
            <Text style={styles.footerText}>{index + 1}.{data}</Text>
          </View>    
          ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // borderWidth: 1,
    // borderColor: "silver",
  },
  header: {
    backgroundColor: "#BE322F",
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  content: {
    marginTop: 10,
  },
  headerTitle: {
    color: "white",
    fontWeight: '500',
    fontSize: 16,
  },
  footerText: {
    fontWeight: '700',
    padding: 8,
    paddingLeft: 20,
  }
});
