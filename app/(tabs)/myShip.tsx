import { useCallback, useEffect, useState } from "react";
import { FlatList, Modal, Pressable, StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

import initialShipPosition from "../data/queenElizabethShipLocation.json";
import voyagePorts from "../data/queenElizabethVoyagePorts.json";

import { useWindowDimensions } from "react-native";

type PortCall = {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  arrival: string;
  departure: string;
  sequence: number;
};

type ShipPosition = {
  latitude: number;
  longitude: number;
  timestamp: string;
};

export default function MapScreen() {
  const [shipPosition, setShipPosition] = useState<ShipPosition | null>(initialShipPosition);
  const [isOpened, setIsOpened] = useState(false);
  const [region, setRegion] = useState({
    latitude: 50.899,
    longitude: -1.404,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });

  useEffect(() => {
    if (!shipPosition) return;
    setRegion({
      latitude: shipPosition.latitude,
      longitude: shipPosition.longitude,
      latitudeDelta: 3,
      longitudeDelta: 3,
    });
  }, [shipPosition]);

  const { width } = useWindowDimensions();
  const openPortsModal = () => setIsOpened(true);
  const closePortsModal = () => setIsOpened(false);

  const handleSelectPort = useCallback((port: PortCall) => {
    setRegion((prev) => ({
      latitude: port.latitude,
      longitude: port.longitude,
      latitudeDelta: prev?.latitudeDelta ?? 3,
      longitudeDelta: prev?.longitudeDelta ?? 3,
    }));
    closePortsModal();
  }, []);

  if (!region) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Loading map…</Text>
      </View>
    );
  } else {
    const sortedPorts = (voyagePorts as PortCall[]).slice().sort((a, b) => a.sequence - b.sequence);

    return (
      <View style={styles.container}>
        <MapView style={styles.map} showsUserLocation={true} region={region} onRegionChangeComplete={setRegion}>
          {shipPosition && (
            <Marker
              coordinate={{ latitude: shipPosition?.latitude, longitude: shipPosition?.longitude }}
              title="Queen Elizabeth"
              description={`Last Update: ${new Date(shipPosition?.timestamp).toLocaleString()}`}
            />
          )}
        </MapView>

        <Pressable style={styles.button} onPress={openPortsModal}>
          <Text style={styles.buttonText}>Choose Port</Text>
        </Pressable>

        <Modal visible={isOpened} animationType="slide" transparent={true} onRequestClose={closePortsModal}>
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Ports</Text>

              <FlatList
                data={voyagePorts}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <Pressable style={styles.portItem} onPress={() => handleSelectPort(item)}>
                    <Text>{item.name}</Text>
                  </Pressable>
                )}
              />

              <Pressable style={styles.closeButton} onPress={closePortsModal}>
                <Text style={styles.closeButtonText}>Close</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { flex: 1 },
  button: {
    position: "absolute",
    bottom: 40,
    left: 20,
    right: 20,
    padding: 12,
    borderRadius: 8,
    backgroundColor: "#111827",
    alignItems: "center",
  },
  buttonText: { color: "white", fontWeight: "600" },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "flex-end",
  },
  modalContent: {
    maxHeight: "60%",
    backgroundColor: "white",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 16,
  },
  modalTitle: { fontSize: 18, fontWeight: "600", marginBottom: 12 },
  portItem: { paddingVertical: 10 },
  closeButton: {
    marginTop: 12,
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#e5e7eb",
    alignItems: "center",
  },
  closeButtonText: { fontWeight: "500" },
});
