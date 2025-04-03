import React, { useState } from 'react';
import { AlertTriangle, Mail, CreditCard, Gift, MessageSquare } from 'lucide-react';

interface ScamType {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  characteristics: string[];
  examples: string[];
  isExpanded: boolean;
}

function ScamTypes() {
  const [scamTypes, setScamTypes] = useState<ScamType[]>([
    {
      id: 'phishing',
      title: 'フィッシング詐欺',
      description: '偽のウェブサイトやメールで個人情報を盗む詐欺',
      icon: <Mail className="w-6 h-6 text-red-500" />,
      characteristics: [
        '緊急性を煽る表現を使用',
        '公式を装ったメールアドレス',
        'リンク先が不自然なURL',
        '個人情報の入力を要求'
      ],
      examples: [
        '銀行を装った緊急メール',
        'アカウント停止の警告メール',
        'セキュリティ更新の偽通知',
        'プレゼント当選の偽メール'
      ],
      isExpanded: false
    },
    {
      id: 'payment',
      title: '支払い詐欺',
      description: '商品代金や料金の支払いに関する詐欺',
      icon: <CreditCard className="w-6 h-6 text-yellow-500" />,
      characteristics: [
        '市場価格より著しく安い価格',
        '急かす支払い要求',
        '一般的でない支払い方法',
        '返金保証の強調'
      ],
      examples: [
        '偽のショッピングサイト',
        '架空の料金請求',
        '前払い詐欺',
        'キャッシュバック詐欺'
      ],
      isExpanded: false
    },
    {
      id: 'prize',
      title: '当選商法',
      description: '架空の賞金や商品当選を装う詐欺',
      icon: <Gift className="w-6 h-6 text-green-500" />,
      characteristics: [
        '高額賞金の当選通知',
        '手数料の前払い要求',
        '期限付きの受け取り',
        '連絡先の即時返信要求'
      ],
      examples: [
        '宝くじ当選詐欺',
        '海外からの賞金通知',
        '架空のプレゼント当選',
        'SNSでの偽キャンペーン'
      ],
      isExpanded: false
    },
    {
      id: 'romance',
      title: 'ロマンス詐欺',
      description: '恋愛感情を利用した金銭要求の詐欺',
      icon: <MessageSquare className="w-6 h-6 text-purple-500" />,
      characteristics: [
        '突然の親密な連絡',
        '会えない理由の説明',
        '金銭的な支援の要求',
        '個人的な写真の使用'
      ],
      examples: [
        'SNSでの出会い系詐欺',
        'マッチングアプリでの詐欺',
        '緊急支援要請詐欺',
        '偽プロフィール詐欺'
      ],
      isExpanded: false
    }
  ]);

  const toggleExpand = (id: string) => {
    setScamTypes(types =>
      types.map(type =>
        type.id === id
          ? { ...type, isExpanded: !type.isExpanded }
          : type
      )
    );
  };

  return (
    <div className="space-y-8">
      <div className="bg-blue-50 p-6 rounded-lg">
        <div className="flex items-start">
          <AlertTriangle className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
          <div className="ml-3">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">
              オンライン詐欺の種類
            </h3>
            <p className="text-lg text-blue-800">
              代表的なオンライン詐欺の手口を理解し、
              被害を防ぐための知識を身につけましょう。
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {scamTypes.map((type) => (
          <div
            key={type.id}
            className="bg-white rounded-lg border-2 border-gray-100"
          >
            <button
              onClick={() => toggleExpand(type.id)}
              className="w-full text-left p-6"
            >
              <div className="flex items-start">
                <div className="p-2 bg-gray-50 rounded-lg">
                  {type.icon}
                </div>
                <div className="ml-4 flex-1">
                  <h4 className="text-xl font-semibold text-gray-800">
                    {type.title}
                  </h4>
                  <p className="text-lg text-gray-600 mt-2">
                    {type.description}
                  </p>
                </div>
              </div>
            </button>

            {type.isExpanded && (
              <div className="px-6 pb-6">
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="text-lg font-medium text-gray-800 mb-3">
                      特徴的な手口
                    </h5>
                    <ul className="space-y-2">
                      {type.characteristics.map((characteristic, index) => (
                        <li key={index} className="flex items-center text-gray-700">
                          <AlertTriangle className="w-5 h-5 text-yellow-500 mr-2" />
                          <span className="text-lg">{characteristic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="text-lg font-medium text-gray-800 mb-3">
                      具体例
                    </h5>
                    <ul className="space-y-2">
                      {type.examples.map((example, index) => (
                        <li key={index} className="flex items-center text-gray-700">
                          <AlertTriangle className="w-5 h-5 text-red-500 mr-2" />
                          <span className="text-lg">{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg">
        <h4 className="text-xl font-semibold text-gray-800 mb-4">
          詐欺被害を防ぐためのポイント
        </h4>
        <ul className="list-disc list-inside space-y-3 text-lg text-gray-600">
          <li>突然の連絡や申し出は疑ってかかる</li>
          <li>URLは慎重に確認する</li>
          <li>個人情報の入力は慎重に判断する</li>
          <li>急かされても冷静に対応する</li>
          <li>不安な場合は信頼できる人に相談する</li>
        </ul>
      </div>
    </div>
  );
}

export default ScamTypes;