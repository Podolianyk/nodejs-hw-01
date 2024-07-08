import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const countContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    const currentContacts = JSON.parse(data);
    const lengthCurrentContacts = currentContacts.length;
    // console.log('Lenght of array is:', lengthCurrentContacts);
    return lengthCurrentContacts;
  } catch (error) {
    console.log('Error:', error);
  }
};

console.log(await countContacts());
