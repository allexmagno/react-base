import React from 'react';
import {useDispatch} from "react-redux";
import { Container } from "../../styles/global";
import {Title, Paragrafo} from "./styled";
import * as exampleActions from '../../store/modules/example/actions'
export default function Login() {
    const dispatch = useDispatch();

    function handleClick(e){
        e.preventDefault();
        dispatch(exampleActions.request());
    }
    return (
        <Container>
            <Title isRed={true} background={'#ea3e'}>
                Login
                <small>TESTE</small>
            </Title>
            <Paragrafo>Lorem5</Paragrafo>
            <button type={'button'} onClick={handleClick}>Enviar</button>
        </Container>
    );
}

