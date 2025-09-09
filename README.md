# Fenerbahçe Fikstür Projesi

Fenerbahçe'nin maç fikstürünü gösteren full-stack web uygulaması.

## 🏗️ Proje Yapısı

```
fenerbahçe-fikstür/
├── fenerbahce-fikstur-backend/    # NestJS API
└── fenerbahce-fikstur-frontend/   # React Frontend
```

## 🚀 Teknolojiler

### Backend (NestJS)
- **Framework:** NestJS
- **Language:** TypeScript
- **Data:** JSON (statik veri)
- **Port:** 3000

### Frontend (React)
- **Framework:** React + Vite
- **Language:** TypeScript
- **Styling:** CSS
- **Port:** 5173

## 📋 Özellikler

### Backend API
- ✅ Tüm maçları listele
- ✅ Belirli maçı getir
- ✅ Gelecek maçları filtrele
- ✅ Bitmiş maçları filtrele
- ✅ Takıma göre filtrele
- ✅ Yarışmaya göre filtrele
- ✅ Tarihe göre filtrele

### Frontend
- ✅ Modern ve responsive tasarım
- ✅ Maç listesi görüntüleme
- ✅ Filtreleme seçenekleri
- ✅ Arama özelliği
- ✅ Loading ve error state'leri

## 🛠️ Kurulum

### Backend Kurulumu
```bash
cd fenerbahce-fikstur-backend
npm install
npm run start:dev
```

### Frontend Kurulumu
```bash
cd fenerbahce-fikstur-frontend
npm install
npm run dev
```

## 🌐 Erişim

- **Backend API:** http://localhost:3000
- **Frontend:** http://localhost:5173

## 📚 API Endpoints

### Maçlar
- `GET /matches` - Tüm maçlar
- `GET /matches/:id` - Belirli maç
- `GET /matches/upcoming/list` - Gelecek maçlar
- `GET /matches/finished/list` - Bitmiş maçlar
- `GET /matches/team/:teamName` - Takıma göre
- `GET /matches/competition/:competition` - Yarışmaya göre
- `GET /matches/date/:date` - Tarihe göre

## 🎯 Gelecek Geliştirmeler

- [ ] Veritabanı entegrasyonu (MongoDB/PostgreSQL)
- [ ] Authentication sistemi
- [ ] Admin paneli
- [ ] Real-time güncellemeler
- [ ] Mobile app
- [ ] PWA desteği

## 👨‍💻 Geliştirici

Bu proje öğrenme amaçlı geliştirilmiştir.

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.
