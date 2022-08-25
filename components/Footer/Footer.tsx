import React from 'react';
import {HStack, View, Text} from "native-base";
import {MaterialIcons} from "@expo/vector-icons";
import {menu} from "./menu";

export const Footer = () => {

	return (
		<View style={{
			backgroundColor: '#fff',
			padding: 15,
			paddingTop: 5,
			borderColor: '#B3B3B3',
			borderTopWidth: 1
		}}>
			<HStack alignItems="center" justifyContent="space-between">
				{menu.map((item, index) => (
					<View key={index}>
						{index === 2 && (
							<Text style={{
								position:
									"absolute",
								top: -5,
								right: -5,
								backgroundColor: '#4EBB62',
								borderRadius: 10,
								padding: 2,
								paddingRight: 5,
								paddingLeft: 5,
								color: 'white',
								zIndex: 2
							}}
							>12</Text>)}
						<MaterialIcons
							name={item.icon}
							size={34}
							style={{textAlign: 'center'}}
							color={index === 0 ? '#e3214e' : '#525D6F'}
						/>
						<Text color={index === 0 ? '#e3214e' : '#525D6F'}>{item.title}</Text>
					</View>
				))}
			</HStack>
		</View>
	);
};

