import { Reducer } from 'redux';
import { IDidNumbersState } from './types';

const INITIAL_STATE: IDidNumbersState = {
  numbers: [],
};

export const didNumbers: Reducer<IDidNumbersState> = () => {
  return INITIAL_STATE;
};
