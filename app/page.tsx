'use client';

import { useEffect, useState } from 'react';

export default function BharatBulletin() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch('/api/news?category=latest&limit=6')
      .then(res => res.json())
      .then(data => {
        if (data.success) setNews(data.items);
      });
  }, []);

  return (
    <div className="min-h-screen bg-zinc-50 font-sans">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-orange-500 rounded-xl flex items-center justify-center">
              <span className="text-white font-black text-2xl">BB</span>
            </div>
            <h1 className="text-2xl font-black">Bharat Bulletin</h1>
          </div>

          <div className="flex gap-3">
            <a 
              href="https://www.facebook.com/share/1SdiZiAL4J/?mibextid=wwXIfr" 
              target="_blank"
              className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-semibold hover:bg-blue-700"
            >
              📘 Facebook
            </a>
            <a 
              href="#mobile-app" 
              className="px-4 py-2 bg-orange-500 text-white rounded-full text-sm font-semibold hover:bg-orange-600"
            >
              📱 App
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-600 to-orange-500 text-white py-16 text-center">
        <h2 className="text-5xl font-black mb-4">Bharat Bulletin</h2>
        <p className="text-xl opacity-90">Real-time Hindi News • Updated every 30 seconds</p>
      </div>

      {/* News Section with Real API Data */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h3 className="text-3xl font-bold mb-8">Latest News</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {news.length > 0 ? news.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden border shadow-sm">
              <img src={item.image} alt="" className="w-full h-48 object-cover" />
              <div className="p-5">
                <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                <p className="text-zinc-600 text-sm line-clamp-3">{item.description}</p>
              </div>
            </div>
          )) : (
            <p className="col-span-3 text-center py-10 text-zinc-500">Loading news...</p>
          )}
        </div>
      </div>

      {/* Mobile App Section */}
      <section id="mobile-app" className="bg-gradient-to-r from-red-600 to-orange-500 py-16 text-white text-center">
        <h2 className="text-4xl font-black mb-4">Download the Bharat Bulletin App</h2>
        <p className="mb-8 text-lg opacity-90">Real-time updates • Offline mode • Push notifications</p>
        <div className="flex justify-center mb-8">
          <img 
            src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://expo.dev/@your-username/bharat-bulletin" 
            alt="QR Code" 
            className="w-48 h-48"
          />
        </div>
        <a 
          href="https://expo.dev/@your-username/bharat-bulletin" 
          target="_blank"
          className="bg-white text-red-600 px-8 py-3 rounded-2xl font-bold text-lg hover:bg-gray-100"
        >
          📱 Download App
        </a>
      </section>

      <footer className="bg-zinc-900 text-white py-8 text-center text-sm">
        © 2026 Bharat Bulletin • Connected to Mobile App
      </footer>
    </div>
  );
}
