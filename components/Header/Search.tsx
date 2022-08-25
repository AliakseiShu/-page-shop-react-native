import React from 'react';
import {Icon, Input, Stack} from "native-base";
import {MaterialIcons} from "@expo/vector-icons";

export const Search = () => {
	return (
		<Stack
			space={4} w='90%'
			style={{backgroundColor: '#fff', borderRadius: 25}}>
			<Input
				InputLeftElement={
					<Icon
						as={<MaterialIcons name="search"/>}
						size={5}
						ml="2"
						color="#525D6F"/>}
				variant="rounded"
				placeholder="Search"
				placeholderTextColor="#525D6F"
			/>
		</Stack>
	);
};
