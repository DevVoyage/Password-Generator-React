import Snackbar from 'react-native-snackbar';


export function showErrorSnackbar(errorTxt : string) {
    Snackbar.show({
        text: errorTxt,
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: '#E78F81', // red
        textColor: '#FFF',
    });
}

export function showSuccessSnackBar(successTxt : string) {
    Snackbar.show({
        text: successTxt,
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: '#96CEB4', // green
        textColor: '#FFF',
    });
}

export function showInfoSnackBar(infoTxt : string) {
    Snackbar.show({
        text: infoTxt,
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: '#2C3333', // black
        textColor: '#FFF',
    });
}