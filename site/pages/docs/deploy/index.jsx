import React from "react";
import IndexMd from './index.md';
import MarkDown from '../../../component/markdown/index.jsx';

function Deploy (){
  // var markStr = <MarkDown content={ IndexMd }/>

  return <div>
          <MarkDown content={ IndexMd }/>
        </div>
}

export default Deploy;