import { StatusBar } from 'expo-status-bar';
import {NavigationContainer} from "@react-navigation/native";
import TabNavigation from "./src/Navigation";

export default function App() {
  return (
      <NavigationContainer>
        <TabNavigation/>
        <StatusBar style="auto" />
      </NavigationContainer>

  );
}
