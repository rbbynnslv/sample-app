import React, { useReducer, useEffect } from 'react';
import { LinearProgress, Card, Paper } from '@material-ui/core';
import { StyledComponent } from '../styles/styles';

const initialState = {
  data: [],
  loading: true
};

function Reducer(state, action) {
  switch (action.type) {
    case 'FETCHED-DATA': {
      return {
        ...state,
        data: action.data,
        loading: false
      };
    }
    default:
      return state;
  }
}

const Fetch = () => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  useEffect(() => {
    fetch('https://ghibliapi.herokuapp.com/films')
      .then(res => res.json())
      .then(data => {
        setTimeout(() => {
          dispatch({
            type: 'FETCHED-DATA',
            data
          });
        }, 5000);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <StyledComponent>
      <div className="divLoader">
        {state.loading && (
          <LinearProgress color="secondary" className="progress" />
        )}
      </div>
      <>
        {state.data.map(film => (
          <Card className="card" component={Paper}>
            <h4 key={film.id}>
              <em>Ghibli Film:</em>
            </h4>
            {film.title}
          </Card>
        ))}
      </>
    </StyledComponent>
  );
};

export default Fetch;
