import {Box, Button, Heading, Image, NativeBaseProvider, ScrollView, Text, View} from 'native-base';
import React from 'react';
import {Header} from "./components/Header/Header";
import {Footer} from "./components/Footer/Footer";
import {products} from "./data/products";

export default function App() {
	return (
		<NativeBaseProvider>
			<View style={{flex: 1}}>
				<Header/>
				<ScrollView>
					<Box style={{marginTop: 10}} p={5}>
						<Heading size={'lg'} color={"#1438ec"} >
							Скидки 70%
						</Heading>
						<View mt={10} flexDirection="row" flexWrap='wrap' justifyContent="space-between">
							{products.map((product, index) => (
								<Box key={index} mb={10} mx={2} w='28%'>
									<Image
										size='lg'
										resizeMode='cover'
										source={{
											uri: product.image
										}}
										alt={product.name}/>
									<Text my={2} style={{fontWeight: 'bold'}}>{product.price}</Text>
									<Text style={{ fontSize: 14, height: 40}}>{product.name}</Text>
										<Box style={{
											backgroundColor: '#cb4b19',
											borderRadius: 8,
											marginTop: 20,
											width: 105,
										}}
										px={2}
										py={2}>
										<Text style={{
											fontWeight:'bold',
											fontSize: 16,
											color: '#fff'
										}}>В корзину</Text>
									</Box>
								</Box>
							))}
						</View>
					</Box>
				</ScrollView>
				<Footer/>
			</View>
		</NativeBaseProvider>
	);
}

