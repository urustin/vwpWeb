import React from 'react';
import styles from './Location.module.css';

const Location = () => {
  return (
    <>
      <div className={styles.location}>
        <h1 className={styles.h1}>Company Location</h1>
        {/* <div id="map" className={styles.map}></div> */}
        <div style={{overflow:"hidden",maxWidth:"100%",width:"100%",height:"800px"}}>
        <div id="g-mapdisplay" style={{height:"100%", width:"100%", maxWidth:"100%"}}>
            <iframe style={{height:"100%", width:"100%", border:"0"}} frameborder="0" src="https://www.google.com/maps/embed/v1/place?q=VictoriaWoolProcessor,+Australia&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe>
          </div>
          <a className="code-for-google-map" href="https://kbj9qpmy.com/bp" id="enable-map-info">Broadband Providers</a>
        </div>
      </div>
    </>
  );
};

export default Location;