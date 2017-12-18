import Vue from 'vue'
export default{
	//改变语言
	chang_lang(state,lang){
		state.lang=lang
		Vue.config.lang=state.lang_arr[lang]
	}
}