import React, {ChangeEvent, useState} from 'react';
import {Pause, PlayArrow, VolumeUp} from "@mui/icons-material";
import {Grid, IconButton} from "@mui/material";
import s from '../styles/Player.module.scss'
import {ITrack} from "../types";
import TrackProgress from "./TrackProgress";

const Player = () => {
  const [active, setActive] = useState(false);
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

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {

  }

  return (
    <div className={s.player}>
      <IconButton onClick={e => e.stopPropagation()}>
        {active ? <Pause/> : <PlayArrow/>}
      </IconButton>
      <Grid container direction='column' style={{maxWidth: 200, margin: '0 20px'}}>
        <div>{track.name}</div>
        <div style={{fontSize: 13, color: 'gray'}}>{track.artist}</div>
      </Grid>
      <TrackProgress left={0} right={100} onChange={onChangeHandler} />
      <VolumeUp style={{marginLeft: 'auto'}} />
      <TrackProgress left={0} right={100} onChange={onChangeHandler} />

    </div>
  );
};

export default Player;
