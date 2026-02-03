import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import { SplashScreen } from "../screens/SplashScreen";
import { OnboardingScreen } from "../screens/OnboardingScreen";
import { AuthScreen } from "../screens/AuthScreen";
import { HomeScreen } from "../screens/HomeScreen";
import { WalletScreen } from "../screens/WalletScreen";
import { CouplesWalletScreen } from "../screens/CouplesWalletScreen";
import { FamilyWalletScreen } from "../screens/FamilyWalletScreen";
import { SendReceiveScreen } from "../screens/SendReceiveScreen";
import { TransactionsScreen } from "../screens/TransactionsScreen";
import { GamesScreen } from "../screens/GamesScreen";
import { BrandsScreen } from "../screens/BrandsScreen";
import { ProfileScreen } from "../screens/ProfileScreen";
import { colors } from "../theme/colors";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: { backgroundColor: colors.surface },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textSecondary,
        tabBarIcon: ({ color, size }) => {
          const icons: Record<string, keyof typeof Ionicons.glyphMap> = {
            Home: "home",
            Wallets: "wallet",
            Games: "game-controller",
            Offers: "pricetag",
            Profile: "person"
          };
          return <Ionicons name={icons[route.name]} size={size} color={color} />;
        }
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Wallets" component={WalletScreen} />
      <Tab.Screen name="Games" component={GamesScreen} />
      <Tab.Screen name="Offers" component={BrandsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="Auth" component={AuthScreen} />
      <Stack.Screen name="Main" component={MainTabs} />
      <Stack.Screen name="CouplesWallet" component={CouplesWalletScreen} />
      <Stack.Screen name="FamilyWallet" component={FamilyWalletScreen} />
      <Stack.Screen name="SendReceive" component={SendReceiveScreen} />
      <Stack.Screen name="Transactions" component={TransactionsScreen} />
    </Stack.Navigator>
  );
}
