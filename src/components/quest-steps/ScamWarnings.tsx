import React, { useState } from 'react';
import { AlertTriangle, Search, Shield, CheckCircle2, XCircle } from 'lucide-react';

interface WarningSign {
  id: string;
  title: string;
  description: string;
  checkPoints: {
    id: string;
    text: string;
    examples: {
      safe: string;
      dangerous: string;
    };
  }[];
}

function ScamWarnings() {
  const [warningSigns] = useState<WarningSign[]>([
    {
      id: 'urgency',
      title: '緊急性の強調',
      description: '急かして冷静な判断を妨げる手口に注意',
      checkPoints: [
        {
          id: 'time-limit',
          text: '時間制限の表現',
          examples: {
            safe: '商品の販売期間は2週間です',
            dangerous: '24時間以内に連絡がない場合、アカウントは永久に停止されます'
          }
        },
        {
          id: 'threat',
          text: '脅迫的な表現',
          examples: {
            safe: 'キャンペーンは来週末に終了します',
            dangerous: '今すぐ対応しないと法的措置を取ります'
          }
        }
      ]
    },
    {
      id: 'reward',
      title: '非現実的な報酬',
      description: '魅力的すぎる条件や報酬の提示に注意',
      checkPoints: [
        {
          id: 'money',
          text: '高額な金銭の提示',
          examples: {
            safe: '抽選で10名様に商品券1万円分をプレゼント',
            dangerous: '簡単な作業で毎月100万円の収入が確実に得られます'
          }
        },
        {
          id: 'condition',
          text: '条件の不自然さ',
          examples: {
            safe: '商品購入でポイント2倍進呈',
            dangerous: '初期費用0円で確実に利益が出る投資案件'
          }
        }
      ]
    },
    {
      id: 'personal',
      title: '個人情報の要求',
      description: '不必要な個人情報の収集に注意',
      checkPoints: [
        {
          id: 'unnecessary',
          text: '過剰な情報要求',
          examples: {
            safe: 'お届け先の住所と電話番号を入力してください',
            dangerous: '本人確認のため、銀行口座とパスワードを教えてください'
          }
        },
        {
          id: 'verification',
          text: '確認方法の不自然さ',
          examples: {
            safe: '本人確認は公式サイトでログインして行ってください',
            dangerous: 'LINEで本人確認をするので、すぐに友達追加してください'
          }
        }
      ]
    }
  ]);

  const [selectedPoint, setSelectedPoint] = useState<string | null>(null);

  return (
    <div className="space-y-8">
      <div className="bg-blue-50 p-6 rounded-lg">
        <div className="flex items-start">
          <Search className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
          <div className="ml-3">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">
              詐欺の警告サイン
            </h3>
            <p className="text-lg text-blue-800">
              詐欺を見分けるための典型的な警告サインを学び、
              被害を未然に防ぎましょう。
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {warningSigns.map((sign) => (
          <div key={sign.id} className="bg-white p-6 rounded-lg border-2 border-gray-100">
            <div className="flex items-start mb-4">
              <AlertTriangle className="w-6 h-6 text-red-500" />
              <div className="ml-4">
                <h4 className="text-xl font-semibold text-gray-800">{sign.title}</h4>
                <p className="text-lg text-gray-600">{sign.description}</p>
              </div>
            </div>

            <div className="space-y-4">
              {sign.checkPoints.map((point) => (
                <div key={point.id}>
                  <button
                    onClick={() => setSelectedPoint(selectedPoint === point.id ? null : point.id)}
                    className="w-full text-left p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                  >
                    <div className="flex items-center">
                      <Shield className="w-5 h-5 text-blue-500 mr-2" />
                      <span className="text-lg font-medium text-gray-800">
                        {point.text}
                      </span>
                    </div>
                  </button>

                  {selectedPoint === point.id && (
                    <div className="mt-4 space-y-4">
                      <div className="p-4 bg-green-50 rounded-lg">
                        <div className="flex items-center mb-2">
                          <CheckCircle2 className="w-5 h-5 text-green-500 mr-2" />
                          <span className="text-lg font-medium text-green-800">
                            安全な例
                          </span>
                        </div>
                        <p className="text-lg text-green-700 ml-7">
                          {point.examples.safe}
                        </p>
                      </div>

                      <div className="p-4 bg-red-50 rounded-lg">
                        <div className="flex items-center mb-2">
                          <XCircle className="w-5 h-5 text-red-500 mr-2" />
                          <span className="text-lg font-medium text-red-800">
                            危険な例
                          </span>
                        </div>
                        <p className="text-lg text-red-700 ml-7">
                          {point.examples.dangerous}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg">
        <h4 className="text-xl font-semibold text-gray-800 mb-4">
          見分けるためのポイント
        </h4>
        <ul className="list-disc list-inside space-y-3 text-lg text-gray-600">
          <li>常識的に考えて不自然な条件ではないか</li>
          <li>必要以上に急かされていないか</li>
          <li>個人情報の要求は適切な範囲か</li>
          <li>連絡手段や確認方法は正当か</li>
          <li>少しでも怪しいと感じたら、信頼できる人に相談する</li>
        </ul>
      </div>
    </div>
  );
}

export default ScamWarnings;