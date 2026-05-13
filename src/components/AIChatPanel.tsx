'use strict';

import React, { useState } from 'react';
import { useStore } from '../store/useStore';
import { Send, Bot, Sparkles, Paperclip, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

export const AIChatPanel: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  const { chatMessages } = useStore();
  const [input, setInput] = useState('');
  const [thinking, setThinking] = useState(false);

  const samplePrompts = [
    "Is this clause dangerous?",
    "Can landlord legally do this?",
    "Rewrite this professionally.",
    "Summarize this contract.",
    "Explain this in Kannada."
  ];

  const handleSend = async (textToSend?: string) => {
    const text = textToSend || input;
    if (!text.trim()) return;

    if (!textToSend) setInput('');
    setThinking(true);

    try {
      const activeStore = useStore.getState();
      await activeStore.sendAIChatMessage(text, activeStore.activeDocumentId || 'doc-1');
      setThinking(false);
    } catch (err) {
      setThinking(false);
    }
  };

  return (
    <div className={`flex flex-col bg-white border border-[#d2d3c9] h-full ${compact ? 'max-h-[500px]' : 'min-h-[600px]'}`}>
      {/* Top Banner */}
      <div className="p-3 bg-[#7a5c40] text-white flex items-center justify-between border-b border-[#9c7c5c]">
        <div className="flex items-center gap-2">
          <Bot className="w-4 h-4 text-[#f0f0e8]" />
          <span className="text-xs font-bold uppercase tracking-wider">AI Legal Copilot</span>
        </div>
        <span className="text-[9px] font-bold bg-[#9c7c5c] text-white px-1.5 py-0.5 tracking-widest uppercase">
          Context Aware
        </span>
      </div>

      {/* Messages Scroll Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#f0f0e8]/20">
        {chatMessages.map((msg, idx) => (
          <motion.div
            key={msg.id || idx}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            {msg.sender === 'ai' && (
              <div className="w-6 h-6 bg-[#f0f0e8] border border-[#d2d3c9] flex items-center justify-center shrink-0 text-[#7a5c40] mt-0.5">
                <Sparkles className="w-3.5 h-3.5" />
              </div>
            )}
            
            <div className={`max-w-[85%] p-3 text-xs leading-relaxed border relative ${
              msg.sender === 'user'
                ? 'bg-[#7a5c40] text-white border-[#7a5c40]'
                : 'bg-white text-[#1a1a1a] border-[#d2d3c9]'
            }`}>
              <p className="whitespace-pre-wrap font-medium">{msg.text}</p>
              <span className={`block text-[8px] mt-1 text-right font-mono ${
                msg.sender === 'user' ? 'text-[#f0f0e8]/70' : 'text-[#6b6b61]'
              }`}>
                {msg.timestamp}
              </span>
            </div>

            {msg.sender === 'user' && (
              <div className="w-6 h-6 bg-[#7a5c40] text-white flex items-center justify-center shrink-0 font-bold text-[10px] mt-0.5">
                U
              </div>
            )}
          </motion.div>
        ))}

        {thinking && (
          <div className="flex gap-2.5 items-center text-xs text-[#6b6b61] bg-white p-2.5 border border-[#d2d3c9]/60 max-w-[60%]">
            <Loader2 className="w-3.5 h-3.5 animate-spin text-[#7a5c40]" />
            <span className="animate-pulse font-medium text-[11px]">AI querying local acts...</span>
          </div>
        )}
      </div>

      {/* Prompt chips suggestions */}
      <div className="p-2 border-t border-b border-[#d2d3c9] bg-[#f0f0e8]/60 overflow-x-auto whitespace-nowrap scrollbar-none flex gap-1.5">
        {samplePrompts.map((promptText, idx) => (
          <button
            key={idx}
            onClick={() => handleSend(promptText)}
            disabled={thinking}
            className="text-[10px] font-medium bg-white border border-[#d2d3c9] text-[#1a1a1a] px-2.5 py-1 hover:border-[#7a5c40] hover:text-[#7a5c40] transition-colors inline-flex items-center gap-1 shrink-0"
          >
            <span>{promptText}</span>
          </button>
        ))}
      </div>

      {/* Bottom Send Toolbar */}
      <div className="p-3 bg-white flex items-center gap-2">
        <button 
          type="button"
          onClick={() => alert("File upload integrated directly into chat stream context.")}
          className="p-2 text-[#6b6b61] hover:text-[#7a5c40] bg-[#f0f0e8] border border-[#d2d3c9]"
          title="Attach contract segment or supplementary PDF"
        >
          <Paperclip className="w-4 h-4" />
        </button>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Ask AI anything about these terms..."
          disabled={thinking}
          className="flex-1 bg-[#f0f0e8]/50 border border-[#d2d3c9] px-3 py-2 text-xs text-[#1a1a1a] focus:outline-hidden focus:border-[#7a5c40]"
        />
        <button
          onClick={() => handleSend()}
          disabled={thinking || !input.trim()}
          className="p-2 bg-[#7a5c40] text-white hover:bg-[#5c432d] disabled:opacity-50 transition-colors"
        >
          <Send className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
