import React from 'react';
import Header from './header';
import Sidebar from './sidebar';
import GroupList from './groupList';
import SearchBar from './search';

const GroupManagement = () => {
    return (
        <div className="container">
            <Header />
            <div className="main-content">
                <Sidebar />
                <div className="content-area">
                    <h2>Group Management</h2>
                    <SearchBar />
                    <GroupList />
                </div>
            </div>
        </div>
    );
};

export default GroupManagement;
