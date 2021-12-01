import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet, Text, TextInput, View, Image } from "react-native";
import { Avatar } from "react-native-paper";
import { AntDesign, Entypo, EvilIcons } from "@expo/vector-icons";
const data = [
  {
    name: "camtu",
    time: "27/11 16:08",
    postname: "Constitutional Law post",
    sub: "Constitutional Law",
    avatar:
      "https://scontent.fsgn5-10.fna.fbcdn.net/v/t1.6435-9/57345619_1179320125608491_4822555009851850752_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=KwtcY1H9bgEAX-GqSKi&_nc_oc=AQmlFKzBjndWbgNDwkqSys9m_iRSgTvCNfiFCCCr_GpDhXYuSH-x82wK4HoalJhyYSc&tn=0ivY4UH93CqyOOcz&_nc_ht=scontent.fsgn5-10.fna&oh=4365c7b4d85bef79437028f65479e774&oe=61CE5A23",
  },
];
export default function Comment() {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <View
          style={{
            height: 45,
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: 10,
          }}
        >
          <AntDesign name="caretup" size={10} color="#BE322F" />
          <Text style={styles.num}>0</Text>
          <AntDesign name="caretdown" size={10} color="#9A9A9A" />
        </View>
      </View>
      <View style={styles.content}>
        <View
          style={{
            ...StyleSheet.absoluteFillObject,
            right: 0,
            top: 0,
            width: "100%",
            height: 20,
            flexDirection: "row-reverse",
          }}
        >
          <Text style={{ marginRight: 15, marginTop: 10 }}>
            <Entypo name="dots-three-horizontal" size={15} color="gray" />
          </Text>
        </View>
        {data.map((data, index) => (
          <View style={{margin: 10, marginLeft: 20}} key={index}>
            <View style={styles.items}>
              <View style={styles.avatar}>
                <Image style={styles.image} source={{ uri: data.avatar }} />
              </View>
              <View style={styles.info}>
                <Text style={styles.num}>{data.name}</Text>
                <Text style={{ fontSize: 10, fontWeight: "700"}}>{data.time}</Text>
              </View>
            </View>
            <View>
              <View>
                <Text
                  style={{
                    marginTop: 10,
                    fontWeight: "600",
                  }}
                >
                  {data.postname}
                </Text>
                <Text
                  style={{
                    marginTop: 10,
                    fontSize: 12,
                    fontWeight: "400",
                  }}
                >
                  {data.sub}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  marginTop: 20,
                }}
              >
                <Text style={{ fontSize: 12, color: "#A8A7AA" }}>
                  <EvilIcons name="comment" size={12} color="#A8A7AA" /> 21
                  Comments
                </Text>
                <Text style={{ fontSize: 12, color: "silver", marginLeft: 10, }}>
                  <Entypo name="share" size={12} color="silver" />
                  Share
                </Text>
              </View>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#EFEEEE",
    flexDirection: "row",
    margin: 10,
    borderRadius: 2,
  },
  avatar: {
    // width: "15%",
    // justifyContent: "center",
    marginRight: 10,
  },
  image: {
    width: 35,
    height: 35,
    borderRadius: 5,
  },
  left: {
    width: "10%",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#F2F2F2",
  },
  content: {
    width: "90%",
  },
  items: {
    flexDirection: "row",
    alignItems: "center",
  },
  num: {
    color: "#BE322F",
    fontWeight: "700",
  },
  info: {},
});