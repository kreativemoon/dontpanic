import styled from '@emotion/styled';
// import { MentionsInput } from 'react-mentions';

export const ChatArea = styled.div`
  display: flex;
  width: 100%;
  height: 40%;
  padding: 20px;
  background-color: #141414;
  // padding-top: 0;
`;

export const Form = styled.form`
  color: rgb(29, 28, 29);
  font-size: 15px;
  width: 100%;
  border-radius: 4px;
`;

export const MentionsTextarea = styled.textarea`
  width: 100%;
  font-family: Slack-Lato, appleLogo, sans-serif;
  font-size: 20px;
  color: #fff;
  height: 100%;
  padding: 9px 10px !important;
  outline: none !important;
  border-radius: 4px !important;
  resize: none !important;
  line-height: 22px;
  border: none !important;
  background-color: transparent;
`;

export const EachMention = styled.button<{ focus: boolean }>`
  padding: 4px 20px;
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  color: rgb(28, 29, 28);
  width: 100%;
  & img {
    margin-right: 5px;
  }
  ${({ focus }) =>
    focus &&
    `
    background: #1264a3;
    color: white;
  `};
`;