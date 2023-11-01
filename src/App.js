import React from 'react';
import './App.css';

const useSortableData = (items, config = null) => {
  const [sortConfig, setSortConfig] = React.useState(config);

  const sortedItems = React.useMemo(() => {
    let sortableItems = [...items];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (
        sortConfig &&
        sortConfig.key === key &&
        sortConfig.direction === 'ascending'
    ) {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return { items: sortedItems, requestSort, sortConfig };
};

const MyTable = (props) => {
  const { items, requestSort, sortConfig } = useSortableData(props.data);
    console.log(sortConfig);

    const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  }

  return (
      <div className='scroll-table'>
          <table>
            <thead>
            <tr>
              <th>
                <button
                    type="button"
                    onClick={() => requestSort('number')}
                    className={getClassNamesFor('number')}
                >
                    number
                    <svg
                    style={{marginLeft: 5}}
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    viewBox="0 0 6 5"
                    fill={sortConfig?.direction === 'ascending' && sortConfig?.key === 'number' ? '#29277d' : 'none'}
                    >
                        <path
                            opacity="0.3"
                            d="M3.43301 4.25L5.16506 1.25C5.35751 0.916667 5.11695 0.5 4.73205 0.5H1.26795C0.883049 0.5 0.642486 0.916666 0.834936 1.25L2.56699 4.25C2.75944 4.58333 3.24056 4.58333 3.43301 4.25Z"
                            stroke="#29277D"
                            stroke-linejoin="round"
                        />
                     </svg>
                </button>
              </th>
              <th>
                <button
                    type="button"
                    onClick={() => requestSort('developer')}
                    className={getClassNamesFor('developer')}
                >
                  developer
                    <svg
                        style={{marginLeft: 5}}
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="10"
                        viewBox="0 0 6 5"
                        fill={sortConfig?.direction === 'ascending' && sortConfig?.key === 'developer' ? '#29277d' : 'none'}
                    >
                        <path
                            opacity="0.3"
                            d="M3.43301 4.25L5.16506 1.25C5.35751 0.916667 5.11695 0.5 4.73205 0.5H1.26795C0.883049 0.5 0.642486 0.916666 0.834936 1.25L2.56699 4.25C2.75944 4.58333 3.24056 4.58333 3.43301 4.25Z"
                            stroke="#29277D"
                            stroke-linejoin="round"
                        />
                    </svg>
                </button>
              </th>
              <th>
                <button
                    type="button"
                    onClick={() => requestSort('deadline')}
                    className={getClassNamesFor('deadline')}
                >
                    deadline
                    <svg
                        style={{marginLeft: 5}}
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="10"
                        viewBox="0 0 6 5"
                        fill={sortConfig?.direction === 'ascending' && sortConfig?.key === 'deadline'  ? '#29277d' : 'none'}
                    >
                        <path
                            opacity="0.3"
                            d="M3.43301 4.25L5.16506 1.25C5.35751 0.916667 5.11695 0.5 4.73205 0.5H1.26795C0.883049 0.5 0.642486 0.916666 0.834936 1.25L2.56699 4.25C2.75944 4.58333 3.24056 4.58333 3.43301 4.25Z"
                            stroke="#29277D"
                            stroke-linejoin="round"
                        />
                    </svg>
                </button>
              </th>
                <th>
                    <button
                        type="button"
                        onClick={() => requestSort('type')}
                        className={getClassNamesFor('type')}
                    >
                        type
                        <svg
                            style={{marginLeft: 5}}
                            xmlns="http://www.w3.org/2000/svg"
                            width="10"
                            height="10"
                            viewBox="0 0 6 5"
                            fill={sortConfig?.direction === 'ascending' && sortConfig?.key === 'type' ? '#29277d' : 'none'}
                        >
                            <path
                                opacity="0.3"
                                d="M3.43301 4.25L5.16506 1.25C5.35751 0.916667 5.11695 0.5 4.73205 0.5H1.26795C0.883049 0.5 0.642486 0.916666 0.834936 1.25L2.56699 4.25C2.75944 4.58333 3.24056 4.58333 3.43301 4.25Z"
                                stroke="#29277D"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </button>
                </th>
                <th>
                    <button
                        type="button"
                        onClick={() => requestSort('storey')}
                        className={getClassNamesFor('storey')}
                    >
                        floor
                        <svg
                            style={{marginLeft: 5}}
                            xmlns="http://www.w3.org/2000/svg"
                            width="10"
                            height="10"
                            viewBox="0 0 6 5"
                            fill={sortConfig?.direction === 'ascending' && sortConfig?.key === 'storey'  ? '#29277d' : 'none'}
                        >
                            <path
                                opacity="0.3"
                                d="M3.43301 4.25L5.16506 1.25C5.35751 0.916667 5.11695 0.5 4.73205 0.5H1.26795C0.883049 0.5 0.642486 0.916666 0.834936 1.25L2.56699 4.25C2.75944 4.58333 3.24056 4.58333 3.43301 4.25Z"
                                stroke="#29277D"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </button>
                </th>
                <th>
                    <button
                        type="button"
                        onClick={() => requestSort('square')}
                        className={getClassNamesFor('square')}
                    >
                        square
                        <svg
                            style={{marginLeft: 5}}
                            xmlns="http://www.w3.org/2000/svg"
                            width="10"
                            height="10"
                            viewBox="0 0 6 5"
                            fill={sortConfig?.direction === 'ascending' && sortConfig?.key === 'square'  ? '#29277d' : 'none'}
                        >
                            <path
                                opacity="0.3"
                                d="M3.43301 4.25L5.16506 1.25C5.35751 0.916667 5.11695 0.5 4.73205 0.5H1.26795C0.883049 0.5 0.642486 0.916666 0.834936 1.25L2.56699 4.25C2.75944 4.58333 3.24056 4.58333 3.43301 4.25Z"
                                stroke="#29277D"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </button>
                </th>
            </tr>
            </thead>
          </table>
          <div className='scroll-table-body'>
              <table>
                <tbody>
                {items.map((item) => (
                    <tr key={item.id}>
                      <td>{item.number}</td>
                      <td>${item.developer}</td>
                      <td>{item.deadline}</td>
                      <td>{item.type}</td>
                      <td>{item.storey}</td>
                      <td>{item.square}</td>
                    </tr>
                ))}
                </tbody>
              </table>
          </div>
      </div>
  );
};

export default function App() {
  return (
      <div className="App">
        <MyTable
            data={[
                {
                    id: 1,
                    number: 421,
                    developer: 'PRINZIP',
                    deadline: '2005-08-09T18:31:42',
                    type: 'Студия',
                    storey: 2,
                    square: 100.3
                },
                {
                    id: 2,
                    number: 73,
                    developer: 'Брусника',
                    deadline: '2005-08-09T18:31:42',
                    type: '2-к',
                    storey: 2,
                    square: 10.3
                },
                {
                    id: 3,
                    number: 122,
                    developer: 'TEN',
                    deadline: '2005-08-09T18:31:42',
                    type: '3-к',
                    storey: 2,
                    square: 103
                },
                {
                    id: 4,
                    number: 1,
                    developer: 'PRINZIP',
                    deadline: '2005-08-09T18:31:42',
                    type: 'Студия',
                    storey: 2,
                    square: 100.3
                },
                {
                    id: 5,
                    number: 72,
                    developer: 'Брусника',
                    deadline: '2005-08-09T18:31:42',
                    type: '2-к',
                    storey: 2,
                    square: 10.3
                },
                {
                    id: 6,
                    number: 23,
                    developer: 'TEN',
                    deadline: '2005-08-09T18:31:42',
                    type: '3-к',
                    storey: 2,
                    square: 103
                },
                {
                    id: 7,
                    number: 5,
                    developer: 'PRINZIP',
                    deadline: '2005-08-09T18:31:42',
                    type: 'Студия',
                    storey: 2,
                    square: 100.3
                },
                {
                    id: 8,
                    number: 2,
                    developer: 'Брусника',
                    deadline: '2005-08-09T18:31:42',
                    type: '2-к',
                    storey: 2,
                    square: 10.3
                },
                {
                    id: 9,
                    number: 97,
                    developer: 'TEN',
                    deadline: '2005-08-09T18:31:42',
                    type: '3-к',
                    storey: 2,
                    square: 103
                },
                {
                    id: 10,
                    number: 34,
                    developer: 'PRINZIP',
                    deadline: '2005-08-09T18:31:42',
                    type: 'Студия',
                    storey: 2,
                    square: 100.3
                },
                {
                    id: 11,
                    number: 1,
                    developer: 'Брусника',
                    deadline: '2005-08-09T18:31:42',
                    type: '2-к',
                    storey: 2,
                    square: 10.3
                },
                {
                    id: 12,
                    number: 88,
                    developer: 'TEN',
                    deadline: '2005-08-09T18:31:42',
                    type: '3-к',
                    storey: 2,
                    square: 103
                }
            ]}
        />
      </div>
  );
}

