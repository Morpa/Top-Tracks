import pick from 'lodash/pick'
import { Types } from '.'

const config = {
  headers: {
    accept: 'application/vnd.github.v3+json',
    Authorization: `token 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`
  }
}

export const getJobs = async () => {
  const res = await fetch(
    'https://api.github.com/repos/backend-br/vagas',
    config
  )

  return pick(await res.json(), ['open_issues_count'])
}

export const getLabels = async () => {
  const res = await fetch(
    'https://api.github.com/repos/backend-br/vagas/labels?per_page=100',
    config
  )

  return (await res.json()).map((label: Types.Jobs.Label) =>
    pick(label, ['id', 'name', 'color'])
  )
}
