import { ThanhHoaWebSocket } from '@thanhhoajs/websocket';
import { Logger } from '@thanhhoajs/logger';
import { roomModule } from './modules/room';

const ws = new ThanhHoaWebSocket({ port: 3000 });
const logger = Logger.get('WEBSOCKET');

// Register modules
roomModule(ws);

// Handle the connection event and close the global connection
ws.on('open', ({ path }, socket) => {
  logger.info(`New connection from ${socket.remoteAddress} to ${path}`);
});

ws.on('close', ({ path, code, reason }, socket) => {
  logger.info(`Connection closed: ${path}, code: ${code}, reason: ${reason}`);
});

// Logger
ws.logger();

logger.success(`WebSocket server is running on ${ws.hostname}:${ws.port}`);
