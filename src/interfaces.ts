export interface GetNxAffectedProps {
  base?: string
  head?: string
  exclude?: string // can be "apps/**" or "libs/**"
  workspace: string
}

export interface ExecuteNxCommandProps {
  commands: string[]
  workspace: string
}
