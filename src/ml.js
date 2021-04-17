import Vue from 'vue'
import {MLInstaller, MLCreate, MLanguage} from 'vue-multilanguage'

Vue.use(MLInstaller);

export default new MLCreate({
    initial: 'russian',
    save: true,
    languages: [
        new MLanguage('russian').create({
            errors:{
                NOT_FOUND:"Страница не найдена"
            }
        }),

        new MLanguage('english').create({
            errors:{
                NOT_FOUND:"Page not found"
            }
        })
    ]
})