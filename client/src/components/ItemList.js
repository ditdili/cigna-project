import React from 'react';
import { useStore } from '../features/store';

export const ItemList = () => {
  const { list } = useStore();

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
