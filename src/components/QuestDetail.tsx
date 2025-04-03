import React, { useState } from 'react';
import { ArrowLeft, CheckCircle, Circle } from 'lucide-react';
import PasswordBasics from './quest-steps/PasswordBasics';
import PasswordStrengthChecker from './quest-steps/PasswordStrengthChecker';
import PasswordManager from './quest-steps/PasswordManager';
import PasswordReview from './quest-steps/PasswordReview';
import AccountBasics from './quest-steps/AccountBasics';
import AccountPrivacy from './quest-steps/AccountPrivacy';
import AccountSecurity from './quest-steps/AccountSecurity';
import PrivacyBasics from './quest-steps/PrivacyBasics';
import BrowserPrivacy from './quest-steps/BrowserPrivacy';
import SocialMediaPrivacy from './quest-steps/SocialMediaPrivacy';
import DataProtection from './quest-steps/DataProtection';
import ScamTypes from './quest-steps/ScamTypes';
import ScamWarnings from './quest-steps/ScamWarnings';
import SafeTransactions from './quest-steps/SafeTransactions';
import ScamResponse from './quest-steps/ScamResponse';

interface QuestStep {
  id: string;
  title: string;
  description: string;
  isCompleted: boolean;
}

interface QuestDetailProps {
  id: string;
  title: string;
  description: string;
  steps: QuestStep[];
  onBack: () => void;
  onCompleteStep: (stepId: string) => void;
}

function QuestDetail({ id, title, description, steps, onBack, onCompleteStep }: QuestDetailProps) {
  const [activeStep, setActiveStep] = useState<string | null>(null);

  const handleStepClick = (stepId: string) => {
    setActiveStep(activeStep === stepId ? null : stepId);
  };

  const handleCompleteStep = (stepId: string) => {
    onCompleteStep(stepId);
  };

  const renderStepContent = (stepId: string) => {
    if (id === 'password') {
      switch (stepId) {
        case 'step1':
          return <PasswordBasics />;
        case 'step2':
          return <PasswordStrengthChecker />;
        case 'step3':
          return <PasswordManager />;
        case 'step4':
          return <PasswordReview />;
        default:
          return null;
      }
    } else if (id === 'account') {
      switch (stepId) {
        case 'step1':
          return <AccountBasics />;
        case 'step2':
          return <AccountPrivacy />;
        case 'step3':
          return <AccountSecurity />;
        default:
          return null;
      }
    } else if (id === 'privacy') {
      switch (stepId) {
        case 'step1':
          return <PrivacyBasics />;
        case 'step2':
          return <BrowserPrivacy />;
        case 'step3':
          return <SocialMediaPrivacy />;
        case 'step4':
          return <DataProtection />;
        default:
          return null;
      }
    } else if (id === 'scam') {
      switch (stepId) {
        case 'step1':
          return <ScamTypes />;
        case 'step2':
          return <ScamWarnings />;
        case 'step3':
          return <SafeTransactions />;
        case 'step4':
          return <ScamResponse />;
        default:
          return null;
      }
    }
    return null;
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <button
        onClick={onBack}
        className="flex items-center text-gray-600 hover:text-gray-800 mb-6"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        <span className="text-lg">戻る</span>
      </button>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>
      <p className="text-lg text-gray-600 mb-8">{description}</p>

      <div className="space-y-6">
        {steps.map((step, index) => (
          <div key={step.id}>
            <div
              className="border-2 border-gray-100 rounded-lg p-6 hover:border-blue-100 transition-colors duration-200"
            >
              <div className="flex items-start">
                <button
                  onClick={() => handleCompleteStep(step.id)}
                  className="mt-1 focus:outline-none"
                >
                  {step.isCompleted ? (
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  ) : (
                    <Circle className="w-6 h-6 text-gray-300" />
                  )}
                </button>
                <div className="ml-4 flex-1">
                  <button
                    onClick={() => handleStepClick(step.id)}
                    className="text-left w-full"
                  >
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      ステップ {index + 1}: {step.title}
                    </h3>
                    <p className="text-lg text-gray-600">{step.description}</p>
                  </button>
                </div>
              </div>
            </div>
            {activeStep === step.id && (
              <div className="mt-4 ml-12 p-6 bg-gray-50 rounded-lg">
                {renderStepContent(step.id)}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 p-6 bg-blue-50 rounded-lg">
        <h4 className="text-xl font-semibold text-gray-800 mb-4">
          このクエストを完了すると...
        </h4>
        <ul className="list-disc list-inside space-y-2 text-lg text-gray-600">
          <li>安全なアカウント設定方法を理解できます</li>
          <li>プライバシー保護の基本が身につきます</li>
          <li>セキュリティバッジを獲得できます</li>
        </ul>
      </div>
    </div>
  );
}

export default QuestDetail;