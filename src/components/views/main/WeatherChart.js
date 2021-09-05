import { Chart, registerables } from "chart.js"
import { useEffect, useRef } from "react"
import { connect } from "react-redux"

const mapStateToProps = (state) => {
  return {
    weather: state.weather
  }
}

const WeatherChart = (props) => {
  const chartRef = useRef(null)

  useEffect(() => {
    if (props?.weather?.list) {
      Chart.register(...registerables)
      const ctx = chartRef.current.getContext('2d')
  
      const dotsTemp = props.weather.list.map(item => item.main.temp)
      const dotsFeelsLike = props.weather.list.map(item => item.main.feels_like)
      const dotsWind = props.weather.list.map(item => item.wind.speed)
      
      const labels = props.weather.list.map(item => item.dt_txt)
  
      const chart = new Chart(ctx, { 
        type: "line",
        data: {
          labels: labels,
          datasets: [
            {
              label: "Feels like",
              data: dotsFeelsLike,
              borderColor: '#E0995E',
              backgroundColor: [
                "#231F20"
              ]
            },
            {
              label: "Temperature",
              data: dotsTemp,
              borderColor: '#4F5D73',
              backgroundColor: [
                "rgba(255, 99, 132, 1)"
              ]
            },
            {
              label: "Wind speed",
              data: dotsWind,
              borderColor: '#231F20',
              backgroundColor: [
                "#E0995E"
              ]
            }
          ],
        },
        options: {
          maintainAspectRatio: false
        }
      })
      return () => {
        chart.destroy()
      }
    }
  }, [props])
  return(
    <div style={{height: '600px'}}>
      <canvas ref={chartRef}></canvas>
    </div>
  )
}

export default connect(mapStateToProps)(WeatherChart)