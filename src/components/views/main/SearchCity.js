import { useEffect, useState } from "react"
import Autocomplete from "react-autocomplete"
import { connect, useDispatch } from "react-redux"
import styled from "styled-components"
// Utils
import { fetchCities, fetchWeatherByCoords } from "../../../utils/api"

const mapStateToProps = (state) => {
  return {
    daysCount: state.daysCount
  }
}

const SearchCity = (props) => {
  const [cities, setCities] = useState([]) 
  const [query, setQuery] = useState(window.location.pathname.slice(1).charAt(0).toUpperCase() + window.location.pathname.slice(2))

  const dispatch = useDispatch()
  
  useEffect(() => {
    window.location.pathname.length === 1 && navigator.geolocation.getCurrentPosition((pos) => { 
      fetchWeatherByCoords(pos.coords.latitude, pos.coords.longitude)
        .then((res) => {
          res.json()
          .then((res) => {
            setQuery(res.city.name)
          })
        })
    })

  }, [])

  useEffect(() => {
    dispatch({ type: 'CHANGE_QUERY', query })
    query.length && fetchCities(query, setCities) 
    query.length && dispatch({ type: 'FETCH_WEATHER', daysCount: props.daysCount, query })
  }, [query, props])

  return (
    <Wrapper>
      <AutocompleteLabel> Your city is: </AutocompleteLabel>
      <Autocomplete 
        value={query}
        items={cities.map(city => 
          ({ label: city.title })
        )}
        getItemValue={(item) => item.label}
        onChange={(e) => setQuery(e.target.value)}
        onSelect={(val) => setQuery(val)}
        renderItem={(item, isHighlighted) =>
          <div style={{ background: isHighlighted ? '#E0995E' : 'white', cursor: "pointer" }}>
            {item.label}
          </div>
        }  
        inputProps={{
          style: {
            fontFamily: "Roboto",
            fontSize: "16px",
            border: '2px solid #4F5D73',
            borderRadius: "3px",
            minWidth: "256px"
          }
        }}
        wrapperStyle={{
          width: "256px",
          position: "relative"
        }}
        menuStyle={{
          position: 'absolute',
          top: "24px",
          left: 0,
          fontSize: "16px",
          fontFamily: "Roboto",
          borderRadius: "3px"
        }}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  margin-right: 32px;
`

const AutocompleteLabel = styled.label`
  font-family: Roboto;
  font-size: 20px;
  margin-right: 12px;
  margin-bottom: 64px;
`

export default connect(mapStateToProps)(SearchCity)