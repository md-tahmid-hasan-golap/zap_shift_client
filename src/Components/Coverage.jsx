import { useLoaderData } from "react-router";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Fix Leaflet default marker icons
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

// Bangladesh Center
const bangladeshCenter = [23.685, 90.3563];

const Coverage = () => {
  const serviceCenters = useLoaderData();

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-12">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
          We are available in{" "}
          <span className="text-lime-500">64 districts</span>
        </h2>

        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
          We deliver parcels safely and quickly across almost every district in
          Bangladesh.
        </p>
      </div>

      {/* Search */}
      <div className="flex justify-center mb-10">
        <div className="flex w-full max-w-xl">
          <input
            type="text"
            placeholder="Search district..."
            className="input input-bordered w-full rounded-l-xl rounded-r-none"
          />

          <button className="btn bg-lime-400 hover:bg-lime-500 border-none rounded-r-xl rounded-l-none text-black font-semibold px-8">
            Search
          </button>
        </div>
      </div>

      {/* Map */}
      <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200 relative z-0">
        <MapContainer
          center={bangladeshCenter}
          zoom={7}
          scrollWheelZoom={false}
          className="w-full h-[320px] sm:h-[420px] md:h-[550px] lg:h-[650px]"
        >
          <TileLayer
            attribution="&copy; OpenStreetMap contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {serviceCenters?.map((center) => (
            <Marker
              key={center.id}
              position={[center.latitude, center.longitude]}
            >
              <Popup>
                <div className="min-w-[180px]">
                  <h3 className="text-lg font-bold text-lime-600">
                    {center.district}
                  </h3>

                  <p className="text-sm text-gray-700 mt-2">
                    <span className="font-semibold">Covered Areas:</span>
                  </p>

                  <ul className="list-disc ml-5 mt-1 text-sm">
                    {center.covered_area.map((area, index) => (
                      <li key={index}>{area}</li>
                    ))}
                  </ul>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </section>
  );
};

export default Coverage;
