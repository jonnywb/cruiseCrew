import { ThemedText } from "@/components/ThemedText";
import { portCoordinates } from "@/constants/ports";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import MapView, { Marker, Polyline, Region } from "react-native-maps";

export default function App(): React.JSX.Element {
  const [shipPosition, setShipPosition] = useState<Region>({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  });
  const [current_port, setCurrentPort] = useState<string | null>(null);
  const [last_port, setLastPort] = useState<string | null>(null);
  const [next_port, setNextPort] = useState<string | null>(null);

  const [course, setCourse] = useState<number>(0);
  const [destination, setDestination] = useState<{ latitude: number; longitude: number }>({
    latitude: 0,
    longitude: 0,
  });
  const [lastDestination, setLastDestination] = useState<{ latitude: number; longitude: number }>({
    latitude: 0,
    longitude: 0,
  });

  useEffect(() => {
    const fetchShipPosition = async () => {
      try {
        const response = await fetch("https://api.myshiptracking.com/api/v2/vessel?mmsi=310625000&response=extended", {
          headers: {
            Authorization: "Bearer FKI7fL@S$AY6ZeaSs@9X@$SRnE@WIIA^NI",
          },
        });
        const json = await response.json();
        if (json.status === "success" && json.data) {
          const ShipData = json.data;

          setShipPosition((prev) => ({
            ...prev,
            latitude: ShipData.lat,
            longitude: ShipData.lng,
          }));

          setCourse(ShipData.course);

          setCurrentPort(ShipData.current_port);
          setNextPort(ShipData.next_port);
          setLastPort(ShipData.last_port);

          // Lookup destination port based on UN/LOCODE
          const nextPortCode = ShipData.next_port_unloco;
          const matchedPort = portCoordinates.find((p) => p.unlocode === nextPortCode);

          const lastPortCode = ShipData.last_port_unloco;
          const matchedLastPort = portCoordinates.find((p) => p.unlocode === lastPortCode);

          if (matchedPort && matchedLastPort) {
            setDestination({
              latitude: matchedPort.latitude,
              longitude: matchedPort.longitude,
            });

            setLastDestination({
              latitude: matchedLastPort.latitude,
              longitude: matchedLastPort.longitude,
            });
          } else {
            console.warn(`Destination port ${nextPortCode} not found in hardcoded list.`);
          }
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchShipPosition();
    const intervalId = setInterval(fetchShipPosition, 30000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.textBox}>
        <ThemedText style={styles.overlayText}>
          Queen Elizabeth is currently {current_port ? `in ${current_port}` : "at sea"}
          {last_port ? `, and was last seen in ${last_port}` : ""}
          {next_port ? `. The next port will be ${next_port}.` : "."}
        </ThemedText>
      </View>

      <MapView style={styles.map} region={shipPosition}>
        <Marker
          coordinate={{
            latitude: shipPosition.latitude,
            longitude: shipPosition.longitude,
          }}
          title="Cunard Queen Elizabeth"
        >
          <View style={styles.iconWrapper}>
            <FontAwesome
              name="location-arrow"
              size={40}
              color="white"
              style={{
                transform: [{ rotate: `${course}deg` }],
              }}
            />
          </View>
        </Marker>
        <Marker coordinate={destination} title={next_port ? next_port : "Destination"} pinColor="red" />
        <Polyline
          coordinates={[{ latitude: shipPosition.latitude, longitude: shipPosition.longitude }, destination]}
          strokeColor="#0000FF"
          strokeWidth={2}
        />
        <Marker coordinate={lastDestination} title={last_port ? last_port : "Previous Port"} pinColor="grey" />
        <Polyline
          coordinates={[lastDestination, { latitude: shipPosition.latitude, longitude: shipPosition.longitude }]}
          strokeColor="#575757ff"
          strokeWidth={2}
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
  iconWrapper: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 5, // Android shadow
  },
  textBox: {
    backgroundColor: "white",
    position: "absolute",
    top: 80,
    left: 50,
    zIndex: 1,
    width: "75%",
    opacity: 0.75,
    padding: 10,
  },
  overlayText: {
    fontFamily: "Helvetica",
  },
});
