import * as types from './mutation-types'

export default {
    addQuestionnaire ({ commit }, newQuestion) {
        commit(types.ADD_QUESTIONNAIRE, newQuestion)
    },
    delQuestionnaire ({ commit }, index) {
        commit(types.DEL_QUESTIONNAIRE, index)
    },
    saveQuestionnaire ({ commit }, questionnaire) {
        commit(types.SAVE_QUESTIONNAIRE, questionnaire)
    }
}
