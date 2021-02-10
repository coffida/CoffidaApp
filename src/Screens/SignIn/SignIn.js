import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  ToastAndroid,
  AsyncStorage
} from 'react-native';
import {Fonts} from '../../utils/Fonts';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import theme from '../../theme';
// Redux Libraries
import { connect } from 'react-redux';
import { loginUser } from '../../redux/action/userAction';
// Validations
import { validateEmail, isEmpty } from '../../constants/functions';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = 
    {
      email: '', 
      password: '',
      loader: false,
    };
  }
  loginUser() {
    const { email, password } = this.state;
    console.log("Email => " + email, "Password => " + password)
    const { loginUser } = this.props

    if (isEmpty(email) || isEmpty(password)) {
      ToastAndroid.show("Please Fill All Fields", ToastAndroid.LONG, ToastAndroid.BOTTOM);
      return;
    } else if (!validateEmail(email)) {
      ToastAndroid.show("Please Enter Valid Email Address", ToastAndroid.LONG, ToastAndroid.BOTTOM);
      return;
    }
    else {
      this.setState({
        loader: true
      })
      let body = {
        email: email,
        password: password
      }

      loginUser(body).then(
        (response) => {
          console.log("LoginView -> loginUser -> response", response)
          if (response.user_id && response.session_token) {
            this.setState({
              loader: true
            })
            console.log("User ID: " + response.user_id, "Session Token: " + response.session_token );
            AsyncStorage.setItem('UserID', response.user_id);
            AsyncStorage.setItem('SessionToken', response.session_token); 
            this.props.navigation.navigate('Home');
            setTimeout(() => {
              this.setState({
                loader: false
              })
            }, 3000);
          }
          else{
            ToastAndroid.show("User Not Found !!!", ToastAndroid.LONG, ToastAndroid.BOTTOM);
          }
        },
        (error) => {
          console.log("LoginView -> loginUser -> error", error)
          this.setState({
            loader: false
          })
          ToastAndroid.show("Please Try Again !!!", ToastAndroid.LONG, ToastAndroid.BOTTOM);
        },
      );
    }
  }
  render() {
    return (
      <View style={styles.mainContainer}>
        <View
          style={{
            justifyContent: 'center',
          }}>
          <Text
            style={[
              styles.largeText,
              {
                color: theme.colors.primary,
                fontSize: 24,
                textAlign: 'center',
              },
            ]}>
            Login to your account
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Enter Email"
            // autoCorrect={this.props.autoCorrect}
            autoCapitalize={'none'}
            returnKeyType={'done'}
            keyboardType={'email-address'}
            placeholderTextColor="gray"
            value={this.state.email}
            underlineColorAndroid="transparent"
            onChangeText={(email) => {
              this.setState({email});
            }}
          />
          <TextInput
            style={styles.input}
            secureTextEntry={this.showPass}
            placeholderTextColor="gray"
            placeholder="Password"
            returnKeyType={'done'}
            autoCapitalize={'none'}
            autoCorrect={false}
            secureTextEntry={true}
            value={this.state.password}
            onChangeText={(password) => {
              this.setState({password});
            }}
          />

          {/* <TouchableOpacity
            style={{alignSelf: 'flex-end', marginRight: '20%'}}
            onPress={() => this.props.navigation.navigate('ForgotPassword')}
            >
            <Text
              style={{
                marginBottom: 5,
                color: theme.colors.secondary,
                padding: 5,
                fontFamily: Fonts.FontAwesome,
              }}>
              Forget Password?
            </Text>
          </TouchableOpacity> */}

          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.buttonStyle}
            onPress={() => { this.loginUser();}}>
            <Text
              style={[
                styles.mediumText,
                {color: theme.colors.primary, fontSize: 15},
              ]}>
              {
                this.state.loader && this.state.loader ?
                  'Loading'
                :
                'Login'
              }
            </Text>
          </TouchableOpacity>
          <View style={{alignSelf: 'center', flexDirection: 'row'}}>
            <Text
              style={{
                fontFamily: Fonts.FontAwesome,
                padding: 5,
                color: theme.colors.primary,
              }}>
              Dont have an account?
            </Text>
            <TouchableOpacity
              onPress={() => {
                    
                   this.props.navigation.navigate('SignUp');
                 
              }}>
              <Text
                style={{
                  color: theme.colors.secondary,
                  fontFamily: Fonts.FontAwesome,
                  padding: 5,
                }}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { isLogin, user } = state.user;
  return { isLogin, user };
};

const mapDispatchToProps = {
  loginUser
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
