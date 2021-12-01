import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function RestaurantItem() {
    return (
        <TouchableOpacity activeOpacity = {1} 
        style={{marginBottom: 30}}>
        <View style =  {{marginTop: 10, padding: 10, backgroundColor: 'white'}}>
            <RestaurantImage/>
            <RestaurantInfo/>
        </View>
        </TouchableOpacity>
    )
}

const RestaurantImage = () =>(
    <>
    <Image
    source = {{uri: "https://kodiary.com/new/wp-content/uploads/2021/06/food.jpeg"}}
    style = {{width : "100%", height:180}}
    />

    <TouchableOpacity style = {{position: "absolute", right: 20}}>
        <MaterialCommunityIcons name = "heart-outline" size={30} color = "#EEE"/>
    </TouchableOpacity>
    </>
);

const RestaurantInfo = () => (
    <View style = {{flexDirection: "row", 
    justifyContent: 'space-between',
    alignItems: 'center', 
    marginTop: 10}}>
        <View>
    <Text style = {{fontSize: 15, fontWeight: "bold"}}>Nawadurga New Cusine</Text>
    <Text style = {{fontSize: 13, color: 'gray'}}>30 - 45 • min</Text>
    </View>
    <View style =  {{
        backgroundColor: 'gray', 
        height: 30, 
        width: 40, 
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16}}>

    <Text >4.5</Text>
    </View>
    
    </View>
);
