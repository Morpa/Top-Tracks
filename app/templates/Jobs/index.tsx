import { useState } from 'react'

import { ParsedUrlQueryInput } from 'querystring'
import { KeyboardArrowDown as ArrowDown } from '@styled-icons/material-outlined/KeyboardArrowDown'

import * as S from './styles'
import { parsedQueryStringToFilter } from '~/utils/filter'
import { Base } from '../Base'
import { ExploreSidebar } from '~/components/ExploreSidebar'

export type HomeTemplateProps = {
  filterItems: any
  rate?: number
}

const Jobs = ({ filterItems }: HomeTemplateProps) => {
  const [currentPage, setCurrentPage] = useState(2)

  const filterTeste = {
    title: 'Labels',
    name: 'filter',
    type: 'checkbox',
    fields: [
      {
        label: 'CLT',
        name: 'clt'
      },
      {
        label: 'PJ',
        name: 'pj'
      },
      {
        label: 'Alocado',
        name: 'alocado'
      },
      {
        label: 'Remoto',
        name: 'remoto'
      },
      {
        label: 'Especialista',
        name: 'especialista'
      },
      {
        label: 'Sênior',
        name: 's%C3%AAnior'
      },
      {
        label: 'Pleno',
        name: 'pleno'
      },
      {
        label: 'Júnior',
        name: 'j%C3%BAnior'
      },
      {
        label: 'Estágio',
        name: 'est%C3%A1gio'
      }
    ]
  }

  const filterItems2 = [filterTeste]

  return (
    <Base>
      <S.Main>
        <ExploreSidebar
          initialValues={filterItems2}
          items={filterItems2}
          onFilter={() => { }}
        />

        <section>
          {/*  {data.getJobs.length ? (
            <>
              <Grid>
                {data?.getJobs.map((job) => (
                  <JobCard
                    key={job.id}
                    title={job.title}
                    html_url={job.html_url}
                    created_at={job.created_at}
                    labels={job.labels}
                  />
                ))}
              </Grid>
              {hasMoreJobs && (
                <S.ShowMore>
                  {loading ? (
                    <S.ShowMoreLoading
                      src="/img/dots.svg"
                      alt="Carregando mais vagas..."
                    />
                  ) : (
                    <S.ShowMoreButton role="button" onClick={handleShowMore}>
                      <p>Carregar mais</p>
                      <ArrowDown size={35} />
                    </S.ShowMoreButton>
                  )}
                </S.ShowMore>
              )}
            </>
          ) : (
            <Empty
              title="Opss..."
              description="A vaga que você procura não existe"
              hasLink
            />
          )} */}
        </section>
      </S.Main>
    </Base>
  )
}

export default Jobs
