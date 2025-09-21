import React, { useState, useEffect, useRef } from 'react';
import { Send, MessageCircle, User, Clock, Trash2, Users } from 'lucide-react';
import { getUserData } from '../utils/googleSheets';

const ChatTab = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [onlineUsers] = useState(['John Doe', 'Sarah Wilson', 'Mike Chen', 'Emily Brown', 'Alex Johnson', 'Lisa Park', 'David Kim']);
  const messagesEndRef = useRef(null);
  const userData = getUserData();

  // Load messages from localStorage on component mount
  useEffect(() => {
    const savedMessages = localStorage.getItem('starzChatMessages');
    if (savedMessages) {
      try {
        setMessages(JSON.parse(savedMessages));
      } catch (error) {
        console.error('Error loading chat messages:', error);
        // Initialize with some sample messages if loading fails
        initializeSampleMessages();
      }
    } else {
      // Initialize with sample messages for first-time users
      initializeSampleMessages();
    }
  }, []);

  const initializeSampleMessages = () => {
    const sampleMessages = [
      {
        id: 1,
        text: 'Hey everyone! Anyone taking the Database Management course this semester?',
        sender: 'John Doe',
        timestamp: new Date(Date.now() - 3600000).toISOString(),
        type: 'user'
      },
      {
        id: 2,
        text: 'Yes! I\'m in Professor Johnson\'s class. The assignments are challenging but really interesting.',
        sender: 'Sarah Wilson',
        timestamp: new Date(Date.now() - 3000000).toISOString(),
        type: 'user'
      },
      {
        id: 3,
        text: 'Same here! Would anyone be interested in forming a study group?',
        sender: 'Mike Chen',
        timestamp: new Date(Date.now() - 2400000).toISOString(),
        type: 'user'
      },
      {
        id: 4,
        text: 'Count me in! I think we could really help each other out.',
        sender: 'Emily Brown',
        timestamp: new Date(Date.now() - 1800000).toISOString(),
        type: 'user'
      },
      {
        id: 5,
        text: 'Great idea! When should we meet? I\'m free most afternoons.',
        sender: 'Alex Johnson',
        timestamp: new Date(Date.now() - 900000).toISOString(),
        type: 'user'
      }
    ];
    setMessages(sampleMessages);
  };

  // Save messages to localStorage whenever messages change
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem('starzChatMessages', JSON.stringify(messages));
    }
  }, [messages]);

  // Auto-scroll to bottom when new messages are added
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    
    if (!newMessage.trim()) return;
    
    const messageText = newMessage.trim();
    setNewMessage('');
    setIsLoading(true);

    // Create user message
    const userMessage = {
      id: Date.now(),
      text: messageText,
      sender: userData?.name || 'You',
      timestamp: new Date().toISOString(),
      type: 'user'
    };

    // Add user message to chat
    setMessages(prev => [...prev, userMessage]);

    // Simulate real-time response from Starz Assistant for help queries
    if (messageText.toLowerCase().includes('help') || 
        messageText.toLowerCase().includes('question') ||
        messageText.toLowerCase().includes('fee') ||
        messageText.toLowerCase().includes('program') ||
        messageText.toLowerCase().includes('admission')) {
      
      setTimeout(() => {
        const botResponse = generateBotResponse(messageText);
        const botMessage = {
          id: Date.now() + 1,
          text: botResponse,
          sender: 'Starz Assistant',
          timestamp: new Date().toISOString(),
          type: 'bot'
        };
        
        setMessages(prev => [...prev, botMessage]);
        setIsLoading(false);
      }, 1000 + Math.random() * 2000); // Random delay between 1-3 seconds
    } else {
      setIsLoading(false);
    }
  };

  const generateBotResponse = (userMessage) => {
    const message = userMessage.toLowerCase();
    
    // Simple keyword-based responses
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return `Hello ${userData?.name || 'there'}! Welcome to Starz University. How can I help you today?`;
    }
    
    if (message.includes('fee') || message.includes('cost') || message.includes('price')) {
      return 'Our entrance fee is $20 USD (or equivalent in LRD). Each credit costs $20. For detailed fee information, please check our FAQ section.';
    }
    
    if (message.includes('program') || message.includes('course') || message.includes('major')) {
      return 'We offer programs in three colleges: BIT College (5 programs), Business College (5 programs), and Master College (2 programs). You can explore all programs in the Programs tab.';
    }
    
    if (message.includes('admission') || message.includes('apply') || message.includes('enroll')) {
      return 'To apply for admission, please complete the registration process and contact our admissions office. We\'re here to help guide you through the process!';
    }
    
    if (message.includes('credit') && message.includes('hour')) {
      return 'Credit hours vary by program: BIT and Business programs are typically 120-130 credits over 4 years, while Master programs are 60 credits over 2 years.';
    }
    
    if (message.includes('help') || message.includes('support')) {
      return 'I\'m here to help! You can ask me about programs, fees, admissions, or any other questions about Starz University. For detailed information, check our FAQ section.';
    }
    
    // Default responses
    const defaultResponses = [
      'That\'s an interesting question! For detailed information, please check our FAQ section or contact our support team.',
      'I understand your inquiry. Our academic advisors would be happy to provide more specific information about that topic.',
      'Thank you for your question! For the most accurate and up-to-date information, I recommend checking our official resources or contacting our admissions office.'
    ];
    
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };

  const clearChatHistory = () => {
    if (window.confirm('Are you sure you want to clear all chat history? This action cannot be undone.')) {
      setMessages([]);
      localStorage.removeItem('starzChatMessages');
      initializeSampleMessages(); // Reinitialize with sample messages
    }
  };

  const formatTime = (timestamp) => {
    const now = new Date();
    const messageTime = new Date(timestamp);
    const diff = now - messageTime;
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    if (minutes < 1) return 'Just now';
    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    return `${days}d ago`;
  };

  const getAvatarColor = (sender) => {
    const colors = [
      'bg-blue-500', 'bg-green-500', 'bg-purple-500', 'bg-red-500', 
      'bg-yellow-500', 'bg-indigo-500', 'bg-pink-500', 'bg-teal-500'
    ];
    const index = sender.charCodeAt(0) % colors.length;
    return colors[index];
  };

  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
  };

  return (
    <div className="chat-container">
      {/* Header */}
      <div className="starz-primary p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <MessageCircle size={28} className="starz-text-gold" />
          <div>
            <h1 className="starz-font-serif text-xl font-bold text-white">
              Student Chat
            </h1>
            <p className="starz-font-sans text-sm text-gray-300">
              Connect with fellow students • Real-time messaging
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-white">
            <Users size={20} />
            <span className="text-sm">{onlineUsers.length} online</span>
          </div>
          {messages.length > 5 && (
            <button
              onClick={clearChatHistory}
              className="flex items-center space-x-2 px-3 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors duration-200"
              title="Clear chat history"
            >
              <Trash2 className="w-4 h-4" />
              <span className="text-sm">Clear</span>
            </button>
          )}
        </div>
      </div>

      {/* Online Users */}
      <div className="p-4 bg-gray-50 border-b">
        <div className="flex items-center gap-2 mb-2">
          <Users size={16} className="text-gray-600" />
          <span className="starz-font-sans text-sm font-medium text-gray-700">
            Online Students ({onlineUsers.length})
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          {onlineUsers.slice(0, 6).map((user, index) => (
            <div key={index} className="flex items-center gap-1 bg-white px-2 py-1 rounded-full text-xs">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-gray-700">{user.split(' ')[0]}</span>
            </div>
          ))}
          {onlineUsers.length > 6 && (
            <div className="flex items-center gap-1 bg-white px-2 py-1 rounded-full text-xs">
              <span className="text-gray-700">+{onlineUsers.length - 6} more</span>
            </div>
          )}
        </div>
      </div>

      {/* Messages */}
      <div className="chat-messages flex-1 overflow-y-auto">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex gap-3 p-4 ${msg.sender === (userData?.name || 'You') ? 'bg-blue-50' : msg.type === 'bot' ? 'bg-green-50' : ''}`}>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold ${
              msg.type === 'bot' ? 'bg-green-600' : getAvatarColor(msg.sender)
            }`}>
              {msg.type === 'bot' ? '🤖' : getInitials(msg.sender)}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className={`starz-font-sans font-semibold ${
                  msg.type === 'bot' ? 'text-green-700' : 'text-gray-800'
                }`}>
                  {msg.sender}
                  {msg.type === 'bot' && <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full ml-2">Assistant</span>}
                </span>
                <div className="flex items-center gap-1 text-gray-500">
                  <Clock size={12} />
                  <span className="text-xs">{formatTime(msg.timestamp)}</span>
                </div>
              </div>
              <p className="starz-font-sans text-gray-700 leading-relaxed">
                {msg.text}
              </p>
            </div>
          </div>
        ))}
        
        {/* Loading indicator */}
        {isLoading && (
          <div className="flex gap-3 p-4">
            <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center text-white text-sm font-bold">
              🤖
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="starz-font-sans font-semibold text-green-700">
                  Starz Assistant
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full ml-2">Assistant</span>
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
                <span className="text-sm text-gray-500">typing...</span>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Message Input */}
      <div className="chat-input-area">
        <form onSubmit={handleSendMessage} className="flex gap-3">
          <div className="flex-1 relative">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type your message..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-400"
              disabled={isLoading}
            />
          </div>
          <button
            type="submit"
            disabled={!newMessage.trim() || isLoading}
            className={`px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-all ${
              newMessage.trim() && !isLoading
                ? 'starz-accent starz-accent-hover text-black'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            <Send size={18} />
            Send
          </button>
        </form>
        
        {/* Chat Guidelines */}
        <div className="mt-3 text-xs text-gray-500 starz-font-sans">
          <p>
            💡 <strong>Chat Guidelines:</strong> Be respectful, stay on topic, and help create a positive learning environment. 
            Ask questions about programs, fees, or admissions - our Starz Assistant is here to help!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatTab;

