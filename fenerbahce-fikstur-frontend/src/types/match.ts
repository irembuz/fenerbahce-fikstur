export interface Match {
  id: number;
  date: string; // "2024-01-15" formatında
  time: string; // "20:00" formatında
  homeTeam: string;
  awayTeam: string;
  homeScore?: number;
  awayScore?: number;
  stadium: string;
  competition: string; // "Süper Lig", "UEFA Avrupa Ligi", "Türkiye Kupası"
  status: 'upcoming' | 'live' | 'finished';
  season: string; // "2023-2024"
  round?: string; // "1. Hafta", "Çeyrek Final", vs.
  referee?: string;
  attendance?: number;
  weather?: string;
  notes?: string;
}

export interface Team {
  id: number;
  name: string;
  shortName: string;
  logo?: string;
  city: string;
  founded: number;
}

export interface Competition {
  id: number;
  name: string;
  shortName: string;
  type: 'league' | 'cup' | 'european';
  season: string;
  country: string;
}

export interface Stadium {
  id: number;
  name: string;
  city: string;
  capacity: number;
  surface: 'grass' | 'artificial';
}
