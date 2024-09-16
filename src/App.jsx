import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import GrievanceForm from './components/GrievanceForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex justify-center w-full">
        <div className='w-full md:w-[80%] flex'>
          <Navigation />
          <GrievanceForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;