import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import StockChart from './components/StockChart';

const stockData = {
  labels: ['2022-01-01', '2022-01-02', '2022-01-03', '2022-01-04'],
  datasets: [
    {
      label: 'Stock Price',
      data: [100, 110, 105, 115],
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    },
  ],
};

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-4">
        <h2 className="text-lg mb-4">Stock Chart</h2>
        <StockChart data={stockData} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
