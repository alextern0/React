import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from "react-redux";
import { hasChatById } from "../store/chats/selectors";
import { addMessageWithThunk, onTrackingAddMessageWithThunk, offTrackingAddMessageWithThunk } from "../store/messages/action";
import { offTrackingRemovedMessageWithThunk } from '../store/messages/action';
import { onTrackingRemovedMessageWithThunk } from '../store/messages/action';
import { getChatMessagesById } from "../store/messages/selector";
import { userId } from "../store/user/selectors";
import { createMessage } from '../helpers';

export const withChatMessages = (Component) => {
   return (props) => {
      const { chatId } = useParams();
      const dispatch = useDispatch();
      const messageList = useSelector(getChatMessagesById(chatId));
      const hasChat = useSelector(hasChatById(chatId));

      const onSendMessage = (text) => {
         const message = createMessage(userId, text)
         dispatch(addMessageWithThunk(message, chatId))
      };

      useEffect(() => {
         dispatch(onTrackingAddMessageWithThunk(chatId))
         dispatch(onTrackingRemovedMessageWithThunk(chatId))

         return () => {
            dispatch(offTrackingAddMessageWithThunk(chatId))
            dispatch(offTrackingRemovedMessageWithThunk(chatId))
         }
      }, [chatId])

      return <Component
         {...props}
         messageList={messageList}
         hasChat={hasChat}
         onSendMessage={onSendMessage}
      />
   }
}