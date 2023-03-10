import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Select } from "shared/ui/Select/Select";
import { Currency } from "../../model/types/currency";

interface CurrencySelectProps {
	className?: string;
	value?: Currency;
	onChange?: (value: Currency, name: string) => void;
	readonly?: boolean;
}

const options = Object.entries(Currency).map(([, value]) => ({ value, content: value }));

export const CurrencySelect = memo(({ className, value, onChange, readonly }: CurrencySelectProps) => {
	const { t } = useTranslation();

	const onChangeHandler = useCallback(
		(value: string, name: string) => {
			onChange?.(value as Currency, name);
		},
		[onChange]
	);

	return (
		<Select
			name="currency"
			className={className}
			label={t("Укажите валюту")}
			options={options}
			value={value}
			onChange={onChangeHandler}
			readonly={readonly}
		/>
	);
});
