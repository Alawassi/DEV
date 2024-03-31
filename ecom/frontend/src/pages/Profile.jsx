import React, { useState, useEffect, useRef } from 'react';
import { Avatar } from 'primereact/avatar';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { FileUpload } from 'primereact/fileupload';
import { Card } from 'primereact/card';
import 'primeicons/primeicons.css';
import './UserProfile.css'; // Make sure this includes the animation styles

const UserProfile = () => {
    const mockupUser = {
        firstName: 'Max',
        lastName: 'Mustermann',
        email: 'max@example.com',
        avatar: '', // Assuming you have a default or placeholder image path
        dob: new Date('1990-01-01'),
        phone: '0123456789',
        street: 'Musterstraße 1',
        postalCode: '12345',
        city: 'Musterstadt',
        state: 'NRW'
    };

    const [user, setUser] = useState(mockupUser);
    const toast = useRef(null);

    useEffect(() => {
        // Fetch user data - Assuming this is where you'd integrate real data in a full application
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const saveProfile = async () => {
        // Save changes logic - Placeholder for actual implementation
        showToast('success', 'Profile Updated', 'Your profile has been successfully updated.');
    };

    const showToast = (severity, summary, detail) => {
        toast.current.show({ severity, summary, detail, life: 3000 });
    };

    return (
        <div className="user-profile">
            <Toast ref={toast} />
            <Card title="Profile Information" className="profile-card">
                <div className="profile-header">
                    <Avatar image={user.avatar} className="profile-avatar animated fadeIn" shape="circle" />
                    <FileUpload mode="basic" name="avatar" accept="image/*" maxFileSize={1000000}
                        label="Change Avatar" chooseLabel="Upload" className="upload-btn animated fadeIn" onUpload={() => { }} />
                </div>
                <div className="profile-fields">
                    <InputText value={user.firstName} onChange={handleInputChange} placeholder="First Name" name="firstName" className="field" />
                    <InputText value={user.lastName} onChange={handleInputChange} placeholder="Last Name" name="lastName" className="field" />
                    <InputText value={user.email} onChange={handleInputChange} placeholder="Email" name="email" className="field" />
                    <InputText value={user.phone} onChange={handleInputChange} placeholder="Phone" name="phone" className="field" />
                    <Calendar value={user.dob} onChange={(e) => setUser({ ...user, dob: e.value })} placeholder="Date of Birth" name="dob" className="field" showIcon />
                    <InputText value={user.street} onChange={handleInputChange} placeholder="Street" name="street" className="field" />
                    <InputText value={user.postalCode} onChange={handleInputChange} placeholder="Postal Code" name="postalCode" className="field" />
                    <InputText value={user.city} onChange={handleInputChange} placeholder="City" name="city" className="field" />
                    <InputText value={user.state} onChange={handleInputChange} placeholder="State" name="state" className="field" />
                    <Button label="Save Changes" icon="pi pi-check" className="save-btn" onClick={saveProfile} />
                </div>
            </Card>
        </div>
    );
};

export default UserProfile;
