import { createStore } from "vuex";

export default createStore({
  state: {
    participant: null,
    publicId: null,
    buttonClicked: false,
    buttonNumber: null,
    uuidP: null,
  },
  mutations: {
    ADD_PARTICIPANT(state, participant) {
      state.participant = participant;
    },
    UPDATE_PUBLIC_ID(state, publicId) {
      state.publicId = publicId;
    },
    BUTTON_CLICKED(state, buttonClicked) {
      state.buttonClicked = buttonClicked;
    },
    BUTTON_NUMBER(state, buttonNumber) {
      state.buttonNumber = buttonNumber;
    },
    SET_PARTICIPANT_ID(state, id) {
      state.uuidP = id;
    },
  },
  actions: {
    addParticipant({ commit }, participant) {
      commit("ADD_PARTICIPANT", participant);
    },
    updatePublicId({ commit }, publicId) {
      commit("UPDATE_PUBLIC_ID", publicId);
    },
    ButtonClicked({ commit }, buttonClicked) {
      commit("BUTTON_CLICKED", buttonClicked);
    },
    ButtonNumber({ commit }, buttonNumber) {
      commit("BUTTON_NUMBER", buttonNumber);
    },
    setParticipantId({ commit }, id) {
      commit("SET_PARTICIPANT_ID", id);
    },
  },
  getters: {
    participant: (state) => state.participant,
    publicId: (state) => state.publicId,
    buttonClicked: (state) => state.buttonClicked,
    buttonNumber: (state) => state.buttonNumber,
    uuidP: (state) => state.uuidP,
  },
});
