import React from "react";
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from "recharts";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Dashboard = () => {
    // Example chart data
    const data = [
        { name: "Jan", users: 400 },
        { name: "Feb", users: 300 },
        { name: "Mar", users: 500 },
        { name: "Apr", users: 250 },
        { name: "May", users: 470 },
    ];

    const locations = [
        { "district": "Dhaka", "position": [23.7104, 90.4074] },
        { "district": "Faridpur", "position": [23.6000, 89.8500] },
        { "district": "Tangail", "position": [24.2500, 89.9167] },
        { "district": "Gazipur", "position": [24.0000, 90.4167] },
        { "district": "Narayanganj", "position": [23.6200, 90.5000] },
        { "district": "Kishoreganj", "position": [24.4333, 90.7833] },
        { "district": "Narsingdi", "position": [23.9200, 90.7167] },
        { "district": "Munshiganj", "position": [23.4833, 90.5000] },
        { "district": "Manikganj", "position": [23.8667, 90.0167] },
        { "district": "Gopalganj", "position": [23.0000, 89.8333] },
        { "district": "Shariatpur", "position": [23.2500, 90.3000] },
        { "district": "Madaripur", "position": [23.1833, 90.1667] },
        { "district": "Rajbari", "position": [23.7500, 89.9500] },

        { "district": "Chattogram", "position": [22.3569, 91.7832] },
        { "district": "Cumilla", "position": [23.4600, 91.1800] },
        { "district": "Noakhali", "position": [22.8167, 91.1000] },
        { "district": "Rangamati", "position": [22.6333, 92.1833] },
        { "district": "Bandarban", "position": [21.8000, 92.2333] },
        { "district": "Khagrachari", "position": [23.1167, 91.9333] },
        { "district": "Brahmanbaria", "position": [23.9500, 91.1833] },
        { "district": "Cox's Bazar", "position": [21.4333, 92.0167] },
        { "district": "Chandpur", "position": [23.2333, 90.4000] },
        { "district": "Lakshmipur", "position": [22.9500, 90.8500] },
        { "district": "Feni", "position": [23.0167, 91.3833] },
        { "district": "Cumilla", "position": [23.4600, 91.1800] },

        { "district": "Rajshahi", "position": [24.3833, 88.6000] },
        { "district": "Bogura", "position": [24.8500, 89.3833] },
        { "district": "Pabna", "position": [24.0000, 89.2500] },
        { "district": "Joypurhat", "position": [25.1000, 89.0167] },
        { "district": "Sirajganj", "position": [24.4500, 89.7000] },
        { "district": "Naogaon", "position": [24.8333, 88.9500] },
        { "district": "Natore", "position": [24.4167, 89.0333] },
        { "district": "Chapai Nawabganj", "position": [24.4500, 88.3700] },
        { "district": "Nawabganj", "position": [24.4670, 88.2833] },
        { "district": "Pabna", "position": [24.0000, 89.2500] },

        { "district": "Jashore", "position": [23.1700, 89.2167] },
        { "district": "Khulna", "position": [22.8167, 89.5500] },
        { "district": "Kushtia", "position": [23.9000, 89.1167] },
        { "district": "Bagerhat", "position": [22.6500, 89.7833] },
        { "district": "Satkhira", "position": [22.7167, 89.0667] },
        { "district": "Jhenaidah", "position": [23.6333, 89.0667] },
        { "district": "Chuadanga", "position": [23.6500, 88.8500] },
        { "district": "Magura", "position": [23.4900, 89.4000] },
        { "district": "Meherpur", "position": [23.7500, 88.6333] },
        { "district": "Narail", "position": [23.1667, 89.5000] },

        { "district": "Barishal", "position": [22.7000, 90.3667] },
        { "district": "Patuakhali", "position": [22.3667, 90.3333] },
        { "district": "Bhola", "position": [22.6833, 90.6500] },
        { "district": "Pirojpur", "position": [22.6000, 89.9667] },
        { "district": "Barguna", "position": [22.9000, 90.1167] },
        { "district": "Jhalokati", "position": [22.6500, 90.2000] },

        { "district": "Sylhet", "position": [24.9000, 91.8667] },
        { "district": "Sunamganj", "position": [24.9333, 91.2500] },
        { "district": "Habiganj", "position": [24.3833, 91.4167] },
        { "district": "Moulvibazar", "position": [24.4833, 91.7833] },

        { "district": "Rangpur", "position": [25.7500, 89.2500] },
        { "district": "Dinajpur", "position": [25.6333, 88.6333] },
        { "district": "Gaibandha", "position": [25.3500, 89.5500] },
        { "district": "Kurigram", "position": [25.8000, 89.6667] },
        { "district": "Lalmonirhat", "position": [25.9667, 89.1500] },
        { "district": "Nilphamari", "position": [25.9333, 88.8500] },
        { "district": "Panchagarh", "position": [26.3333, 88.5667] },
        { "district": "Thakurgaon", "position": [26.0333, 88.4667] },

        { "district": "Jamalpur", "position": [24.9167, 89.9167] },
        { "district": "Mymensingh", "position": [24.7500, 90.4000] },
        { "district": "Netrokona", "position": [24.9167, 90.7333] },
        { "district": "Sherpur", "position": [24.7833, 90.0167] }
    ]


    return (
        <div className="p-6 space-y-8 bg-gradient-to-br from-blue-50 to-white min-h-screen">

            {/* Dashboard Summary Cards */}
            <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 shadow text-center">
                    <h3 className="text-xl font-semibold mb-2 text-blue-600">Total Users</h3>
                    <p className="text-3xl font-bold">1,240</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow text-center">
                    <h3 className="text-xl font-semibold mb-2 text-green-600">Active Posts</h3>
                    <p className="text-3xl font-bold">315</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow text-center">
                    <h3 className="text-xl font-semibold mb-2 text-purple-600">New Signups</h3>
                    <p className="text-3xl font-bold">89</p>
                </div>
            </div>

            {/* Chart Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-6 shadow">
                    <h2 className="text-xl font-semibold mb-4 text-center">Monthly User Growth</h2>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={data}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="users" fill="#3B82F6" radius={[10, 10, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                {/* Map Section */}
                <div className="bg-white rounded-xl p-6 shadow">
                    <h2 className="text-xl font-semibold mb-4 text-center">Active User Locations</h2>
                    <MapContainer center={[23.8103, 90.4125]} zoom={6} style={{ height: "300px", width: "100%" }} scrollWheelZoom={false}>
                        <TileLayer
                            attribution='&copy; <a href="https://osm.org/">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        {
                            locations.map( location => <Marker key={location.position} position={location.position}>
                            <Popup>{location.district}</Popup>
                        </Marker>)
                        }
                        {/* <Marker position={[23.8103, 90.4125]}>
                            <Popup>Dhaka User</Popup>
                        </Marker>
                        <Marker position={[22.3569, 91.7832]}>
                            <Popup>Chattogram User</Popup>
                        </Marker> */}
                    </MapContainer>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
