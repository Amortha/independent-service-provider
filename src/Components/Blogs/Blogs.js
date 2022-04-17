import React from 'react';
import './Blogs.css'
const Blogs = () => {
    return (
        <div className="text-alginment">
        <h1>Que:1. Difference between authorization and authentication</h1>
        <h3>Authentication</h3>
        <p>1. Authentication verifies who the user is. <br />
2. Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user. <br />
3. Authentication is the first step of a good identity and access management process.<br />
4. Authentication is visible to and partially changeable by the user.</p>

<h3>Authorization</h3>
<p>
1. Authorization determines what resources a user can access.<br />
2. Authorization works through settings that are implemented and maintained by the organization.<br />
3. Authorization always takes place after authentication.<br />
4. Authorization is not visible to or changeable by the user.
</p>
<h1>Que:2. Why are you using firebase? What other options do you have to implement authentication?</h1>
<h3>Why are you using firebase?</h3>
<p>Ans: Firebase manages all data real-time in the database. So, the exchange of data to and fro from the database is easy and quick. Hence, if you are looking to develop mobile apps such as live streaming, chat messaging, etc. Firebase allow syncing the real-time data across all the devices- Android, iOS, and the web without refreshing the screen</p>
<h3>What other options do you have to implement authentication?</h3>
<p>
1. Parse <br />
2. Back4App<br />
3. AWS Amplify<br />
4. Kuzzle<br />
5. Couchbase<br />
6. NativeScript<br />
7. RxDB<br />
8. Flutter<br />
9. LoopBack
</p>
<h1>Que:3. What other services does firebase provide other than authentication?</h1>
<h3>Why are you using firebase?</h3>
<p>1.Cloud Firestore<br />
2.Cloud Functions<br />
3.Hosting<br />
4.Cloud Storage<br />
5.Google Analytics<br />
6.Predictions<br />
7.Cloud Messaging<br />
8.Dynamic Links<br />
9.Remote Config</p>
        </div>
    );
};

export default Blogs;