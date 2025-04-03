import React, { useState, useEffect } from 'react';
import { Shield, Award, Lock, AlertTriangle, UserCog, Eye, HelpCircle, Home } from 'lucide-react';
import QuestCard from './components/QuestCard';
import QuestDetail from './components/QuestDetail';
import Header from './components/Header';
import Footer from './components/Footer';
import { supabase } from './lib/supabase';

interface UserProgress {
  quest_id: string;
  step_id: string;
}

function App() {
  const [selectedQuest, setSelectedQuest] = useState<string | null>(null);
  const [userProgress, setUserProgress] = useState<UserProgress[]>([]);

  useEffect(() => {
    fetchUserProgress();
  }, []);

  const fetchUserProgress = async () => {
    const { data: session } = await supabase.auth.getSession();
    if (session?.session?.user) {
      const { data } = await supabase
        .from('user_progress')
        .select('quest_id, step_id')
        .eq('user_id', session.session.user.id);
      
      if (data) {
        setUserProgress(data);
      }
    }
  };

  const getQuestProgress = (questId: string): number => {
    return userProgress.filter(p => p.quest_id === questId).length;
  };

  const quests = [
    {
      id: 'password',
      title: 'パスワード安全性',
      description: '安全なパスワードの作り方と管理方法を学びましょう',
      icon: <Lock className="w-8 h-8" />,
      progress: getQuestProgress('password'),
      totalSteps: 4,
      steps: [
        {
          id: 'step1',
          title: '安全なパスワードとは',
          description: 'パスワードの長さ、文字の種類、避けるべき単語など、安全なパスワードの基本を学びます。',
          isCompleted: userProgress.some(p => p.quest_id === 'password' && p.step_id === 'step1'),
        },
        {
          id: 'step2',
          title: 'パスワード強度チェック',
          description: '現在使用しているパスワードの強度をチェックし、改善点を確認します。',
          isCompleted: userProgress.some(p => p.quest_id === 'password' && p.step_id === 'step2'),
        },
        {
          id: 'step3',
          title: 'パスワード管理の方法',
          description: '複数のパスワードを安全に管理する方法について学びます。',
          isCompleted: userProgress.some(p => p.quest_id === 'password' && p.step_id === 'step3'),
        },
        {
          id: 'step4',
          title: '定期的な見直し',
          description: 'パスワードの定期的な変更と見直しの重要性について学びます。',
          isCompleted: userProgress.some(p => p.quest_id === 'password' && p.step_id === 'step4'),
        },
      ],
    },
    {
      id: 'account',
      title: 'アカウント設定',
      description: 'アカウントを安全に保つための設定方法を学びましょう',
      icon: <UserCog className="w-8 h-8" />,
      progress: getQuestProgress('account'),
      totalSteps: 3,
      steps: [
        {
          id: 'step1',
          title: 'アカウント設定の基本',
          description: 'アカウントの基本的なセキュリティ設定について学びます。',
          isCompleted: userProgress.some(p => p.quest_id === 'account' && p.step_id === 'step1'),
        },
        {
          id: 'step2',
          title: 'プライバシー設定',
          description: '個人情報の公開範囲と共有設定について学びます。',
          isCompleted: userProgress.some(p => p.quest_id === 'account' && p.step_id === 'step2'),
        },
        {
          id: 'step3',
          title: 'セキュリティチェック',
          description: 'アカウントのセキュリティ状態をチェックし、改善点を見つけます。',
          isCompleted: userProgress.some(p => p.quest_id === 'account' && p.step_id === 'step3'),
        },
      ],
    },
    {
      id: 'privacy',
      title: 'プライバシー保護',
      description: '個人情報を守るための設定方法を学びましょう',
      icon: <Eye className="w-8 h-8" />,
      progress: getQuestProgress('privacy'),
      totalSteps: 4,
      steps: [
        {
          id: 'step1',
          title: 'プライバシーの基本',
          description: 'オンラインでのプライバシー保護の重要性と基本的な考え方を学びます。',
          isCompleted: userProgress.some(p => p.quest_id === 'privacy' && p.step_id === 'step1'),
        },
        {
          id: 'step2',
          title: 'ブラウザ設定',
          description: 'ブラウザのプライバシー設定とトラッキング防止について学びます。',
          isCompleted: userProgress.some(p => p.quest_id === 'privacy' && p.step_id === 'step2'),
        },
        {
          id: 'step3',
          title: 'SNSプライバシー',
          description: 'SNSでの個人情報保護と適切な情報共有について学びます。',
          isCompleted: userProgress.some(p => p.quest_id === 'privacy' && p.step_id === 'step3'),
        },
        {
          id: 'step4',
          title: 'データ保護',
          description: '個人データの保護と安全な管理方法について学びます。',
          isCompleted: userProgress.some(p => p.quest_id === 'privacy' && p.step_id === 'step4'),
        },
      ],
    },
    {
      id: 'scam',
      title: '詐欺対策',
      description: 'オンライン詐欺から身を守る方法を学びましょう',
      icon: <AlertTriangle className="w-8 h-8" />,
      progress: getQuestProgress('scam'),
      totalSteps: 4,
      steps: [
        {
          id: 'step1',
          title: '詐欺の種類',
          description: '一般的なオンライン詐欺の手口と特徴について学びます。',
          isCompleted: userProgress.some(p => p.quest_id === 'scam' && p.step_id === 'step1'),
        },
        {
          id: 'step2',
          title: '警告サイン',
          description: '詐欺を見分けるための警告サインと確認方法を学びます。',
          isCompleted: userProgress.some(p => p.quest_id === 'scam' && p.step_id === 'step2'),
        },
        {
          id: 'step3',
          title: '安全な取引',
          description: 'オンラインでの安全な取引方法と注意点について学びます。',
          isCompleted: userProgress.some(p => p.quest_id === 'scam' && p.step_id === 'step3'),
        },
        {
          id: 'step4',
          title: '対処方法',
          description: '詐欺被害に遭った場合の対処方法と報告手順を学びます。',
          isCompleted: userProgress.some(p => p.quest_id === 'scam' && p.step_id === 'step4'),
        },
      ],
    },
  ];

  const handleQuestStart = (questId: string) => {
    setSelectedQuest(questId);
  };

  const handleBack = () => {
    setSelectedQuest(null);
  };

  const handleCompleteStep = async (questId: string, stepId: string) => {
    const { data: session } = await supabase.auth.getSession();
    if (!session?.session?.user) {
      // TODO: Handle unauthenticated user
      return;
    }

    const { data, error } = await supabase
      .from('user_progress')
      .upsert({
        user_id: session.session.user.id,
        quest_id: questId,
        step_id: stepId,
      })
      .select();

    if (!error && data) {
      await fetchUserProgress();
    }
  };

  const selectedQuestData = quests.find(quest => quest.id === selectedQuest);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {selectedQuest ? (
          <QuestDetail
            {...selectedQuestData!}
            onBack={handleBack}
            onCompleteStep={(stepId) => handleCompleteStep(selectedQuest, stepId)}
          />
        ) : (
          <>
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-4">ようこそ、セキュリティクエストへ！</h1>
              <p className="text-xl text-gray-600">
                楽しみながらインターネットの安全な使い方を学びましょう。
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {quests.map((quest) => (
                <QuestCard
                  key={quest.id}
                  {...quest}
                  onStart={() => handleQuestStart(quest.id)}
                />
              ))}
            </div>

            <div className="mt-12 bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <Award className="w-8 h-8 text-yellow-500 mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">あなたの進捗</h2>
              </div>
              <div className="bg-gray-100 rounded-lg p-4">
                <p className="text-lg text-gray-700">現在のレベル: 1</p>
                <p className="text-lg text-gray-700">獲得バッジ: {userProgress.length}個</p>
                <div className="mt-3">
                  <div className="bg-gray-200 rounded-full h-4">
                    <div 
                      className="bg-blue-500 rounded-full h-4 transition-all duration-300"
                      style={{ 
                        width: `${(userProgress.length / (quests.reduce((acc, q) => acc + q.totalSteps, 0))) * 100}%` 
                      }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    総進捗: {userProgress.length} / {quests.reduce((acc, q) => acc + q.totalSteps, 0)} ステップ完了
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;