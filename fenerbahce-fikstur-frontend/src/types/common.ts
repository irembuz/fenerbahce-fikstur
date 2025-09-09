// API Response tipleri
export interface ApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
}

// Filtreleme tipleri
export interface MatchFilters {
  status?: 'upcoming' | 'live' | 'finished';
  competition?: string;
  team?: string;
  season?: string;
  startDate?: string;
  endDate?: string;
}

// Arama tipleri
export interface SearchParams {
  query: string;
  type: 'team' | 'competition' | 'stadium';
}

// Sayfalama tipleri
export interface PaginationParams {
  page: number;
  limit: number;
  total: number;
}

// Loading ve Error durumları
export interface LoadingState {
  isLoading: boolean;
  error: string | null;
}
