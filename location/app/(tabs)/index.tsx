import { StyleSheet, View, Text, Button } from "react-native";
import * as Location from "expo-location";
import { useEffect, useState } from "react";

export default function TabOneScreen() {
  const [status, requestPermission] = Location.useForegroundPermissions();
  // const [status, requestPermission] = Location.useForegroundPermirssions();
  const [location, setLocation] = useState<any>(null);

  useEffect(() => {
      Location.getCurrentPositionAsync({}).then((location) => {
        console.log("location", location)
        setLocation(location);
      });
  }, []);

  if (!status || !status.granted) {
    return (
      <View style={styles.container}>
        <Text>Location</Text>
        <Text> You have to give permission to use this</Text>
        <Button title="give permission" onPress={requestPermission} />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      {location && location.coords ? (
        <>
          <Text style={styles.title}>Longitude: {location.coords.longitude}</Text>
          <Text style={styles.title}>Latitude: {location.coords.latitude}</Text>
        </>
      ) : (
        <Text>Loading location...</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
