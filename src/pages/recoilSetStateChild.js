import React,{useState} from 'react';
import { useRecoilValue } from 'recoil';
import { nameState } from '../atom/nameState';

const Recoilsetstatechild = (props) => {
  const [name, setname] = useState('');
  return (
    <div>
      <input name='name' value={name} onChange={(e)=>setname(e.target.value)}/>
      <button onClick={()=>props.setNameState(names=>[...names,name])}>Submit</button>
    </div>
  );
}

export default Recoilsetstatechild;
