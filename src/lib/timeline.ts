/** Months since year 0 for a "YYYY-MM" string. */
export function toMonths(ym: string): number {
  const [year, month] = ym.split("-").map(Number);
  return year * 12 + (month - 1);
}

export function toYM(date: Date): string {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
}

/** Position of a period on an axis of whole years, in percent. */
export function span(start: string, end: string, axisStartYear: number, axisEndYear: number) {
  const axisStart = axisStartYear * 12;
  const total = (axisEndYear - axisStartYear) * 12;
  const left = ((toMonths(start) - axisStart) / total) * 100;
  const width = ((toMonths(end) - toMonths(start)) / total) * 100;
  return { left: round(left), width: round(width) };
}

export function wholeYearsBetween(start: string, end: string): number {
  return Math.floor((toMonths(end) - toMonths(start)) / 12);
}

export function formatPeriod(
  locale: string,
  start: string,
  end: string | null,
  ongoingLabel: string,
  yearsOnly = false,
): string {
  const format = (ym: string) => {
    if (yearsOnly) return ym.slice(0, 4);
    const [year, month] = ym.split("-").map(Number);
    return new Intl.DateTimeFormat(locale, { month: "short", year: "numeric" }).format(
      new Date(Date.UTC(year, month - 1, 15)),
    );
  };
  return `${format(start)} – ${end ? format(end) : ongoingLabel}`;
}

const round = (n: number) => Math.round(n * 100) / 100;
