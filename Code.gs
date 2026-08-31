const SPREADSHEET_ID = '1h-dYEoxdH4fNKCHBUCO5I0rIw-N70c5dIgPJMm7JGds';
const SHEET_NAME = 'Sheet1';
const SOURCE = 'tideandfinch.com';
const SUCCESS_MESSAGE = "You're on the list — we'll be in touch.";

function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('Tide and Finch')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1, viewport-fit=cover')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function doPost(e) {
  const result = addSubscriber_(e && e.parameter ? e.parameter.email : '');
  return ContentService.createTextOutput(JSON.stringify(result))
    .setMimeType(ContentService.MimeType.JSON);
}

function addSubscriber(email) {
  return addSubscriber_(email);
}

function addSubscriber_(rawEmail) {
  try {
    const email = String(rawEmail || '').trim().toLowerCase();
    if (!isValidEmail_(email)) {
      return { ok: false, message: 'Please enter a valid email address.' };
    }

    const lock = LockService.getScriptLock();
    lock.waitLock(10000);
    try {
      const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(SHEET_NAME);
      if (!sheet) throw new Error('Sheet1 was not found.');
      sheet.appendRow([email, new Date(), SOURCE]);
    } finally {
      lock.releaseLock();
    }

    return { ok: true, message: SUCCESS_MESSAGE };
  } catch (error) {
    console.error(error);
    return { ok: false, message: 'We could not add you just now. Please try again.' };
  }
}

function isValidEmail_(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length <= 254;
}
