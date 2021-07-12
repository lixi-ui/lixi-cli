import React from 'react';
import ReactDOM from 'react-dom';


import marked from 'marked';
import Canvas from './canvas.jsx';

import './index.scss';

function Markdow(porps){

  var components = new Map;
  var parseHtml =  porps.content.replace(/:::\s?demo\s?([^]+?):::/g, (match, p1, offset) => {
    const id = offset.toString(36);
    components.set(id, React.createElement(Canvas, Object.assign({
      name: "this.constructor.name.toLowerCase()",
      id: id
    }, porps), p1));

    return `<div id=${id}></div>`
  })
  // console.log("components", components);
  setTimeout(()=>{
    for (const [id, component] of components) {
      const div = document.getElementById(id);
      if (div instanceof HTMLElement) {
        ReactDOM.render(component, div);
      }
    }
  }, 10);

  var html = marked(parseHtml);
  return (
    <div>
      <div dangerouslySetInnerHTML={{
        __html: html
      }}/>
    </div>
  )
}
export default Markdow;