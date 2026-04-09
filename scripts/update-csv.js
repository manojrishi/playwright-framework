#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const RESULTS_FILE = path.join(__dirname, '../reports/tc-results.json');
const CSV_FILE = path.join(__dirname, '../qa_test_scenarios.csv');

if (!fs.existsSync(RESULTS_FILE)) {
  console.error('No tc-results.json found — run tests first');
  process.exit(1);
}

const results = JSON.parse(fs.readFileSync(RESULTS_FILE, 'utf-8'));
const resultMap = {};
for (const r of results) {
  resultMap[r.id] = r;
}

const csv = fs.readFileSync(CSV_FILE, 'utf-8');
const lines = csv.split('\n');
const updated = [];

for (const line of lines) {
  // Skip empty lines and header/metadata lines
  if (!line.trim() || !line.includes('TC-')) {
    updated.push(line);
    continue;
  }

  // Parse the line — format: Category,Page Pointer,TC-ID,Scenario,Status,Comments
  // Use a smarter split that handles quoted fields
  const parts = smartSplit(line);
  if (parts.length < 5) {
    updated.push(line);
    continue;
  }

  // Find TC ID in any column
  let tcId = null;
  for (const part of parts) {
    if (/^TC-[A-Z]+-\d+$/.test(part.trim())) {
      tcId = part.trim();
      break;
    }
  }

  if (tcId && resultMap[tcId]) {
    const res = resultMap[tcId];
    // Status is column index 4, Comments is column index 5
    parts[4] = res.status;
    parts[5] = res.comment ? `"${res.comment.replace(/"/g, '""')}"` : '';
    updated.push(parts.join(','));
    console.log(`Updated ${tcId}: ${res.status}${res.comment ? ' — ' + res.comment.substring(0, 60) : ''}`);
  } else {
    updated.push(line);
  }
}

fs.writeFileSync(CSV_FILE, updated.join('\n'), 'utf-8');
console.log(`\nCSV updated: ${CSV_FILE}`);
console.log(`Total results applied: ${Object.keys(resultMap).length}`);

// Print summary
const counts = { pass: 0, fail: 0, pending: 0 };
for (const r of results) counts[r.status] = (counts[r.status] || 0) + 1;
console.log(`\n═══════════════════════════════`);
console.log(`  RESULTS SUMMARY`);
console.log(`═══════════════════════════════`);
console.log(`  Total:   ${results.length}`);
console.log(`  Pass:    ${counts.pass}`);
console.log(`  Fail:    ${counts.fail}`);
console.log(`  Pending: ${counts.pending}`);
console.log(`═══════════════════════════════`);

function smartSplit(line) {
  const result = [];
  let current = '';
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (ch === '"') {
      if (inQuotes && line[i + 1] === '"') {
        current += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
        current += ch;
      }
    } else if (ch === ',' && !inQuotes) {
      result.push(current);
      current = '';
    } else {
      current += ch;
    }
  }
  result.push(current);
  return result;
}
