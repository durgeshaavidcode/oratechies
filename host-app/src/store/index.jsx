import { configureStore} from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import CandidateSearchSlice from '../views/candidate/dashboard/slice/CandidateSearch.slice';

export const store = configureStore({
  reducer: {
    CandidateSearchSlice,
  },
});

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;