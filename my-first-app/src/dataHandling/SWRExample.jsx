import useSWR from 'swr';

// Define a fetcher function that can be used to fetch data from an API
const fetcher = (url) => fetch(url).then(res => res.json());

const SWRExample = () => {
    // Use the useSWR hook to handle data fetching and caching
    const { data, error } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher);

    if (error) return <div>Error loading data</div>;
    if (!data) return <div>Loading...</div>;

    return (
        <div>
            {data.map(item => (
                <div key={item.id}>{item.title}</div>
            ))}
        </div>
    );
};

export default SWRExample;