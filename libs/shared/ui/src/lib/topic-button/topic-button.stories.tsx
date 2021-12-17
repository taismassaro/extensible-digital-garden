import { Story, Meta } from '@storybook/react';
import { useState } from 'react';
import { TopicButton, TopicButtonProps } from './topic-button';

export default {
  component: TopicButton,
  title: 'TopicButton',
  argTypes: {
    onClick: { action: 'clicked' },
  },
} as Meta;

const Template: Story<TopicButtonProps> = (args) => {
  const [topic, setTopic] = useState<string | null>(null);

  return (
    <div className="bg-indigo-100 p-20">
      <TopicButton {...args} onClick={(topic: string) => setTopic(topic)} />
      {topic && (
        <p className="mt-2" data-testid="click-result">
          {topic} button has been clicked!
        </p>
      )}
    </div>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  name: 'Next.js',
};
