// import React from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
// import AuthProvider from './contexts/AuthContext';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import Routes from './routes'; // Assuming you have a routes.js file for routing

// const App = () => {
//     return (
//         <AuthProvider>
//             <Router>
//                 <Header />
//                 <Routes />
//                 <Footer />
//             </Router>
//         </AuthProvider>
//     );
// };

// export default App;

// App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes'; // Importing routes
import Header from './components/Header'; // Header component
import Footer from './components/Footer'; // Footer component
import './styles/App.css'; // Global styles

const App = () => {
    return (
        <Router>
            <div className="App">
                <Header />
                <main>
                    <Routes /> {/* Main routes for the app */}
                </main>
                <Footer />
            </div>
        </Router>
    );
};

export default App;

