import React, { useState } from 'react';
import { AlertCircle, CheckCircle, XCircle, Shield } from 'lucide-react';

interface StrengthCriteria {
  length: boolean;
  uppercase: boolean;
  lowercase: boolean;
  numbers: boolean;
  symbols: boolean;
}

function PasswordStrengthChecker() {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const checkStrength = (pass: string): StrengthCriteria => {
    return {
      length: pass.length >= 12,
      uppercase: /[A-Z]/.test(pass),
      lowercase: /[a-z]/.test(pass),
      numbers: /[0-9]/.test(pass),
      symbols: /[!@#$%^&*(),.?":{}|<>]/.test(pass),
    };
  };

  const getStrengthScore = (criteria: StrengthCriteria): number => {
    return Object.values(criteria).filter(Boolean).length;
  };

  const getStrengthLevel = (score: number): string => {
    if (score <= 2) return '弱い';
    if (score <= 4) return '普通';
    return '強い';
  };

  const getStrengthColor = (score: number): string => {
    if (score <= 2) return 'text-red-500';
    if (score <= 4) return 'text-yellow-500';
    return 'text-green-500';
  };

  const criteria = checkStrength(password);
  const score = getStrengthScore(criteria);

  return (
    <div className="space-y-8">
      <div className="bg-blue-50 p-6 rounded-lg">
        <div className="flex items-start">
          <AlertCircle className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
          <p className="ml-3 text-lg text-blue-800">
            パスワードを入力して、その強度をチェックしてみましょう。
            実際に使用しているパスワードは入力せず、新しいパスワードを考えて試してください。
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="パスワードを入力してください"
            className="w-full px-4 py-3 text-lg border-2 border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none"
          />
          <button
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
          >
            {showPassword ? '隠す' : '表示'}
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg border-2 border-gray-100">
          <div className="flex items-center mb-4">
            <Shield className="w-6 h-6 mr-2" />
            <h3 className="text-xl font-semibold">パスワードの強度:</h3>
            <span className={`ml-2 text-xl font-bold ${getStrengthColor(score)}`}>
              {getStrengthLevel(score)}
            </span>
          </div>

          <div className="space-y-3">
            <div className="flex items-center">
              {criteria.length ? (
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
              ) : (
                <XCircle className="w-5 h-5 text-red-500 mr-2" />
              )}
              <span className="text-lg">12文字以上の長さ</span>
            </div>
            <div className="flex items-center">
              {criteria.uppercase ? (
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
              ) : (
                <XCircle className="w-5 h-5 text-red-500 mr-2" />
              )}
              <span className="text-lg">大文字を含む</span>
            </div>
            <div className="flex items-center">
              {criteria.lowercase ? (
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
              ) : (
                <XCircle className="w-5 h-5 text-red-500 mr-2" />
              )}
              <span className="text-lg">小文字を含む</span>
            </div>
            <div className="flex items-center">
              {criteria.numbers ? (
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
              ) : (
                <XCircle className="w-5 h-5 text-red-500 mr-2" />
              )}
              <span className="text-lg">数字を含む</span>
            </div>
            <div className="flex items-center">
              {criteria.symbols ? (
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
              ) : (
                <XCircle className="w-5 h-5 text-red-500 mr-2" />
              )}
              <span className="text-lg">記号を含む (!@#$%^&*等)</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg">
        <h4 className="text-xl font-semibold text-gray-800 mb-4">
          パスワード強度チェックのポイント
        </h4>
        <ul className="list-disc list-inside space-y-2 text-lg text-gray-600">
          <li>すべての条件を満たすと「強い」パスワードになります</li>
          <li>記号は「!@#$%^&*(),.?":{}|&lt;&gt;」などが使えます</li>
          <li>覚えやすく、打ちやすいパスワードを心がけましょう</li>
          <li>個人情報（生年月日など）は使用しないようにしましょう</li>
        </ul>
      </div>
    </div>
  );
}

export default PasswordStrengthChecker;