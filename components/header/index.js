import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons'; 

export default function Header() {
  return (
    <View style={styles.container}>  
      <View style={styles.headerTop}>
        <Text style={styles.headerTopTitle}>Constitutional Law</Text>
        <View style={styles.headerTopContent}>
            <View style={styles.headerTopItem}>
                <FontAwesome5 name="user-alt" size={15} color="white" />
                <Text style={styles.headerTopText}>3 members</Text>
            </View>
            <View style={styles.headerTopItem}>
                <Ionicons name="ios-chatbubble-sharp" size={15} color="white" />
                <Text style={styles.headerTopText}>1 posts</Text>
            </View>
            <View style={styles.headerTopItem}>
                <Entypo name="calendar" size={15} color="white" />                
                <Text style={styles.headerTopText}>2/11/2021</Text>
            </View>
        </View>
      </View>
      <View style={styles.headerFooter}>
          <View width="65%">
            <Text style={styles.headerFooterText}>Getting ahead in a difficult profession requires avid faith in yourself. That is why some people with mediocre talent, but with great inner drive, go so much further than people with vastly superior talent. – Sophia Loren</Text>
          </View>
          <View style={styles.buttonLayout}>
            <View style={styles.button}>
                <Button
                title="Join"
                color="white"
                />
            </View>
          </View>
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
  headerTop: {
    backgroundColor: "#BE322F",
    padding: 40,
  },
  headerTopContent: {
    marginTop: 10,
    flexDirection: "row",
  },
  headerFooter: {
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 15,
    width: "100%"
  },
  headerTopItem: {
    flexDirection: "row",
    marginTop: 10,
    marginRight: 40,
  },
  headerTopText: {
    color: 'white',
    marginLeft: 8,
  },
  headerTopTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
  },
  button: {
      backgroundColor: "#BE322F",
      width: 90,
      borderRadius: 5,
      alignItems: "center",
      justifyContent: "center",
  },
  buttonLayout: {
      width: "35%",
      alignItems: "center",
      justifyContent: "center"
  },
  headerFooterText: {
      fontWeight: "500",
      textAlign: "justify"
  }
});
