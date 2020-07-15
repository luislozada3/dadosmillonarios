import React from "react";
import styled from "styled-components";

const WrapperStyle = styled.div`
    max-width: 100%;
    padding: 0px 1em;
    margin: 0 auto;
    @media screen and (min-width: 575px) {
        max-width: 540px;
    }
    @media screen and (min-width: 768px) {
        max-width: 720px;
    }
    @media screen and (min-width: 992px) {
        max-width: 960px;
    }
    @media screen and (min-width: 1200px) {
        max-width: 1140px;
    }
`;

function Wrapper ({children}) {
    return (
        <WrapperStyle>
            {children}
        </WrapperStyle>
    );
}

export default Wrapper;