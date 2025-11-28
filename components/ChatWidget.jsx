import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadset, faPaperPlane, faMicrophone, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./ChatWidget.css";

export default function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([
        { id: 1, text: "Hello! How can I help you today?", sender: "bot" }
    ]);
    const chatContainerRef = useRef(null);

    useEffect(() => {
        // Scroll to bottom when new messages are added
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSendMessage = () => {
        if (message.trim() === "") return;

        // Add user message
        const newUserMessage = { id: Date.now(), text: message, sender: "user" };
        setMessages(prev => [...prev, newUserMessage]);
        setMessage("");

        // Simulate bot response after 1 second
        setTimeout(() => {
            const botResponses = [
                "I understand. Let me help you with that.",
                "Thanks for your message! Our team will get back to you soon.",
                "Could you provide more details about your inquiry?",
                "I'm here to assist you with any questions about our products."
            ];
            const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
            const newBotMessage = { id: Date.now() + 1, text: randomResponse, sender: "bot" };
            setMessages(prev => [...prev, newBotMessage]);
        }, 1000);
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    const handleVoiceMessage = () => {
        // Simulate voice message functionality
        alert("Voice message feature would be implemented here!");
    };

    return (
        <>
            {/* Chat Widget */}
            <div className={`chat-widget ${isOpen ? 'open' : ''}`}>
                {/* Chat Header */}
                <div className="chat-header">
                    <div className="chat-title">
                        <h3>Talk with Us</h3>
                    </div>
                    <button
                        className="close-chat"
                        onClick={() => setIsOpen(false)}
                    >
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                </div>

                {/* Chat Subtitle */}
                <div className="chat-subtitle">
                    Use voice or text to communicate
                </div>

                {/* Chat Messages */}
                <div className="chat-messages" ref={chatContainerRef}>
                    {messages.map((msg) => (
                        <div key={msg.id} className={`message ${msg.sender}`}>
                            <div className="message-bubble">
                                {msg.text}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Chat Input */}
                <div className="chat-input-container">
                    <div className="input-group">
                        <input
                            type="text"
                            className="chat-input"
                            placeholder="Type your message..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            onKeyPress={handleKeyPress}
                        />
                        <button
                            className="voice-btn"
                            onClick={handleVoiceMessage}
                            title="Voice Message"
                        >
                            <FontAwesomeIcon icon={faMicrophone} />
                        </button>
                        <button
                            className="send-btn"
                            onClick={handleSendMessage}
                            disabled={!message.trim()}
                        >
                            <FontAwesomeIcon icon={faPaperPlane} />
                            <span>Send</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Floating Talk Button */}
            <div className="floating-talk-button">
                <button
                    className="talk-btn"
                    onClick={() => setIsOpen(!isOpen)}
                    title="Talk with Us"
                >
                    <FontAwesomeIcon icon={faHeadset} />
                </button>
            </div>
        </>
    );
}