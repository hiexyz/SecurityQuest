import React from 'react';
import { Database, Shield, Lock, HardDrive, Cloud, AlertTriangle } from 'lucide-react';

interface DataProtectionTip {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  importance: 'critical' | 'important' | 'recommended';
  steps: string[];
}

function DataProtection() {
  const protectionTips: DataProtectionTip[] = [
    {
      id: 'backup',
      title: 'データバックアップ',
      description: '重要なデータを定期的にバックアップし、安全に保管します。',
      icon: <HardDrive className="w-6 h-6 text-blue-500" />,
      importance: 'critical',
      steps: [
        '重要なファイルを特定する',
        '複数の保存場所を用意する',
        '定期的なバックアップスケジュールを設定',
        'バックアップデータの暗号化',
        'リカバリーテストの実施'
      ]
    },
    {
      id: 'encryption',
      title: 'データの暗号化',
      description: '機密データを暗号化して保護します。',
      icon: <Lock className="w-6 h-6 text-red-500" />,
      importance: 'critical',
      steps: [
        'ストレージの暗号化を有効化',
        '重要なファイルの個別暗号化',
        '強力な暗号化キーの生成と管理',
        '暗号化ソフトウェアの選択と設定',
        '定期的なセキュリティレビュー'
      ]
    },
    {
      id: 'cloud',
      title: 'クラウドストレージの安全な利用',
      description: 'クラウドサービスでのデータ保護方法を学びます。',
      icon: <Cloud className="w-6 h-6 text-purple-500" />,
      importance: 'important',
      steps: [
        '二要素認証の有効化',
        '共有設定の確認',
        'セキュアな接続の確保',
        '機密データの暗号化',
        'アクセス権限の定期的な見直し'
      ]
    },
    {
      id: 'deletion',
      title: 'データの安全な削除',
      description: '不要になったデータを完全に削除する方法を学びます。',
      icon: <AlertTriangle className="w-6 h-6 text-yellow-500" />,
      importance: 'important',
      steps: [
        '削除するデータの特定',
        'セキュアな削除方法の選択',
        'ストレージの完全消去',
        'バックアップの確認',
        '削除証明の保管'
      ]
    }
  ];

  return (
    <div className="space-y-8">
      <div className="bg-blue-50 p-6 rounded-lg">
        <div className="flex items-start">
          <Database className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
          <div className="ml-3">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">
              データ保護の基本
            </h3>
            <p className="text-lg text-blue-800">
              個人データを安全に保護し、管理するための重要な手順と
              ベストプラクティスを学びましょう。
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-6">
        {protectionTips.map((tip) => (
          <div
            key={tip.id}
            className={`bg-white p-6 rounded-lg border-2 ${
              tip.importance === 'critical'
                ? 'border-red-100'
                : tip.importance === 'important'
                ? 'border-yellow-100'
                : 'border-green-100'
            }`}
          >
            <div className="flex items-start">
              <div className="p-2 bg-gray-50 rounded-lg">
                {tip.icon}
              </div>
              <div className="ml-4 flex-1">
                <div className="flex items-center">
                  <h4 className="text-xl font-semibold text-gray-800">
                    {tip.title}
                  </h4>
                  <span
                    className={`ml-3 px-3 py-1 rounded-full text-sm font-medium ${
                      tip.importance === 'critical'
                        ? 'bg-red-100 text-red-800'
                        : tip.importance === 'important'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-green-100 text-green-800'
                    }`}
                  >
                    {tip.importance === 'critical'
                      ? '最重要'
                      : tip.importance === 'important'
                      ? '重要'
                      : '推奨'}
                  </span>
                </div>
                <p className="text-lg text-gray-600 mt-2 mb-4">
                  {tip.description}
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h5 className="text-lg font-medium text-gray-800 mb-3">
                    実施手順
                  </h5>
                  <ol className="space-y-2">
                    {tip.steps.map((step, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-2 text-sm">
                          {index + 1}
                        </span>
                        <span className="text-lg">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-green-50 p-6 rounded-lg">
        <h4 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
          <Shield className="w-6 h-6 mr-2" />
          データ保護の重要ポイント
        </h4>
        <ul className="list-disc list-inside space-y-3 text-lg text-gray-600">
          <li>重要なデータは必ず暗号化して保存する</li>
          <li>定期的なバックアップを忘れずに行う</li>
          <li>アクセス権限は必要最小限に設定する</li>
          <li>不要なデータは確実に削除する</li>
          <li>セキュリティ対策は定期的に見直す</li>
        </ul>
      </div>
    </div>
  );
}

export default DataProtection;