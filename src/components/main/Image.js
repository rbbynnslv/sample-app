import React, { useState, useEffect } from 'react';
import { StyledComponent } from '../styles/styles';
import { Button, LinearProgress } from '@material-ui/core';

const Images = ({ size, search }) => {
  const [src, setSrc] = useState(null);
  const [loading, setLoading] = useState(true);

  const updateImage = () => {
    const baseUrl = 'https://source.unsplash.com';
    const route = search === '' ? '/random' : '/featured';
    const url = `${baseUrl}${route}/400x400?${search}`;
    fetch(url).then(response => setSrc(response.url), setLoading(true));
  };

  useEffect(() => {
    updateImage();
  }, [size, search, updateImage]);

  return (
    <StyledComponent>
      <div className="divLoader">
        {loading ? (
          <LinearProgress color="secondary" className="progress" />
        ) : null}
      </div>
      <div className="divBtn">
        <img src={src} alt="src" />
        <Button
          color="primary"
          variant="contained"
          className="btn"
          onClick={updateImage}
        >
          Click
        </Button>
      </div>
    </StyledComponent>
  );
};

export default Images;
