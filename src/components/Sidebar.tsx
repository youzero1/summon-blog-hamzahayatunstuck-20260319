'use client';

import { Home, BarChart3, Users, Settings, ChevronLeft } from 'lucide-react';
import { useState } from 'react';

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [activeLink, setActiveLink] = useState('Overview');

  const navItems = [
    { name: 'Overview', icon: Home },
    { name: 'Analytics', icon: BarChart3 },
    { name: 'Users', icon: Users },
    { name: 'Settings', icon: Settings },
  ];

  return (
    <aside className={`${collapsed ? 'w-20' : 'w-64'} bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transition-all duration-300 flex flex-col`}>
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between">
          {!collapsed && (
            <h2 className="text-xl font-bold text-gray-800 dark:text-white">Dashboard</h2>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
          >
            <ChevronLeft className={`w-5 h-5 text-gray-600 dark:text-gray-400 transition-transform ${collapsed ? 'rotate-180' : ''}`} />
          </button>
        </div>
      </div>

      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeLink === item.name;
            return (
              <li key={item.name}>
                <button
                  onClick={() => setActiveLink(item.name)}
                  className={`sidebar-link w-full ${isActive ? 'active' : ''}`}
                >
                  <Icon className="w-5 h-5" />
                  {!collapsed && <span>{item.name}</span>}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white font-medium">JD</div>
          {!collapsed && (
            <div>
              <p className="text-sm font-medium text-gray-800 dark:text-white">John Doe</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">Admin</p>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}