import * as types from './mutation-types'

export default {
    [types.ADD_QUESTIONNAIRE] (state, newQuestionnaire) {
        state.questionnaireList.push(newQuestionnaire)
    },
    [types.DEL_QUESTIONNAIRE] (state, index) {
        state.questionnaireList.splice(index, 1)
    },
    [types.SAVE_QUESTIONNAIRE] (state, questionnaire) {
        console.log("save mutation")
    }
}
