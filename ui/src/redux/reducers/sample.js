import * as actionTypes from '../actionTypes';

let defaultState = {

    // SAMPLE
    sampleInitiated: null,
    sampleSuccess: null,
    sampleFailed: null,

    sampleResults: [
        {
            sample: []
        },
    ],

};


const sampleReducer = (state = defaultState, action) => {
    switch (action.type) {

        case actionTypes.GET_SAMPLE_INITIATE:
            return {
                ...state,
                sampleInitiated: true,
                sampleSuccess: null
            };

        case actionTypes.GET_SAMPLE_SUCCESS:

            return {
                ...state,
                sampleInitiated: false,
                sampleSuccess: true,
                sampleFailed: false,
            };

        case actionTypes.GET_SAMPLE_FAIL:
            return {
                ...state,
                sampleInitiated: false,
                sampleSuccess: false,
                sampleFailed: true
            };

        default:
            return state
    }
};

module.exports = {
    SAMPLE: sampleReducer()
};
