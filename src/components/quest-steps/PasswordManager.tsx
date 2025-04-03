import React from 'react';
import { Key, Shield, Lock, Smartphone, Computer, Cloud } from 'lucide-react';

interface ManagerOption {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
}

function PasswordManager() {
  const managerOptions: ManagerOption[] = [
    {
      id: 'browser',
      title: 'ブラウザのパスワード管理',
      description: 'ChromeやSafariなどのブラウザ内蔵のパスワード管理機能',
      icon: <Computer className="w-8 h-8 text-blue-500" />,
      features: [
        '無料で利用可能',
        'ブラウザと連携して簡単にパスワードを保存',
        'スマートフォンと同期可能',
        'マスターパスワードで保護',
      ],
    },
    {
      id: 'app',
      title: 'パスワード管理アプリ',
      description: '専用のパスワード管理アプリケーション',
      icon: <Smartphone className="w-8 h-8 text-green-500" />,
      features: [
        '高度な暗号化',
        'クロスプラットフォーム対応',
        'セキュリティ機能が充実',
        'バックアップ機能あり',
      ],
    },
    {
      id: 'cloud',
      title: 'クラウドサービス',
      description: 'クラウドベースのパスワード管理サービス',
      icon: <Cloud className="w-8 h-8 text-purple-500" />,
      features: [
        'どこからでもアクセス可能',
        '自動同期',
        'チーム共有機能',
        '定期的なバックアップ',
      ],
    },
  ];

  return (
    <div className="space-y-8">
      <div className="bg-blue-50 p-6 rounded-lg">
        <div className="flex items-start">
          <Key className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
          <div className="ml-3">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">
              パスワード管理の重要性
            </h3>
            <p className="text-lg text-blue-800">
              多くのウェブサイトで異なるパスワードを使用することは重要ですが、
              すべてを覚えておくのは困難です。そこでパスワード管理ツールの活用が推奨されます。
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-6">
        {managerOptions.map((option) => (
          <div
            key={option.id}
            className="bg-white p-6 rounded-lg border-2 border-gray-100 hover:border-blue-200 transition-colors duration-200"
          >
            <div className="flex items-start">
              <div className="p-3 bg-gray-50 rounded-lg">
                {option.icon}
              </div>
              <div className="ml-4">
                <h4 className="text-xl font-semibold text-gray-800 mb-2">
                  {option.title}
                </h4>
                <p className="text-lg text-gray-600 mb-4">{option.description}</p>
                <ul className="space-y-2">
                  {option.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <Shield className="w-5 h-5 text-green-500 mr-2" />
                      <span className="text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-green-50 p-6 rounded-lg">
        <h4 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
          <Lock className="w-6 h-6 mr-2" />
          パスワード管理のベストプラクティス
        </h4>
        <ul className="list-disc list-inside space-y-3 text-lg text-gray-600">
          <li>信頼できるパスワード管理ツールを選択する</li>
          <li>マスターパスワードは特に強固なものを設定する</li>
          <li>定期的にバックアップを取る</li>
          <li>二要素認証と組み合わせて使用する</li>
          <li>パスワード管理ツールは最新版に保つ</li>
        </ul>
      </div>
    </div>
  );
}

export default PasswordManager;