export interface ReportSummary {
  total: number;
  sum: number;
  average: number;
  min: number;
  max: number;
}

export const generateReport = (data: number[]): ReportSummary => {
  if (data.length === 0) {
    return { total: 0, sum: 0, average: 0, min: 0, max: 0 };
  }

  const sum = data.reduce((acc, value) => acc + value, 0);

  return {
    total: data.length,
    sum,
    average: sum / data.length,
    min: Math.min(...data),
    max: Math.max(...data),
  };
};
