import React from 'react';

const Blogs = () => {
    return (
        <div className='py-6 bg-white text-black'>
            <h1 className='text-4xl'>This is Blogs section</h1>
            <div className='w-2/4 mx-auto mt-5'>
                <div>
                    <h2 className='text-xl'>1.What is the purpose of react router?</h2>
                    <p className='text-lg'>Ans..React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</p>
                </div>
                <div className='mt-5'>
                    <h2 className='text-xl'>2.How does context api work?</h2>
                    <p className='text-lg'>Ans..The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
                </div>
                <div className='mt-5'>
                    <h2 className='text-xl'>3. What is useRef Hook React!!</h2>
                    <p className='text-lg'>Ans..The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated.</p>
                </div>

            </div>
        </div>
    );
};

export default Blogs;