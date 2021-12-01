import React from "react";
import {View, Text, SafeAreaView} from "react-native";
import HeaderTabs from "../components/HeaderTab";

export default function Home(){
    return (
<SafeAreaView style = {{
    backgroundColor: "#EEE",
    flex: 1}}>
    <View style= {{
        backgroundColor: "white",
        padding: 15}}>
    <HeaderTabs/>
    </View>
</SafeAreaView>
    );
}