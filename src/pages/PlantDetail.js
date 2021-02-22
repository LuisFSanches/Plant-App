import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

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
          source={icon}
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
          width: '100%',
          height: 3,
          marginTop: SIZES.base,
          backgroundColor: COLORS.gray,
        }}></View>
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: barPercentage,
          height: 3,
          marginTop: SIZES.base,
          backgroundColor: COLORS.primary,
        }}></View>
    </View>
  );
};

const RequirementDetail = ({icon, label, detail}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
        <Image
          source={icon}
          resizeMode="cover"
          style={{tintColor: COLORS.secondary, width: 30, height: 30}}
        />
        <Text
          style={{
            marginLeft: SIZES.base,
            color: COLORS.secondary,
            ...FONTS.h2,
          }}>
          {label}
        </Text>
      </View>
      <View style={{flex: 1, alignItems: 'flex-end'}}>
        <Text style={{marginLeft: SIZES.base, color: COLORS.gray, ...FONTS.h2}}>
          {detail}
        </Text>
      </View>
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
        <RequirementBar icon={icons.drop} barPercentage="50%" />
        <RequirementBar icon={icons.temperature} barPercentage="50%" />
        <RequirementBar icon={icons.garden} barPercentage="50%" />
        <RequirementBar icon={icons.seed} barPercentage="50%" />
      </View>
    );
  }
  function renderRequirements() {
    return (
      <View
        style={{
          flex: 2.5,
          marginTop: SIZES.padding,
          paddingHorizontal: SIZES.padding,
          justifyContent: 'space-between',
        }}>
        <RequirementDetail icon={icons.sun} label="SunLight" detail="15°C" />
        <RequirementDetail
          icon={icons.drop}
          label="Water"
          detail="250 ML Daily"
        />
        <RequirementDetail
          icon={icons.temperature}
          label="Room Temp"
          detail="25°C"
        />
        <RequirementDetail icon={icons.garden} label="Soil" detail="3 Kg" />
        <RequirementDetail
          icon={icons.seed}
          label="Fertilizer"
          detail="150 Mg"
        />
      </View>
    );
  }
  function renderFooter() {
    return (
      <View
        style={{flex: 1, flexDirection: 'row', paddingVertical: SIZES.padding}}>
        <TouchableOpacity
          style={{
            flex: 1,
            //width: '50%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            borderTopRightRadius: 30,
            borderBottomRightRadius: 30,
            paddingHorizontal: SIZES.padding,
            backgroundColor: COLORS.primary,
          }}
          onPress={() => {
            console.log('Take Action');
          }}>
          <Text style={{color: COLORS.white, ...FONTS.h2}}>Take Action</Text>
          <Image
            source={icons.chevron}
            resizeMode={'contain'}
            style={{marginLeft: SIZES.padding, width: 20, height: 20}}
          />
        </TouchableOpacity>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal: SIZES.padding,
          }}>
          <Text style={{flex: 1, color: COLORS.secondary, ...FONTS.h3}}>
            Almost 2 weeks of growing time
          </Text>
          <Image
            source={icons.downArrow}
            resizeMode="contain"
            style={{
              tintColor: COLORS.secondary,
              marginLeft: SIZES.base,
              width: 20,
              height: 20,
            }}
          />
        </View>
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
            marginBottom: SIZES.padding * 0.5,
          }}>
          Requirements
        </Text>
        {renderRequirementsBar()}
        {renderRequirements()}
        {renderFooter()}
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
