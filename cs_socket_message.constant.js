/* CS = Client to Server*/
const CS_SOCKET_MESSAGES = {
	CS_SOCKET_CONNECTED: 'CS_SOCKET_CONNECTED',
	CS_SOCKET_DICSONNECTED: 'CS_SOCKET_DICSONNECTED',
	CS_GET_LOBBY_ONLINE_LIST: 'CS_GET_LOBBY_ONLINE_LIST',
	CS_REQUEST_TO_JOIN_GAME_ROOM: 'CS_REQUEST_TO_JOIN_GAME_ROOM',
	CS_LEAVE_GAME_ROOM: 'CS_LEAVE_GAME_ROOM',
	CS_GET_ROOMS_PLAYERS_COUNTS: 'CS_GET_ROOMS_PLAYERS_COUNTS',
};

Object.freeze(CS_SOCKET_MESSAGES);

module.exports = CS_SOCKET_MESSAGES;
