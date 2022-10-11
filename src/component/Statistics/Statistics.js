import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const data = useLoaderData();
    // console.log(data.data)

    return (
        <div className='bg-white'>
            <h1 className='text-black text-3xl py-6'>This is Statistics page</h1>
            <div>

                <div style={{ width: '100%' }}>
                    <ResponsiveContainer width="100%" height={200}>
                        <LineChart
                            width={500}
                            height={200}
                            data={data.data}
                            margin={{
                                top: 10,
                                right: 30,
                                left: 0,
                                bottom: 0,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Line type="monotone" dataKey="total" stroke="#8884d8" fill="#8884d8" />
                        </LineChart>
                    </ResponsiveContainer>


                </div>
            </div>
        </div>
    );
};

export default Statistics;