import { useState, useEffect } from 'react';

let c = 1;
export default () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    console.log('list', list);
    list.push({
      id: c,
    });
    setList(list);

    const interval = setInterval(() => {
      list.push({
        id: c,
      });
      setList(list);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {});

  return {
    list,
    c: c++,
  };
};
