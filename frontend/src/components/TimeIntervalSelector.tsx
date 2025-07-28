import React from 'react';

interface TimeIntervalSelectorProps {
  selectedInterval: string;
  onIntervalChange: (interval: string) => void;
}

const TimeIntervalSelector: React.FC<TimeIntervalSelectorProps> = ({
  selectedInterval,
  onIntervalChange
}) => {
  const intervals = ['1D', '1W', '1M', '6M', '1Y', 'ALL'];

  return (
    <div className="flex flex-col space-y-1">
      {intervals.map((interval) => (
        <button
          key={interval}
          onClick={() => onIntervalChange(interval)}
          className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
            selectedInterval === interval
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          {interval}
        </button>
      ))}
    </div>
  );
};

export default TimeIntervalSelector; 