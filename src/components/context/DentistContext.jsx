import React, { createContext, useReducer } from 'react';

// Definición del estado inicial
const initialState = {
  favorites: []
};

// Definición del reducer
const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      };
    case 'REMOVE_FAVORITE':
      return {
        ...state,
        favorites: state.favorites.filter(favorite => favorite !== action.payload)
      };
    default:
      return state;
  }
};

// Creación del contexto
export const DentistContext = createContext();

// Componente proveedor del contexto
export const DentistProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Acciones para agregar y eliminar favoritos
  const addFavorite = favorite => {
    dispatch({ type: 'ADD_FAVORITE', payload: favorite });
    console.log(state);
  };

  const removeFavorite = favorite => {
    dispatch({ type: 'REMOVE_FAVORITE', payload: favorite });
  };

  return (
    <DentistContext.Provider
      value={{
        state,
        addFavorite,
        removeFavorite
      }}
    >
      {children}
    </DentistContext.Provider>
  );
};
