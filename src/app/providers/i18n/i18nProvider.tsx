import {I18nextProvider} from 'react-i18next';
import {ReactNode} from 'react';
import i18next from './config';

export function I18nProvider({ children }: ReactNode) {
    return <I18nextProvider i18n={i18next} defaultNS={'translation'}>{children}</I18nextProvider>
}