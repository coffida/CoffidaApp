import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  Linking,
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
export default class Home extends Component {
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
          latitude: 53.492176,
          longitude: -2.23355,
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
          latitude: 53.492176,
          longitude: -2.23355,
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
          latitude: 53.492176,
          longitude: -2.23355,
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
          latitude: 53.492176,
          longitude: -2.23355,
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
          islike: true,
          cid: 5,
          latitude: 53.492176,
          longitude: -2.23355,
        },
      ],
    };
  }
  updateSearch = (search) => {
    this.setState({show: false, search});
    // console.log(search);
    const {index} = this.state;
    console.log(search, index);
    const searchData = this.state.dat.filter(
      (item) =>
        (index === '0' &&
          item.overall_rtng.toLowerCase().includes(search.toLowerCase())) ||
        (index === '1' &&
          item.price_rtng.toLowerCase().includes(search.toLowerCase())) ||
        (index === '2' &&
          item.qlty_rtng.toLowerCase().includes(search.toLowerCase())) ||
        (index === '3' &&
          item.clean_rtng.toLowerCase().includes(search.toLowerCase())) ||
        (index === '' &&
          item.name.toLowerCase().includes(search.toLowerCase())),
    );
    this.setState({search, filteredData: searchData});
    console.loga('====>', this.state.filteredData);
    //try
  };
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
    console.log(res);
    this.setState({dat: res});
  };

  renderPosts = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.navigation.navigate('Coffee Detail', {data: item});
        }}
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
              <View style={styles.horizontalContainer}>
                <TouchableOpacity onPress={() => this.toogleLike(item.cid)}>
                  <MaterialIcons
                    name="favorite"
                    size={25}
                    color={item.islike ? 'red' : 'black'}
                    style={{alignSelf: 'center'}}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    this.openMaps(item.latitude, item.longitude, item.name);
                  }}>
                  <Ionicons
                    style={{
                      // padding: 5,
                      // marginRight: 20,
                      alignSelf: 'center',
                      // backgroundColor: theme.colors.secondary,
                      // borderRadius: 20,
                    }}
                    name="location"
                    size={25}
                    color={theme.colors.primary}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <Text
              style={{
                fontSize: 14,
                marginLeft: 5,
              }}>{`Overall Average Rating : ${item.overall_rtng}`}</Text>
            <Text
              style={{
                fontSize: 14,
                marginLeft: 5,
              }}>{`Price Average Rating : ${item.price_rtng}`}</Text>
            <Text
              style={{
                fontSize: 14,
                marginLeft: 5,
              }}>{`Quality Average Rating : ${item.qlty_rtng}`}</Text>
            <Text
              style={{
                fontSize: 14,
                marginLeft: 5,
              }}>{`Cleanliness Average Rating : ${item.clean_rtng}`}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  openMaps = (lat, lng, sName) => {
    const scheme = Platform.select({
      ios: 'maps:0,0?q=',
      android: 'geo:0,0?q=',
    });
    const latLng = `${lat},${lng}`;
    const label = sName;
    const url = Platform.select({
      ios: `${scheme}${label}@${latLng}`,
      android: `${scheme}${latLng}(${label})`,
    });
    if (!Linking.canOpenURL(url)) {
      showErrorAlert('Coffida', 'URL Not supported');
      return;
    }

    Linking.openURL(url);
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
              Home
            </Text>
          }
          rightComponent={
            <TouchableOpacity
              activeOpacity={0.7}
              style={{marginHorizontal: 10}}
              onPress={() => {
                this.setState({isSearching: !this.state.isSearching});
              }}>
              <Ionicons name="ios-search" size={35} color="white" />
            </TouchableOpacity>
          }
        />
        {this.state.isSearching && (
          <SearchBar
            placeholder="Search"
            lightTheme
            onClear={() => this.setState({show: false})}
            value={this.state.search}
            containerStyle={styles.searchContainer}
            inputContainerStyle={styles.inputStyle}
            onChangeText={(search) => {
              this.updateSearch(search);
            }}
          />
        )}
        <View
          style={{
            marginRight: 10,
            flexDirection: 'row',
            alignSelf: 'flex-end',
          }}>
          <TouchableOpacity style={{marginRight: 5}}>
            <Ionicons
              name="filter"
              size={31}
              onPress={() => this.setState({isFilter: !this.state.isFilter})}
            />
          </TouchableOpacity>
          <Text style={{alignSelf: 'center', fontSize: 16}}>Filters </Text>
        </View>
        {this.state.isFilter && (
          <View
            style={{
              alignSelf: 'center',
              width: '90%',
              elevation: 5,
              backgroundColor: 'white',
              borderRadius: 5,
              bottom: 5,
              marginTop: 5,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignSelf: 'center',
                // backgroundColor: 'skyblue',
                width: '91%',
              }}>
              <CheckBox
                title="Overall Rating"
                containerStyle={styles.checkbox}
                checked={this.state.overall}
                onPress={() =>
                  this.setState({
                    overall: !this.state.overall,
                    price: false,
                    quality: false,
                    clean: false,
                    index: '0',
                  })
                }
                // fontFamily={FontAwesome}
                checkedColor={theme.colors.secondary}
              />
              <CheckBox
                title="Price Rating"
                containerStyle={[styles.checkbox, {marginRight: 23}]}
                checked={this.state.price}
                onPress={() =>
                  this.setState({
                    price: !this.state.price,
                    quality: false,
                    overall: false,
                    clean: false,
                    index: '1',
                  })
                }
                // fontFamily={FontAwesome}
                checkedColor={theme.colors.secondary}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignSelf: 'center',
                // backgroundColor: 'skyblue',
                width: '91%',
              }}>
              <CheckBox
                title="Quality Rating"
                containerStyle={styles.checkbox}
                checked={this.state.quality}
                onPress={() =>
                  this.setState({
                    quality: !this.state.quality,
                    price: false,
                    overall: false,
                    clean: false,
                    index: '2',
                  })
                }
                // fontFamily={FontAwesome}
                checkedColor={theme.colors.secondary}
              />
              <CheckBox
                title="Cleanliness Rating"
                containerStyle={[styles.checkbox, {}]}
                checked={this.state.clean}
                onPress={() =>
                  this.setState({
                    clean: !this.state.clean,
                    quality: false,
                    price: false,
                    overall: false,
                    index: '3',
                  })
                }
                // fontFamily={FontAwesome}
                checkedColor={theme.colors.secondary}
              />
            </View>
          </View>
        )}

        <FlatList
          data={
            this.state.filteredData == ''
              ? this.state.dat
              : this.state.filteredData
          }
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
