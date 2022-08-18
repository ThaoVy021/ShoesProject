import {View, Image, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from '../InformationProductTop/styles';
import {icons} from '../../../../../../constants';

const InformationProductTop = () => {
  return (
    <View style={styles.information_product_top}>
      {/* Title */}
      <Text style={styles.information_product_top_title}>Ultraboost Shoes</Text>

      {/* line 2 */}
      <View style={styles.information_product_top_rate}>
        <Text style={styles.text_color_grey}>Men's Running</Text>
        <Image
          source={icons.like}
          style={styles.information_product_top_image_rate_margin}
        />
        <Text>10</Text>
      </View>

      {/* line 3 */}
      <View style={[styles.information_product_top_rate, styles.price_colors]}>
        <Text style={styles.price}>$180.00</Text>
        <View style={styles.product_choose_color}>
          <Text style={styles.text_color_grey}>Colors</Text>
          <TouchableOpacity
            style={[styles.product_choose_color_black, styles.marginLeft]}
          />
          <TouchableOpacity
            style={[styles.product_choose_color_white, styles.marginLeft]}
          />
        </View>
      </View>

      {/* line 4 */}
      <View style={[styles.information_product_top_rate, styles.select_size]}>
        <Text style={styles.select_size_text}>Select a size</Text>
        <Text style={styles.view_size}>View size guide</Text>
      </View>

      <View
        style={[styles.information_product_top_rate, styles.infor_choose_size]}>
        <TouchableOpacity
          style={[
            styles.product_choose_color_white,
            styles.marginLeft,
            styles.choose_size,
          ]}>
          <Text style={styles.number_size}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.product_choose_color_white,
            styles.marginLeft,
            styles.choose_size,
          ]}>
          <Text style={styles.number_size}>7.5</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.product_choose_color_white,
            styles.marginLeft,
            styles.choose_size,
          ]}>
          <Text style={styles.number_size}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.product_choose_color_white,
            styles.marginLeft,
            styles.choose_size,
          ]}>
          <Text style={styles.number_size}>8.5</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.product_choose_color_white,
            styles.marginLeft,
            styles.choose_size,
          ]}>
          <Text style={styles.number_size}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.product_choose_color_white,
            styles.marginLeft,
            styles.choose_size,
          ]}>
          <Text style={styles.number_size}>9.5</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.line} />
    </View>
  );
};

export default InformationProductTop;
