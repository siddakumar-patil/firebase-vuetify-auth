export default {
  SET_CONFIG(state, config) {
    state.config = config
  },
  SET_ERROR(state, error) {
    state.error = error
  },
  SET_LOADING(state, status) {
    state.is_login = status
  },
  SET_SESSION_PERSISTANCE(state, status) {
    state.is_session_persistant = status
  },
  SET_AUTH_GUARD_DIALOG_SHOWN(state, status) {
    state.is_authguard_dialog_shown = status
  },
  SET_AUTH_GUARD_DIALOG_PERSISTENT(state, status) {
    state.is_authguard_dialog_persistent = status
  },
}