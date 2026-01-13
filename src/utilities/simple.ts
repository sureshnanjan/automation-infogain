import { readExcel, ExcelReadOptions } from './excel';

export async function getDataFromExcel(filePath = 'test-data/data.xlsx', options?: ExcelReadOptions) {
    return await readExcel(filePath, options);
}