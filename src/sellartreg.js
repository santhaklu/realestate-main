import React, { useState } from 'react';
import './sellart.css'; // Adjust the path as necessary
import Header from './sellernav';
const ArtRegistration = () => {
    const [artTitle, setArtTitle] = useState('');
    const [artDescription, setArtDescription] = useState('');
    const [artMedium, setArtMedium] = useState('');
    const [artDimensions, setArtDimensions] = useState('');
    const [artCost, setArtCost] = useState('');
    const [imageUrl, setImageUrl] = useState(null);
    const [dateListed, setDateListed] = useState('');
    const [availStatus, setAvailStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Form data preparation for submission
        const formData = new FormData();
        formData.append('arttitle', artTitle);
        formData.append('artdescription', artDescription);
        formData.append('artmedium', artMedium);
        formData.append('artdimensions', artDimensions);
        formData.append('artcost', artCost);
        formData.append('imageurl', imageUrl);
        formData.append('datelisted', dateListed);
        formData.append('availstatus', availStatus);

        // Example submission (you need to adjust the URL and method)
        fetch('/sellartreg', {
            method: 'POST',
            body: formData,
        })
        .then(response => response.json())
        .then(data => {
            // Handle response here
            console.log(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    };

    return (
        <div class="main-content">
            <Header />
            <div className="form-container">
                <h2 style={{ textAlign: 'center' }}>Property Registration</h2>
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <div className="form-group">
                        <label htmlFor="arttitle">Proprty Title:</label>
                        <input 
                            type="text" 
                            id="arttitle" 
                            name="arttitle" 
                            value={artTitle}
                            onChange={(e) => setArtTitle(e.target.value)}
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="artdescription">Property Description:</label>
                        <textarea 
                            id="artdescription" 
                            name="artdescription" 
                            value={artDescription}
                            onChange={(e) => setArtDescription(e.target.value)}
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="artmedium">Property Medium:</label>
                        <input 
                            type="text" 
                            id="artmedium" 
                            name="artmedium" 
                            value={artMedium}
                            onChange={(e) => setArtMedium(e.target.value)}
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="artdimensions">Property Dimensions:</label>
                        <input 
                            type="text" 
                            id="artdimensions" 
                            name="artdimensions" 
                            value={artDimensions}
                            onChange={(e) => setArtDimensions(e.target.value)}
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="artcost">Proprty Cost:</label>
                        <input 
                            type="number" 
                            id="artcost" 
                            name="artcost" 
                            value={artCost}
                            onChange={(e) => setArtCost(e.target.value)}
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="imageurl">Image Upload:</label>
                        <input 
                            type="file" 
                            id="imageurl" 
                            name="imageurl" 
                            accept=".jpg, .jpeg, .png" 
                            onChange={(e) => setImageUrl(e.target.files[0])}
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="datelisted">Date Listed:</label>
                        <input 
                            type="date" 
                            id="datelisted" 
                            name="datelisted" 
                            value={dateListed}
                            onChange={(e) => setDateListed(e.target.value)}
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="availstatus">Availability Status:</label>
                        <select 
                            id="availstatus" 
                            name="availstatus" 
                            value={availStatus}
                            onChange={(e) => setAvailStatus(e.target.value)}
                            required
                        >
                            <option value="">Select Availability</option>
                            <option value="InStock">In Stock</option>
                            <option value="OutOfStock">Out of Stock</option>
                        </select>
                    </div>
                    <div className="artbutton-group">
                        <button type="submit">Register Art</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ArtRegistration;
