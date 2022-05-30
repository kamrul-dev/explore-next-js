import React from 'react';
import Link from 'next/link'

const index = ({ users }) => {
    /**
     * for data load in React
     * 1. state to hold the data
     * 2. useEffect , load and save to the state
     * 
     * 
     * * */
    return (
        <div>
            <h2>This is Users Main page: {users.length}</h2>
            {
                users.map(user => <div key={user.id}>
                    <h4>Name: {user.name}
                        <Link href={`/users/${user.id}`}>
                            <button>Explore</button>
                        </Link>
                    </h4>
                </div>)
            }
        </div>
    );
};

export default index;

export async function getStaticProps(context) {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    return {
        props: { users: data }, // will be passed to the page component as props
    }
}