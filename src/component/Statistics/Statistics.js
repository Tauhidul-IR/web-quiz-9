import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const data = useLoaderData();
    // console.log(data.data)

    return (
        <div className='bg-white'>
            <h1>This is Statistics page</h1>
            <div>
                <LineChart width={500} height={500} data={data.data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <Line connectNulls type="monotone" dataKey="total" stroke="#8884d8" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip></Tooltip>

                </LineChart>
            </div>
        </div>
    );
};

export default Statistics;