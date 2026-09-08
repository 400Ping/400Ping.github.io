// Pick the content bundle for a language. Both bundles export the same names.
import type { Lang } from '../i18n';
import * as enProfile from './profile';
import * as enOpensource from './opensource';
import * as enMisc from './misc';
import * as zhProfile from './zh-tw/profile';
import * as zhOpensource from './zh-tw/opensource';
import * as zhMisc from './zh-tw/misc';

const BUNDLES = {
  en: { ...enProfile, ...enOpensource, ...enMisc },
  'zh-tw': { ...zhProfile, ...zhOpensource, ...zhMisc },
};

export const getContent = (lang: Lang) => BUNDLES[lang];
