import styled from '@emotion/styled';

export const ProjectsContents = styled.div`
    color: #fff;
    
    & .project-name {
        padding: 3% 13%;
        padding-right: 0;
        display: flex;
        font-size: 1.6em;
        align-items: center;
        &:hover {
            background-color: #5485ff;
            color: #fff;
          }
    }
    & .oval {
        width: 15px;
        height: 15px;
        border-radius: 15px;
        margin-left: 40%;
        background-color: #17b84c;
      }
    & .open-c {
        width: 40px;
        height: 40px;
        margin-left: 7%;
    } 
    & img {
        width: 100%;
        object-fit: cover;
    }
    & .open {
        transform: rotate(180deg);
    }
    & .contents {
        // overflow: hidden;
        transition: all 0.3s ease-out;
        font-family: 'NS-Regular';
        background-color: #141414;
    }
    & .quiz-name {
        font-family: 'NS-Regular';
        padding: 3% 20%;
        padding-right: 0;
        display: flex;
        font-size: 1rem;
        align-items: center;
    & .oval-quiz {
        width: 8px;
        height: 8px;
        border-radius: 8px;
        margin-left: 55%;
        background-color: #1799b8;
        } 
`;