import React, { useState } from 'react';
import { Dropdown, Form } from 'react-bootstrap';
import { FaChevronDown } from 'react-icons/fa';
import './destinationDropdownStyle.css';

const DestinationDropdown = ({ onDestinationChange }) => {
  const [selectedDestination, setSelectedDestination] = useState('Choisissez votre destination');
  const [isFocused, setIsFocused] = useState(false);

  const destinations = [
    'Choisissez votre destination', // Add as an explicit option
    'Djerba', 'Sousse', 'Tunis', 'Tozeur', 'Kairouan', 'Monastir', 'Sidi Bouzid', 'Sfax',
    'Métouia', 'Kebili', 'Bizerte', 'Gabès', 'Ariana', 'Gafsa', 'Medenine', 'Kasserine',
    'Hammamet', 'Tataouine', 'Ben Arous'
  ];

  const handleSelect = (destination) => {
    setSelectedDestination(destination);
    if (onDestinationChange) {
      onDestinationChange(destination);
    }
  };

  return (
    <div className="destination-container">
      <Form.Label className="destination-label">Recherche</Form.Label>
      <Dropdown
        onToggle={(isOpen) => setIsFocused(isOpen)}
        className={`custom-destination-dropdown ${isFocused ? 'focused' : ''}`}
      >
        <Dropdown.Toggle className="custom-destination-toggle">
          {selectedDestination}
          <FaChevronDown className="chevron-icon" />
        </Dropdown.Toggle>

        <Dropdown.Menu className="custom-destination-menu">
          {destinations.map((destination) => (
            <Dropdown.Item
              key={destination}
              className={selectedDestination === destination ? 'selected' : ''}
              onClick={() => handleSelect(destination)}
            >
              {destination}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default DestinationDropdown;