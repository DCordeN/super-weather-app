import styled from "styled-components"
import logo from '../../assets/images/logo.svg'

const Header = ({ className }) => {
  return(
    <div className={className}>
      <CompanyName>SuperWeather App</CompanyName>
      <img width="64" height="64" src={logo} alt="logo"></img>
    </div>
  )
}

const StyledHeader = styled(Header)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 120px;
`

const CompanyName = styled.span`
  font-family: Roboto;
  font-size: 24px;
  font-weight: 600;
  color: #4F5D73;
`

export default StyledHeader