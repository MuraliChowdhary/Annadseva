import React from 'react';
import './EventCard.css';

const EventCard = ({ image, title, time, date, location }) => {
    return (
        <div className="event-card">
            <img src={image} alt={title} className="event-image" />
            <div className="event-details">
                <h2 className="event-title">{title}</h2>
                <p className="event-time">{time}</p>
                <p className="event-date-location">
                    <span>{date}</span>
                    <span>{location}</span>
                </p>
            </div>
        </div>
    );
};

export default EventCard;