import React from 'react';
import { Shield, Globe, Lock, Settings, Cookie, Eye, History, Database } from 'lucide-react';

interface BrowserSetting {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  steps: string[];
  tips: string[];
}

function BrowserPrivacy() {
  const browserSettings: BrowserSetting[] = [
    {
      id: 'cookies',
      title: 'Cookie設定',
      description: 'ブラウザのCookie設定を適切に管理し、トラッキングを制限します。',
      icon: <Cookie className="w-6 h-6 text-purple-500" />,
      steps: [
        'ブラウザの設定画面を開く',
        'プライバシーとセキュリティのセクションを選択',
        'Cookie設定を確認',
        'サードパーティCookieをブロックする',
      ],
      tips: [
        '必要なCookieのみを許可する',
        '定期的にCookieを削除する',
        'プライベートブラウジングを活用する',
        '信頼できないサイトのCookieは拒否する'
      ]
    },
    {
      id: 'tracking',
      title: 'トラッキング防止',
      description: 'ウェブサイトによる行動追跡を防止する設定を行います。',
      icon: <Eye className="w-6 h-6 text-red-500" />,
      steps: [
        'トラッキング防止機能を有効化',
        '追跡レベルを「厳格」に設定',
        'DNTヘッダーを有効化',
        'トラッカーブロック拡張機能の導入を検討'
      ],
      tips: [
        '定期的に設定を確認する',
        '複数の防止機能を組み合わせる',
        'ブロックされているトラッカーを確認する',
        '新しい追跡手法に注意を払う'
      ]
    },
    {
      id: 'history',
      title: '履歴管理',
      description: 'ブラウジング履歴とキャッシュを適切に管理します。',
      icon: <History className="w-6 h-6 text-blue-500" />,
      steps: [
        '定期的な履歴の削除を設定',
        'キャッシュデータの管理',
        '自動削除の設定',
        'ダウンロード履歴の確認'
      ],
      tips: [
        '必要な履歴のみを保持する',
        'プライベートブラウジングを活用する',
        '定期的なクリーンアップを習慣化',
        '重要なサイトはブックマークに保存'
      ]
    },
    {
      id: 'data',
      title: 'データ同期',
      description: 'ブラウザの同期設定とデータ保護を管理します。',
      icon: <Database className="w-6 h-6 text-green-500" />,
      steps: [
        '同期するデータの選択',
        '暗号化パスフレーズの設定',
        'デバイス間の同期設定の確認',
        '不要なデバイスの削除'
      ],
      tips: [
        '必要最小限のデータのみ同期する',
        '強力なパスフレーズを使用する',
        '定期的に同期デバイスを確認する',
        '信頼できないデバイスでは同期しない'
      ]
    }
  ];

  return (
    <div className="space-y-8">
      <div className="bg-blue-50 p-6 rounded-lg">
        <div className="flex items-start">
          <Globe className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
          <div className="ml-3">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">
              ブラウザのプライバシー設定
            </h3>
            <p className="text-lg text-blue-800">
              ブラウザの適切な設定は、オンラインでのプライバシー保護の基本です。
              主要な設定項目と推奨される設定方法を学びましょう。
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-6">
        {browserSettings.map((setting) => (
          <div
            key={setting.id}
            className="bg-white p-6 rounded-lg border-2 border-gray-100"
          >
            <div className="flex items-start">
              <div className="p-2 bg-gray-50 rounded-lg">
                {setting.icon}
              </div>
              <div className="ml-4 flex-1">
                <h4 className="text-xl font-semibold text-gray-800 mb-2">
                  {setting.title}
                </h4>
                <p className="text-lg text-gray-600 mb-4">
                  {setting.description}
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="text-lg font-medium text-gray-800 mb-3 flex items-center">
                      <Settings className="w-5 h-5 mr-2" />
                      設定手順
                    </h5>
                    <ol className="space-y-2">
                      {setting.steps.map((step, index) => (
                        <li key={index} className="flex items-center text-gray-700">
                          <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-2 text-sm">
                            {index + 1}
                          </span>
                          <span className="text-lg">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="text-lg font-medium text-gray-800 mb-3 flex items-center">
                      <Lock className="w-5 h-5 mr-2" />
                      セキュリティのヒント
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
          </div>
        ))}
      </div>

      <div className="bg-green-50 p-6 rounded-lg">
        <h4 className="text-xl font-semibold text-gray-800 mb-4">
          ブラウザセキュリティの重要ポイント
        </h4>
        <ul className="list-disc list-inside space-y-3 text-lg text-gray-600">
          <li>ブラウザは常に最新バージョンに更新する</li>
          <li>セキュリティ設定は定期的に確認する</li>
          <li>不要な拡張機能は削除する</li>
          <li>安全な接続（HTTPS）を確認する</li>
          <li>プライベートブラウジングを適切に活用する</li>
        </ul>
      </div>
    </div>
  );
}

export default BrowserPrivacy;