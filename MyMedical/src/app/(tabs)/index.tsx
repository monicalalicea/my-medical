import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  TabsContentWrapper,
  TabsTriggerText,
  TabsIndicator,
} from '@/components/ui/tabs';
import { Box } from '@/components/ui/box';
//import { Text } from '@/components/ui/text';

import { Text, View, StyleSheet } from 'react-native';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>About screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
});


function Example() {
  return (
    <Tabs defaultValue="home">
      <TabsList>
        <TabsTrigger value="home">
          <TabsTriggerText>Records</TabsTriggerText>
        </TabsTrigger>
        <TabsTrigger value="profile">
          <TabsTriggerText>Upload</TabsTriggerText>
        </TabsTrigger>
        <TabsTrigger value="settings">
          <TabsTriggerText>Logs</TabsTriggerText>
        </TabsTrigger>
        <TabsIndicator />
      </TabsList>

      <TabsContentWrapper>
        <TabsContent value="home">
          <Box className="p-4">
            <Text className="text-foreground">Welcome to the Home tab!</Text>
          </Box>
        </TabsContent>
        <TabsContent value="profile">
          <Box className="p-4">
            <Text className="text-foreground">Your profile information</Text>
          </Box>
        </TabsContent>
        <TabsContent value="settings">
          <Box className="p-4">
            <Text className="text-foreground">Settings and preferences</Text>
          </Box>
        </TabsContent>
      </TabsContentWrapper>
    </Tabs>
  );
}
