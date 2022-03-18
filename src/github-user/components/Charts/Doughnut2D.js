import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Column2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);



const Dough2D = ({ chartConfigs }) => {
  return (
    <ReactFC {...chartConfigs} />
  )
}

export default Dough2D

