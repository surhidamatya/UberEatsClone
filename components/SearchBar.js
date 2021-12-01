import React from "react";
import {View, Text, SafeAreaView} from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import HeaderTabs from "../components/HeaderTab";

export default function SearchBar(){
    return (

    <View style ={{
        marginTop: 15,
        flexDirection: "row"
    }}>
        <GooglePlacesAutocomplete 
        styles ={{
            textInput: {
                backgroundColor: "#EEE",
                borderRadius: 20,
                fontWeight: "700",
                marginTop: 7
            },
            textInputContainer: {
                backgroundColor: "#EEE",
                borderRadius: 50,
                flexDirection: "row",
                alignItems: "center",
                marginRight: 10
            }
        }}
        placeholder = "Search"
        renderLeftButton = {() => <View style = {{marginLeft: 10}}>
            <Ionicons name = 'location-sharp'
             size = {24} />
           </View> }

           renderRightButton = {() => 
            <View style = {{
                flexDirection: "row", 
                marginRight: 12,
                padding: 12,
                borderRadius: 30,
                backgroundColor: "white",
                alignItems: "center"}}>
                <AntDesign name = "clockcircle" size= "11" style = {{marginRight: 10}}/>
        <Text>Search</Text>
        </View>
        }
        />
    </View>
    );
}