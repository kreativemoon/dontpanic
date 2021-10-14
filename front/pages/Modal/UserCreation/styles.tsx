import styled from '@emotion/styled';

export const UserCreationContent = styled.div`
  display: flex;
  color: #fff;
  margin: 10%;
  & .user-creation-slime {
    width: 40%;
    & .slime {
      width: 50%;
      margin-top: 115px;
      padding: 20%;
      padding-right: 0;
      & svg {
        width: 100%;
      }
    }

  }
  & .user-creation-input-content {
    width: 60%;
    margin-top: 10%;
    & .user-creation-title {
      font-family: "NSD-Bold";
      font-size: 3rem;
      color: #fff;
      margin-top: 10%;
    }
    & input {
      // display: block;
      width: 335px;
      // fontSize: 34px;
      font-size: 3rem;
      line-height: 44px;
      background: transparent;
      border: none;
      border-bottom: 5px solid #6c6c6c;
      padding: 5px 0;
      border-radius : 0;
      color: #fff;
      font-family: "NS-Medium";
      margin-top: 5%;
    }
    & input:focus {
      outline: none;
      border-bottom: 5px solid #fff;
    }
    input:-webkit-autofill,
    input:-webkit-autofill:hover, 
    input:-webkit-autofill:focus, 
    input:-webkit-autofill: {
      border: 3px solid transparent !important;
    }

    & .user-creation-color-choose {
      display: flex;
      margin-top: 20px;
      margin-bottom: 20px;
      margin-top: 3%;

      & .color-circle {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin-right: 41px;
        cursor: pointer;
      }
    }
    & #user-creation-button {
      float: right;
      margin-top: 15%;
      margin-right: -115px;
    }
  }
`;