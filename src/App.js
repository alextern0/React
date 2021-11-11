
import './App.css';
import React, { useState, useEffect } from 'react';
import { MessageInput } from './components/MessageInput';
import { MessageList } from './components/MessageList';

export const App = () => {
  const [messageList, setMessageList] = useState([]);
  const [value, setValue] = useState('');

  const onChangeMessageInput = (event) => {
    setValue(event.target.value);
  };

  const sendMessage = (author, text) => {
    const newMessageList = [...messageList]
    const newMessage = {
      author,
      text
    };
    newMessageList.push(newMessage);
    setMessageList(newMessageList);
  }

  const resetValue = () => {
    setValue("");
  };

  const onSubmit = (event) => {
    event.preventDefault();
    sendMessage('user', value);
    resetValue('');
  };

  useEffect(() => {
    if (messageList.length === 0) {
      return
    }

    const tail = messageList[messageList.length - 1];
    if (tail.author === 'bot') {
      return
    }

sendMessage("bot", "hello");

  }, [messageList])

  return (
    <div>
      <MessageInput onSend={sendMessage} />
      <MessageList messageList={messageList} />
    </div>
  );
};
