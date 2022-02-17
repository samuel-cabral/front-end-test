import { Reducer } from 'redux';
import { IDidsState } from './types';

const INITIAL_STATE: IDidsState = {
  dids: [],
};

export const dids: Reducer<IDidsState> = () => {
  return INITIAL_STATE;
};
