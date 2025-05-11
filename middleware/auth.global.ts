export default defineNuxtRouteMiddleware((to) => {
  const auth = useAuthStore()

  if (!auth.isAuth && to.name !== 'login') {
    return navigateTo({ name: 'login' })
  }
})
