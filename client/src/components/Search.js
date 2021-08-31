import React, { useState, useEffect } from 'react';
import { useStore } from '../features/store';

export const Search = () => {
  const { setList } = useStore();
  const [text, setText] = useState('');

  useEffect(() => {
    let mounted = true;
    const getIndividuals = async () => {
      const url = `http://localhost:5000/individuals${
        text.length ? `/?text=${text}` : ''
      }`;

      const response = await fetch(url);
      const { results } = await response.json();

      if (mounted) {
        setList(results);
      }
    };

    getIndividuals();
    return () => (mounted = false);
  }, [text, setList]);

  return (
    <div className="row">
      <div className="col s8 push-s2 l6 push-l3">
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setText(e.target.value)}
        />
      </div>
    </div>
  );
};
