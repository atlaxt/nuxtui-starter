import type { User } from '~/types'

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>(null)
  const isAuth = ref<boolean>(true) // false

  const login = (_user: User) => {
    user.value = _user
    isAuth.value = true
  }
  const logout = () => {
    user.value = null
    isAuth.value = false
  }

  return {
    user,
    isAuth,

    login,
    logout,
  }
})
