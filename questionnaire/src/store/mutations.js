import * as types from './mutation-types'

export default {
    [types.ADD_QUESTIONNAIRE] (state, newQuestionnaire) {
        state.questionnaireList.push(newQuestionnaire)
    },
    [types.DEL_QUESTIONNAIRE] (state, id) {
        for (var i in state.questionnaireList) {
            if (id === state.questionnaireList[i].id) {
                state.questionnaireList.splice(i, 1)
            }
        }
    },
    [types.SAVE_QUESTIONNAIRE] (state, questionnaire) {
        console.log('save mutation')
    }
}
