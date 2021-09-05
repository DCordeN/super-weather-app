import { useEffect, useState } from "react"
import { connect, useDispatch } from "react-redux"
import styled from "styled-components"

const mapStateToProps = (state) => {
  return {
    daysCount: state.daysCount,
    query: state.query
  }
}

const SelectCountDays = (props) => {
  const [count, setCount] = useState(props.daysCount)
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch({ type: 'CHANGE_SHOW_WEATHER_DAYS', daysCount: count })
    props.weather?.list?.length && dispatch({ type: 'FETCH_WEATHER', daysCount: props.daysCount, query: props.query })
  }, [count, props])

  return(
    <>
      <Label> Number of next days: </Label>
      <Select value={count} onChange={(e) => setCount(e.currentTarget.value)}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </Select>
    </>
  )
}

const Select = styled.select`
  font-family: Roboto;
  font-size: 16px;
  border: 2px solid #4F5D73;
  border-radius: 3px;
  min-width: 256px;
  height: 24px;
`
const Label = styled.label`
  font-family: Roboto;
  font-size: 20px;
  margin-right: 12px;
  margin-bottom: 64px;
`

export default connect(mapStateToProps)(SelectCountDays)