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
