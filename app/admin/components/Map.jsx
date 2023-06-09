import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

export default function Map() {
  return (
    <ComposableMap>
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              style={{
                default: {
                  fill: "#182232",
                  fillOpacity: "0.3",
                },
                hover: {
                  fill: "#182232",
                  fillOpacity: "0.5",
                },
                pressed: {
                  fill: "#182232",
                  fillOpacity: "0.3",
                },
              }}
            />
          ))
        }
      </Geographies>
    </ComposableMap>
  );
}
