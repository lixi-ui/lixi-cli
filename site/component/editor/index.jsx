import React, { useRef, useEffect } from 'react';

import CodeMirror from 'codemirror'

import 'codemirror/mode/jsx/jsx';
import 'codemirror/keymap/sublime';
import 'codemirror/addon/comment/comment';

import 'codemirror/lib/codemirror.css';

import "./index.scss";


function Editor (props){
  const inputEl = useRef(null);
  var { value } = props;
  var editorId = `b${parseInt(Math.random() * 1e9).toString(36)}`;
  useEffect(()=>{
    setTimeout(()=>{
      var cm = CodeMirror(document.getElementById(`${editorId}`), {
        mode: 'jsx',
        theme: 'react',
        keyMap: 'sublime',
        viewportMargin: Infinity,
        lineNumbers: false,
        dragDrop: false
      })
      cm.setValue(value);
    },10)
  },[value])

  return <div ref={ inputEl } id={editorId} className="editor"></div>
}

export default Editor;