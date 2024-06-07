import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTiktok, faPinterest } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="bg-LightBeige py-6 px-10 sm:py-0 lg:px-4 text-Brown">
      <div className="container mx-auto flex justify-between items-center px-0 sm:py-4 lg:px-6">
        <div className="text-lg font-semibold">Z-library</div>
        <div className="text-center font-semibold">Copyright</div>
        <div className="flex space-x-4 gap-1 sm:gap-2 lg:gap-4 ">
          <a href="/home" target="_blank" rel="noopener noreferrer" >
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
          <a href="/home" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTiktok} size="lg" />
          </a>
          <a href="/home" target="_blank" rel="noopener noreferrer" >
            <FontAwesomeIcon icon={faPinterest} size="lg" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
