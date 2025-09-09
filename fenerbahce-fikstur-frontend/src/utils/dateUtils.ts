// Tarih yardımcı fonksiyonları

// Tarihi formatla (DD/MM/YYYY)
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('tr-TR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
};

// Tarihi formatla (DD MMMM YYYY)
export const formatDateLong = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('tr-TR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
};

// Saati formatla (HH:MM)
export const formatTime = (timeString: string): string => {
  return timeString;
};

// Tarih ve saati birleştir
export const formatDateTime = (dateString: string, timeString: string): string => {
  const date = formatDate(dateString);
  const time = formatTime(timeString);
  return `${date} ${time}`;
};

// Bugünün tarihini al (YYYY-MM-DD)
export const getToday = (): string => {
  return new Date().toISOString().split('T')[0];
};

// Tarih aralığı oluştur (son 30 gün)
export const getLast30Days = (): { start: string; end: string } => {
  const end = new Date();
  const start = new Date();
  start.setDate(start.getDate() - 30);
  
  return {
    start: start.toISOString().split('T')[0],
    end: end.toISOString().split('T')[0],
  };
};

// Tarih aralığı oluştur (gelecek 30 gün)
export const getNext30Days = (): { start: string; end: string } => {
  const start = new Date();
  const end = new Date();
  end.setDate(end.getDate() + 30);
  
  return {
    start: start.toISOString().split('T')[0],
    end: end.toISOString().split('T')[0],
  };
};
