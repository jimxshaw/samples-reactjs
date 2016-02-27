// This Chart will be a component, not a container, because it does not 
// communicate or rely on redux. Also, it will be a functional component, 
// not class component, because it will not deal with component state in 
// any way. All it does is utilize props that come in and renders a component.

// Also, Sparklines charts will be used multiple times in WeatherList container. 
// Instead of repeating oneself with many Sparkline tags in WeatherList, we 
// create a separate Chart component. 
import React from "react";
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from "react-sparklines";
// lodash is a toolkit of javascript functions that provides clean, performant methods 
// for manipulating objects and collections. It's a fork of Underscore library with added 
// functionality and performance improvements. 
import _ from "lodash";

function average(data) {
  return _.round(_.sum(data)/data.length);
}

export default (props) => {
  return (
    <div>
      <Sparklines height={120} width={180} data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>{average(props.data)} {props.units}</div>
    </div>
  );
}












