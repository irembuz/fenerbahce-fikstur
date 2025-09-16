import React, { useEffect, useState } from 'react';
import type { Match } from '../types/match';
import { MatchService } from '../services/matchService';
import MatchCard from '../components/match/MatchCard';

type Filter = 'all' | 'upcoming' | 'finished' | 'live';

type Props = {
  filter: Filter;
};

const HomePage: React.FC<Props> = ({ filter }) => {
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

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
