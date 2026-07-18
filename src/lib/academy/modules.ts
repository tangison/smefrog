/**
 * SMEfrog Academy — central content source.
 *
 * 64 modules across 3 tracks:
 *   1. Business Registration     (21 modules)
 *   2. Compliance & Governance   (22 modules)
 *   3. Namibian Business Fundamentals (21 modules)
 *
 * All content is Namibia-specific (BIPA, NAMRA, BIPP, CC vs PTY LTD, etc.).
 * XP values are weighted by track difficulty and module depth.
 */

import type { Module, Track, TrackId } from './types'

export type { Module, Track, TrackId }

export const TRACKS: Track[] = [
  {
    id: 'registration',
    name: 'Business Registration',
    tagline: 'From idea to legal entity',
    description:
      'Everything you need to take a business from a name on a napkin to a registered, BIPA-filed entity with bank-ready documents. Covers CC and PTY LTD paths in Namibia.',
    color: 'frog-green',
    accent: 'rgba(122, 201, 67, 0.18)',
    icon: 'FileCheck',
  },
  {
    id: 'compliance',
    name: 'Compliance & Governance',
    tagline: 'Stay legal, stay penalty-free',
    description:
      'Annual returns, beneficial ownership, governance documentation, and the regulatory rhythm that keeps your company active in Namibia. Built around BIPA and NAMRA cycles.',
    color: 'frog-green',
    accent: 'rgba(122, 201, 67, 0.18)',
    icon: 'ShieldCheck',
  },
  {
    id: 'fundamentals',
    name: 'Namibian Business Fundamentals',
    tagline: 'How business actually works here',
    description:
      'Sector maps, tax basics, labour law essentials, banking norms, and the unwritten rules of doing business in Namibia. Practical knowledge for founders and operators.',
    color: 'frog-green',
    accent: 'rgba(122, 201, 67, 0.18)',
    icon: 'Map',
  },
]

// Helper to keep module definitions compact
function m(
  n: number,
  trackId: TrackId,
  title: string,
  summary: string,
  level: Module['level'],
  duration: number,
  xp: number,
  outcomes: string[],
  body: string,
  keyFacts: string[] = [],
): Module {
  const slug = `m${String(n).padStart(2, '0')}-${title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')}`
  return { id: `m${n}`, slug, trackId, title, summary, duration, xp, level, outcomes, body, keyFacts }
}

