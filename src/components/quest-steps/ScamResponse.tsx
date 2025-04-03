import React from 'react';
import { AlertTriangle, Phone, Mail, Shield, FileText } from 'lucide-react';

interface ResponseStep {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  actions: string[];
  contacts?: {
    name: string;
    description: string;
  }[];
}

function ScamResponse() {
  const responseSteps: ResponseStep[] = [
    {
      id: 'immediate',
      title: '直ちに行うべき対応',
      description: '被害を最小限に抑えるための緊急対応',
      icon: <AlertTriangle className="w-6 h-6 text-red-500" />,
      actions: [
        '不正アクセスされたアカウントのパスワードを変更',
        '関連する他のアカウントのパスワードも変更',
        '不正な取引や支払いがある場合は金融機関に連絡',
        '証拠となる画面のスクリーンショットや記録を保存'
      ]
    },
    {
      id: 'report',
      title: '被害の報告',
      description: '適切な機関への報告と相談',
      icon: <Phone className="w-6 h-6 text-blue-500" />,
      actions: [
        '警察に被害届を提出',
        '消費者センターに相談',
        'サービス提供者に報告',
        '金融機関に報告'
      ],
      contacts: [
        {
          name: '警察相談専用電話',
          description: '#9110（全国共通）'
        },
        {
          name: '消費者ホットライン',
          description: '188（いやや！）（全国共通）'
        },
        {
          name: '国民生活センター',
          description: '相談窓口で詐欺被害の相談を受付'
        }
      ]
    },
    {
      id: 'prevent',
      title: '再発防止',
      description: '今後の被害を防ぐための対策',
      icon: <Shield className="w-6 h-6 text-green-500" />,
      actions: [
        'セキュリティソフトの更新と完全スキャン',
        '二要素認証の設定確認と有効化',
        'パスワード管理の見直し',
        '定期的なセキュリティチェックの習慣化'
      ]
    },
    {
      id: 'document',
      title: '記録と共有',
      description: '被害の記録と情報共有',
      icon: <FileText className="w-6 h-6 text-purple-500" />,
      actions: [
        '被害の経緯と対応を詳細に記録',
        '関係機関とのやり取りを記録',
        '家族や周囲の人に注意を呼びかけ',
        '同様の被害防止のための情報共有'
      ]
    }
  ];

  return (
    <div className="space-y-8">
      <div className="bg-blue-50 p-6 rounded-lg">
        <div className="flex items-start">
          <Mail className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
          <div className="ml-3">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">
              詐欺被害への対応
            </h3>
            <p className="text-lg text-blue-800">
              詐欺被害に遭ってしまった場合の対応手順と、
              取るべき行動について学びましょう。
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-6">
        {responseSteps.map((step) => (
          <div
            key={step.id}
            className="bg-white p-6 rounded-lg border-2 border-gray-100"
          >
            <div className="flex items-start">
              <div className="p-2 bg-gray-50 rounded-lg">
                {step.icon}
              </div>
              <div className="ml-4 flex-1">
                <h4 className="text-xl font-semibold text-gray-800">
                  {step.title}
                </h4>
                <p className="text-lg text-gray-600 mb-4">
                  {step.description}
                </p>

                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <h5 className="text-lg font-medium text-gray-800 mb-3">
                    対応手順
                  </h5>
                  <ul className="space-y-2">
                    {step.actions.map((action, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <Shield className="w-5 h-5 text-blue-500 mr-2" />
                        <span className="text-lg">{action}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {step.contacts && (
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h5 className="text-lg font-medium text-gray-800 mb-3">
                      相談窓口
                    </h5>
                    <ul className="space-y-3">
                      {step.contacts.map((contact, index) => (
                        <li key={index} className="text-gray-700">
                          <div className="font-medium text-lg">{contact.name}</div>
                          <div className="text-lg ml-5">{contact.description}</div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg">
        <h4 className="text-xl font-semibold text-gray-800 mb-4">
          重要なポイント
        </h4>
        <ul className="list-disc list-inside space-y-3 text-lg text-gray-600">
          <li>被害に気付いたら、すぐに行動を起こす</li>
          <li>必要な証拠を確実に保存する</li>
          <li>適切な機関に報告・相談する</li>
          <li>再発防止策を確実に実施する</li>
          <li>焦らず冷静に対応する</li>
        </ul>
      </div>
    </div>
  );
}

export default ScamResponse;