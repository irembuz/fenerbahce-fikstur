import { Controller, Get, Param, Query } from '@nestjs/common';
import { MatchesService } from './matches.service';
import { Match } from '../interfaces/match.interface';

// Bu sınıfın bir Controller olduğunu belirtir
// 'matches' = Base route (temel yol)
//Tüm endpoint'ler /matches ile başlar
@Controller('matches')
export class MatchesController {
  constructor(private readonly matchesService: MatchesService) {}

  // Tüm maçları getir
  @Get()
  findAll(): Match[] {
    return this.matchesService.findAll();
  }

  // ID'ye göre maç getir
  @Get(':id')
  findOne(@Param('id') id: string): Match | undefined {
    return this.matchesService.findOne(+id);
  }

  // Gelecek maçları getir
  @Get('upcoming/list')
  findUpcoming(): Match[] {
    return this.matchesService.findUpcoming();
  }

  // Bitmiş maçları getir
  @Get('finished/list')
  findFinished(): Match[] {
    return this.matchesService.findFinished();
  }

  // Canlı maçları getir
  @Get('live/list')
  findLive(): Match[] {
    return this.matchesService.findLive();
  }

  // Yarışmaya göre maçları getir
  @Get('competition/:competition')
  findByCompetition(@Param('competition') competition: string): Match[] {
    return this.matchesService.findByCompetition(competition);
  }

  // Sezona göre maçları getir
  @Get('season/:season')
  findBySeason(@Param('season') season: string): Match[] {
    return this.matchesService.findBySeason(season);
  }

  // Takıma göre maçları getir
  @Get('team/:teamName')
  findByTeam(@Param('teamName') teamName: string): Match[] {
    return this.matchesService.findByTeam(teamName);
  }

  // Tarihe göre maçları getir
  @Get('date/:date')
  findByDate(@Param('date') date: string): Match[] {
    return this.matchesService.findByDate(date);
  }

  // Tarih aralığına göre maçları getir
  @Get('date-range')
  findByDateRange(
    @Query('start') startDate: string,
    @Query('end') endDate: string,
  ): Match[] {
    return this.matchesService.findByDateRange(startDate, endDate);
  }
}

//
// ------------------------------
// @Param Kullan:
// - Tek bir parametre alır
// - Zorunlu parametre alır
// @Query Kullan:
// - Çoklu parametre alır
// - Optional parametre alır
// - Filtreleme, Sayfalama, Sıralama için kullanılır
// ------------------------------