import { Collapse } from 'antd'
import { StudentRepository } from './interfaces'

const { Panel } = Collapse

export const PanelList = (prop: { repositories: StudentRepository[] }) => {
  return (
    <div>
      {prop.repositories.map((item: StudentRepository) => (
        <Collapse defaultActiveKey={[]}>
          <Panel header={item?.name} key={`${item.id}`}>
            <p>URL репозитория:</p>
            <p>
              <a href={item.html_url ?? ''}>{item.full_name ?? ''}</a>
            </p>
            <p>Описание: {item.description || 'осутствует'}</p>
            <p>
              Дата создания:{' '}
              {item.created_at.slice(0, 10).split('-').reverse().join('.')}
            </p>
          </Panel>
        </Collapse>
      ))}
    </div>
  )
}
