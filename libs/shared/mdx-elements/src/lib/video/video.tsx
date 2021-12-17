export interface VideoProps {
  title: string;
  uid: string;
}

export function Video({ title, uid }: VideoProps) {
  return (
    <div>
      <iframe
        src={`https://www.youtube.com/embed/${uid}`}
        width="100%"
        height={500}
        title={title}
      />
    </div>
  );
}

export default Video;
