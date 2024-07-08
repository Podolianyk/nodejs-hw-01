import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'UTF8');
    const currentContacts = JSON.parse(data);

    const newContact = createFakeContact();

    currentContacts.push(newContact);

    await fs.writeFile(
      PATH_DB,
      JSON.stringify(currentContacts, undefined, 2),
      'UTF8',
    );
    console.log('Data added to file');
  } catch (error) {
    console.log('Error:', error);
  }
};

addOneContact();
