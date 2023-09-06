import React from 'react'
import { View } from 'react-native'
import { Card } from '../../components/Card'


function HomeScreen(){
    return (
      <View style={styles.container}>
        <Card />
      </View>
    );
}

export default HomeScreen

/* function HomeScreen (){
  return (
    <View style={styles.container}>
      <Card/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
}
 */
