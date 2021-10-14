import styled from "@emotion/styled";

export const FullNavbar = styled.div `
  width: 23%;
  height: 93%;
  border-radius: 2rem;
  margin: 1.9% 1.9% 0;
  display: inline-block;
  background-color: #1e1e1e;
  overflow: hidden;
  font-family: 'NSD-Black';
  & .back-selected-btn {
    height: 8%;
    cursor: pointer;
    padding: 10px;
    & img {
      float: right;
      width: 15%;
    }
  }
  & .content {
    background-image: url(../imgs/navbar/bg.svg);
    overflow: hidden;

    & ul {
      padding: 0;
      list-style: none;
    }
    
    & .user-info {
      height: 15%;

      & .slime {
        width: 37%;
        float: left;
        height: 100%;
        padding: 5%;
        & #slime-img {
          display: flex;
          position: relative;
          height: 100%;
          & svg {
            height: 100%;
          }
        }
      }

      & .user-data {
        width: 63%;
        height: 100%;
        float: right;
        padding : 10px;

        & #level {
          color: #5b5b5b;
          font-size: 1em;
          font-family: 'NSD-Bold';
        }

        & #nickname {
          color: #fff;
          font-size: 2em;
          font-family: 'NSD-Black';
        }

        & ul {
          display: flex;
        }

        & li {
          margin-right: 10px;
        }
        
        & #skills {
          padding: 0.5px 17px ;
          border-radius: 30px;
          border: solid 2px #6c6c6c;
          color: #6c6c6c;
          font-size: 1em;
          display: flex;
          font-family: 'NSD-Bold';
        }
      }
    }

    & .slime img {
      width: 70%;
    }

    & .left-content {
      width: 37.5%;
      height: 100%;
      float: left;
      font-family: 'NSD-Bold';

      & li {
        color: #fff;
        cursor: pointer;
        display: flex;
        align-content: center;
        align-items: center;
        padding-left: 10%;

        &:hover{
          background-color: #5485ff;
        }
        &:active {
          background-color #1e1e1e: 
        }
      }
      & img {
        width: 35%;
      }
      & #menu-title {
        padding: 20% 10%;
        font-size: 1.5em;
      }
    }

    & .right-content {
      width: 62.5%;
      height: 100%;
      float: right;
      background-color: white;
    }
  }
`;

export const ShrinkNavbar = styled.div `
  width: 4%;
  height: 93%;
  border-radius: 2rem;
  margin: 1.9% 1.9% 0;
  display: inline-block;
  background-color: #1e1e1e;
  overflow: hidden;
  & img {
    width: 80%;
    cursor: pointer;
  }

  & .open-selected-btn {
    height: 10%;
    padding: 10px;
    display: flex;
    justify-content: center;
  }
  
  & .content {
    background-image: url(../imgs/navbar/bg.svg);
    height: 100%;
    padding-top: 190px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
    & #icons {
      margin-top: 30px;
      // align-items: center;
      // border-radius: 16px;
      cursor: pointer;
      display: flex;
      // flex-direction: column;
      width: 80px;
      justify-content: center;
    }
  }
`;
