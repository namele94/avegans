import React from 'react';
import {Dimensions, Pressable, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {filterData} from '../data/mockData.ts';
import COLORS from '../styles/colors.ts';

const FilterBar = ({
  activeFilter,
  onSelect,
}: {
  activeFilter: any;
  onSelect: (filter: any) => void;
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.gradientBackground}>
        {filterData.map((filter, index) => (
          <View key={filter.id} style={styles.filterContainer}>
            {activeFilter.name === filter.name ? (
              <LinearGradient
                colors={['#FF1DEC', '#A544FF']}
                style={[styles.activeFilterButton]}>
                <Text style={[styles.filterText, styles.activeFilterText]}>
                  {filter.name}
                </Text>
              </LinearGradient>
            ) : (
              <Pressable
                onPress={() => onSelect(filter)}
                style={styles.filterButton}>
                <Text style={styles.filterText}>{filter.name}</Text>
              </Pressable>
            )}
            {index !== filterData.length - 1 && (
              <Text style={styles.separator}>|</Text>
            )}
          </View>
        ))}
      </View>
    </View>
  );
};

const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  gradientBackground: {
    backgroundColor: 'rgba(254, 0, 233, 0.2)',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 3,
    borderRadius: 32,
  },
  filterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  filterButton: {
    paddingVertical: 6,
    borderRadius: 32,
    width: width * 0.2,
    alignItems: 'center',
  },
  activeFilterButton: {
    borderRadius: 32,
    width: width * 0.25,
    alignItems: 'center',
  },
  activeFilter: {
    backgroundColor: '#FF00FF',
  },
  filterText: {
    color: COLORS.white,
    fontSize: 13,
    fontWeight: '600',
  },
  activeFilterText: {
    padding: 20,
  },
  separator: {
    color: 'rgba(254, 0, 233, 0.1)',
    fontSize: 16,
    marginHorizontal: 3,
  },
});

export default FilterBar;
