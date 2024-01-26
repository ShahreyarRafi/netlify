"use client"

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AllBooksCard from '../Shared/AllBooksCard';

const BuyAllBooks = () => {

    const [books, setBooks] = useState([]);
    const [fetchData, setFetchData] = useState(true);

    useEffect(() => {
        if (fetchData) {
            const fetchData = async () => {
                try {
                    const response = await axios.get('https://boi-binimoy-server.vercel.app/api/v1/buyBooks');
                    setBooks(response.data);
                } catch (error) {
                    console.error('Error:', error);
                }
            };

            fetchData();
        }

        return () => { };
    }, [fetchData])

    return (
        <div className='bg-[#f0efe3] min-h-[100vh]'>
            <div className="container py-12 mx-auto ">
                <h1 className='text-5xl font-bold text-center mb-10'>All Books</h1>
                <div className='grid grid-cols-6 gap-5'>
                    {
                        books?.map(book => <AllBooksCard key={book?._id} book={book}></AllBooksCard>)
                    }
                </div>
            </div>
        </div>

    );
};

export default BuyAllBooks;