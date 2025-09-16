import React from 'react';
import type { Match } from '../../types/match';
import { formatDate, formatTime } from '../../utils/dateUtils';

type Props = {
  match: Match;
  onClick?: (match: Match) => void;
};

const statusMap: Record<Match['status'], { label: string; classes: string }> = {
  upcoming: { label: 'Gelecek', classes: 'bg-blue-50 text-blue-700' },
  live: { label: 'Canlı', classes: 'bg-red-50 text-red-700 animate-pulse' },
  finished: { label: 'Bitti', classes: 'bg-green-50 text-green-700' },
};

const MatchCard: React.FC<Props> = ({ match, onClick }) => {
  const status = statusMap[match.status];

  return (
    <button
      type="button"
      onClick={() => onClick?.(match)}
      className="w-full text-left rounded-xl border border-gray-200 bg-white hover:shadow-lg transition p-4 md:p-5"
    >
      <div className="flex items-center justify-between border-b border-gray-100 pb-3 mb-3">
        <div className="text-sm text-gray-500">
          {formatDate(match.date)} • {formatTime(match.time)}
        </div>
        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${status.classes}`}>
          {status.label}
        </span>
      </div>

      <div className="grid grid-cols-3 items-center gap-2">
        <div className="flex flex-col items-center">
          <span className="text-base font-semibold text-gray-900 text-center">
            {match.homeTeam}
          </span>
          {match.homeScore !== undefined && (
            <span className="text-xl font-bold text-sky-700">{match.homeScore}</span>
          )}
        </div>

        <div className="text-center text-sm text-gray-500">VS</div>

        <div className="flex flex-col items-center">
          {match.awayScore !== undefined && (
            <span className="text-xl font-bold text-sky-700">{match.awayScore}</span>
          )}
          <span className="text-base font-semibold text-gray-900 text-center">
            {match.awayTeam}
          </span>
        </div>
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-gray-500">
        <span className="font-medium text-sky-700">{match.competition}</span>
        {match.round && <span>• {match.round}</span>}
        <span>• {match.stadium}</span>
      </div>
    </button>
  );
};

export default MatchCard;
