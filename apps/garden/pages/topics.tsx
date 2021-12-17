import { TopicButton, Spacer } from '@egghead-digital-garden/shared/ui';

export function Topics() {
  return (
    <div className="md:container md:mx-auto p-20 bg-gray-100">
      <TopicButton name="Next.js" />
      <Spacer size="small" />
      <TopicButton name="React" />
      <Spacer size="small" />
      <TopicButton name="Svelte" />
    </div>
  );
}

export default Topics;
