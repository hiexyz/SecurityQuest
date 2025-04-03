import React, { useState } from 'react';
import { CheckCircle2, XCircle, Info } from 'lucide-react';

interface PasswordRule {
  id: string;
  title: string;
  description: string;
  examples: {
    good: string[];
    bad: string[];
  };
}

const passwordRules: PasswordRule[] = [
  {
    id: 'length',
    title: '長さは12文字以上',
    description: 'パスワードが長いほど、解読されにくくなります。',
    examples: {
      good: ['SecurityQuest2024!', 'MyFavoriteFood123!'],
      bad: ['Pass123', 'ABC123']
    }
  },
  {
    id: 'variety',
    title: '文字の種類を混ぜる',
    description: '大文字、小文字、数字、記号を組み合わせましょう。',
    examples: {
      good: ['Spring2024@Home', 'Cat&Mouse2024'],
      bad: ['password123', 'PASSWORD123']
    }
  },
  {
    id: 'personal',
    title: '個人情報を避ける',
    description: '生年月日や電話番号など、推測されやすい情報は使わないようにしましょう。',
    examples: {
      good: ['BlueOcean2024!', 'CoffeeTime123@'],
      bad: ['19550823', '09012345678']
    }
  },
  {
    id: 'unique',
    title: 'サービスごとに違うパスワード',
    description: '同じパスワードを複数のサービスで使い回さないようにしましょう。',
    examples: {
      good: ['Amazon: Shop2024@Safe', 'Gmail: Mail2024@Secure'],
      bad: ['すべてのサービスでPassword123!を使用']
    }
  }
];

function PasswordBasics() {
  const [selectedRule, setSelectedRule] = useState<string | null>(null);

  return (
    <div className="space-y-8">
      <div className="bg-blue-50 p-6 rounded-lg">
        <div className="flex items-start">
          <Info className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
          <p className="ml-3 text-lg text-blue-800">
            安全なパスワードは、オンラインでの個人情報を守る鍵となります。
            以下の基本ルールを覚えて、安全なパスワードを作成しましょう。
          </p>
        </div>
      </div>

      <div className="grid gap-6">
        {passwordRules.map((rule) => (
          <div
            key={rule.id}
            className={`border-2 rounded-lg p-6 transition-all duration-200 ${
              selectedRule === rule.id ? 'border-blue-400 bg-blue-50' : 'border-gray-100'
            }`}
          >
            <button
              className="w-full text-left"
              onClick={() => setSelectedRule(rule.id === selectedRule ? null : rule.id)}
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{rule.title}</h3>
              <p className="text-lg text-gray-600 mb-4">{rule.description}</p>
            </button>

            {selectedRule === rule.id && (
              <div className="mt-4 space-y-4">
                <div className="space-y-2">
                  <h4 className="text-lg font-medium text-gray-800 flex items-center">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-2" />
                    良い例
                  </h4>
                  <ul className="ml-7 space-y-2">
                    {rule.examples.good.map((example, index) => (
                      <li key={index} className="text-lg text-gray-600">
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2">
                  <h4 className="text-lg font-medium text-gray-800 flex items-center">
                    <XCircle className="w-5 h-5 text-red-500 mr-2" />
                    悪い例
                  </h4>
                  <ul className="ml-7 space-y-2">
                    {rule.examples.bad.map((example, index) => (
                      <li key={index} className="text-lg text-gray-600">
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 p-6 bg-green-50 rounded-lg">
        <h4 className="text-xl font-semibold text-gray-800 mb-4">
          覚えておくポイント
        </h4>
        <ul className="list-disc list-inside space-y-3 text-lg text-gray-600">
          <li>パスワードは長ければ長いほど安全です</li>
          <li>文字の種類は多いほど解読されにくくなります</li>
          <li>個人情報に基づくパスワードは避けましょう</li>
          <li>定期的にパスワードを変更することをお勧めします</li>
        </ul>
      </div>
    </div>
  );
}

export default PasswordBasics;