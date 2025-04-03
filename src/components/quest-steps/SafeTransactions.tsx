import React from 'react';
import { ShoppingCart, CreditCard, Shield, AlertTriangle, CheckCircle2, XCircle } from 'lucide-react';

interface SafetyCheck {
  id: string;
  title: string;
  description: string;
  safeExamples: string[];
  dangerousExamples: string[];
}

function SafeTransactions() {
  const safetyChecks: SafetyCheck[] = [
    {
      id: 'website',
      title: 'ウェブサイトの信頼性',
      description: '取引を行うウェブサイトが信頼できるか確認',
      safeExamples: [
        'URLが正しい（https://で始まる）',
        '会社情報が明確に記載されている',
        'カスタマーサポートの連絡先が明記されている',
        '利用規約やプライバシーポリシーが整備されている'
      ],
      dangerousExamples: [
        'URLが不自然（似て非なるドメイン）',
        '会社情報が不明確または記載なし',
        '連絡手段がメールのみ',
        '日本語が不自然'
      ]
    },
    {
      id: 'payment',
      title: '支払い方法の安全性',
      description: '安全な支払い方法を選択し、不正利用を防止',
      safeExamples: [
        'クレジットカード決済は暗号化通信を使用',
        '二要素認証の利用',
        '公式の決済システムを使用',
        '取引履歴が確認可能'
      ],
      dangerousExamples: [
        '銀行口座への直接振込要求',
        '暗号資産での支払い要求',
        'ギフトカードでの支払い要求',
        '第三者を介した送金'
      ]
    },
    {
      id: 'price',
      title: '価格の妥当性',
      description: '商品やサービスの価格が適切か確認',
      safeExamples: [
        '市場価格と同程度の価格設定',
        '送料や手数料が明確',
        '返品・返金ポリシーが明記',
        '割引の条件が明確'
      ],
      dangerousExamples: [
        '市場価格より著しく安い',
        '不明な追加料金',
        '返金ポリシーが不明確',
        '過度な割引や特典'
      ]
    },
    {
      id: 'seller',
      title: '販売者の評価',
      description: '販売者の信頼性を確認',
      safeExamples: [
        'ユーザーレビューが多数存在',
        '長期間の販売実績',
        '第三者機関の認証あり',
        'SNSでの活動履歴あり'
      ],
      dangerousExamples: [
        '新規アカウントのみ',
        'レビューが不自然に良い',
        '連絡先が不明確',
        '実在性が疑わしい'
      ]
    }
  ];

  return (
    <div className="space-y-8">
      <div className="bg-blue-50 p-6 rounded-lg">
        <div className="flex items-start">
          <ShoppingCart className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
          <div className="ml-3">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">
              安全な取引の方法
            </h3>
            <p className="text-lg text-blue-800">
              オンラインでの取引を安全に行うためのポイントを学び、
              詐欺被害を防ぎましょう。
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-6">
        {safetyChecks.map((check) => (
          <div
            key={check.id}
            className="bg-white p-6 rounded-lg border-2 border-gray-100"
          >
            <div className="flex items-start mb-4">
              <div className="p-2 bg-gray-50 rounded-lg">
                {check.id === 'website' ? (
                  <Shield className="w-6 h-6 text-blue-500" />
                ) : check.id === 'payment' ? (
                  <CreditCard className="w-6 h-6 text-green-500" />
                ) : check.id === 'price' ? (
                  <AlertTriangle className="w-6 h-6 text-yellow-500" />
                ) : (
                  <ShoppingCart className="w-6 h-6 text-purple-500" />
                )}
              </div>
              <div className="ml-4">
                <h4 className="text-xl font-semibold text-gray-800">
                  {check.title}
                </h4>
                <p className="text-lg text-gray-600">
                  {check.description}
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="flex items-center mb-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-2" />
                  <h5 className="text-lg font-medium text-green-800">
                    安全な例
                  </h5>
                </div>
                <ul className="space-y-2">
                  {check.safeExamples.map((example, index) => (
                    <li key={index} className="flex items-center text-green-700">
                      <Shield className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-lg">{example}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-red-50 p-4 rounded-lg">
                <div className="flex items-center mb-3">
                  <XCircle className="w-5 h-5 text-red-500 mr-2" />
                  <h5 className="text-lg font-medium text-red-800">
                    危険な例
                  </h5>
                </div>
                <ul className="space-y-2">
                  {check.dangerousExamples.map((example, index) => (
                    <li key={index} className="flex items-center text-red-700">
                      <AlertTriangle className="w-4 h-4 text-red-500 mr-2" />
                      <span className="text-lg">{example}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg">
        <h4 className="text-xl font-semibold text-gray-800 mb-4">
          安全な取引のためのポイント
        </h4>
        <ul className="list-disc list-inside space-y-3 text-lg text-gray-600">
          <li>取引前に必ず販売者の情報を確認する</li>
          <li>安全な支払い方法を選択する</li>
          <li>不自然な価格設定には注意する</li>
          <li>取引記録を必ず保管する</li>
          <li>不安な場合は取引を中止する</li>
        </ul>
      </div>
    </div>
  );
}

export default SafeTransactions;