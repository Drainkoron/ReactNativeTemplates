import * as Font from 'expo-font'

export async function bootstrap(){
    await Font.loadAsync({
        'dosis':'../assets/fonts/Dosis-VariableFont_wght.ttf',
        'fredokaOne':'../assets/fonts/FredokaOne-Regular.ttf'
    })
}