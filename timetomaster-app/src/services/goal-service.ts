import  {getAll, create, search, update, remove} from './rest-service';

import Goal  from '../models/goal';
import PartialGoal from "../models/goal-update";

export const getAllGoal = async () => {
  const goals = await getAll();
  return goals;
}

export const createGoal = async (partialGoal: PartialGoal) => {
  const goal = await create(partialGoal);
  return goal;
}

export const updateGoal = async (id: string, partialGoal: PartialGoal) => {
  const goal = await update(id, partialGoal);
  return goal;
}

export const deleteGoal = async (id: string) => {
  remove(id);
}


export const searchGoal = async <Goal> (buttonLabel: string): Promise<Goal[]> => {
  let url = '';
  let uid = '123456'
  const query: any = {};

  if( buttonLabel === 'All') {
      url = '/goals/user/' + uid;
  } else if(buttonLabel === 'Half Done') {
      url = '/goals/search/progress';
      query.uid = uid;
      query.start = 0;
      query.end = 50;
  } else if(buttonLabel === 'Nearly Done') {
      url = '/goals/search/progress';
      query.uid = uid;
      query.start = 50;
      query.end = 99;
  } else if(buttonLabel === 'Completed') {
    url = '/goals/search/progress';
    query.uid = uid;
    query.start = 99;
    query.end = 101;
}

  const goals = await search<Goal>(url, query);
  return goals;
}