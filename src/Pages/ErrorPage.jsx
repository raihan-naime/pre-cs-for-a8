import React from 'react';
import { useRouteError } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const ErrorPage = () => {

    const error = useRouteError();
  return <>
  <Navbar></Navbar>
  <div>{error.message}</div>
  <Footer></Footer>
  </>
    // return (
    //     <div className='flex justify-center bg-red-300 h-[100vh] items-center'>
    //         <h1 className='font-semibold text-3xl'>404 Page Not Found</h1>
    //     </div>
    // );
};

export default ErrorPage;