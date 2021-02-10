import React, {Component} from 'react';
import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import theme from '../../theme';
import styles from './styles';
import {coffe} from '../../assets';
// import Snackbar from 'react-native-snackbar';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Header, SearchBar, CheckBox, Card} from 'react-native-elements';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
//redux
export default class MyReview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dat: [
        {
          id: 0,
          name: 'Apparel',
          overall_rtng: '1',
          price_rtng: '2',
          clean_rtng: '3',
          qlty_rtng: '4',
          contPrsn: 'Mr. Shezad Ali, +92-313-0226224',
          addrs: 'H # 331/A, Block-C, Gulshan-E-Ravi,Lahore',
          img: coffe,
          islike: false,
          cid: 1,
        },
        {
          id: 1,
          overall_rtng: '5',
          price_rtng: '6',
          clean_rtng: '7',
          qlty_rtng: '8',
          name: 'Hot Choclate',
          contPrsn: 'Mr. Shezad Ali, +92-313-0226224',
          addrs: 'H # 331/A, Block-C, Gulshan-E-Ravi,Lahore',
          img: coffe,
          islike: false,
          cid: 2,
        },
        {
          id: 2,
          name: 'Choclate',
          overall_rtng: '9',
          price_rtng: '2',
          clean_rtng: '4',
          qlty_rtng: '5',
          contPrsn: 'Mr. Shezad Ali, +92-313-0226224',
          addrs: 'H # 331/A, Block-C, Gulshan-E-Ravi,Lahore',
          img: coffe,
          islike: false,
          cid: 3,
        },
        {
          id: 3,
          name: 'Cappacino',
          overall_rtng: '3',
          price_rtng: '2',
          clean_rtng: '4',
          qlty_rtng: '5',
          contPrsn: 'Mr. Shezad Ali, +92-313-0226224',
          addrs: 'H # 331/A, Block-C, Gulshan-E-Ravi,Lahore',
          img: coffe,
          islike: false,
          cid: 4,
        },
        {
          id: 4,
          name: 'Cold Coffee',
          overall_rtng: '3',
          price_rtng: '2',
          clean_rtng: '4',
          qlty_rtng: '5',
          contPrsn: 'Mr. Shezad Ali, +92-313-0226224',
          addrs: 'H # 331/A, Block-C, Gulshan-E-Ravi,Lahore',
          img: coffe,
          islike: false,
          cid: 5,
        },
      ],
    };
  }
  renderPosts = ({item, index}) => {
    return (
      <TouchableOpacity
        key={index}
        activeOpacity={0.9}
        style={styles.cardStyle}>
        <View style={[styles.horizontalContainer, {}]}>
          {/* <Image source={item.img} style={styles.userImgStyle} /> */}

          <View style={{}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginLeft: 5,
              }}>
              <Text
                style={{
                  fontSize: 18,
                  // marginLeft: 5,
                  fontWeight: 'bold',
                  alignSelf: 'center',
                  // backgroundColor: 'skyblue',
                }}>
                {item.name}
              </Text>

              <MaterialIcons
                name="favorite"
                size={25}
                color={item.islike ? 'red' : 'black'}
                style={{alignSelf: 'center', marginLeft: 5}}
              />
              <View style={{flexDirection: 'row', marginLeft: 5}}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Edit Review')}>
                  <MaterialCommunityIcons
                    name="comment-edit"
                    size={25}
                    color={item.islike ? 'red' : 'black'}
                    style={{alignSelf: 'center', marginLeft: 5}}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() =>
                    alert(`You Review at ${item.name} is deleted`)
                  }>
                  <MaterialCommunityIcons
                    name="delete"
                    size={25}
                    color={item.islike ? 'red' : 'black'}
                    style={{alignSelf: 'center', marginLeft: 5}}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <Text
              style={{
                fontSize: 14,
                marginLeft: 5,
              }}>{`Overall Rating : ${item.overall_rtng}`}</Text>
            <Text
              style={{
                fontSize: 14,
                marginLeft: 5,
              }}>{`Price Rating : ${item.overall_rtng}`}</Text>
            <Text
              style={{
                fontSize: 14,
                marginLeft: 5,
              }}>{`Quality Rating : ${item.overall_rtng}`}</Text>
            <Text
              style={{
                fontSize: 14,
                marginLeft: 5,
              }}>{`Cleanliness Rating : ${item.overall_rtng}`}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  render() {
    return (
      <View style={styles.Main}>
        <Header
          backgroundColor="skyblue"
          centerComponent={
            <Text
              style={{
                color: theme.colors.primaryDark,
                fontSize: 26,
                alignSelf: 'center',
              }}>
              My Review
            </Text>
          }
        />
        <FlatList
          data={this.state.dat}
          extraData={this.state.data}
          contentContainerStyle={{
            flexDirection: 'column',
            // alignSelf: 'center',
          }}
          showsHorizontalScrollIndicator={false}
          renderItem={this.renderPosts}
          keyExtractor={(item, index) => item + index.toString()}
        />
      </View>
    );
  }
}
