import React, { useEffect, useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { fetchDroneLocation } from './droneLocationService';

const DroneLocationMap = () => {
 const [droneLocation, setDroneLocation] = useState({ latitude: 0, longitude: 0 });

 useEffect(() => {
    const fetchLocation = async () => {
      const location = await fetchDroneLocation();
      setDroneLocation(location);
    };

    // Fetch the location immediately
    fetchLocation();

    // Set an interval to fetch the location every 10 seconds
    const intervalId = setInterval(fetchLocation, 10000); // Fetch every 10 seconds

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
 }, []);

 return (
    <MapView
      style={{  height: 190, width: 190, flexDirection:'column',marginTop:60 }}
      initialRegion={{
        latitude: droneLocation.latitude,
        longitude: droneLocation.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
      <Marker
        coordinate={{
          latitude: droneLocation.latitude,
          longitude: droneLocation.longitude,
        }}
        title="Drone Location"
      />
    </MapView>
 );
};

export default DroneLocationMap;
