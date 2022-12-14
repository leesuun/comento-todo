export interface ICalenderProps {
  month: string;
  isHoliday: boolean;
  day: number;
  thisMonth: boolean;
}

export const Calender = {
  august: [
    [
      { month: "Aug", isHoliday: false, day: 1, thisMonth: true },
      { month: "Aug", isHoliday: false, day: 2, thisMonth: true },
      { month: "Aug", isHoliday: false, day: 3, thisMonth: true },
      { month: "Aug", isHoliday: false, day: 4, thisMonth: true },
      { month: "Aug", isHoliday: false, day: 5, thisMonth: true },
      { month: "Aug", isHoliday: false, day: 6, thisMonth: true },
      { month: "Aug", isHoliday: true, day: 7, thisMonth: true },
    ],
    [
      { month: "Aug", isHoliday: false, day: 8, thisMonth: true },
      { month: "Aug", isHoliday: false, day: 9, thisMonth: true },
      { month: "Aug", isHoliday: false, day: 10, thisMonth: true },
      { month: "Aug", isHoliday: false, day: 11, thisMonth: true },
      { month: "Aug", isHoliday: false, day: 12, thisMonth: true },
      { month: "Aug", isHoliday: false, day: 13, thisMonth: true },
      { month: "Aug", isHoliday: true, day: 14, thisMonth: true },
    ],
    [
      { month: "Aug", isHoliday: true, day: 15, thisMonth: true },
      { month: "Aug", isHoliday: false, day: 16, thisMonth: true },
      { month: "Aug", isHoliday: false, day: 17, thisMonth: true },
      { month: "Aug", isHoliday: false, day: 18, thisMonth: true },
      { month: "Aug", isHoliday: false, day: 19, thisMonth: true },
      { month: "Aug", isHoliday: false, day: 20, thisMonth: true },
      { month: "Aug", isHoliday: true, day: 21, thisMonth: true },
    ],
    [
      { month: "Aug", isHoliday: false, day: 22, thisMonth: true },
      { month: "Aug", isHoliday: false, day: 23, thisMonth: true },
      { month: "Aug", isHoliday: false, day: 24, thisMonth: true },
      { month: "Aug", isHoliday: false, day: 25, thisMonth: true },
      { month: "Aug", isHoliday: false, day: 26, thisMonth: true },
      { month: "Aug", isHoliday: false, day: 27, thisMonth: true },
      { month: "Aug", isHoliday: true, day: 28, thisMonth: true },
    ],
    [
      { month: "Aug", isHoliday: false, day: 29, thisMonth: true },
      { month: "Aug", isHoliday: false, day: 30, thisMonth: true },
      { month: "Aug", isHoliday: false, day: 31, thisMonth: true },
      { month: "Aug", isHoliday: false, day: 1, thisMonth: false },
      { month: "Aug", isHoliday: false, day: 2, thisMonth: false },
      { month: "Aug", isHoliday: false, day: 3, thisMonth: false },
      { month: "Aug", isHoliday: true, day: 4, thisMonth: false },
    ],
    [
      { month: "Aug", isHoliday: false, day: 5, thisMonth: false },
      { month: "Aug", isHoliday: false, day: 6, thisMonth: false },
      { month: "Aug", isHoliday: false, day: 7, thisMonth: false },
      { month: "Aug", isHoliday: false, day: 8, thisMonth: false },
      { month: "Aug", isHoliday: false, day: 9, thisMonth: false },
      { month: "Aug", isHoliday: false, day: 10, thisMonth: false },
      { month: "Aug", isHoliday: true, day: 11, thisMonth: false },
    ],
  ],

  september: [
    [
      { month: "Sep", isHoliday: false, day: 29, thisMonth: false },
      { month: "Sep", isHoliday: false, day: 30, thisMonth: false },
      { month: "Sep", isHoliday: false, day: 31, thisMonth: false },
      { month: "Sep", isHoliday: false, day: 1, thisMonth: true },
      { month: "Sep", isHoliday: false, day: 2, thisMonth: true },
      { month: "Sep", isHoliday: false, day: 3, thisMonth: true },
      { month: "Sep", isHoliday: true, day: 4, thisMonth: true },
    ],
    [
      { month: "Sep", isHoliday: false, day: 5, thisMonth: true },
      { month: "Sep", isHoliday: false, day: 6, thisMonth: true },
      { month: "Sep", isHoliday: false, day: 7, thisMonth: true },
      { month: "Sep", isHoliday: false, day: 8, thisMonth: true },
      { month: "Sep", isHoliday: true, day: 9, thisMonth: true },
      { month: "Sep", isHoliday: true, day: 10, thisMonth: true },
      { month: "Sep", isHoliday: true, day: 11, thisMonth: true },
    ],
    [
      { month: "Sep", isHoliday: true, day: 12, thisMonth: true },
      { month: "Sep", isHoliday: false, day: 13, thisMonth: true },
      { month: "Sep", isHoliday: false, day: 14, thisMonth: true },
      { month: "Sep", isHoliday: false, day: 15, thisMonth: true },
      { month: "Sep", isHoliday: false, day: 16, thisMonth: true },
      { month: "Sep", isHoliday: false, day: 17, thisMonth: true },
      { month: "Sep", isHoliday: true, day: 18, thisMonth: true },
    ],
    [
      { month: "Sep", isHoliday: false, day: 19, thisMonth: true },
      { month: "Sep", isHoliday: false, day: 20, thisMonth: true },
      { month: "Sep", isHoliday: false, day: 21, thisMonth: true },
      { month: "Sep", isHoliday: false, day: 22, thisMonth: true },
      { month: "Sep", isHoliday: false, day: 23, thisMonth: true },
      { month: "Sep", isHoliday: false, day: 24, thisMonth: true },
      { month: "Sep", isHoliday: true, day: 25, thisMonth: true },
    ],
    [
      { month: "Sep", isHoliday: false, day: 26, thisMonth: true },
      { month: "Sep", isHoliday: false, day: 27, thisMonth: true },
      { month: "Sep", isHoliday: false, day: 28, thisMonth: true },
      { month: "Sep", isHoliday: false, day: 29, thisMonth: true },
      { month: "Sep", isHoliday: false, day: 30, thisMonth: true },
      { month: "Sep", isHoliday: false, day: 1, thisMonth: false },
      { month: "Sep", isHoliday: true, day: 2, thisMonth: false },
    ],
    [
      { month: "Sep", isHoliday: false, day: 3, thisMonth: false },
      { month: "Sep", isHoliday: false, day: 4, thisMonth: false },
      { month: "Sep", isHoliday: false, day: 5, thisMonth: false },
      { month: "Sep", isHoliday: false, day: 6, thisMonth: false },
      { month: "Sep", isHoliday: false, day: 7, thisMonth: false },
      { month: "Sep", isHoliday: false, day: 8, thisMonth: false },
      { month: "Sep", isHoliday: true, day: 9, thisMonth: false },
    ],
  ],
};
