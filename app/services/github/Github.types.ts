export type OpenJobs = {
  open_issues_count: number
}

export type LoaderData = {
  jobs: OpenJobs
}

export namespace Jobs {
  export type Label = {
    id: number
    name: string
    color: string
  }

  export type LoaderData = {
    labels: Label[]
  }
}
