import React from 'react';
import { Shield, Lock, UserCog, BellRing, AlertTriangle } from 'lucide-react';

interface SecuritySetting {
  id: string;
  title: string;
  description: string;
  importance: 'high' | 'medium' | 'low';
  icon: React.ReactNode;
  tips: string[];
}

function AccountBasics() {
  const securitySettings: SecuritySetting[] = [
    {
      id: 'password',
      title: 'パスワード設定',
      description: '強力なパスワードを設定し、定期的に更新することで、アカウントを保護します。',
      importance: 'high',
      icon: <Lock className="w-6 h-6 text-red-500" />,
      tips: [
        '12文字以上の長さを使用',
        '大文字、小文字、数字、記号を組み合わせる',
        '定期的なパスワードの更新',
        '他のアカウントと同じパスワードを使用しない'
      ]
    },
    {
      id: 'twofactor',
      title: '二要素認証',
      description: 'パスワードに加えて、別の認証方法を追加することで、セキュリティを強化します。',
      importance: 'high',
      icon: <Shield className="w-6 h-6 text-red-500" />,
      tips: [
        'スマートフォンの認証アプリを使用',
        'バックアップコードを安全な場所に保管',
        'リカバリー用の電話番号を設定',
        'セキュリティキーの使用を検討'
      ]
    },
    {
      id: 'recovery',
      title: 'アカウント回復オプション',
      description: 'アカウントにアクセスできなくなった場合の回復手段を設定します。',
      importance: 'medium',
      icon: <UserCog className="w-6 h-6 text-yellow-500" />,
      tips: [
        'バックアップメールアドレスの設定',
        '秘密の質問と答えの設定',
        '信頼できる連絡先の追加',
        'リカバリーコードの保管'
      ]
    },
    {
      id: 'notifications',
      title: 'セキュリティ通知',
      description: '不審なアクティビティを検知した際の通知設定を行います。',
      importance: 'medium',
      icon: <BellRing className="w-6 h-6 text-yellow-500" />,
      tips: [
        '新しいデバイスからのログイン通知',
        'パスワード変更時の通知',
        'セキュリティ警告の設定',
        '定期的なセキュリティレポート'
      ]
    }
  ];

  return (
    <div className="space-y-8">
      <div className="bg-blue-50 p-6 rounded-lg">
        <div className="flex items-start">
          <AlertTriangle className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
          <div className="ml-3">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">
              アカウント設定の重要性
            </h3>
            <p className="text-lg text-blue-800">
              適切なアカウント設定は、オンラインでの安全性を確保する基本です。
              以下の重要な設定項目を確認し、必要な対策を講じましょう。
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-6">
        {securitySettings.map((setting) => (
          <div
            key={setting.id}
            className={`bg-white p-6 rounded-lg border-2 ${
              setting.importance === 'high'
                ? 'border-red-100'
                : setting.importance === 'medium'
                ? 'border-yellow-100'
                : 'border-gray-100'
            }`}
          >
            <div className="flex items-start">
              <div className="p-2 bg-gray-50 rounded-lg">
                {setting.icon}
              </div>
              <div className="ml-4 flex-1">
                <div className="flex items-center">
                  <h4 className="text-xl font-semibold text-gray-800">
                    {setting.title}
                  </h4>
                  <span
                    className={`ml-3 px-3 py-1 rounded-full text-sm font-medium ${
                      setting.importance === 'high'
                        ? 'bg-red-100 text-red-800'
                        : setting.importance === 'medium'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {setting.importance === 'high'
                      ? '重要'
                      : setting.importance === 'medium'
                      ? '推奨'
                      : '任意'}
                  </span>
                </div>
                <p className="text-lg text-gray-600 mt-2 mb-4">
                  {setting.description}
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h5 className="text-lg font-medium text-gray-800 mb-3">
                    設定のポイント
                  </h5>
                  <ul className="space-y-2">
                    {setting.tips.map((tip, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <Shield className="w-5 h-5 text-green-500 mr-2" />
                        <span className="text-lg">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-green-50 p-6 rounded-lg">
        <h4 className="text-xl font-semibold text-gray-800 mb-4">
          セキュリティ設定のベストプラクティス
        </h4>
        <ul className="list-disc list-inside space-y-3 text-lg text-gray-600">
          <li>重要度の高い設定から順に対応する</li>
          <li>定期的に設定内容を見直す</li>
          <li>不要なアプリやサービスの連携を解除する</li>
          <li>セキュリティ通知を必ず確認する</li>
          <li>デバイスやブラウザのセキュリティ設定も確認する</li>
        </ul>
      </div>
    </div>
  );
}

export default AccountBasics;