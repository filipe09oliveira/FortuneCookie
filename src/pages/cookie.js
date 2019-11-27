import React, { Component } from 'react';
import { Alert, View, StyleSheet, ImageBackground, Text, TouchableOpacity, Image, Share, ToastAndroid} from 'react-native';
import NetInfo from "@react-native-community/netinfo";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import LottieView from 'lottie-react-native';

export default class FirstPage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      biscoito: {},
      disableCookie: false,
      visible: false, 
      color:'grey',   
      connect: 'Disconnected!'
        }

    this.regMsg = this.regMsg.bind(this);
    this.showMsg = this.showMsg.bind(this);
  }

  //CONSOME API
  async regMsg() {
    
    this.setState({disableCookie: true});
    return await fetch('http://159.65.68.193:3000/mensagem')
      .then(response => {
        if (response.ok) {
          return response.json()
        }
        throw new Error('Algo deu Errado! ' + response.statusText)
      })
      .then(response => this.setState({ biscoito: response.allTable[0] }))
      .catch(err => console.log(err));

  }

  //COMPATILHAR MENSAGEM
  onShare = async () => {
    try {
      const result = await Share.share({
        title:'Mensagem do Dia',
        message: 'Mensagem do dia: "' + this.state.biscoito.msg + '" by Fortune Cookie',
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
        } else {

        }
      } else if (result.action === Share.dismissedAction) {
      }
    } catch (error) {
      alert(error.message);
    }
  };

  //RETORNA API
  async showMsg() {

    await this.regMsg();
    
    Alert.alert(
      'Mensagem do Dia',
      this.state.biscoito.msg,
      [
        { text: 'Compartilhar', onPress: this.onShare },
        { text: 'Abrir outro cookie', onPress: this.setState({disableCookie: false}) },
      ],
      { cancelable: true }
    )

  }

  //VERIFICA CONEXÃO COM INTERNET
  verify = () => {
    NetInfo.fetch().then(connection => {
      if (connection.isConnected == true) {
        this.setState({ color: '#2ecc71', connect: 'Connected!', disableCookie: false });
        ToastAndroid.show(this.state.connect, ToastAndroid.SHORT);
        

      } else {
        this.setState({ color: '#EE5659', connect: 'Disconnected!', disableCookie: true });
      }
    });
  };

  //CARREGA PRIMEIRO***
  componentDidMount() {
    this.verify();
  }


  //RENDERIZA TODA A TELA***
  render() {
    return (
      <View style={styles.container}>

        <LottieView source={require('../assets/animation.json')} autoPlay loop />;
        <ImageBackground source={require('../assets/back2.png')} style={{ width: '100%', height: '100%', justifyContent: 'center', flex: 1 }}>
          <View style={styles.verifyContainer}>
            <Icon name='wifi' color={this.state.color} size={30} style={{marginRight: 250}} />

            <TouchableOpacity onPress={this.verify}>
              <Icon name='reload' color={'#7f8c8d'} size={30} marginBottom={20} />
            </TouchableOpacity>
          </View>

          <View style={styles.containerCookie}>
            <TouchableOpacity
              onPress={this.showMsg}
              style={styles.imageButton}
              disabled={this.state.disableCookie}
            >

              <Image
                style={styles.cookie}
                source={require('../assets/cookie.png')}
              />
              
            </TouchableOpacity>
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
    backgroundColor: '#ecf0f1',
  },
  verifyContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    paddingTop: 10,
  },
  cookie: {
    width: 170,
    height: 140,
    justifyContent: 'center'

  },
  imageButton: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',

  },
  command: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 50,
    paddingTop: 50,
    fontFamily: 'Verdana',
    color: '#636e72'
  },
  containerCookie: {
    alignItems: 'center',
    justifyContent: 'center',
    flex:1,
    paddingBottom:150
  }
});
