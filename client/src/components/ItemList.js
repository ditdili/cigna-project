import React, { useEffect } from 'react';
import { useStore } from '../features/store';

export const ItemList = () => {
  const { list, setList } = useStore();

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
              <tr>
                <td>Test Name</td>
                <td>Test Specialty</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
