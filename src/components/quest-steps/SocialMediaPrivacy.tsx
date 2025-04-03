import React, { useState } from 'react';
import { Share2, Users, Bell, Eye, Lock, Settings } from 'lucide-react';

interface PrivacyCheckItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  checklist: {
    id: string;
    text: string;
    isChecked: boolean;
  }[];
}

function SocialMediaPrivacy() {
  const [privacyItems, setPrivacyItems] = useState<PrivacyCheckItem[]>([
    {
      id: 'sharing',
      title: '投稿の公開範囲',
      description: 'SNSでの投稿の公開範囲を適切に設定する',
      icon: <Share2 className="w-6 h-6 text-blue-500" />,
      checklist: [
        {
          id: 'default-privacy',
          text: 'デフォルトの公開範囲を確認する',
          isChecked: false
        },
        {
          id: 'old-posts',
          text: '過去の投稿の公開範囲を見直す',
          isChecked: false
        },
        {
          id: 'tagged-posts',
          text: 'タグ付け投稿の承認設定を有効にする',
          isChecked: false
        },
        {
          id: 'location-sharing',
          text: '位置情報の共有設定を確認する',
          isChecked: false
        }
      ]
    },
    {
      id: 'connections',
      title: 'つながりの管理',
      description: 'フォロワーやフレンドの管理を適切に行う',
      icon: <Users className="w-6 h-6 text-green-500" />,
      checklist: [
        {
          id: 'friend-requests',
          text: 'フレンドリクエストの設定を確認する',
          isChecked: false
        },
        {
          id: 'blocked-users',
          text: 'ブロックリストを定期的に見直す',
          isChecked: false
        },
        {
          id: 'following-list',
          text: 'フォロー中のアカウントを整理する',
          isChecked: false
        },
        {
          id: 'group-privacy',
          text: '参加グループのプライバシー設定を確認する',
          isChecked: false
        }
      ]
    },
    {
      id: 'notifications',
      title: '通知設定',
      description: 'プライバシーに関連する通知の管理',
      icon: <Bell className="w-6 h-6 text-purple-500" />,
      checklist: [
        {
          id: 'login-alerts',
          text: '新規ログイン通知を有効にする',
          isChecked: false
        },
        {
          id: 'tag-notifications',
          text: 'タグ付け通知の設定を確認する',
          isChecked: false
        },
        {
          id: 'message-notifications',
          text: 'メッセージ通知の設定を見直す',
          isChecked: false
        },
        {
          id: 'privacy-changes',
          text: 'プライバシー設定変更の通知を有効にする',
          isChecked: false
        }
      ]
    }
  ]);

  const handleCheckItem = (itemId: string, checkId: string) => {
    setPrivacyItems(items =>
      items.map(item =>
        item.id === itemId
          ? {
              ...item,
              checklist: item.checklist.map(check =>
                check.id === checkId
                  ? { ...check, isChecked: !check.isChecked }
                  : check
              )
            }
          : item
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
              SNSのプライバシー設定
            </h3>
            <p className="text-lg text-blue-800">
              ソーシャルメディアでのプライバシー設定を見直し、
              個人情報を適切に管理しましょう。
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {privacyItems.map((item) => (
          <div key={item.id} className="bg-white p-6 rounded-lg border-2 border-gray-100">
            <div className="flex items-start mb-4">
              <div className="p-2 bg-gray-50 rounded-lg">
                {item.icon}
              </div>
              <div className="ml-4">
                <h4 className="text-xl font-semibold text-gray-800">{item.title}</h4>
                <p className="text-lg text-gray-600">{item.description}</p>
              </div>
            </div>

            <div className="space-y-3">
              {item.checklist.map((check) => (
                <label
                  key={check.id}
                  className={`flex items-center p-4 rounded-lg border-2 cursor-pointer transition-colors duration-200 ${
                    check.isChecked
                      ? 'border-green-200 bg-green-50'
                      : 'border-gray-100 hover:border-gray-200'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={check.isChecked}
                    onChange={() => handleCheckItem(item.id, check.id)}
                    className="w-5 h-5 text-green-600 rounded"
                  />
                  <span className="ml-3 text-lg text-gray-700">{check.text}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg">
        <h4 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
          <Lock className="w-6 h-6 mr-2" />
          SNSでのプライバシー保護のヒント
        </h4>
        <ul className="list-disc list-inside space-y-3 text-lg text-gray-600">
          <li>個人情報の公開は最小限に抑える</li>
          <li>知らない人からのメッセージやフォローには注意</li>
          <li>定期的にプライバシー設定を見直す</li>
          <li>不要なアプリ連携を解除する</li>
          <li>投稿前に公開範囲を確認する習慣をつける</li>
        </ul>
      </div>
    </div>
  );
}

export default SocialMediaPrivacy;