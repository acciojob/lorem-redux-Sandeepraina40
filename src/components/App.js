import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLorem } from './loremSlice';

function App() {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.lorem);

  useEffect(() => {
    dispatch(fetchLorem());
  }, [dispatch]);

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
      <h1>Lorem Redux</h1>
      {loading && <p>Loading content...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {data && (
        <>
          <p>{data.title}</p>
          <p>{data.body}</p>
        </>
      )}
    </div>
  );
}

export default App;
