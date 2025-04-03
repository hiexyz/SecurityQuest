import React, { useState } from 'react';
import { Eye, EyeOff, Lock, UserCog, Share2, Settings } from 'lucide-react';

interface PrivacySetting {
  id: string;
  title: string;
  description: string;
  options: {
    value: string;
    label: string;
    description: string;
  }[];
  currentValue: string;
}

function AccountPrivacy() {
  const [privacySettings, setPrivacySettings] = useState<PrivacySetting[]>([
    {
      id: 'profile',
      title: 'プロフィールの公開範囲',
      description: 'あなたのプロフィール情報を誰が見ることができるかを設定します。',
      options: [
        {
          value: 'public',
          label: '全員に公開',
          description: 'インターネット上の誰でもあなたのプロフィールを見ることができます。'
        },
        {
          value: 'friends',
          label: '友達のみ',
          description: '承認された友達のみがプロフィールを見ることができます。'
        },
        {
          value: 'private',
          label: '非公開',
          description: 'プロフィールは自分以外には表示されません。'
        }
      ],
      currentValue: 'friends'
    },
    {
      id: 'activity',
      title: 'アクティビティの表示',
      description: 'あなたの活動履歴の表示設定を管理します。',
      options: [
        {
          value: 'all',
          label: 'すべて表示',
          description: 'すべての活動が表示されます。'
        },
        {
          value: 'selected',
          label: '選択した活動のみ',
          description: '選択した活動のみが表示されます。'
        },
        {
          value: 'none',
          label: '非表示',
          description: '活動履歴を表示しません。'
        }
      ],
      currentValue: 'selected'
    },
    {
      id: 'search',
      title: '検索での表示',
      description: '検索結果にあなたのアカウントを表示するかどうかを設定します。',
      options: [
        {
          value: 'visible',
          label: '検索可能',
          description: '誰でもあなたのアカウントを検索できます。'
        },
        {
          value: 'limited',
          label: '制限付き',
          description: '友達の友達までが検索できます。'
        },
        {
          value: 'hidden',
          label: '検索不可',
          description: '検索結果に表示されません。'
        }
      ],
      currentValue: 'limited'
    }
  ]);

  const handleSettingChange = (settingId: string, value: string) => {
    setPrivacySettings(settings =>
      settings.map(setting =>
        setting.id === settingId
          ? { ...setting, currentValue: value }
          : setting
      )
    );
  };

  return (
    <div className="space-y-8">
      <div className="bg-blue-50 p-6 rounded-lg">
        <div className="flex items-start">
          <Eye className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
          <div className="ml-3">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">
              プライバシー設定の管理
            </h3>
            <p className="text-lg text-blue-800">
              プライバシー設定を適切に管理することで、個人情報の公開範囲を
              コントロールし、オンラインでの安全性を高めることができます。
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {privacySettings.map((setting) => (
          <div key={setting.id} className="bg-white p-6 rounded-lg border-2 border-gray-100">
            <div className="flex items-start mb-4">
              {setting.id === 'profile' ? (
                <UserCog className="w-6 h-6 text-purple-500" />
              ) : setting.id === 'activity' ? (
                <Share2 className="w-6 h-6 text-blue-500" />
              ) : (
                <Settings className="w-6 h-6 text-green-500" />
              )}
              <div className="ml-3">
                <h4 className="text-xl font-semibold text-gray-800">{setting.title}</h4>
                <p className="text-lg text-gray-600">{setting.description}</p>
              </div>
            </div>

            <div className="space-y-4">
              {setting.options.map((option) => (
                <label
                  key={option.value}
                  className={`block p-4 rounded-lg border-2 transition-colors duration-200 cursor-pointer ${
                    setting.currentValue === option.value
                      ? 'border-blue-400 bg-blue-50'
                      : 'border-gray-100 hover:border-gray-200'
                  }`}
                >
                  <div className="flex items-center">
                    <input
                      type="radio"
                      name={setting.id}
                      value={option.value}
                      checked={setting.currentValue === option.value}
                      onChange={(e) => handleSettingChange(setting.id, e.target.value)}
                      className="w-5 h-5 text-blue-600"
                    />
                    <div className="ml-3">
                      <span className="text-lg font-medium text-gray-800">
                        {option.label}
                      </span>
                      <p className="text-gray-600 mt-1">
                        {option.description}
                      </p>
                    </div>
                  </div>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg">
        <h4 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
          <Lock className="w-6 h-6 mr-2" />
          プライバシー保護のヒント
        </h4>
        <ul className="list-disc list-inside space-y-3 text-lg text-gray-600">
          <li>定期的にプライバシー設定を見直す</li>
          <li>不要な個人情報は公開しない</li>
          <li>知らない人からのフォローやメッセージには注意</li>
          <li>位置情報の共有は必要最小限に</li>
          <li>アプリの権限設定も確認する</li>
        </ul>
      </div>
    </div>
  );
}

export default AccountPrivacy;