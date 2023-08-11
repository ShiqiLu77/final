import { create, getAll, search, searchByUid } from './record-rest-service';
import Record  from '@/models/record';
import DailyRecord from '@/models/record-daily';
import RecordCreate from '@/models/record-create';

export const createRecord = async (record: RecordCreate) => {
  const goal = await create(record);
  return goal;
}

export const getAllRecord = async () => {
  const records = await getAll();
  return records;
}

export const searchRecord = async (buttonLabel: string): Promise<Record[]> => {
  let url = '';
  let uid = '123456'
  const query: any = {};

  if (buttonLabel === 'All') {
    url = '/records/user/' + uid;
  } else if (buttonLabel === 'Half Done') {
    url = '/records/search/progress';
    query.uid = uid;
    query.start = 0;
    query.end = 0.5;
  } else if (buttonLabel === 'Nearly Done') {
    url = '/records/search/progress';
    query.uid = uid;
    query.start = 0.5;
    query.end = 0.99;
  } else if (buttonLabel === 'Completed') {
    url = '/records/search/progress';
    query.uid = uid;
    query.start = 0.99;
    query.end = 1.001;
  }

  const records = await search<Record>(url, query);
  return records;
}

export const getDailyByUid = async (): Promise<DailyRecord[]> => {
  let url = '/records/userSearch/dailyTime';
  let uid = 'user123'
  const query: any = {};
  query.uid = uid;

  const records = await searchByUid<DailyRecord>(url, query);
  return records;
}

export const getWeeklyByUid = async (): Promise<DailyRecord[]> => {
  let url = '/records/userSearch/weeklyTime';
  let uid = 'user123'
  const query: any = {};
  query.uid = uid;

  const records = await searchByUid<DailyRecord>(url, query);
  return records;
}

export const getMonthlyByUid = async (): Promise<DailyRecord[]> => {
  let url = '/records/userSearch/monthlyTime';
  let uid = 'user123'
  const query: any = {};
  query.uid = uid;

  const records = await searchByUid<DailyRecord>(url, query);
  return records;
}

export const getDailyByGid = async (): Promise<DailyRecord[]> => {
  let url = '/records/search/dailyTime';
  let gid = '64d43ffdad5f3e8dae997d7a'
  const query: any = {};
  query.gid = gid;

  const records = await searchByUid<DailyRecord>(url, query);
  return records;
}

export const getWeeklyByGid = async (): Promise<DailyRecord[]> => {
  let url = '/records/search/weeklyTime';
  let gid = '64d43ffdad5f3e8dae997d7a'
  const query: any = {};
  query.gid = gid;

  const records = await searchByUid<DailyRecord>(url, query);
  return records;
}

export const getMonthlyByGid = async (): Promise<DailyRecord[]> => {
  let url = '/records/search/weeklyTime';
  let gid = '64d43ffdad5f3e8dae997d7a'
  const query: any = {};
  query.gid = gid;

  const records = await searchByUid<DailyRecord>(url, query);
  return records;
}