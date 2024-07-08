import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const removeLastContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    const currentContacts = JSON.parse(data);
    console.log(currentContacts);
    currentContacts.pop();
    fs.writeFile(
      PATH_DB,
      JSON.stringify(currentContacts, undefined, 2),
      'utf8',
    );
    console.log('Last contact has been deleted');
  } catch (error) {
    console.log('Error:', error);
  }
};

removeLastContact();
