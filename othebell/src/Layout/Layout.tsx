import React from 'react';
import Footer from '../components/Footer';
import Header from './Header';


function Layout(props: {
    children: React.ReactNode
}) {
    return (
        <div className='wrapper'>
            <Header />
            <main className="main-content">
                {props.children}
            </main>
            {/*<Footer />*/}
        </div>
    );
}

export default Layout;
