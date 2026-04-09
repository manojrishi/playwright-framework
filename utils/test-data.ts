import { randomBytes } from 'crypto';

function randomSuffix(): string {
  return randomBytes(3).toString('hex').toUpperCase();
}

function randomMalaysianPhone(): string {
  // 9 digits after +60: KL landline "3" + 8 random digits → +603XXXXXXXX
  const num = Math.floor(10000000 + Math.random() * 89999999).toString(); // always 8 digits
  return `+603${num}`; // fill value (after stripping +60) = "3XXXXXXXX" = 9 digits
}

const suffix = randomSuffix();

export const TEST_DATA = {
  baseURL: 'https://zel3-sarapspstaging.zelthy.in',
  credentials: {
    email: 'arun@zelthy.com',
    password: 'Zelthy@123',
  },
  masters: {
    hospital: {
      name: `AutoHospital_${suffix}`,
      code: `${Math.floor(10000 + Math.random() * 89999)}`,
      internalId: `HO${Math.floor(10000 + Math.random() * 89999)}`,
      phone: randomMalaysianPhone(),
      email: `autohospital_${suffix.toLowerCase()}@test.com`,
      address: '123 Auto Street, Kuala Lumpur',
    },
    hcp: {
      name: `AutoHCP_${suffix}`,
      phone: randomMalaysianPhone(),
      email: `autohcp_${suffix.toLowerCase()}@test.com`,
      speciality: 'Dermatology',
    },
    afBodies: {
      name: `AutoAFBodies_${suffix}`,
      internalId: `${Math.floor(10000 + Math.random() * 89999)}`,
      followUpTimeline: 'weekly',
    },
    bumiAgents: {
      name: `AutoBumiAgent_${suffix}`,
      internalId: `${Math.floor(10000 + Math.random() * 89999)}`,
      phone: randomMalaysianPhone(),
      email: `autobumiagent_${suffix.toLowerCase()}@test.com`,
    },
  },
  patient: {
    firstName: `AutoPatient`,
    lastName: suffix,
    phone: randomMalaysianPhone(),
    email: `autopatient_${suffix.toLowerCase()}@test.com`,
    dob: '1990-01-15',
  },
};

export const CREATED = {
  hospitalName: TEST_DATA.masters.hospital.name,
  hcpName: TEST_DATA.masters.hcp.name,
};
