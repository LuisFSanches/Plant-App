import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import {icons, images, COLORS, SIZES, FONTS} from '../constants';

const RequirementBar = ({icon, barPercentage}) => {
  return (
    <View style={{height: 60, alignItems: 'center'}}>
      <View
        style={{
          width: 50,
          height: 50,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 10,
          borderWidth: 1,
          borderColor: COLORS.gray,
        }}>
        <Image
          sorce={icon}
          resizeMode="cover"
          style={{tintColor: COLORS.secondary, width: 30, height: 30}}
        />
      </View>
      {/* Bar */}
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 3,
          marginTop: SIZES.base,
          backgroundColor: COLORS.gray,
        }}></View>
    </View>
  );
};

const PlantDetail = () => {
  function renderRequirementsBar() {
    return (
      <View
        style={{
          flexDirection: 'row',
          margintTop: SIZES.padding,
          paddingHorizonta: SIZES.padding,
          justifyContent: 'space-between',
        }}>
        <RequirementBar icon={icons.sun} barPercentage="50%" />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      {/* Banner Photo */}
      <View style={{height: '35%'}}>
        <Image
          source={images.bannerBg}
          resizeMode="cover"
          style={{
            width: '100%',
            height: '100%',
          }}
        />
      </View>

      {/* Requirements */}
      <View
        style={{
          flex: 1,
          marginTop: -40,
          backgroundColor: COLORS.lightGray,
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          paddingVertical: SIZES.padding,
        }}>
        <Text
          style={{
            paddingHorizontal: SIZES.padding,
            color: COLORS.secondary,
            ...FONTS.h1,
          }}>
          Requirements
        </Text>
        {renderRequirementsBar()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default PlantDetail;
