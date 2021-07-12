import React from 'react';

import { t } from "../i18n/index.jsx";

import { Button, Tree } from 'lixi-ui-react';

class Home extends React.Component {
  render(){
    var dataTree = [{
      label: "label_0",
      value: "0",
      level: 1,
      children: [
        {
          label: "label_00",
          value: '0_0',
          level: 2,
          children: [
            {
              label: "label_000",
              value: '0_0_0',
              level: 2,
              rightText: '8/10'
            }
          ]
        }
      ]
      },
      {
        label: "label_1",
        value: '1',
        level: 1,
        rightText: '8/11'
      },
      {
        label: "label_2",
        value: '1',
        level: 1,
        rightText: '8/12'
      },
      {
        label: "label_3",
        value: '1',
        level: 1,
      }
    ];
    return <div>
      { t("home") }
      <div>
         一些配置说明
        <div>
          <Button>按钮</Button>
        </div>
        <div className="tree-div-wrap">
          <Tree data={dataTree}/>
       </div>
      </div>
    </div>
  }
}
export default Home;