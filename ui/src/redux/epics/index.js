import { combineEpics } from 'redux-observable';
import {
    getSampleEpic
} from '../epics/sample';

export default combineEpics(
    getSampleEpic,
);
