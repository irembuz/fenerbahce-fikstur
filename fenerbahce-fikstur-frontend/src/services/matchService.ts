import { apiCall } from './api';
import type { Match } from '../types/match';
import type { MatchFilters } from '../types/common';

export class MatchService {
  // Tüm maçları getir
  // const matches = await MatchService.getAllMatches();
  static async getAllMatches(): Promise<Match[]> {
    return apiCall<Match[]>('/matches');
  }
  
  /*
   * STATIC vs INSTANCE METODLARI AÇIKLAMASI:
   * 
   * STATIC METODLAR (Şu anki kullandığımız):
   * - new MatchService() ile instance oluşturmaya gerek yok
   * - MatchService.getAllMatches() şeklinde direkt çağırılır
   * - Tüm uygulamada aynı metod, bellek tasarrufu
   * - State tutmayan utility fonksiyonları için ideal
   * 
   * ÖRNEK KULLANIM:
   * const matches = await MatchService.getAllMatches();
   * 
   * INSTANCE METODLAR (Alternatif yöntem):
   * - new MatchService() ile instance oluşturmak gerekir
   * - matchService.getAllMatches() şeklinde çağırılır
   * - Her instance farklı olabilir, daha fazla bellek kullanır
   * - State tutan sınıflar için uygun
   * 
   * ÖRNEK KULLANIM:
   * const matchService = new MatchService();
   * const matches = await matchService.getAllMatches();
   * 
   * NEDEN STATIC KULLANDIK:
   * - MatchService state tutmuyor, sadece API çağrıları yapıyor
   * - Tüm uygulamada aynı API'yi çağırmak istiyoruz
   * - Daha temiz ve kolay kullanım
   * - Bellek tasarrufu sağlıyor
   */

  // ID'ye göre maç getir
  static async getMatchById(id: number): Promise<Match> {
    return apiCall<Match>(`/matches/${id}`);
  }

  // Gelecek maçları getir
  static async getUpcomingMatches(): Promise<Match[]> {
    return apiCall<Match[]>('/matches/upcoming/list');
  }

  // Bitmiş maçları getir
  static async getFinishedMatches(): Promise<Match[]> {
    return apiCall<Match[]>('/matches/finished/list');
  }

  // Canlı maçları getir
  static async getLiveMatches(): Promise<Match[]> {
    return apiCall<Match[]>('/matches/live/list');
  }

  // Yarışmaya göre maçları getir
  static async getMatchesByCompetition(competition: string): Promise<Match[]> {
    return apiCall<Match[]>(`/matches/competition/${competition}`);
  }

  // Sezona göre maçları getir
  static async getMatchesBySeason(season: string): Promise<Match[]> {
    return apiCall<Match[]>(`/matches/season/${season}`);
  }

  // Takıma göre maçları getir
  static async getMatchesByTeam(teamName: string): Promise<Match[]> {
    return apiCall<Match[]>(`/matches/team/${teamName}`);
  }

  // Tarihe göre maçları getir
  static async getMatchesByDate(date: string): Promise<Match[]> {
    return apiCall<Match[]>(`/matches/date/${date}`);
  }

  // Tarih aralığına göre maçları getir
  static async getMatchesByDateRange(
    startDate: string,
    endDate: string
  ): Promise<Match[]> {
    return apiCall<Match[]>(
      `/matches/date-range?start=${startDate}&end=${endDate}`
    );
  }

  // Filtrelenmiş maçları getir
  static async getFilteredMatches(filters: MatchFilters): Promise<Match[]> {
    let endpoint = '/matches';
    const params = new URLSearchParams();

    if (filters.status) {
      endpoint = `/matches/${filters.status}/list`;
    }
    if (filters.competition) {
      endpoint = `/matches/competition/${filters.competition}`;
    }
    if (filters.team) {
      endpoint = `/matches/team/${filters.team}`;
    }
    if (filters.season) {
      endpoint = `/matches/season/${filters.season}`;
    }
    if (filters.startDate && filters.endDate) {
      endpoint = `/matches/date-range`;
      params.append('start', filters.startDate);
      params.append('end', filters.endDate);
    }

    const queryString = params.toString();
    const finalEndpoint = queryString ? `${endpoint}?${queryString}` : endpoint;

    return apiCall<Match[]>(finalEndpoint);
  }
}

/*
 * MATCHSERVICE GENEL AÇIKLAMASI:
 * 
 * Bu sınıf, backend API'leri ile frontend arasında köprü görevi görür.
 * Tüm maç verilerini yönetmek için kullanılır.
 * 
 * ÖZELLİKLER:
 * - Static metodlar kullanır (instance oluşturmaya gerek yok)
 * - TypeScript tip güvenliği sağlar
 * - Hata yönetimi yapar
 * - Backend endpoint'lerini frontend'e bağlar
 * 
 * KULLANIM ÖRNEKLERİ:
 * 
 * // Tüm maçları getir
 * const allMatches = await MatchService.getAllMatches();
 * 
 * // Belirli maçı getir
 * const match = await MatchService.getMatchById(1);
 * 
 * // Gelecek maçları getir
 * const upcomingMatches = await MatchService.getUpcomingMatches();
 * 
 * // Takıma göre maçları getir
 * const fenerMatches = await MatchService.getMatchesByTeam('fenerbahçe');
 * 
 * // Filtrelenmiş maçları getir
 * const filteredMatches = await MatchService.getFilteredMatches({
 *   status: 'upcoming',
 *   competition: 'süper-lig'
 * });
 * 
 * BACKEND ENDPOINT'LERİ:
 * - GET /matches - Tüm maçlar
 * - GET /matches/:id - Belirli maç
 * - GET /matches/upcoming/list - Gelecek maçlar
 * - GET /matches/finished/list - Bitmiş maçlar
 * - GET /matches/team/:teamName - Takıma göre
 * - GET /matches/competition/:competition - Yarışmaya göre
 * - GET /matches/date/:date - Tarihe göre
 * - GET /matches/date-range?start=...&end=... - Tarih aralığına göre
 */


