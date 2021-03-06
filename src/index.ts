import { Day } from './Day';

export class WDate {
  constructor(private date: Date, private holidayList: HolidayList) {
    // unify time to easy to compare
    this.date.setHours(0, 0, 0, 0);
  }

  /**
   * return whether the date is a work day or not
   * @param date
   * @returns
   */
  isWorkDay() {
    const isWeeklyHoliday = this.holidayList.weeklyHoliday.some(
      (value) => this.date.getDay() === value
    );
    if (isWeeklyHoliday) {
      return false;
    }

    return !this.holidayList.dayOffList.some(
      (value) => this.date.getTime() === value.getTime()
    );
  }

  // 稼働日で何日後か

  // 稼働日でx日かかると何日になるか
}

export class HolidayList {
  constructor(
    public dayOffList: Date[] = [],
    public weeklyHoliday: Day[] = [Day.Sat, Day.Sun]
  ) {
    this.dayOffList.forEach((date) => {
      // unify time to easy to compare
      date.setHours(0, 0, 0, 0);
    });
  }
}
