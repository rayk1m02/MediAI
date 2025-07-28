import React from 'react';

interface SentimentAnalysisProps {
  stockSymbol: string;
  sentimentScore: number;
  sentimentText: string;
  growthPotential: string;
  dataSources: string[];
}

const SentimentAnalysis: React.FC<SentimentAnalysisProps> = ({
  stockSymbol,
  sentimentScore,
  sentimentText,
  growthPotential,
  dataSources
}) => {
  const getSentimentColor = (score: number) => {
    if (score >= 0.6) return 'text-green-600';
    if (score >= 0.4) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getSentimentLabel = (score: number) => {
    if (score >= 0.6) return 'Positive';
    if (score >= 0.4) return 'Neutral';
    return 'Negative';
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">
          Sentiment Analysis for {stockSymbol}
        </h3>
        <div className="flex items-center space-x-2">
          <span className={`text-sm font-medium ${getSentimentColor(sentimentScore)}`}>
            {getSentimentLabel(sentimentScore)}
          </span>
          <span className="text-sm text-gray-500">({sentimentScore.toFixed(2)})</span>
        </div>
      </div>
      
      <div className="space-y-4">
        <p className="text-gray-700 leading-relaxed">
          {sentimentText}
        </p>
        
        <div className="bg-blue-50 border border-blue-200 rounded-md p-3">
          <p className="text-sm text-blue-800">
            <strong>Growth Potential:</strong> {growthPotential}
          </p>
        </div>
        
        <div className="text-xs text-gray-500">
          <span>According to: </span>
          {dataSources.map((source, index) => (
            <span key={source}>
              {source}{index < dataSources.length - 1 ? ', ' : ''}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SentimentAnalysis; 