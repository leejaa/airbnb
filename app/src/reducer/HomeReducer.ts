import React, { useReducer } from 'react';
import _ from 'lodash';

export const initialState = {
    isModalOpen: false,
}

export const homeReducer = (state, action) => {
  switch (action.type) {
    case 'setIsModalOpen': {
      return { ...state, isModalOpen: action.value };
    }
    default: {
      throw new Error(`unexpected action.type: ${action.type}`)
    }
  }
}