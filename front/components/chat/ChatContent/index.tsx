import { ChatWrapper } from './styles';
import React, { FC } from 'react';

interface Props {
    chatdata: {
      nickname: string,
      content: string
  }
}

const Chat: FC<Props> = ({ chatdata }) => {
    console.log(chatdata);
  return (
      <>
      <div>{chatdata.nickname}</div>
      <div>{chatdata.content}</div>
      </>
    // <ChatWrapper>
    //   <div className="chat-img">
    //   </div>
    //   <div className="chat-text">
    //     <div className="chat-user">
    //       <b>{chatdata.nickname}</b>
    //     </div>
    //     <p>{chatdata.content}</p>
    //   </div>
    // </ChatWrapper>
  );
};

export default Chat;