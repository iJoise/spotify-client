import type {NextPage} from 'next'
import MainLayout from "../layouts/MainLayout";

const Home: NextPage = () => {
  return (
    <>
      <MainLayout>
        <div className="center">
          <h1>Добро Пожаловать</h1>
          <h3>Здесь собраны лучшие треки!</h3>
        </div>
      </MainLayout>

      <style jsx>
        {`
          .center {
            margin-top: 150px;
            display:flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
        `}
      </style>
    </>
  )
}

export default Home
