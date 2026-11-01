import { generateReport } from '../../src/report/generate-report';

describe('generateReport', () => {
  it('should summarize the processed data', () => {
    const report = generateReport([10, 20, 30]);

    expect(report).toEqual({ total: 3, sum: 60, average: 20, min: 10, max: 30 });
  });

  it('should return zeros when there is no data', () => {
    const report = generateReport([]);

    expect(report).toEqual({ total: 0, sum: 0, average: 0, min: 0, max: 0 });
  });
});
