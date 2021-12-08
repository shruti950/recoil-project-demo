import './App.css';
import {  useRecoilValue } from 'recoil';
import Celsius from './pages/celsius';
import { tempCelsius } from './selectors/celsius';
import { tempFahrenheit } from './atom/fahrenheit';
import Recoilsetstateparent from './pages/recoilSetStateParent';
import { nameState } from './atom/nameState';

function App() {
  const celsius = useRecoilValue(tempCelsius)
  const fahrenheit = useRecoilValue(tempFahrenheit)
  const name = useRecoilValue(nameState)
  return (
    <div className="App">
        <Celsius/>
      celsius : {celsius}
      fahrenheit : {fahrenheit}
      <hr/>
      <Recoilsetstateparent/>
      {name}
    </div>
  );
}

export default App;
