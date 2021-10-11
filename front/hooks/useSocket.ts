import { useCallback } from 'react';
import {io} from 'socket.io-client';
// import { io, Socket } from 'socket.io-client';

const backUrl = 'http://localhost:4242';

// const sockets: { [key: string]: SocketIOClient.Socket } = {};
const useSocket = () => {
  // const disconnect = useCallback(() => {
  //   if (workspace && sockets[workspace]) {
  //     sockets[workspace].disconnect();
  //     delete sockets[workspace];
  //   }
  // }, [workspace]);
  // if (!workspace) {
  //   return [undefined, disconnect];
  // }
  // if (!sockets[workspace]) {
  //   sockets[workspace] = io.connect(`${backUrl}/ws-${workspace}`, {
  //     transports: ['websocket'],
  //   });
  //   console.info('create socket', workspace, sockets[workspace]);
  // }
  const socket = io(`${backUrl}`, {
    reconnectionDelay: 1000,
    reconnection: true,
    transports: ['websocket'],
    agent: false,
    upgrade: false,
    rejectUnauthorized: false
});
  return [socket];
};

export default useSocket;