export type ThemeName = 'light' | 'dark' | 'medium';

// @NOTE: Я выпилил браши, в связи с задачей:
// MAY9-382 - Привести фон к одному цвету, пока не реализованы слайды.
// Чтобы вернуть - нужно аккуратно будет ревертнуть коммит по этой задаче.

export interface SingleTheme {
    colorBackgroundLighten: string; // Всякие инпуты/комбики
    colorBackground: string; // Основной цвет
    colorBackgroundDarken: string; // Боковушки
    colorText: string;
    colorTextAccented: string; // Текст для Primary-кнопочек
    colorBackgroundAccented: string; // Primary-Кнопочки
    colorMainHeader: string; // Заголовок страницы
    colorBackgroundSaveButton: string; // Bg для кнопки опубликовать
    colorBackgroundHoverSaveButton: string; // Bg для кнопки опубликовать при наведении
    colorBackgroundFocusSaveButton: string; // Bg для кнопки опубликовать при нажатии
    colorBackgroundInput: string; // Bg для инпутов
    colorBackgroundInputHover: string; // Bg для инпутов опубликовать при наведении
    colorBackgroundInputFocus: string; // Bg для инпутов опубликовать при нажатии
    colorBackgroundCombo: string; // Bg для селекта
    colorComboMenu: string; // Текст для селекта в меню
    colorComboMenuHover: string; // Текст для селекта в меню при наведении
    colorComboMenuItemBackgroundHover: string; // Bg для элемента селекта в меню при наведении
    colorProgressbarBackground: string; // Bg для прогрессбара заполненности истории (моб.)
    colorProgressbarWrapperBackground: string; // Bg для прогрессбара заполненности истории (моб.)
    colorMobileMenuBackground: string; // Bg для меню (моб.)
    colorBackgroundNavIcon: string; // Bg для икнонок в правой части главной навигации
    colorHeaderBackground: string; // Bg для главного хэдера
}

export enum ThemeNames {
    dark = 'dark',
    light = 'light',
    medium = 'medium',
}

type EnumedDict<Y extends string, T> = { [P in Y]: T };

export const Themes: EnumedDict<ThemeName, SingleTheme> = {
    [ThemeNames.dark]: {
        colorBackgroundLighten: 'rgba(255, 255, 255, 0.1)',
        colorBackground: '#224036',
        colorBackgroundDarken: '#122F29',
        colorText: '#F1F1DE',
        colorTextAccented: '#304F45',
        colorBackgroundAccented: '#F1F1DE',
        colorMainHeader: '#304F45',
        colorBackgroundSaveButton: '#F1F1DE',
        colorBackgroundHoverSaveButton: '#EBEBD2',
        colorBackgroundFocusSaveButton: '#F7F7ED',
        colorBackgroundInput: 'rgba(255, 255, 255, 0.1)',
        colorBackgroundInputHover: 'rgba(255, 255, 255, 0.16)',
        colorBackgroundInputFocus: 'rgba(255, 255, 255, 0.32)',
        colorBackgroundCombo: '#F1F1DE',
        colorComboMenu: '#304f458f',
        colorComboMenuHover: '#304F45',
        colorComboMenuItemBackgroundHover: '#EBEBD2',
        colorProgressbarBackground: '#122F29',
        colorProgressbarWrapperBackground: 'rgba(241, 241, 222, 0.32)',
        colorMobileMenuBackground: '#122F29',
        colorBackgroundNavIcon: 'rgba(241, 241, 222, 0.32)',
        colorHeaderBackground: '#122F29',
    },
    [ThemeNames.light]: {
        colorBackgroundLighten: 'rgba(255, 255, 255, 0.16)',
        colorBackground: '#D1CBB4',
        colorBackgroundDarken: '#C6C1A7',
        colorText: '#304F45',
        colorTextAccented: '#F1F1DE',
        colorBackgroundAccented: '#304F45',
        colorMainHeader: '#304F45',
        colorBackgroundSaveButton: '#304F45',
        colorBackgroundHoverSaveButton: '#29473D',
        colorBackgroundFocusSaveButton: '#395A50',
        colorBackgroundInput: 'rgba(255, 255, 255, 0.1)',
        colorBackgroundInputHover: 'rgba(255, 255, 255, 0.16)',
        colorBackgroundInputFocus: 'rgba(255, 255, 255, 0.32)',
        colorBackgroundCombo: '#F1F1DE',
        colorComboMenu: '#304f458f',
        colorComboMenuHover: '#304F45',
        colorComboMenuItemBackgroundHover: '#EBEBD2',
        colorProgressbarBackground: '#C6C1A7',
        colorProgressbarWrapperBackground: 'rgba(241, 241, 222, 0.32)',
        colorMobileMenuBackground: '#C6C1A7',
        colorBackgroundNavIcon: 'rgba(48, 79, 69, 0.32)',
        colorHeaderBackground: '#C6C1A7',
    },
    [ThemeNames.medium]: {
        colorBackgroundLighten: 'rgba(255, 255, 255, 0.16)',
        colorBackground: '#5F784D',
        colorBackgroundDarken: '#586D49',
        colorText: '#F1F1DE',
        colorTextAccented: '#4B5F3D',
        colorBackgroundAccented: '#F1F1DE',
        colorMainHeader: '#304F45',
        colorBackgroundSaveButton: '#F1F1DE',
        colorBackgroundHoverSaveButton: '#EBEBD2',
        colorBackgroundFocusSaveButton: '#F7F7ED',
        colorBackgroundInput: 'rgba(255, 255, 255, 0.1)',
        colorBackgroundInputHover: 'rgba(255, 255, 255, 0.16)',
        colorBackgroundInputFocus: 'rgba(255, 255, 255, 0.32)',
        colorBackgroundCombo: '#F1F1DE',
        colorComboMenu: '#304f458f',
        colorComboMenuHover: '#304F45',
        colorComboMenuItemBackgroundHover: '#EBEBD2',
        colorProgressbarBackground: '#445836',
        colorProgressbarWrapperBackground: 'rgba(241, 241, 222, 0.32)',
        colorMobileMenuBackground: '#5F784D',
        colorBackgroundNavIcon: 'rgba(241, 241, 222, 0.32)',
        colorHeaderBackground: '#445836',
    },
};
