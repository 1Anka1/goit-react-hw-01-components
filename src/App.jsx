import {Section} from './components/Section/Section';
import user from './data/user.json';
import data from './data/data.json';

import { Profile } from './components/UserProfile/Profile';
import { Statistics } from './components/Statistic/Statistic';

export const App = () => {
  return (
    <div>
      <Section title={'Task-1 Social network profile'}>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Section>
      <Section title={'Task-2 Statistics section'}>
        <Statistics title="Upload stats" stats={data} />
      </Section>
    </div>
  );
};