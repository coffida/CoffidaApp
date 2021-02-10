import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity, AsyncStorage} from 'react-native';
import theme from '../../theme';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Header, SearchBar, CheckBox, Card} from 'react-native-elements';
//redux
import {connect} from 'react-redux';
import {logout_user} from '../../redux/action/userAction';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: '',
      email: '',
      password: '',
    };
  }

  logoutUserData() {
    logout_user();
    this.props.navigation.navigate('SignIn');
  }
  componentDidMount = async () =>{
    const UserID = await AsyncStorage.getItem('UserID');
      console.log(UserID);
  }
  render() {
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
            placeholder="Enter First Name"
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
            placeholder="Enter Last Name"
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

          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.buttonStyle}
            onPress={() => this.props.navigation.navigate('Home')}>
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
