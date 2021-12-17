import './topic-button.module.css';

export interface TopicButtonProps {
  name: string;
}

export function TopicButton({ name }: TopicButtonProps) {
  return (
    <div className="bg-white pl-4 rounded-lg shadow flex max-w-md min-w-max hover:shadow-md transition-shadow">
      <div className="p-5">
        <h1 className="font-bold text-4xl">{name}</h1>
      </div>
    </div>
  );
}

export default TopicButton;
