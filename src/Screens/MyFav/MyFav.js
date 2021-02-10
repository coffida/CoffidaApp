import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import {Header, SearchBar, CheckBox, Card} from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
import theme from '../../theme';
import {coffe} from '../../assets';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {color} from 'react-native-reanimated';
export default class MyFav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSearching: false,
      isFilter: false,
      filteredData: [],
      search: '',
      price: false,
      overall: false,
      quality: false,
      clean: false,
      index: '',
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
      slct: [],
    };
  }

  toogleLike = (id) => {
    // console.log(this.state.data);

    const res = this.state.dat.map((item) => {
      if (item.cid === id) {
        return {
          ...item,
          islike: !item.islike,
        };
      } else {
        return {...item};
      }
    });
    // console.log(res);
    this.setState({data: res});
  };

  renderPosts = ({item, index}) => {
    return (
      <TouchableOpacity
        key={index}
        activeOpacity={0.9}
        style={styles.cardStyle}>
        <View style={[styles.horizontalContainer, {}]}>
          <Image source={item.img} style={styles.userImgStyle} />

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
                style={{alignSelf: 'center'}}
              />
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
    // console.log(this.state.data);
    return (
      <SafeAreaView style={styles.Main}>
        <Header
          backgroundColor="skyblue"
          centerComponent={
            <Text
              style={{
                color: theme.colors.primaryDark,
                fontSize: 26,
                alignSelf: 'center',
              }}>
              My Favourites
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
      </SafeAreaView>
    );
  }
}
