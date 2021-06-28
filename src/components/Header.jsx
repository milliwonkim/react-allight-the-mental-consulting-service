import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { baseMargin, boxProperty } from '../theme/Layout';

function Header() {
    const [clicked, setClicked] = useState({
        consulting: true,
        feed: false,
        diary: false,
        user: false,
    });

    return (
        <HeaderWrapper>
            <HeaderContainer>
                <HeaderItem>
                    <h1>ALLIGHT</h1>
                </HeaderItem>
                <HeaderItem>
                    <IndividualTab
                        to="/consulting"
                        onClick={() =>
                            setClicked({
                                consulting: true,
                                feed: false,
                                diary: false,
                                user: false,
                            })
                        }
                        $clicked={clicked.consulting}
                    >
                        상담받기
                    </IndividualTab>
                    <IndividualTab
                        to="/feed"
                        onClick={() =>
                            setClicked({
                                consulting: false,
                                feed: true,
                                diary: false,
                                user: false,
                            })
                        }
                        $clicked={clicked.feed}
                    >
                        피드
                    </IndividualTab>
                    <IndividualTab
                        to="/diary"
                        onClick={() =>
                            setClicked({
                                consulting: false,
                                feed: false,
                                diary: true,
                                user: false,
                            })
                        }
                        $clicked={clicked.diary}
                    >
                        나의 일기장
                    </IndividualTab>
                    <IndividualTab
                        to="/user"
                        onClick={() =>
                            setClicked({
                                consulting: false,
                                feed: false,
                                diary: false,
                                user: true,
                            })
                        }
                        $clicked={clicked.user}
                    >
                        user1234
                    </IndividualTab>
                </HeaderItem>
            </HeaderContainer>
        </HeaderWrapper>
    );
}

export default Header;

const HeaderWrapper = styled.div`
    max-width: 100%;
`;

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 10px ${baseMargin};

    @media only screen and (max-width: 600px) {
        flex-direction: column;
    }
`;

const HeaderItem = styled.div`
    display: flex;
    flex-direction: row;
    @media only screen and (max-width: 600px) {
        flex-direction: column;
    }
`;

const IndividualTab = styled(Link)`
    display: inline-block;
    vertical-align: middle;
    text-decoration: none;
    min-width: 90px;
    text-align: center;
    user-select: none;
    cursor: pointer;
    border-radius: 8px;
    border: ${(props) => props.$clicked && '1px solid black'};
    color: ${(props) => (props.$clicked ? 'white' : 'black')};
    background-color: ${(props) => props.$clicked && 'black'};
    padding: 5px;
    margin: 10px;

    &:hover {
        background-color: ${(props) => (props.$clicked ? 'none' : '#ebebeb')};
    }
`;
