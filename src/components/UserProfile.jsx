import React, { useState } from 'react';
import './UserProfile.css';

const UserProfile = ({ isOpen, onClose }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    address: '123 Main Street, Apt 4B',
    city: 'New York',
    zipCode: '10001'
  });

  const [editedInfo, setEditedInfo] = useState({ ...userInfo });

  // Mock order history
  const orderHistory = [
    {
      id: 1,
      date: '2025-10-20',
      items: ['Margherita Pizza', 'Caesar Salad'],
      total: 28.50,
      status: 'Delivered'
    },
    {
      id: 2,
      date: '2025-10-15',
      items: ['Burger Deluxe', 'French Fries'],
      total: 19.99,
      status: 'Delivered'
    },
    {
      id: 3,
      date: '2025-10-10',
      items: ['Pasta Carbonara'],
      total: 15.99,
      status: 'Delivered'
    }
  ];

  const handleEdit = () => {
    setIsEditing(true);
    setEditedInfo({ ...userInfo });
  };

  const handleSave = () => {
    setUserInfo({ ...editedInfo });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedInfo({ ...userInfo });
    setIsEditing(false);
  };

  const handleChange = (field, value) => {
    setEditedInfo((prev) => ({ ...prev, [field]: value }));
  };

  if (!isOpen) return null;

  return (
    <div className="profile-overlay" onClick={onClose}>
      <div className="profile-container" onClick={(e) => e.stopPropagation()}>
        <div className="profile-header">
          <h2>My Profile</h2>
          <button className="close-button" onClick={onClose}>✕</button>
        </div>

        <div className="profile-content">
          {/* Personal Information Section */}
          <section className="profile-section">
            <div className="section-header">
              <h3>Personal Information</h3>
              {!isEditing && (
                <button className="edit-button" onClick={handleEdit}>
                  Edit
                </button>
              )}
            </div>
            
            <div className="info-grid">
              <div className="info-item">
                <label>Name</label>
                {isEditing ? (
                  <input
                    type="text"
                    value={editedInfo.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                  />
                ) : (
                  <p>{userInfo.name}</p>
                )}
              </div>

              <div className="info-item">
                <label>Email</label>
                {isEditing ? (
                  <input
                    type="email"
                    value={editedInfo.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                  />
                ) : (
                  <p>{userInfo.email}</p>
                )}
              </div>

              <div className="info-item">
                <label>Phone</label>
                {isEditing ? (
                  <input
                    type="tel"
                    value={editedInfo.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                  />
                ) : (
                  <p>{userInfo.phone}</p>
                )}
              </div>
            </div>

            {isEditing && (
              <div className="edit-actions">
                <button className="save-button" onClick={handleSave}>
                  Save Changes
                </button>
                <button className="cancel-button" onClick={handleCancel}>
                  Cancel
                </button>
              </div>
            )}
          </section>

          {/* Delivery Address Section */}
          <section className="profile-section">
            <h3>Delivery Address</h3>
            <div className="address-info">
              {isEditing ? (
                <>
                  <input
                    type="text"
                    placeholder="Street Address"
                    value={editedInfo.address}
                    onChange={(e) => handleChange('address', e.target.value)}
                  />
                  <div className="address-row">
                    <input
                      type="text"
                      placeholder="City"
                      value={editedInfo.city}
                      onChange={(e) => handleChange('city', e.target.value)}
                    />
                    <input
                      type="text"
                      placeholder="ZIP Code"
                      value={editedInfo.zipCode}
                      onChange={(e) => handleChange('zipCode', e.target.value)}
                    />
                  </div>
                </>
              ) : (
                <p>
                  {userInfo.address}<br />
                  {userInfo.city}, {userInfo.zipCode}
                </p>
              )}
            </div>
          </section>

          {/* Order History Section */}
          <section className="profile-section">
            <h3>Recent Orders</h3>
            <div className="order-history">
              {orderHistory.map((order) => (
                <div key={order.id} className="order-item">
                  <div className="order-header">
                    <span className="order-date">{order.date}</span>
                    <span className={`order-status status-${order.status.toLowerCase()}`}>
                      {order.status}
                    </span>
                  </div>
                  <div className="order-items">
                    {order.items.join(', ')}
                  </div>
                  <div className="order-total">
                    Total: ${order.total.toFixed(2)}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
