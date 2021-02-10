import React, {Component, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  ToastAndroid
} from 'react-native';
import styles from './styles';
import {Fonts} from '../../utils/Fonts';
import theme from '../../theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
//redux
import {connect} from 'react-redux';
import {register_user} from '../../redux/action/userAction';
// Validations
import { validateEmail, isEmpty } from '../../constants/functions';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fName: '',
      lname: '',
      email: '',
      password: '',
      cnfrmPswrd: '',
      loader: false,
    };
  }

  register_user() {
    const {fName, lname, email, password, cnfrmPswrd } = this.state;
    console.log("Fname => " + fName, "Lname => " + lname, "Email => " + email, "Password => " + password, "CnfrmPass => " + cnfrmPswrd,)
    const { register_user } = this.props

    if (isEmpty(fName) || isEmpty(lname) || isEmpty(email) || isEmpty(password) || isEmpty(cnfrmPswrd)) {
      ToastAndroid.show("Please Fill All Fields", ToastAndroid.LONG, ToastAndroid.BOTTOM);
      return;
    }
    if(password != cnfrmPswrd){
      ToastAndroid.show("Password is not matched with confirm password", ToastAndroid.LONG, ToastAndroid.BOTTOM);
      return;
    }
    else if (!validateEmail(email)) {
      ToastAndroid.show("Please Enter Valid Email Address", ToastAndroid.LONG, ToastAndroid.BOTTOM);
      return;
    }
    else {
      this.setState({
        loader: true
      })
      let body = {
        first_name: fName,
        last_name: lname,
        email: email,
        password: password
      }

      register_user(body).then(
        (response) => {
          console.log("SignUpView -> RegisterUser -> response", response)
          if (response.user_id) {
            this.setState({
              loader: true
            })
            console.log("User ID: " + response.user_id);
            alert("Account Created Successfully !!!");
            this.props.navigation.navigate('SignIn');
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
          console.log("SignUpView -> RegisterUserError -> error", error)
          this.setState({
            loader: false
          })
          ToastAndroid.show("Please Try Again !!!", ToastAndroid.LONG, ToastAndroid.BOTTOM);
        },
      );
    }
  }


  render() {
    const {password, email, cnfrmPswrd, fName, lname} = this.state;
    return (
      <ScrollView style={styles.mainContainer}>
        <View style={{justifyContent: 'center', marginTop: '10%'}}>
          <View>
            <Text
              style={[
                styles.largeText,

                {
                  color: theme.colors.primary,
                  marginTop: 20,
                  alignSelf: 'center',
                  fontSize: 20,
                },
              ]}>
              Create an account
            </Text>
          </View>
          <View style={styles.fieldContainer}>
            <TextInput
              style={styles.input}
              placeholder="Enter First Name"
              value={fName}
              onChangeText={(fName) => this.setState({fName}, () => {})}
            />
            <TextInput
              style={styles.input}
              placeholder="Enter Last Name"
              value={lname}
              onChangeText={(lname) => this.setState({lname}, () => {})}
            />

            <TextInput
              style={styles.input}
              placeholder="Enter Email"
              keyboardType={'email-address'}
              keyboardAppearance={'default'}
              value={email}
              onChangeText={(email) => this.setState({email}, () => {})}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              keyboardType={'default'}
              secureTextEntry
              keyboardAppearance={'default'}
              value={password}
              onChangeText={(password) => this.setState({password}, () => {})}
            />
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              keyboardType={'default'}
              keyboardAppearance={'default'}
              secureTextEntry
              value={cnfrmPswrd}
              onChangeText={(cnfrmPswrd) =>
                this.setState({cnfrmPswrd}, () => {})
              }
            />

            <Text
              style={[
                styles.mediumText,
                {
                  color: theme.colors.secondary,
                  alignSelf: 'center',
                  fontSize: 10,
                  width: '70%',
                  marginVertical: 10,
                },
              ]}>
              By clicking signup you agree with our terms and conditions
            </Text>
            {
              <TouchableOpacity
                disabled={this.props.isLoading}
                style={styles.buttonStyle}
                activeOpacity={0.7}
                onPress={() => {this.register_user();}}>
                <Text
                  style={[
                    styles.mediumText,
                    {color: theme.colors.primary, fontSize: 15},
                  ]}>
                  {
                    this.state.loader && this.state.loader ?
                      'Loading'
                    :
                    'SignUp'
                  }
                </Text>
              </TouchableOpacity>
            }
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'center',
              }}>
              <Text
                style={[
                  styles.mediumText,
                  {color: theme.colors.primary, fontSize: 13},
                ]}>
                Already have an acccount?
              </Text>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('SignIn');
                }}>
                <Text
                  style={[
                    styles.mediumText,
                    {color: theme.colors.secondary, fontWeight: 'bold'},
                  ]}>
                  Login
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => {
  const { register, user } = state.user;
  return {register, user };
};

const mapDispatchToProps = {
  register_user
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
// export default SignUp;
