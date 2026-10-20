import { Tabs } from "expo-router";
import Ionicons from '@react-native-vector-icons/ionicons';

export default function TabLayout() {
  return (
    <Tabs> 
        <Tabs.Screen 
            name="index" 
            options={{ 
                title: 'Records', 
                tabBarIcon: ({ color, focused }) => (<Ionicons name={focused ? 'folder' : 'folder-outline'} color={color} size={24}/>)
                }} />
        <Tabs.Screen 
            name="upload" 
            options={{ 
                title: 'Upload',
                tabBarIcon: ({ color, focused }) => (<Ionicons name={focused ? 'add-circle' : 'add-circle-outline'} color={color} size={24}/>)
                }} />
        <Tabs.Screen 
            name="symptom_log" 
            options={{ 
                title: 'Symptoms',
                tabBarIcon: ({ color, focused }) => (<Ionicons name={focused ? 'list' : 'list-outline'} color={color} size={24}/>)
                 
                }} />
    </Tabs>
  ) 
}
