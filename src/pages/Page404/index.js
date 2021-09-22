import React from 'react'
import {FaPage4, FaEgg} from 'react-icons/fa'
import {Container} from "../../styles/global";
import {NotExists} from "./styled";

export default function Page404() {
    return (
        <Container>
            <h1> Essa pagina não existe. </h1>
            <NotExists>
                <FaPage4 />
                <FaEgg />
                <FaPage4 />
            </NotExists>
        </Container>
    );
}