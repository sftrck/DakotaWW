import React from 'react';
import { Quote } from 'lucide-react';
import { quoteData } from '../data/mock';

const QuoteComponent = ({ className = "" }) => {
  return (
    <div className={`text-center ${className}`}>
      <div className="max-w-4xl mx-auto">
        <Quote className="h-8 w-8 text-slate-400 mx-auto mb-4" />
        <blockquote className="text-2xl md:text-3xl font-light text-gray-800 italic leading-relaxed mb-4">
          "{quoteData.quote}"
        </blockquote>
        <cite className="text-lg text-gray-600 not-italic">
          — {quoteData.author}
        </cite>
        <p className="text-gray-600 mt-4 text-lg leading-relaxed max-w-3xl mx-auto">
          {quoteData.context}
        </p>
      </div>
    </div>
  );
};

export default QuoteComponent;