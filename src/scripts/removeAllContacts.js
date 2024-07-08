import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const removeAllContacts = async () => {
  try {
    await fs.writeFile(PATH_DB, JSON.stringify([], undefined, 2), 'utf8');
    console.log('The data has been deleted');
  } catch (error) {
    console.log('Error:', error);
  }
};

removeAllContacts();
