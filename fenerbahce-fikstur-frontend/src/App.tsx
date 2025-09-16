import Header from './components/common/Header';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main className="pt-2">
        <HomePage />
      </main>
    </div>
  );
}

export default App;
