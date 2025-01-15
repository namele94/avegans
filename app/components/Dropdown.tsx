import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {filterData} from '../data/mockData.ts';
import COLORS from '../styles/colors.ts';
import {useStore} from '../stores/StoreContext';
import {observer} from 'mobx-react';

const Dropdown = () => {
  const [open, setOpen] = useState(false);
  const {productStore} = useStore();
  const [value, setValue] = useState(productStore.activeFilter.name);

  const dropdownItems = filterData.map(item => ({
    label: item.name,
    value: item.name,
  }));

  const handleValueChange = (val: any) => {
    if (val) {
      productStore.setFilter(val);
    }
  };

  return (
    <View style={styles.container}>
      <DropDownPicker
        open={open}
        value={value}
        items={dropdownItems}
        setOpen={setOpen}
        setValue={setValue}
        onChangeValue={handleValueChange}
        placeholder="Select a category"
        style={styles.dropdown}
        dropDownContainerStyle={styles.dropdownContainer}
        labelStyle={styles.label}
        // @ts-ignore
        arrowIconStyle={styles.arrowIcon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 16,
  },
  dropdown: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    borderColor: COLORS.white,
    paddingHorizontal: 10,
    width: 140,
  },
  dropdownContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    borderColor: '#A10000',
  },
  label: {
    color: COLORS.primary,
    fontSize: 18,
    fontWeight: '500',
  },
  arrowIcon: {
    tintColor: COLORS.primary,
  },
});

export default observer(Dropdown);
