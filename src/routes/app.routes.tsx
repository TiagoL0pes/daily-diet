import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DietStatus } from "@screens/DietStatus";
import { Home } from "@screens/Home";
import { MealDetails } from "@screens/MealDetails";
import { NewMeal } from "@screens/NewMeal";
import { Statistics } from "@screens/Statistics";

const routes = [
    { name: "home", component: Home },
    { name: "statistics", component: Statistics },
    { name: "newMeal", component: NewMeal },
    { name: "details", component: MealDetails },
    { name: "status", component: DietStatus },
];

const { Navigator, Screen } = createNativeStackNavigator();

export const AppRoutes = () => {
    return (
        <Navigator
            screenOptions={{ headerShown: false }}
        >
            {
                routes.map((route, index) =>
                    <Screen
                        key={index}
                        name={route.name}
                        component={route.component}
                    />
                )
            }
        </Navigator>
    )
}
