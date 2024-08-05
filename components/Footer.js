import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center">
        <p className="mb-4">Creating your perfect mood-based music experience, every time.</p>
        <div className="flex justify-center space-x-4 mb-4">
          <a href="#" className="hover:text-indigo-400 transition duration-300"><FaTwitter /></a>
          <a href="#" className="hover:text-indigo-400 transition duration-300"><FaFacebook /></a>
          <a href="#" className="hover:text-indigo-400 transition duration-300"><FaInstagram /></a>
        </div>
        <p className="text-sm">Quick Links: Coming Soon!</p>
        <p className="mt-4">&copy; 2024 mood2music. All rights reserved.</p>
      </div>
    </footer>
  );
}