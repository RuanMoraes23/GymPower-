import styled from "styled-components";

const Input = styled.input`
    order: 1px solid #2C3E50;
    background: transparent;
    border: 1px solid #2C3E50;
    padding: 20px 140px;
    border-radius: 50px;
    width: 200px;
    color: #2C3E50;
    font-size: 16px;
    margin-bottom: 30px;

    &::placeholder {
        color: #2C3E50;
        font-size: 16px;
}
`

export default Input;