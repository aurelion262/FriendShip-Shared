/* SC = Server to Client */
const SC_SOCKET_MESSAGES = {
	SC_SOCKET_CONNECTED: 'SC_SOCKET_CONNECTED',
	SC_SOCKET_DISCONNECTED: 'SC_SOCKET_DISCONNECTED',
	SC_ADD_TO_LOBBY_ONLINE_LIST: 'SC_ADD_TO_LOBBY_ONLINE_LIST',
	SC_REMOVE_FROM_LOBBY_ONLINE_LIST: 'SC_REMOVE_FROM_LOBBY_ONLINE_LIST',
	SC_UPDATE_LOBBY_ONLINE_LIST: 'SC_UPDATE_LOBBY_ONLINE_LIST',
	SC_ADD_TO_ROOM_LIST: 'SC_ADD_TO_ROOM_LIST',
	SC_REMOVE_FROM_ROOM_LIST: 'SC_REMOVE_FROM_ROOM_LIST',
	SC_UPDATE_ROOM_LIST: 'SC_UPDATE_ROOM_LIST',
	SC_RESPOND_TO_REQUEST_TO_JOIN_ROOM: 'SC_RESPOND_TO_REQUEST_TO_JOIN_ROOM',
};

Object.freeze(SC_SOCKET_MESSAGES);

module.exports = SC_SOCKET_MESSAGES;
