import React, { useState } from 'react';
import './myarts.css'; // Ensure the CSS file is in the correct path
import Header from './sellernav'; // Adjust import path as necessary
import image2 from './images/image2.jpg'; // Sample image
import image3 from './images/image3.jpg'; // Sample image
import image1 from './images/image1.jpg'; // Sample image
import image4 from './images/image4.jpg';
const MyArts = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [artIdToDelete, setArtIdToDelete] = useState('');

    // Sample art data
    const artsList = [
        {
            artId: '1',
            arTitle: 'Duplex Villa',
            artCost: '100.00',
            artDimensions: '12x16',
            artMedium: 'Duplex',
            artDescription: 'Villa',
            availStatus: 'In Stock',
            dateListed: '2024-10-01',
            imageUrl: image1
        },
        {
            artId: '2',
            arTitle: 'Individual Home',
            artCost: '150.00',
            artDimensions: '10x14',
            artMedium: 'Home',
            artDescription: 'Living Individual',
            availStatus: 'Out of Stock',
            dateListed: '2024-10-02',
            imageUrl: image2
        },
        {
            artId: '3',
            arTitle: 'Apartment',
            artCost: '120.00',
            artDimensions: '14x20',
            artMedium: 'Apartment',
            artDescription: 'Living with Community',
            availStatus: 'In Stock',
            dateListed: '2024-10-03',
            imageUrl: image3
        },
        {
            artId: '4',
            arTitle: 'Commercial Property',
            artCost: '200.00',
            artDimensions: '18x24',
            artMedium: 'Commercial',
            artDescription: 'earning More',
            availStatus: 'In Stock',
            dateListed: '2024-10-04',
            imageUrl: image4
        }
    ];

    const handleDeleteClick = (artId) => {
        setArtIdToDelete(artId);
        setModalVisible(true);
    };

    const closeDeleteModal = () => {
        setModalVisible(false);
        setArtIdToDelete('');
    };

    const confirmDelete = () => {
        console.log(`Deleting art with ID: ${artIdToDelete}`);
        closeDeleteModal();
    };

    return (
        <div >
            <Header />
            <div className="artexplore">
                {artsList.length > 0 ? (
                    artsList.map((art) => (
                        <div key={art.artId} className="card">
                            <div className="card-image">
                                <img src={art.imageUrl} alt={art.arTitle} />
                            </div>
                            <div className="card-details">
                                <h3>{art.arTitle}</h3>
                                <p><strong>Price:</strong> ${art.artCost}</p>
                                <p><strong>Dimensions:</strong> {art.artDimensions}</p>
                                <p><strong>Medium:</strong> {art.artMedium}</p>
                                <p><strong>Description:</strong> {art.artDescription}</p>
                                <p><strong>Status:</strong> {art.availStatus}</p>
                                <p><strong>Date Listed:</strong> {art.dateListed}</p>
                                <div className="card-actions">
                                    <button 
                                        className="button update-button" 
                                        onClick={() => ""}>
                                        Update
                                    </button>
                                    <button 
                                        className="button delete-button" 
                                        onClick={() => handleDeleteClick(art.artId)}>
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="no-arts">
                        <p>No Property found.</p>
                    </div>
                )}
            </div>

            {modalVisible && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>Confirm Deletion</h2>
                        <p>Are you sure you want to delete this Property?</p>
                        <div className="button-container">
                            <button className="button cancel-button" onClick={closeDeleteModal}>Cancel</button>
                            <button className="button confirm-button" onClick={confirmDelete}>Confirm Delete</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MyArts;
