import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, Sparkles } from 'lucide-react';
import { queryAgent } from '@/lib/agentEngine';

interface Message {
  id: string;
  role: 'user' | 'agent';
  content: string;
  timestamp: Date;
}

const QUICK_PROMPTS = [
  'Tell me about the NVIDIA GB10 Sentinel program',
  'What is Ashish’s $5M+ ROI track record?',
  'How does Ashish approach TPM & stakeholder alignment?',
  'Why hire Ashish for an AI / Hardware TPM role?',
];

const INITIAL_MESSAGE: Message = {
  id: 'init-1',
  role: 'agent',
  content:
    "👋 Hi! I'm Ashish's Program Brief Bot.\n\nI provide structured summaries of his programs shipped (NVIDIA GB10 Sentinel, Boeing 787, eVTOL), TPM delivery methodologies, and verified $5M+ ROI metrics.\n\nAsk me anything or paste a Job Description to check role alignment!",
  timestamp: new Date(),
};

const PortfolioAgent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);
  const [showQuickPrompts, setShowQuickPrompts] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setTimeout(() => inputRef.current?.focus(), 250);
    }
  }, [isOpen, messages, isTyping]);

  const openChat = () => {
    setIsOpen(true);
    setHasOpened(true);
  };

  const sendMessage = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || isTyping) return;

    setShowQuickPrompts(false);

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: trimmed,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    const typingDelay = Math.min(250 + trimmed.length * 5, 800);

    setTimeout(() => {
      const answer = queryAgent(trimmed);

      const agentMessage: Message = {
        id: `agent-${Date.now()}`,
        role: 'agent',
        content: answer,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, agentMessage]);
      setIsTyping(false);
    }, typingDelay);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="mb-4 w-[calc(100vw-2rem)] sm:w-[420px] h-[540px] max-h-[82vh] card-whiteboard rounded-2xl flex flex-col overflow-hidden border-2 border-marker-blue/30 shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b-2 border-marker-blue/15 bg-marker-blue/5 flex-shrink-0">
              <div className="flex items-center gap-2.5">
                <div className="relative">
                  <div className="w-8 h-8 rounded-lg bg-marker-blue/10 border-2 border-marker-blue/30 flex items-center justify-center">
                    <Bot className="w-4 h-4 text-marker-blue" />
                  </div>
                  <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-marker-green border border-white animate-pulse" />
                </div>
                <div>
                  <p className="text-sm font-handwritten font-bold text-foreground leading-none text-lg">
                    Program Brief Bot
                  </p>
                  <p className="text-[10px] font-sketch text-marker-blue uppercase tracking-wider mt-0.5">
                    ● TPM Assistant · Instant Answers
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-7 h-7 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-black/5 transition-all"
                aria-label="Close chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 bg-whiteboard">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} items-end gap-2`}
                >
                  {msg.role === 'agent' && (
                    <div className="w-6 h-6 rounded-md bg-marker-blue/10 border border-marker-blue/20 flex items-center justify-center flex-shrink-0 mb-0.5">
                      <Bot className="w-3 h-3 text-marker-blue" />
                    </div>
                  )}

                  <div
                    className={`max-w-[84%] rounded-xl px-3 py-2 text-sm font-body whitespace-pre-line leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-marker-blue text-white rounded-br-none shadow-sm'
                        : 'bg-white border-2 border-marker-blue/15 text-foreground rounded-bl-none shadow-sm'
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex items-end gap-2 justify-start">
                  <div className="w-6 h-6 rounded-md bg-marker-blue/10 border border-marker-blue/20 flex items-center justify-center flex-shrink-0 mb-0.5">
                    <Bot className="w-3 h-3 text-marker-blue" />
                  </div>
                  <div className="bg-white border-2 border-marker-blue/15 rounded-xl rounded-bl-none px-4 py-3 shadow-sm">
                    <div className="flex gap-1.5 items-center h-3">
                      {[0, 150, 300].map((delay) => (
                        <div
                          key={delay}
                          className="w-1.5 h-1.5 rounded-full bg-marker-blue animate-bounce"
                          style={{ animationDelay: `${delay}ms` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {showQuickPrompts && (
                <div className="pt-1 space-y-2">
                  <p className="text-[10px] font-sketch text-muted-foreground uppercase tracking-wider text-center">
                    Suggested questions
                  </p>
                  <div className="flex flex-col gap-1.5">
                    {QUICK_PROMPTS.map((prompt) => (
                      <button
                        key={prompt}
                        onClick={() => sendMessage(prompt)}
                        className="text-left text-xs font-sketch text-marker-blue bg-marker-blue/5 border border-marker-blue/20 rounded-lg px-3 py-2 hover:bg-marker-blue/10 transition-all duration-200 leading-snug"
                      >
                        {prompt}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input bar */}
            <div className="flex-shrink-0 px-3 pb-3 pt-2 border-t-2 border-marker-blue/15 bg-white">
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask about programs, metrics, JD fit…"
                  disabled={isTyping}
                  className="flex-1 bg-muted/40 border border-border rounded-xl px-4 py-2 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-marker-blue transition-all disabled:opacity-50"
                />
                <button
                  onClick={() => sendMessage(input)}
                  disabled={!input.trim() || isTyping}
                  aria-label="Send message"
                  className="w-9 h-9 rounded-xl bg-marker-blue text-white flex items-center justify-center hover:bg-marker-blue/90 active:scale-95 disabled:opacity-35 disabled:cursor-not-allowed transition-all"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
              <p className="text-[9px] font-sketch text-muted-foreground text-center mt-2 tracking-wide">
                Answers sourced directly from Ashish's verified program history
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating toggle button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.94 }}
        onClick={isOpen ? () => setIsOpen(false) : openChat}
        aria-label={isOpen ? 'Close bot chat' : 'Open bot chat'}
        className={`relative flex items-center justify-center bg-marker-blue text-white border-2 border-white shadow-xl hover:bg-marker-blue/90 transition-all ${
          isOpen ? 'w-12 h-12 rounded-full' : 'gap-2 px-4 py-2.5 rounded-full'
        }`}
      >
        {!hasOpened && (
          <span className="absolute inset-0 rounded-full border-2 border-marker-blue animate-ping" />
        )}

        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.18 }}
            >
              <X className="w-5 h-5 text-white" />
            </motion.span>
          ) : (
            <motion.span
              key="open"
              className="flex items-center gap-2"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.18 }}
            >
              <Sparkles className="w-4 h-4 text-white flex-shrink-0" />
              <span className="text-sm font-sketch font-bold tracking-wide whitespace-nowrap">
                Program Bot
              </span>
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};

export default PortfolioAgent;
