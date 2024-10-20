import React from "react";
import {
    Pressable,
    Text,
    StyleSheet,
} from "react-native";

const btnColors = [
    '#4F75FF',  // blue background color
    '#A04747'   // red background color
];

export enum btnType {
    Primary = 1,
    Danger,
}

type btnPropType = {
    type : btnType, // type 1 : Primary button; 2 : Danger Button
    title : string,
    onPress : () => void,
}



function Btn(props : btnPropType) : React.JSX.Element {
    const type = props.type;
    const title = props.title;
    const onPress = props.onPress;
    return (
        <Pressable 
        onPress={onPress} 
        style={[style.btnView, {backgroundColor: btnColors[type-1]}]}>
            <Text style={style.btnTxt}>{title}</Text>
        </Pressable>
    );
}

const style = StyleSheet.create({
    btnView: {
      borderRadius: 10,
      minWidth: '40%',
      height: 60,
      alignSelf: 'center',
      padding: 10,
      marginTop: 50,
      alignItems: 'center',
      justifyContent: 'center',
    },

    btnTxt: {
        fontSize: 25,
        fontWeight: '600',
        color: '#FFF',
        textAlign: 'center',
    }
});

export default Btn;