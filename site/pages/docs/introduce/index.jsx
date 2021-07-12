import React from "react";
import IndexMd from './index.md';
import MarkDown from '../../../component/markdown/index.jsx';

function Button (){
  // var markStr = <MarkDown content={ IndexMd }/>

  return <div>
          介绍
          <MarkDown content={ IndexMd }/>
        </div>
}

export default Button;