import styled from "styled-components"
// Scomponents
import SearchCity from "../../components/views/main/SearchCity"
import SelectCountDays from "../../components/views/main/SelectCountDays"
import WeatherChart from "../../components/views/main/WeatherChart"

const Main = () => {
  return (
    <>
      <WrapperFlex>
        <SearchCity />
        <SelectCountDays />
      </WrapperFlex>
      <WeatherChart />
    </>
  )
}

const WrapperFlex = styled.div`
  display: flex;
`

export default Main