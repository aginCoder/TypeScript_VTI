import React from 'react';

const GroupList = () => {
    const groups = [
        { name: 'JAVA FRESHER', members: 18, creator: 'Phạm Gia Ân', createdDate: '19-05-2018' },
        { name: 'PHP FRESHER', members: 10, creator: 'Thái Hoàng Quân', createdDate: '19-05-2017' },
        { name: 'RUBY FRESHER', members: 12, creator: 'Đỗ Văn Vũ', createdDate: '19-05-2016' },
        { name: 'TEAM LEAD', members: 5, creator: 'Trần Quang Nghĩa', createdDate: '19-05-2015' },
    ];

    return (
        <table className="group-list">
            <thead>
                <tr>
                    <th>Group Name</th>
                    <th>Members</th>
                    <th>Creator</th>
                    <th>Created Date</th>
                </tr>
            </thead>
            <tbody>
                {groups.map((group, index) => (
                    <tr key={index}>
                        <td>{group.name}</td>
                        <td>{group.members}</td>
                        <td>{group.creator}</td>
                        <td>{group.createdDate}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default GroupList;
