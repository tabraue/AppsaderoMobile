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
import { CloseEyeIcon } from '../../../icons/Icons';

function PopUpMenu({navigation}) {
    const { logout } = useContext(AuthContext);

  return (
    <View>
      <Menu style={styles.container}>
        <MenuTrigger style={{ fontSize: theme.fontSizes.subheading, justifyContent: "center", fontWeight: "bold", marginHorizontal:10,}} 
        ><CloseEyeIcon/></MenuTrigger>
        <MenuOptions
          customStyles={{
            optionsContainer: { marginTop: 30, right: 0, padding: 15, width: '35%'},
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
/*     container: {
        flex: 1,
        flexDirection: 'column'
    } */
})

export default PopUpMenu