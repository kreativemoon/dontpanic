
import styled from '@emotion/styled';

export const Rectangle = styled.div`
    // display: flex;
    background-color: #272727;
    border-radius: 3rem;
    width: 80vw;
    height: 80vh;
    // text-align: center;
    margin: 10vh 10vw;
    & > #intro {
      display: flex;
      width: 90%;
      height: 70%;
      // flex-direction: column;
      // flex-grow: 1;
      // border: 1px solid red;
      margin: 3rem;
    }

    & button {
      // display: flex;
      // position: relative;
      // box-sizing: border-box;
      outline: none;
      font-family: 'NSD-Bold';
      font-size: 2.5em;
      // transition: background-color 200ms ease 0s, border-color 200ms ease 0s;
      cursor: pointer;
      // opacity: 1;
      overflow: hidden;
      border: 2px solid transparent;
      // padding: 15px 45px;
      width: 350px;
      height: 90px;
      border-radius: 0.5rem;
      color: rgb(255, 255, 255) !important;
      background-color: #6c6c6c;
      // font-weight: bold;
      letter-spacing: 3px;

      &:hover {
        background-color: #5485ff;
        color: #fff;
      }
    }
`