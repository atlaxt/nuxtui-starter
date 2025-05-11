export const isDark = computed<boolean>(() => useColorMode().value === 'dark')
export const currentTheme = computed(() => useColorMode().value as 'dark' | 'light' | 'system')

export function toggleTheme(_scheme?: 'dark' | 'light' | 'system') {
  const colorMode = useColorMode()
  if (!_scheme)
    colorMode.preference = isDark.value ? 'light' : 'dark'
  else
    colorMode.preference = _scheme
}
