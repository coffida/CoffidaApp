import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import styles from './styles';
import {FAB} from 'react-native-paper';
import {Header, SearchBar, CheckBox, Card} from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
import theme from '../../theme';
import {coffe} from '../../assets';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {color} from 'react-native-reanimated';
export default class CoffeeDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      price: '',
      overall: '',
      quality: '',
      clean: '',
      index: '',
      name: '',
      img: '',
      islike: '',
      cid: '',
      posts: [
        {
          id: 0,
          name: 'Zaid',
          comments: '200',
          likes: '200',
          rew_id: 1,
          text: `Great coffee, but the bathrooms stank!`,
          islike: false,
        },
        {
          id: 2,
          rew_id: 2,
          name: 'Zaid',
          comments: '200',
          likes: '200',
          text: `Great coffee, but the bathrooms stank!`,
          islike: false,
        },
        {
          id: 3,
          rew_id: 3,
          name: 'Zaid',
          comments: '200',
          likes: '200',
          text: `Great coffee, but the bathrooms stank!`,
          islike: false,
        },
        {
          id: 4,
          rew_id: 4,
          name: 'Zaid',
          comments: '200',
          likes: '200',
          text: `Great coffee, but the bathrooms stank!`,
          islike: false,
        },
        {
          id: 5,
          rew_id: 5,
          name: 'Zaid',
          comments: '200',
          likes: '200',
          text: `Great coffee, but the bathrooms stank!`,
          islike: false,
        },
      ],
    };
  }

  componentDidMount = () => {
    this.getdata();
  };
  getdata = () => {
    const data = this.props.navigation.getParam('data');
    console.log('Data from: ', data);
    this.setState({
      img: data.img,
      cid: data.cid,
      quality: data.qlty_rtng,
      overall: data.overall_rtng,
      clean: data.clean_rtng,
      price: data.price_rtng,
      islike: data.islike,
      name: data.name,
    });
  };
  toogleLike = (id) => {
    // console.log(this.state.data);

    const res = this.state.posts.map((item) => {
      if (item.rew_id === id) {
        return {
          ...item,
          islike: !item.islike,
        };
      } else {
        return {...item};
      }
    });
    console.log(res);
    this.setState({posts: res});
  };
  renderPosts = ({item, index}) => {
    return (
      <View key={index} style={styles.cardStyle}>
        <View style={[styles.horizontalContainer]}>
          <Text style={[styles.largeText, {color: theme.colors.primary}]}>
            {item.name}
          </Text>
        </View>
        <View>
          <View style={[styles.bottomContainer]}>
            <TouchableOpacity onPress={() => this.toogleLike(item.rew_id)}>
              <Ionicons
                name="ios-heart"
                size={22}
                color={item.islike ? 'red' : 'gray'}
              />
            </TouchableOpacity>
            <Text style={styles.mediumText}>{`${item.likes} Likes`}</Text>
          </View>
          <Text style={styles.mediumText}>{item.text} </Text>
        </View>
      </View>
    );
  };

  render() {
    const {img, cid, islike, price, clean, overall, quality, name} = this.state;
    // console.log(this.state.data);
    return (
      <SafeAreaView style={styles.Main}>
        <ScrollView>
          <Header
            backgroundColor="skyblue"
            centerComponent={
              <Text
                style={{
                  color: theme.colors.primaryDark,
                  fontSize: 26,
                  alignSelf: 'center',
                }}>
                Coffee Detail
              </Text>
            }
          />
          <Image
            source={img}
            style={[styles.userImgStyle, {resizeMode: 'cover'}]}
          />
          <View style={[styles.horizontalContainer, {}]}>
            <View style={{}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginLeft: 5,
                  //   backgroundColor: 'skyblue',
                  alignContent: 'center',
                  marginRight: 5,
                }}>
                <Text
                  style={{
                    fontSize: 26,
                    margin: 10,
                    fontWeight: 'bold',
                    alignSelf: 'center',
                    //,
                  }}>
                  {name}
                </Text>

                <MaterialIcons
                  name="favorite"
                  size={30}
                  color={islike ? 'red' : 'black'}
                  style={{alignSelf: 'center'}}
                />
              </View>
              <View style={{marginLeft: 10}}>
                <Text
                  style={{
                    fontSize: 16,
                    margin: 5,
                    // fontWeight: 'bold',
                    color: theme.colors.gray,
                  }}>{`Overall Average Rating : ${overall}`}</Text>
                <Text
                  style={{
                    fontSize: 16,
                    margin: 5,
                    // fontWeight: 'bold',
                    color: theme.colors.gray,
                  }}>{`Price Average Rating : ${price}`}</Text>
                <Text
                  style={{
                    fontSize: 16,
                    margin: 5,
                    // fontWeight: 'bold',
                    color: theme.colors.gray,
                  }}>{`Quality Average Rating : ${quality}`}</Text>
                <Text
                  style={{
                    fontSize: 16,
                    margin: 5,
                    // fontWeight: 'bold',
                    color: theme.colors.gray,
                  }}>{`Cleanliness Average Rating : ${clean}`}</Text>
              </View>
              <View style={{marginTop: 10}}>
                <Text
                  style={{
                    fontSize: 24,
                    marginLeft: 10,
                    fontWeight: 'bold',
                  }}>
                  User Reviews :
                </Text>
              </View>
            </View>
          </View>
          <FlatList
            data={this.state.posts}
            extraData={this.state}
            renderItem={this.renderPosts}
            keyExtractor={(item, index) => item + index.toString()}
            showsVerticalScrollIndicator={false}
          />
        </ScrollView>
        <FAB
          style={{
            position: 'absolute',
            margin: 16,
            right: 0,
            bottom: 0,
            backgroundColor: theme.colors.gray,
          }}
          small
          icon="plus"
          //   color={theme.colors.primary}
          onPress={() => this.props.navigation.navigate('Add Review')}
        />
      </SafeAreaView>
    );
  }
}
