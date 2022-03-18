import React, { useContext } from 'react'
import { GithubCtx } from '../context/Github-ctx'
import Bar2D from './Charts/Bar3D'
import BasicChart from './Charts/BasicChart'
import Column3D from './Charts/Column3D'
import Dough2D from './Charts/Doughnut2D'
import Pie2D from './Charts/Pie2D'

const Repos = () => {
  const {repos} = useContext(GithubCtx);

  let languages = repos.reduce((total, repo) => {
    const { language } = repo
    if (!total[language]) {
      total[language]={ label: language, value: 1 }
    } else {
      total[language] = {
        ...total[language],
        value: total[language]['value'] + 1
      }
    }
    
    return total
  }, {})

  languages = Object.values(languages).sort((a, b) => {
    return b.value - a.value
  })

  const chartConfigs = {
    type: "doughnut2d", // The chart type
    width: "700", // Width of the chart
    height: "400", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        caption: "Countries With Most Oil Reserves [2017-18]",    //Set the chart caption
        subCaption: "In MMbbl = One Million barrels",             //Set the chart subcaption
        xAxisName: "Country",           //Set the x-axis name
        yAxisName: "Reserves (MMbbl)",  //Set the y-axis name
        numberSuffix: "K",
        theme: "fusion"                 //Set the theme for your chart
      },
      // Chart Data - from step 2
      data: languages
    }
  };

  return (
    <div>
        <Dough2D chartConfigs={chartConfigs} />
        <Column3D />
    </div>
  )
}

export default Repos