import React from 'react';
import {ITrack} from "../types";
import {Card, Grid, IconButton} from "@mui/material";
import s from '../styles/TrackItem.module.scss'
import {Delete, Pause, PlayArrow} from "@mui/icons-material";
import {useRouter} from "next/router";

interface TrackItemProps {
  track: ITrack;
  active?: boolean;
}

const TrackItem: React.FC<TrackItemProps> = ({track, active = false}) => {
  const router = useRouter();

  return (
    <Card className={s.track} onClick={() => router.push(`/tracks/${track._id}`)}>
      <IconButton onClick={e => e.stopPropagation()}>
        {active ? <Pause/> : <PlayArrow/>}
      </IconButton>
      <img src={track.picture} width={70} height={70} alt="album image"/>
      <Grid container direction='column' style={{maxWidth: 200, margin: '0 20px'}}>
        <div>{track.name}</div>
        <div style={{fontSize: 13, color: 'gray'}}>{track.artist}</div>
      </Grid>
      {active && <div>02:42 / 03:22</div>}
      <IconButton onClick={e => e.stopPropagation()} style={{marginLeft: 'auto'}}>
        <Delete />
      </IconButton>
    </Card>
  );
};

export default TrackItem;
