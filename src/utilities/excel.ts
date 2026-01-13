import ExcelJS from 'exceljs';

export interface ExcelReadOptions {
  sheetName?: string;
  sheetIndex?: number;
  header?: boolean;
}

export async function readExcel(filePath: string, options: ExcelReadOptions = {}): Promise<Record<string, any>[]> {
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile(filePath);
  const worksheet = options.sheetName
    ? workbook.getWorksheet(options.sheetName)
    : workbook.worksheets[options.sheetIndex ?? 0];

  if (!worksheet) return [];

  const rows: Record<string, any>[] = [];
  const header = options.header ?? true;
  let headers: string[] = [];

  worksheet.eachRow((row, rowNumber) => {
    const values = row.values as any[];
    const rowVals = values.slice(1);

    if (rowNumber === 1 && header) {
      headers = rowVals.map((v) => (v === undefined || v === null ? '' : String(v)));
      return;
    }

    if (header) {
      const obj: Record<string, any> = {};
      for (let i = 0; i < headers.length; i++) {
        obj[headers[i] || `column${i + 1}`] = rowVals[i];
      }
      const hasData = Object.values(obj).some((v) => v !== undefined && v !== null && v !== '');
      if (hasData) rows.push(obj);
    } else {
      rows.push(rowVals);
    }
  });

  return rows;
}

export async function readExcelAsArrays(filePath: string, options: ExcelReadOptions = {}): Promise<any[][]> {
  const data = await readExcel(filePath, { ...options, header: false });
  return data as any[][];
}
