import React from 'react';
import {ITrack} from "../../types";
import MainLayout from "../../layouts/MainLayout";
import {Button, Grid, TextField} from "@mui/material";
import {useRouter} from "next/router";

const TrackPage = () => {
  const router = useRouter();
  const track: ITrack = {
    _id: '1',
    name: 'track 1',
    artist: 'some text',
    text: 'other text',
    listens: 5,
    audio: 'http://localhost:5000/audio/ALEKS-ATAMAN-FINIK .mp3',
    picture: 'http://localhost:5000/image/1.jpeg',
    comments: []
  }

  return (
    <MainLayout>
      <Button
        onClick={() => router.push('/tracks')}
        variant={"outlined"}
        style={{fontSize: 24}}
      >
        К списку
      </Button>
      <Grid container style={{margin: '20px 0'}}>
        <img src={track.picture} width={200} height={200} alt='album image'/>
        <div style={{marginLeft: 30}}>
          <h1>Название трека - {track.name}</h1>
          <h2>Исполнитель - {track.artist}</h2>
          <h2>Прослушиваний - {track.listens}</h2>
        </div>
      </Grid>
      <h2>Слова в треке</h2>
      <p>{track.text}</p>
      <Grid container>
        <h2>Раздел с коментариями</h2>
        <TextField label={"Ваше имя"} fullWidth/>
        <TextField label={"Коментарий"} fullWidth multiline rows={4}/>
        <Button>Отправить</Button>
      </Grid>
      <div>
        {track.comments.map(comment => (
          <div key={comment._id}>
            <div>Автор - {comment.username}</div>
            <div>Коментарий - {comment.text}</div>
          </div>
          ))}
      </div>
    </MainLayout>
  );
};

export default TrackPage;
