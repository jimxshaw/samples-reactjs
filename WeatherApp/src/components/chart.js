// This Chart will be a component, not a container, because it does not 
// communicate or rely on redux. Also, it will be a functional component, 
// not class component, because it will not deal with component state in 
// any way. All it does is utilize props that come in and renders a component.

// Also, Sparklines charts will be used multiple times in WeatherList container. 
// Instead of repeating oneself with many Sparkline tags in WeatherList, we 
// create a separate Chart component. 
import React from "react";
import {Sparklines, SparklinesLine} from "react-sparklines";

export default (props) => {
  return (
    <div>
      <Sparklines height={120} width={180} data={props.data}>
        <SparklinesLine color={props.color} />
      </Sparklines>
    </div>
  );
}












