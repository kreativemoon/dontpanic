import React, { useCallback, useEffect } from 'react';
import { ChatContent } from './styles';
import ChatList from '@components/chat/ChatList';
import ChatBox from '@components/chat/ChatBox';
import useInput from '@hooks/useInput';
import axios from 'axios';
import useSWR from 'swr';
import fetcher from '@utils/fetcher';
import { IDM } from '@typings/db';
// import useSocket from '@hooks/useSocket';
import { disconnect } from 'process';
import { io } from 'socket.io-client';
import { SendBirdProvider, OpenChannel } from "sendbird-uikit";
import "sendbird-uikit/dist/index.css";
import { useRecoilValue } from 'recoil';
import { userDataState } from '../../../store/basic';
const Chat = () => {
  const [chat, onChangeChat, setChat] = useInput('');
  const userData = useRecoilValue(userDataState);

  // const {data: chatData, mutate: mutateChat } = useSWR<IDM[]>(
  //     '/api/dms/chats?perPage=20&page=1', fetcher, 
  // );
  // const [socket] = useSocket();
  // const socket = io('http://localhost:4242', {transports:['websocket']});
  // socket.emit('test', 'sdfsdfs');
  // socket.on('test', () => console.log('mesdskhfskdjfh'));
  // useEffect(() => {
  //     socket?.on('test', () => console.log('msdfjsldkfjskdhfksjdhf'));

  // }, []);
  // socket.emit('test', 'sdfkjhskjdhf')
  // useEffect(() => {
  //     socket?.on('test', ()=> {console.log('on')});
  //     return () => {
  //       socket?.off('test', () => { console.log('off') });
  //     };
  //   }, [socket]);
  const onSubmitForm = useCallback(
    (e) => {
      e.preventDefault();
      // mutateChat;
      // setChat('');
      // if (chat?.trim()) {
      //     axios.post('/api/dms/chats', {
      //         content: chat,
      //     })
      //     .then(() => {
      //         mutateChat;
      //         setChat('');
      //     })
      //     .catch(console.error);
      // }
    },
    [chat]
  );
  return (
    <ChatContent>
      <span>
        <SendBirdProvider
          appId={process.env.REACT_APP_CHAT_APP_ID!}
          userId={userData.nickname}
          theme="dark"
        >
          <div className="chat-sendbird">
          <OpenChannel
              channelUrl={process.env.REACT_APP_CHAT_CHANNEL_URL!}
              disableUserProfile // to determine whether to display user profile on clicking userIcons,
              fetchingParticipants={false}
            />
          </div>
        </SendBirdProvider>
      </span>
      {/* <ChatList></ChatList>
            <ChatBox></ChatBox> */}
    </ChatContent>

  );
};

export default Chat;

{/* <div style={{border:"2px solid blue", height:"70%"}}>
    <ChatList />
<ChatList>
    {chat}
</ChatList>
</div>
<ChatBox chat={chat} onChangeChat={onChangeChat} onSubmitForm={onSubmitForm} />
<div style={{height:"30%", border:"2px solid green",}}>
    <textarea placeholder="Press Enter to send message." style={{color: "#fff",width:"100%", height:"100%", "border":"none", "backgroundColor": "#141414", position:"static"}}/>
</div> */}