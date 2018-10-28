import React, { Component } from 'react';
import './App.css';
import  { Map, TileLayer, Marker, Popup, Circle, CircleMarker} from 'react-leaflet';
// import L from 'leaflet';
// import dataWithGeo from './data-with-geo'
// import icon from './icon.png';


// const myIcon = L.icon({
//   iconUrl: icon,
//   // iconSize: [40, 50],
//   iconSize: [50, 50],
//   // iconAnchor: [30, 50],
//   iconAnchor: [30, 50],
//   // popupAnchor: [-3, -76],
//   popupAnchor: [-3, -76]
//   // shadowUrl: 'my-icon-shadow.png',
//   // shadowSize: [68, 95],
//   // shadowAnchor: [22, 94]
// });

class App extends Component {

  handleClickCircle = () => {
    console.log("handleClickCircle");
  }

  handleMarker = () => {
    console.log("handleMarker");
  }

  handleMap = () => {
    console.log("handleMap");
  }

  handleButton = () => {
    console.log("handleButton");
  }

  render() {
    // const position = [40.741895, -73.989308];
    const position = [51.51, -0.15]//dataWithGeo[0].geo;
    const zoom = 13;

    return (
      <Map center={position} zoom={zoom} onClick={() => alert('map')}  className="MyMap">
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} onClick={() => alert('Marker')}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        <Circle center={[51.51, -0.1]} color="blue" bubblingMouseEvents={false} radius={200} onClick={() => alert('Circle')} />
        <CircleMarker center={[51.51, -0.12]} color="red" radius={20} onClick={() => alert('CircleMarker')}>
          <Popup>Popup in CircleMarker</Popup>
        </CircleMarker>
      </Map>
    )

    // return (
    //   <div>

    //   <Map className="MyMap" center={position} zoom={13} onClick={this.handleMap}>
    //     <TileLayer
    //       attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
    //       url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    //     />
    //     <Circle center={position} fillColor="blue" radius={200} onClick={this.handleMarker} bubblingMouseEvents={false}/>
    //     </Map>        
    //     {/* <Map 
    //       className="MyMap" 
    //       center={position} 
    //       zoom={zoom}
    //       onClick={this.handleMap}>
    //       <TileLayer
    //         attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
    //         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    //       />
    //       <Marker 
    //         position={position} 
    //         icon={myIcon}
    //         bubblingMouseEvents={false}
    //         onClick={this.handleMarker}
    //       >
    //         <Popup>
    //           {dataWithGeo[0].location}<br/>{position[0]}<br/>{position[1]}
    //           <button onClick={this.handleButton}>bouton</button>
    //         </Popup>
    //       </Marker>

    //             <Circle
    //               center={dataWithGeo[2].geo}
    //               fillColor="red"
    //               // bubblingMouseEvents={false}
    //               onClick={this.handleClickCircle}
    //               radius={200}>
    //             </Circle>
    //     </Map> */}
    //   </div>
    // );
  }
}

export default App;
