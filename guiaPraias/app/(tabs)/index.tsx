import { Background } from '@react-navigation/elements';
import react from 'react';
import {Stylesheet, View, Text, Image, TouchableOpacity, SafeAreaView, StatusBar} from 'react-native';
export function home() {
  return(
    <SafeAreaView style= {Stylesheet.container}>
      <StatusBar barStyle="dark-content"/>
      <Image source= {require('./assets/praia.jpg')} style={Styles.headerImage}/>
      <View style= {Styles.titleContainer}>
     <Text style= {Styles.mainTitle}> Guia de Praia </Text>
     <Text style = {Styles.subTitles}> Planeje sua Viagem </Text> 
     </View>  
  </SafeAreaView>
  );
}
const style = StyleSheet.create({
  container:{
    flex: 1,
    BackgroundColor: '#f0f4f8',
  alignItens:'center',},
});
