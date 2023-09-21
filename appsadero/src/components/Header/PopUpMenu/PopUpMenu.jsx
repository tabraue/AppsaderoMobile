import React, { useContext } from 'react'
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from "react-native-popup-menu";
import { AuthContext } from '../../../context/AuthContext';
import { StyleSheet, Text, View } from 'react-native';
import LogoutIcon from '../LogoutIcon/LogoutIcon';
import theme from '../../../../theme/theme';

function PopUpMenu({navigation}) {
    const { logout } = useContext(AuthContext);

  return (
    <View>
      <Menu style={styles.container}>
        <MenuTrigger text="Profile" />
        <MenuOptions
          customStyles={{
            optionsContainer: { marginTop: 30 },
          }}
        >
          <MenuOption onSelect={() => alert(`Save`)} text="Profile" />
          <MenuOption onSelect={() => logout()}>
            <LogoutIcon />
          </MenuOption>
        </MenuOptions>
      </Menu>
    </View>
  );
  
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    }
})

export default PopUpMenu