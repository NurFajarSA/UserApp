import { Role } from '@/app/models/role';
import { User } from '@/app/models/user';
import { Routes } from '@/app/routes/routes';
import { getAllUsers } from '@/app/services/userService';
import dummyData from '@/app/utils/dummyData';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const UserTable: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [usersPerPage] = useState<number>(6);
    const [currentUsers, setCurrentUsers] = useState<User[]>(filteredUsers.slice(0, usersPerPage));
    const [isLoading, setIsLoading] = useState(false);

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
    const router = useRouter();

    useEffect(() => {
        fetchUsers();
    }, []);

    useEffect(() => {
        const newIndexOfLastUser = currentPage * usersPerPage;
        const newIndexOfFirstUser = newIndexOfLastUser - usersPerPage;
        setCurrentUsers(filteredUsers.slice(newIndexOfFirstUser, newIndexOfLastUser));
    }, [currentPage, filteredUsers]);

    useEffect(() => {
        performSearch();
    }, [searchTerm]);

    const fetchUsers = async () => {
        setIsLoading(true);
        try {
            const response = await getAllUsers();
            if (response) {
                setUsers(response);
                setFilteredUsers(response);
                setCurrentUsers(response.slice(0, usersPerPage));
            }
        } catch (error) {
            console.error('Error fetching users:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleDetailClick = (user: User) => {
        console.log('Clicked detail for user:', user);
        router.push(Routes.USER_DETAIL.replace(':id', user.id));
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const performSearch = () => {
        const filtered = users.filter(user =>
            user.username.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredUsers(filtered);
        setCurrentPage(1);
    };

    const handleAddUser = () => {
        router.push(Routes.ADD_USER);
    }


    return (
        <div className="overflow-x-auto">
            <div className="flex flex-row justify-between">
                <input
                    type="text"
                    className="input input-bordered input-sm w-full max-w-xs m-1 mb-2"
                    placeholder="Search by username..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
                <button className="btn btn-sm m-1 mb-2" onClick={handleAddUser}>
                    <span className="material-icons-outlined">add</span>
                    Tambah Pengguna
                </button>
            </div>
            <table className="table table-zebra text-center">
                <thead>
                    <tr>
                        <th></th>
                        <th>Email</th>
                        <th>Username</th>
                        <th>Role</th>
                        <th>Date Create</th>
                        <th>Last Login</th>
                        <th>Login Attempt</th>
                        <th>Is Deleted</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {isLoading && (
                        <tr>
                            <td colSpan={9}>
                                <span className="loading loading-spinner loading-md"></span>
                            </td>
                        </tr>
                    )}
                    {currentUsers.length === 0 && !isLoading && (
                        <tr>
                            <td colSpan={9}>Tidak ada data pengguna yang ditemukan</td>
                        </tr>
                    )}
                    {currentUsers.map((user, index) => (
                        <tr key={index}>
                            <th>{index + 1 + (currentPage - 1) * usersPerPage}</th>
                            <td className="nowrap">{user.email}</td>
                            <td className="nowrap">{user.username}</td>
                            <td className="nowrap">
                                <span className={`badge badge-l ${user.role == Role.ADMIN ? 'badge-info' : 'badge-warning'} center p-2.5`}>
                                    {user.role}
                                </span>
                            </td>
                            <td className="nowrap">{user.dateCreate}</td>
                            <td className="nowrap">{user.lastLogin}</td>
                            <td className="nowrap">{user.loginAttempt}</td>
                            <td className="nowrap">{user.isDeleted ? 'Yes' : 'No'}</td>
                            <td>
                                <button className="btn btn-ghost btn-xs" onClick={() => handleDetailClick(user)}>Detail</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={9}>
                            <nav>
                                <div className="join">
                                    {Array.from({ length: Math.ceil(filteredUsers.length / usersPerPage) }).map((_, index) => (
                                        <button key={index} className="join-item btn btn-md" onClick={() => paginate(index + 1)}>
                                            {index + 1}
                                        </button>
                                    ))}
                                </div>
                            </nav>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
};

export default UserTable;
