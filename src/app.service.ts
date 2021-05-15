import { Injectable } from "@nestjs/common";
import pkg from "../package.json";

@Injectable()
export class AppService {
    getLandingMessage(): Record<string, any> {
        return { name: pkg.name, version: pkg.version };
    }
}
