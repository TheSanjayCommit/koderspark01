import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import Groq from 'groq-sdk';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Hello! I\'m your Aurobindo Dental Hospital assistant. I can help you with information about our treatments, services, pricing, and appointments. How can I assist you today?',
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const SYSTEM_PROMPT = `You are a helpful medical assistant for Aurobindo Dental Hospital in Hyderabad, India. You can ONLY answer questions about:

1. Dental treatments and procedures (root canal, implants, braces, teeth whitening, etc.)
2. Hospital services and facilities
3. Appointment booking and clinic hours
4. Treatment pricing and payment options
5. Dental health tips and oral hygiene
6. Location and contact information
7. Dental tourism services

Hospital Information:
- Location: Flat 503, 5th Floor, MVS Heights, Vinayaka Nagar, Khanamet, Madhapur, Hyderabad-500081
- Phone: 9866937777, 9032018887, 9347294612
- Email: aurobindodental@gmail.com
- Hours: Mon-Sat 9 AM - 8 PM, Sun 10 AM - 2 PM
- Experience: 15+ years in dental care

Available Treatments:
- Invisible Aligners (₹95,000)
- Dental Braces (₹35,000-50,000)
- Root Canal Treatment (₹4,000-8,000)
- Wisdom Tooth Removal (₹4,000-8,000)
- Dental Implants (₹25,000-45,000)
- Teeth Whitening (₹10,000-15,000)
- Dentures (₹25,000-40,000)
- Dental Crowns (₹5,000-12,000)
- Cosmetic Dentistry (₹15,000-50,000)
- Ceramic Braces (₹40,000-55,000)

IMPORTANT RULES:
- If asked about non-medical or non-hospital topics, politely decline and redirect to dental/hospital topics
- Be professional, friendly, and empathetic
- Keep responses concise and helpful
- Encourage booking appointments for detailed consultations
- Never provide medical diagnosis - recommend in-person consultation for specific cases`;

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages((prev) => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const groq = new Groq({
        apiKey: import.meta.env.VITE_GROQ_API_KEY,
        dangerouslyAllowBrowser: true,
      });

      const chatHistory = messages.map((msg) => ({
        role: msg.role,
        content: msg.content,
      }));

      const completion = await groq.chat.completions.create({
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          ...chatHistory,
          { role: 'user', content: userMessage },
        ],
        model: 'llama-3.3-70b-versatile',
        temperature: 0.7,
        max_tokens: 1024,
      });

      const assistantMessage = completion.choices[0]?.message?.content || 'I apologize, but I encountered an error. Please try again.';

      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: assistantMessage },
      ]);
    } catch (error) {
      console.error('Chatbot error:', error);
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: 'I apologize, but I\'m having trouble connecting right now. Please try again or call us at 9866937777 for immediate assistance.',
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-teal-600 to-teal-500 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 z-50 flex items-center justify-center group"
          aria-label="Open chat"
        >
          <MessageCircle className="w-7 h-7 group-hover:scale-110 transition-transform" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse"></span>
        </button>
      )}

      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[600px] bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden animate-fadeInUp">
          <div className="bg-gradient-to-r from-teal-600 to-teal-500 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold">Dental Assistant</h3>
                <p className="text-xs text-teal-100">Online now</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 hover:bg-white/20 rounded-lg transition-colors flex items-center justify-center"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex gap-3 ${message.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.role === 'user'
                      ? 'bg-teal-600'
                      : 'bg-gray-300'
                  }`}
                >
                  {message.role === 'user' ? (
                    <User className="w-5 h-5 text-white" />
                  ) : (
                    <Bot className="w-5 h-5 text-gray-700" />
                  )}
                </div>
                <div
                  className={`max-w-[75%] p-3 rounded-2xl ${
                    message.role === 'user'
                      ? 'bg-teal-600 text-white rounded-tr-none'
                      : 'bg-white text-gray-800 rounded-tl-none shadow-sm'
                  }`}
                >
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">
                    {message.content}
                  </p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0">
                  <Bot className="w-5 h-5 text-gray-700" />
                </div>
                <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm">
                  <div className="flex gap-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 bg-white border-t border-gray-200">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about our dental services..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                disabled={isLoading}
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="px-4 py-2 bg-gradient-to-r from-teal-600 to-teal-500 text-white rounded-lg hover:from-teal-700 hover:to-teal-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                aria-label="Send message"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
