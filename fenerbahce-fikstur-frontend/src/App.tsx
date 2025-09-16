import { useState } from 'react';
import Header from './components/common/Header';
import HomePage from './pages/HomePage';

function App() {
  const [filter, setFilter] = useState<'all' | 'upcoming' | 'finished' | 'live'>('all');
  return (
    <div className="min-h-screen bg-slate-50">
      <Header filter={filter} onFilterChange={setFilter} />
      <main className="pt-2">
        <HomePage filter={filter} />
      </main>
    </div>
  );
}

export default App;
