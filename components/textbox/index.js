import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { Avatar } from 'react-native-paper'

export default function TextBox() {
  return (
    <View style={styles.container}>  
      <View style={styles.avatar}>
      <Avatar.Image
        size={40}
        rounded
        source={{
            uri:
            "https://scontent.fsgn5-10.fna.fbcdn.net/v/t1.6435-9/57345619_1179320125608491_4822555009851850752_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=KwtcY1H9bgEAX-GqSKi&_nc_oc=AQmlFKzBjndWbgNDwkqSys9m_iRSgTvCNfiFCCCr_GpDhXYuSH-x82wK4HoalJhyYSc&tn=0ivY4UH93CqyOOcz&_nc_ht=scontent.fsgn5-10.fna&oh=4365c7b4d85bef79437028f65479e774&oe=61CE5A23",
        }}
      />
      </View>
      <View style={styles.content}>
        <TextInput
        style={styles.input}
        placeholder="What's on your mind?"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: "#EFEEEE",
    paddingHorizontal: 20,
    paddingVertical: 5,
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
    borderRadius: 5,
  },
  avatar: {
    width: '15%',
  },    
  content: {
    width: '85%',
  },
  input: {
    padding: 10,
    paddingLeft: 20,
    borderRadius: 8,
    width: '100%',
    backgroundColor: "#F6F5F5"
  }
});
