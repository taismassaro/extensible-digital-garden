import './video.module.css';

/* eslint-disable-next-line */
export interface VideoProps {
  title: string;
  uid: string;
}

export function Video(props: VideoProps) {
  return (
    <div>
      <iframe
        src={`https://www.youtube.com/embed/${props.uid}`}
        width="100%"
        height={500}
        title={props.title}
      />
    </div>
  );
}

export default Video;
