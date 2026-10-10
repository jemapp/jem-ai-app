import React, { useState } from 'react';
import { Sparkles, Folder, Code2, MessageSquare, Settings, CheckCircle } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'generate' | 'projects' | 'code' | 'chat' | 'settings'>('generate');
  
  const [githubUser, setGithubUser] = useState('jemalmobilemn');
  const [repoPrefix, setRepoPrefix] = useState('bon-ai-app');
  const [aiKey, setAiKey] = useState('');
  const [saved, setSaved] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#0b1120] text-slate-100 font-sans">
      <header className="flex items-center justify-between px-4 py-3 border-b border-slate-800 bg-[#0f172a]">
        <div className="flex items-center space-x-2">
          <div className="bg-amber-500 p-1.5 rounded-lg text-slate-950 font-bold">
            <Sparkles className="w-5 h-5" />
          </div>
          <span className="font-bold text-lg tracking-wide">Bon AI</span>
        </div>
        <div className="flex items-center space-x-3">
          <span className="text-xs text-slate-400 bg-slate-800/80 px-2.5 py-1 rounded-full border border-slate-700">
            Ready
          </span>
        </div>
      </header>

      <main className="flex-1 max-w-2xl w-full mx-auto p-4 pb-24">
        {activeTab === 'generate' && (
          <div className="space-y-6 text-center py-6">
            <div className="inline-flex items-center gap-1.5 text-xs text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20 font-medium">
              <Sparkles className="w-3.5 h-3.5" /> AI-Powered App Generation
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight">
              Describe your app. <br />
              <span className="text-amber-500">Let AI build it.</span>
            </h1>
            <p className="text-xs text-slate-400 max-w-md mx-auto">
              Tell us what you want to create in plain English. We'll generate the code, save your project, and help you deploy it.
            </p>

            <div className="bg-[#111827] border border-slate-800 rounded-xl p-4 text-left space-y-3">
              <label className="block text-xs font-medium text-slate-300">What do you want to build?</label>
              <textarea
                rows={4}
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="e.g. A todo list app with dark mode, a landing page..."
                className="w-full bg-[#0b1120] border border-slate-700 rounded-lg p-3 text-sm focus:outline-none focus:border-amber-500 text-slate-200 resize-none"
              />
              <button
                onClick={() => setIsGenerating(true)}
                className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-2.5 rounded-lg text-sm transition-colors flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                {isGenerating ? 'Generating App Code...' : 'Generate My App'}
              </button>
            </div>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="space-y-6">
            <div className="bg-[#111827] border border-slate-800 rounded-xl p-5">
              <h3 className="font-semibold text-base text-slate-100">AI Code Generation</h3>
              <div className="mt-4">
                <label className="block text-xs font-medium text-slate-300 mb-1">API Key</label>
                <input
                  type="password"
                  placeholder="sk-..."
                  value={aiKey}
                  onChange={(e) => setAiKey(e.target.value)}
                  className="w-full bg-[#0b1120] border border-slate-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-amber-500 text-slate-200"
                />
              </div>
            </div>

            <div className="bg-[#111827] border border-slate-800 rounded-xl p-5">
              <h3 className="font-semibold text-base text-slate-100">GitHub Integration</h3>
              <div className="mt-4 space-y-3">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">GitHub Username</label>
                  <input
                    type="text"
                    value={githubUser}
                    onChange={(e) => setGithubUser(e.target.value)}
                    className="w-full bg-[#0b1120] border border-slate-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-amber-500 text-slate-200"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Repository Name</label>
                  <input
                    type="text"
                    value={repoPrefix}
                    onChange={(e) => setRepoPrefix(e.target.value)}
                    className="w-full bg-[#0b1120] border border-slate-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-amber-500 text-slate-200"
                  />
                </div>
              </div>
            </div>

            <button
              onClick={handleSaveSettings}
              className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold py-2.5 rounded-lg text-sm transition-colors flex items-center justify-center gap-2"
            >
              <CheckCircle className="w-4 h-4" />
              {saved ? 'Settings Saved!' : 'Save Settings'}
            </button>
          </div>
        )}

        {(activeTab === 'projects' || activeTab === 'code' || activeTab === 'chat') && (
          <div className="text-center py-20 text-slate-400 text-sm">
            <p>{activeTab.toUpperCase()} section is ready.</p>
          </div>
        )}
      </main>

      <nav className="fixed bottom-0 left-0 right-0 bg-[#0f172a] border-t border-slate-800 px-4 py-2 flex justify-around items-center">
        <button
          onClick={() => setActiveTab('generate')}
          className={`flex flex-col items-center space-y-1 text-xs ${activeTab === 'generate' ? 'text-amber-400 font-semibold' : 'text-slate-400'}`}
        >
          <Sparkles className="w-5 h-5" />
          <span>Generate</span>
        </button>
        <button
          onClick={() => setActiveTab('projects')}
          className={`flex flex-col items-center space-y-1 text-xs ${activeTab === 'projects' ? 'text-amber-400 font-semibold' : 'text-slate-400'}`}
        >
          <Folder className="w-5 h-5" />
          <span>Projects</span>
        </button>
        <button
          onClick={() => setActiveTab('code')}
          className={`flex flex-col items-center space-y-1 text-xs ${activeTab === 'code' ? 'text-amber-400 font-semibold' : 'text-slate-400'}`}
        >
          <Code2 className="w-5 h-5" />
          <span>Code</span>
        </button>
        <button
          onClick={() => setActiveTab('chat')}
          className={`flex flex-col items-center space-y-1 text-xs ${activeTab === 'chat' ? 'text-amber-400 font-semibold' : 'text-slate-400'}`}
        >
          <MessageSquare className="w-5 h-5" />
          <span>Chat</span>
        </button>
        <button
          onClick={() => setActiveTab('settings')}
          className={`flex flex-col items-center space-y-1 text-xs ${activeTab === 'settings' ? 'text-amber-400 font-semibold' : 'text-slate-400'}`}
        >
          <Settings className="w-5 h-5" />
          <span>Settings</span>
        </button>
      </nav>
    </div>
  );
}
