import "./set-public-path";
import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import Root from "./root.component";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root,
  domElementGetter,
});

function domElementGetter() {
  return document.getElementById("carteiritas");
}

export const { bootstrap, mount, unmount } = lifecycles;
