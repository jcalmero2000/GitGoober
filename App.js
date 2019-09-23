import React, { Component } from 'react';
import { 
    StyleSheet, 
    StatusBar, 
    TextInput, 
    ImageBackground, 
    Text, 
    View, 
    Image, 
    Dimensions,
    TouchableOpacity
} from 'react-native';

import bgImage from './images/bg.png'
import logo from './images/loginimg.png'
import Icon from 'react-native-vector-icons/Ionicons'

const { width: WIDTH } = Dimensions.get('window')
export default class Example extends Component {
  constructor() {
    super()
    this.state = {
      showPass: true,
      press: false
    }
  }

  showPass = () => {
    if (this.state.press == false) {
      this.setState({showPass: false, press: true})
    } else {
      this.setState({showPass: true, press: false})
    }
  }


  render() {
    return (
      <ImageBackground source={bgImage} style={styles.bgcontainer}>
        <View style={styles.logoContainer}>
          <Image source={logo} style={styles.logo} />
          <Text style={styles.logoText}>PROJECT GOOBER</Text>
        </View>

        <View style={styles.inputContainer}>
          <Icon name={'ios-people'} size={28} color={'white'}
            style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder={'Username'}
            placeholderTextColor={'white'}
            underlineColorAndroid='transparent'
          />
        </View>

        <View style={styles.inputContainer}>
          <Icon name={'ios-lock'} size={28} color={'white'}
            style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder={'Password'}
            secureTextEntry={this.state.showPass}
            placeholderTextColor={'white'}
            underlineColorAndroid='transparent'
          />

          <TouchableOpacity style={styles.btnEye} onPress={this.showPass.bind(this)}>
            <Icon name={this.state.press == false ? 'ios-eye' : 'ios-eye-off'} size={26} color={'white'}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.btnLogin}>
            <Text style={styles.text}>Login</Text>
        </TouchableOpacity>

      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  bgcontainer: {
    flex: 1,
    width: null,
    height: null,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 50,
  },
  logo: {
    width: 120,
    height: 120,
  },
  logoText: {
    color: 'white',
    fontSize: 30,
    fontWeight: '500',
    marginTop: 10,
    opacity: 0.5
  },
  inputContainer: {
    marginTop: 10,
  },
  input: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 45,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    color: 'rgba(255, 255, 255, 0.7)',
    marginHorizontal: 25,
  },
  inputIcon: {
    position: 'absolute',
    top: 10,
    left: 37,
  },
  btnEye: {
    position: 'absolute',
    top: 8,
    right: 37,
    opacity: 0.5
  },
  btnLogin: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 45,
    backgroundColor: '#432577',
    justifyContent: 'center',
    marginTop: 20
  },
  text: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 16,
    textAlign: 'center'
  }
});
