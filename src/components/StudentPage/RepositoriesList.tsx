import { useState, useEffect } from 'react'
import { Collapse, Button, Space } from 'antd'
import { Urls } from './constants'
import { PanelList } from './PanelList'

export const RepositoriesList = (prop: { user: string }) => {
  //TODO: Перенести в эффектор. Сделать связку со store User,
  // Запрос возвращается список указанного количества репозиториев (repositoriesPerPage)
  // по нику gitHub в порядке убывания по дате создания
  const [allRepoShown, setAllRepoShown] = useState(false)
  const [repositories, setRepositories] = useState([])
  const [repositoriesPerPage, setRepositoriesPerPage] = useState(10)
  const repositoriesUrl = `${Urls.rootUsersUrl}${prop.user}/repos?per_page=${repositoriesPerPage}&sort=order`

  useEffect(() => {
    fetch(repositoriesUrl)
      .then((data) => data.json())
      .then((result) => {
        setRepositories(result)
      })
      .catch((err) => console.log(err))
  }, [repositoriesUrl])

  const handleClick = () => {
    return allRepoShown
      ? (setAllRepoShown(false), setRepositoriesPerPage(10))
      : (setAllRepoShown(true), setRepositoriesPerPage(100))
  }

  return (
    <>
      <PanelList repositories={repositories} />

      <Button type="default" onClick={handleClick}>
        {allRepoShown ? 'Скрыть ' : 'Показать '}
        весь список репозиториев
      </Button>
    </>
  )
}
