import React, { useState, useCallback } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { motion } from 'framer-motion';
import { MapPin, Navigation, ExternalLink } from 'lucide-react';
import ScrollReveal from '../../../../components/animations/ScrollReveal';

const MapLocation = () => {
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  // Default location - Tamil Nadu, India (you can update these coordinates)
  const defaultCenter = {
    lat: 11.1271, // Tamil Nadu approximate center
    lng: 78.6569
  };

  // Office locations (you can add multiple locations)
  const locations = [
    {
      id: 1,
      name: "Del Square Technologies",
      position: { lat: 11.1271, lng: 78.6569 },
      address: "Tamil Nadu, India",
      phone: "+91 915 987 5674",
      email: "info@delsquare.com",
      hours: "Mon-Sat: 9:00 AM – 6:00 PM"
    }
  ];

  const mapContainerStyle = {
    width: '100%',
    height: '400px',
    borderRadius: '12px'
  };

  const mapOptions = {
    disableDefaultUI: false,
    zoomControl: true,
    streetViewControl: false,
    mapTypeControl: false,
    fullscreenControl: true,
    styles: [
      {
        featureType: "all",
        elementType: "geometry.fill",
        stylers: [{ weight: "2.00" }]
      },
      {
        featureType: "all",
        elementType: "geometry.stroke",
        stylers: [{ color: "#9c9c9c" }]
      },
      {
        featureType: "all",
        elementType: "labels.text",
        stylers: [{ visibility: "on" }]
      },
      {
        featureType: "landscape",
        elementType: "all",
        stylers: [{ color: "#f2f2f2" }]
      },
      {
        featureType: "landscape",
        elementType: "geometry.fill",
        stylers: [{ color: "#ffffff" }]
      },
      {
        featureType: "landscape.man_made",
        elementType: "geometry.fill",
        stylers: [{ color: "#ffffff" }]
      },
      {
        featureType: "poi",
        elementType: "all",
        stylers: [{ visibility: "off" }]
      },
      {
        featureType: "road",
        elementType: "all",
        stylers: [{ saturation: -100 }, { lightness: 45 }]
      },
      {
        featureType: "road",
        elementType: "geometry.fill",
        stylers: [{ color: "#eeeeee" }]
      },
      {
        featureType: "road",
        elementType: "labels.text.fill",
        stylers: [{ color: "#7b7b7b" }]
      },
      {
        featureType: "road",
        elementType: "labels.text.stroke",
        stylers: [{ color: "#ffffff" }]
      },
      {
        featureType: "road.highway",
        elementType: "all",
        stylers: [{ visibility: "simplified" }]
      },
      {
        featureType: "road.arterial",
        elementType: "labels.icon",
        stylers: [{ visibility: "off" }]
      },
      {
        featureType: "transit",
        elementType: "all",
        stylers: [{ visibility: "off" }]
      },
      {
        featureType: "water",
        elementType: "all",
        stylers: [{ color: "#46bcec" }, { visibility: "on" }]
      },
      {
        featureType: "water",
        elementType: "geometry.fill",
        stylers: [{ color: "#c8d7d4" }]
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [{ color: "#070707" }]
      },
      {
        featureType: "water",
        elementType: "labels.text.stroke",
        stylers: [{ color: "#ffffff" }]
      }
    ]
  };

  const onLoad = useCallback((map) => {
    setMapLoaded(true);
  }, []);

  const onMarkerClick = (location) => {
    setSelectedMarker(location);
  };

  const openInGoogleMaps = (location) => {
    const url = `https://www.google.com/maps/search/?api=1&query=${location.position.lat},${location.position.lng}`;
    window.open(url, '_blank');
  };

  const getDirections = (location) => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${location.position.lat},${location.position.lng}`;
    window.open(url, '_blank');
  };

  return (
    <ScrollReveal y={40} rotateX={10}>
      <motion.div 
        className="bg-white rounded-xl shadow-lg overflow-hidden"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Map Header */}
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <motion.div 
                className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 text-blue-600"
                whileHover={{ scale: 1.1, backgroundColor: "#DBEAFE" }}
              >
                <MapPin className="w-6 h-6" />
              </motion.div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Our Location</h3>
                <p className="text-gray-600">Find us on the map</p>
              </div>
            </div>
            <motion.button
              onClick={() => openInGoogleMaps(locations[0])}
              className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Open in Maps
            </motion.button>
          </div>
        </div>

        {/* Map Container */}
        <div className="relative">
          <LoadScript 
            googleMapsApiKey={import.meta.env.VITE_REACT_APP_GOOGLE_MAP_KEY || "YOUR_API_KEY_HERE"}
            loadingElement={
              <div className="flex items-center justify-center h-96 bg-gray-100">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full"
                />
              </div>
            }
          >
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={defaultCenter}
              zoom={10}
              onLoad={onLoad}
              options={mapOptions}
            >
              {locations.map((location) => (
                <Marker
                  key={location.id}
                  position={location.position}
                  onClick={() => onMarkerClick(location)}
                  animation={mapLoaded ? window.google?.maps?.Animation?.DROP : null}
                />
              ))}

              {selectedMarker && (
                <InfoWindow
                  position={selectedMarker.position}
                  onCloseClick={() => setSelectedMarker(null)}
                >
                  <div className="p-2 max-w-xs">
                    <h4 className="font-bold text-gray-900 mb-2">{selectedMarker.name}</h4>
                    <div className="space-y-1 text-sm text-gray-600">
                      <p className="flex items-center">
                        <MapPin className="w-3 h-3 mr-1" />
                        {selectedMarker.address}
                      </p>
                      <p>📞 {selectedMarker.phone}</p>
                      <p>✉️ {selectedMarker.email}</p>
                      <p>🕒 {selectedMarker.hours}</p>
                    </div>
                    <motion.button
                      onClick={() => getDirections(selectedMarker)}
                      className="mt-3 flex items-center px-3 py-1 bg-blue-600 text-white text-xs rounded hover:bg-blue-700 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Navigation className="w-3 h-3 mr-1" />
                      Get Directions
                    </motion.button>
                  </div>
                </InfoWindow>
              )}
            </GoogleMap>
          </LoadScript>
        </div>

        {/* Quick Actions */}
        <div className="p-4 bg-gray-50 border-t border-gray-100">
          <div className="flex flex-wrap gap-2 justify-center">
            <motion.button
              onClick={() => getDirections(locations[0])}
              className="flex items-center px-4 py-2 bg-green-600 text-white text-sm rounded-lg hover:bg-green-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Navigation className="w-4 h-4 mr-2" />
              Get Directions
            </motion.button>
            <motion.button
              onClick={() => openInGoogleMaps(locations[0])}
              className="flex items-center px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              View Larger Map
            </motion.button>
          </div>
        </div>
      </motion.div>
    </ScrollReveal>
  );
};

export default MapLocation;