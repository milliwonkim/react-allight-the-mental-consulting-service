import React from 'react';
import styled from 'styled-components';

function Header() {
    return (
        <HeaderWrapper>
            <h1>Header</h1>
        </HeaderWrapper>
    );
}

export default Header;

const HeaderWrapper = styled.div`
    border: 1px solid red;
    margin: 5px;
`;
