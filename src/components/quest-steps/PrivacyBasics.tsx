import React from 'react';
import { Shield, Eye, Lock, AlertTriangle } from 'lucide-react';

interface PrivacyTopic {
  id: string;
  title: string;
  description: string;
  importance: 'critical' | 'important' | 'recommended';
  icon: React.ReactNode;
  points: string[];
}

function PrivacyBasics() {
  const privacyTopics: PrivacyTopic[] = [
    {
      id: 'personal-info',
      title: '個人情報の取り扱い',
      description: 'オンラインでの個人情報の共有と保護について理解しましょう。',
      importance: 'critical',
      icon: <Lock className="w-6 h-6 text-red-500" />,
      points: [
        '必要最小限の情報のみを共有する',
        '信頼できるウェブサイトかを確認する',
        '個人情報を入力する前に接続が安全か確認する',
        'プライバシーポリシーを必ず確認する'
      ]
    },
    {
      id: 'digital-footprint',
      title: 'デジタルフットプリント',
      description: 'インターネット上での行動履歴と影響について学びます。',
      importance: 'important',
      icon: <Eye className="w-6 h-6 text-yellow-500" />,
      points: [
        '投稿や共有は永続的に残る可能性がある',
        '検索履歴やブラウジング履歴の管理',
        'ソーシャルメディアでの投稿の影響を考える',
        '定期的な自分の情報の検索と確認'
      ]
    },
    {
      id: 'location',
      title: '位置情報の保護',
      description: '位置情報の共有とプライバシーリスクについて理解します。',
      importance: 'important',
      icon: <AlertTriangle className="w-6 h-6 text-yellow-500" />,
      points: [
        '位置情報の共有は必要な時のみに制限する',
        'アプリの位置情報アクセス権限を確認する',
        '写真の位置情報を確認する',
        '公開投稿での位置情報の扱いに注意する'
      ]
    }
  ];

  return (
    <div className="space-y-8">
      <div className="bg-blue-50 p-6 rounded-lg">
        <div className="flex items-start">
          <Shield className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
          <div className="ml-3">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">
              プライバシー保護の基本
            </h3>
            <p className="text-lg text-blue-800">
              インターネットでのプライバシー保護は、デジタル時代を安全に過ごすための
              重要な要素です。基本的な考え方と実践方法を学びましょう。
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-6">
        {privacyTopics.map((topic) => (
          <div
            key={topic.id}
            className={`bg-white p-6 rounded-lg border-2 ${
              topic.importance === 'critical'
                ? 'border-red-100'
                : topic.importance === 'important'
                ? 'border-yellow-100'
                : 'border-green-100'
            }`}
          >
            <div className="flex items-start">
              <div className="p-2 bg-gray-50 rounded-lg">
                {topic.icon}
              </div>
              <div className="ml-4 flex-1">
                <div className="flex items-center">
                  <h4 className="text-xl font-semibold text-gray-800">
                    {topic.title}
                  </h4>
                  <span
                    className={`ml-3 px-3 py-1 rounded-full text-sm font-medium ${
                      topic.importance === 'critical'
                        ? 'bg-red-100 text-red-800'
                        : topic.importance === 'important'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-green-100 text-green-800'
                    }`}
                  >
                    {topic.importance === 'critical'
                      ? '最重要'
                      : topic.importance === 'important'
                      ? '重要'
                      : '推奨'}
                  </span>
                </div>
                <p className="text-lg text-gray-600 mt-2 mb-4">
                  {topic.description}
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h5 className="text-lg font-medium text-gray-800 mb-3">
                    重要ポイント
                  </h5>
                  <ul className="space-y-2">
                    {topic.points.map((point, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <Shield className="w-5 h-5 text-blue-500 mr-2" />
                        <span className="text-lg">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg">
        <h4 className="text-xl font-semibold text-gray-800 mb-4">
          プライバシー保護のヒント
        </h4>
        <ul className="list-disc list-inside space-y-3 text-lg text-gray-600">
          <li>定期的にプライバシー設定を見直す</li>
          <li>不要なアプリや古いアカウントは削除する</li>
          <li>公共Wi-Fiでの機密情報の送信は避ける</li>
          <li>ブラウザの追跡防止機能を活用する</li>
          <li>データのバックアップと安全な保管を心がける</li>
        </ul>
      </div>
    </div>
  );
}

export default PrivacyBasics;