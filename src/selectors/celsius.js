import { selector } from "recoil";
import { tempFahrenheit } from "../atom/fahrenheit";

export const tempCelsius = selector({
  key : 'tempCelsius',
  get : ({get})=>((get(tempFahrenheit)-32)*5)/9,
  set : ({set},newValue)=>set(tempFahrenheit,(newValue*9)/5+32)
});

// const tempCelsius = selector({
//   key: 'tempCelsius',
//   get: ({get}) => ((get(tempFahrenheit) - 32) * 5) / 9,
//   set: ({set}, newValue) => set(tempFahrenheit, (newValue * 9) / 5 + 32),
// });