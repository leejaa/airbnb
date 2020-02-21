import React, { useReducer } from 'react';
import _ from 'lodash';

export const initialState = {
    isModalOpen: false,
    user: {},
    selectRooms: []
}

export const homeReducer = (state, action) => {
  switch (action.type) {
    case 'setIsModalOpen': {
      return { ...state, isModalOpen: action.value };
    }
    case 'setUser': {
      return { ...state, user: action.value };
    }
    case 'setSelectRooms': {
      return { ...state, selectRooms: action.value };
    }
    default: {
      throw new Error(`unexpected action.type: ${action.type}`)
    }
  }
}