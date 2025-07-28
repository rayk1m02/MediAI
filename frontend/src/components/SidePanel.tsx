import React, { useState } from 'react';
import SearchPanel from './SearchPanel';
import StockListItem from './StockListItem';

interface Stock {
  symbol: string;
  name: string;
  isSelected: boolean;
  isPinned: boolean;
  icon?: string;
}

interface SidePanelProps {
  stocks: Stock[];
  onStockSelect: (symbol: string) => void;
  onStockPin: (symbol: string) => void;
  onSearch: (query: string) => void;
  onAddMore: () => void;
}

const SidePanel: React.FC<SidePanelProps> = ({
  stocks,
  onStockSelect,
  onStockPin,
  onSearch,
  onAddMore
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 h-full">
      <div className="p-4 border-b border-gray-200">
        <SearchPanel onSearch={onSearch} />
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Companies</h3>
        
        <div className="space-y-2 max-h-96 overflow-y-auto">
          {stocks.map((stock) => (
            <StockListItem
              key={stock.symbol}
              symbol={stock.symbol}
              name={stock.name}
              isSelected={stock.isSelected}
              isPinned={stock.isPinned}
              icon={stock.icon}
              onSelect={() => onStockSelect(stock.symbol)}
              onPin={() => onStockPin(stock.symbol)}
            />
          ))}
        </div>
        
        <div className="mt-4 space-y-2">
          <button
            onClick={onAddMore}
            className="w-full py-2 px-3 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
          >
            Add more
          </button>
          <button
            onClick={onAddMore}
            className="w-full py-2 px-3 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
          >
            Add more
          </button>
          <button
            onClick={onAddMore}
            className="w-full py-2 px-3 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
          >
            Add more
          </button>
        </div>
      </div>
    </div>
  );
};

export default SidePanel; 