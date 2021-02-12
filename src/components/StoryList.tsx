import React from 'react';
import { StoryItem } from '../interfaces/StoryItem';
import Story from './Story';

interface Props {
    stories: (StoryItem | undefined)[];
}

const StoryList: React.FC<Props> = ({ stories }: Props) => {
    return (
        <section className="story-list">
            <h1 className={'title'}>Random Hacker News!</h1>
            {stories.map(
                (story) => story && <Story key={story.item.id} story={story} />,
            )}
        </section>
    );
};

export default StoryList;
