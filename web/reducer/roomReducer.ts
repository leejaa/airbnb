import React, { useReducer } from 'react';
import _ from 'lodash';

export const initialState = {
    houseType: 'apartment',
    houseRadio: 'all',
    convenience: [],
  }

export const roomReducer = (state, action) => {
  switch (action.type) {
    case 'setHouseType': {
      return { ...state, houseType: action.value };
    }
    case 'setHouseRadio': {
        return { ...state, houseRadio: action.value };
    }
    case 'setConvenience': {
        if ( _.includes( state.convenience, action.value ) ) {
            return { ...state, convenience: _.pull( state.convenience, action.value ) };
        } else {
            return { ...state, convenience: _.concat( state.convenience, action.value ) };
        }
    }
    default: {
      throw new Error(`unexpected action.type: ${action.type}`)
    }
  }
}