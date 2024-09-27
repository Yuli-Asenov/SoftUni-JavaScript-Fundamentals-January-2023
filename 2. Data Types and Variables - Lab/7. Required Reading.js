function requiredReading(pages, pagesperhour, days) {
  let totalTime = pages / pagesperhour;
  let hoursPerDay = totalTime / days;
  console.log(hoursPerDay);
}
requiredReading(212, 20, 2);
