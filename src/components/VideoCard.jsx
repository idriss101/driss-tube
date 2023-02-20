import React from "react";
import {Link} from "react-router-dom";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import {Check, CheckCircle} from "@mui/icons-material";

import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "../utils/constants";

const VideoCard = ({
  video: {
    id: {videoId},
    snippet,
  },
}) => {
  return (
    <Card
      sx={{
        width: {
          xs: "100%",
          sm: "358px",
          md: "330px",
          boxShadow: "none",
          borderRadius: 0,
        },
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          alt={snippet?.title || demoVideoTitle}
          image={snippet?.thumbnails?.high?.url}
          sx={{width: {xs: "100%", sm: "358px", md: "320px"}, height: 180}}
        />
        <CardContent sx={{backgroundColor: "#1E1E1E", height: "106px"}}>
          <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <Typography variant="subtitle1" fontWeight={"bold"} color="#FFF">
              {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
            </Typography>
          </Link>
          <Link
            to={
              snippet?.channelId
                ? `/channel/${snippet?.channelId}`
                : demoChannelUrl
            }
          >
            <Typography variant="subtitle2" fontWeight={"bold"} color="gray">
              {snippet?.channelTitle.slice(0, 60) ||
                demoChannelTitle.slice(0, 60)}
              <CheckCircle sx={{color: "gray", fontSize: 12, ml: "5px"}} />
            </Typography>
          </Link>
        </CardContent>
      </Link>
    </Card>
  );
};

export default VideoCard;
