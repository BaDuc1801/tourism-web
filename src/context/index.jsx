import { AuthProvider } from './AuthContext';
import { ReviewProvider } from './ReviewContext'
import { UserProvider } from './UserContext';

const GlobalProvider = ({ children }) => {
    return (<UserProvider>
                <AuthProvider>
                    <ReviewProvider>
                        {children}
                    </ReviewProvider>
                </AuthProvider>
            </UserProvider>)
};

export default GlobalProvider;