import React from "react";
import { View, Text,  StyleSheet} from 'react-native';

export default function List(props){
    return(
        <View style={styles.container}>
            <View style={{justifyContent: 'center', marginLeft: 20, padding: 20, gap: 10}}>
            <Text style={styles.text}>{props.data.nome}</Text>
            <Text style={styles.text}>{props.data.email}</Text>
            <Text style={styles.text}>{props.data.city}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
container:{
    backgroundColor: '#453eff',
    width: '100%',
    height: 150
},

text:{
    color: '#fff',
    fontSize: 20,
    fontStyle: 'italic',
    fontWeight: '500'
}
})