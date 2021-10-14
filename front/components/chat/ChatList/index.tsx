import { ChatZone, Section, StickyHeader } from './styles';
import { IChat, IDM } from '@typings/db';
import React, { FC, RefObject, useCallback } from 'react';
import { ChatContent } from '@pages/NavBar/chat/styles';

// interface Props {

//   chatSections: { [key: string]: (IDM | IChat)[] };
// }
// const ChatList: FC<Props> = ({ chatSections }) => {
const ChatList = () => {
  const chats = [{nickname: 'E.A.T_kristine', content: '셜라샬라 샬라숑'}]
    return (
        <ChatZone>
          {/* <Section> */}
            {chats.map((chat) => (
                <ChatContent key={chat.nickname} {...chat} />
                ))}
          {/* </Section> */}
        </ChatZone>
  );
};

export default ChatList;
