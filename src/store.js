import { createStore } from 'vuex';

export default createStore({
  state: {
    showModal: false,
    scrollbarWidth: 0,
    bodyLocked: false,
    lockPaddingValue: null,
  },
  mutations: {
    toggleModal(state, value) {
      state.showModal = value;
    },
    toggleBodyLock(state, status) {
      state.bodyLocked = status;
    },
    setLockPaddingValue(state, value) {
      state.lockPaddingValue = value;
    },
  },
});