import React, { useEffect } from 'react';
import { useStore } from '../features/store';

export const ItemList = () => {
  const { list, setList } = useStore();

  useEffect(() => {
    let mounted = true;
    const getIndividuals = async () => {
      const response = await fetch('http://localhost:5000/individuals');
      const { results } = await response.json();

      if (mounted) {
        setList(results);
      }
    };

    getIndividuals();
    return () => (mounted = false);
  }, [setList]);

  return (
    <>
      <div className="row">
        <div className="col s8 push-s2 l6 push-l3">
          <table className="highlight" data-testid="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Specialty</th>
              </tr>
            </thead>
            <tbody>
              {list.map((individual, index) => {
                return (
                  <tr key={index} data-testid={`row-${index}`}>
                    <td>{individual.name}</td>
                    <td>{individual.specialty}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
