import * as actionTypes from '../actionTypes';
import { Observable } from 'rxjs/Observable';


const getSampleParams = payload => {
    let url = payload.params.url

    return {
        method: "GET",
        url: url,
        async: true
    }
};


export const getSampleEpic = action$ => action$
    .ofType(actionTypes.GET_SAMPLE_INITIATE)
    .map(payload => getSampleParams(payload))
    .switchMap((params) =>
        Observable.ajax(params)
            .map(res => res.response)
            .map(response => ({
                type: actionTypes.GET_SAMPLE_SUCCESS,
                data: response.items
                })
            )
            .catch(err => Observable.of({
                type: actionTypes.GET_SAMPLE_FAIL,
                payload: {
                    error: err,
                },
            }))
);
