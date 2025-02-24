export function getDaysOfYear(year) {
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const weekdays = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"];
  const shortWeekdays = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"];

  const groupedDays = {};

  months.forEach((month, index) => {
    groupedDays[month] = [];
  });

  const startDate = new Date(year, 0, 1);
  const endDate = new Date(year, 11, 31);

  for (let date = startDate; date <= endDate; date.setDate(date.getDate() + 1)) {
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    const weekdayIndex = date.getDay();

    groupedDays[months[month]].push({
      day,
      month: month + 1,
      monthTitle: months[month],
      year,
      fullWeekdayName: weekdays[weekdayIndex],
      shortWeekdayName: shortWeekdays[weekdayIndex],
      id: `${String(day).padStart(2, '0')}-${String(month + 1).padStart(2, '0')}-${year}`
    });
  }

  return groupedDays;
}