export const MODULES: Module[] = [
  // ═══ Track 1: Business Registration (21 modules) ═══
  m(1, 'registration', 'Choosing CC vs PTY LTD', 'The first decision every Namibian founder faces, broken down by liability, cost, and future fundraising.', 'Beginner', 12, 50,
    ['Identify the legal difference between a CC and a PTY LTD', 'Choose the right structure for your stage', 'Estimate lifetime compliance costs for each'],
    `A Close Corporation (CC) and a Private Company (PTY LTD) are both legal entities in Namibia, but they differ in ownership limits, governance, and ongoing cost. A CC has 1 to 10 members and lighter governance requirements; a PTY LTD has 1 to 50 shareholders and stricter corporate governance. For a solo founder starting a service business, a CC is usually enough. For a business planning to raise outside capital, a PTY LTD is the better long-term vehicle. This module walks you through the trade-offs so you can pick once and avoid a costly conversion later.`,
  [
    'A Close Corporation (CC) in Namibia has 1 to 10 members.',
    'A Private Company (PTY LTD) in Namibia has 1 to 50 shareholders.',
    'CCs have lighter governance requirements than PTY LTDs.',
    'PTY LTD is the better choice for businesses planning to raise outside capital.',
    'CCs can no longer be newly registered in Namibia since 2011, but existing ones continue.',
  ]),

  m(2, 'registration', 'Name Reservation with BIPA', 'How to reserve a business name with BIPA, including the four most common rejection reasons.', 'Beginner', 10, 40,
    ['Reserve a name that will pass BIPA review', 'Avoid the four common rejection reasons', 'Understand the 28-day reservation window'],
    `Name reservation is the first formal step. BIPA rejects names that are too similar to existing entities, that contain restricted words without permission, that suggest a connection to government, or that are misleading. Once reserved, the name is held for 28 days while you complete the rest of the registration. This module covers the reservation form, fee, and the search process.`,
  [
    'Name reservation with BIPA holds the name for 28 days.',
    'BIPA rejects names too similar to existing entities.',
    'Names suggesting a government connection are restricted.',
    'Names containing restricted words without permission are rejected.',
    'Misleading names are rejected by BIPA.',
  ]),

  m(3, 'registration', 'Founders and Members', 'Who can be a founder or member, including the rules for foreigners and minors.', 'Beginner', 8, 30,
    ['List the documents each founder must provide', 'Determine whether a foreign founder needs a work permit', 'Structure membership percentage allocations'],
    `Membership rules differ between CC and PTY LTD. Foreigners can be founders in both, but additional documents are required: a valid work permit or proof of residency. This module covers the founder profile form, the consent-to-act-as-member document, and the percentage allocation sheet that SMEfrog uses to file your entity.`,
  [
    'Foreigners can be founders of both CCs and PTY LTDs in Namibia.',
    'Foreign founders must provide a valid work permit or proof of residency.',
    'A consent-to-act-as-member document is required for each founder.',
    'Membership percentage allocations must be documented.',
    'Minors face additional restrictions on founding an entity.',
  ]),

  m(4, 'registration', 'Registered Office and Address', 'Why a Namibian registered address is mandatory and what counts as proof.', 'Beginner', 7, 30,
    ['Provide a compliant registered office address', 'Differentiate between physical, postal, and service addresses', 'Submit a proof of address that BIPA will accept'],
    `Every Namibian entity must have a registered office address inside the country. A P.O. Box alone is not enough; you need a physical street address. The proof of address must be no older than 3 months and match the name of the founder or entity. This module walks through the address types and what to do if you operate from home.`,
  [
    'Every Namibian entity must have a registered office address inside the country.',
    'A P.O. Box alone is not sufficient as a registered office address.',
    'Proof of address must be no older than 3 months.',
    'The proof of address must match the name of the founder or entity.',
    'Home addresses can be used as registered offices.',
  ]),

  m(5, 'registration', 'Preparing Founder Documents', 'The exact document checklist SMEfrog sends every founder, and why each item is required.', 'Beginner', 9, 35,
    ['Assemble the full founder document pack', 'Certify ID copies correctly', 'Avoid the three document mistakes that delay filing'],
    `The founder pack consists of: certified ID or passport copy for each member, proof of address no older than 3 months, the proposed business names (in order of preference), and the signed consent-to-act form. This module covers certification rules, who can certify, and the common mistakes that cause BIPA to reject a submission.`,
  [
    'A certified ID or passport copy is required for each founder.',
    'Proof of address must be no older than 3 months.',
    'Two to three proposed business names are submitted in order of preference.',
    'A signed consent-to-act form is required from each member.',
    'Document certification must be done by a commissioner of oaths.',
  ]),

  m(6, 'registration', 'BIPA Filing Process', 'A walkthrough of the actual BIPA filing, from submission to certificate issuance.', 'Intermediate', 14, 60,
    ['Understand the BIPA submission workflow', 'Track a filing from submitted to approved', 'Interpret BIPA status updates correctly'],
    `BIPA accepts electronic submissions through the Online Business Registration System (OBRS) and physical submissions at regional offices. SMEfrog files electronically for faster turnaround. Once submitted, a filing moves through statuses: Received, Under Review, Approved, or Returned for Correction. This module explains each status and what to do if a filing is returned.`,
  [
    'BIPA accepts electronic submissions through the Online Business Registration System (OBRS).',
    'Filing statuses include: Received, Under Review, Approved, or Returned for Correction.',
    'SMEfrog files electronically for faster turnaround.',
    'A returned filing must be corrected and resubmitted.',
    'Physical submissions are accepted at BIPA regional offices.',
  ]),

  m(7, 'registration', 'Beneficial Ownership Declaration', 'What beneficial ownership is, who must be declared, and how SMEfrog files the BO return.', 'Intermediate', 11, 55,
    ['Identify who qualifies as a beneficial owner', 'Complete the BO declaration accurately', 'File the BO return with BIPA correctly'],
    `Since 2021, every Namibian entity must file a Beneficial Ownership declaration with BIPA. A beneficial owner is any natural person who ultimately owns or controls 5% or more of the entity, or who exercises significant influence. This module covers the BO form, the declaration thresholds, and the filing cadence.`,
  [
    'Beneficial ownership declaration has been mandatory in Namibia since 2021.',
    'A beneficial owner is any natural person owning or controlling 5% or more of an entity.',
    'The BO declaration is filed with BIPA.',
    'BO must be updated when ownership changes occur.',
    'Corporate shareholders must be traced back to their natural person controllers.',
  ]),

  m(8, 'registration', 'Tax Certificate and NAMRA Registration', 'How to obtain a tax identification number and register the entity with NAMRA.', 'Beginner', 10, 40,
    ['Register the new entity with NAMRA', 'Obtain a Tax Identification Number (TIN)', 'Understand which taxes the entity must register for'],
    `Every registered business in Namibia must obtain a Tax Identification Number from NAMRA. Depending on turnover, the entity may also need to register for VAT (mandatory above N$1 million annual turnover) and PAYE if it has employees. This module walks through the NAMRA registration form and the SMEfrog tax certificate service.`,
  [
    'Every registered Namibian business must obtain a Tax Identification Number (TIN) from NAMRA.',
    'VAT registration becomes mandatory above N$1,000,000 annual turnover.',
    'PAYE registration is required if the entity has employees.',
    'The TIN is issued by the Namibia Revenue Agency (NAMRA).',
    'VAT, PAYE, and income tax are the three most common tax registrations.',
  ]),

  m(9, 'registration', 'Bank Account Opening', 'What banks require to open a business account, and how to prepare for the compliance interview.', 'Intermediate', 12, 50,
    ['Compile the bank-ready document pack', 'Prepare for the FICA compliance interview', 'Choose between Namibian retail banks'],
    `Namibian banks require a specific document pack to open a business account: the registration certificate, the founding statement (CK2 for CC, MOI for PTY LTD), a board resolution authorising account opening, and the KYC documents for each signatory. This module covers the pack, the FICA interview questions, and the differences between Bank Windhoek, FNB, Standard Bank, and Nedbank.`,
  [
    'Namibian banks require the registration certificate to open a business account.',
    'The founding statement (CK2) is required for CC account opening.',
    'The MOI is required for PTY LTD account opening.',
    'A board resolution authorising account opening is mandatory.',
    'KYC documents are required for each signatory.',
  ]),

  m(10, 'registration', 'PTY LTD Memorandum of Incorporation', 'Drafting the MOI: what to include, what to leave out, and what BIPA will reject.', 'Advanced', 18, 80,
    ['Understand the structure of a PTY LTD MOI', 'Choose between a short-form and long-form MOI', 'Avoid clauses BIPA will reject'],
    `The Memorandum of Incorporation is the constitutional document of a PTY LTD. Namibia allows a short-form MOI (using the standard template) or a long-form MOI (custom-drafted). Most small businesses use the short form. This module covers both, the clauses BIPA will reject, and how to draft alterable provisions for shareholder agreements.`,
  [
    'The Memorandum of Incorporation (MOI) is the constitutional document of a PTY LTD.',
    'Namibia allows a short-form MOI (standard template) or a long-form MOI (custom).',
    'Most small businesses use the short-form MOI.',
    'BIPA can reject MOI clauses that contravene the Companies Act.',
    'Alterable provisions in the MOI allow customisation of governance rules.',
  ]),

  m(11, 'registration', 'Shareholder Agreements', 'Why a shareholder agreement matters even for two-founder companies, and what to include.', 'Advanced', 15, 70,
    ['Draft a founding shareholder agreement', 'Include the five essential clauses', 'Handle vesting, drag-along, and tag-along rights'],
    `A shareholder agreement governs the relationship between founders and is separate from the MOI. Even with two founders, an agreement prevents disputes from becoming deadlocks. This module covers the five essential clauses: vesting, transfer restrictions, decision-making thresholds, exit terms, and dispute resolution.`,
  [
    'A shareholder agreement is separate from the MOI.',
    'Even two-founder companies benefit from a shareholder agreement.',
    'Five essential clauses: vesting, transfer restrictions, decision thresholds, exit terms, dispute resolution.',
    'Drag-along rights compel minority shareholders to join a majority sale.',
    'Tag-along rights protect minority shareholders in a majority sale.',
  ]),

  m(12, 'registration', 'Industry Licences and Permits', 'When a business licence is required beyond BIPA registration, by sector.', 'Intermediate', 13, 55,
    ['Identify whether your sector requires an additional licence', 'Locate the issuing authority for each licence', 'Budget for licence fees and renewal cycles'],
    `BIPA registration is not the only licence most businesses need. Sectors like food, liquor, transport, tourism, health, and financial services require additional permits from sector-specific regulators. This module is a sector-by-sector map of common Namibian business licences, the issuing authority, and the typical cost.`,
  [
    'BIPA registration is not the only licence most businesses need.',
    'Food businesses require health permits from the local municipality.',
    'Liquor sales require a liquor licence from the Ministry of Home Affairs.',
    'Tourism businesses must register with the Namibia Tourism Board.',
    'Financial services require authorisation from NAMFISA.',
  ]),

  m(13, 'registration', 'Municipal Trade Licences', 'How to obtain a trade licence from your local municipality, and why it is required to operate.', 'Beginner', 9, 40,
    ['Apply for a municipal trade licence', 'Understand zoning and land-use approval', 'Pass the fire and health inspection'],
    `Most municipalities in Namibia require a trade licence to operate legally within their boundaries. The licence confirms zoning compliance and that the premises meet basic fire and health standards. This module covers the application, the inspection, and the renewal cycle for Windhoek, Swakopmund, Walvis Bay, and Oshakati.`,
  [
    'Most Namibian municipalities require a trade licence to operate legally.',
    'A trade licence confirms zoning compliance.',
    'Fire and health inspections are part of the trade licence process.',
    'Trade licences must be renewed annually.',
    'Windhoek, Swakopmund, Walvis Bay, and Oshakati each have their own trade licence process.',
  ]),

  m(14, 'registration', 'Social Security Commission Registration', 'Registering the entity and its employees with the SSC, and what contributions are due.', 'Beginner', 8, 35,
    ['Register the employer with the SSC', 'Calculate the monthly SSC contribution', 'File the monthly return correctly'],
    `The Social Security Commission requires every employer in Namibia to register, file monthly returns, and pay contributions for each employee. Contributions are split between the Maternity, Sick, and Death Leave Fund and the Employee Compensation Fund. This module covers the registration form, the contribution calculation, and the monthly filing cycle.`,
  [
    'The Social Security Commission (SSC) requires every employer in Namibia to register.',
    'SSC contributions are split between the Maternity/Sick/Death Leave Fund and the Employee Compensation Fund.',
    'Employers must file monthly SSC returns.',
    'SSC registration is separate from NAMRA registration.',
    'Both employer and employee contribute to the SSC.',
  ]),

  m(15, 'registration', 'VAT Registration Triggers', 'When VAT registration becomes mandatory, optional, or unnecessary.', 'Intermediate', 11, 50,
    ['Identify the N$1M mandatory VAT threshold', 'Decide whether voluntary registration is worthwhile', 'Set up the VAT accounting cycle'],
    `VAT registration becomes mandatory when annual taxable turnover exceeds N$1,000,000. Below that, registration is optional. Voluntary registration can be useful for businesses that want to reclaim input VAT on large capital purchases, but it adds a monthly filing obligation. This module covers the threshold, the registration process, and the VAT accounting cycle.`,
  [
    'VAT registration becomes mandatory when annual taxable turnover exceeds N$1,000,000.',
    'Below N$1M, VAT registration is optional (voluntary).',
    'Voluntary registration allows businesses to reclaim input VAT on capital purchases.',
    'VAT-registered vendors must file periodic returns.',
    'Voluntary registration adds a monthly filing obligation.',
  ]),

  m(16, 'registration', 'Foreign Founder Pathway', 'The full pathway for a foreign founder, from permit to bank account.', 'Advanced', 16, 75,
    ['Determine which permit the foreign founder needs', 'Compile the additional document pack', 'Navigate the bank KYC process as a non-resident'],
    `Foreign founders face additional steps: a valid work permit or proof of residency is required before BIPA will accept the filing, and banks apply stricter KYC. This module covers the permit types, the additional document pack, the bank KYC process, and the timing of each step.`,
  [
    'Foreign founders must obtain a valid work permit or proof of residency before BIPA will accept a filing.',
    'Banks apply stricter KYC to non-resident founders.',
    'A valid work permit is one option; proof of residency is another.',
    'The additional document pack for foreign founders includes the permit and proof of address.',
    'Foreign founders face longer bank KYC processing times.',
  ]),

  m(17, 'registration', 'Converting CC to PTY LTD', 'When and how to convert a CC to a PTY LTD, and the tax implications.', 'Advanced', 14, 70,
    ['Decide whether conversion is the right move', 'File the conversion with BIPA', 'Manage the tax and asset transfer implications'],
    `CCs can no longer be registered in Namibia (since 2011), but existing CCs can continue to operate. Some choose to convert to a PTY LTD to access capital markets or align with investor expectations. This module covers the decision, the conversion filing, and the tax treatment of assets moving to the new entity.`,
  [
    'CCs can no longer be newly registered in Namibia since 2011.',
    'Existing CCs can continue to operate indefinitely.',
    'CCs can be converted to PTY LTDs to access capital markets.',
    'Conversion involves filing with BIPA and transferring assets.',
    'Conversion may have tax implications that require professional advice.',
  ]),

  m(18, 'registration', 'Deregistration and Closure', 'How to formally close a business that is no longer trading, and avoid ongoing compliance debt.', 'Intermediate', 11, 50,
    ['File a voluntary deregistration with BIPA', 'Clear outstanding NAMRA and SSC obligations', 'Close bank accounts and cancel licences'],
    `Deregistration is the formal closure of an entity. A business that stops trading but is not deregistered continues to owe annual return filings to BIPA and may accumulate penalties. This module covers the deregistration filing, the clearance process with NAMRA and SSC, and the closure of bank accounts and sector licences.`,
  [
    'Deregistration is the formal closure of an entity.',
    'A business that stops trading but is not deregistered continues to owe annual returns.',
    'Voluntary deregistration is filed with BIPA.',
    'Outstanding NAMRA and SSC obligations must be cleared before deregistration.',
    'Bank accounts and sector licences should be closed as part of deregistration.',
  ]),

  m(19, 'registration', 'Reinstating a Deregistered Entity', 'Reversing a deregistration when a business is revived, and the cost of doing so.', 'Intermediate', 9, 45,
    ['Identify whether reinstatement is possible', 'File the reinstatement application', 'Pay outstanding fees and penalties'],
    `An entity that was deregistered can sometimes be reinstated, particularly if the deregistration was administrative (for failing to file annual returns) rather than voluntary. This module covers the reinstatement filing, the outstanding fees, and the time window in which reinstatement is possible.`,
  [
    'Administratively deregistered entities can sometimes be reinstated.',
    'Reinstatement requires filing an application with BIPA.',
    'Outstanding fees and penalties must be paid for reinstatement.',
    'Voluntary deregistrations generally cannot be reversed.',
    'Reinstatement has a limited time window.',
  ]),

  m(20, 'registration', 'Name Changes and Amendments', 'How to change a business name, address, or membership after registration.', 'Intermediate', 10, 45,
    ['File an amendment with BIPA', 'Update NAMRA, SSC, and the bank', 'Issue new share certificates or membership certificates'],
    `After registration, an entity may need to change its name, registered address, or membership. Each change is filed as an amendment with BIPA. This module covers the amendment form, the supporting documents, and the downstream updates required at NAMRA, SSC, and the bank.`,
  [
    'Name changes, address changes, and membership changes are filed as amendments with BIPA.',
    'Each type of amendment has its own form and supporting documents.',
    'After an amendment, NAMRA, SSC, and the bank must be updated.',
    'Amendments trigger the issuance of new share or membership certificates.',
    'The amended founding statement or MOI must be refiled with BIPA.',
  ]),

  m(21, 'registration', 'Capstone: Full Registration Walkthrough', 'A complete end-to-end walkthrough of a real CC registration, from name to certificate.', 'Advanced', 20, 100,
    ['Execute a complete CC registration end-to-end', 'Track the filing through every status', 'Resolve a returned filing'],
    `The capstone module ties everything together. Walk through a complete CC registration from name reservation to certificate issuance, including the BO declaration, tax certificate, and bank account opening. The module ends with a returned filing scenario and the steps to resolve it.`,
  [
    'A complete CC registration goes from name reservation to certificate issuance.',
    'The BO declaration and tax certificate are part of the full process.',
    'Bank account opening is the final step in the registration journey.',
    'A returned filing can be resolved by correcting the identified issues and resubmitting.',
    'The entire process typically takes 7 to 10 working days.',
  ]),

  // ═══ Track 2: Compliance & Governance (22 modules) ═══
  m(22, 'compliance', 'Annual Return Filing', 'The single most important recurring filing for any Namibian entity, and how to never miss it.', 'Beginner', 9, 45,
    ['File the annual return with BIPA', 'Calculate the filing fee based on entity type', 'Avoid the penalty for late filing'],
    `The annual return is the recurring filing that keeps an entity active. It is due once a year on the anniversary of registration. Missing it triggers escalating penalties and eventually administrative deregistration. This module covers the filing, the fee schedule, and the SMEfrog reminder service.`,
  [
    'The annual return is the recurring filing that keeps an entity active.',
    'Annual returns are due once a year on the anniversary of registration.',
    'Missing the annual return triggers escalating penalties.',
    'Continued failure to file leads to administrative deregistration.',
    'The filing fee varies based on entity type.',
  ]),

  m(23, 'compliance', 'Beneficial Ownership Updates', 'When and how to update the BO declaration between annual filings.', 'Intermediate', 10, 50,
    ['Identify triggering events for a BO update', 'File the BO update within the 14-day window', 'Maintain a BO register internally'],
    `The BO declaration must be updated whenever a beneficial owner changes. This includes ownership transfers, new shareholders crossing the 5% threshold, or changes to the natural person behind a corporate shareholder. The update must be filed within 14 days of the triggering event. This module covers the triggers, the filing, and the internal register.`,
  [
    'The BO declaration must be updated whenever a beneficial owner changes.',
    'Ownership transfers trigger a BO update.',
    'New shareholders crossing the 5% threshold trigger a BO update.',
    'BO updates must be filed within 14 days of the triggering event.',
    'Entities must maintain an internal BO register.',
  ]),

  m(24, 'compliance', 'Board and Member Resolutions', 'How to draft, circulate, and store resolutions that will hold up under audit.', 'Intermediate', 11, 55,
    ['Draft a resolution that is legally valid', 'Distinguish between board and member resolutions', 'Maintain a minute book that passes audit'],
    `Resolutions are the formal record of decisions made by the entity. Different decisions require different resolution types: ordinary, special, written, or circulating. This module covers the drafting, the circulation, the signature requirements, and the storage in the entity minute book.`,
  [
    'Resolutions are the formal record of decisions made by the entity.',
    'Resolution types include ordinary, special, written, and circulating.',
    'Different decisions require different resolution types.',
    'Resolutions must be stored in the entity minute book.',
    'Signature requirements vary by resolution type.',
  ]),

  m(25, 'compliance', 'Company Secretarial Services', 'What a company secretary does, when one is required, and what to outsource.', 'Advanced', 13, 65,
    ['Determine whether your entity requires a company secretary', 'Scope the company secretarial function', 'Choose between in-house and outsourced delivery'],
    `A PTY LTD in Namibia is not strictly required to appoint a company secretary, but the function is required: minute keeping, annual return filing, BO maintenance, and governance documentation. This module covers the role, the scope, and the build-vs-buy decision.`,
  [
    'A PTY LTD in Namibia is not strictly required to appoint a company secretary.',
    'The company secretarial function is required even without a formal appointment.',
    'Minute keeping and annual return filing are part of the company secretarial function.',
    'BO maintenance is a company secretarial responsibility.',
    'The function can be outsourced to a service provider.',
  ]),

  m(26, 'compliance', 'Statutory Registers and Records', 'The registers every entity must maintain, where to keep them, and for how long.', 'Intermediate', 10, 50,
    ['Maintain the register of members', 'Maintain the register of directors', 'Maintain the register of beneficial owners'],
    `Every Namibian entity must maintain a set of statutory registers: members, directors, beneficial owners, and share transfers. The registers must be available for inspection at the registered office. This module covers each register, the format, and the retention period.`,
  [
    'Every Namibian entity must maintain a register of members.',
    'A register of directors must be maintained.',
    'A register of beneficial owners must be maintained.',
    'Registers must be available for inspection at the registered office.',
    'Share transfer registers track ownership changes over time.',
  ]),

  m(27, 'compliance', 'NAMRA Income Tax Filing', 'The corporate income tax cycle, from provisional tax to the annual return.', 'Intermediate', 14, 65,
    ['File the provisional tax returns (first and second)', 'File the annual income tax return', 'Calculate taxable income correctly'],
    `Namibian companies pay income tax in three instalments through the year: first provisional, second provisional, and the annual return. The cycle runs on a February year-end for most entities. This module covers the calculation, the filing, and the top-up payment.`,
  [
    'Namibian companies pay income tax in three instalments through the year.',
    'First provisional tax is due six months into the financial year.',
    'Second provisional tax is due at year-end.',
    'The annual return reconciles the provisional payments.',
    'Most Namibian entities have a February financial year-end.',
  ]),

  m(28, 'compliance', 'PAYE, SDL, and UIF', 'The employer tax triangle: what to withhold, what to pay, and when.', 'Intermediate', 13, 60,
    ['Calculate PAYE on employee salaries', 'Calculate the Social Development Levy', 'File the monthly employer return'],
    `Employers in Namibia withhold PAYE from employee salaries, contribute to the Social Development Levy, and may contribute to the SSC. The monthly employer return consolidates these. This module covers the calculation tables, the monthly return, and the annual reconciliation.`,
  [
    'Employers in Namibia withhold PAYE from employee salaries.',
    'The Social Development Levy (SDL) is an employer contribution.',
    'SSC contributions are separate from PAYE and SDL.',
    'The monthly employer return consolidates PAYE, SDL, and SSC.',
    'An annual reconciliation must be filed by the employer.',
  ]),

  m(29, 'compliance', 'VAT Cycles and Returns', 'Filing VAT returns, claiming input VAT, and surviving a VAT audit.', 'Advanced', 15, 75,
    ['File the periodic VAT return', 'Claim input VAT correctly', 'Survive a NAMRA VAT audit'],
    `VAT-registered vendors file periodic returns (usually monthly or bi-monthly) and reconcile annually. Input VAT is claimable on business expenses, but specific rules apply to entertainment, motor vehicles, and exempt supplies. This module covers the return, the claim rules, and the audit process.`,
  [
    'VAT-registered vendors file periodic returns (monthly or bi-monthly).',
    'An annual VAT reconciliation is required.',
    'Input VAT is claimable on business expenses.',
    'Entertainment expenses have specific input VAT rules.',
    'Motor vehicle input VAT has special restrictions.',
  ]),

  m(30, 'compliance', 'Withholding Tax on Royalties and Service Fees', 'When to withhold tax on payments to non-residents, and at what rate.', 'Advanced', 12, 60,
    ['Identify payments that trigger withholding tax', 'Apply the correct treaty rate where applicable', 'File the withholding tax return'],
    `Payments to non-residents for royalties, service fees, and certain interest payments trigger withholding tax in Namibia. The rate depends on the nature of the payment and any applicable double-taxation treaty. This module covers the triggers, the rates, and the filing.`,
  [
    'Payments to non-residents for royalties trigger withholding tax in Namibia.',
    'Service fees paid to non-residents can trigger withholding tax.',
    'The withholding tax rate depends on the nature of the payment.',
    'Double-taxation treaties can reduce the withholding rate.',
    'The withholding tax return must be filed by the paying entity.',
  ]),

  m(31, 'compliance', 'Transfer Pricing Basics', 'When transfer pricing rules apply to your entity, and what documentation to maintain.', 'Advanced', 16, 80,
    ['Identify whether your entity is a connected party', 'Apply the arm\u2019s length principle', 'Maintain transfer pricing documentation'],
    `Transfer pricing rules apply to transactions between connected parties, particularly when one party is non-resident. The arm\u2019s length principle requires that the price charged between connected parties is the same as would be charged between independent parties. This module covers the rule, the documentation, and the disclosure.`,
  [
    'Transfer pricing rules apply to transactions between connected parties.',
    'The arm’s length principle requires connected-party prices to match independent-party prices.',
    'Transfer pricing documentation must be maintained.',
    'Transfer pricing particularly applies when one party is non-resident.',
    'Transfer pricing disclosures are required in the tax return.',
  ]),

  m(32, 'compliance', 'Employment Compliance: Labour Act', 'The core compliance obligations under the Namibian Labour Act, from contracts to dismissal.', 'Intermediate', 14, 65,
    ['Draft a compliant employment contract', 'Apply the Basic Conditions of Employment', 'Conduct a fair dismissal process'],
    `The Namibian Labour Act sets the minimum standards for employment contracts, working hours, leave, and dismissal. This module covers the contract structure, the BCEA-equivalent provisions, the probation rules, and the fair-dismissal process.`,
  [
    'The Namibian Labour Act sets minimum standards for employment contracts.',
    'Employment contracts must be in writing.',
    'The BCEA-equivalent provisions cover working hours and leave.',
    'Probation periods must be reasonable and documented.',
    'Dismissal must be both substantively and procedurally fair.',
  ]),

  m(33, 'compliance', 'Affirmative Action Reporting', 'When affirmative action reports are required, and how to compile them.', 'Intermediate', 11, 55,
    ['Determine whether your entity must file an affirmative action report', 'Compile the report correctly', 'Submit to the Employment Equity Commission'],
    `Employers with 50 or more employees, or employers with fewer than 50 but mandatory under the Act, must file affirmative action reports with the Employment Equity Commission. This module covers the threshold, the report structure, and the submission cycle.`,
  [
    'Employers with 50 or more employees must file affirmative action reports.',
    'Smaller employers may also be required to file under certain conditions.',
    'Reports are filed with the Employment Equity Commission.',
    'The report covers workforce composition by designated group.',
    'Affirmative action reporting is an annual obligation.',
  ]),

  m(34, 'compliance', 'POPIA and Data Protection', 'What the draft Data Protection Bill means for your entity today, and what to prepare.', 'Intermediate', 12, 60,
    ['Identify personal information your entity processes', 'Implement the eight data protection principles', 'Prepare for the Data Protection Bill'],
    `Namibia\u2019s Data Protection Bill is not yet in force, but the principles align with POPIA in South Africa and the GDPR. Entities that process personal information should prepare now by inventorying data, reviewing consents, and appointing an information officer. This module covers the principles, the preparation, and the information officer role.`,
  [
    'Namibia’s Data Protection Bill is not yet in force.',
    'The principles align with POPIA (South Africa) and the GDPR.',
    'Entities should inventory the personal information they process.',
    'An information officer should be appointed in preparation.',
    'Consent and lawful processing are core data protection principles.',
  ]),

  m(35, 'compliance', 'Financial Intelligence Centre (FIC) Compliance', 'When your entity is an accountable institution, and what reporting is required.', 'Advanced', 14, 70,
    ['Determine whether your entity is an accountable institution', 'Conduct customer due diligence', 'File suspicious transaction reports'],
    `The Financial Intelligence Centre Act designates certain businesses as accountable institutions: estate agents, lawyers, accountants, dealers in high-value goods, and others. Accountable institutions must conduct CDD, keep records, and file STRs. This module covers the designation, the CDD, and the reporting.`,
  [
    'The Financial Intelligence Centre Act (FIC Act) designates certain businesses as accountable institutions.',
    'Accountable institutions include estate agents, lawyers, and accountants.',
    'Customer due diligence (CDD) is mandatory for accountable institutions.',
    'Records must be kept for at least 5 years.',
    'Suspicious transaction reports (STRs) must be filed with the FIC.',
  ]),

  m(36, 'compliance', 'Audit Requirements', 'When an audit is mandatory, when a review is enough, and when neither is required.', 'Advanced', 13, 65,
    ['Determine whether your entity requires an audit', 'Distinguish between audit and independent review', 'Engage an auditor correctly'],
    `Namibian companies above a certain public-interest score require an audit; smaller companies may require an independent review; very small companies require neither. This module covers the threshold, the difference between audit and review, and the engagement letter.`,
  [
    'Namibian companies above a certain public-interest score require an audit.',
    'Smaller companies may require an independent review instead of an audit.',
    'Very small companies require neither an audit nor a review.',
    'The engagement letter defines the scope of the audit or review.',
    'An independent review is less extensive than an audit.',
  ]),

  m(37, 'compliance', 'Annual Financial Statements', 'What the annual financial statements must contain, and in what format.', 'Intermediate', 12, 60,
    ['Compile the annual financial statements in IFRS for SMEs', 'Disclose related party transactions', 'Sign off and file the AFS'],
    `Annual financial statements are prepared in IFRS for SMEs (or full IFRS for public interest entities). They consist of a statement of financial position, a statement of comprehensive income, a statement of changes in equity, a statement of cash flows, and notes. This module covers the structure, the related party disclosure, and the filing with CIPC-equivalent bodies.`,
  [
    'Annual financial statements are prepared in IFRS for SMEs.',
    'Public interest entities may use full IFRS.',
    'The statement of financial position shows assets, liabilities, and equity.',
    'The statement of comprehensive income shows revenue and expenses.',
    'Related party transactions must be disclosed in the notes.',
  ]),

  m(38, 'compliance', 'Dividend Declarations and Withholding Tax', 'How to declare a dividend, the documentation required, and the dividend tax.', 'Intermediate', 10, 50,
    ['Declare a dividend by board resolution', 'Calculate the dividend withholding tax', 'Pay the withholding tax to NAMRA'],
    `Dividends are declared by board resolution and paid to shareholders. Namibia levies a dividend withholding tax (currently 20%) on distributions to non-resident shareholders. This module covers the declaration, the documentation, and the withholding tax.`,
  [
    'Dividends are declared by board resolution.',
    'Namibia levies a 20% dividend withholding tax on distributions to non-resident shareholders.',
    'The dividend withholding tax must be paid to NAMRA.',
    'Dividend declarations must be documented in the minute book.',
    'Dividends can only be paid from realised profits.',
  ]),

  m(39, 'compliance', 'Director and Officer Liability', 'The personal liability exposure of directors and officers, and how to mitigate it.', 'Advanced', 14, 70,
    ['Identify the sources of director liability', 'Implement D&O insurance appropriately', 'Maintain the indemnification regime'],
    `Directors and officers face personal liability for breaches of fiduciary duty, insolvent trading, and certain statutory obligations. This module covers the sources of liability, the indemnification rules, and the role of D&O insurance.`,
  [
    'Directors face personal liability for breaches of fiduciary duty.',
    'Insolvent trading creates personal liability for directors.',
    'Certain statutory obligations create personal director liability.',
    'Indemnification rules are limited by the Companies Act.',
    'Directors and Officers (D&O) insurance is a key mitigation tool.',
  ]),

  m(40, 'compliance', 'Insolvency and Business Rescue', 'When a business is insolvent, what the directors must do, and the rescue procedure.', 'Advanced', 16, 80,
    ['Recognise the triggers of insolvency', 'Comply with director duties in insolvency', 'File for business rescue where appropriate'],
    `Insolvency is the financial state where liabilities exceed assets or the entity cannot pay debts as they fall due. Directors have heightened duties in this zone. Namibia does not yet have a formal business rescue regime comparable to South Africa, but compromise arrangements are available. This module covers the triggers, the duties, and the procedures.`,
  [
    'Insolvency is when liabilities exceed assets or debts cannot be paid as they fall due.',
    'Directors have heightened duties in the zone of insolvency.',
    'Namibia does not yet have a formal business rescue regime.',
    'Compromise arrangements are available as an alternative to liquidation.',
    'Liquidation is the formal process of winding up an insolvent entity.',
  ]),

  m(41, 'compliance', 'Procurement and Tender Compliance', 'How to qualify for government tenders, and the recurring compliance to stay eligible.', 'Intermediate', 13, 60,
    ['Register on the Central Procurement Register', 'Maintain the BEE-equivalent compliance pack', 'Submit compliant tender responses'],
    `Government tenders in Namibia are governed by the Public Procurement Act. To qualify, an entity must be registered on the Central Procurement Register, maintain tax clearance, BEE-equivalent certificates, and centralised compliance. This module covers the registration, the pack, and the tender response.`,
  [
    'Government tenders in Namibia are governed by the Public Procurement Act.',
    'Entities must be registered on the Central Procurement Register to qualify.',
    'Tax clearance is a prerequisite for tender eligibility.',
    'BEE-equivalent compliance certificates are part of the eligibility pack.',
    'Tender responses must be submitted by the deadline in the prescribed format.',
  ]),

  m(42, 'compliance', 'Sector Compliance Calendars', 'Annual compliance calendars for the most common sectors, so nothing slips.', 'Intermediate', 11, 55,
    ['Build a sector-specific compliance calendar', 'Pre-schedule filings and reminders', 'Avoid last-minute scrambles'],
    `Each sector has its own rhythm. A restaurant files food safety renewals, liquor licence renewals, and municipal trade licence renewals on different cycles. A logistics company files cross-border permits, vehicle licences, and driver PRDPs. This module provides a calendar template for the most common sectors.`,
  [
    'Each business sector has its own compliance rhythm.',
    'Restaurants file food safety, liquor, and trade licence renewals on different cycles.',
    'Logistics companies file cross-border permits, vehicle licences, and driver PRDPs.',
    'A compliance calendar pre-schedules filings to avoid last-minute scrambles.',
    'Automated reminders reduce the risk of missed filings.',
  ]),

  m(43, 'compliance', 'Record Retention and Archiving', 'What to keep, for how long, and in what format, to satisfy every regulator.', 'Beginner', 9, 40,
    ['Apply the correct retention period to each record type', 'Choose between physical and digital archiving', 'Survive a NAMRA records inspection'],
    `Namibian entities must retain accounting records for at least 5 years, tax records for 5 years, employment records for 4 years, and certain governance records indefinitely. This module covers the retention periods, the format, and the destruction rules.`,
  [
    'Namibian entities must retain accounting records for at least 5 years.',
    'Tax records must be retained for 5 years.',
    'Employment records must be retained for 4 years.',
    'Certain governance records must be retained indefinitely.',
    'NAMRA can conduct records inspections at any time.',
  ]),

  // ═══ Track 3: Namibian Business Fundamentals (21 modules) ═══
  m(44, 'fundamentals', 'The Namibian Economy in 10 Numbers', 'The 10 numbers every founder should know about the Namibian economy.', 'Beginner', 10, 40,
    ['Recall the headline economic indicators', 'Identify the largest sectors by GDP', 'Recognise the structural strengths and risks'],
    `This module is a fast orientation to the Namibian economy: GDP size, growth rate, inflation, unemployment, the currency peg to the Rand, the role of SACU, and the major sectors. The numbers are presented in plain language with context for what they mean for a small business.`,
  [
    'The Namibian Dollar (N$) is pegged 1:1 to the South African Rand (ZAR).',
    'Namibia is part of the Southern African Customs Union (SACU).',
    'Major sectors include mining, tourism, agriculture, and fishing.',
    'The rand peg means Namibian monetary policy follows South Africa.',
    'SACU revenue is a significant source of government income.',
  ]),

  m(45, 'fundamentals', 'Currency, Exchange Controls, and the Rand Peg', 'Why the N$ is pegged to the ZAR, what exchange controls apply, and how to move money.', 'Intermediate', 12, 55,
    ['Explain the rand peg and its implications', 'Identify exchange control thresholds', 'Use the correct channels for cross-border payments'],
    `The Namibian Dollar is pegged 1:1 to the South African Rand and circulates alongside it. Exchange controls inherited from the Common Monetary Area apply to cross-border flows. This module covers the peg, the controls, and the practical channels for moving money in and out.`,
  [
    'The Namibian Dollar is pegged 1:1 to the South African Rand.',
    'Both N$ and ZAR circulate freely in Namibia.',
    'Exchange controls apply to cross-border flows from Namibia.',
    'Namibia is part of the Common Monetary Area.',
    'Cross-border payments must use approved banking channels.',
  ]),

  m(46, 'fundamentals', 'Banking in Namibia', 'A map of the Namibian banking sector and how to choose the right bank for your business.', 'Beginner', 11, 45,
    ['Compare the four major retail banks', 'Choose between traditional and digital banks', 'Open the right type of account for your stage'],
    `Namibia\u2019s banking sector is dominated by four retail banks: Bank Windhoek, FNB, Standard Bank, and Nedbank. Each has different strengths and fee structures. This module compares them and covers the account types and the digital alternatives.`,
  [
    'Namibia has four major retail banks: Bank Windhoek, FNB, Standard Bank, and Nedbank.',
    'Each bank has different strengths and fee structures.',
    'Account types vary by business stage and needs.',
    'Digital banking alternatives are emerging in Namibia.',
    'Bank choice should match the business’s transaction profile.',
  ]),

  m(47, 'fundamentals', 'Payment Methods and Collections', 'How Namibian customers actually pay, and how to collect from them efficiently.', 'Intermediate', 12, 55,
    ['Offer the right payment methods to your customers', 'Set up EFT and debit order collections', 'Reduce failed payments and late collections'],
    `Namibian customers pay by EFT, card, cash, and increasingly by mobile wallets. Each method has a different cost, settlement time, and failure mode. This module covers the methods, the cost structure, and the collection strategies.`,
  [
    'Namibian customers pay by EFT, card, cash, and mobile wallets.',
    'EFT is the most common business-to-business payment method.',
    'Card payments incur merchant discount fees.',
    'Mobile wallets are growing in popularity.',
    'Debit order collections work for recurring payments.',
  ]),

  m(48, 'fundamentals', 'SME Funding Landscape', 'A map of the SME funding options in Namibia, from grants to venture debt.', 'Intermediate', 14, 65,
    ['Identify the four main funding categories', 'Match the funding type to your stage', 'Prepare a funding application that gets a yes'],
    `The Namibian SME funding landscape includes grants (DBN, MCA), concessional loans (Agribank, DBN), commercial debt (the retail banks), and a small but growing venture ecosystem. This module maps the landscape and covers the application requirements.`,
  [
    'The Namibian SME funding landscape includes grants, loans, and equity.',
    'The Development Bank of Namibia (DBN) provides concessional debt.',
    'Agribank funds agricultural projects.',
    'Commercial debt is available from the four major retail banks.',
    'The venture ecosystem in Namibia is small but growing.',
  ]),

  m(49, 'fundamentals', 'The Development Bank of Namibia', 'How the DBN supports SMEs, what it funds, and how to apply.', 'Intermediate', 11, 55,
    ['Identify whether DBN funding fits your business', 'Compile the DBN application pack', 'Navigate the DBN credit process'],
    `The Development Bank of Namibia provides concessional debt and equity to SMEs in priority sectors. This module covers the eligibility, the application pack, and the credit process.`,
  [
    'The Development Bank of Namibia (DBN) provides concessional debt and equity to SMEs.',
    'DBN funding is targeted at priority sectors.',
    'The DBN application pack includes a business plan and financial projections.',
    'The DBN credit process involves due diligence and approval committees.',
    'DBN loans typically have longer terms than commercial bank loans.',
  ]),

  m(50, 'fundamentals', 'Tax Fundamentals for Founders', 'The five taxes every founder must understand, in plain language.', 'Beginner', 13, 55,
    ['Identify the five taxes that affect your business', 'Calculate the rough tax liability at each stage', 'Plan the timing of revenue and expenses'],
    `Every founder should understand income tax, VAT, PAYE, dividend withholding tax, and capital gains tax (which Namibia does not levy). This module explains each tax in plain language, with rough calculations and timing tips.`,
  [
    'The five key taxes every founder should understand are income tax, VAT, PAYE, dividend withholding tax, and (no) capital gains tax.',
    'Namibia does not levy capital gains tax.',
    'Income tax is the largest tax burden for most businesses.',
    'VAT is an indirect tax collected from customers.',
    'PAYE is withheld from employee salaries.',
  ]),

  m(51, 'fundamentals', 'Pricing for Namibian Markets', 'How to price for the Namibian market, including the impact of import costs and the small customer base.', 'Intermediate', 12, 60,
    ['Set a price that covers landed cost and overhead', 'Test price sensitivity in a small market', 'Avoid the race-to-the-bottom trap'],
    `Pricing in Namibia is shaped by import costs, a small customer base, and the rand peg. This module covers the landed cost calculation, the price sensitivity test, and the positioning choices that protect margin.`,
  [
    'Pricing in Namibia is shaped by import costs.',
    'A small customer base limits the addressable market.',
    'The rand peg links Namibian prices to South African inflation.',
    'Landed cost includes the purchase price, freight, duty, and VAT.',
    'A race-to-the-bottom on price destroys margins quickly.',
  ]),

  m(52, 'fundamentals', 'Hiring in Namibia', 'How to hire your first employee, the documents required, and the cost of employment.', 'Intermediate', 13, 60,
    ['Draft a compliant employment contract', 'Calculate the true cost of an employee', 'Register the employee with SSC and NAMRA'],
    `Hiring the first employee is a milestone and a compliance step. This module covers the contract, the BCEA-equivalent minimum conditions, the cost stack (salary, SSC, SDL, leave provision), and the registrations.`,
  [
    'The first employee hire is a major compliance step.',
    'An employment contract must be in writing and compliant with the Labour Act.',
    'The cost of employment includes salary, SSC, SDL, and leave provisions.',
    'New employees must be registered with SSC and NAMRA.',
    'The BCEA-equivalent minimum conditions must be met.',
  ]),

  m(53, 'fundamentals', 'Firing in Namibia', 'How to dismiss an employee lawfully, including the operational requirements dismissal.', 'Advanced', 14, 65,
    ['Conduct a fair misconduct dismissal', 'Conduct a fair operational requirements dismissal', 'Calculate severance pay correctly'],
    `Dismissal in Namibia must be both substantively fair (a fair reason) and procedurally fair (a fair process). This module covers misconduct dismissals, operational requirements dismissals, and the severance calculation.`,
  [
    'Dismissal in Namibia must be substantively and procedurally fair.',
    'Substantive fairness means there is a fair reason for dismissal.',
    'Procedural fairness means a fair process was followed.',
    'Operational requirements dismissal is the Namibian term for retrenchment.',
    'Severance pay is calculated as one week’s remuneration per year of service.',
  ]),

  m(54, 'fundamentals', 'Leasing Commercial Property', 'What to look for in a commercial lease, and what to negotiate before signing.', 'Intermediate', 12, 55,
    ['Read a commercial lease correctly', 'Negotiate the five key clauses', 'Avoid the common lease traps'],
    `Commercial leases in Namibia are typically 3 to 5 years with escalation clauses, renewal options, and tenant installation allowances. This module covers the structure, the five negotiable clauses, and the common traps.`,
  [
    'Commercial leases in Namibia are typically 3 to 5 years.',
    'Leases have escalation clauses that increase rent annually.',
    'Renewal options should be negotiated before signing.',
    'Tenant installation allowances can offset setup costs.',
    'The five negotiable clauses are rent, escalation, term, renewal, and installations.',
  ]),

  m(55, 'fundamentals', 'Importing Goods: Customs and Duties', 'How to import goods into Namibia, including customs clearance and duty calculation.', 'Intermediate', 13, 60,
    ['Register as an importer with Customs', 'Calculate the customs duty and VAT', 'Clear goods through the border'],
    `Importing into Namibia requires registration with Customs, a customs clearing agent, and payment of customs duty plus VAT on the landed value. This module covers the registration, the calculation, and the clearing process for sea, air, and road imports.`,
  [
    'Importing into Namibia requires registration with Customs.',
    'A customs clearing agent handles the clearance process.',
    'Customs duty is calculated on the landed value of goods.',
    'VAT is also payable on imported goods.',
    'Sea, air, and road imports each have different clearance procedures.',
  ]),

  m(56, 'fundamentals', 'Exporting and the SACU Advantage', 'How to export from Namibia, and how to use the SACU free-trade area.', 'Intermediate', 12, 55,
    ['Identify whether your product is export-ready', 'Use the SACU free-trade area for regional exports', 'Leverage the AfCFTA for continental exports'],
    `Namibia is part of the Southern African Customs Union (SACU), which means goods move freely between Namibia, South Africa, Botswana, Lesotho, and Eswatini. The African Continental Free Trade Area (AfCFTA) opens additional markets. This module covers the readiness check, the SACU process, and the AfCFTA opportunity.`,
  [
    'Namibia is part of the Southern African Customs Union (SACU).',
    'SACU members are Namibia, South Africa, Botswana, Lesotho, and Eswatini.',
    'Goods move freely between SACU members without customs duty.',
    'The African Continental Free Trade Area (AfCFTA) opens additional markets.',
    'Export readiness includes product, compliance, and logistics.',
  ]),

  m(57, 'fundamentals', 'Cross-Border Trade with Angola', 'How to trade with Angola, including the currency and customs complexities.', 'Advanced', 14, 70,
    ['Navigate the Angolan customs process', 'Manage the currency conversion risk', 'Structure payment terms that protect you'],
    `Angola is Namibia\u2019s northern neighbour and a significant trading partner, particularly for the northern regions. The kwanza depreciation, the customs process, and the language barrier make cross-border trade complex. This module covers the process, the risk, and the structuring.`,
  [
    'Angola is Namibia’s northern neighbour and a significant trading partner.',
    'The Angolan kwanza has historically depreciated against the N$.',
    'Angolan customs procedures can be complex.',
    'The language barrier (Portuguese) is a challenge.',
    'Payment terms must protect against currency risk.',
  ]),

  m(58, 'fundamentals', 'Tourism Business Fundamentals', 'The regulatory and operational basics of starting a tourism business in Namibia.', 'Intermediate', 13, 60,
    ['Register with the Namibia Tourism Board', 'Choose between accommodation, activity, and operator licences', 'Build a product that targets the right traveller segment'],
    `Tourism is one of Namibia\u2019s largest sectors. Starting a tourism business requires registration with the Namibia Tourism Board, a sector-specific licence, and operational fundamentals. This module covers the registration, the licence, and the product design.`,
  [
    'Tourism is one of Namibia’s largest sectors.',
    'Tourism businesses must register with the Namibia Tourism Board.',
    'Sector-specific licences are required for accommodation, activities, and operators.',
    'The right traveller segment must be targeted for product success.',
    'Product design should align with Namibia’s destination brand.',
  ]),

  m(59, 'fundamentals', 'Agriculture and Land', 'The basics of agricultural business, including land tenure and Agribank support.', 'Intermediate', 13, 60,
    ['Identify the land tenure options', 'Access Agribank funding for agricultural projects', 'Structure an agribusiness for scale'],
    `Agriculture is a major employer and a strategic sector. Land tenure in Namibia includes freehold commercial farms and communal land use rights. Agribank provides concessional funding for agricultural projects. This module covers the tenure, the funding, and the business structure.`,
  [
    'Land tenure in Namibia includes freehold commercial farms and communal land use rights.',
    'Agribank provides concessional funding for agricultural projects.',
    'Freehold farms are privately owned and can be mortgaged.',
    'Communal land is held in trust by the state for communities.',
    'Agribusiness structure should consider scale and market access.',
  ]),

  m(60, 'fundamentals', 'Mining and Minerals', 'The regulatory framework for small-scale mining and mineral trading.', 'Advanced', 15, 75,
    ['Apply for a mining licence', 'Comply with the environmental clearance requirements', 'Structure a minerals trading business'],
    `Mining is Namibia\u2019s largest export sector. Small-scale mining and mineral trading are accessible entry points. This module covers the licence types, the environmental clearance, and the trading structure.`,
  [
    'Mining is Namibia’s largest export sector.',
    'Small-scale mining licences are accessible entry points.',
    'Mineral trading businesses require a separate licence.',
    'Environmental clearance is required for mining activities.',
    'Mining licences are issued by the Ministry of Mines and Energy.',
  ]),

  m(61, 'fundamentals', 'Digital Business and E-Commerce', 'The legal and operational basics of running a digital business from Namibia.', 'Intermediate', 12, 55,
    ['Choose the right legal structure for a digital business', 'Comply with consumer protection rules', 'Set up payment and fulfilment'],
    `Digital businesses can be operated from Namibia for both local and international customers. The legal structure, the consumer protection rules, and the payment setup differ. This module covers the structure, the rules, and the setup.`,
  [
    'Digital businesses can be operated from Namibia for both local and international customers.',
    'The legal structure for a digital business may differ from a traditional business.',
    'Consumer protection rules apply to e-commerce.',
    'Payment and fulfilment setup is critical for digital businesses.',
    'Cross-border digital sales may trigger VAT in customer jurisdictions.',
  ]),

  m(62, 'fundamentals', 'Intellectual Property: Trade Marks', 'How to register a trade mark in Namibia, and why it matters for branding.', 'Intermediate', 12, 55,
    ['Search the Namibian trade mark register', 'File a trade mark application', 'Enforce your trade mark rights'],
    `Trade marks protect brand names, logos, and slogans. Namibia has its own trade mark register, separate from South Africa. This module covers the search, the application, and the enforcement.`,
  [
    'Trade marks protect brand names, logos, and slogans.',
    'Namibia has its own trade mark register, separate from South Africa.',
    'A trade mark search should be conducted before filing.',
    'Trade mark registration is filed with BIPA.',
    'Trade mark rights can be enforced through the courts.',
  ]),

  m(63, 'fundamentals', 'Intellectual Property: Copyright and Patents', 'What copyright protects automatically, and when you need a patent.', 'Intermediate', 11, 50,
    ['Identify what copyright protects in Namibia', 'Decide whether to file a patent', 'License IP to third parties correctly'],
    `Copyright protects original literary, artistic, and software works automatically on creation. Patents protect inventions and must be filed. This module covers the automatic protection, the patent filing, and the licensing structure.`,
  [
    'Copyright protects original literary, artistic, and software works automatically.',
    'Copyright protection arises on creation, without registration.',
    'Patents protect inventions and must be filed.',
    'Patent filing is done through BIPA.',
    'IP licensing allows third parties to use protected IP under defined terms.',
  ]),

  m(64, 'fundamentals', 'Capstone: A Year in the Life of a Namibian SME', 'A complete 12-month walk through the compliance, tax, and operational rhythm of a Namibian SME.', 'Advanced', 22, 110,
    ['Build a 12-month compliance calendar', 'Integrate tax, governance, and operational cycles', 'Identify the three most common failure modes'],
    `The capstone module is a complete 12-month walk through a fictional Namibian SME, showing how the tax, governance, and operational cycles interlock. The module ends with the three most common failure modes: missed annual returns, payroll under-withholding, and missed BO updates.`,
  [
    'A 12-month compliance calendar integrates tax, governance, and operational cycles.',
    'Annual return filings are the most common missed obligation.',
    'Payroll under-withholding is a common failure mode.',
    'Missed BO updates are a common failure mode.',
    'The three most common failure modes are missed annual returns, payroll errors, and missed BO updates.',
  ]),
]

// ─── XP / Dashboard Helpers ──────────────────────────────────
export const TOTAL_XP = MODULES.reduce((sum, m) => sum + m.xp, 0)
export const TOTAL_MODULES = MODULES.length // 64
export const TOTAL_TRACKS = TRACKS.length // 3

export function modulesByTrack(trackId: TrackId): Module[] {
  return MODULES.filter(m => m.trackId === trackId)
}

export function trackStats(trackId: TrackId) {
  const mods = modulesByTrack(trackId)
  return {
    moduleCount: mods.length,
    totalXp: mods.reduce((sum, m) => sum + m.xp, 0),
    totalMinutes: mods.reduce((sum, m) => sum + m.duration, 0),
  }
}

export function getModuleBySlug(slug: string): Module | undefined {
  return MODULES.find(m => m.slug === slug)
}

export function getModuleById(id: string): Module | undefined {
  return MODULES.find(m => m.id === id)
}

export function getTrackById(id: TrackId): Track | undefined {
  return TRACKS.find(t => t.id === id)
}
