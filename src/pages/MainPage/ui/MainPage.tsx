import { memo } from "react";
import { useTranslation } from "react-i18next";

const MainPage = memo((): JSX.Element => {
	const { t } = useTranslation();

	return <div className="page">{t("Главная страница")}</div>;
});

export default MainPage;
