import { View, StyleSheet} from 'react-native';
import Card from './src/components/Card/Card';
import LoginScreen from './src/Views/LoginScreen/LoginScreen';
import StatusBarCustomized from './src/components/StatusBarCustomized/StatusBar.jsx'

export default function App() {
  return (

    <View style={styles.container}>
      {/* <StatusBarCustomized/> */}
     {/*  <Card/> */}
      <LoginScreen/>
    </View>
  
  );

  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    
  },
})


