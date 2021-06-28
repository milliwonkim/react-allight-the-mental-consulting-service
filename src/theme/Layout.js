import styled from 'styled-components';

export const baseMargin = '30px';
export const smallBaseMargin = '10px';

export const breakpoint = {
    xs: '0px',
    sm: '600px',
    md: '960px',
    lg: '1280px',
    xl: '1920px',
};

export const boxShadow = '0px 0px 17px -3px rgba(0,0,0,0.5)';

export const globalBoxProperty = {
    margin: '60px 30px 0 30px',
    padding: '',
};

export const boxProperty = {
    all: `${baseMargin}`,
    up: `${baseMargin} 0 0 0`,
    down: `0 0 ${baseMargin} 0`,
    left: `0 0 0 ${baseMargin}`,
    right: `0 ${baseMargin} 0 0`,
    upDown: `${baseMargin} 0`,
    leftRight: `0 ${baseMargin}`,
    upLeft: `${baseMargin} 0 0 ${baseMargin}`,
    upRight: `${baseMargin} ${baseMargin} 0 0`,
    downLeft: `0 0 ${baseMargin} ${baseMargin}`,
    downRight: `0 ${baseMargin} ${baseMargin} 0`,
    upLeftRight: `${baseMargin} ${baseMargin} 0 ${baseMargin}`,
    downLeftRight: `0 ${baseMargin} ${baseMargin} ${baseMargin}`,
};

export const smallBoxProperty = {
    all: `${smallBaseMargin}`,
    up: `${smallBaseMargin} 0 0 0`,
    down: `0 0 ${smallBaseMargin} 0`,
    left: `0 0 0 ${smallBaseMargin}`,
    right: `0 ${smallBaseMargin} 0 0`,
    upDown: `${smallBaseMargin} 0`,
    leftRight: `0 ${smallBaseMargin}`,
    upLeft: `${smallBaseMargin} 0 0 ${smallBaseMargin}`,
    upRight: `${smallBaseMargin} ${smallBaseMargin} 0 0`,
    downLeft: `0 0 ${smallBaseMargin} ${smallBaseMargin}`,
    downRight: `0 ${smallBaseMargin} ${smallBaseMargin} 0`,
};

export const TeachersWrapper = styled.div`
    width: 100%;
`;

export const TeachersTitle = styled.div`
    padding: ${boxProperty.leftRight};
`;

export const TeachersContainer = styled.div`
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    justify-content: center;
    align-items: center;
    padding: ${boxProperty.leftRight};

    @media only screen and (max-width: 1513px) {
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }

    @media only screen and (max-width: 1220px) {
        grid-template-columns: 1fr 1fr 1fr;
    }

    @media only screen and (max-width: 930px) {
        grid-template-columns: 1fr 1fr;
    }

    @media only screen and (max-width: 600px) {
        grid-template-columns: 1fr;
    }
`;

export const TeacherItem = styled.div`
    box-sizing: border-box;
    max-width: 100%;
    box-shadow: ${boxShadow};
    padding: ${boxProperty.all};
    margin: 10px;
    border-radius: 8px;
`;

export const TeacherImg = styled.img`
    width: 200px; /* width of container */
    height: 200px; /* height of container */
    object-fit: cover;
    border: 5px solid black;
`;
