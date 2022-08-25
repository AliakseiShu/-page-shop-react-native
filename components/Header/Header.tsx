import React from 'react';
import {HStack, Text, View} from "native-base";
import {Search} from "./Search";
import {Notification} from "./Notification";

export const Header = () => {
	return (
		<View style={{
			backgroundColor: '#c30a0a',
			padding: 15,
			paddingTop: 30
		}}
		>
			<HStack alignItems="center" justifyContent="space-between">
				<Search/>
				<Notification/>
			</HStack>
		</View>
	);
};


