import React, { useState } from 'react';
import { Calendar, CheckSquare, AlertTriangle, RefreshCw } from 'lucide-react';

interface ReviewItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  isChecked: boolean;
}

function PasswordReview() {
  const [reviewItems, setReviewItems] = useState<ReviewItem[]>([
    {
      id: 'length',
      title: 'パスワードの長さ',
      description: 'すべてのパスワードが12文字以上になっていますか？',
      icon: <AlertTriangle className="w-6 h-6 text-yellow-500" />,
      isChecked: false,
    },
    {
      id: 'unique',
      title: 'パスワードの使い回し',
      description: '重要なアカウントで同じパスワードを使っていませんか？',
      icon: <RefreshCw className="w-6 h-6 text-blue-500" />,
      isChecked: false,
    },
    {
      id: 'manager',
      title: 'パスワード管理ツール',
      description: 'パスワード管理ツールを使用していますか？',
      icon: <CheckSquare className="w-6 h-6 text-green-500" />,
      isChecked: false,
    },
    {
      id: 'update',
      title: '定期的な更新',
      description: '重要なアカウントのパスワードを定期的に更新していますか？',
      icon: <Calendar className="w-6 h-6 text-purple-500" />,
      isChecked: false,
    },
  ]);

  const handleToggleCheck = (id: string) => {
    setReviewItems(items =>
      items.map(item =>
        item.id === id ? { ...item, isChecked: !item.isChecked } : item
      )
    );
  };

  const completedCount = reviewItems.filter(item => item.isChecked).length;
  const progress = (completedCount / reviewItems.length) * 100;

  return (
    <div className="space-y-8">
      <div className="bg-blue-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold text-blue-800 mb-2">
          パスワードセキュリティの見直し
        </h3>
        <p className="text-lg text-blue-800">
          以下のチェックリストを確認して、パスワードセキュリティの現状を把握しましょう。
          各項目を確認したら、チェックボックスをクリックしてください。
        </p>
      </div>

      <div className="space-y-4">
        {reviewItems.map((item) => (
          <div
            key={item.id}
            className={`bg-white p-6 rounded-lg border-2 transition-colors duration-200 ${
              item.isChecked ? 'border-green-200 bg-green-50' : 'border-gray-100'
            }`}
          >
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">{item.icon}</div>
              <div className="ml-4 flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="text-xl font-semibold text-gray-800">
                    {item.title}
                  </h4>
                  <button
                    onClick={() => handleToggleCheck(item.id)}
                    className={`w-6 h-6 border-2 rounded ${
                      item.isChecked
                        ? 'bg-green-500 border-green-500'
                        : 'border-gray-300'
                    }`}
                  >
                    {item.isChecked && (
                      <CheckSquare className="w-5 h-5 text-white" />
                    )}
                  </button>
                </div>
                <p className="text-lg text-gray-600 mt-2">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white p-6 rounded-lg border-2 border-gray-100">
        <h4 className="text-xl font-semibold text-gray-800 mb-4">
          確認の進捗状況
        </h4>
        <div className="space-y-2">
          <div className="flex justify-between text-lg text-gray-600">
            <span>完了項目</span>
            <span>{completedCount} / {reviewItems.length}</span>
          </div>
          <div className="bg-gray-200 rounded-full h-4">
            <div
              className="bg-green-500 rounded-full h-4 transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg">
        <h4 className="text-xl font-semibold text-gray-800 mb-4">
          次のステップ
        </h4>
        <ul className="list-disc list-inside space-y-2 text-lg text-gray-600">
          <li>チェックできなかった項目から優先的に対応しましょう</li>
          <li>パスワード管理ツールの導入を検討してください</li>
          <li>重要なアカウントから順に、パスワードを見直していきましょう</li>
          <li>定期的な見直しの予定を立てましょう</li>
        </ul>
      </div>
    </div>
  );
}

export default PasswordReview;