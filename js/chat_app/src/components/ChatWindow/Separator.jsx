import React, { useState, useEffect } from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import { useDispatch } from 'react-redux';
import { getUserByIdThunk } from '../../redux/slices/chatSlice';

function Separator({ date, authorId, message }) {
  const [user, setUser] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserByIdThunk(authorId)).then((res) => setUser(res.payload));
  }, []);

  return (
    <Timeline>
      <TimelineItem>
        <TimelineOppositeContent color="textSecondary">{message}</TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography>{user ? user.username : ''}</Typography>
          <Typography>{Date(date)}</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}

export default Separator;
