import styled from '@emotion/styled';

export const Contents = styled.div`
    background-color: #1e1e1e;
    height: 100%;
    & .project-lists{
        margin-top: 10.8%;
        font-family: 'NSD-Bold';
        color: #b0b0b0;
        font-size: 1rem;
    }
`;
export const Skills = styled.div`
    padding: 12% 10%;
    padding-bottom: 0;
    & .title {
        color: #fff;
        font-family: 'NSD-Black';
        font-size: 3em;
    }
    & .description {
        font-family: 'NSD-Regular';
        color: #b0b0b0;
        font-size: 1rem;
    }
`;

export const Oval = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    align-content: stretch;
    float: right;
    margin: 2%;
    padding-right: 4%;
    & .oval-descp {
        width: 8px;
        height: 8px;
        border-radius: 8px;
        margin-right: 3px;
    }
    & .oval-name {
        font-family: 'NSD-Regular';
        font-size: 1rem;
        color: #fff;
        margin-right: 10px;
    }
`;