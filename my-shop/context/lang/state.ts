'use client'
import { AllowedLangs } from '@/constants/lang'
import { lang, setLang } from '.'

export const $lang = lang
  .createStore(AllowedLangs.UK)
  .on(setLang, (_, lang) => lang)
