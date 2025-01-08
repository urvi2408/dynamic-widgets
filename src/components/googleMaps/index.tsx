import React, { useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

type HoverInfo = {
  country: string | null;
  position: { x: number; y: number };
};

const GoogleMapsWidget: React.FC = () => {
  const geoUrl = "https://unpkg.com/world-atlas@2/countries-50m.json";
  const [hoverInfo, setHoverInfo] = useState<HoverInfo | null>(null);

  const handleMouseEnter = (geo: any, event: React.MouseEvent) => {
    const countryName = geo.properties.name;

    setHoverInfo({
      country: countryName,
      position: { x: event.pageX, y: event.pageY },
    });
  };

  const handleMouseLeave = () => {
    setHoverInfo(null);
  };

  return (
    <div>
      <ComposableMap>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                onMouseEnter={(event) => handleMouseEnter(geo, event)}
                onMouseLeave={handleMouseLeave}
                style={{
                  default: { fill: "#D6D6DA", outline: "none" },
                  hover: { fill: "#F53", outline: "none" },
                  pressed: { fill: "#E42", outline: "none" },
                }}
              />
            ))
          }
        </Geographies>
      </ComposableMap>

      {hoverInfo && (
        <div className="tool-tip">
          <div>{hoverInfo.country}</div>
        </div>
      )}
    </div>
  );
};

export default GoogleMapsWidget;
