import React from 'react';
import {MaterialIcons} from "@expo/vector-icons";
import {View} from "native-base";
import {Text} from "react-native";

export const Notification = () => {
	return (
		<View mr={10}>
			<MaterialIcons name="notifications-none" color="#fff" size={35}/>
			<Text style={{
				position:
					"absolute",
				top: -5,
				right: 5,
				backgroundColor: '#E4304E',
				borderRadius: 10,
				padding: 2,
				paddingRight: 5,
				paddingLeft: 5,
				color: 'white'
			}}
			>15</Text>
		</View>
	)
};

