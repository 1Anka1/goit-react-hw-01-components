// DATA
import user from './data/user.json';
import data from './data/data.json';
import friends from './data/friends.json';
import transactions from "./data/transactions.json";


// COMPONENTS
import { Section } from './components/Section/Section';
import { Profile } from './components/UserProfile/Profile';
import { Statistics } from './components/Statistic/Statistic';
import { FriendListItem } from "./components/FriendListItem/FriendListItem";
import { TransactionHistory } from "./components/Transactions/TransactionHistory";

export const App = () => {
  return (
    <div>
      <Section title={'Task - 1 Social network profile'}>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Section>
      <Section title={'Task - 2 Statistics section'}>
        <Statistics title="Upload stats" stats={data} />
      </Section>

      <Section title={'Task - 3 Friends list'}>
        <FriendListItem friends={friends} />
      </Section>

      <Section title={'Task - 4 Transaction history'}>
        <TransactionHistory items={transactions} />
      </Section>
    </div>
  );
};
