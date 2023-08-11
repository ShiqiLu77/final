import Record  from '../models/record';
import DailyRecord from '@/models/record-daily';

const baseURI = 'http://localhost:9001';

export const getAll = async (): Promise<Record[]> => {
    console.log('fetching all records');
    const url = '/records';
    const response = await fetch( baseURI + url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const records: Record[] = (await response.json()) as Record[];
    records.forEach((record) => {
        console.log('Record ID:', record._id);
    });
    return records;
}

export const search = async <Record> (url: string, query: any = {} ): Promise<Record[]> => {
    const params: URLSearchParams = new URLSearchParams(query);
    const response = await fetch( baseURI + url + '?' + params, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const records: Record[] = (await response.json()) as Record[];
    return records;
}

export const searchByUid = async <DailyRecord> (url: string, query: any = {} ): Promise<DailyRecord[]> => {
    const params: URLSearchParams = new URLSearchParams(query);
    const response = await fetch( baseURI + url + '?' + params, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const records: DailyRecord[] = (await response.json()) as DailyRecord[];
    return records;
}

export const searchByGid = async <DailyRecord> (url: string, query: any = {} ): Promise<DailyRecord[]> => {
    const params: URLSearchParams = new URLSearchParams(query);
    const response = await fetch( baseURI + url + '?' + params, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const records: DailyRecord[] = (await response.json()) as DailyRecord[];
    return records;
}


// export const create = async (partialRecord: PartialRecord) => {
//     const url = '/records';
//     const response = await fetch(baseURI + url, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(partialRecord),
//     });
  
//     if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     const newRecord: Record = (await response.json()) as Record;
//     return newRecord;
// }

export const remove = async (id: string) => {
    const url = '/records/';
    const response = await fetch(baseURI + url + id, {
        method: 'DELETE',
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
}