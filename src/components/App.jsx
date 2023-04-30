import user from '../json/user.json';
import data from '../json/data.json';
import friends from '../json/friends.json';
import transactions from '../json/transactions.json';
import Profile from './Profile';
import FriendList from './FriendList';
import Statistics from './Statistics';
import TransactionHistory from './TransactionHistory';

export default function App() {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <span>React homework template</span>
      <div>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </div>
      <div>
        <FriendList friends={friends} />
      </div>
      <div>
        <Statistics title="Upload stats" stats={data} />
      </div>
      <div>
        <Statistics stats={data} />
      </div>
      <div>
        <TransactionHistory transactions={transactions} />;
      </div>
    </div>
  );
}
