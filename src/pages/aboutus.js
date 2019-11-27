import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, ScrollView, ImageBackground, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class ThirtPage extends Component {


  render() {
    return (

      <View style={styles.container}>
        <ImageBackground source={require('../assets/back1.png')} style={{ width: '100%', height: '100%', justifyContent: 'center', flex: 1 }}>
          <View style={styles.cardPosition}>



            <ScrollView style={styles.context}>

              <View style={styles.oneCard}>


                <Text style={styles.title}>Sobre Nós</Text>

                <Text style={styles.subTitle}>Desenvolvedores</Text>

                <Text style={styles.subTitle2}>Filipe Oliveira</Text>
                <View alignItems={'center'}>
                  <Image style={styles.dev02} source={require('../assets/dev01.jpg')}/>
                </View>
                <View style={styles.social}>
                  <Icon name='github-circle' size={30} flex={1} color={'#EE5659'} onPress={()=> Linking.openURL('https://github.com/filipe09oliveira')}/>
                  <Icon name='linkedin-box'size={30} flex={2} color={'#EE5659'} onPress={()=> Linking.openURL('https://br.linkedin.com')}/>
                  <Icon name='instagram'size={30}flex={1} color={'#EE5659'} onPress={()=> Linking.openURL('https://www.instagram.com/filipe09oliveira')}/>
                </View>
                
                <Text style={styles.subTitle2}>Jóbia Damone</Text>
                <View alignItems={'center'}>
                  <Image style={styles.dev02} source={require('../assets/dev02.jpg')}/>
                </View>
                <View style={styles.social}>
                  <Icon name='github-circle' size={30} color={'#EE5659'} onPress={()=> Linking.openURL('https://github.com/jdamonew')} />
                  <Icon name='linkedin-box'size={30} color={'#EE5659'} onPress={()=> Linking.openURL('https://br.linkedin.com/in/jóbia-damone')}/>
                  <Icon name='instagram'size={30} color={'#EE5659'} onPress={()=> Linking.openURL('https://www.instagram.com/jobiadamone')}/>
                </View>

                {/* <Text style={styles.title}>Tecnologias</Text>
                <Text style={styles.subTitle2}>Back-End</Text>
                <Text style={styles.subTitle2}>Front-End</Text> */}



              </View>
            </ScrollView>
          </View>
        </ImageBackground>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  cardPosition: {
    flex: 1,
    flexDirection: 'column'
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 50,
    paddingTop: 10,
    paddingBottom: 10
  },
  subTitle: {
    textAlign: 'center',
    paddingTop: 10,
    fontSize: 30,
    fontWeight: 'bold'

  },  
  subTitle2: {
    textAlign: 'center',
    paddingTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 25

  },
  context: {
    textAlign: 'center',
    padding: 10
  },
  oneCard: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 6,
    marginBottom: 20,
    marginTop: 20,
  },
  social:{
    flexDirection:'row',
    justifyContent:'space-around',
    marginTop:20,
    marginBottom:20

  },
  dev02:{
    width:140,
    height:140,
    borderRadius:80,
    alignItems: 'center',
    flexDirection:'column',
    flex:1,
  }
});
