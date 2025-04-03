import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">セキュリティクエスト</h3>
            <p className="text-gray-300">
              楽しみながらインターネットの安全な使い方を学べるWebアプリ
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">お問い合わせ</h3>
            <p className="text-gray-300">
              ご質問やご意見がございましたら、以下のメールアドレスまでお気軽にお問い合わせください。
            </p>
            <p className="text-gray-300 mt-2">
              support@security-quest.example.com
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">著作権情報</h3>
            <p className="text-gray-300">
              © 2024 セキュリティクエスト All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;