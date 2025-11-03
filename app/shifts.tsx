// app/shifts.tsx
import { router } from "expo-router";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";

const shifts = [
  { id: "1", title: "Night Shift – Melbourne CBD", time: "10:00 PM – 6:00 AM" },
  { id: "2", title: "Event Security – Docklands", time: "5:00 PM – 11:00 PM" },
];

export default function Shifts() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Available Shifts</Text>

      {/* Centered Go Back Button just under title */}
      <View style={styles.backButtonContainer}>
        <Button title="Go Back" onPress={() => router.back()} />
      </View>

      <FlatList
        data={shifts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.shiftTitle}>{item.title}</Text>
            <Text>{item.time}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
    backgroundColor: "#f0f0f0",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  backButtonContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  shiftTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
  },
});
