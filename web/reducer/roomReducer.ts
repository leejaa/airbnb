import React, { useReducer } from 'react';
import _ from 'lodash';

export const initialState = {
    houseType: 'apartment',
    houseRadio: 'all',
    convenience: [],
    lat: 0,
    lng: 0,
    address: [],
    postCode: '',
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
    case 'setLng': {
      return { ...state, lng: action.value };
    }
    case 'setLat': {
      return { ...state, lat: action.value };
    }
    case 'setAddress': {
      return { ...state, address: action.value };
    }
    case 'setPostcode': {
      return { ...state, postCode: action.value };
    }
    default: {
      throw new Error(`unexpected action.type: ${action.type}`)
    }
  }
}