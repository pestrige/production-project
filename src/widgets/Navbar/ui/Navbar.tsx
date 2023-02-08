import { classNames } from "shared/lib";
import { AppLink, AppLinkTheme, ThemeSwitcher } from "shared/ui";
import cls from "./Navbar.module.scss";

interface Props {
	className?: string
}

export const Navbar = ({ className }: Props): JSX.Element => {
	return (
	 <nav className={classNames(cls.wrapper, className)}>
		 <ThemeSwitcher/>

		 <ul className={cls.links}>
			 <li className={cls.mainLink}><AppLink to="/" theme={AppLinkTheme.SECONDARY}>Главная</AppLink></li>
			 <li><AppLink to="/about" theme={AppLinkTheme.SECONDARY}>О сайте</AppLink></li>
		 </ul>
	 </nav>
	);
};
