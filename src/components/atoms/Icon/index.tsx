import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IconProps {
  icon: any;
  color?: string;
}

export const Icon = ({ icon, color }: IconProps) => (
  <FontAwesomeIcon icon={icon} color={color} />
);
