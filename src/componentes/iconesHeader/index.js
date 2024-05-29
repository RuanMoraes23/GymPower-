import perfil from "../../imagens/perfil.svg";
import sacola from "../../imagens/sacola.svg";
import styled from 'styled-components';

const icones = [perfil,sacola];
const Icone = styled.li`
    margin-right: 40px;
    width: 25px;
`
const Icones = styled.ul`
    display: flex;
    align-items: center;
`

function iconesHeader() {
    return (
        <Icones>
            { icones.map((icone)=>(
                <Icone><img src={icone} alt='icone'></img></Icone>
            ))}
        </Icones>
    )
 }
 
 export default iconesHeader;