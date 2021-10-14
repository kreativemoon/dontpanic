import { ChatArea, Form, MentionsTextarea, EachMention } from '@components/chat/ChatBox/styles';
// import { IUser } from '@typings/db';
// import autosize from 'autosize';
// import gravatar from 'gravatar';
import React, { VFC, useCallback, useEffect, useRef } from 'react';
import { Mention, SuggestionDataItem } from 'react-mentions';
import autosize from 'autosize';

// interface Props {
//   onSubmitForm: (e: any) => void;
//   chat?: string;
//   onChangeChat: (e: any) => void;
//   placeholder?: string;
//   data?: IUser[];
// }
// const ChatBox: VFC<Props> = ({ chat, onSubmitForm, onChangeChat, placeholder }) => {
const ChatBox = () => {

    const textareaRef = useRef<HTMLTextAreaElement>(null);
    useEffect(() => {
        if (textareaRef.current) {
            autosize(textareaRef.current)
        }
    }, []);
    // const onSubmitForm = useCallback(() => {}, [])
//   const textareaRef = useRef<HTMLTextAreaElement>(null);
//   useEffect(() => {
//     if (textareaRef.current) {
//       autosize(textareaRef.current);
//     }
//   }, []);

  // const onKeydownChat = useCallback(
  //   (e) => {
  //     if (e.key === 'Enter') {
  //       if (!e.shiftKey) {
  //         e.preventDefault();
  //         onSubmitForm(e);
  //       }
  //     }
  //   },
  //   [onSubmitForm],
  // );

//   const renderUserSuggestion: (
//     suggestion: SuggestionDataItem,
//     search: string,
//     highlightedDisplay: React.ReactNode,
//     index: number,
//     focused: boolean,
//   ) => React.ReactNode = useCallback(
//     (member, search, highlightedDisplay, index, focus) => {
//       if (!data) {
//         return null;
//       }
//       return (
//         <EachMention focus={focus}>
//           <img src={gravatar.url(data[index].email, { s: '20px', d: 'retro' })} alt={data[index].nickname} />
//           <span>{highlightedDisplay}</span>
//         </EachMention>
//       );
//     },
//     [data],
//   );

  return (
    <ChatArea>
      <Form>
        <MentionsTextarea placeholder="메세지써"/>
      </Form>
    </ChatArea>
  );
};

export default ChatBox;