import React from 'react';
import { ReactNode } from 'react';
import { ChevronRight } from 'lucide-react';

interface QuestCardProps {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
  progress: number;
  totalSteps: number;
  onStart: () => void;
}

function QuestCard({ title, description, icon, progress, totalSteps, onStart }: QuestCardProps) {
  const progressPercentage = (progress / totalSteps) * 100;

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
      <div className="flex items-start">
        <div className="p-3 bg-blue-100 rounded-lg">
          {icon}
        </div>
        <div className="ml-4 flex-1">
          <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
          <p className="text-gray-600 text-lg mb-4">{description}</p>
          
          <div className="mb-2">
            <div className="flex justify-between text-sm text-gray-600 mb-1">
              <span>進捗状況</span>
              <span>{progress}/{totalSteps}</span>
            </div>
            <div className="bg-gray-200 rounded-full h-3">
              <div 
                className="bg-blue-500 rounded-full h-3 transition-all duration-300"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>
          
          <button
            onClick={onStart}
            className="mt-4 w-full flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-lg"
          >
            <span>クエストを始める</span>
            <ChevronRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuestCard;