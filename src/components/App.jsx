import user from '../components/Profile/user.json';
import data from '../components/Statistics/data.json';
import friends from '../components/FriendList/friends.json';
import transactions from '../components/TransactionHistory/transactions.json';
import Profile from './Profile/Profile';
import FriendList from './FriendList/FriendList';
import Statistics from './Statistics/Statistics';
import TransactionHistory from './TransactionHistory/TransactionHistory';

export default function App() {
  return (
    <>
      <div
        style={{
          marginBottom: '40px',
          fontSize: '40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        React homework-01 components
      </div>
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexWrap: 'wrap',
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'space-around',
          fontSize: 20,
          color: '#010101',
        }}
      >
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
          <Statistics title="Upload stats" stats={data}>
            <Statistics stats={data} />
          </Statistics>
        </div>
        <div>
          <TransactionHistory transactions={transactions} />
        </div>
      </div>
    </>
  );
}
