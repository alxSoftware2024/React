import { useQuery } from 'react-query';

// Define a fetch function that can be used to fetch data from an API
const fetchData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/postsg');
    return res.json();
};

const ReactQueryExample = () => {
    // Use the useQuery hook to handle data fetching and caching
    const { data, error, isLoading } = useQuery('fetchData', fetchData);

    // Handle loading state
    if (isLoading) return <div>Loading...</div>;
    // Handle error state
    if (error) return <div>{error}</div>;

    // Render the fetched data
    return (
        <div>
            {data.map(item => (
                <div key={item.id}>{item.title}</div>
            ))}
        </div>
    );
};

export default ReactQueryExample;