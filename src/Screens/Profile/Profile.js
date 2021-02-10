import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity, AsyncStorage, Alert} from 'react-native';
import theme from '../../theme';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Header, SearchBar, CheckBox, Card} from 'react-native-elements';
//redux
import {connect} from 'react-redux';
import {logout_user} from '../../utils/logout';
import {update_user_profile} from '../../redux/action/userAction';
import { isEmpty, validateEmail } from '../../constants/functions';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: '',
      email: '',
      password: '',
      user_id_val: '',
      ProfileData: [],
    };
  }

  logoutUserData() {
    logout_user();
    this.props.navigation.navigate('SignIn');
  }

  // Get User Information Endpoint
  get_profile_data = async (GetProfileUserData) => {
    const response = await fetch('http://10.0.2.2:3333/api/1.0.0/user/' + GetProfileUserData, {
      method: 'get',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const apiResponseData = await response.json();
    // console.log("Profile Data => ", apiResponseData); 
    this.setState({ProfileData: apiResponseData});
  }

  async componentDidMount(){
    this.get_profile_data(this.state.user_id_val);
  }

  // Update Profile Endpoint
  updateProfile(){
    let to_send = {};
    if(this.state.fname){
      to_send["first_name"] = this.state.fname;
    }
    if(this.state.lname){
      to_send["last_name"] = this.state.lname;
    }
    if(this.state.email){
      to_send["email"] = this.state.email;
    }
    if(this.state.password){
      to_send["password"] = this.state.password;
    }

    console.log(to_send, this.state.user_id_val);

    return fetch("http://10.0.2.2:3333/api/1.0.0/user/" + this.state.user_id_val, {
      method: 'patch',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(to_send)
    })
    .then((response) => {
      alert("Profile Updated Successfully !!!");
    })
    .catch((error) => {
      console.log(error);
    })
  }

  render() {
    const { user } = this.props;
    this.state.user_id_val = user.user_id;
    const { ProfileData } = this.state;
    return (
      <View style={styles.mainContainer}>
        <Header
          backgroundColor="skyblue"
          centerComponent={
            <Text
              style={{
                color: theme.colors.primaryDark,
                fontSize: 26,
                alignSelf: 'center',
              }}>
              Edit Profile
            </Text>
          }
        />
        <View
          style={{
            flex: 0.9,
            // backgroundColor: 'skyblue',
            justifyContent: 'center',
          }}>
          <TextInput
            style={styles.Input}
            placeholder={ProfileData.first_name}
            // autoCorrect={this.props.autoCorrect}
            autoCapitalize={'none'}
            returnKeyType={'done'}
            keyboardType={'email-address'}
            placeholderTextColor="gray"
            value={this.state.fname}
            underlineColorAndroid="transparent"
            onChangeText={(fname) => {
              this.setState({fname});
            }}
          />
          <TextInput
            style={styles.Input}
            placeholder={ProfileData.last_name}
            // autoCorrect={this.props.autoCorrect}
            autoCapitalize={'none'}
            returnKeyType={'done'}
            keyboardType={'email-address'}
            placeholderTextColor="gray"
            value={this.state.lname}
            underlineColorAndroid="transparent"
            onChangeText={(lname) => {
              this.setState({lname});
            }}
          />
          <TextInput
            style={styles.Input}
            placeholder={ProfileData.email}
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
            style={styles.Input}
            placeholder="Enter New Password"
            // autoCorrect={this.props.autoCorrect}
            autoCapitalize={'none'}
            returnKeyType={'done'}
            keyboardType={'default'}
            placeholderTextColor="gray"
            value={this.state.password}
            underlineColorAndroid="transparent"
            onChangeText={(password) => {
              this.setState({password});
            }}
          />
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.buttonStyle}
            onPress={() => this.updateProfile()}>
            <Text style={{color: 'white', fontSize: 16}}>Save</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.buttonStyle}
            onPress={() => this.logoutUserData()}>
            <Text style={{color: 'white', fontSize: 16}}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { user } = state.user;
  return { user };
};

const mapDispatchToProps = {
  logout_user
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
