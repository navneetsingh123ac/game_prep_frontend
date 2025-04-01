import React from "react";
import { Link } from 'react-router-dom';
import "../app.css";

const Navbar = () => {
    return (
      <nav className="flex justify-between items-center p-5 bg-blue-900 text-white shadow-lg">
        <h1 className="text-3xl font-extrabold tracking-wide">GamePrep</h1>
        <ul className="flex gap-6 text-lg">
          <li className="cursor-pointer hover:text-gray-300">Home</li>
          <li className="cursor-pointer hover:text-gray-300">Games</li>
          <li className="cursor-pointer hover:text-gray-300">
            <Link to="/login" className="hover:text-gray-300">Login</Link>
          </li>
          <li className="cursor-pointer hover:text-gray-300">
            <Link to="/signup" className="hover:text-gray-300">Sign Up</Link>
          </li>
        </ul>
      </nav>
    );
  };

const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-blue-700 to-purple-700 text-white p-8">
      <h1 className="text-5xl font-bold leading-tight">Learn While You Play!</h1>
      <p className="mt-4 text-xl max-w-2xl">
        Improve your aptitude, general knowledge, and problem-solving skills with fun and interactive games.
      </p>
      <button className="mt-6 px-8 py-4 bg-yellow-400 text-black font-bold text-lg rounded-full hover:bg-yellow-500 shadow-md">
        Start Playing Now
      </button>
    </section>
  );
};

const Features = () => {
  return (
    <section className="p-10 bg-gray-100 text-center">
      <h2 className="text-4xl font-bold text-gray-900">Why Choose GameLearn?</h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 shadow-xl rounded-lg bg-white">
          <h3 className="text-2xl font-semibold">Gamified Learning</h3>
          <p className="mt-3 text-gray-600">Turn studies into exciting challenges and earn rewards.</p>
        </div>
        <div className="p-6 shadow-xl rounded-lg bg-white">
          <h3 className="text-2xl font-semibold">AI-Powered Insights</h3>
          <p className="mt-3 text-gray-600">Get personalized feedback and track your progress.</p>
        </div>
        <div className="p-6 shadow-xl rounded-lg bg-white">
          <h3 className="text-2xl font-semibold">Compete & Collaborate</h3>
          <p className="mt-3 text-gray-600">Challenge friends, join leaderboards, and rank up!</p>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="p-6 bg-blue-900 text-white text-center">
      <p>&copy; 2024 GameLearn. Level Up Your Learning!</p>
    </footer>
  );
};

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
};

export default Home;