import React, { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./style.css";

export default function TowingCalculator() {
  const [towingValue, setTowingValue] = useState(50);
  const [vehicleCondition, setVehicleCondition] = useState("perfect");
  const [vehicleType, setVehicleType] = useState("car");
  const [sliderValue, setSliderValue] = useState(0);

  const calculateTowingValue = (distance, condition, type) => {
    let baseValue;
    let increment;

    if (type === "pickup-truck") {
      switch (condition) {
        case "minor-damage":
          baseValue = 72;
          increment = 4.675;
          break;
        case "inoperate":
          baseValue = 120;
          increment = 7.8;
          break;
        default:
          baseValue = 65;
          increment = 3.9;
          break;
      }
    } else if (type === "suv") {
      switch (condition) {
        case "minor-damage":
          baseValue = 72;
          increment = 4.32;
          break;
        case "inoperate":
          baseValue = 120;
          increment = 7.2;
          break;
        default:
          baseValue = 60;
          increment = 3.6;
          break;
      }
    } else if (type === "minivan") {
      switch (condition) {
        case "minor-damage":
          baseValue = 84;
          increment = 5.04;
          break;
        case "inoperate":
          baseValue = 140;
          increment = 8.4;
          break;
        default:
          baseValue = 70;
          increment = 4.2;
          break;
      }
    } else {
      switch (condition) {
        case "minor-damage":
          baseValue = 60;
          increment = 3.6;
          break;
        case "inoperate":
          baseValue = 100;
          increment = 6;
          break;
        default:
          baseValue = 50;
          increment = 3;
          break;
      }
    }

    let cost;
    if (distance <= 10) {
      cost = baseValue;
    } else {
      cost = baseValue + (distance - 10) * increment;
    }
    return Math.round(cost);
  };

  const didOnAfterChangeTrigger = (value) => {
    setSliderValue(value);
    const newTowingValue = calculateTowingValue(
      value,
      vehicleCondition,
      vehicleType
    );
    setTowingValue(newTowingValue);
  };

  const handleConditionChange = (event) => {
    const selectedCondition = event.target.value;
    setVehicleCondition(selectedCondition);
    const newTowingValue = calculateTowingValue(
      sliderValue,
      selectedCondition,
      vehicleType
    );
    setTowingValue(newTowingValue);
  };

  const handleTypeChange = (event) => {
    const selectedType = event.target.value;
    setVehicleType(selectedType);
    const newTowingValue = calculateTowingValue(
      sliderValue,
      vehicleCondition,
      selectedType
    );
    setTowingValue(newTowingValue);
  };

  return (
    <>
      <div className="container vh-100">
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-md-6">
            <div className="bg-dark rounded p-4">
              <h4 className="bg-dark rounded text-white text-center">Car Towing Cost Calculator</h4>
              <div className="">
                <h6>Towing Distance (miles)</h6>
                <div className="">
                  <Slider
                    defaultValue={0}
                    min={0}
                    max={100}
                    onChange={didOnAfterChangeTrigger}
                    marks={{ 0: 1, 5: 5, 10: 10, 25: 25, 50: 50, 100: 100 }}
                  />
                </div>
              </div>
              <div className="mt-5">
                <h6 className="text-white">Vehicle Type</h6>
                <div>
                  <select
                    className="form-select"
                    aria-label=""
                    onChange={handleTypeChange}
                  >
                    <option value="car" selected>
                      Car
                    </option>
                    <option value="pickup-truck">Pickup Truck</option>
                    <option value="suv">SUV</option>
                    <option value="minivan">Minivan</option>
                  </select>
                </div>
              </div>
              <div className="mt-3">
                <h6 className="text-white">Vehicle Condition</h6>
                <div>
                  <select
                    className="form-select"
                    aria-label=""
                    onChange={handleConditionChange}
                  >
                    <option value="perfect" selected>
                      Perfect
                    </option>
                    <option value="minor-damage">Minor Damage</option>
                    <option value="inoperate">Inoperate</option>
                  </select>
                </div>
              </div>
              <div className="mt-3">
                <h6 className="text-white mb-0">Estimated Towing Cost</h6>
                <div>
                  <span className="text-white fw-bold">$ </span>
                  <span className="text-white fw-bold">{towingValue}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
