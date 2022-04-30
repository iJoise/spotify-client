import {NextPage} from "next";
import MainLayout from "../../layouts/MainLayout";
import {Box, Button, Card, Grid} from "@mui/material";
import {useRouter} from "next/router";
import {ITrack} from "../../types";
import TrackList from "../../components/TrackList";


const Index: NextPage = () => {
  const router = useRouter();

  const tracks: ITrack[] = [
    {
      _id: '1',
      name: 'track 1',
      artist: 'some text',
      text: 'other text',
      listens: 5,
      audio: 'http://localhost:5000/audio/M83-INeed-You.mp3',
      picture: 'http://localhost:5000/image/3.jpeg',
      comments: []
    },
    {
      _id: '1',
      name: 'track 1',
      artist: 'some text',
      text: 'other text',
      listens: 5,
      audio: 'http://localhost:5000/audio/M83–Midnight-City.mp3',
      picture: 'http://localhost:5000/image/2.jpeg',
      comments: []
    },
    {
      _id: '1',
      name: 'track 1',
      artist: 'some text',
      text: 'other text',
      listens: 5,
      audio: 'http://localhost:5000/audio/ALEKS-ATAMAN-FINIK .mp3',
      picture: 'http://localhost:5000/image/1.jpeg',
      comments: []
    },
  ]

  return (
    <MainLayout>
      <Grid container justifyContent='center'>
        <Card style={{width: '100%', maxWidth: 900}}>
          <Box p={2}>
            <Grid container justifyContent='space-between'>
              <h1>Список треков</h1>
              <Button onClick={() => router.push('/tracks/create')}>Загрузить</Button>
            </Grid>
          </Box>
          <TrackList tracks={tracks}/>
        </Card>
      </Grid>
    </MainLayout>
  )
}

export default Index;
