import React from 'react';
import styled from 'styled-components';
import StartBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import { useSelector } from 'react-redux';
import { selectRoomID } from '../features/appSlice';
import ChatInput from './ChatInput';


function Chat() {
	const roomId = useSelector(selectRoomID)

	return (
		<ChatContainer>
			<>
				<Header>
					<HeaderLeft>
						<h4><strong>#Room Name</strong></h4>
						<StartBorderOutlinedIcon />
					</HeaderLeft>
					<HeaderRight>
						<p>
							<InfoOutlinedIcon /> Details
					</p>
					</HeaderRight>
				</Header>

				<ChatMessages>
					{/* list all messages */}
				</ChatMessages>

				<ChatInput 
					// channelName
					channelId={roomId}
				/>
			</>
		</ChatContainer>
	);
}

export default Chat;

const ChatMessages = styled.div``

const ChatContainer = styled.div`
	flex: 0.7;
	flex-grow: 1;
	overflow-y: scroll;
	margin-top: 60px;
`

const Header = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 20px;
	border-bottom: 1px solid #d3d3d3;
`

const HeaderLeft = styled.div`
	display: flex;
	align-items: center;

	> h4 {
		display: flex;
		text-transfrom: lowercase;
		margin-right: 10px;
	}

	> .MuiSvgIcon-root {
		margin-left: 10px;
		font-size: 18px;
	}
`

const HeaderRight = styled.div`
	> p {
		display: flex;
		align-items: center;
		font-size: 14px;
	}

	> .MuiSvgIcon-root {
		margin-right: 5px !important;
		font-size: 16px;
	}
`