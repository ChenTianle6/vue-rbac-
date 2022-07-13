const getters = {
  token: state => state.user.token,
  hasUserInfo: (state) => {
    return state.user.userInfo || ''
  },
  hasPermission: (state) => {
    return (state.user.Permission && state.user.menus) || ''
  },
  menus: state => state.user.menus
}

export default getters
