import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getChatList } from "../store/chats/selectors";
import { createChat } from "../helpers";
import { addChat, removeChat } from "../store/chats/actions"
import { removeMessagesByChatID } from "../store/messages/action"

export const withChats = (Component) => {
   return (props) => {
      const chats = useSelector(getChatList);
      const dispatch = useDispatch();

      const onCreateChat = useCallback(() => {
         dispatch(addChat(createChat("chat name")))
      }, [dispatch]);

      const onDeleteChat = useCallback((chatId) => {
         dispatch(removeChat(chatId))
         dispatch(removeMessagesByChatID(chatId))
      }, [dispatch])

      return <Component
         {...props}
         chats={chats}
         onCreateChat={onCreateChat}
         onDeleteChat={onDeleteChat}
      />
   };
};