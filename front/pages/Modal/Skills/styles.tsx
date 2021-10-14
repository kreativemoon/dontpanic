import styled from '@emotion/styled';

export const SkillsContent = styled.div`
  display: flex;
  color: #fff;
  margin: 10%;
  & .skills-slime {
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
  & .skills-content {
    width: 60%;
    margin-top: 10%;
    & .skills-title {
      font-family: "NSD-Bold";
      font-size: 3rem;
      color: #fff;
      margin-top: 10%;
    }
    
    & #skills-button {
      float: right;
      margin-top: 15%;
      margin-right: -115px;
    }
  }
`;
export const Skill = styled.div`
margin: 95px 60px 76px 0;
// padding: 15px 55px;
// border-radius: 60.8px;
// cursor: pointer;
// border: solid 9px #6c6c6c;
// color: #6c6c6c;
font-family: 'NSD-Bold';
font-size: 30px;
font-weight: bold;
`;
