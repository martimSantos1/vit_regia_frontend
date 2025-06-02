// src/components/MapComponent.tsx
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Box, Button } from '@mui/material';
import DirectionsIcon from '@mui/icons-material/Directions';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

const MapComponent = () => {
  const isepCoords: [number, number] = [41.178128, -8.60842];

  const handleDirectionsClick = () => {
    const destination = `${isepCoords[0]},${isepCoords[1]}`;
    const url = `https://www.google.com/maps/dir/?api=1&destination=${destination}`;
    window.open(url, "_blank");
  };

  return (
    <Box>
      <MapContainer
        center={isepCoords}
        zoom={16}
        style={{ height: '300px', width: '100%', borderRadius: '12px' }}
        scrollWheelZoom={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        <Marker position={isepCoords}>
          <Popup>Instituto Superior de Engenharia do Porto (ISEP)</Popup>
        </Marker>
      </MapContainer>

      <Box mt={2} display="flex" justifyContent="center">
        <Button
          variant="outlined"
          color="primary"
          startIcon={<DirectionsIcon />}
          onClick={handleDirectionsClick}
        >
          Obter direções
        </Button>
      </Box>
    </Box>
  );
};

export default MapComponent;
