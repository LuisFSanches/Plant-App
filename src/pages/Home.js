import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';

import {icons, images, COLORS, SIZES, FONTS} from '../constants';

const Home = () => {
  //Dummy Data
  const [newPlants, setNewPlants] = React.useState([
    {
      id: 0,
      name: 'Plant 1',
      img: images.plant1,
      favourite: false,
    },
    {
      id: 1,
      name: 'Plant 2',
      img: images.plant2,
      favourite: true,
    },
    {
      id: 2,
      name: 'Plant 3',
      img: images.plant3,
      favourite: false,
    },
    {
      id: 3,
      name: 'Plant 4',
      img: images.plant4,
      favourite: false,
    },
  ]);

  //Render
  function renderNewPlants(item, index) {
    return (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginHorizontal: SIZES.base,
        }}>
        <Image
          source={item.img}
          resizeMode="cover"
          style={{
            width: SIZES.width * 0.23,
            height: '80%',
            borderRadius: 15,
          }}
        />
        <View
          style={{
            position: 'absolute',
            bottom: '17%',
            right: 0,
            backgroundColor: COLORS.primary,
            paddingHorizontal: SIZES.base,
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
          }}>
          <Text style={{color: COLORS.white, ...FONTS.body4}}>{item.name}</Text>
        </View>
        <TouchableOpacity
          style={{
            position: 'absolute',
            top: '15%',
            left: 7,
          }}
          onPress={() => {
            console.log('Favourite On Pressed');
          }}>
          <Image
            source={item.favourite ? icons.heartRed : icons.heartGreenOutline}
            resizeMode="contain"
            style={{
              width: 20,
              height: 20,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* New Plants */}
      <View style={{height: '35%', backgroundColor: COLORS.whie}}>
        <View
          style={{
            flex: 1,
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            backgroundColor: COLORS.primary,
          }}>
          <View
            style={{
              marginTop: SIZES.padding * 0.5,
              marginHorizontal: SIZES.padding,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text style={{color: COLORS.white, ...FONTS.h2}}>New Plants</Text>
              <TouchableOpacity
                onPress={() => {
                  console.log('Focus on password');
                }}>
                <Image
                  source={icons.focus}
                  resizeMode="contain"
                  style={{
                    width: 20,
                    height: 20,
                  }}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                marginTop: SIZES.base,
              }}>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={newPlants}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item, index}) => renderNewPlants(item, index)}
              />
            </View>
          </View>
        </View>
      </View>

      {/* Today's Share */}
      <View style={{height: '50%', backgroundColor: COLORS.lightGray}}></View>

      {/* Added Friend */}
      <View style={{height: '20%', backgroundColor: COLORS.lightGray}}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;
