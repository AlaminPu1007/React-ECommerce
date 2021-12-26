import React, {useEffect} from "react";
import {DynamicTitle} from '../../component/DynamicTitle';

const Forget = () => {
  // Set Page title and meta data
  useEffect(()=>{
    DynamicTitle({
      title: 'Reset your password',
      metaDescription: 'Reset your password with email'
    });
  },[]);
  return <div>Forget pages</div>;
};

export default Forget;
