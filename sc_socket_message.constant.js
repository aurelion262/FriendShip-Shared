/* SC = Server to Client */
const SC_SOCKET_MESSAGES = {
	SC_ADD_TO_LOBBY_ONLINE_LIST: 'SC_ADD_TO_LOBBY_ONLINE_LIST',
	SC_REMOVE_FROM_LOBBY_ONLINE_LIST: 'SC_REMOVE_FROM_LOBBY_ONLINE_LIST',
	SC_UPDATE_LOBBY_ONLINE_LIST: 'SC_UPDATE_LOBBY_ONLINE_LIST',
	SC_ADD_TO_ROOM_LIST: 'SC_ADD_TO_ROOM_LIST',
	SC_REMOVE_FROM_ROOM_LIST: 'SC_REMOVE_FROM_ROOM_LIST',
	SC_UPDATE_ROOM_LIST: 'SC_UPDATE_ROOM_LIST',
	SC_RESPOND_TO_REQUEST_TO_JOIN_ROOM: 'SC_RESPOND_TO_REQUEST_TO_JOIN_ROOM',
	SC_UPDATE_LOBBY_ROOMS: 'SC_UPDATE_LOBBY_ROOMS',
	SC_UPDATE_LOBBY_ROOM_PLAYER_COUNT: 'SC_UPDATE_LOBBY_ROOM_PLAYER_COUNT',
	SC_RESPOND_TO_GET_ROOMS_PLAYERS_COUNTS: 'SC_RESPOND_TO_GET_ROOMS_PLAYERS_COUNTS',
	SC_RESPOND_TO_LEAVE_GAME_ROOM: 'SC_RESPOND_TO_LEAVE_GAME_ROOM',
	SC_UPDATE_GAME_STATE: 'SC_UPDATE_GAME_STATE',
};

Object.freeze(SC_SOCKET_MESSAGES);

module.exports = SC_SOCKET_MESSAGES;
