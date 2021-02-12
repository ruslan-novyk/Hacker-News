import React, { useEffect, useState } from 'react';
import Loading from './components/Loading';
import StoryList from './components/StoryList';
import { StoryItem } from './interfaces/StoryItem';
import SomeRepository from './repository/SomeRepository';
import Utils from './utils/Utils';

type State = { loading: boolean; stories: (StoryItem | undefined)[] };

const showStoriesCount = 10;

const App: React.FC = () => {
    const [state, setState] = useState<State>({
        loading: true,
        stories: [],
    });

    useEffect(() => {
        (async () => {
            try {
                const result = await SomeRepository.getIdsList();

                if (result.status === 200) {
                    const ids = result.data;
                    const randomIds = Utils.getRandomArrayElements(
                        ids,
                        showStoriesCount,
                    );

                    const requests = randomIds.map(async (id) => {
                        try {
                            const storyResponse = await SomeRepository.getStoryInfo(
                                id,
                            );

                            if (storyResponse.status === 200) {
                                const item = storyResponse.data;
                                const userResponse = await SomeRepository.getUserInfo(
                                    item.by,
                                );

                                if (userResponse.status === 200) {
                                    const user = userResponse.data;

                                    return {
                                        item,
                                        user,
                                    };
                                }
                            }
                        } catch (e) {
                            console.warn(e);
                        }
                    });

                    const stories = await (
                        await Promise.all(requests)
                    ).sort((a, b) =>
                        a && b ? a.item.score - b.item.score : 0,
                    );

                    setState({
                        loading: false,
                        stories,
                    });
                }
            } catch (e) {
                console.warn('Error while loading ids list');
                console.log(e);

                setState({
                    loading: false,
                    stories: [],
                });
            }
        })();
    }, []);

    const { loading, stories } = state;

    if (loading) return <Loading />;

    return (
        <main>
            <StoryList stories={stories} />
        </main>
    );
};

export default App;
