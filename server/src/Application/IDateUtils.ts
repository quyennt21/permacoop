export interface IDateUtils {
  format(date: Date, format: string): string;
  getDaysInMonth(date: Date): number;
  isWeekend(date: Date): boolean;
  getCurrentDate(): Date;
  getCurrentDateToISOString(): string;
  getWorkedDaysDuringAPeriod(start: Date, end: Date): Date[];
  getWorkedFreeDays(year: number): Date[];
  getEasterDate(year: number): Date;
  getLeaveDuration(startDate: string, isStartsAllDay: boolean, endDate: string, isEndsAllDay: boolean): number;
}
