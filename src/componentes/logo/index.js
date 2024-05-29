import logo from '../../imagens/GYMPOWERLOGO.png'
import styled from 'styled-components';

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    font-size: 25px;
    color: white;
`
const LogoImg = styled.img`
    margin-right: 10px;
    width: 10%;
`

function Logo() {
    return (
        <LogoContainer>
            <LogoImg
            src={logo}
            alt='logo'
            ></LogoImg>
        <p><strong>Gym</strong>Power<strong>+</strong></p>
        </LogoContainer>
    )
 }
 
 export default Logo;