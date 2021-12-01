import React from "react";
import {View, Text, SafeAreaView} from "react-native";
import HeaderTabs from "../components/HeaderTab";
import SearchBar from "../components/SearchBar";

export default function Home(){
    return (
<SafeAreaView style = {{
    backgroundColor: "#EEE",
    flex: 1}}>
    <View style= {{
        backgroundColor: "white",
        padding: 15}}>
    <HeaderTabs/>
<SearchBar/>

    </View>
</SafeAreaView>
    );
}