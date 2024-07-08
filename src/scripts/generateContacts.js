import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  try {
    const data = await fs.readFile(PATH_DB, 'UTF8');
    const currentContacts = JSON.parse(data);

    const newContacts = [];
    for (let i = 0; i < number; i++) {
      newContacts.push(createFakeContact());
    }
    const newContactsData = [...currentContacts, ...newContacts];

    await fs.writeFile(
      PATH_DB,
      JSON.stringify(newContactsData, undefined, 2),
      'UTF8',
    );
    console.log('Data added to file');
  } catch (error) {
    console.log('Error:', error);
  }
};

generateContacts(3);
