import React from 'react';
import { Text } from 'react-native';
import Icon from '@expo/vector-icons/MaterialIcons';
import { Content, StatusChecked, StatusUnchecked, StatusName } from './styles';

const OrderStatus = ({ title, isChecked }) => {
	return (
		<Content>
			{isChecked ? (
				<StatusChecked>
					<Icon name="done" size={30} color="#FFF" />
				</StatusChecked>
			) : (
				<StatusUnchecked />
			)}

			<StatusName>{title}</StatusName>
		</Content>
	);
};

export default OrderStatus;
