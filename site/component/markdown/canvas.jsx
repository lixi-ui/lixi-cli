import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { transform } from "babel-standalone";

import Editor from "../editor/index.jsx";

function Canvas (porps) {
  var [source, setSource] = useState('');
  var [display, setDisplay] = useState("block");
  var { id } = porps;
  var playerId = `a${parseInt(Math.random() * 1e9).toString(36)}`;

  useEffect(()=>{
    var source = porps.children.match(/```(.*)\n?([^]+)```/);
    setSource(source[2]);
    porps.children.replace();
    var code = transform(`
          class Demo extends React.Component {
            ${source[2]}
          }
          ReactDOM.render(<Demo/>, document.getElementById('${playerId}'))
        `, {
          presets: ['es2015', 'react']
        }
    ).code;
    const args = ['context', 'React', 'ReactDOM']
    const argv = [this, React, ReactDOM];
    args.push(code);
    console.log("code-----------><obj>--->", args, code);
    new Function(...args).apply(null, argv);
  },[])

  function onClick(){
    var flag = display == "block";
    setDisplay(flag ? "none" : "block")
  }

  return (
    <div className="demo-code">
      <div id={playerId}>
      </div>
      <div className="demo-content" style={{ display: display }}>
        <Editor
          value={ source }
        ></Editor>
      </div>
      <div className="demo-footer" onClick={onClick}>
      { display == 'block' ? '收起' : "展开" }
      </div>
    </div>
  )
}

export default Canvas;
