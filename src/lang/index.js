import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Cookies from 'js-cookie'
import elementEnLocale from 'element-ui/lib/locale/lang/en' // element-ui lang
import elementZhLocale from 'element-ui/lib/locale/lang/zh-CN'// element-ui lang
import elementViLocale from 'element-ui/lib/locale/lang/vi'// element-ui lang
import locale from 'element-ui/lib/locale'
import enLocale from './en'
import zhLocale from './zh'
import esLocale from './es'
import jaLocale from './ja'
import $ from 'jquery'
import api from '@/api/system'

Vue.use(VueI18n)

const messages = {
  en: {
    ...enLocale,
    ...elementEnLocale
  },
  zh: {
    ...zhLocale,
    ...elementZhLocale
  },
  vn: {
    ...esLocale,
    ...elementViLocale
  }
}
// api.getlanguage({
//   type:'zh'
// }).then(data=>{
//   console.log(data)
//   // let str = JSON.stringify(data.data.info)
//   messages.zh = {
//     ...data.data.data,
//     ...elementZhLocale
//   }
// })
// api.getlanguage({
//   type:'en'
// }).then(data=>{
//   console.log(data)
//   // let str = JSON.stringify(data.data.info)
//   messages.en = {
//     ...data.data.data,
//     ...elementEnLocale
//   }
// })
// api.getlanguage({
//   type:'vn'
// }).then(data=>{
//   console.log(data)
//   // let str = JSON.stringify(data.data.info)
//   messages.vn = {
//     ...data.data.data,
//     ...elementViLocale
//   }
// })
export function getLanguage() {

  const chooseLanguage = Cookies.get('language')
  if (chooseLanguage) return chooseLanguage

  // if has not choose language
  const language = (navigator.language || navigator.browserLanguage).toLowerCase()
  const locales = Object.keys(messages)
  for (const locale of locales) {
    if (language.indexOf(locale) > -1) {
      return locale
    }
  }
  return 'en'
}
console.log(messages)
const i18n = new VueI18n({
  // set locale
  // options: en | zh | es
  locale: getLanguage(),
  // set locale messages
  messages
})

export default i18n
