import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function App() : React.JSX.Element {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className='text-2xl font-pblack'>GiGe!</Text>
      <StatusBar style="auto" />
      <Link href="/home">Go to home!</Link>
    </View>
  );
}