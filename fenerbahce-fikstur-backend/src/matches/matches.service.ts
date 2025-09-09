import { Injectable } from '@nestjs/common';
import { Match } from '../interfaces/match.interface';
import { readFileSync } from 'fs';
import { join } from 'path';


@Injectable()
export class MatchesService {
    // Encapsulation (kapsülleme) prensibi
    // matchesData'yı private olarak tanımladık ve sadece MatchesService içinde kullanılabilir hale getirdik
    // Bu sayede matchesData'nın değerini dışarıdan erişime kapatıp sadece MatchesService içinde kullanılabilir hale getirdik
    // as Match[]: JSON verisini Match tipine çevirir
    private matches: Match[] = JSON.parse(
        readFileSync(join(process.cwd(), 'src/data/matches.json'), 'utf8')
    ) as Match[];

    // Tüm maçları getir
    findAll(): Match[] {
        return this.matches;
    }

    // ID'ye göre maç getir
    findOne(id: number): Match | undefined {
        return this.matches.find(match => match.id === id);
    }

    // Gelecek maçları getir
    findUpcoming(): Match[] {
        return this.matches.filter(match => match.status === 'upcoming');
    }

    // Bitmiş maçları getir
    findFinished(): Match[] {
        return this.matches.filter(match => match.status === 'finished');
    }

    // Canlı maçları getir
    findLive(): Match[] {
        return this.matches.filter(match => match.status === 'live');
    }

    // Yarışmaya göre maçları getir
    findByCompetition(competition: string): Match[] {
        return this.matches.filter(match =>
            match.competition.toLowerCase() === competition.toLowerCase()
        );
    }

    // Sezona göre maçları getir
    findBySeason(season: string): Match[] {
        return this.matches.filter(match => match.season === season);
    }

    // Takıma göre maçları getir
    findByTeam(teamName: string): Match[] {
        return this.matches.filter(match =>
            match.homeTeam.toLowerCase().includes(teamName.toLowerCase()) ||
            match.awayTeam.toLowerCase().includes(teamName.toLowerCase())
        );
    }

    // Tarihe göre maçları getir
    findByDate(date: string): Match[] {
        return this.matches.filter(match => match.date === date);
    }

    // Tarih aralığına göre maçları getir
    findByDateRange(startDate: string, endDate: string): Match[] {
        return this.matches.filter(match =>
            match.date >= startDate && match.date <= endDate
        );
    }
}
