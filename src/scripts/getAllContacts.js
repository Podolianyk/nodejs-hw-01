import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const getAllContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    const arrOfContacts = JSON.parse(data);
    return arrOfContacts;
  } catch (error) {
    console.log('Error:', error);
  }
};

console.log(await getAllContacts());
