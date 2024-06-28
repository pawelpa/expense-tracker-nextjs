import {SignIn, SignInButton} from '@clerk/nextjs'
import { Sign } from 'crypto';
 

const Guest = () => {
    return ( <div className="guest">
        <h1>Welcome</h1>
        <p>Please sign in to manage your transactions</p>
        <SignInButton/>
    </div> );
}
 
export default Guest;