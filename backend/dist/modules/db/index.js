"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const env_manager_1 = __importDefault(require("../config/env-manager"));
class Database {
    constructor() {
        console.log('Setting up database...');
        this.pool = new pg_1.Pool({
            host: env_manager_1.default.DATABASE_HOST,
            port: env_manager_1.default.DATABASE_PORT,
            database: env_manager_1.default.DATABASE_NAME,
            user: env_manager_1.default.DATABASE_USER,
            password: env_manager_1.default.DATABASE_PASSWORD,
        });
        this.setup();
        console.log('Database setup!');
    }
    setup() {
        this.pool.on("error", (err, _) => {
            console.error("Unexpected error on idle client", err);
            process.exit(-1);
        });
    }
    query(queryStream) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield this.pool.connect();
            const res = yield client.query(queryStream);
            client.release();
            return res;
        });
    }
    close() {
        this.pool.end();
    }
}
const db = new Database();
exports.default = Object.freeze(db);
