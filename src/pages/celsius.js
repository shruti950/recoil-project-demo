import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { tempFahrenheit } from '../atom/fahrenheit';
import { nameState } from '../atom/nameState';
import { tempCelsius } from '../selectors/celsius';

const Celsius = () => {
  const [tempF, setTempF] = useRecoilState(tempFahrenheit);
  const [tempC, setTempC] = useRecoilState(tempCelsius);
 const name =  useRecoilValue(nameState)
  const addTenCelsius = () => setTempC(tempC + 10);
  const addTenFahrenheit = () => setTempF(tempF + 10);
  return (
    <div>
    Temp (Celsius): {tempC}
    <br />
    Temp (Fahrenheit): {tempF} {name}
    <br />
    <button onClick={addTenCelsius}>Add 10 Celsius</button>
    <br />
    <button onClick={addTenFahrenheit}>Add 10 Fahrenheit</button>
  </div>
  );
}

export default Celsius;
