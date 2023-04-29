import React, { useEffect } from 'react';
import styles from './Location.module.css';

const Location = () => {
  useEffect(() => {
    loadGoogleMapsApi();
  }, []);

  const loadGoogleMapsApi = () => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBd5zKLALTS4yWtC8T3ocUUBgbe0pG32_4`;
    script.async = true;
    script.defer = true;
    script.onload = initMap;
    document.body.appendChild(script);
  };

  const initMap = () => {
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat: 37.5665, lng: 126.9780 },
      zoom: 14,
    });

    const marker = new window.google.maps.Marker({
      position: { lat: 37.5665, lng: 126.9780 },
      map: map,
      title: 'Company Location',
    });
  };

  return (
    <div className={styles.location}>
      <h1>Company Location</h1>
      <div id="map" className={styles.map}></div>
    </div>
  );
};

export default Location;
