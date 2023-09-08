import { FaFacebook, FaInstagram } from 'react-icons/fa';

const Header = () => {
  return (
    <nav class="backdrop-filter backdrop-blur h-16 font-semibold text-lg after:absolute after:inset-x-0 after:w-full after:h-12 after:shadow-hr after:z-[-1]">
      <div className="flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://www.facebook.com/profile.php?id=100064290565646" className="flex items-center">
          <span className="self-center text-2xl font-semibold whitespace-nowrap" id="Brand">TheUpProject</span>
        </a>

        <div className="flex items-center md:order-2 mr-4 md:mr-12">
          <a href="https://www.facebook.com/profile.php?id=100064290565646" target="_blank" rel="noopener noreferrer" className="text-xl mr-2">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/theupprojectorg/" target="_blank" rel="noopener noreferrer" className="text-xl">
            <FaInstagram />
          </a>
        </div>

      </div>
    </nav>
  );
};

export default Header;