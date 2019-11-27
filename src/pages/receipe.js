import React, { Component } from 'react';
import { Text, View, StyleSheet, ImageBackground, ScrollView, Image } from 'react-native';
import {WebView} from 'react-native-webview'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class SecondPage extends Component {

  render() {
    return (


      <View style={styles.container}>
        <ImageBackground source={require('../assets/back1.png')} style={{ width: '100%', height: '100%', justifyContent: 'center', flex: 1 }}>
          <View style={styles.cardPosition}>
            <ScrollView style={styles.context}>
              {/* ---------------------------------------------------------------------------------------------------- */}
              <View style={styles.oneCard}>
                <Image source={require('../assets/banner10.jpg')} style={styles.imageBanner1} />

                <Text style={styles.title}>Biscoito Chinês</Text>
                <Text style={styles.subTitle}>Receita</Text> 

                <Text style={styles.subSubTitle}>Ingredientes</Text> 
                <Text style={styles.ingredients}>
                  • 3 claras{"\n"}
                  • 1 colher rasa de café de sal{"\n"}
                  • 3/4 de xícara de açúcar{"\n"}
                  • 1/2 xícara de manteiga derretida{"\n"}
                  • 1/2 xícara de farinha de trigo{"\n"}
                  • 1 colher de chá de essência de amêndoa{"\n"}
                  • Óleo para untar a forma {"\n"}
                </Text> 

                <Text style={styles.subSubTitle}>Modo de Preparo</Text>    
                <Text style={styles.ingredients}>
                  1 - Coloque as claras em uma tigela, e mexa até criar uma espuma;{"\n"}{"\n"}
                  2 - Misture juntamente as clara, o açucar e o sal e mexa até ficar uniforme;{"\n"}{"\n"}
                  3 - Coloque agora o trigo, manteiga derretida e a essencia (de sua preferência);{"\n"}{"\n"}
                  4 - Mexa até ficar homogênio;{"\n"}{"\n"}
                  5 - Unte uma assadeira e com auxilio de uma colher coloque a mistura no formato circular, deixando um espaço esse cada mistura;{"\n"}{"\n"}
                  6 - Pre-aqueça o forno a 180º e deixe por 8 minutos;{"\n"}{"\n"}
                  7 - Com a massa ainda quente, coloque sua mensagem e feche rapidamente no formato do biscoito, cuidado para não esfriar;{"\n"}{"\n"}
                  8 - Deixe esfriar e pode servir;{"\n"}{"\n"}

                </Text> 
                
                <Text style={styles.subTitle}>Video da Receita</Text> 
                <WebView
                    style={{ marginTop: 20, width: '100%', height: 230, borderRadius:10 }}
                    domStorageEnabled={true}
                    source={{uri: 'https://www.youtube.com/embed/ByjX57jZt-g'}}
                    automaticallyAdjustContentInsets={false}
                    javaScriptEnabled={true}
                />


              </View>
              {/* ---------------------------------------------------------------------------------------------------- */}
            </ScrollView>
          </View>
        </ImageBackground>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  //div principa
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  //posicao do card
  cardPosition: {
    flex: 1,
    flexDirection: 'column'
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 6,
    marginBottom: 20
  },
  //titulo
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    marginTop:10
  },
  subTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    paddingTop: 10,
    fontSize: 20,

  },
  subSubTitle: {
    fontWeight: 'bold',
    paddingTop: 10,
    fontSize: 15,

  },
  ingredients: {
    paddingTop: 10,
    fontSize: 15,
  },
  imageBanner1: {
    width: '100%',
    height: 200,
    borderRadius: 6,
    paddingTop: 10
  },
  //card de receita
    oneCard:{
      backgroundColor:'#fff',
      padding:20,
      borderRadius: 6,
      marginBottom: 20,
      marginTop: 20
    },
    context: {
      textAlign: 'center',
      padding: 10
    },
    
});