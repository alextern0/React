import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getChatList } from "../store/chats/selectors";
import { createChat } from "../helpers";
import { offTrackingAddChatWithThunk, offTrackingRemoveChatWithThunk, addChatWithThunk, onTrackingAddChatWithThunk, onTrackingRemoveChatWithThunk, removeChatWithThunk } from "../store/chats/actions"
import { removeMessagesByChatIDWithThunk } from "../store/messages/action"

export const withChats = (Component) => {
   return (props) => {
      const chats = useSelector(getChatList);
      const dispatch = useDispatch();

      const onCreateChat = useCallback(() => {
         dispatch(addChatWithThunk(createChat("chat name")))
      }, [dispatch]);

      const onDeleteChat = useCallback((chatId) => {
         dispatch(removeChatWithThunk(chatId))
         dispatch(removeMessagesByChatIDWithThunk(chatId))
      }, [dispatch])

      useEffect(() => {
         dispatch(onTrackingAddChatWithThunk);
         dispatch(onTrackingRemoveChatWithThunk);
            
      return () => {
         dispatch(offTrackingAddChatWithThunk);
         dispatch(offTrackingRemoveChatWithThunk);
      }
   }, [dispatch])

      return <Component
         {...props}
         chats={chats}
         onCreateChat={onCreateChat}
         onDeleteChat={onDeleteChat}
      />
   };
};