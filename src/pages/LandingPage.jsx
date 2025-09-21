import { MapContainer, TileLayer, Marker, Tooltip, Popup } from "react-leaflet";
import { useNavigate } from "react-router-dom";
import L from "leaflet";
import { regions } from "../utils/dummyData";

const getRegionCenter = (regionId) => {
  const centers = {
    "arabian-sea": [15, 64],
    "bay-of-bengal": [15, 89],
    "indian-ocean": [-2, 72],
  };
  return centers[regionId];
};

// More floats & different densities
const REGION_FLOATS = {
  "arabian-sea": 20,
  "bay-of-bengal": 25,
  "indian-ocean": 30,
};

const REGION_RADIUS = {
  "arabian-sea": 1.0,
  "bay-of-bengal": 1.2,
  "indian-ocean": 1.5,
};

// Different float colors per region
const REGION_COLOR = {
  "arabian-sea": "#21a9ed",   // teal blue
  "bay-of-bengal": "#34d399", // green
  "indian-ocean": "#a855f7",  // purple
};

// Generate N scattered offsets
const generateOffsets = (count, radius) => {
  return Array.from({ length: count }, () => {
    const angle = Math.random() * 360;
    const r = Math.random() * radius;
    const rad = (angle * Math.PI) / 180;
    return {
      dLat: r * Math.sin(rad),
      dLon: r * Math.cos(rad),
    };
  });
};

// Function to build float icon by color
const makeFloatIcon = (color) =>
  L.divIcon({
    className: "argo-float-icon",
    html: `<div class="argo-float-dot" style="background:${color}; box-shadow:0 0 10px ${color};"></div>`,
    iconSize: [16, 16],
    iconAnchor: [8, 8],
  });

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-gradient-to-b from-sky-100 via-sky-200 to-sky-300">
      <h1 className="absolute top-8 left-1/2 -translate-x-1/2 text-3xl md:text-5xl z-[1000] text-center font-extrabold text-slate-900 drop-shadow-lg">
        Explore India’s Ocean Data
      </h1>

      <MapContainer
        center={[20.5937, 78.9629]}
        zoom={5}
        minZoom={4}
        maxZoom={6}
        className="w-full h-full z-10"
        zoomControl={false}
        attributionControl={false}
        scrollWheelZoom
      >
        <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" />

        {/* Region labels */}
        {regions.map((region) => (
          <Marker
            key={`label-${region.id}`}
            position={getRegionCenter(region.id)}
            icon={L.divIcon({
              className: "custom-label-icon",
              html: `<div style="color:black; font-weight:800; font-size:20px; text-shadow:1px 1px 3px white">${region.name}</div>`,
              iconSize: [200, 20],
            })}
            interactive={false}
          />
        ))}

        {/* Scattered ARGO floats */}
        {regions.flatMap((region) => {
          const [lat, lon] = getRegionCenter(region.id);
          const count = REGION_FLOATS[region.id];
          const radius = REGION_RADIUS[region.id];
          const color = REGION_COLOR[region.id];
          const offsets = generateOffsets(count, radius);

          return offsets.map((o, idx) => {
            const pos = [lat + o.dLat, lon + o.dLon];
            return (
              <Marker
                key={`float-${region.id}-${idx}`}
                position={pos}
                icon={makeFloatIcon(color)}
                zIndexOffset={500}
              >
                <Tooltip direction="top" offset={[0, -8]} opacity={0.95}>
                  <div className="text-sm">
                    <div className="font-semibold">ARGO Float</div>
                    <div>{region.name}</div>
                  </div>
                </Tooltip>
                <Popup>
                  <div className="text-sm">
                    <div className="font-semibold">{region.name}</div>
                    <div>Source: ARGO Program</div>
                    <div className="mt-1 text-gray-600">~{1000 + Math.floor(Math.random()*500)} datapoints</div>
                  </div>
                </Popup>
              </Marker>
            );
          });
        })}
      </MapContainer>

      {/* Explore CTA */}
      <div className="absolute top-1/2 right-8 -translate-y-1/2 z-[1000]">
        <button
          className="bg-slate-900 text-white rounded-2xl px-6 py-4 font-bold text-lg hover:bg-slate-800 transition-all duration-300 transform hover:scale-110 shadow-xl"
          onClick={() => navigate("/explore")}
        >
          Explore Data
        </button>
      </div>
    </div>
  );
}
