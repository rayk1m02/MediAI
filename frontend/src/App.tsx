import React, { useState } from 'react';
import StockChart from './components/StockChart';
import SidePanel from './components/SidePanel';
import TimeIntervalSelector from './components/TimeIntervalSelector';
import SentimentAnalysis from './components/SentimentAnalysis';

interface Stock {
  symbol: string;
  name: string;
  isSelected: boolean;
  isPinned: boolean;
  icon?: string;
}

function App() {
  const [selectedInterval, setSelectedInterval] = useState('1D');
  const [selectedStocks, setSelectedStocks] = useState(['STX', 'STZ']);

  // Sample stock data matching the wireframe
  const stocks: Stock[] = [
    { symbol: 'PFE', name: 'Pfizer', isSelected: false, isPinned: true, icon: '🏥' },
    { symbol: 'STX', name: 'Stock X', isSelected: true, isPinned: false, icon: '🏭' },
    { symbol: 'STY', name: 'Stock Y', isSelected: false, isPinned: false, icon: '❓' },
    { symbol: 'STZ', name: 'Stock Z', isSelected: true, isPinned: false, icon: '🚚' },
  ];

  // Sample chart data
  const chartData = {
    labels: ['8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM'],
    datasets: [
      {
        label: 'STX',
        data: [45, 46, 47, 48, 48.08, 48.5, 49, 49.5, 50, 49.8, 49.5, 49.2, 48.8],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.1)',
        tension: 0.4,
      },
      {
        label: 'STZ',
        data: [42, 43, 44, 45, 45.2, 45.5, 46, 46.5, 47, 46.8, 46.5, 46.2, 45.9],
        borderColor: 'rgb(128, 128, 128)',
        backgroundColor: 'rgba(128, 128, 128, 0.1)',
        tension: 0.4,
      },
    ],
  };

  const handleStockSelect = (symbol: string) => {
    // Toggle selection
    setSelectedStocks(prev => 
      prev.includes(symbol) 
        ? prev.filter(s => s !== symbol)
        : [...prev, symbol]
    );
  };

  const handleStockPin = (symbol: string) => {
    // Toggle pin status
    console.log(`Toggle pin for ${symbol}`);
  };

  const handleSearch = (query: string) => {
    console.log(`Search for: ${query}`);
  };

  const handleAddMore = () => {
    console.log('Add more companies');
  };

  const handleIntervalChange = (interval: string) => {
    setSelectedInterval(interval);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center py-4">
            <div className="flex items-center space-x-2">
              <span className="text-green-600">🌿</span>
              <h1 className="text-2xl font-bold text-gray-900">Medi AI</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-[calc(100vh-200px)]">
          
          {/* Chart Area - Takes up 3 columns */}
          <div className="lg:col-span-3 space-y-6">
            
            {/* Chart with Time Selector */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-xl font-semibold text-gray-900">Stock Chart</h2>
                <TimeIntervalSelector 
                  selectedInterval={selectedInterval}
                  onIntervalChange={handleIntervalChange}
                />
              </div>
              <div className="h-80">
                <StockChart data={chartData} title="" />
              </div>
            </div>

            {/* Sentiment Analysis */}
            <SentimentAnalysis
              stockSymbol="STX"
              sentimentScore={0.67}
              sentimentText="The general sentiment towards STX is positive (0.67). People mention the recent price reduction and their excitement towards the upcoming collaboration with Y company."
              growthPotential="There is potential for high growth (upwards of +30%) especially towards the end of this year."
              dataSources={['X', 'Google', 'FinanceNews']}
            />
          </div>

          {/* Side Panel - Takes up 1 column */}
          <div className="lg:col-span-1">
            <SidePanel
              stocks={stocks}
              onStockSelect={handleStockSelect}
              onStockPin={handleStockPin}
              onSearch={handleSearch}
              onAddMore={handleAddMore}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
