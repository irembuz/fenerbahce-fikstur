import React, { useEffect, useState } from 'react';
import type { Match } from '../types/match';
import { MatchService } from '../services/matchService';
import MatchCard from '../components/match/MatchCard';

const HomePage: React.FC = () => {
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<'all' | 'upcoming' | 'finished' | 'live'>('all');

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        setError(null);
        let data: Match[] = [];
        if (filter === 'all') data = await MatchService.getAllMatches();
        if (filter === 'upcoming') data = await MatchService.getUpcomingMatches();
        if (filter === 'finished') data = await MatchService.getFinishedMatches();
        if (filter === 'live') data = await MatchService.getLiveMatches();
        setMatches(data);
      } catch (e) {
        setError((e as Error).message ?? 'Bilinmeyen hata');
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [filter]);

  return (
    <div className="w-full px-4 md:px-6 py-4">
      <div className="flex flex-wrap gap-2 justify-center mb-6">
        {(['all', 'upcoming', 'finished', 'live'] as const).map((key) => (
          <button
            key={key}
            onClick={() => setFilter(key)}
            className={`px-4 py-2 rounded-full border transition ${filter === key
              ? 'bg-sky-600 text-white border-sky-600'
              : 'bg-white text-sky-700 border-sky-600 hover:bg-sky-50'
              }`}
          >
            {key === 'all' && 'Tümü'}
            {key === 'upcoming' && 'Gelecek'}
            {key === 'finished' && 'Bitmiş'}
            {key === 'live' && 'Canlı'}
          </button>
        ))}
      </div>

      {loading && (
        <div className="text-center text-gray-500">Yükleniyor…</div>
      )}

      {error && (
        <div className="text-center text-red-600">Hata: {error}</div>
      )}

      {!loading && !error && matches.length === 0 && (
        <div className="text-center text-gray-500">Maç bulunamadı.</div>
      )}

      <div className="grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-2">
        {matches.map((m) => (
          <MatchCard key={m.id} match={m} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
