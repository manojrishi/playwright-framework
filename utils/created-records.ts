import * as fs from 'fs';
import * as path from 'path';

const filePath = path.join(__dirname, '../reports/created-data.json');

export interface CreatedRecord {
  name: string;
  phone?: string;
  email?: string;
  createdAt: string;
  type: string;
}

export interface CreatedData {
  hospital?: CreatedRecord;
  hcp?: CreatedRecord;
  afBodies?: CreatedRecord;
  bumiAgent?: CreatedRecord;
  patient?: CreatedRecord & { hospitalName?: string; hcpName?: string };
}

export function saveCreatedData(data: Partial<CreatedData>) {
  let existing: CreatedData = {};
  if (fs.existsSync(filePath)) {
    existing = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  }
  const merged = { ...existing, ...data };
  fs.writeFileSync(filePath, JSON.stringify(merged, null, 2));
  console.log(`Saved to reports/created-data.json`);
}

export function loadCreatedData(): CreatedData {
  if (!fs.existsSync(filePath)) return {};
  return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
}
