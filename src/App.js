import React, { useState, useEffect } from "react";
import { Map, Source, Layer } from "react-map-gl";
import Slider from "rc-slider";
import Select from 'react-select'
import "rc-slider/assets/index.css";
import shrimpData from "./shrimp_occ.json";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoiZWtrdWpva2luZW4iLCJhIjoiY2s2ODZreXd6MDF1eTNpbjRyOGplOHg0MSJ9.GpDn-H6Y50yffg3XKXNxHg";

const pointLayer = {
  id: "point",
  type: "circle",
  paint: {
    "circle-radius": 2,
    "circle-color": "#FFB81C",
  },
};

const occuranciesToFeatures = (occs) => {
  const featureList = occs.map((occ) => {
    return {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [occ.decimalLongitude, occ.decimalLatitude],
      },
    };
  });

  return {
    type: "FeatureCollection",
    features: featureList,
  };
};
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const getYearAndMonth = (ts) => {
  const date = new Date(ts);
  return [date.getFullYear(), monthNames[(date.getMonth())]];
};

const selectOptions = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

const selectStyles = {
  control: (styles) => ({...styles, width: '15rem'})
}

const START_MS = 820627200000;
const STEP = 86400000;
const SHOW_X_PREV_STEPS = 100;
const END_MS = 1669161600000;

const App = () => {
  const [pointData, setPointData] = useState(null);
  const [currentTime, setCurrentTime] = useState(START_MS);
  const [animate, setAnimate] = useState(false);

  const stepToNextYear = () => {
    const nextDay = currentTime + STEP * 365;
    setCurrentTime(nextDay);
  };

  const resetTime = () => {
    setCurrentTime(START_MS);
  };

  const sliderOnChange = (val) => {
    setCurrentTime(val);
  };

  useEffect(() => {
    let currentData = [];
    for (let i = 0; i < SHOW_X_PREV_STEPS; i++) {
      const timestamp = currentTime - i * STEP;
      const newData = shrimpData[timestamp.toFixed(1)];
      if (newData) {
        currentData = currentData.concat(newData);
      }
    }
    if (currentData) {
      const newPointData = occuranciesToFeatures(currentData);
      setPointData(newPointData);
    }
  }, [currentTime]);

  useEffect(() => {
    if (animate) {
      const animation = window.requestAnimationFrame(() => {
        const nextDay = currentTime + STEP;
        setCurrentTime(nextDay);
      });
      return () => window.cancelAnimationFrame(animation);
    }
  });

  return (
    <div className="w-screen h-screen bg-black">
      <div className="h-full px-12 py-4">
        <div className="h-[6%] flex justify-between items-center">
          <h1 className="text-white text-5xl font-bold tracking-wider">
            Plenty of Fish in the Sea (?)
          </h1>
          <div className="flex items-center">
            <p className="text-slate-400 mr-2">Select species:</p>
            <Select options={selectOptions} styles={selectStyles} defaultValue={selectOptions[0]} />

          </div>
        </div>
        <div className="h-[86%]">
          <Map
            initialViewState={{
              latitude: 0,
              longitude: -100,
              zoom: 3,
            }}
            mapStyle="mapbox://styles/mapbox/dark-v11"
            mapboxAccessToken={MAPBOX_TOKEN}
            attributionControl={false}
          >
            {pointData && (
              <Source type="geojson" data={pointData}>
                <Layer {...pointLayer} />
              </Source>
            )}
          </Map>
        </div>
        <div className="flex justify-end">
          <button className="mx-2 text-white" onClick={stepToNextYear}>
            Next year
          </button>
          <button className="mx-2 text-white" onClick={resetTime}>
            Reset Time
          </button>
          <button className="mx-2 text-white" onClick={() => setAnimate(true)}>
            Play animation
          </button>
          <button className="mx-2 text-white" onClick={() => setAnimate(false)}>
            Stop animation
          </button>
        </div>
        <div>
          <span className="text-white font-bold text-3xl">{getYearAndMonth(currentTime)[0]}</span><span className="ml-2 text-slate-500">{getYearAndMonth(currentTime)[1]}</span>
          <Slider
            min={START_MS}
            max={END_MS}
            step={STEP}
            value={currentTime}
            onChange={sliderOnChange}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
