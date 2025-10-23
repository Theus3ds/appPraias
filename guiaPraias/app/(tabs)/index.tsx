import react from 'react';
import {Stylesheet, View, Text, Image, TouchableOpacity, SafeAreaView, StatusBar} from 'react-native';

const CategoryCard = ({backgroudColor, title, titleCçolor = '#fff'}) =>
(
<TouchabLeOpacity style={[styles.card, {backgroudColor}]}>
  <Text style={[styles.cardText, {color: titleColor}]}></Text>
</TouchabLeOpacity>
);

export default function home(){
  return(
    <SafeAreaView style={styles.container}>
      <StatusBar barstyle="dark-content"/>
        <Image
        source={require('../assets/praias.jpg')}
        style={styles.headerImage}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff'
    alignItems: 'center', 
  },
  headerImage:{
    width:'100%',
    height: 250,
    resizeMode: 'cover',

   },
   titleContainer:{
    marginVertical: 24,
    alignItems: 'center',
   },
   mainTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1e63ff',
   },
   subTitle:{
    fontSize: 16,
    color: '#48d6d2',
    marginTop: 4,
   },
   grid: {
    width 90,

   },
   row: {
    flexDirection: 'row'
    justfyContent: 'space-between',
    marginBottom 16,
   },
   card: {
    width: '48%',
    heigth: '120',
    borderRadius: '20',
    justifyContent: 'center',
    alignItems: 'center',
    sadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.85,
    elevation 5,
   },
   cardText: {
   fontSize: 18,
   fontWeight: 'bold',
   },
})