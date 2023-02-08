const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// Calculate the Points for the given amount
export const calcPoints = (amount) => {
  let points = 0;
  if (amount > 100) {
    // A customer receives 2 points for every dollar spent over $100 in each transaction
    points += (amount - 100) * 2;
    // plus 1 point for every dollar spent between $50 and $100 in each transaction
    points += 50;
  } else if (amount > 50) {
    // plus 1 point for every dollar spent between $50 and $100 in each transaction
    points += amount - 50;
  }

  return points;
};

// Calculate Points for each month
export const calcPointsForEachMonth = (transactions) => {
  const formatted = transactions.map((t) => {
    const monthKey = t.created_at.substring(0, 7);

    return { ...t, monthKey };
  });

  const sum = {};
  let total = 0;
  formatted.forEach((d) => {
    const points = calcPoints(d.amount);
    sum[d.monthKey] = (sum[d.monthKey] || 0) + points;
    total += points;
  });

  return [sum, total];
};

export const formattedDate = (dateStr) => {
  const dates = dateStr.split("-");

  return `${months[parseInt(dates[1]) - 1]}, ${dates[0]}`;
};
