import React from 'react';
import ReactDOM from 'react-dom';
import Directions from 'mapbox-gl-directions/dist/mapbox-gl-directions';
import "mapbox-gl-directions/dist/mapbox-gl-directions.css";

const MAPBOX_TOKEN = "pk.eyJ1IjoibHV0Zml3aXJhd2FuIiwiYSI6ImNsZHk4OXNlcjBtMXIzb29henBsZHg1czAifQ.6K3x_lXHWf3dwrZbprTBnA";

class Rute extends React.Component {
  mapRef = React.createRef();

  render() {
    return (
      <div style={{ height: "100vh" }}>
        <Directions
          mapRef={this.mapRef}
          mapboxApiAccessToken={MAPBOX_TOKEN}
        />
      </div>
    );
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(<Rute />);
export default Rute;