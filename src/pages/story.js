import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity, ImageBackground, Linking } from 'react-native';
import { WebView } from 'react-native-webview';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class ThirtPage extends Component {
 

  render() {
    return (

      <View style={styles.container}>
        <ImageBackground source={require('../assets/back1.png')} style={{ width: '100%', height: '100%', justifyContent: 'center', flex: 1 }}>
          <View style={styles.cardPosition}>



          <ScrollView style={styles.context}>
           {/* ---------------------------------------------------------------------------------------------------- */}
           {/* ---------------------------------------------------------------------------------------------------- */}
           <View style={styles.oneCard}>
            <Image source={require('../assets/banner01.jpg')} style={styles.imageBanner} />
           
            <Text style={styles.title}>História do Biscoito</Text>
           
            <Text style={styles.story} >Você conhece a história do biscoito da sorte? Não?</Text>
            
            <Text style={styles.story}>Diz a lenda que ele surgiu na China na
               época das guerras pela unificação do território.
               Dizem que os mongóis não gostavam desses biscoitos,
               então as tropas aproveitavam que eles não comiam e
               colocavam mensagens secretas dentro do biscoito para
               os homens que estavam nos campos de batalha. 
               </Text>
               <Text style={styles.story}>
               Então todos os anos,os chineses passaram a trocar bolos e biscoitos em formato
               de meia-lua e recheados com mensagens para comemorar a brilhante
               tática usada para expulsar os mongóis.
            </Text>
          </View>
          {/* ---------------------------------------------------------------------------------------------------- */}
          <View style={styles.twoCard}>

            <Image source={require('../assets/banner02.jpg')} style={styles.imageBanner} />
           
            <Text style={styles.title}>Curiosidades</Text>
            <Text style={styles.story}>
              - Quando o biscoito da sorte foi criado, há mais de oitocentos anos, ele era chamado também de "bolo da lua".
            </Text>
            <Text style={styles.story}>
              - A primeira fábrica de biscoitos da sorte surgiu nos Estados Unidos em 1964.
            </Text>
            <Text style={styles.story}>
              - As frases que vêm dentro do biscoito normalmente são tiradas do "I Ching", que é um livro de sabedoria baseado na filosofia chinesa.
            </Text>
            
          </View>
          {/* ---------------------------------------------------------------------------------------------------- */}
          <View style={styles.containerDownload}>

            <TouchableOpacity style={styles.buttonDownload} onPress={()=> Linking.openURL('http://files.artedaguerra.webnode.com.br/200001161-43851447e4/i-ching.pdf')}>
              <Text style={styles.textDownload} ><Icon name='download'size={25} style={{marginRight: 50}}/> Download I Ching</Text>
            </TouchableOpacity>

          </View>
          {/* ---------------------------------------------------------------------------------------------------- */}
          {/* ---------------------------------------------------------------------------------------------------- */}
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
  imageBanner: {
    width: '100%',
    height: 200,
    borderRadius: 6,
    paddingTop: 10

  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    paddingTop: 10,
    paddingBottom:10
  },
  context: {
    textAlign: 'center',
    padding: 10
  },
  story: {
    lineHeight: 20,
    paddingTop: 10,
    fontSize:15
  },
  oneCard:{
    backgroundColor:'#fff',
    padding:20,
    borderRadius: 6,
    marginBottom: 20,
    marginTop: 20
  },
  twoCard:{
    backgroundColor:'#fff',
    padding:20,
    borderRadius: 6,
    marginBottom: 20
  },
  containerDownload:{
    paddingBottom:50,
    padding: 20,    
  },
  textDownload:{
    alignSelf:'center',
    justifyContent:'center',
    marginTop:10,
    color: '#fff',
    fontSize: 20,
    fontWeight:'bold'
  },
  buttonDownload:{
    backgroundColor:'#2ecc71',
    height:50,
    alignItems:'center',
    borderRadius:25
    
  }
});
