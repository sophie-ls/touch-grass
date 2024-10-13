"use client";
import styles from "./page.module.css";
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import * as React from 'react';
import { useState } from 'react';
import { useRef, useEffect } from 'react';

// Example chat data with type definition
type Message = {
  content: string;
  sender: 'user' | 'response';  // New sender type
};

type Chat = {
  id: number;
  name: string;
  messages: Message[];  // Adjusted to hold message objects
  prompt: string;
};

const initialChats: Chat[] = [
  { id: 1, name: "Chat #1", messages: [], prompt: "Would you rather be invisible or be able to read minds?" },
  { id: 2, name: "Chat #2", messages: [], prompt: "What show on Netflix did you binge watch embarrassingly fast?" },
  { id: 3, name: "Chat #3", messages: [], prompt: "If you can describe yourself in 3 words, what would they be?" },
];

const messageResponses: Record<string, string> = {
  "Hi": "Hey, how is it going?",
  "Hi, what’s up?": "Heyyy! I’m doing well! I saw u go to UW too?",
  "Yesss! I’m a sophomore. What do you think of the prompt?": "Maybe detail-oriented, caring, and patient 🤣",
  "So, would you rather be invisible or be able to read minds?": "I would choose to be invisible, it's a neat superpower!",
  "So, what show on Netflix did you binge watch embarrassingly fast?": "I finished 'Stranger Things' in one weekend. What about you?)",
};

export default function ChatPage() {
  const [selectedChatId, setSelectedChatId] = useState<number | null>(null);
  const [message, setMessage] = useState<string>("");
  const [chats, setChats] = useState<Chat[]>(initialChats);

  // for autoscrolling chat
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // State for secret code
  const [secretCode, setSecretCode] = useState<string | null>(null);

  // Handle chat selection
  const selectChat = (id: number) => {
    setSelectedChatId(id);
    setSecretCode(null);
  };

  

  // Find selected chat from updated chats state
  const selectedChat = chats.find(chat => chat.id === selectedChatId);

  const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSendMessage(); // Trigger message sending on Enter key press
    }
  };

  const handleSendMessage = () => {
    if (selectedChat && message.trim()) {
      // Create a new message object ensuring the sender type is correct
      const userMessage: Message = { content: message, sender: 'user' }; // Always 'user'
  
      // Create a deep copy of the chats state to avoid direct mutation
      const updatedChats = chats.map(chat => {
        if (chat.id === selectedChatId) {
          // Create a new messages array with the new user message
          const newMessages = [...chat.messages, userMessage];
          return { ...chat, messages: newMessages }; // Update the chat with the new messages
        }
        return chat; // Return the unchanged chat if it’s not the selected one
      });
  
      // Update the chats state with the new messages
      setChats(updatedChats);
      setMessage(""); // Clear the input field after sending
  
      // Check for an auto-response after a short delay
      setTimeout(() => {
        const response = messageResponses[message]; // Look for a predefined response
  
        if (response) {
          const responseMessage: Message = { content: response, sender: 'response' }; // Always 'response'
  
          // Create a new updatedChats with the auto-response
          const updatedChatsWithResponse = updatedChats.map(chat => {
            if (chat.id === selectedChatId) {
              const newMessages = [...chat.messages, responseMessage]; // Add the response to the messages
              return { ...chat, messages: newMessages }; // Update the chat with the new messages
            }
            return chat; // Return unchanged chat if it’s not the selected one
          });
  
          setChats(updatedChatsWithResponse); // Update the state with the response
        }
      }, 1000); // Delay for response
    }
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chats]);

  // Function to generate a random secret code
  const generateSecretCode = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let code = '';
    for (let i = 0; i < 10; i++) {
      code += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    setSecretCode(code);
  };

  return (
    <div>
      <Header></Header>
      <br></br>
      <div style={{ display: 'flex', height: '100vh' }}>
        {/* Left side: Chat List */}
        <div className={styles.usr_chatlist}>
          <h3>Chats</h3>
          {chats.map(chat => (
            <div
              key={chat.id}
              onClick={() => selectChat(chat.id)}
              style={{
                padding: '10px',
                cursor: 'pointer',
                background: chat.id === selectedChatId ? '#f0f0f0' : 'transparent',
                display: 'flex',
                alignItems: 'center',
                height: '85px',
                width: '360px',
                outline: '0.2px solid #BEBEBE',
              }}
            >
              <img src="/images/gen_avatar.png" alt="avatar" style={{ width: '40px', height: '40px' }} />
              <span style={{ marginLeft: '30px'}}>{chat.name}</span>
            </div>
          ))}
        </div>

        {/* Right side: Chat Messages */}
        <div style={{ width: '70%', padding: '10px' }}>
          {selectedChat ? (
            <>
              <h3 style={{display: 'flex', alignItems: 'center', justifyContent: 'center'  }}>{selectedChat.name}</h3>
              <br></br>
              <div className={styles.promptcont}>
                <h4 style={{ marginLeft: '20px', marginRight: '20px' }}>Prompt:</h4>
                <p>{selectedChat.prompt}</p>
              </div>
              <div style={{ marginTop: '20px', height: '300px', overflowY: 'scroll', border: '1px solid #ddd', padding: '10px', display: 'flex', flexDirection: 'column' }}>
                {selectedChat.messages.map((msg, index) => (
                  <div key={index} className={styles.message_container}>
                    {msg.sender === 'user' ? (
                      <div className={styles.usr_message}>
                        {msg.content}
                      </div>
                    ) : (
                      <div className={styles.response_message}>
                        {msg.content}
                      </div>
                    )}
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
              {/* Message Input */}
              <div className={styles.prompt} style={{ marginTop: '20px', display: 'flex' }}>
                <input
                  type="text"
                  value={message}
                  onChange={handleMessageChange}
                  onKeyPress={handleKeyPress}
                  placeholder="Type a message..."
                  style={{
                    flex: 1,
                    border: 'none',
                    outline: 'none',
                    borderRadius: '20px 0 0 20px',
                    padding: '10px',
                  }}
                />
                <button
                  onClick={handleSendMessage}
                  style={{
                    border: 'none',
                    backgroundColor: '#527E4C',
                    color: '#fff',
                    borderRadius: '0 20px 20px 0',
                    padding: '10px 20px',
                    cursor: 'pointer',
                  }}
                >
                  Send
                </button>
              </div>
              <br />
              <br />
              <div style={{ 
                  marginTop: '10px', 
                  alignItems: 'center',
                  justifyContent: 'center',
                  display: 'flex'
                }}>
                    {!secretCode ? ( // Show button only if secretCode is null
                        <button
                            onClick={generateSecretCode}
                            style={{
                                border: 'none',
                                backgroundColor: '#527E4C',
                                color: '#fff',
                                borderRadius: '5px',
                                padding: '10px 20px',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                            }}
                        >
                            Get Secret Code
                        </button>
                    ) : (
                        <div style={{ marginTop: '10px', fontWeight: 'bold' }}>
                            <h3>Secret Code: {secretCode}</h3>
                        </div>
                    )}
              </div>
            </>
          ) : (
            <div>Select a chat to view messages</div>
          )}
        </div>
      </div>
    </div>
  );
}
