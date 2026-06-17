import XLSX from "xlsx";
export function excelReader() {
  const excelPath = "testData/utils.xlsx";
  const workbook = XLSX.readFile(excelPath);
  const sheetName = workbook.SheetNames[0];
  const workSheet = workbook.Sheets[sheetName];
  // consvert workSheet to JSON
  const loginData = XLSX.utils.sheet_to_json(workSheet);
  return loginData;
}

