import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStethoscope, faClock, faHeartbeat, faUserShield } from '@fortawesome/free-solid-svg-icons';

const FeatureCard = ({ icon, title, description }) => {
    return (
        <div className="flex w-[500px]  flex-col items-center p-20 bg-white rounded-lg shadow-lg gap-7">
            <FontAwesomeIcon icon={icon} className="text-4xl text-teal-500" />
            <div className="m-10 text-right">
                <h2 className="text-3xl font-semibold text-center">{title}</h2>
                <p className="text-center text-gray-600 ">{description}</p>
            </div>
        </div>
    );
};

export default FeatureCard;