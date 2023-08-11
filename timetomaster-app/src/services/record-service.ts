import  {getAll, search} from './record-rest-service';

import Record from '../models/record';
// import PartialRecord from "../models/record-update";

export const getAllRecord = async () => {
  const records = await getAll();
  return records;
}

// export const createRecord = async (partialRecord: PartialRecord) => {
//   const record = await create(partialRecord);
//   return record;
// }

// export const updateRecord = async (id: string, partialRecord: PartialRecord) => {
//   const record = await update(id, partialRecord);
//   return record;
// }

// export const deleteRecord = async (id: string) => {
//   remove(id);
// }


export const searchRecord = async <Record> (buttonLabel: string): Promise<Record[]> => {
  let url = '';
  let uid = '123456'
  const query: any = {};

  if( buttonLabel === 'All') {
      url = '/records/user/' + uid;
  } else if(buttonLabel === 'Half Done') {
      url = '/records/search/progress';
      query.uid = uid;
      query.start = 0;
      query.end = 0.5;
  } else if(buttonLabel === 'Nearly Done') {
      url = '/records/search/progress';
      query.uid = uid;
      query.start = 0.5;
      query.end = 0.99;
  } else if(buttonLabel === 'Completed') {
    url = '/records/search/progress';
    query.uid = uid;
    query.start = 0.99;
    query.end = 1.001;
}

  const records = await search<Record>(url, query);
  return records;
}