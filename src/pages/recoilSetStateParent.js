import React from 'react';
import { useSetRecoilState } from 'recoil';
import { nameState } from '../atom/nameState';
import Recoilsetstatechild from './recoilSetStateChild';

const Recoilsetstateparent = () => {
  const setNameState = useSetRecoilState(nameState)
  return (
    <div>
      <Recoilsetstatechild setNameState={setNameState}/>
    </div>
  );
}

export default Recoilsetstateparent;
