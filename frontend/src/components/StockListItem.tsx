import React from 'react';

interface StockListItemProps {
  symbol: string;
  name: string;
  isSelected: boolean;
  isPinned: boolean;
  icon?: string;
  onSelect: () => void;
  onPin: () => void;
}

const StockListItem: React.FC<StockListItemProps> = ({
  symbol,
  name,
  isSelected,
  isPinned,
  icon,
  onSelect,
  onPin
}) => {
  return (
    <div 
      className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-colors ${
        isSelected 
          ? 'bg-blue-50 border border-blue-200' 
          : 'bg-white border border-gray-200 hover:bg-gray-50'
      }`}
      onClick={onSelect}
    >
      <div className="flex items-center space-x-3">
        <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
          {icon ? (
            <span className="text-gray-600 text-sm">{icon}</span>
          ) : (
            <span className="text-gray-600 text-sm">{symbol.charAt(0)}</span>
          )}
        </div>
        <div>
          <div className="font-medium text-gray-900">{name}</div>
          <div className="text-sm text-gray-500">{symbol}</div>
        </div>
      </div>
      
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPin();
        }}
        className={`p-1 rounded-full transition-colors ${
          isPinned 
            ? 'text-red-500 hover:text-red-600' 
            : 'text-gray-400 hover:text-gray-600'
        }`}
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
        </svg>
      </button>
    </div>
  );
};

export default StockListItem; 