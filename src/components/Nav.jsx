
import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants';

function Nav() {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
        <nav className="flex justify-between items-center max-container">
            <a href="/">
                <img src={headerLogo} alt="Logo" width={140} height={30} />
            </a>
            <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
                {
                    navLinks.map((item) => (
                        <li key={item.id}>
                            <a href={item.href} title={item.label} className="font-montserrat leading-normal text-lg text-slate-gray">
                                {item.label}
                            </a>
                        </li>
                    ))
                }
            </ul>
            <div className="hidden max-lg:block">
                <img src={hamburger} alt="hamburger" width={25} height={25} />
            </div>
        </nav>
    </header>
  )
}

export default Nav;