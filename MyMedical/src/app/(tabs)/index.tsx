import { useState } from 'react';
import { ScrollView } from 'react-native';
import Ionicons from '@react-native-vector-icons/ionicons';
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  TabsContentWrapper,
  TabsTriggerText,
  TabsIndicator,
} from '@/components/ui/tabs';
import {
  Select,
  SelectTrigger,
  SelectInput,
  SelectIcon,
  SelectPortal,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicator,
  SelectDragIndicatorWrapper,
  SelectItem,
} from '@/components/ui/select';
import {
  FormControl,
  FormControlLabel,
  FormControlLabelText,
} from '@/components/ui/form-control';
import { ChevronDownIcon } from '@/components/ui/icon';
import { Box } from '@/components/ui/box';
import { Text } from '@/components/ui/text';

type SortOption = 'date' | 'recordType' | 'orderingDoctor';

export default function RecordsScreen() {
  const [sortBy, setSortBy] = useState<SortOption>('date');

  return (
    <ScrollView className="flex-1 bg-background" contentContainerClassName="p-4">
      <Tabs defaultValue="allRecords" variant="filled">
        <TabsList>
          <TabsIndicator />
          <TabsTrigger value="allRecords">
            <TabsTriggerText>All Records</TabsTriggerText>
          </TabsTrigger>
          <TabsTrigger value="trends">
            <TabsTriggerText>Trends</TabsTriggerText>
          </TabsTrigger>
        </TabsList>

        <TabsContentWrapper>
          <TabsContent value="allRecords">
            <FormControl className="mb-4">
              <FormControlLabel>
                <FormControlLabelText>Sort By</FormControlLabelText>
              </FormControlLabel>
              <Select
                selectedValue={sortBy}
                onValueChange={(value) => setSortBy(value as SortOption)}
              >
                <SelectTrigger variant="outline" size="md">
                  <SelectInput placeholder="Select option" />
                  <SelectIcon className="mr-3" as={ChevronDownIcon} />
                </SelectTrigger>
                <SelectPortal>
                  <SelectBackdrop />
                  <SelectContent>
                    <SelectDragIndicatorWrapper>
                      <SelectDragIndicator />
                    </SelectDragIndicatorWrapper>
                    <SelectItem label="Date" value="date" />
                    <SelectItem label="Record Type" value="recordType" />
                    <SelectItem label="Ordering Doctor" value="orderingDoctor" />
                  </SelectContent>
                </SelectPortal>
              </Select>
            </FormControl>

            <EmptyState
              icon="folder-open-outline"
              title="No records yet"
              message="Records you upload will show up here."
            />
          </TabsContent>

          <TabsContent value="trends">
            <EmptyState
              icon="analytics-outline"
              title="No trends yet"
              message="Trends from your lab results will appear once you've added some records."
            />
          </TabsContent>
        </TabsContentWrapper>
      </Tabs>
    </ScrollView>
  );
}

function EmptyState({
  icon,
  title,
  message,
}: {
  icon: React.ComponentProps<typeof Ionicons>['name'];
  title: string;
  message: string;
}) {
  return (
    <Box className="items-center gap-2 rounded-lg border border-border p-8">
      <Ionicons name={icon} size={40} color="gray" />
      <Text className="text-foreground font-semibold">{title}</Text>
      <Text className="text-muted-foreground text-center">{message}</Text>
    </Box>
  );
}
