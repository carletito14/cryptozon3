import * as Font from "expo-font";

export default useFonts = async () =>
    await Font.loadAsync({
        'bold': require('../assets/fonts/Outfit-Bold.ttf'),
        'light': require('../assets/fonts/Outfit-ExtraLight.ttf'),
        'regular': require('../assets/fonts/Outfit-Regular.ttf'),
        'semiBold': require('../assets/fonts/Outfit-SemiBold.ttf'),
        'thin': require('../assets/fonts/Outfit-Thin.ttf'),
        'black': require('../assets/fonts/Outfit-Black.ttf'),
    });