import React, { useState } from 'react';
import { Shield, Smartphone, Mail, Key, AlertTriangle, CheckCircle2, XCircle } from 'lucide-react';

interface SecurityCheck {
  id: string;
  title: string;
  description: string;
  status: 'secure' | 'warning' | 'danger' | null;
  icon: React.ReactNode;
  recommendations: string[];
}

function AccountSecurity() {
  const [securityChecks, setSecurityChecks] = useState<SecurityCheck[]>([
    {
      id: 'password',
      title: 'パスワードの強度',
      description: 'アカウントのパスワード強度を確認します。',
      status: null,
      icon: <Key className="w-6 h-6 text-blue-500" />,
      recommendations: [
        '12文字以上の長さを使用',
        '大文字、小文字、数字、記号を含める',
        '個人情報を含まない',
        '定期的に更新する'
      ]
    },
    {
      id: 'twofactor',
      title: '二要素認証',
      description: '追加の認証方法の設定状況を確認します。',
      status: null,
      icon: <Smartphone className="w-6 h-6 text-green-500" />,
      recommendations: [
        '認証アプリを使用',
        'バックアップコードを保管',
        'リカバリー用の電話番号を設定',
        'セキュリティキーの使用を検討'
      ]
    },
    {
      id: 'email',
      title: 'メールセキュリティ',
      description: 'メールアカウントのセキュリティ状態を確認します。',
      status: null,
      icon: <Mail className="w-6 h-6 text-purple-500" />,
      recommendations: [
        '強力なパスワードを使用',
        '二要素認証を有効化',
        'バックアップメールを設定',
        '不審なメールに注意'
      ]
    }
  ]);

  const handleSecurityCheck = (id: string) => {
    setSecurityChecks(checks =>
      checks.map(check =>
        check.id === id
          ? {
              ...check,
              status: Math.random() > 0.5 ? 'secure' : Math.random() > 0.5 ? 'warning' : 'danger'
            }
          : check
      )
    );
  };

  const getStatusColor = (status: SecurityCheck['status']) => {
    switch (status) {
      case 'secure':
        return 'text-green-500';
      case 'warning':
        return 'text-yellow-500';
      case 'danger':
        return 'text-red-500';
      default:
        return 'text-gray-400';
    }
  };

  const getStatusIcon = (status: SecurityCheck['status']) => {
    switch (status) {
      case 'secure':
        return <CheckCircle2 className="w-6 h-6 text-green-500" />;
      case 'warning':
        return <AlertTriangle className="w-6 h-6 text-yellow-500" />;
      case 'danger':
        return <XCircle className="w-6 h-6 text-red-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-8">
      <div className="bg-blue-50 p-6 rounded-lg">
        <div className="flex items-start">
          <Shield className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
          <div className="ml-3">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">
              セキュリティチェック
            </h3>
            <p className="text-lg text-blue-800">
              各項目をチェックして、アカウントのセキュリティ状態を確認しましょう。
              問題が見つかった場合は、推奨される対策を実施してください。
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {securityChecks.map((check) => (
          <div
            key={check.id}
            className={`bg-white p-6 rounded-lg border-2 ${
              check.status === 'secure'
                ? 'border-green-100'
                : check.status === 'warning'
                ? 'border-yellow-100'
                : check.status === 'danger'
                ? 'border-red-100'
                : 'border-gray-100'
            }`}
          >
            <div className="flex items-start">
              <div className="p-2 bg-gray-50 rounded-lg">
                {check.icon}
              </div>
              <div className="ml-4 flex-1">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800">
                      {check.title}
                    </h4>
                    <p className="text-lg text-gray-600 mt-1">
                      {check.description}
                    </p>
                  </div>
                  {check.status ? (
                    getStatusIcon(check.status)
                  ) : (
                    <button
                      onClick={() => handleSecurityCheck(check.id)}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                    >
                      チェック実行
                    </button>
                  )}
                </div>

                {check.status && (
                  <div className="mt-4">
                    <div className={`text-lg font-medium ${getStatusColor(check.status)} mb-3`}>
                      {check.status === 'secure'
                        ? '安全な状態です'
                        : check.status === 'warning'
                        ? '改善の余地があります'
                        : '対策が必要です'}
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="text-lg font-medium text-gray-800 mb-3">
                        推奨される対策
                      </h5>
                      <ul className="space-y-2">
                        {check.recommendations.map((rec, index) => (
                          <li key={index} className="flex items-center text-gray-700">
                            <Shield className="w-5 h-5 text-blue-500 mr-2" />
                            <span className="text-lg">{rec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-green-50 p-6 rounded-lg">
        <h4 className="text-xl font-semibold text-gray-800 mb-4">
          セキュリティ対策のポイント
        </h4>
        <ul className="list-disc list-inside space-y-3 text-lg text-gray-600">
          <li>定期的にセキュリティチェックを実施する</li>
          <li>警告や危険な状態は早めに対処する</li>
          <li>推奨される対策は必ず実施する</li>
          <li>不明な点があれば、サポートに問い合わせる</li>
        </ul>
      </div>
    </div>
  );
}

export default AccountSecurity;