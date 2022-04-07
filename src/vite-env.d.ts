import 'vite/client'
import 'vite/types/importMeta'

declare module 'vite/client' {
  interface ImportMetaEnv {}
}
