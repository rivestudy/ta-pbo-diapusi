import React, { useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";

const AdminPage = () => {
    const [menu, setMenu] = useState("user"); // State untuk menu
    const [newUser, setNewUser] = useState({
        name: '',
        email: '',
        password: '',
        role: '',
        division: ''
    });
    const [newDivision, setNewDivision] = useState('');
    const [divisions, setDivisions] = useState([
        { id: 1, name: "Finance", members: [] },
        { id: 2, name: "HR", members: [] }
    ]);
    const [users, setUsers] = useState([]);
    const [selectedDivision, setSelectedDivision] = useState('');

    const handleNewUserChange = (e) => {
        setNewUser({
            ...newUser,
            [e.target.name]: e.target.value
        });
    };

    const handleAddUser = () => {
        setUsers([...users, newUser]);
        setNewUser({ name: '', email: '', password: '', role: '', division: '' });
    };

    const handleAddDivision = () => {
        const newDivisionObject = { id: divisions.length + 1, name: newDivision, members: [] };
        setDivisions([...divisions, newDivisionObject]);
        setNewDivision('');
    };

    return (
        <div>
            <Header />
            <div id="wrapper" className="min-h-[76vh] p-6 bg-gray-200">
                <div className="container mx-auto w-1/2">
                    <div className="mb-6 text-center">
                        <button
                            className={`px-6 py-2 w-40  mr-4 font-semibold text-white rounded-md ${menu === "user" ? "bg-[#4d5d53]" : "bg-gray-400"}`}
                            onClick={() => setMenu("user")}
                        >
                            User Menu
                        </button>
                        <button
                            className={`px-6 w-40 py-2 font-semibold text-white rounded-md ${menu === "division" ? "bg-[#4d5d53]" : "bg-gray-400"}`}
                            onClick={() => setMenu("division")}
                        >
                            Division Menu
                        </button>
                    </div>
                    
                    {menu === "user" && (
                        <div>
                            <div className="mb-6">
                                <h2 className="mb-4 text-2xl font-bold">Add New User</h2>
                                <div className="grid grid-cols-2 gap-4 mb-4">
                                    <input
                                        className="w-full p-4 col-span-2 mb-2 border rounded-md"
                                        type="text"
                                        name="name"
                                        placeholder="Name"
                                        value={newUser.name}
                                        onChange={handleNewUserChange}
                                    />
                                    <input
                                        className="w-full p-4 mb-2 border rounded-md focus:outline-none focus:ring-1 invalid:text-pink-700 invalid:border-pink-700 invalid:focus:ring-pink-700 invalid:focus:border-pink-700 peer"
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        value={newUser.email}
                                        onChange={handleNewUserChange}
                                    />
                
                                    <input
                                        className="w-full p-4 mb-2 border rounded-md"
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        value={newUser.password}
                                        onChange={handleNewUserChange}
                                    />
                                    <select
                                        className="w-full p-4 mb-2 border rounded-md"
                                        name="role"
                                        value={newUser.role}
                                        onChange={handleNewUserChange}
                                    >
                                        <option value="">Select Role</option>
                                        <option value="admin">Admin</option>
                                        <option value="user">User</option>
                                    </select>
                                    <select
                                        className="w-full p-4 mb-2 border rounded-md"
                                        name="division"
                                        value={newUser.division}
                                        onChange={handleNewUserChange}
                                    >
                                        <option value="">Select Division</option>
                                        {divisions.map((division) => (
                                            <option key={division.id} value={division.name}>
                                                {division.name}
                                            </option>
                                        ))}
                                    </select>
                                    <button
                                        className="p-4 text-white bg-[#4d5d53] rounded-md col-span-2 w-1/4 ml-auto mr-0"
                                        onClick={handleAddUser}
                                    >
                                        Add User
                                    </button>
                                    
                                </div>
                            </div>

                            <div className="mb-6">
                                <h2 className="mb-4 text-2xl font-bold">All Users</h2>
                                <table className="min-w-full bg-white border border-collapse border-gray-300 rounded-md shadow-md">
                                    <thead>
                                        <tr className="text-gray-600 bg-gray-100">
                                            <th className="px-4 py-3 border-b">No</th>
                                            <th className="px-4 py-3 border-b">Name</th>
                                            <th className="px-4 py-3 border-b">Email</th>
                                            <th className="px-4 py-3 border-b">Division</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {users.map((user, index) => (
                                            <tr key={index} className="hover:bg-gray-50">
                                                <td className="px-4 py-3 border-b">{index + 1}</td>
                                                <td className="px-4 py-3 border-b">{user.name}</td>
                                                <td className="px-4 py-3 border-b">{user.email}</td>
                                                <td className="px-4 py-3 border-b">{user.division}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}

                    {menu === "division" && (
                        <div className="">
                            <div className="mb-6">
                                <h2 className="mb-4 text-2xl font-bold">Add New Division</h2>
                                <div className="mb-4">
                                    <input
                                        className="w-full p-4 mb-4 border rounded-md"
                                        type="text"
                                        value={newDivision}
                                        onChange={(e) => setNewDivision(e.target.value)}
                                        placeholder="Division Name"
                                    />
                                    <button
                                        className="w-full p-4 text-white bg-[#4d5d53]  rounded-md"
                                        onClick={handleAddDivision}
                                    >
                                        Add Division
                                    </button>
                                </div>
                            </div>

                            <div className="mb-6">
                                <h2 className="mb-4 text-2xl font-bold">All Divisions</h2>
                                <table className="min-w-full bg-white border border-collapse border-gray-300 rounded-md shadow-md">
                                    <thead>
                                        <tr className="text-gray-600 bg-gray-100 ">
                                            <th className="text-left pl-3 py-4 ">No</th>
                                            <th className="px-4 py-4  text-center">Division</th>
                                            <th className="px-4 py-4 border-b">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {divisions.map((division, index) => (
                                            <tr key={index} className="hover:bg-gray-50 border-b-2">
                                                <td className="text-left pl-3 py-4">{index + 1}</td>
                                                <td className="px-4 py-4  text-center">{division.name}</td>
                                                <td className="px-4 py-4 border-b text-center">Action</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AdminPage;
