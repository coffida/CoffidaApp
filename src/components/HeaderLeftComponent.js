import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Text,
} from 'react-native';
import {back} from '../assets';
import Entypo from 'react-native-vector-icons/Entypo';
const HeaderLeftComponent = ({navigation, icon}) => {
  return (
    <View>
      {icon === 'back' ? (
        <TouchableWithoutFeedback
          activeOpacity={0}
          style={styles.drawerIcon}
          onPress={() => {
            navigation.goBack();
          }}>
          <Image
            source={back}
            resizeMode={'contain'}
            style={styles.drawerIcon}
          />
        </TouchableWithoutFeedback>
      ) : (
        <TouchableWithoutFeedback
          activeOpacity={0}
          style={styles.drawerIcon}
          onPress={() => {
            navigation.toggleDrawer();
          }}>
          <Entypo name="menu" size={27} color="black" />
        </TouchableWithoutFeedback>
      )}
    </View>
  );
};

export default HeaderLeftComponent;

const styles = StyleSheet.create({
  drawerIcon: {
    height: 25,
    width: 25,
    color: 'black',
  },
  textStyle: {
    fontSize: 20,
    // backgroundColor:'skyblue',
    fontWeight: 'bold',
    marginLeft: 10,
    width: '170%',
    color: 'white',
    alignSelf: 'center',
  },
});
