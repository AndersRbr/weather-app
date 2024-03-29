import { useQuery } from 'react-query';

const useFavorites = location => {
  const { isLoading, data } = useQuery(location && ['location', location], () =>
    fetch(`http://api.weatherapi.com/v1/forecast.json?key=06a59b151a3b482c8ac202441221904&q=${location}&days=8&aqi=no&alerts=no
      `).then(res => res.json())
  );
  return { isLoading, data };
};

export default useFavorites;
