import { FaFacebook, FaInstagram } from 'react-icons/fa';

const Header = () => {
  return (
    <nav class="Nav fixed top-0 w-full bg-gray-300 bg-opacity-50 backdrop-filter backdrop-blur-lg">
      <div class="flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" class="flex items-center">
          <span class="self-center text-2xl font-semibold whitespace-nowrap" id="Brand">The Up Project</span>
        </a>
        <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
          <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
            <li>
              <a href="#" class="block py-2 pl-3 pr-4 text-black font-bold bg-transparent rounded text-xl" aria-current="page">Stories</a>
            </li>
          </ul>
        </div>
        <div class="flex items-center md:order-2 mr-4 md:mr-12">
          <a href="https://www.facebook.com/profile.php?id=100064290565646" target="_blank" rel="noopener noreferrer" class="text-xl mr-2">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/theupprojectorg/" target="_blank" rel="noopener noreferrer" class="text-xl">
            <FaInstagram />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;