import React from 'react';
import { StoryItem } from '../interfaces/StoryItem';

type Props = {
    story: StoryItem;
};

const Story: React.FC<Props> = ({ story }) => {
    const date = new Date(story.item.time * 1000);

    return (
        <article className="story">
            <h2 className="title">
                <a href={story.item.url}>{story.item.title}</a>
            </h2>
            <div className="score">Story Score: {story.item.score}</div>

            <div className="story-footer">
                <span>
                    By: <b>{story.user.id}</b>, User Carma: {story.user.karma}
                </span>
                <span>
                    {date.toLocaleDateString()} {date.toLocaleTimeString()}
                </span>
            </div>
        </article>
    );
};

export default React.memo(Story);
