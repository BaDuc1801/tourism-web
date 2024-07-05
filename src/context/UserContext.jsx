import React, { createContext, useState, useEffect } from 'react';
import listUser from '../components/home_page/home/user.js';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [users, setUsers] = useState(() => {
        const savedReviews = localStorage.getItem('users');
        return savedReviews ? JSON.parse(savedReviews) : listUser;
    });

    const [accName, setAccName] = useState(() => {
        return localStorage.getItem('accName') || '';
    });

    const [email, setEmail] = useState(() => {
        return localStorage.getItem('email') || '';
    });

    useEffect(() => {
        localStorage.setItem('email', email);
    }, [email]);

    useEffect(() => {
        localStorage.setItem('accName', accName);
    }, [accName]);

    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(users));
    }, [users]);

    const addUser = (newUser) => {
        setUsers([...users, newUser]);
    };

    const updateUserPassword = (username, newPassword) => {
        const updatedUsers = users.map(user => {
            if (user.username === username) {
                return { ...user, password: newPassword };
            }
            return user;
        });
        setUsers(updatedUsers);
    };

    return (
        <UserContext.Provider value={{ users, addUser, setAccName , accName ,updateUserPassword, setEmail , email}}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContext;
