import { TextInput, View, StyleSheet } from "react-native"

const Input = ({...props}) => {
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} {...props}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#FFFFFF',
      height: 50,
      width: "100%",
      borderRadius: 10,
      paddingHorizontal: 15,
      marginVertical: 10
    },
    input: {
        height: 50
    }
  });

export default Input